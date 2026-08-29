/* Contraband — The Adventures of Tom Sawyer (Mark Twain, 1876). English source data.

   PUBLIC-DOMAIN WORK. This 1876 novel is in the public domain and freely
   available (Project Gutenberg / LibriVox). This room reproduces no long
   passages and invents no quotations; historical, biographical, and narrative
   details are paraphrased from well-established public knowledge and used only
   to build original, transformative analysis. Standards are good-faith Common
   Core alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "tomsawyer",
  storageKey: "contraband.tomsawyer.v1",

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
    "enter.readListen": "Read & Listen — free",
    "enter.readListenTitle": "Get the full text and audio",
    "enter.readListenNote": "This novel is in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Adventures of Tom Sawyer",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Objects and Moments from Tom Sawyer",
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
    "ctob.title": "The Case of the Graveyard Murder",
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
    "arcade.title": "Real History or Tom's Story?",
    "arcade.default": "Sort each statement by whether it is real history of the antebellum Mississippi River world or part of Twain's fictional Tom Sawyer story.",
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
    "print.item.relic": "Relic Room evidence sheet",
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
      title: "The Adventures of Tom Sawyer",
      author: "Mark Twain",
      grades: "Grades 9–12",
      genre: "Fiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "public-domain",
      textAccess: "This 1876 novel is in the public domain. Students can read or listen to the full text for free through Project Gutenberg and LibriVox. This room paraphrases rather than reproducing long passages.",
      contentNote: "The novel reflects its 1840s setting through period racial language and attitudes, and includes scenes of violence — a graveyard murder, a man framed, and life-threatening danger in a cave. These elements are among the reasons the book is sometimes challenged. Preview carefully, prepare students, and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/74",
      audio: "https://librivox.org/the-adventures-of-tom-sawyer-by-mark-twain/",
      hero: "../images/tomsawyer/hero.webp",
      heroAlt: "An instructional illustration evoking Tom Sawyer — a whitewashed picket fence beside a bucket and brush, a raft on a wide river, and a bluff above a Mississippi River town at dusk (no real people depicted)."
    },
    hook: "A small town on the Mississippi River, in the years before the Civil War. Tom Sawyer would rather do almost anything than what he is told — go to school, sit through a sermon, or whitewash a fence. But a boy's summer of pranks, buried treasure, and true love turns serious the night Tom and Huck Finn sneak into a graveyard and witness a murder. Twain's novel moves from comedy to real danger, following Tom as he learns, in his own reckless way, the difference between mischief and conscience.",
    goals: [
      "Explain how Twain uses Tom's schemes — especially whitewashing the fence — to reveal his cleverness and to satirize how people value work and reward.",
      "Trace how the story shifts from lighthearted mischief toward genuine moral stakes after the graveyard murder.",
      "Analyze how Tom grows through fear, guilt, and courage, and how characters like Huck Finn and Injun Joe reflect the world around them.",
      "Distinguish the real history of an antebellum Mississippi River town from Twain's specific, invented story, and carry the novel's questions into the present."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a novel that blends boyhood comedy with real moral danger.",
        "Discuss: What is the difference between harmless mischief and a choice that tests your conscience?"
      ],
      during: [
        "Use the Relic Room to slow down and read key objects and moments closely.",
        "Track how the story turns from pranks toward the murder, the trial, and the cave."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the novel's ideas to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how Tom tricks the other boys into whitewashing the fence, and what Twain is saying about work and reward. Include one detail from the novel that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments in the novel that show Tom's conscience growing (for example, keeping the graveyard secret and then testifying at the trial). Explain how comparing them changes your understanding of Tom or a theme." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a question the novel raises to the present. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "satire", def: "Writing that uses humor and irony to expose and criticize people's foolishness or vice.", example: "Twain mocking how the townspeople and boys behave over the fence, church, and Sunday school.", nonexample: "A plain, straightforward report that pokes fun at nothing.", context: "Much of Tom Sawyer is gentle satire of a small town's habits, rules, and self-importance." },
      { term: "whitewash", def: "A cheap white coating brushed onto fences and walls; also, to make something look better than it is.", example: "The long board fence Aunt Polly orders Tom to paint as a punishment.", nonexample: "Leaving a fence bare, gray, and unpainted.", context: "Tom turns the dull chore of whitewashing the fence into a prize other boys pay to do." },
      { term: "superstition", def: "A belief that certain actions or objects bring good or bad luck, not based on reason.", example: "Tom and Huck's cures for warts using a dead cat and a midnight trip to the graveyard.", nonexample: "A tested scientific explanation for why something happens.", context: "The boys' many superstitions about warts, luck, and spirits drive them into the graveyard the night of the murder." },
      { term: "antebellum", def: "Belonging to the period in the United States before the Civil War.", example: "The 1840s Mississippi River town where Tom lives, where slavery is part of daily life.", nonexample: "A town in the United States long after the Civil War had ended.", context: "The novel is set in the antebellum South, and its language and attitudes reflect that time." },
      { term: "conscience", def: "The inner sense that tells a person what is right and wrong and can cause guilt.", example: "Tom's growing guilt as an innocent man is blamed for the graveyard murder.", nonexample: "Feeling nothing at all after doing something clearly wrong.", context: "The murder awakens Tom's conscience, turning a careless boy into someone who must make a hard choice." },
      { term: "testimony", def: "A firsthand account given as evidence, especially in a court of law.", example: "Tom finally speaking out at the trial about what he saw in the graveyard.", nonexample: "Staying silent about something you witnessed to avoid trouble.", context: "Tom's testimony saves an innocent man but puts his own safety at risk." },
      { term: "villain", def: "A character whose cruel or criminal actions drive the danger in a story.", example: "Injun Joe, who commits the murder and later hunts Tom and Becky.", nonexample: "A kindly neighbor who helps the children and means no harm.", context: "Injun Joe is the novel's villain, and the threat he poses turns comedy into real danger." },
      { term: "vandalism", def: "Deliberately damaging or destroying property that belongs to others.", example: "Not Tom's usual pranks, but the kind of harm the story treats as truly serious.", nonexample: "Borrowing a fence brush and returning it unharmed.", context: "Twain draws a line between Tom's harmless mischief and real wrongdoing that hurts people or property." },
      { term: "sentimental", def: "Appealing heavily to tender emotions, sometimes more than the situation calls for.", example: "The town's overflowing grief when the boys are believed drowned — and reappear at their own funeral.", nonexample: "Reacting to a small setback with calm and no strong feeling.", context: "Twain gently satirizes the sentimental way the town mourns and then celebrates the 'dead' boys." }
    ],

    relic: {
      name: "Objects and Moments from Tom Sawyer",
      intro: "Seven instructional reconstructions of objects and moments from The Adventures of Tom Sawyer — teaching recreations, not artwork from any edition. Investigate what each is, its role in the novel, and what it reveals. (This room paraphrases and reproduces no long passages.)",
      artifacts: [
        {
          id: "fence", name: "The Whitewashed Fence", image: "images/fence.webp",
          clues: ["As punishment, Aunt Polly orders Tom to whitewash a long board fence on a fine Saturday.", "Tom pretends the chore is a rare privilege the other boys should envy.", "Boys end up trading treasures for the chance to paint, and Tom grows rich in trinkets."],
          identify: { q: "What is this object?", choices: ["A fence Tom must whitewash as a punishment, which he turns into a moneymaking trick", "A fence Tom builds to earn extra money", "A wall around the schoolyard", "A fence Tom paints to surprise Aunt Polly"] },
          purpose: { q: "What is its role in the novel?", choices: ["It shows Tom's cleverness and lets Twain satirize how people value work and reward", "It teaches Tom the value of honest labor", "It is a small detail with no larger point", "It explains why Tom runs away later"] },
          significance: { q: "What does the trick reveal?", choices: ["That people crave what looks scarce or forbidden — desire is easy to manipulate", "That Tom truly enjoys painting fences", "That the other boys were unusually foolish", "That work is always its own reward"] },
          reveals: "How Twain uses one boyhood chore to expose the way people value things they are told they cannot easily have.",
          conceals: "That Tom is dodging real responsibility, not learning it — the 'lesson' is a clever con.",
          ace: "Articulate how Tom tricks the boys; connect it to Twain's point about work and reward; extend it to how scarcity is used to sell things today."
        },
        {
          id: "deadcat", name: "The Dead Cat and the Graveyard", image: "images/deadcat.webp",
          clues: ["Tom and Huck believe a dead cat swung in a graveyard at midnight can cure warts.", "They carry the cat to a fresh grave to test the superstition.", "While hiding there, they witness a real murder instead."],
          identify: { q: "Why do the boys go to the graveyard at midnight?", choices: ["To test a superstitious wart cure using a dead cat", "To dig up buried treasure", "To hide from Aunt Polly", "To play a prank on the town"] },
          purpose: { q: "What is its role in the novel?", choices: ["The boys' superstition places them at the exact scene of the murder, turning comedy into danger", "It shows the boys are cruel to animals", "It is only comic relief with no consequence", "It explains why Tom fears cats"] },
          significance: { q: "What does this moment reveal about the story's shape?", choices: ["That the novel is about to turn from lighthearted mischief to real moral stakes", "That superstition always tells the truth", "That the boys planned to see the murder", "That the graveyard trip meant nothing"] },
          reveals: "How Twain uses the boys' playful superstition to swing the story from comedy toward genuine danger.",
          conceals: "The weight of the secret the boys now carry, and the fear that will follow them.",
          ace: "Articulate why the boys are in the graveyard; connect superstition to the plot's turn; extend it to how a small choice can lead somewhere serious."
        },
        {
          id: "murder", name: "The Graveyard Murder Scene", image: "images/murder.webp",
          clues: ["In the dark, Injun Joe kills the young doctor during a grave-robbing gone wrong.", "He shifts the blame onto Muff Potter, who was drunk and cannot remember.", "Tom and Huck, hidden nearby, are the only witnesses to the truth."],
          identify: { q: "What really happens in the graveyard?", choices: ["Injun Joe commits the murder but frames the innocent Muff Potter", "Muff Potter kills the doctor in a fair fight", "The doctor dies in an accident no one caused", "Tom and Huck imagine the whole thing"] },
          purpose: { q: "What is its role in the novel?", choices: ["It creates the central danger and the moral test that drives the second half of the book", "It ends the story's conflict early", "It is a dream Tom later forgets", "It has no effect on Tom or Huck"] },
          significance: { q: "What does the boys' silence reveal at first?", choices: ["That fear of Injun Joe pulls hard against Tom's growing conscience", "That the boys do not care about the truth", "That they trust the law to fix everything", "That the murder was not serious"] },
          reveals: "How the murder raises the stakes and forces Tom toward a genuine moral choice.",
          conceals: "How terrified the boys are — they even swear a secret oath in blood to say nothing.",
          ace: "Articulate what happens in the graveyard; connect the boys' fear to their silence; extend it to the pressure to stay quiet when speaking up is dangerous."
        },
        {
          id: "trial", name: "Muff Potter's Trial", image: "images/trial.webp",
          clues: ["An innocent Muff Potter is put on trial for the murder Injun Joe committed.", "Tom wrestles with guilt as the case turns against Potter.", "At the last moment, Tom testifies to what he really saw, and Injun Joe leaps from the courtroom window and escapes."],
          identify: { q: "What is this scene?", choices: ["The trial where Tom finally tells the truth to save an innocent man", "A trial where Tom is himself accused", "A hearing about the whitewashed fence", "A town meeting about the boys' funeral"] },
          purpose: { q: "What is its role in the novel?", choices: ["It is the moral climax where Tom's conscience overcomes his fear", "It proves the town's justice always works fairly", "It is a minor scene with no stakes", "It shows Tom lying to protect himself"] },
          significance: { q: "What does Tom's testimony reveal about him?", choices: ["That his conscience has grown stronger than his fear of Injun Joe", "That he only wanted attention", "That he never truly witnessed the murder", "That he trusts Injun Joe"] },
          reveals: "How Tom grows from a careless prankster into a boy who will risk himself to tell the truth.",
          conceals: "That Injun Joe is now free and dangerous — Tom's courage saves Potter but endangers Tom.",
          ace: "Articulate what Tom does at the trial; connect it to his growing conscience; extend it to what it costs to tell the truth when it is risky."
        },
        {
          id: "treasure", name: "The Buried Treasure", image: "images/treasure.webp",
          clues: ["Tom and Huck dream of finding buried gold, a common boyhood fantasy.", "They accidentally overhear Injun Joe hide a real box of gold coins.", "By the end, the boys recover the treasure and become, briefly, the richest boys in town."],
          identify: { q: "What is the treasure?", choices: ["A real box of gold that Injun Joe hides and the boys eventually recover", "A chest of costume jewelry the boys imagine", "Money Tom earns from the fence trick", "A gift left by Aunt Polly"] },
          purpose: { q: "What is its role in the novel?", choices: ["It ties the boys' fantasy directly to the real danger posed by Injun Joe", "It is only a daydream that never comes true", "It replaces the murder as the main plot", "It has no connection to Injun Joe"] },
          significance: { q: "What does finding the treasure reveal?", choices: ["That the boys' games have collided with genuine risk and real consequences", "That wealth solves every problem", "That Injun Joe was harmless all along", "That the treasure was never real"] },
          reveals: "How Twain lets a boyhood fantasy come true, but only by tangling the boys deeper with real danger.",
          conceals: "The unease of sudden wealth — Huck in particular finds that being 'respectable' feels like a trap.",
          ace: "Articulate what the treasure is; connect the boys' fantasy to real danger; extend it to what people imagine wealth will fix and what it does not."
        },
        {
          id: "cave", name: "McDougal's Cave", image: "images/cave.webp",
          clues: ["Tom and Becky Thatcher become lost in the vast, dark cave after a picnic.", "Deep inside, Tom is horrified to glimpse Injun Joe hiding there too.", "The two children nearly starve before Tom finds a way out; the cave is later sealed."],
          identify: { q: "What happens in the cave?", choices: ["Tom and Becky get lost and must survive, while Injun Joe hides in the same cave", "The boys hold a party underground", "Tom digs for treasure alone", "Aunt Polly hides the children there"] },
          purpose: { q: "What is its role in the novel?", choices: ["It is the story's most dangerous test, where Tom's courage and cleverness save two lives", "It is a peaceful escape from town", "It ends the story before the trial", "It has nothing to do with Injun Joe"] },
          significance: { q: "What does Tom's behavior in the cave reveal?", choices: ["That he has grown into someone who protects others under real danger, not just himself", "That he panics and gives up", "That he cares only about the treasure", "That the danger was imaginary"] },
          reveals: "How the cave becomes the final proof of Tom's growth from prankster to someone genuinely brave.",
          conceals: "The grim fate that waits for Injun Joe when the cave is sealed shut behind him.",
          ace: "Articulate what Tom does in the cave; connect it to his growth across the novel; extend it to how people find courage in a crisis."
        },
        {
          id: "town", name: "St. Petersburg, the River Town", image: "images/town.webp",
          clues: ["Twain models the town on his own boyhood home on the Mississippi River.", "It is a slaveholding antebellum town, and its language and attitudes reflect that era.", "Steamboats, revival meetings, one-room schooling, and superstition all shape daily life."],
          identify: { q: "What is St. Petersburg in the novel?", choices: ["A fictional antebellum Mississippi River town based on Twain's own boyhood", "A modern American city", "A town Twain invented with no real model", "A Northern free town far from any river"] },
          purpose: { q: "What is its role in the novel?", choices: ["Its everyday world of church, school, river, and superstition frames Tom's adventures", "It appears only in the final chapter", "It has no effect on the characters", "It is a place Tom is trying to escape"] },
          significance: { q: "Why does the setting matter to a reader today?", choices: ["Its period racial language and attitudes are part of why the book is discussed and sometimes challenged", "Because the town is entirely made up", "Because setting never affects meaning", "Because nothing about the era shaped the story"] },
          reveals: "How Twain grounds the story in a real time and place, with all of that era's beauty and its injustice.",
          conceals: "How much of the town's ordinary life depended on slavery, which the comedy can make easy to overlook.",
          ace: "Articulate what kind of place St. Petersburg is; connect the setting to the era's realities; extend it to how a story's time and place shape how we read it now."
        }
      ]
    },

    ctob: {
      name: "The Case of the Graveyard Murder",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "In what year was The Adventures of Tom Sawyer first published? Enter the year.",
          evidence: ["Mark Twain wrote it in the years after the Civil War.", "It appeared in the mid-1870s, drawing on his own boyhood memories.", "The novel was first published in the year eighteen seventy-six."],
          hints: ["It is in the 1870s.", "It begins with 187…", "The year is 1876."],
          answer: "1876"
        },
        {
          type: "word",
          prompt: "What chore does Aunt Polly order Tom to do as a punishment, which he tricks the other boys into doing? (one word)",
          evidence: ["It involves brushing a cheap white coating onto a long board fence.", "Tom makes it look like a rare privilege the other boys should envy.", "The word is also used to mean covering up a fault to make it look better."],
          hints: ["It is a white coating for a fence.", "It starts with 'white…'.", "The word is whitewash."],
          answer: "whitewash"
        },
        {
          type: "mc",
          prompt: "Why do Tom and Huck go to the graveyard at midnight?",
          options: [
            "To test a superstitious wart cure using a dead cat.",
            "To dig up a box of buried gold coins.",
            "To hide from Aunt Polly after a prank.",
            "Because Injun Joe told them to meet him there."
          ],
          hints: ["Think about the boys' beliefs about warts and luck.", "Which option is about a superstition, not treasure?"]
        },
        {
          type: "word",
          prompt: "What is the name of the villain who commits the graveyard murder and later hunts Tom in the cave? (two words)",
          evidence: ["He kills the young doctor during a grave-robbing gone wrong.", "He frames the drunken Muff Potter for the crime.", "He later hides a box of gold and menaces the children in the cave."],
          hints: ["He is the novel's main villain.", "The name reflects the period's language and begins with 'Injun…'.", "The name is Injun Joe."],
          answer: "Injun Joe"
        },
        {
          type: "sequence",
          prompt: "Put these events of the novel in the order they happen, earliest first.",
          items: [
            "Tom tricks the other boys into whitewashing Aunt Polly's fence for him.",
            "Tom and Huck witness Injun Joe murder the doctor in the graveyard.",
            "Tom testifies at Muff Potter's trial, and Injun Joe escapes through a window.",
            "Tom and Becky get lost in McDougal's cave, where Tom spots Injun Joe."
          ],
          hints: ["The fence trick is an early, lighthearted scene.", "The murder comes before the trial.", "The cave is near the climax."]
        },
        {
          type: "mc",
          prompt: "At Muff Potter's trial, how does Tom help save an innocent man?",
          options: [
            "He testifies to what he truly saw in the graveyard, exposing Injun Joe.",
            "He pays a lawyer to defend Potter.",
            "He helps Potter break out of jail.",
            "He convinces Huck to confess to the crime."
          ],
          hints: ["Think about what only Tom and Huck actually witnessed.", "It is an act of conscience, done in the courtroom."]
        }
      ]
    },

    arcade: {
      name: "Real History or Tom's Story?",
      instruction: "Tom Sawyer mixes the real world of an antebellum Mississippi River town with Twain's invented plot. Sort each statement: is it REAL HISTORY (a true fact about that time and place) or TOM'S STORY (something specific to the novel's fictional plot)? Reasoning — not speed — earns the points.",
      buckets: [
        { id: "history", label: "Real history", short: "History" },
        { id: "story", label: "Tom's story", short: "Story" }
      ],
      cards: [
        { text: "Slavery was part of daily life in the antebellum Mississippi River towns Twain grew up in.", bucket: "history", why: "Twain's boyhood Missouri was a slaveholding society; that reality shapes the novel's setting and language." },
        { text: "Steamboats carried people and goods up and down the Mississippi River in the 1840s.", bucket: "history", why: "Steamboat travel on the Mississippi was a documented feature of the era Twain depicts." },
        { text: "Children of the era often attended one-room schools and long revival church meetings.", bucket: "history", why: "One-room schooling and revival meetings were real features of small antebellum towns." },
        { text: "Folk superstitions about warts, luck, and spirits were common in that time and region.", bucket: "history", why: "Such superstitions were genuinely widespread in the period Twain drew on." },
        { text: "A boy named Tom Sawyer tricks his friends into whitewashing a fence for him.", bucket: "story", why: "The specific fence trick is Twain's invented episode, not documented history." },
        { text: "Injun Joe murders a doctor in the graveyard and frames Muff Potter.", bucket: "story", why: "This graveyard murder and framing are part of the novel's fictional plot." },
        { text: "Tom and Becky get lost in McDougal's cave while Injun Joe hides inside.", bucket: "story", why: "The cave ordeal is Twain's invention, built for suspense." },
        { text: "Tom and Huck recover a real box of buried gold coins by the end of the story.", bucket: "story", why: "The buried treasure is a fictional plot device, not real history." }
      ],
      followup: "Why might Twain tell a story about real history through one invented boy? What can Tom's adventures show a reader that a list of facts about the era cannot?"
    },

    analysis: {
      mcq: [
        {
          q: "Tom succeeds in getting the fence whitewashed because he —",
          options: [
            "makes the chore look like a rare privilege, so the other boys pay for the chance to do it.",
            "works quickly and finishes the whole fence himself.",
            "threatens the other boys until they help him.",
            "asks Aunt Polly to hire someone else to paint it."
          ],
          why: "Twain shows Tom exploiting the idea that people want most what appears scarce or forbidden — a satirical point about work and desire."
        },
        {
          q: "The graveyard scene changes the novel mainly because —",
          options: [
            "it turns a comic story of pranks into one with real danger and a moral test.",
            "it proves that the boys' superstitions are always correct.",
            "it ends the friendship between Tom and Huck.",
            "it convinces Tom to stop having any adventures."
          ],
          why: "Witnessing the murder shifts the book's stakes from harmless mischief to conscience, fear, and genuine consequence."
        },
        {
          q: "Tom's decision to testify at Muff Potter's trial most clearly shows that —",
          options: [
            "his conscience has grown stronger than his fear of Injun Joe.",
            "he enjoys being the center of attention above all else.",
            "he no longer cares what happens to Muff Potter.",
            "he trusts Injun Joe to spare him."
          ],
          why: "Speaking out despite real danger marks Tom's growth from careless prankster to a boy who acts on conscience."
        },
        {
          q: "When Tom leads Becky out of McDougal's cave, the episode most clearly shows that —",
          options: [
            "he has grown into someone who can be brave and protect others under real danger.",
            "he cares only about finding the buried treasure.",
            "he panics and has to be rescued by adults.",
            "the danger in the cave was never real."
          ],
          why: "The cave ordeal is the climax of Tom's maturing courage — he keeps his head and saves both himself and Becky."
        },
        {
          q: "Across the whole novel, Twain uses Tom's story to suggest that —",
          options: [
            "growing up means learning the difference between harmless mischief and real conscience.",
            "children should never be allowed any freedom at all.",
            "cleverness alone makes a person good.",
            "adults always understand children better than children understand themselves."
          ],
          why: "Tom moves from tricks and games toward genuine moral choices, tracing a coming-of-age about conscience and courage."
        }
      ],
      short: [
        "Choose one moment when Tom chooses conscience over safety or comfort (for example, testifying at the trial or protecting Becky in the cave). Explain what it costs him and why he does it anyway.",
        "Twain shows Tom as both a troublemaker and, in the end, genuinely brave. How does the novel use him to explore what it means to grow up?",
        "Explain what the whitewashing trick reveals about how people value work and reward. Why might Twain open the novel with such a scene?"
      ],
      paragraph: "Write an evidence-based paragraph. The novel moves from lighthearted comedy (the fence, the funeral, the schoolroom) toward real danger (the murder, the trial, the cave). Choose one moment from each side and explain how the shift between them shapes what the novel is finally about. Support your claim with specific details.",
      aceReflection: "Articulate the novel's central idea about mischief, conscience, and growing up in your own words. Connect two moments that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Then into Now",
      prompt: "Tom Sawyer shows a boy moving from careless pranks toward genuine conscience — choosing to tell the truth even when it is dangerous. Choose one way people today face a choice between staying quiet and doing what is right. Explain the connection with evidence, the way Twain grounds a big idea about conscience in the specific choices of one boy.",
      format: "A short evidence-based comparison connecting the novel's ideas to a present-day reality, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Tom tricks the other boys into whitewashing the fence in The Adventures of Tom Sawyer, and what Twain is saying about work and reward. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Adventures of Tom Sawyer. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in The Adventures of Tom Sawyer because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Adventures of Tom Sawyer: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect an idea from The Adventures of Tom Sawyer to the present: [connection]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Adventures of Tom Sawyer for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Twain's 1876 novel through evidence-based tasks. It focuses on Twain's central ideas — the satire of work and reward in the fence scene, the turn from mischief to moral stakes after the graveyard murder, the growth of Tom's conscience through the trial and the cave, and the antebellum river-town world that frames it all. The novel is public domain and freely available; this room paraphrases rather than reproducing long passages and keeps every response on the student's device.",
      reviewNotes: [
        "The Adventures of Tom Sawyer (1876) is in the public domain and freely available through Project Gutenberg and LibriVox. Students can read or listen at no cost.",
        "Mature and sensitive content: the novel contains period racial language and attitudes reflecting its 1840s slaveholding setting, and depicts violence — a graveyard murder, an innocent man framed, and life-threatening danger in the cave. These are among the reasons the book is sometimes challenged. Preview carefully, prepare students, and follow local policy.",
        "Details here were paraphrased from well-established public knowledge of the novel (the whitewashed fence; the dead-cat superstition and the graveyard; Injun Joe's murder of the doctor and the framing of Muff Potter; Tom's testimony at the trial; the buried gold; and Tom and Becky lost in McDougal's cave). Confirm framing against your class edition, as pagination and introductions vary. (Needs review)",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–II / grade 9–10 ELAR TEKS (19 TAC Ch. 110) for reading response, author's purpose and craft, and analysis of fiction and satire, with cross-curricular ties to U.S. history (the antebellum South and life on the Mississippi River). Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through clear visuals, plain directions, and device-local supports. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.3", "RL.9-10.4", "RL.9-10.5", "RL.9-10.6", "RH.9-10.1", "RH.9-10.2", "W.9-10.1", "W.9-10.9"],
      udl: "Multiple means of representation (visuals, plain directions, labeled reconstructions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
