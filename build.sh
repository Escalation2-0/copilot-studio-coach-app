#!/usr/bin/env bash
# Builds Copilot Studio Coach APK with plain Android SDK tools (no Gradle needed).
set -euo pipefail
: "${KS_PASS:?Set KS_PASS to your keystore password before running}"
# Requires tools/ with JDK 17 and Android SDK (platform android-34, build-tools 34.0.0); not included in this repo.
ROOT="$(cd "$(dirname "$0")" && pwd)"
export JAVA_HOME="$(ls -d "$ROOT"/tools/jdk-17*)"
export PATH="$JAVA_HOME/bin:$PATH"
SDK="$ROOT/tools/sdk"; BT="$SDK/build-tools/34.0.0"; JAR="$SDK/platforms/android-34/android.jar"
SRC="$ROOT/app/src/main"; OUT="$ROOT/build"
rm -rf "$OUT"; mkdir -p "$OUT/res" "$OUT/gen" "$OUT/classes" "$OUT/dex"
"$BT/aapt2" compile --dir "$SRC/res" -o "$OUT/res/res.zip"
"$BT/aapt2" link -o "$OUT/base.apk" -I "$JAR" --manifest "$SRC/AndroidManifest.xml" \
   -A "$SRC/assets" --java "$OUT/gen" "$OUT/res/res.zip" --min-sdk-version 24 --target-sdk-version 34 \
   --version-code 1 --version-name 1.0
javac -source 8 -target 8 -Xlint:-options -bootclasspath "$JAR" -classpath "$JAR" -d "$OUT/classes" \
   $(find "$SRC/java" "$OUT/gen" -name '*.java')
"$BT/d8" --release --min-api 24 --lib "$JAR" --output "$OUT/dex" $(find "$OUT/classes" -name '*.class')
cp "$OUT/base.apk" "$OUT/unsigned.apk"
python3 -c "import zipfile,sys; z=zipfile.ZipFile(sys.argv[1],'a',zipfile.ZIP_DEFLATED); z.write(sys.argv[2],'classes.dex'); z.close()" "$OUT/unsigned.apk" "$OUT/dex/classes.dex"
"$BT/zipalign" -f -p 4 "$OUT/unsigned.apk" "$OUT/aligned.apk"
KS="$ROOT/keystore/coach-release.jks"
if [ ! -f "$KS" ]; then
  mkdir -p "$ROOT/keystore"
  keytool -genkeypair -keystore "$KS" -alias coach -keyalg RSA -keysize 2048 -validity 10000 \
    -storepass "$KS_PASS" -keypass "$KS_PASS" -dname "CN=Patrick Hall, O=Copilot Studio Coach, C=US"
fi
"$BT/apksigner" sign --ks "$KS" --ks-key-alias coach --ks-pass env:KS_PASS --key-pass env:KS_PASS \
   --out "$OUT/CopilotStudioCoach.apk" "$OUT/aligned.apk"
"$BT/apksigner" verify --verbose --print-certs "$OUT/CopilotStudioCoach.apk"
echo "BUILD OK: $OUT/CopilotStudioCoach.apk"
