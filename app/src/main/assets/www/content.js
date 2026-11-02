/* Copilot Studio Coach - lesson content.
   Every fact below was checked against Microsoft Learn pages on 2026-10-30.
   Source keys map to SOURCES at the bottom. */
var D = "https://learn.microsoft.com/en-us/microsoft-copilot-studio/";
var SOURCES = {
  overview: {t: "Overview - Microsoft Copilot Studio", u: D + "fundamentals-what-is-copilot-studio"},
  licensing: {t: "Standard harness licensing", u: D + "billing-licensing"},
  quickstart: {t: "Quickstart: Create and deploy an agent (standard harness)", u: D + "fundamentals-get-started"},
  environments: {t: "Work with Power Platform environments", u: D + "environments-first-run-experience"},
  orchestration: {t: "Orchestrate agent behavior with generative AI", u: D + "advanced-generative-actions"},
  instructions: {t: "Configure high-quality instructions for generative orchestration", u: D + "guidance/generative-mode-guidance"},
  knowledge: {t: "Knowledge sources summary", u: D + "knowledge-copilot-studio"},
  topics: {t: "Create and edit topics", u: D + "authoring-create-edit-topics"},
  varsAbout: {t: "Variables overview", u: D + "authoring-variables-about"},
  vars: {t: "Work with variables", u: D + "authoring-variables"},
  entities: {t: "Use entities and slot filling in agents", u: D + "advanced-entities-slot-filling"},
  tools: {t: "Add tools to custom agents", u: D + "add-tools-custom-agent"},
  flows: {t: "Agent flows overview", u: D + "flows-overview"},
  auth: {t: "Configure user authentication in Copilot Studio", u: D + "configuration-end-user-authentication"},
  publish: {t: "Key concepts - Publish and deploy your agent", u: D + "publication-fundamentals-publish-channels"},
  teams: {t: "Connect and configure an agent for Teams and Microsoft Copilot", u: D + "publication-add-bot-to-microsoft-teams"},
  test: {t: "Test your agent", u: D + "authoring-test-bot"},
  analytics: {t: "Monitor agent performance in Copilot Studio", u: D + "analytics-overview"},
  solutions: {t: "Create and manage custom solutions", u: D + "authoring-solutions-overview"},
  dlp: {t: "Configure data policies for agents", u: D + "admin-data-loss-prevention"},
  lpCreate: {t: "Learning path: Create agents in Microsoft Copilot Studio", u: "https://learn.microsoft.com/en-us/training/paths/create-extend-custom-copilots-microsoft-copilot-studio/"},
  lpDay: {t: "Learning path: Agent in a day - Online workshop", u: "https://learn.microsoft.com/en-us/training/paths/agents-online-workshop/"},
  lpManage: {t: "Learning path: Evaluate, publish, and manage agents", u: "https://learn.microsoft.com/en-us/training/paths/evaluate-publish-manage-agents-github-copilot-copilot-studio/"}
};

var LESSONS = [
{
 id: "intro", title: "What Copilot Studio is (and how it's licensed)", mins: 5,
 summary: "The big picture: agents, workflows, harnesses, and what you need to get in.",
 body: `
<p><b>Microsoft Copilot Studio</b> is a graphical, <b>low-code</b> studio for building and managing AI-powered <b>agents</b> and <b>workflows</b>, connecting them to your organization's data, and publishing them where people already work. You open it in a browser at <code>copilotstudio.microsoft.com</code>.</p>
<h3>The building blocks</h3>
<ul>
<li><b>Agent</b> - an AI assistant that holds conversations and completes tasks. It follows your <i>instructions</i>, draws on <i>knowledge</i> you connect, and uses <i>tools</i> to take action.</li>
<li><b>Workflow</b> - an automation built in a drag-and-drop designer; steps can combine agents, tools, and logic.</li>
<li><b>Agent flow</b> - the established flow format, similar to Power Automate but native to Copilot Studio. Can run standalone or be attached to an agent as a tool.</li>
</ul>
<h3>Harnesses</h3>
<p>Whatever you build runs on a <b>harness</b> (the engine behind the scenes). It affects how the agent reasons, what it can do, and how it's billed:</p>
<ul>
<li><b>GitHub Copilot harness</b> - reasoning-heavy, multi-step work.</li>
<li><b>Customer Conversation harness</b> - customer-facing voice and chat agents.</li>
<li><b>Standard harness</b> - the classic experience: topics, generative/classic orchestration, rule-based and structured conversations.</li>
</ul>
<div class="note">Most of this course (topics, nodes, entities, the test panel) follows the <b>standard harness</b>, which is what Microsoft's "Create agents in Microsoft Copilot Studio" learning path teaches.</div>
<h3>Licensing basics</h3>
<ul>
<li><b>Copilot Credits</b> are the common currency for Copilot Studio usage (they replaced "messages" on Sept 1, 2025).</li>
<li>Ways to buy credits: <b>prepaid packs</b>, <b>pay-as-you-go</b> (an Azure subscription linked to an environment via a billing policy), and a one-year <b>prepurchase plan</b>.</li>
<li>To build, a maker needs e.g. a Copilot Studio user license (assigned by an admin), the Copilot Studio authors role, a Microsoft 365 Copilot license, or a <b>trial</b> license.</li>
<li>With a <b>trial</b> license you can build and test in the test chat, but <b>you can't publish</b>.</li>
<li>Purchased capacity is enforced monthly; unused credits <b>don't carry over</b>.</li>
</ul>
<p>Licensing changes often - always check the official Licensing Guide with your admin.</p>`,
 tryIt: `<ol><li>Open <code>copilotstudio.microsoft.com</code> and sign in with your work account.</li><li>Note which environment is selected in the environment switcher at the top.</li><li>Ask your Power Platform / M365 admin which license and environment you should use for building agents at work.</li></ol>`,
 quiz: [
  {q:"What is the common currency for Copilot Studio usage?", o:["Messages","Copilot Credits","Power Automate runs","Azure tokens"], a:1, e:"Since September 1, 2025 the common currency is Copilot Credits (it was previously messages)."},
  {q:"What can you NOT do with a Copilot Studio trial license?", o:["Create agents","Use the test chat","Publish the agent","Add knowledge"], a:2, e:"The trial lets you create and test agents in the test chat panel, but you can't publish."},
  {q:"Which harness is the classic experience built around topics and orchestration modes?", o:["GitHub Copilot harness","Customer Conversation harness","Standard harness","Azure harness"], a:2, e:"The standard harness covers rule-based agents and structured conversations using topics, with generative or classic orchestration."},
  {q:"Unused purchased Copilot Credits...", o:["Roll over to next month","Don't carry over to the next month","Convert to Azure credit","Are refunded"], a:1, e:"Capacity is enforced monthly and unused Copilot Credits don't carry over."}
 ], src:["overview","licensing","lpCreate"]
},
{
 id: "create", title: "Environments & creating your first agent", mins: 6,
 summary: "Where agents live, and building one by describing it in plain language.",
 body: `
<h3>Environments</h3>
<p>An <b>environment</b> is a Power Platform space that stores and secures your agents, apps, flows, and data. You switch environments with the <b>environment switcher</b> on the top bar.</p>
<ul>
<li>Use a <b>non-default production environment</b> for agents you'll deploy to production.</li>
<li><b>Trial environments expire after 30 days</b> and their agents are deleted - convert to production to keep them.</li>
<li>Don't build agents in the <i>Microsoft Copilot Chat</i> environment; it's for billing management.</li>
</ul>
<h3>Create an agent with natural language</h3>
<ol>
<li>On the Home page, describe what the agent should do (up to <b>1,024 characters</b>).</li>
<li>Copilot Studio's AI generates a <b>name, description, and instructions</b>, and suggests triggers, channels, knowledge, and tools. You can accept or dismiss suggestions.</li>
<li>On the agent's <b>Overview</b> page you can then edit the name, description, instructions, knowledge, tools, and <b>suggested prompts</b>.</li>
</ol>
<h3>Polish</h3>
<ul>
<li><b>Introductory message</b>: lives in the <b>Conversation Start</b> system topic. Select the greeting in the test chat to jump to it.</li>
<li><b>Suggested prompts</b>: up to <b>10</b>, shown in Teams and Microsoft Copilot (not in the test pane).</li>
<li><b>Icon</b>: PNG, under 72 KB, max 192x192 px (standard harness quickstart).</li>
</ul>
<div class="note">Microsoft's quickstart builds a "Copilot Studio Guide" agent grounded on the Copilot Studio docs - a great first exercise.</div>`,
 tryIt: `<ol><li>Create an agent by describing: <i>"Help employees learn how to create agents with Copilot Studio."</i></li><li>In Knowledge, add <code>https://learn.microsoft.com/microsoft-copilot-studio</code>.</li><li>In the test chat ask: <i>"How do I add a knowledge source?"</i></li><li>Change the greeting in the Conversation Start topic, save, and start a new test session.</li></ol>`,
 quiz: [
  {q:"How long does a trial environment last before its agents are deleted?", o:["7 days","30 days","90 days","Never"], a:1, e:"Trial environments expire after 30 days and the agents in them are deleted."},
  {q:"Where do you change the agent's introductory (greeting) message?", o:["Settings > Security","The Conversation Start system topic","The Channels page","The Monitor page"], a:1, e:"The intro message is a Message node in the Conversation Start system topic."},
  {q:"When you create an agent by describing it, what does the AI generate?", o:["Only the icon","Name, description and instructions (plus suggestions)","A Power Automate flow","A published Teams app"], a:1, e:"It generates the name, description, and instructions, and suggests triggers, channels, knowledge and tools."},
  {q:"Where can users see suggested prompts?", o:["Only in the test pane","Teams and Microsoft Copilot","Only on the demo website","Nowhere until approved"], a:1, e:"Suggested prompts appear in Teams and Microsoft Copilot; you can't see them in the test pane."}
 ], src:["quickstart","environments"]
},
{
 id: "orch", title: "Instructions & generative orchestration", mins: 7,
 summary: "How the agent decides what to do, and how to write instructions that help.",
 body: `
<h3>Generative vs. classic orchestration</h3>
<p>On the standard harness, <b>new agents use generative orchestration by default</b>. The agent picks the best <b>topics, tools, knowledge, and other agents</b> - even several in sequence for multi-intent questions - and writes the response.</p>
<table>
<tr><th></th><th>Generative</th><th>Classic</th></tr>
<tr><td>Topics chosen by</td><td>Description</td><td>Trigger phrases</td></tr>
<tr><td>Tools</td><td>Chosen by name/description</td><td>Only called from a topic</td></tr>
<tr><td>Knowledge</td><td>Searched proactively</td><td>Fallback (or from a topic)</td></tr>
<tr><td>Missing inputs</td><td>Agent generates questions</td><td>You author Question nodes</td></tr>
</table>
<p>Toggle it in <b>Settings &gt; Generative AI &gt; Orchestration</b>.</p>
<h3>Descriptions matter most</h3>
<p>The most important factor in selection is the <b>description</b> of each topic, tool, agent, and knowledge source. Write short (1-2 sentence), specific, active-voice descriptions; say what it does and even what it <i>doesn't</i> do. Avoid vague names like "Answer Question".</p>
<h3>Writing instructions</h3>
<p>Instructions (on the Overview page) are used to choose tools/knowledge, fill tool inputs, and shape the response.</p>
<ul>
<li>Only reference tools and knowledge the agent <b>actually has</b>.</li>
<li>Type <b>/</b> to reference an exact tool, topic, variable or Power Fx expression - helpful with more than five tools.</li>
<li>Use numbered steps for ordered workflows; specify formats (e.g., "show order status in a table").</li>
<li>Set guardrails: <i>"Only respond to questions about X; otherwise say you can't help."</i></li>
<li>Keep them <b>short and simple</b>. Instructions can't change the fallback message, Adaptive Card triggering, or search retrieval logic.</li>
</ul>`,
 tryIt: `<ol><li>Open your agent's Overview page and add: <i>"Only answer questions about Copilot Studio. Use a numbered list for step-by-step answers. Always cite the source."</i></li><li>Ask a multi-step question in the test chat and compare the answer before/after.</li><li>Open the <b>activity map</b> to see what the orchestrator picked.</li></ol>`,
 quiz: [
  {q:"What orchestration do new standard-harness agents use by default?", o:["Classic","Generative","None","Manual"], a:1, e:"By default, new agents use generative orchestration."},
  {q:"With generative orchestration, the most important factor for choosing a topic or tool is its...", o:["Color","Description","Creation date","Number of nodes"], a:1, e:"Descriptions (plus names and inputs/outputs) drive selection."},
  {q:"In classic orchestration, how are tools called?", o:["Automatically by description","Only explicitly from within a topic","By the user typing /","Never"], a:1, e:"In classic mode, tools can only be called explicitly from within a topic."},
  {q:"Which of these can instructions NOT change?", o:["Response format","Scope/guardrails","The default fallback message","Which tool to prefer"], a:2, e:"To change the fallback message, edit the Fallback system topic."},
  {q:"What does typing / in the instructions box do?", o:["Publishes the agent","References a specific tool, topic, variable or Power Fx expression","Clears instructions","Adds a comment"], a:1, e:"Use / to reference exact tools, topics, variables or Power Fx."}
 ], src:["orchestration","instructions"]
},
{
 id: "knowledge", title: "Knowledge sources", mins: 7,
 summary: "Grounding answers in SharePoint, websites, files, Dataverse and more.",
 body: `
<p><b>Knowledge sources</b> ground your agent's answers in real data. Add them at the agent level (Knowledge page) or inside a topic with a <b>generative answers node</b>.</p>
<h3>Supported sources</h3>
<ul>
<li><b>Public website</b> - searched via Bing, results only from your sites (generative mode: up to 25 websites). No auth.</li>
<li><b>Documents (files)</b> - uploaded and stored in Dataverse.</li>
<li><b>SharePoint</b> - uses Graph search; generative mode: up to 25 URLs.</li>
<li><b>Dataverse</b> - retrieval-augmented search over tables.</li>
<li><b>Enterprise data via connectors</b> - data indexed by Microsoft Search.</li>
</ul>
<div class="note">SharePoint, Dataverse and connector sources use the <b>user's Entra ID</b> sign-in: each user only gets answers from content they can already access.</div>
<h3>Key settings (Settings &gt; Generative AI)</h3>
<ul>
<li><b>Allow ungrounded responses</b> - when off, responses that didn't use any knowledge or tool are blocked and the Fallback topic fires.</li>
<li><b>Use information from the web / Web Search</b> - searches all Bing-indexed public sites.</li>
<li><b>Content moderation</b> - Lowest to Highest; default is <b>High</b>. Topic-level settings override agent level.</li>
<li><b>Tenant graph grounding with semantic search</b> - better SharePoint retrieval; extra cost; needs Authenticate with Microsoft.</li>
</ul>
<h3>Limits worth knowing</h3>
<ul>
<li>With more than 25 sources, generative orchestration filters them using descriptions - so describe sources well. Uploaded files don't count toward the 25.</li>
<li>Hyperlinks inside documents show as plain text in answers.</li>
<li>To boost citations, add an instruction like <i>"Always include an in-text citation."</i></li>
</ul>`,
 tryIt: `<ol><li>Add a SharePoint site you can access (e.g., a team policy library) as knowledge.</li><li>Write a clear description for it.</li><li>Ask a question only that site can answer and check the citation.</li><li>Toggle <b>Allow ungrounded responses</b> off and ask a general-knowledge question to see the Fallback.</li></ol>`,
 quiz: [
  {q:"How does a SharePoint knowledge source handle permissions?", o:["Everyone sees everything","It uses the user's Entra ID so they only see content they can access","Only admins get answers","It copies all files publicly"], a:1, e:"SharePoint, Dataverse and connector sources authenticate as the agent user."},
  {q:"What happens when 'Allow ungrounded responses' is off and no knowledge or tool was used?", o:["The answer is shown anyway","The response is blocked and Fallback triggers","The agent restarts","It searches the web"], a:1, e:"Responses from turns that didn't use a knowledge source or tool are blocked; the Fallback topic triggers."},
  {q:"Default content moderation level?", o:["Lowest","Low","Medium","High"], a:3, e:"The default moderation level is High."},
  {q:"In generative mode, how many public websites can be used?", o:["4","10","25","Unlimited"], a:2, e:"Generative mode supports up to 25 websites (classic: four)."}
 ], src:["knowledge"]
},
{
 id: "topics", title: "Topics & trigger phrases", mins: 6,
 summary: "Designing guided conversations for predictable answers.",
 body: `
<p>A <b>topic</b> is a portion of a conversation you design on the authoring canvas. It contains <b>nodes</b> that define the conversation path.</p>
<h3>System vs. custom topics</h3>
<ul>
<li><b>System topics</b> (e.g., Conversation Start, Fallback, Escalate) handle essential behaviors. You can't create or delete them, but you can turn them off or edit them - wait until you're comfortable first.</li>
<li><b>Custom topics</b> include predefined ones (Greeting, etc.) and every topic you create.</li>
</ul>
<h3>How a topic gets triggered</h3>
<ul>
<li><b>Generative orchestration</b>: the trigger shows <b>"The agent chooses"</b> and the topic's <b>description</b> is used.</li>
<li><b>Classic orchestration</b>: natural language understanding matches the user's message to <b>trigger phrases</b>. It doesn't need an exact match ("see store opening hours" can hit "check store hours").</li>
</ul>
<h3>Creating a topic</h3>
<ol>
<li>Topics page &gt; <b>Add a topic</b> &gt; <b>From blank</b> (or describe it and let AI create it).</li>
<li>In the Trigger node's Phrases panel, add <b>5 to 10 trigger phrases</b>. Short phrases beat long sentences. You can upload a text file of phrases.</li>
<li>Give it a name in Details. <b>Avoid periods (.) in topic names</b> - they block solution export.</li>
<li>Save.</li>
</ol>
<p>Advanced: the <b>code editor</b> shows a topic as YAML so you can copy topics between agents.</p>`,
 tryIt: `<ol><li>Create a topic "Office hours" from blank.</li><li>Add 6 phrases: <i>when are you open, office hours, opening times, what time do you close, hours today, are you open</i>.</li><li>Add a Message node with your hours, save, and test with "what time do you open?".</li><li>Open the code editor to see the YAML.</li></ol>`,
 quiz: [
  {q:"How many trigger phrases does Microsoft recommend per topic?", o:["1","2-3","5-10","50+"], a:2, e:"Your agent needs 5 to 10 trigger phrases to train the AI."},
  {q:"Which is true of system topics?", o:["You can delete them","You can't delete them but can turn them off","You can't edit them at all","You create them yourself"], a:1, e:"You can't create or delete system topics, but you can turn them off and edit them."},
  {q:"Why avoid periods in topic names?", o:["They slow the agent","A solution containing that agent can't be exported","Teams rejects them","They break citations"], a:1, e:"It isn't possible to export a solution with an agent whose topic names contain periods."},
  {q:"With generative orchestration on, what appears on a topic's Trigger node?", o:["User says a phrase","The agent chooses","On Error","Inactivity"], a:1, e:"'The agent chooses' appears, letting you edit the topic description."}
 ], src:["topics","orchestration"]
},
{
 id: "nodes", title: "Nodes & variables", mins: 7,
 summary: "Messages, questions, conditions - and storing what users say.",
 body: `
<h3>Common node types</h3>
<ul>
<li><b>Message</b> - send a message.</li>
<li><b>Question</b> - ask something and store the answer.</li>
<li><b>Adaptive Card</b> - interactive card with buttons/inputs.</li>
<li><b>Condition</b> - branch on a condition.</li>
<li><b>Variable management</b> - set, parse, or clear variables (including conversation history).</li>
<li><b>Topic management</b> - redirect, transfer, end topic/conversation.</li>
<li><b>Tool</b> - call a flow, connector, or other tool.</li>
<li><b>Advanced</b> - generative answers, HTTP requests, events, and more.</li>
</ul>
<h3>Variable scopes</h3>
<ul>
<li><b>Topic</b> - only in that topic (default).</li>
<li><b>Global</b> - all topics (a topic variable can be converted to global, but not back).</li>
<li><b>System</b> - built in, e.g. <code>Activity.Text</code>, <code>User.DisplayName</code>, <code>Conversation.Id</code>. In Power Fx prefix with <code>System.</code></li>
<li><b>Environment</b> - created in Power Platform; <b>read-only</b> in Copilot Studio; great for ALM.</li>
</ul>
<h3>Types</h3>
<p>String, Boolean, Number, Table, Record, DateTime, Choice, Blank. A variable's type is set the first time you assign it, then fixed.</p>
<h3>Passing data between topics</h3>
<p>Mark a variable <b>Receive values from other topics</b> to skip a question when another topic already collected it, or <b>Return values to original topics</b> to send a result back. The <b>Parse value</b> node turns JSON text into a typed Record.</p>`,
 tryIt: `<ol><li>In your topic add a Question: "What's your name?" using the <b>Person name</b> entity; rename the variable <code>customerName</code>.</li><li>Add a Message: "Nice to meet you, {customerName}!" via the {x} insert-variable button.</li><li>In the test pane open <b>Variables &gt; Test</b> and watch the value fill in.</li></ol>`,
 quiz: [
  {q:"What is the default scope for a variable you create?", o:["Global","Topic","System","Environment"], a:1, e:"Topic is the default scope."},
  {q:"Environment variables in Copilot Studio are...", o:["Editable by any maker","Read-only","Deleted on publish","Only for Teams"], a:1, e:"Environment variables are read-only in Copilot Studio; admins change them in Power Apps."},
  {q:"Which node converts a JSON string into a typed record?", o:["Message","Parse value","Redirect","Condition"], a:1, e:"The Parse value node converts values, e.g. raw JSON to a Record."},
  {q:"How do you refer to User.DisplayName in a Power Fx formula?", o:["User.DisplayName","System.User.DisplayName","Global.User","$User"], a:1, e:"Prefix system variables with System. in Power Fx."}
 ], src:["topics","varsAbout","vars"]
},
{
 id: "entities", title: "Entities & slot filling", mins: 6,
 summary: "Teaching the agent to recognize information like dates, money, and product types.",
 body: `
<p>An <b>entity</b> is a type of real-world information - a phone number, city, date, or amount of money. Entities let Question nodes extract the right value from what users type.</p>
<h3>Prebuilt entities</h3>
<p>Age, Boolean, City, Date and time, Email, Money, Number, Person name, Phone number, Zip code and more (Settings &gt; Entities). Example: "It costs 1000 dollars" with the <b>Money</b> entity saves <code>1000</code> as a number.</p>
<h3>Custom entities</h3>
<ul>
<li><b>Closed list</b> - your own list of values with <b>synonyms</b> (e.g., hiking = trekking). Turn on <b>Smart matching</b> for fuzzy matching/misspellings.</li>
<li><b>Regular expression</b> - patterns like tracking IDs or policy numbers. Use <code>(?i)</code> for case-insensitive.</li>
<li><b>Open list</b> - values filled at runtime from a table variable (max 100 entries).</li>
</ul>
<h3>Slot filling</h3>
<p><b>Slot filling</b> = putting the recognized entity value into a variable. With <b>proactive slot filling</b>, if a user already said the value ("hiking boots under $100"), the agent <b>skips</b> questions it can already answer. To always ask, set the Question's <b>Skip question</b> behavior to <b>Ask every time</b>.</p>
<div class="note">Known limitation: with generative orchestration, tool and topic <i>inputs</i> don't support custom entities yet - use a Question node to collect them.</div>`,
 tryIt: `<ol><li>Settings &gt; Entities &gt; New entity &gt; Closed list "Product type" with values like <i>Annuity</i>, <i>Life insurance</i> (add synonyms).</li><li>In a topic add a Question that identifies "Product type".</li><li>Test by typing a synonym and check the variable value.</li><li>Try answering the topic's trigger with the value already included and watch the question get skipped.</li></ol>`,
 quiz: [
  {q:"Which custom entity type is best for a pattern like a tracking ID?", o:["Closed list","Regular expression (regex)","Open list","Boolean"], a:1, e:"Regex entities match patterns such as tracking IDs, license numbers or IP addresses."},
  {q:"What does Smart matching do on a closed list entity?", o:["Encrypts values","Fuzzy matching incl. misspellings and semantic expansion","Shows buttons","Translates values"], a:1, e:"Smart matching uses fuzzy logic to autocorrect misspellings and expand matches semantically."},
  {q:"What is slot filling?", o:["Saving an extracted entity value into a variable","Booking a meeting slot","Adding a channel","Filling a knowledge base"], a:0, e:"In Copilot Studio, slot filling means placing the extracted entity value into a variable."},
  {q:"How do you force a Question node to always ask even if the value is known?", o:["Delete the variable","Set Skip question to 'Ask every time'","Turn off the topic","Use a global variable"], a:1, e:"In Question behavior, under Skip question, select Ask every time."}
 ], src:["entities","varsAbout"]
},
{
 id: "tools", title: "Tools: flows, connectors, prompts & more", mins: 7,
 summary: "Letting your agent take action in other systems.",
 body: `
<p><b>Tools</b> let an agent act - send an email, read Dataverse, post to Teams. Add them on the agent's <b>Tools</b> page &gt; <b>Add a tool</b>.</p>
<h3>Tool types</h3>
<ul>
<li><b>Connector</b> - prebuilt Power Platform connectors (thousands of services) or custom connectors.</li>
<li><b>Agent flow</b> - deterministic automation (same input, same output) with a trigger and actions. Flows with the <i>When an agent calls the flow</i> trigger can be added as tools.</li>
<li><b>Prompt</b> - a single-turn model prompt with inputs; can reference knowledge.</li>
<li><b>REST API</b>, <b>Model Context Protocol (MCP)</b> server, and <b>Computer use</b> (operate websites/desktop apps through the UI).</li>
</ul>
<h3>Configuring a tool</h3>
<ul>
<li><b>Name &amp; description</b> - the orchestrator uses these to decide when to use it.</li>
<li><b>Inputs</b> - default "Dynamically fill with AI"; the agent extracts values or asks the user. Or set a <b>Custom value</b>.</li>
<li><b>Ask the end user before running</b> - optional confirmation.</li>
<li><b>Authentication</b> - <b>End user</b> credentials (default) or <b>Maker-provided</b>.</li>
<li><b>Completion</b> - don't respond (default), generative response, a specific response, or an Adaptive Card.</li>
</ul>
<h3>Good to know</h3>
<ul>
<li>Up to <b>128 tools</b> per agent; Microsoft recommends <b>25-30</b> for best results.</li>
<li>You can convert an existing Power Automate cloud flow (in a solution) to an agent flow - one-way, billing moves to Copilot Studio capacity.</li>
<li>Testing flows from the designer or test chat doesn't consume capacity.</li>
<li>Tools blocked by your org's data policies appear disabled.</li>
</ul>`,
 tryIt: `<ol><li>Tools &gt; Add a tool &gt; Prompt. Instructions: <i>"Summarize the following text in 3 bullet points for a busy manager."</i> with one text input.</li><li>Give it a clear description and save.</li><li>In the test chat paste a paragraph and ask for a summary; check the activity map shows the prompt tool.</li></ol>`,
 quiz: [
  {q:"What is the recommended number of tools per agent for best performance?", o:["5","25-30","128","500"], a:1, e:"Up to 128 are supported, but 25-30 is recommended."},
  {q:"Which trigger lets an agent flow be added as a tool?", o:["Recurrence","When an agent calls the flow","When an email arrives","Manual button"], a:1, e:"Agent flows with the 'When an agent calls the flow' trigger can be added as tools."},
  {q:"Default authentication for a tool?", o:["Maker-provided","End user credentials","None","API key"], a:1, e:"By default, user (end user) authentication applies."},
  {q:"Agent flows are described as...", o:["Random","Deterministic","Only for Teams","Always generative"], a:1, e:"Agent flows follow a rule-based path; the same input produces the same output."}
 ], src:["tools","flows"]
},
{
 id: "auth", title: "Authentication & security", mins: 6,
 summary: "Who can talk to your agent, and whose permissions it uses.",
 body: `
<p>Set it in <b>Settings &gt; Security &gt; Authentication</b>. Changes only take effect <b>after you publish</b>.</p>
<h3>Three options</h3>
<ul>
<li><b>No authentication</b> - anyone with the link can chat. Only public info. Agent can't use tools with user credentials. Microsoft recommends applying authentication.</li>
<li><b>Authenticate with Microsoft</b> (the default for new agents) - Entra ID sign-in automatically in <b>Teams, SharePoint, Power Apps, and Microsoft Copilot</b>. Required for the built-in Teams + Microsoft 365 channel. Gives <code>User.Id</code>, <code>User.DisplayName</code> (and in the web app more profile variables). No <code>User.AccessToken</code>.</li>
<li><b>Authenticate manually</b> - Entra ID (V2 with federated credentials, certificates or client secrets) or Generic OAuth 2. Use this for other channels like custom websites. Adds <code>User.AccessToken</code> and <code>User.IsLoggedIn</code>.</li>
</ul>
<h3>Require users to sign in</h3>
<p>With manual auth you can turn on <b>Require users to sign in</b>, which creates a read-only system topic of the same name.</p>
<h3>Controlling who can chat</h3>
<p>With Authenticate with Microsoft (or manual Entra ID + required sign-in), you can use <b>agent sharing</b> to control which people in your org can chat with the agent.</p>
<div class="note">For a work agent at a regulated company, stick with Authenticate with Microsoft and share only with the right security groups. Admins can enforce authentication with a data policy.</div>`,
 tryIt: `<ol><li>Open Settings &gt; Security &gt; Authentication and note the current option.</li><li>In a topic, add a Message: "Hi {User.DisplayName}!" and test.</li><li>Use <b>Share</b> on the Overview page to see who can chat with your agent.</li></ol>`,
 quiz: [
  {q:"Which authentication option is the default for new agents?", o:["No authentication","Authenticate with Microsoft","Authenticate manually","Generic OAuth 2"], a:1, e:"Agents have Authenticate with Microsoft on by default."},
  {q:"When do authentication changes take effect?", o:["Immediately","After you publish","After 24 hours","After an admin approves"], a:1, e:"Authentication changes take effect only after you publish your agent."},
  {q:"Which option gives you User.AccessToken?", o:["No authentication","Authenticate with Microsoft","Authenticate manually","All of them"], a:2, e:"User.AccessToken isn't available with Authenticate with Microsoft; use Authenticate manually."},
  {q:"Risk of 'No authentication'?", o:["Agent can't answer","Anyone with the link can chat with the agent","It costs more","It disables topics"], a:1, e:"No authentication allows anyone who has the link to chat with your agent."}
 ], src:["auth","publish"]
},
{
 id: "publish", title: "Publishing & channels (Teams, M365 Copilot, web)", mins: 7,
 summary: "Getting your agent in front of people safely.",
 body: `
<h3>Publish</h3>
<ul>
<li>Select <b>Publish</b> and confirm. Publishing updates <b>all connected channels</b>. Edits aren't live until you publish again.</li>
<li>New content shows up in a <b>new session</b>. In Teams type <b>start over</b> to get the latest version right away.</li>
</ul>
<h3>Channels</h3>
<p>After publishing once, go to <b>Channels</b>: Teams and Microsoft Copilot, SharePoint, WhatsApp, Demo website, Custom website, Mobile app, Facebook, and Azure Bot Service channels.</p>
<h3>Teams + Microsoft 365 Copilot</h3>
<ol>
<li>Channels &gt; <b>Microsoft 365 and Microsoft Teams</b> tile. Keep <b>Make agent available in Microsoft Copilot</b> selected to appear in both.</li>
<li><b>See agent in Teams</b> installs it for you first - test it yourself before sharing.</li>
<li><b>Availability options</b>: copy an install link, <b>Show to my teammates and shared users</b> (Shared with you in the Agent Store), or <b>Show to everyone in my org</b> - which needs <b>admin approval</b> (Built for your org).</li>
</ol>
<h3>Watch-outs</h3>
<ul>
<li>The <b>demo website</b> is for stakeholders, not customers or production.</li>
<li>In Teams group chats/channels, agents can't use knowledge needing end-user auth (like SharePoint) - only 1:1 chats.</li>
<li>Microsoft Copilot doesn't support the Conversation Start topic; use suggested prompts instead.</li>
<li>Install links don't work in the Teams mobile app.</li>
<li>Admins can block channels with data policies; blocked channels show as disabled.</li>
</ul>`,
 tryIt: `<ol><li>Publish your test agent.</li><li>Channels &gt; Microsoft 365 and Microsoft Teams &gt; Add channel.</li><li>Select See agent in Teams, add it, and chat with it. In Microsoft 365 Copilot type @ and pick your agent.</li><li>Change something, republish, and type "start over" in Teams to see the update.</li></ol>`,
 quiz: [
  {q:"What does publishing update?", o:["Only Teams","All channels connected to the agent","Only the test pane","Nothing until approval"], a:1, e:"Publishing applies to all the channels associated with your agent."},
  {q:"What can you type in Teams to see the newest published version immediately?", o:["refresh","start over","/publish","reset all"], a:1, e:"Entering 'start over' starts a new session with the latest content."},
  {q:"What's required to show the agent to everyone in your org via the store?", o:["Nothing","Admin approval","A Facebook page","A trial license"], a:1, e:"Show to everyone in my org submits it for admin approval (Built for your org)."},
  {q:"Is the demo website meant for production customers?", o:["Yes","No - it's for teammates and stakeholders","Only on weekends","Only with no auth"], a:1, e:"The demo website isn't intended for production use; share it only with your team and stakeholders."}
 ], src:["publish","teams"]
},
{
 id: "test", title: "Testing & analytics", mins: 6,
 summary: "Find problems before users do, then measure what's happening.",
 body: `
<h3>The test pane</h3>
<ul>
<li>Open with <b>Test</b>. Type a message; select a reply to jump to the node that sent it.</li>
<li>With generative orchestration, the <b>activity map</b> shows the orchestrator's plan in real time.</li>
<li><b>Track between topics</b> (... menu) follows the conversation across topics.</li>
<li><b>Variables &gt; Test</b> tab shows live variable values.</li>
<li><b>Reset</b> starts a fresh conversation - saving a topic doesn't clear the chat.</li>
<li><b>Save snapshot</b> exports botContent.zip (diagnostics + content). It may contain sensitive info.</li>
<li><b>Evaluate</b>: create test sets for automated testing (preview).</li>
</ul>
<div class="note">The test pane doesn't replicate everything (e.g., inactivity triggers). Test those in a real channel like Teams.</div>
<h3>Analytics (Monitor page)</h3>
<ul>
<li>Select <b>Monitor</b> on the top bar. Test-pane activity isn't counted.</li>
<li>Data kept up to <b>360 days</b>; session details/transcripts for the last <b>28 days</b>. Times are in <b>UTC</b>.</li>
<li>An AI <b>Summary</b> of insights; active users (requires authentication); effectiveness, satisfaction.</li>
<li>Conversations time out after <b>30 minutes</b> of inactivity.</li>
<li>Topic-level Monitor shows Resolved / Escalated / Abandoned outcomes (standard harness).</li>
<li>Share view-only access with the <b>Analytics Viewer</b> role.</li>
</ul>`,
 tryIt: `<ol><li>Turn on Track between topics and run a conversation through two topics.</li><li>Open Variables &gt; Test and watch values change.</li><li>After your agent has real users, open Monitor and read the AI Summary.</li></ol>`,
 quiz: [
  {q:"What shows the generative orchestrator's plan while testing?", o:["Activity map","Monitor page","Solution explorer","Power BI"], a:0, e:"The activity map lets you follow the orchestrator's plan in real time."},
  {q:"Does test-pane activity appear on the Monitor page?", o:["Yes","No"], a:1, e:"The Monitor page doesn't show analytics for activity in the test panel."},
  {q:"How far back are session transcripts available in Copilot Studio?", o:["7 days","28 days","90 days","360 days"], a:1, e:"Session details and transcripts are available for the last 28 days (metrics up to 360 days)."},
  {q:"After how long of inactivity does a conversation time out?", o:["5 min","30 min","2 hours","24 hours"], a:1, e:"A conversation times out after 30 minutes of inactivity."}
 ], src:["test","analytics"]
},
{
 id: "govern", title: "Governance, ALM & best practices", mins: 8,
 summary: "Solutions, environments, data policies (DLP), and habits of good makers.",
 body: `
<h3>Solutions &amp; ALM</h3>
<ul>
<li>Every agent is created inside a <b>Power Platform solution</b> (the default solution unless you set a <b>preferred solution</b>).</li>
<li>To move agents between environments (dev &rarr; test &rarr; prod), create a <b>custom solution</b>, then <b>export/import</b> it or use <b>pipelines</b>.</li>
<li>Use <b>environment variables</b> to keep environment-specific values out of the agent.</li>
</ul>
<h3>Data policies (DLP)</h3>
<p>Admins set data policies in the <b>Power Platform admin center</b>, classifying connectors as <b>Business</b>, <b>Non-business</b>, or <b>Blocked</b>. Enforcement is in effect for all tenants since early 2025. Common uses:</p>
<ul>
<li>Require authentication (block "Chat without Microsoft Entra ID authentication").</li>
<li>Block specific connectors as tools, HTTP requests, or Azure Bot Service skills.</li>
<li>Block channels (Teams + M365, Direct Line/websites, Facebook, SharePoint, WhatsApp...).</li>
<li>Block event triggers.</li>
</ul>
<p>Blocked items appear <b>disabled</b>; hover for the reason, and the Publish button becomes unavailable on violation.</p>
<h3>Best practices checklist</h3>
<ul>
<li>Start small: one clear purpose, a few good knowledge sources.</li>
<li>Write specific names/descriptions for every topic, tool and knowledge source; avoid overlap.</li>
<li>Keep instructions short; add one change at a time and retest.</li>
<li>Prefer Authenticate with Microsoft and share with specific people/groups.</li>
<li>Tell users some responses are AI-generated (e.g., in Conversation Start).</li>
<li>Install it for yourself in Teams before sharing widely.</li>
<li>Use a non-default production environment and solutions for real deployments.</li>
<li>Review Monitor data regularly and improve weak topics.</li>
</ul>`,
 tryIt: `<ol><li>Open Solutions (... in the side bar) and find the solution containing your agent.</li><li>Create a custom solution and set it as your preferred solution.</li><li>Ask your admin which connectors are Business vs Blocked in your environment's data policy.</li></ol>`,
 quiz: [
  {q:"What do you need to move an agent between environments?", o:["A screenshot","A custom solution (export/import or pipelines)","A new license","Nothing - it's automatic"], a:1, e:"Create a custom solution to export, import and manage agents across environments."},
  {q:"Where do admins configure data policies?", o:["Copilot Studio test pane","Power Platform admin center","Teams app store","Azure DevOps"], a:1, e:"Data policies are configured in the Power Platform admin center."},
  {q:"Which connector can an admin block to force agents to require authentication?", o:["HTTP","Chat without Microsoft Entra ID authentication in Copilot Studio","SharePoint","Office 365 Outlook"], a:1, e:"Blocking that connector prevents publishing agents without authentication."},
  {q:"What happens to a tool blocked by your org's data policy?", o:["It works silently","It appears disabled with an info icon explaining why","It's deleted","It turns into a topic"], a:1, e:"Blocked tools appear disabled; select the info icon to see the reason."},
  {q:"Data policy connector groups are...", o:["Red, Yellow, Green","Business, Non-business, Blocked","Public, Private","Premium, Standard"], a:1, e:"Connectors are classified as Business, Non-business, or Blocked."}
 ], src:["solutions","environments","dlp","orchestration","lpManage"]
}
];

var GLOSSARY = [
 ["Activity map","Real-time view in the test pane of the plan a generative-orchestration agent follows."],
 ["Adaptive Card","An interactive card with buttons or input fields that an agent can show."],
 ["Agent","An AI assistant that holds conversations and completes tasks using instructions, knowledge and tools."],
 ["Agent flow","A deterministic automation (trigger + actions) built in Copilot Studio; can be added to an agent as a tool."],
 ["Authenticate with Microsoft","Default auth option: automatic Entra ID sign-in in Teams, SharePoint, Power Apps and Microsoft Copilot."],
 ["Channel","Where users reach your agent: Teams and Microsoft Copilot, SharePoint, websites, mobile apps, WhatsApp, etc."],
 ["Classic orchestration","Mode where the agent picks a single topic by matching trigger phrases, falling back to knowledge."],
 ["Copilot Credits","The common currency for Copilot Studio usage and billing."],
 ["Data policy (DLP)","Admin rules in the Power Platform admin center grouping connectors as Business, Non-business or Blocked."],
 ["Entity","A type of real-world information (date, money, city, custom list) the agent can recognize."],
 ["Environment","A Power Platform space that stores your agents, flows, apps and data."],
 ["Environment variable","A Power Platform value that's read-only in Copilot Studio; useful for moving between environments."],
 ["Generative answers node","A node that searches knowledge sources and generates an answer inside a topic."],
 ["Generative orchestration","Default mode where the agent selects topics, tools, knowledge and agents by their descriptions and writes the response."],
 ["Harness","The engine an agent or workflow runs on: GitHub Copilot, Customer Conversation, or standard."],
 ["Instructions","Natural-language guidance on the Overview page that shapes tool choice, input filling and responses."],
 ["Knowledge source","Data used to ground answers: websites, files, SharePoint, Dataverse, connectors."],
 ["MCP","Model Context Protocol - connect an agent to an MCP server's tools and resources."],
 ["Node","A step in a topic: message, question, condition, tool call, etc."],
 ["Power Fx","The low-code formula language used for expressions and variable values."],
 ["Slot filling","Saving a recognized entity value into a variable; proactive slot filling skips questions already answered."],
 ["Solution","A Power Platform container used to move agents and components between environments (ALM)."],
 ["System topic","Built-in topic (e.g., Conversation Start, Fallback, Escalate) you can edit or turn off but not delete."],
 ["Tool","A capability that lets the agent act: connector, agent flow, prompt, REST API, MCP, computer use."],
 ["Topic","A designed portion of a conversation made of nodes."],
 ["Trigger phrase","Example phrase that triggers a topic in classic orchestration (5-10 recommended)."]
];
