/* Contraband — Speak (Laurie Halse Anderson). English source data.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; plot, character, and chronology details were
   verified for accuracy and are used only to build original, transformative
   analysis. Standards are good-faith Common Core alignment; TEKS/ELPS flagged
   "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles. */
window.__ROOM__ = {
  id: "speak",
  storageKey: "contraband.speak.v1",

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
    "vocab.title": "Words for Speak",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Melinda's Keepsakes",
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
    "ctob.title": "The Silence Case File",
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
    "arcade.title": "Real Issue or Melinda's Story?",
    "arcade.default": "Sort each statement by whether it is a real-world issue the novel raises or part of Melinda's specific fictional story.",
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
      title: "Speak",
      author: "Laurie Halse Anderson",
      grades: "Grades 9–12",
      genre: "Contemporary realistic fiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the novel (print, e-book, or licensed audiobook). This activity does not reproduce or replace the book.",
      copyright: "Speak is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "The novel deals with sexual assault, depression, and self-harm and is written for mature readers. Prepare students in advance, provide support, and follow local policy. This companion evokes these themes; it never depicts them.",
      disclaimer: "This activity is an independent educational companion to Speak by Laurie Halse Anderson. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY-NC 4.0. Speak, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "../images/speak/hero.webp",
      heroAlt: "An instructional illustration evoking Speak — a lone high-school student framed by an empty hallway and a half-finished drawing of a bare winter tree."
    },
    hook: "Melinda Sordino starts her first year of high school with almost no one speaking to her. Over the summer, at a party, something happened — and she called 911, which broke up the party and got kids in trouble. Now she is an outcast who has stopped talking about it, and almost stopped talking at all. Across one school year, through art class and a stubborn tree she keeps trying to draw, Melinda slowly finds her way back to her own voice — and to the truth she has been unable to say out loud.",
    goals: [
      "Trace how Melinda's silence works as both a symptom of trauma and a shield she uses to survive.",
      "Analyze how the novel uses symbols — especially Melinda's tree drawings and the objects around her — to show inner change she cannot yet put into words.",
      "Examine why being believed and heard matters, and how isolation deepens when a survivor is not.",
      "Distinguish the real-world issues the novel raises from the specific, invented details of Melinda's story, and carry its questions into the present."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea that a first-person narrator may not, at first, tell us everything.",
        "Discuss, at a safe distance: Why might a person go silent about something painful? What can make it hard to speak up, and what can make it possible?"
      ],
      during: [
        "Use the Keepsakes to slow down and read key objects and moments closely.",
        "Track how Melinda's tree drawings and her voice change across the four marking periods."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the novel's questions to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Melinda's silence protects her from — and what it costs her. Include one detail from the novel that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments that show Melinda's tree drawing changing (for example, an early frustrated attempt and a later one). Explain how comparing them changes your understanding of her healing or her voice." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a question the novel raises about speaking up and being believed to the present. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "trauma", def: "A deep emotional wound left by a frightening or harmful experience, which can keep affecting a person long after the event.", example: "The lasting effect of the assault on Melinda, shaping how she thinks, sleeps, and speaks.", nonexample: "A single bad day that a person shakes off by the next morning.", context: "Melinda's trauma shows up not as a single scene she narrates plainly but as avoidance, dread, and silence." },
      { term: "isolation", def: "The state of being cut off from other people, physically or emotionally.", example: "Melinda eating alone, avoiding old friends, and hiding in a closet at school.", nonexample: "Choosing to spend one quiet evening alone and feeling fine about it.", context: "Her isolation grows because the one thing she cannot say is the thing separating her from everyone." },
      { term: "survivor", def: "A person who lives through a traumatic experience and carries on afterward.", example: "Melinda, who is working — slowly and painfully — toward naming what happened to her.", nonexample: "A bystander who was never harmed and moves on untouched.", context: "The novel treats Melinda as a survivor finding her voice, not as a case to be solved by others." },
      { term: "metaphor", def: "A comparison that describes one thing as if it were another, to reveal a deeper meaning.", example: "Melinda's tree standing in for herself — bare and struggling, then finding new growth.", nonexample: "A plain label on a diagram that names an object with no comparison.", context: "The bitten, wounded tree Melinda keeps drawing works as a metaphor for her own state." },
      { term: "voice", def: "A person's ability to speak, be heard, and express who they are and what they know.", example: "Melinda finally being able to say aloud what happened to her.", nonexample: "Repeating someone else's words with no meaning behind them.", context: "The whole novel moves from silence toward Melinda reclaiming her voice." },
      { term: "depression", def: "A serious, lasting heaviness of mood that drains energy, hope, and interest in daily life.", example: "Melinda's exhaustion, withdrawal, and loss of interest as the winter wears on.", nonexample: "Feeling briefly disappointed and then bouncing back the same day.", context: "As the school year darkens, Melinda's depression deepens before she begins to recover. (Needs review)" },
      { term: "symbol", def: "An object, image, or action that stands for a larger idea beyond itself.", example: "The closet Melinda hides in, standing for both refuge and being shut away.", nonexample: "A locker used only to store books, meaning nothing more.", context: "Anderson builds the novel out of symbols — the tree, the closet, mirrors — that carry Melinda's inner story." },
      { term: "ostracize", def: "To deliberately shut someone out of a group, ignoring or rejecting them.", example: "Melinda's former friends refusing to sit with her or speak to her.", nonexample: "Welcoming a new student and inviting them to join the table.", context: "Melinda is ostracized because classmates blame her for the party without knowing why she called." },
      { term: "resilience", def: "The strength to recover and keep growing after hardship or harm.", example: "Melinda returning to her tree drawing again and again until it comes alive.", nonexample: "Giving up on a task the first time it becomes difficult.", context: "Melinda's resilience is quiet and slow, built in art class one attempt at a time." }
    ],

    relic: {
      name: "Melinda's Keepsakes",
      intro: "Seven instructional reconstructions of objects and moments from Speak — teaching recreations, not artwork from the book. Investigate what each is, its role in the novel, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "tree", name: "The Tree Drawing", image: "images/tree.webp",
          clues: ["On the first day of art, Melinda draws a slip of paper assigning her a single subject for the whole year: a tree.", "Her early attempts are stiff, dead-looking, or frustrated, and she keeps starting over.", "By the end, her tree finally looks alive — imperfect, scarred, but growing."],
          identify: { q: "What is this object?", choices: ["The year-long art assignment — a tree — that Melinda draws over and over", "A tree Melinda plants in her yard", "A photograph from a family album", "A poster hanging in the cafeteria"] },
          purpose: { q: "What is its role in the novel?", choices: ["It becomes the main symbol for Melinda's own damaged, healing self", "It is only a grade she needs to pass art", "It is a gift she makes for a friend", "It has no importance to the story"] },
          significance: { q: "What does the changing tree reveal?", choices: ["That Melinda is slowly recovering and finding a way to express what she cannot yet say", "That she is a naturally gifted artist with no struggles", "That art class is a waste of her time", "That the tree means nothing to her"] },
          reveals: "How a symbol can carry a character's inner change before she has words for it.",
          conceals: "How much pain sits behind each failed, restarted drawing.",
          ace: "Articulate what the tree stands for; connect an early attempt to a later one; extend it to how people express feelings they cannot yet name."
        },
        {
          id: "closet", name: "The Janitor's Closet", image: "images/closet.webp",
          clues: ["Melinda claims an old, unused janitor's closet as a private hideout at school.", "She decorates it and escapes there when the day becomes unbearable.", "By the end, the same closet becomes the place where she is finally forced to face — and fight back against — her attacker."],
          identify: { q: "What is this space?", choices: ["A hidden closet Melinda turns into a private refuge at school", "Her bedroom at home", "The art classroom", "The principal's office"] },
          purpose: { q: "What is its role in the novel?", choices: ["It is both a shelter from her isolation and, later, the site of her confrontation", "It is where she keeps her gym clothes", "It is a place she visits only once", "It has no meaning in the story"] },
          significance: { q: "What does the closet ultimately reveal?", choices: ["That hiding can only protect her for so long before she must face the truth", "That she prefers to be alone forever", "That school has plenty of safe spaces for her", "That the closet was never important"] },
          reveals: "How a hiding place can be both refuge and, in the end, the ground where a survivor takes back power.",
          conceals: "How isolating it is that Melinda feels safest away from everyone.",
          ace: "Articulate what the closet gives Melinda; connect refuge to confrontation; extend it to healthy versus unhealthy ways people cope."
        },
        {
          id: "lips", name: "The Bitten Lips", image: "images/lips.webp",
          clues: ["Throughout the novel, Melinda bites her lips until they crack, chap, and bleed.", "She hides her mouth, refuses to speak in class, and lets teachers think she is just sullen.", "Her injured mouth appears again and again as she struggles to say anything true."],
          identify: { q: "What does this recurring detail show?", choices: ["Melinda physically wounding the very mouth she cannot use to speak the truth", "A simple medical problem unrelated to the story", "A fashion choice she makes", "A habit that has no meaning"] },
          purpose: { q: "What is its role in the novel?", choices: ["It makes her silence visible — the body carrying what she will not say", "It shows she is careless about her health", "It explains why she cannot pass her classes", "It is only a background detail"] },
          significance: { q: "What does this self-directed harm reveal?", choices: ["How trauma can turn inward when a survivor has no safe way to speak", "That she is seeking attention", "That nothing is really wrong", "That she dislikes talking for no reason"] },
          reveals: "How unspoken pain can show up on the body when it cannot be voiced.",
          conceals: "The depth of what Melinda is holding back behind a closed, injured mouth.",
          ace: "Articulate what the bitten lips signal; connect the wound to her silence; extend it to how pain shows when it cannot be spoken."
        },
        {
          id: "mascot", name: "The Ever-Changing Mascot", image: "images/mascot.webp",
          clues: ["Melinda's school cannot settle on a mascot and keeps switching it — Trojans, Blue Devils, and more.", "The constant renaming is treated as absurd and hollow by the students.", "Melinda notices the mascot changing while nothing that actually matters is ever addressed."],
          identify: { q: "What is this running detail?", choices: ["The school's mascot, which keeps being changed for no real reason", "The name of Melinda's art project", "A club Melinda joins", "A teacher's nickname"] },
          purpose: { q: "What is its role in the novel?", choices: ["It satirizes how the school fusses over appearances while ignoring what students actually need", "It is the central conflict of the plot", "It explains Melinda's isolation", "It has no purpose at all"] },
          significance: { q: "What does the shifting mascot reveal?", choices: ["That the adults and institutions around Melinda focus on surface image instead of real problems", "That the school is well run", "That mascots are the novel's main theme", "That Melinda cares deeply about sports"] },
          reveals: "How institutions can perform activity around trivial things while missing what matters.",
          conceals: "How alone a struggling student can be inside a busy, distracted school.",
          ace: "Articulate what the mascot mocks; connect it to the school's blindness; extend it to when institutions today address image over substance."
        },
        {
          id: "freeman", name: "Mr. Freeman's Art Room", image: "images/freeman.webp",
          clues: ["Mr. Freeman is the art teacher who insists that art must come from real feeling, not a formula.", "He gives Melinda the space, patience, and honesty her other classes do not.", "He tells her the point of her tree is to put her own emotion into it."],
          identify: { q: "Who is Mr. Freeman?", choices: ["The art teacher who gives Melinda a safe space to express herself", "The school principal", "A classmate of Melinda's", "Melinda's next-door neighbor"] },
          purpose: { q: "What is his role in the novel?", choices: ["He is the one adult who reaches Melinda by valuing honest expression over grades", "He is an antagonist who bullies her", "He runs the cafeteria", "He has no effect on Melinda"] },
          significance: { q: "What does his classroom reveal?", choices: ["That being given space to create can help a silenced person find a voice", "That art is just an easy elective", "That teachers cannot make any difference", "That Melinda hates art"] },
          reveals: "How one adult who truly sees a student can open a path toward healing.",
          conceals: "How rare that kind of attention is for Melinda everywhere else in her life.",
          ace: "Articulate what Mr. Freeman offers Melinda; connect his art room to her recovery; extend it to who helps people find their voice today."
        },
        {
          id: "mirror", name: "The Covered Mirror", image: "images/mirror.webp",
          clues: ["Melinda cannot stand to look at her own reflection and hides or turns away from mirrors.", "She describes her own face and self with disgust and distance.", "Only near the end can she begin to face her reflection again."],
          identify: { q: "What does this detail show?", choices: ["Melinda avoiding her own reflection because she cannot face herself", "A broken mirror she needs to replace", "A mirror she uses to do her makeup", "A decorating choice with no meaning"] },
          purpose: { q: "What is its role in the novel?", choices: ["It tracks how Melinda's sense of self has been damaged and slowly begins to heal", "It shows she is vain about her looks", "It explains her grades", "It is only set dressing"] },
          significance: { q: "What does turning back toward the mirror reveal?", choices: ["That Melinda is beginning to reclaim herself and face who she is", "That she never had any problem", "That mirrors are dangerous", "That nothing has changed for her"] },
          reveals: "How trauma can fracture the way a survivor sees herself.",
          conceals: "How long Melinda cannot bear even to meet her own eyes.",
          ace: "Articulate what avoiding the mirror shows; connect it to her damaged self-image; extend it to how people rebuild a sense of self after harm."
        },
        {
          id: "note", name: "The Warning Passed in the Halls", image: "images/note.webp",
          clues: ["Melinda learns that another girl is now close to the same person who assaulted her.", "She can no longer stay fully silent knowing someone else may be in danger.", "This knowledge pushes her toward finally warning others and speaking the truth."],
          identify: { q: "What is this turning point?", choices: ["Melinda realizing another girl is at risk from the same attacker", "A love note from a secret admirer", "A hall pass she forgets", "A grade posted on the wall"] },
          purpose: { q: "What is its role in the novel?", choices: ["It gives Melinda a reason to break her silence beyond herself", "It ends the school year early", "It gets her transferred to another school", "It has no effect on the plot"] },
          significance: { q: "What does this moment reveal?", choices: ["That speaking up can protect others, not only oneself", "That warning people never helps", "That Melinda was safe all along", "That silence is always the best choice"] },
          reveals: "How concern for someone else can help a survivor find the courage to speak.",
          conceals: "How much fear Melinda must overcome to say anything at all.",
          ace: "Articulate what pushes Melinda to speak; connect protecting others to finding her voice; extend it to why speaking up matters for a community."
        }
      ]
    },

    ctob: {
      name: "The Silence Case File",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "What is the last name of the novel's narrator and main character? (one word)",
          evidence: ["She is a ninth grader starting high school as an outcast.", "She called 911 at a summer party, which made her classmates turn on her.", "The whole novel is told from inside her head as she struggles to speak."],
          hints: ["Her first name is Melinda.", "Her last name starts with 'Sor…'.", "The name is Sordino."],
          answer: "Sordino"
        },
        {
          type: "word",
          prompt: "What single subject is Melinda assigned to draw all year in art class? (one word)",
          evidence: ["On the first day she draws her subject at random from a broken globe of slips.", "She struggles to make it look alive across the whole year.", "It becomes the central symbol for herself."],
          hints: ["It grows leaves and has roots.", "It starts with 'tr…'.", "The subject is a tree."],
          answer: "tree"
        },
        {
          type: "mc",
          prompt: "Why do Melinda's classmates treat her as an outcast at the start of the year?",
          options: [
            "She called the police to a summer party, which broke it up and got students in trouble, and they do not know why she called.",
            "She moved to town from far away and no one knows her.",
            "She refused to join the school sports team.",
            "She was caught cheating on a final exam."
          ],
          hints: ["Think about what happened at the party over the summer.", "They blame her without knowing the real reason for the call."]
        },
        {
          type: "mc",
          prompt: "Who is the one teacher who reaches Melinda by valuing honest expression?",
          options: [
            "Mr. Freeman, the art teacher, who tells her to put real feeling into her work.",
            "The principal, who calls her to the office.",
            "The gym teacher, who grades only on effort.",
            "A substitute who never learns her name."
          ],
          hints: ["He teaches the class where she draws the tree.", "His name suggests being 'free.'"]
        },
        {
          type: "sequence",
          prompt: "Put these stages of Melinda's year in the order they happen, earliest first.",
          items: [
            "Melinda starts high school silent and shunned, hiding in a janitor's closet.",
            "In art class she struggles again and again to draw a tree that looks alive.",
            "She realizes another girl may be in danger from the same person who hurt her.",
            "She finally speaks the truth and begins to reclaim her voice."
          ],
          hints: ["The isolation and the closet come first.", "Warning about the other girl comes before she fully speaks.", "Reclaiming her voice is the climax."]
        },
        {
          type: "mc",
          prompt: "By the end of the novel, what most clearly marks Melinda's recovery?",
          options: [
            "She is finally able to speak the truth about what happened and her tree drawing comes alive.",
            "She transfers to a new school and starts over.",
            "She wins a prize for the best mascot design.",
            "She becomes popular and forgets the past entirely."
          ],
          hints: ["Think about the title of the book.", "Her voice and her artwork change together at the end."]
        }
      ]
    },

    arcade: {
      name: "Real Issue or Melinda's Story?",
      instruction: "Speak raises real-world issues through one invented character. Sort each statement: is it a REAL-WORLD ISSUE the novel is about, or MELINDA'S STORY (a specific detail of the novel's fictional plot)? Reasoning earns the points.",
      buckets: [
        { id: "issue", label: "Real-world issue", short: "Issue" },
        { id: "story", label: "Melinda's story", short: "Story" }
      ],
      cards: [
        { text: "Trauma can leave a survivor unable to speak about what happened to them.", bucket: "issue", why: "How trauma can silence a survivor is a real-world issue the novel explores." },
        { text: "Being believed and heard matters deeply to someone who has been harmed.", bucket: "issue", why: "The importance of being believed and able to speak out is a real-world concern." },
        { text: "Making art can be a way to process and express painful experiences.", bucket: "issue", why: "Art as a way to work through pain is a real-world idea, not just Melinda's plot." },
        { text: "Isolation deepens when a person's pain goes unheard by those around them.", bucket: "issue", why: "The isolation of not being heard is a real-world issue the book raises." },
        { text: "A ninth grader named Melinda Sordino narrates the whole novel.", bucket: "story", why: "The specific character Melinda Sordino is Anderson's fiction." },
        { text: "Melinda becomes an outcast after a summer party and the 911 call that broke it up.", bucket: "story", why: "This exact plot event belongs to Melinda's fictional story." },
        { text: "Melinda spends the year trying to draw a tree in Mr. Freeman's art class.", bucket: "story", why: "The tree project and Mr. Freeman are specific inventions of the novel." },
        { text: "The person Melinda calls 'IT' is a classmate named Andy Evans.", bucket: "story", why: "'IT' / Andy Evans is a specific character in Melinda's fictional story." }
      ],
      followup: "Why might Anderson tell real issues through one invented character, Melinda? What can her story show a reader that a list of facts about trauma cannot?"
    },

    analysis: {
      mcq: [
        {
          q: "Melinda's silence through most of the novel is best understood as —",
          options: [
            "both a symptom of her trauma and a shield she uses to survive what she cannot yet face.",
            "simple laziness about doing her schoolwork.",
            "a game she plays to annoy her teachers.",
            "proof that nothing serious has happened to her."
          ],
          why: "The novel presents her silence as protective and painful at once — a response to trauma, not mere stubbornness."
        },
        {
          q: "The tree Melinda draws all year functions in the novel mainly as —",
          options: [
            "a metaphor for Melinda herself — wounded and struggling, then slowly coming alive.",
            "a realistic science assignment about local plants.",
            "a joke that has nothing to do with her feelings.",
            "a symbol of Mr. Freeman's own life story."
          ],
          why: "As Melinda changes, so does the tree; Anderson uses it to show inner growth Melinda cannot yet put into words."
        },
        {
          q: "Melinda is treated as an outcast largely because —",
          options: [
            "classmates blame her for calling the police to the party without knowing what happened to her.",
            "she publicly insulted the whole school.",
            "she cheated and was caught.",
            "she is new and no one has met her before."
          ],
          why: "Her isolation grows from the gap between what others assume about the 911 call and the truth she cannot say."
        },
        {
          q: "Mr. Freeman's role in the novel most clearly shows that —",
          options: [
            "one adult who values honest expression can help a silenced person begin to find a voice.",
            "art teachers are unimportant to a student's life.",
            "only friends her own age can help Melinda.",
            "Melinda needs no help from anyone."
          ],
          why: "By insisting her art carry real feeling, Mr. Freeman gives Melinda a safe path toward expression and recovery."
        },
        {
          q: "By the end of the novel, Melinda's recovery is shown most clearly when —",
          options: [
            "she is finally able to speak the truth and her tree drawing comes alive at the same time.",
            "she wins a popularity contest at school.",
            "she decides never to think about the party again.",
            "she gives up on art entirely."
          ],
          why: "Her regained voice and her finished, living tree arrive together, marking her healing — matching the novel's title."
        }
      ],
      short: [
        "Choose one symbol in the novel (the tree, the closet, the mirror, or Melinda's bitten lips). Explain what it stands for and how it changes as Melinda changes.",
        "Melinda is surrounded by adults and an institution that mostly miss what she needs. Using one example, explain how the novel shows this and why it matters.",
        "Explain the meaning of the moment Melinda finally speaks the truth. Why might Anderson make her voice and her artwork come alive at the same time?"
      ],
      paragraph: "Write an evidence-based paragraph. Melinda's silence is both a wound and a shield. How does the novel show silence protecting her and also harming her across the year? Support your claim with specific details from the text.",
      aceReflection: "Articulate the novel's central idea about silence, trauma, and finding a voice in your own words. Connect two moments that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Then into Now",
      prompt: "Speak shows how hard and how important it can be to break a silence, be believed, and be heard. Choose one way that people today work to help survivors speak up and be supported. Explain the connection with evidence, the way Anderson grounds a large issue in one character's specific experience.",
      format: "A short evidence-based comparison connecting the novel's questions to a present-day reality, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what Melinda's silence means in Speak by Laurie Halse Anderson. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Speak by Laurie Halse Anderson. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in Speak by Laurie Halse Anderson because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Speak by Laurie Halse Anderson: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect a theme from Speak by Laurie Halse Anderson to the present: [connection]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Speak by Laurie Halse Anderson for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to Speak by Laurie Halse Anderson. It supports close reading of Anderson's central themes — silence and voice, trauma and recovery, isolation, and art as a way to process pain. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Speak is copyrighted. This is an independent companion — students need their own lawful copy; the room links to and quotes no text.",
        "Mature content: the novel deals with sexual assault, depression, and self-harm. This companion evokes these themes and never depicts them. Preview carefully, prepare students in advance, arrange support, and follow local policy.",
        "Details here were checked against the novel (Melinda Sordino's ninth-grade year; the summer party and the 911 call that made her an outcast; the year-long tree assignment; Mr. Freeman's art room; the janitor's closet; the recurring bitten lips and mirror avoidance; the ever-changing school mascot; the classmate she calls 'IT,' Andy Evans; and her final move toward speaking the truth). Confirm against your class edition, as pagination and framing vary.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 9–10 English Language Arts and Reading TEKS (19 TAC Ch. 110) for reading response, author's purpose and craft, and multiple-genre analysis, with attention to symbolism, characterization, and theme in contemporary realistic fiction. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through clear visuals, plain directions, and device-local supports. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.3", "RL.9-10.4", "RL.9-10.5", "RL.9-10.6", "W.9-10.1", "W.9-10.9"],
      udl: "Multiple means of representation (visuals, plain directions, labeled reconstructions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
