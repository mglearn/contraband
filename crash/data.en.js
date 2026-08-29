/* Contraband — Crash (Jerry Spinelli). English source data.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; plot, character, and chronology details were
   verified for accuracy and are used only to build original, transformative
   analysis. Standards are good-faith Common Core alignment; TEKS/ELPS flagged
   "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles. */
window.__ROOM__ = {
  id: "crash",
  storageKey: "contraband.crash.v1",

  ui: {
    "skip": "Skip to the activity",
    "brand.tag": "Read · Reason · Play",
    "reset": "Reset",
    "reset.confirm": "Reset this room and clear saved progress on this device?",
    "footer.tagline": "No logins · no accounts · no data collected · runs entirely in your browser.",
    "footer.privacy": "Privacy & compliance",
    "footer.back": "All Contraband rooms",
    "review.flag": "Needs review",
    "progress.chip": "{n}/{total} activities done",

    "nav.enter": "Enter the Story", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Story",
    "enter.by": "by {a}",
    "enter.spoiler": "Spoiler level",
    "enter.access": "Text access",
    "enter.copyright": "Copyright",
    "enter.contentReview": "Content-review note",
    "enter.contentDefault": "Districts should review edition, maturity level, local policy, instructional purpose, student needs, and community expectations.",
    "enter.goals": "Learning goals",
    "enter.stages": "When to use this room",
    "enter.stage.before": "Before reading",
    "enter.stage.during": "During reading",
    "enter.stage.after": "After reading",
    "enter.aceEyebrow": "Thinking routine",
    "enter.ace": "The ACE Framework",
    "enter.aceIntro": "Every task in this room asks you to Articulate, Connect, and Extend your thinking.",
    "enter.readListen": "Read & Listen",
    "enter.readListenTitle": "Get the text",
    "enter.readListenNote": "This is a copyrighted novel; students need lawful access to their own copy. This activity does not link to or reproduce the text.",
    "enter.read": "Find the book",
    "enter.listen": "Audiobook",
    "enter.readAloud": "Use your class's licensed copy or audiobook.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Crash",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Coogan Family Keepsakes",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the novel",
    "relic.q.significance": "What it reveals about the story's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Coogan Case File",
    "ctob.progress": "{n} of {total} locks opened",
    "ctob.done": "Every lock is open. The case is solved — with evidence.",
    "ctob.lock": "Lock {n}",
    "lock.digit": "Number lock", "lock.word": "Word lock", "lock.mc": "Choice lock", "lock.sequence": "Sequence lock",
    "ctob.correct": "Open — the evidence supports it.",
    "ctob.enter": "Enter your answer",
    "ctob.check": "Check", "ctob.wrong": "Not yet — re-read the evidence and try again.",
    "ctob.hint": "Show a hint",
    "seq.up": "Move up", "seq.down": "Move down",

    "arcade.eyebrow": "Play the Arcade Game",
    "arcade.title": "A Real Idea or Crash's Story?",
    "arcade.default": "Sort each statement by whether it is a real idea the novel explores or part of Crash's specific invented story.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Statements to sort",
    "arcade.followup": "Discuss / write",

    "analysis.eyebrow": "Analyze the Text",
    "analysis.title": "Literary Analysis",
    "analysis.intro": "Five evidence questions, then written responses. Every question rewards the best-supported reading.",
    "analysis.mc": "Question {n}",
    "analysis.check": "Check my answers",
    "analysis.answerAll": "Answer all five questions first.",
    "analysis.score": "{c} of {total} best-supported answers.",
    "analysis.written": "Written responses",
    "analysis.writtenIntro": "These stay on your device. Print them from the Print Materials tab.",
    "analysis.short": "Short response {n}",
    "analysis.paragraph": "Evidence paragraph",
    "analysis.aceReflection": "ACE reflection",
    "analysis.localNote": "Your writing is never sent anywhere — it stays in this browser.",

    "extend.eyebrow": "Extend the Idea",
    "extend.title": "Then into Now",
    "extend.format": "Format",
    "extend.evidence": "The idea from the novel I am building on",
    "extend.transfers": "What transfers to the present",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My evidence-based comparison",
    "extend.localNote": "Your response stays on this device. You own it.",

    "genai.eyebrow": "Gen AI Thinking Partner",
    "genai.title": "Optional Gen AI Support",
    "genai.rule": "Think first. Use Gen AI after effort, not before it. Never let Gen AI replace your reasoning.",
    "genai.enable": "Teacher: enable Gen AI supports on this device",
    "genai.enableNote": "Off by default. This setting is stored only in this browser and is never transmitted.",
    "genai.warning": "Never paste names, private information, or another person's writing. Use only district-approved tools.",
    "genai.prompts": "Copyable prompts",
    "genai.copy": "Copy", "genai.copied": "Copied ✓",
    "genai.receipt": "Gen AI Thinking Receipt",
    "genai.receiptIntro": "If you use Gen AI, complete this receipt so your reasoning stays yours. It stays on this device.",
    "genai.before": "Before Gen AI", "genai.during": "Gen AI interaction", "genai.after": "After Gen AI",
    "r.first": "1. My first explanation", "r.evidence": "2. My initial evidence", "r.question": "3. My unanswered question",
    "r.asked": "4. What I asked", "r.suggested": "5. What the tool suggested",
    "r.accepted": "6. What I accepted", "r.changed": "7. What I changed", "r.rejected": "8. What I rejected",
    "r.why": "9. Why I made those choices", "r.textEvidence": "10. My evidence from the text", "r.final": "11. My final ACE response",
    "genai.altTitle": "Non-AI alternative",
    "genai.alt": "Prefer no AI? Trade receipts with a partner and interview each other with the same questions, or use the printed thinking sheet.",

    "print.eyebrow": "Print Student Materials",
    "print.title": "Printable Packet",
    "print.intro": "Print a no-login paper packet for this room. Use your browser's print dialog to save as PDF.",
    "print.item.vocab": "Vocabulary reference",
    "print.item.relic": "Keepsakes evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Then-into-now organizer",
    "print.item.ace": "ACE organizer",
    "print.item.receipt": "Gen AI thinking receipt",
    "print.button": "Print / Save as PDF",
    "print.answer": "Answer:",

    "teacher.eyebrow": "Teacher Guide",
    "teacher.title": "For the Educator",
    "teacher.pathways": "Assignment pathways",
    "teacher.standards": "Standards & supports",
    "teacher.standardsNote": "This room is aligned to — not reproduced from — the standards below. Confirm codes against your current adoption.",
    "teacher.framework": "Framework", "teacher.codes": "Alignment",
    "teacher.answerKeys": "Answer keys (educator reference)",
    "teacher.answerNote": "These are provided for teachers. Assign the student tabs before revealing keys.",
    "teacher.reviewItems": "Items to verify before teaching",
    "path.quick": "Quick Play", "path.quick.time": "15–25 minutes",
    "path.quick.body": "Vocabulary preview, arcade game, five-question check, one Articulate response.",
    "path.invest": "Investigation", "path.invest.time": "30–45 minutes",
    "path.invest.body": "Relic Room, evidence organizer, one Connect response, optional discussion.",
    "path.complete": "Complete Case", "path.complete.time": "60–90 minutes / multiple periods",
    "path.complete.body": "Vocabulary, Relic Room, breakout, arcade, analysis, extend task, ACE reflection."
  },

  content: {
    meta: {
      title: "Crash",
      author: "Jerry Spinelli",
      grades: "Grades 6–8",
      genre: "Realistic fiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the novel (print, e-book, or licensed audiobook). This activity does not reproduce or replace the book.",
      copyright: "Crash is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "The novel centers on bullying and 'tough-guy' pressure: the narrator repeatedly torments a gentle classmate and uses cruelty to feel powerful before he changes. It also portrays a family crisis when a beloved grandfather has a stroke. Preview carefully, prepare students, and align with local policy.",
      disclaimer: "This activity is an independent educational companion to Crash by Jerry Spinelli. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY-NC 4.0. Crash, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "../images/crash/hero.webp",
      heroAlt: "An instructional illustration evoking Crash — a football helmet resting on a suburban front lawn beside a vegetable-garden button and a bare-footed racing track, under a warm autumn sky."
    },
    hook: "John 'Crash' Coogan is fast, strong, and sure that winning is everything. He earned his nickname the day he flattened a cousin in a plastic football helmet, and he has been knocking people over ever since. His favorite target is Penn Webb — a small, cheerful, button-wearing vegetarian from a Quaker family who refuses to fight back. But over one season, a family crisis and a friendship Crash never expected begin to crack the tough-guy armor he has worn his whole life.",
    goals: [
      "Explain why Crash bullies Penn Webb and what the narrator's cruelty is really trying to prove.",
      "Trace how a family crisis — Scooter's stroke — begins to change what Crash values and how he treats people.",
      "Analyze how Penn Webb's kindness, patience, and refusal to compete on Crash's terms slowly reach Crash.",
      "Distinguish the real ideas the novel explores from the specific, invented events of Crash's story, and carry the novel's questions into your own life."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a first-person narrator who is not always likable or reliable.",
        "Discuss: Why do some people act tough or put others down? What are they usually afraid of?"
      ],
      during: [
        "Use the Keepsakes to slow down and read key objects and moments closely.",
        "Track each moment that nudges Crash toward seeing Penn — and himself — differently."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the novel's ideas to your own community."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Crash treats Penn Webb the way he does at the start of the novel. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments that show Crash changing (for example, something about Scooter and something about Penn). Explain how comparing them changes your understanding of the narrator." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a question the novel raises to your own life. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "narrator", def: "The character or voice who tells the story; in Crash, the narrator is Crash himself, so we see everything through his opinions.", example: "Crash telling us his own version of why he flattens people.", nonexample: "A neutral outsider who reports every character's side fairly.", context: "Because the narrator is Crash, readers have to notice when his view of Penn does not match Penn's actual behavior." },
      { term: "bully", def: "Someone who repeatedly uses strength, words, or status to hurt, scare, or control a person who is treated as weaker.", example: "Crash targeting Penn Webb again and again for being small and different.", nonexample: "A classmate who competes hard in a game but treats opponents with respect.", context: "For most of the book, Crash bullies Penn because Penn will not react the way Crash expects." },
      { term: "empathy", def: "The ability to imagine and share how another person feels, and to let that feeling guide how you treat them.", example: "Crash finally beginning to picture how Penn or Scooter actually feels.", nonexample: "Seeing someone hurt and only thinking about how it affects you.", context: "The novel is largely about empathy slowly growing in a narrator who started with almost none." },
      { term: "conformity", def: "Changing your behavior to match a group so you fit in, even when it goes against what is right.", example: "Going along with teasing someone just because your friends do.", nonexample: "Standing by a classmate everyone else mocks.", context: "Part of Crash's cruelty is about looking tough and fitting the 'winner' image he thinks he needs." },
      { term: "pacifist", def: "A person who refuses to use violence and tries to settle conflict peacefully.", example: "Penn Webb, raised Quaker, who will not fight back against Crash.", nonexample: "Someone who answers every insult with a shove.", context: "Penn's refusal to fight confuses Crash, because it takes away the reaction he is used to getting." },
      { term: "Quaker", def: "A member of a Christian group (the Religious Society of Friends) known for simple living, peace, and equality.", example: "Penn Webb's family, whose beliefs shape his gentleness and his buttons.", nonexample: "A family that settles arguments by trying to dominate others.", context: "Penn's Quaker background helps explain why he stays kind and calm even when Crash pushes him." },
      { term: "reconciliation", def: "Repairing a broken relationship and making peace after harm or conflict.", example: "Crash reaching toward friendship with Penn after treating him badly.", nonexample: "Pretending nothing happened while still holding a grudge.", context: "The ending moves toward reconciliation as Crash chooses connection over always winning." },
      { term: "stroke", def: "A sudden medical event when blood flow to part of the brain is cut off, which can change how a person moves or speaks.", example: "What happens to Scooter, Crash's grandfather, partway through the novel.", nonexample: "A minor cold that clears up in a few days.", context: "Scooter's stroke is the family crisis that shakes Crash and starts changing his priorities." },
      { term: "sportsmanship", def: "Treating opponents, teammates, and the game itself with fairness and respect, win or lose.", example: "Choosing at the end to let a race matter less than a friend.", nonexample: "Cheating or humiliating an opponent just to win.", context: "By the close of the novel, Crash begins to value people over the scoreboard — a shift in what winning means." }
    ],

    relic: {
      name: "The Coogan Family Keepsakes",
      intro: "Seven instructional reconstructions of objects and moments from Crash — teaching recreations, not artwork from the book. Investigate what each is, its role in the novel, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "helmet", name: "The Plastic Football Helmet", image: "images/helmet.webp",
          clues: ["As a small child, the narrator wore a toy football helmet almost everywhere.", "He got his nickname the day he lowered his head and knocked over a cousin who came to visit.", "From then on, he is proud that people call him 'Crash' instead of John."],
          identify: { q: "What is this object?", choices: ["A toy football helmet tied to how the narrator got the nickname 'Crash'", "A real helmet from a professional team", "A gift from Penn Webb", "A prize Crash won at a race"] },
          purpose: { q: "What is its role in the novel?", choices: ["It marks the start of Crash's identity as someone who wins by hitting and dominating", "It teaches Crash to play football safely", "It is a costume he wears only once", "It has no importance to the story"] },
          significance: { q: "What does the nickname reveal about the narrator?", choices: ["That he has built his whole self-image around being tough and knocking others down", "That he is gentle and quiet by nature", "That he dislikes sports", "That he is afraid of contact"] },
          reveals: "How early a kid can start defining himself by dominating others.",
          conceals: "The insecurity underneath the tough-guy nickname he is so proud of.",
          ace: "Articulate what the helmet and nickname stand for; connect them to how Crash treats Penn; extend it to how labels shape who we think we are."
        },
        {
          id: "button", name: "Penn Webb's Peace Button", image: "images/button.webp",
          clues: ["Penn Webb often wears a button with a friendly or peaceful message.", "He is small, cheerful, vegetarian, and comes from a Quaker family.", "When Crash mocks or shoves him, Penn does not hit back."],
          identify: { q: "What does the button represent about Penn?", choices: ["Penn's gentle, peace-minded values and his refusal to meet cruelty with cruelty", "That Penn wants to fight Crash", "That Penn is trying to look tough", "That Penn is bragging about winning"] },
          purpose: { q: "What is its role in the novel?", choices: ["It marks Penn as the opposite of Crash — and a mystery Crash cannot bully into changing", "It is a random accessory with no meaning", "It shows Penn is on Crash's team", "It proves Penn is weak and fearful"] },
          significance: { q: "What does Crash's reaction to it reveal?", choices: ["That Penn's calm difference unsettles Crash because it will not give him the reaction he wants", "That Crash secretly owns the same button", "That Crash admires it right away", "That the button means nothing to anyone"] },
          reveals: "How quiet, principled kindness can be its own kind of strength.",
          conceals: "That Crash is slowly, secretly drawn to the very qualities he makes fun of.",
          ace: "Articulate what Penn's button stands for; connect it to why Penn refuses to fight; extend it to what real strength looks like."
        },
        {
          id: "garden", name: "The Backyard Vegetable Garden", image: "images/garden.webp",
          clues: ["Penn's family and Crash's grandfather both care about growing things and living simply.", "Scooter, Crash's grandfather, plants and tends a garden after he moves in.", "Working the soil is shown as patient, unglamorous, and full of care."],
          identify: { q: "What does the garden represent in the novel?", choices: ["A quieter set of values — patience, care, and connection — set against Crash's win-at-all-costs world", "A place Crash goes to train for football", "A business the family runs for money", "A setting with no meaning in the story"] },
          purpose: { q: "What is its role in the novel?", choices: ["It links Scooter and the Webbs to values Crash slowly starts to notice and respect", "It is only where the family stores tools", "It exists to embarrass Crash", "It has no effect on the plot"] },
          significance: { q: "What does Crash's changing view of the garden reveal?", choices: ["That he is beginning to value care and connection over constant competition", "That he wants to sell the vegetables", "That gardening is pointless to everyone", "That the garden was never important"] },
          reveals: "How slow, caring work can model a different way to live than always competing.",
          conceals: "How much Crash's tough front has kept him from noticing what he actually values.",
          ace: "Articulate what the garden stands for; connect it to Scooter and the Webbs; extend it to what a person plants and tends in their own life."
        },
        {
          id: "scooter", name: "Scooter, the Grandfather", image: "images/scooter.webp",
          clues: ["Crash's grandfather, called Scooter, comes to live with the Coogan family.", "He is warm, tells lively stories, cooks, and pays real attention to Crash.", "Partway through the novel, Scooter has a stroke, and the family is shaken."],
          identify: { q: "Who is Scooter?", choices: ["Crash's beloved grandfather, whose closeness and later illness deeply affect him", "A rival football coach", "A new neighbor Crash dislikes", "One of Crash's classmates"] },
          purpose: { q: "What is his role in the novel?", choices: ["He gives Crash real, patient attention and becomes the center of the family crisis", "He trains Crash to bully others", "He is only a minor background figure", "He is Penn Webb's grandfather"] },
          significance: { q: "What does Scooter's stroke reveal about Crash?", choices: ["That fear of losing someone he loves can crack Crash's tough-guy shell and change his priorities", "That Crash does not care about family", "That nothing can ever affect Crash", "That the stroke has no impact on the story"] },
          reveals: "How a family crisis can reorder what a person truly cares about.",
          conceals: "How much Crash has needed the steady attention Scooter gives him.",
          ace: "Articulate who Scooter is to Crash; connect his stroke to Crash's change; extend it to how a crisis can change what people value."
        },
        {
          id: "sneaker", name: "The Racing Sneaker", image: "images/sneaker.webp",
          clues: ["Crash is a natural, gifted athlete who loves to win races and games.", "A big race matters a lot to him and to Mike Deluca, his competitive friend.", "By the end, Crash makes a choice about a race that would once have been unthinkable to him."],
          identify: { q: "What does the racing sneaker represent?", choices: ["Crash's talent and his hunger to win — the thing he must eventually weigh against friendship", "A gift Crash gives to Penn early on", "A prize that means nothing to Crash", "Equipment Crash refuses to use"] },
          purpose: { q: "What is its role in the novel?", choices: ["It sets up the final test of what Crash values more: winning or a person he has come to care about", "It shows Crash is a poor athlete", "It ends the friendship with Penn", "It is unrelated to the ending"] },
          significance: { q: "What does Crash's final choice about the race reveal?", choices: ["That he now values a friend more than proving he is the fastest", "That winning is still all that matters to him", "That he never cared about racing", "That the race changed nothing"] },
          reveals: "How growth can mean choosing people over the scoreboard.",
          conceals: "How hard that choice is for someone who built his whole identity on winning.",
          ace: "Articulate what the race means to Crash; connect his final choice to his change; extend it to when winning matters less than a relationship."
        },
        {
          id: "mike", name: "Mike Deluca, the Friend", image: "images/mike.webp",
          clues: ["Mike Deluca is Crash's longtime friend and partner in teasing Penn.", "Mike keeps pushing the same competitive, mean-spirited attitude throughout the book.", "As Crash begins to change, he and Mike start to see things differently."],
          identify: { q: "Who is Mike Deluca?", choices: ["Crash's competitive friend who shares and encourages his mean streak", "Penn Webb's older brother", "A teacher at Crash's school", "A member of Penn's Quaker family"] },
          purpose: { q: "What is his role in the novel?", choices: ["He shows the peer pressure and 'tough-guy' attitude Crash has to grow past", "He is a quiet peacemaker like Penn", "He is a background character with no effect", "He convinces Crash to be kinder from the start"] },
          significance: { q: "What does the drift between Crash and Mike reveal?", choices: ["That real change can mean outgrowing friends who pull you toward your worst self", "That Crash never had any friends", "That Mike changes exactly as Crash does", "That peer pressure plays no part in the story"] },
          reveals: "How the crowd we run with shapes how we treat others.",
          conceals: "How lonely it can feel to change when a friend stays the same.",
          ace: "Articulate who Mike is to Crash; connect Mike to the pressure to act tough; extend it to how friends push us toward or away from our best selves."
        },
        {
          id: "letter", name: "Penn Webb's Family Story", image: "images/letter.webp",
          clues: ["Penn's family treasures a long, humble family history they are proud of.", "One prized keepsake connects Penn to an ancestor and a cross-country journey.", "Penn shares this history with pride, without needing to show off."],
          identify: { q: "What does Penn's family story represent?", choices: ["A source of quiet pride and identity rooted in family, not in winning or status", "A trophy Penn won in a race", "A reason for Penn to look down on Crash", "A story with no meaning to Penn"] },
          purpose: { q: "What is its role in the novel?", choices: ["It shows a different way to feel proud — through belonging and values, not domination", "It proves Penn's family is wealthy", "It makes Penn want to fight Crash", "It has nothing to do with the story's ideas"] },
          significance: { q: "What does Crash's growing interest in it reveal?", choices: ["That he is beginning to respect a kind of worth that has nothing to do with winning", "That he wants to steal Penn's keepsake", "That he finds the story boring", "That family means nothing in the novel"] },
          reveals: "How identity can rest on belonging and values rather than on beating others.",
          conceals: "How much Crash has measured his own worth only by winning.",
          ace: "Articulate what Penn's family story means to him; connect it to Crash's idea of worth; extend it to where your own sense of worth comes from."
        }
      ]
    },

    ctob: {
      name: "The Coogan Case File",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "What is the narrator's nickname, the one he is proud of? (one word)",
          evidence: ["He earned it as a little kid by lowering his head and knocking someone over.", "He likes it far better than his real first name, John.", "It captures his whole style of winning by hitting hard."],
          hints: ["It describes a hard collision.", "It starts with 'Cr…'.", "The nickname is Crash."],
          answer: "Crash"
        },
        {
          type: "word",
          prompt: "What is the last name of the gentle, button-wearing classmate Crash targets? (one word)",
          evidence: ["He is small, cheerful, vegetarian, and comes from a Quaker family.", "He refuses to fight back no matter how Crash treats him.", "His first name is Penn."],
          hints: ["It is also a word for a spider's home or the internet.", "It starts with 'We…'.", "The name is Webb."],
          answer: "Webb"
        },
        {
          type: "mc",
          prompt: "Why does Crash bully Penn Webb, according to the best reading of the novel?",
          options: [
            "Penn is different and gentle, and picking on him lets Crash feel tough and powerful.",
            "Penn attacked Crash first and Crash is only defending himself.",
            "A teacher ordered Crash to test Penn.",
            "Penn is a much better athlete than Crash and Crash is jealous of his trophies."
          ],
          hints: ["Think about what Crash is trying to prove about himself.", "Which option is about Crash's need to feel tough?"]
        },
        {
          type: "word",
          prompt: "What do people call Crash's grandfather, who moves in with the family? (one word)",
          evidence: ["He is warm, tells lively stories, and pays close attention to Crash.", "He plants and tends a garden after he arrives.", "Later in the novel he has a stroke."],
          hints: ["It sounds like a small kick-scooter.", "It starts with 'Sc…'.", "The name is Scooter."],
          answer: "Scooter"
        },
        {
          type: "sequence",
          prompt: "Put these events of the novel in the order they happen, earliest first.",
          items: [
            "As a small child, the narrator knocks over a cousin and earns the nickname 'Crash.'",
            "Penn Webb moves in nearby, and Crash begins teasing and bullying him.",
            "Scooter comes to live with the family and later has a stroke.",
            "Crash's values shift, and he makes a choice that puts a friend ahead of winning."
          ],
          hints: ["The nickname comes from early childhood.", "The bullying of Penn comes before Scooter's stroke.", "Crash's change and his final choice come last."]
        },
        {
          type: "mc",
          prompt: "What most clearly begins to change Crash over the course of the novel?",
          options: [
            "A family crisis with Scooter and his growing respect for Penn crack his tough-guy shell.",
            "He loses every game and gives up sports entirely.",
            "His family moves far away to a new city.",
            "A coach forces him to apologize and nothing else changes."
          ],
          hints: ["Think about the grandfather and the classmate Crash once mocked.", "It is about empathy growing, not about giving up sports."]
        }
      ]
    },

    arcade: {
      name: "A Real Idea or Crash's Story?",
      instruction: "Crash explores real ideas about people through one invented boy's story. Sort each statement: is it A REAL IDEA the novel examines, or CRASH'S STORY — a specific event from the fictional plot? Reasoning earns the points.",
      buckets: [
        { id: "concept", label: "A real idea", short: "Idea" },
        { id: "story", label: "Crash's story", short: "Story" }
      ],
      cards: [
        { text: "People sometimes bully others to feel powerful or to look tough in front of a group.", bucket: "concept", why: "This is a real idea about why bullying happens, not a specific plot event." },
        { text: "A crisis in a family can change what a person values and how they treat others.", bucket: "concept", why: "This is a general truth the novel explores through its characters." },
        { text: "Empathy — really imagining how someone else feels — can be learned, even late.", bucket: "concept", why: "This is a real idea about growth, not a single scene." },
        { text: "Refusing to answer cruelty with cruelty can be its own form of strength.", bucket: "concept", why: "This is a real idea the story dramatizes, not one plot moment." },
        { text: "A boy called Crash torments a Quaker classmate named Penn Webb.", bucket: "story", why: "These specific characters and this bullying are part of the invented plot." },
        { text: "Crash's grandfather, Scooter, moves in and later has a stroke.", bucket: "story", why: "This specific event belongs to Crash's fictional story." },
        { text: "Penn wears a peace button and will not fight back when Crash shoves him.", bucket: "story", why: "This particular character detail is part of the novel's plot." },
        { text: "By the end, Crash makes a choice about a race that puts a friend first.", bucket: "story", why: "This specific climax is part of Spinelli's invented story." }
      ],
      followup: "Why might Spinelli explore big ideas about bullying and empathy through one narrator's specific story? What can Crash's story show a reader that a list of lessons cannot?"
    },

    analysis: {
      mcq: [
        {
          q: "Crash torments Penn Webb mainly because —",
          options: [
            "picking on someone gentle and different lets Crash feel tough and in control.",
            "Penn keeps beating Crash in every sport.",
            "a teacher pressures Crash to test Penn.",
            "Penn started the conflict by attacking Crash."
          ],
          why: "The novel shows Crash's cruelty as a way to prove he is powerful — Penn's gentleness makes him an easy target, not a real threat."
        },
        {
          q: "Penn's refusal to fight back most clearly shows that —",
          options: [
            "quiet, principled kindness can be a real strength, even when it looks like weakness to Crash.",
            "Penn is simply too scared to ever respond.",
            "Penn secretly wants to hurt Crash later.",
            "Penn does not notice that Crash is bullying him."
          ],
          why: "Penn's calm, peace-minded response confuses Crash precisely because it will not give him the reaction he expects — it reframes what strength can mean."
        },
        {
          q: "Scooter's stroke matters to the story most because —",
          options: [
            "the fear of losing someone he loves begins to crack Crash's tough-guy shell.",
            "it convinces Crash to quit sports forever.",
            "it makes the family move to a new town.",
            "it has no real effect on how Crash behaves."
          ],
          why: "The family crisis is a turning point that reorders Crash's priorities and opens him to empathy he did not show before."
        },
        {
          q: "By the end of the novel, Crash's choice about the race shows that —",
          options: [
            "he now values a friend more than proving he is the fastest.",
            "he cares about winning more than ever.",
            "he was never really a good athlete.",
            "the race means nothing to anyone involved."
          ],
          why: "Choosing a person over the victory marks how far Crash has grown from the boy who measured himself only by winning."
        },
        {
          q: "Because Crash himself narrates the story, readers should —",
          options: [
            "watch for moments when his view of Penn does not match Penn's actual behavior.",
            "trust every judgment Crash makes about other people.",
            "assume Penn is exactly as annoying as Crash claims.",
            "ignore what Crash says and read only the dialogue."
          ],
          why: "A first-person narrator gives us one biased view; the reader has to notice the gap between Crash's opinions and what the events actually show."
        }
      ],
      short: [
        "Choose one moment when Crash acts cruel to Penn. Explain what Crash seems to want from it, and what it really reveals about him.",
        "Spinelli shows Penn as gentle but not weak. How does the novel use Penn to challenge Crash's idea of what strength is?",
        "Explain how Scooter's stroke changes Crash. Why might Spinelli make a family crisis the thing that finally reaches him?"
      ],
      paragraph: "Write an evidence-based paragraph. Crash begins the novel defining himself entirely by winning and looking tough. How does that single trait shape how he treats people — and how does it slowly change across the story? Support your claim with specific details.",
      aceReflection: "Articulate the novel's central idea about toughness, empathy, and change in your own words. Connect two moments that develop it. Extend it to your own life, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Then into Now",
      prompt: "Crash shows a boy who bullies to feel powerful and slowly learns empathy through a family crisis and an unexpected friendship. Choose one way that people your age today are pushed to act tough or put others down — and one way empathy can be built instead. Explain the connection with evidence, the way Spinelli grounds big ideas in one boy's specific choices.",
      format: "A short evidence-based comparison connecting the novel's ideas to a present-day reality, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Crash bullies Penn Webb at the start of Crash by Jerry Spinelli. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Crash by Jerry Spinelli. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in Crash by Jerry Spinelli because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Crash by Jerry Spinelli: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect a theme from Crash by Jerry Spinelli to my own life: [connection]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Crash by Jerry Spinelli for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to Crash by Jerry Spinelli. It supports close reading of Spinelli's central themes — bullying and the pressure to act tough, how a family crisis can change a person, empathy learned the hard way, and what real strength and winning mean. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Crash is copyrighted. This is an independent companion — students need their own lawful copy; the room links to and quotes no text.",
        "Sensitive content: the narrator repeatedly bullies a gentle classmate and uses cruelty to feel powerful before he changes, and a beloved grandfather has a stroke. Preview carefully, prepare students, and follow local policy.",
        "Details here were checked against the novel (the narrator John 'Crash' Coogan and the origin of his nickname; Penn Webb as a small, cheerful, button-wearing Quaker vegetarian who will not fight back; Mike Deluca as Crash's competitive friend; grandfather Scooter moving in, tending a garden, and later having a stroke; and Crash's change of heart, including a final choice around a race). Confirm against your class edition, as pagination and framing vary.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 6–8 ELAR TEKS (19 TAC Ch. 110) for reading response, author's purpose and craft, characterization, and multiple-genre analysis, with cross-curricular ties to social-emotional themes of empathy and conflict. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through clear visuals, plain directions, and device-local supports. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.6.1", "RL.7.1", "RL.8.1", "RL.6.2", "RL.7.2", "RL.8.2", "RL.6.3", "RL.7.3", "RL.8.3", "RL.6.6", "RL.7.6", "W.6-8.1", "W.6-8.9"],
      udl: "Multiple means of representation (visuals, plain directions, labeled reconstructions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
