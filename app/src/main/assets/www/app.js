(function(){
"use strict";
var KEY = "csc_progress_v1";
function load(){ try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch(e){ return {}; } }
function save(p){ try { localStorage.setItem(KEY, JSON.stringify(p)); } catch(e){} }
var P = load();
function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];}); }
var view = document.getElementById("view"), titleEl = document.getElementById("title"), backBtn = document.getElementById("back");

function setChrome(title, tab, showBack){
  titleEl.textContent = title;
  backBtn.style.visibility = showBack ? "visible" : "hidden";
  var as = document.querySelectorAll("nav#tabs a");
  for (var i=0;i<as.length;i++) as[i].className = as[i].getAttribute("data-tab")===tab ? "on" : "";
  window.scrollTo(0,0);
}
function st(id){ return P[id] || {}; }
function doneCount(){ return LESSONS.filter(function(l){ return st(l.id).quizDone; }).length; }

function home(){
  setChrome("Copilot Studio Coach","home",false);
  var d = doneCount(), pct = Math.round(100*d/LESSONS.length);
  var h = '<div class="card hero"><h2>Learn Microsoft Copilot Studio</h2>'+
    '<div class="small">12 short lessons &middot; hands-on steps &middot; quizzes</div>'+
    '<div class="bar"><i style="width:'+pct+'%"></i></div>'+
    '<div class="small">'+d+' of '+LESSONS.length+' lessons completed ('+pct+'%)</div></div>';
  var next = LESSONS.filter(function(l){ return !st(l.id).quizDone; })[0];
  if (next) h += '<a class="btn" href="#/lesson/'+next.id+'">'+(d? "Continue: " : "Start: ")+esc(next.title)+'</a>';
  LESSONS.forEach(function(l,i){
    var s = st(l.id), badge = s.quizDone ? (s.best+"/"+l.quiz.length) : (s.read ? "Read" : l.mins+" min");
    h += '<div class="card"><a class="lesson" href="#/lesson/'+l.id+'"><div class="num'+(s.quizDone?' done':'')+'">'+(s.quizDone?'&#10003;':(i+1))+'</div>'+
      '<div><h3>'+esc(l.title)+'</h3><p>'+esc(l.summary)+'</p></div><span class="badge">'+badge+'</span></a></div>';
  });
  if (d) h += '<button class="btn sec" id="reset">Reset progress</button>';
  view.innerHTML = h;
  var r = document.getElementById("reset");
  if (r) r.onclick = function(){ if (confirm("Reset all progress?")) { P = {}; save(P); home(); } };
}

function srcLinks(keys){
  return '<ul class="src">'+keys.map(function(k){ var s=SOURCES[k]; return '<li><a href="'+s.u+'">'+esc(s.t)+'</a></li>'; }).join("")+'</ul>';
}

function lesson(id){
  var idx = LESSONS.findIndex(function(l){return l.id===id;}); if (idx<0) return home();
  var l = LESSONS[idx];
  setChrome("Lesson "+(idx+1),"home",true);
  P[id] = st(id); P[id].read = true; save(P);
  view.innerHTML = '<div class="card content"><h2 style="margin:0 0 4px">'+esc(l.title)+'</h2><div class="small">'+l.mins+' min read</div>'+l.body+'</div>'+
    '<div class="card content try"><h3>&#128736; Try it in Copilot Studio</h3>'+l.tryIt+'</div>'+
    '<a class="btn" href="#/quiz/'+l.id+'">Take the quiz ('+l.quiz.length+' questions)</a>'+
    '<div class="card"><b>Sources</b>'+srcLinks(l.src)+'</div>';
}

function quiz(id){
  var idx = LESSONS.findIndex(function(l){return l.id===id;}); if (idx<0) return home();
  var l = LESSONS[idx], qi = 0, score = 0;
  setChrome("Quiz: Lesson "+(idx+1),"home",true);
  function show(){
    var q = l.quiz[qi];
    var h = '<div class="card"><div class="small">Question '+(qi+1)+' of '+l.quiz.length+' &middot; Score '+score+'</div>'+
      '<div class="bar"><i style="width:'+Math.round(100*qi/l.quiz.length)+'%"></i></div><h3>'+esc(q.q)+'</h3><div id="opts">';
    q.o.forEach(function(o,i){ h += '<button class="opt" data-i="'+i+'">'+esc(o)+'</button>'; });
    h += '</div><div id="fb"></div></div>';
    view.innerHTML = h;
    var btns = view.querySelectorAll(".opt");
    for (var i=0;i<btns.length;i++) btns[i].onclick = function(){
      var pick = +this.getAttribute("data-i"), ok = pick===q.a;
      if (ok) score++;
      for (var j=0;j<btns.length;j++){ btns[j].disabled = true; if (j===q.a) btns[j].className="opt right"; else if (j===pick) btns[j].className="opt wrong"; }
      document.getElementById("fb").innerHTML = '<div class="exp"><b>'+(ok?"Correct! ":"Not quite. ")+'</b>'+esc(q.e)+'</div>'+
        '<button class="btn" id="nx">'+(qi+1<l.quiz.length?"Next question":"See results")+'</button>';
      document.getElementById("nx").onclick = function(){ qi++; if (qi<l.quiz.length) show(); else done(); };
    };
  }
  function done(){
    var s = st(id); s.quizDone = true; s.last = score; s.best = Math.max(s.best||0, score); P[id]=s; save(P);
    var nxt = LESSONS[idx+1], pass = score/l.quiz.length >= 0.75;
    view.innerHTML = '<div class="card" style="text-align:center"><div class="small">Your score</div><div class="score">'+score+' / '+l.quiz.length+'</div>'+
      '<p>'+(pass?"Great work! &#127881;":"Review the lesson and try again - you've got this.")+'</p><div class="small">Best: '+s.best+' / '+l.quiz.length+'</div></div>'+
      '<a class="btn sec" href="#/quiz/'+id+'?r='+Date.now()+'">Retake quiz</a>'+
      '<a class="btn sec" href="#/lesson/'+id+'">Review lesson</a>'+
      (nxt? '<a class="btn" href="#/lesson/'+nxt.id+'">Next: '+esc(nxt.title)+'</a>' : '<a class="btn" href="#/">Back to lessons</a>');
  }
  show();
}

function glossary(){
  setChrome("Glossary","glossary",false);
  view.innerHTML = '<input class="search" id="q" placeholder="Search terms..." aria-label="Search glossary"><div class="card"><dl id="gl"></dl></div>';
  function render(f){
    f = (f||"").toLowerCase();
    document.getElementById("gl").innerHTML = GLOSSARY.filter(function(g){ return !f || (g[0]+" "+g[1]).toLowerCase().indexOf(f)>=0; })
      .map(function(g){ return '<dt>'+esc(g[0])+'</dt><dd>'+esc(g[1])+'</dd>'; }).join("") || '<dd>No matches.</dd>';
  }
  document.getElementById("q").oninput = function(){ render(this.value); };
  render("");
}

function about(){
  setChrome("Sources & About","about",false);
  view.innerHTML = '<div class="card"><h3 style="margin-top:0">About</h3><p>Copilot Studio Coach is an offline study guide built for Patrick Hall. Content was written from Microsoft Learn documentation checked on <b>October 30, 2026</b>. Copilot Studio changes often and some features are in preview - always confirm in the official docs and with your admins before relying on a detail at work.</p>'+
    '<p class="small">Not affiliated with or endorsed by Microsoft. Links open in your browser (internet needed).</p></div>'+
    '<div class="card"><b>Microsoft Learn training paths</b>'+srcLinks(["lpCreate","lpDay","lpManage"])+'</div>'+
    '<div class="card"><b>Documentation used</b>'+srcLinks(Object.keys(SOURCES).filter(function(k){return k.indexOf("lp")!==0;}))+'</div>'+
    '<div class="card small">Progress is stored only on this device. Version 1.0</div>';
}

function route(){
  var h = location.hash.replace(/^#/,"").split("?")[0] || "/";
  var m;
  if ((m = h.match(/^\/lesson\/(\w+)/))) lesson(m[1]);
  else if ((m = h.match(/^\/quiz\/(\w+)/))) quiz(m[1]);
  else if (h==="/glossary") glossary();
  else if (h==="/about") about();
  else home();
}
backBtn.onclick = function(){ history.back(); };
window.addEventListener("hashchange", route);
window.addEventListener("error", function(e){ window.__err = (window.__err||[]).concat(String(e.message)); });
route();
})();
