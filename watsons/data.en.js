/* Contraband — The Watsons Go to Birmingham — 1963 (Christopher Paul Curtis). English source data.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; plot, character, and chronology details were
   verified for accuracy and are used only to build original, transformative
   analysis. Standards are good-faith Common Core alignment; TEKS/ELPS flagged
   "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles. */
window.__ROOM__ = {
  id: "watsons",
  storageKey: "contraband.watsons.v1",

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
    "vocab.title": "Words for The Watsons Go to Birmingham — 1963",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Watson Family Keepsakes",
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
    "ctob.title": "The Watsons' Road Log",
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
    "arcade.title": "History or the Watsons' Story?",
    "arcade.default": "Sort each statement by whether it is real history of the 1963 civil-rights-era South or part of Curtis's fictional Watson family story.",
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
      title: "The Watsons Go to Birmingham — 1963",
      author: "Christopher Paul Curtis",
      grades: "Grades 6–8",
      genre: "Historical fiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the novel (print, e-book, or licensed audiobook). This activity does not reproduce or replace the book.",
      copyright: "The Watsons Go to Birmingham — 1963 is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "The novel builds toward the real 1963 bombing of the 16th Street Baptist Church in Birmingham, in which four Black girls were killed, and it portrays the era's racial violence and segregation. A younger child is also nearly caught in a dangerous whirlpool, and the narrator is left deeply traumatized. Preview carefully, prepare students, and align with local policy.",
      disclaimer: "This activity is an independent educational companion to The Watsons Go to Birmingham — 1963 by Christopher Paul Curtis. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY-NC 4.0. The Watsons Go to Birmingham — 1963, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "../images/watsons/hero.webp",
      heroAlt: "An instructional illustration evoking The Watsons — a big, well-worn family sedan loaded for a long summer drive, pulling away from a snowy northern street toward a warm Southern road under a bright sky."
    },
    hook: "Flint, Michigan, 1963. Ten-year-old Kenny Watson tells the story of his loud, loving, funny family — the neighbors call them the Weird Watsons. When Kenny's older brother Byron keeps getting into trouble, their parents decide the cure is a summer with strict Grandma Sands in Birmingham, Alabama. So the whole family piles into the Brown Bomber and drives south — straight toward a summer that will change them, and toward a Sunday morning none of them will ever forget.",
    goals: [
      "Explain how Curtis uses humor and everyday family life to draw readers close before the story turns serious.",
      "Trace Kenny's coming of age and how his relationship with Byron shifts from fear and rivalry toward love and rescue.",
      "Analyze how the family's trip north-to-south connects a warm, funny household to the harder realities of the segregated South in 1963.",
      "Distinguish the real history of 1963 — segregation, the Great Migration, the 16th Street Baptist Church bombing — from the specific, invented story of the Watson family, and carry the novel's questions into the present."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of historical fiction set in 1963, on the edge of major civil-rights events.",
        "Discuss: How can a story make you laugh with a family for a long time and still prepare you for something painful?"
      ],
      during: [
        "Use the Keepsakes to slow down and read key objects and moments closely.",
        "Track how the mood shifts as the family travels from Flint toward Birmingham."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the novel's history to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why the Watson parents decide Byron needs a summer with Grandma Sands. Include one detail from the novel that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments that show Byron changing (for example, an early moment when he torments Kenny and a later moment when he protects him). Explain how comparing them changes your understanding of Byron or of the whole family." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a question the novel raises to the present. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "Great Migration", def: "The decades-long movement of millions of Black Americans out of the rural South to cities in the North and West, seeking work and safety from Jim Crow.", example: "Kenny's parents settling in Flint, Michigan, after leaving the South.", nonexample: "A family that has lived in the same Alabama town for generations without ever moving.", context: "Momma grew up in Birmingham but raises her children up North in Flint, part of this larger movement of families." },
      { term: "segregation", def: "The forced, legal separation of Black and white people in schools, businesses, and public spaces, especially in the Jim Crow South.", example: "The 'Coloreds Only' bathroom the family remembers from downtown Birmingham.", nonexample: "A public library that anyone may use regardless of race.", context: "The Watsons travel from Flint into a South where segregation still shapes daily life in 1963." },
      { term: "civil rights movement", def: "The organized struggle, especially in the 1950s and 1960s, to end racial segregation and win equal rights and protection under the law for Black Americans.", example: "The protests and church organizing happening across the South in the year of the novel.", nonexample: "A private family disagreement with no larger cause behind it.", context: "The novel is set in 1963, a pivotal year of the civil rights movement, which reaches the family through the events in Birmingham." },
      { term: "narrator", def: "The character or voice who tells the story; here, ten-year-old Kenny tells everything from his own point of view.", example: "Kenny describing his family, his fears, and what he sees at the church.", nonexample: "An outside voice listing only dated facts with no personal feelings.", context: "Because Kenny is the narrator, readers understand the frightening events only as much as a scared child can." },
      { term: "coming of age", def: "A story pattern in which a young character grows up by facing a hard experience that changes how they see the world.", example: "Kenny after Birmingham, no longer the same carefree boy he was in Flint.", nonexample: "A character who ends a story exactly the way they began, unchanged.", context: "The novel is a coming-of-age story: Kenny loses some of his innocence over one unforgettable summer." },
      { term: "juvenile delinquent", def: "A young person who repeatedly breaks rules or the law; in the novel, it is used half-jokingly about Byron's constant trouble.", example: "Byron skipping school, playing with fire, and getting his hair conked against the rules.", nonexample: "A student who follows the rules and stays out of trouble.", context: "The family half-jokes that thirteen-year-old Byron has become an 'official' juvenile delinquent, but the worry behind the joke is real." },
      { term: "sacrifice", def: "Giving up something you value for the sake of someone or something else.", example: "The parents spending scarce money to fix up the car and drive Byron south for his own good.", nonexample: "Keeping every dollar for yourself no matter who needs help.", context: "The family sacrifices comfort and money on the long trip because they believe it will help Byron and hold the family together." },
      { term: "trauma", def: "A lasting emotional wound caused by a terrifying or deeply painful experience.", example: "Kenny hiding behind the couch back home, unable to shake what he witnessed in Birmingham.", nonexample: "Forgetting a small embarrassment by the next day.", context: "After the bombing and his near-drowning, Kenny carries a trauma that his family must patiently help him heal." },
      { term: "resilience", def: "The ability to recover and keep going after hardship, often with the support of others.", example: "Byron gently coaxing Kenny out from behind the couch and helping him believe he will be all right.", nonexample: "Giving up entirely and refusing any comfort or help.", context: "The novel ends on the family's resilience — their love and humor slowly pulling Kenny back toward himself." }
    ],

    relic: {
      name: "The Watson Family Keepsakes",
      intro: "Seven instructional reconstructions of objects and moments from The Watsons Go to Birmingham — 1963 — teaching recreations, not artwork from the book. Investigate what each is, its role in the novel, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "bomber", name: "The Brown Bomber", image: "images/bomber.webp",
          clues: ["This is the Watsons' big, old, dull-brown family car, handed down from a relative.", "Before the trip, the family scrapes together money for used tires, spark plugs, and other repairs to make it ready.", "It carries the whole family on the long drive from Flint, Michigan, down to Birmingham, Alabama."],
          identify: { q: "What is this object?", choices: ["The Watsons' aging family car, nicknamed the Brown Bomber", "A brand-new sports car the family buys", "A bus the children ride to school", "A moving truck for a permanent move south"] },
          purpose: { q: "What is its role in the novel?", choices: ["It carries the family on the road trip that structures the whole second half of the story", "It is only mentioned once and never used", "It belongs to Grandma Sands", "It is the reason the family is wealthy"] },
          significance: { q: "What does the effort to fix it up reveal?", choices: ["That the trip matters deeply to the family and is worth real sacrifice", "That the family has money to waste", "That they plan to sell the car in Alabama", "That the children dislike the car"] },
          reveals: "How much this ordinary car — and the journey it makes possible — means to a close, hardworking family.",
          conceals: "That the fun, funny road trip is carrying the family toward a tragedy none of them can foresee.",
          ace: "Articulate what the Brown Bomber makes possible; connect the road trip to the family's closeness; extend it to journeys that change a family today."
        },
        {
          id: "record", name: "The Ultra-Glide Record Player", image: "images/record.webp",
          clues: ["Dad brings home a fancy new record player for the car after Byron's latest trouble.", "It plays music the whole way down the highway, sometimes getting stuck and repeating the same words.", "Dad drives happily through the night, singing along and resting his hand on the outside mirror."],
          identify: { q: "What is this object?", choices: ["A special record player Dad installs in the car for the trip south", "A television the family watches at home", "A gift from Grandma Sands", "A radio the children win in a contest"] },
          purpose: { q: "What is its role in the novel?", choices: ["It fills the long drive with music and marks the trip as a real family adventure", "It is used only for schoolwork", "It causes the car to break down", "It has no effect on the story"] },
          significance: { q: "What does Dad's joy with it reveal?", choices: ["The warmth and humor holding the family together before the tragedy", "That Dad ignores his children", "That the family cares only about money", "That the trip is a punishment for Dad"] },
          reveals: "How Curtis builds long stretches of warmth and comedy so readers love the family before anything bad happens.",
          conceals: "How suddenly and completely that light mood will be shattered in Birmingham.",
          ace: "Articulate the mood the record player sets; connect it to how Curtis prepares readers; extend it to why an author might make you laugh before a sad turn."
        },
        {
          id: "mirror", name: "The Frozen Car Mirror", image: "images/mirror.webp",
          clues: ["On a brutally cold Flint morning, Byron leans close to the outside mirror admiring himself.", "His lips freeze fast to the icy glass, and the whole family panics trying to free him.", "The rescue becomes a chaotic, funny scene that shows exactly why neighbors call them the 'Weird Watsons.'"],
          identify: { q: "What moment does this object capture?", choices: ["Byron getting his lips frozen to the car mirror in the Flint cold", "Kenny learning to drive the car", "The family washing the car for the trip", "A stranger stealing the mirror"] },
          purpose: { q: "What is its role in the novel?", choices: ["It introduces the family's humor and the freezing Flint setting early on", "It is the climax of the book", "It explains why the family is poor", "It is a serious, frightening scene"] },
          significance: { q: "What does this scene reveal about the family?", choices: ["That they are loving and funny, panicking and teasing all at once", "That they do not care about each other", "That Byron is the family's leader", "That the parents are cruel"] },
          reveals: "How the novel opens in comedy, teaching readers to love this warm, ridiculous family.",
          conceals: "How far the story will travel — in miles and in mood — from this frozen, laughing morning.",
          ace: "Articulate what the mirror scene shows about the Watsons; connect it to the book's later shift in tone; extend it to how humor can make hard stories bearable."
        },
        {
          id: "gloves", name: "Joetta's White Church Gloves", image: "images/gloves.webp",
          clues: ["Grandma Sands makes little Joetta a set of white gloves and church clothes in Birmingham.", "On a hot Sunday morning, Joey dresses in white and lacy things to go to Sunday school.", "That same morning, a bomb explodes at the church during services."],
          identify: { q: "What are these gloves?", choices: ["Joetta's white Sunday-school gloves made by Grandma Sands", "Winter gloves for the Flint cold", "Work gloves for fixing the car", "Boxing gloves belonging to Byron"] },
          purpose: { q: "What is their role in the novel?", choices: ["They mark Joey heading to the very church that is bombed that morning", "They are a birthday present with no importance", "They belong to Momma", "They are lost early in the book"] },
          significance: { q: "Why does this small, innocent object matter so much?", choices: ["Its innocence sharpens the horror of what happens at the church", "It shows Joey is spoiled", "It proves the family is rich", "It has no deeper meaning"] },
          reveals: "How an ordinary child's Sunday best becomes unbearably heavy against the real history of the bombing.",
          conceals: "The fear the family feels not knowing, at first, whether Joey survived.",
          ace: "Articulate what the gloves represent; connect that innocence to the church bombing; extend it to how small details can carry huge meaning."
        },
        {
          id: "whirlpool", name: "Collier's Landing and the Whirlpool", image: "images/whirlpool.webp",
          clues: ["Grandma Sands warns the children away from a dangerous swimming spot where a boy once drowned.", "Kenny sneaks there anyway and is pulled under by a powerful whirlpool.", "Byron plunges in and drags his little brother out, then holds him and cries."],
          identify: { q: "What danger does this place represent?", choices: ["A deadly whirlpool that nearly drowns Kenny at a forbidden swimming spot", "A friendly public pool", "A river the family fishes in safely", "A place Kenny invents in a dream"] },
          purpose: { q: "What is its role in the novel?", choices: ["It is Kenny's first brush with death and a turning point between the brothers", "It is a minor scene quickly forgotten", "It is where the family goes on vacation happily", "It explains why they left Flint"] },
          significance: { q: "What does Byron's rescue reveal?", choices: ["That beneath his tough act, Byron loves Kenny fiercely", "That Byron is a careless swimmer", "That Kenny cannot be helped", "That the brothers hate each other"] },
          reveals: "How much Byron truly cares — the moment his 'cool' shell cracks and real love shows.",
          conceals: "How this near-death primes Kenny, days later, to imagine a terrifying figure at the bombed church.",
          ace: "Articulate what nearly happens to Kenny; connect the rescue to Byron's growth; extend it to how a crisis can change a relationship."
        },
        {
          id: "shoe", name: "The Shiny Black Shoe", image: "images/shoe.webp",
          clues: ["Rushing to the church after the explosion, Kenny sees a child's shiny black Sunday shoe in the rubble.", "In his shock, he imagines a frightening figure — the 'Wool Pooh' — tugging it from the other side.", "He pulls the shoe free and carries it away, terrified and unable to make sense of what he has seen."],
          identify: { q: "What is this object?", choices: ["A child's dress shoe Kenny finds in the wreckage of the bombed church", "A shoe Kenny loses at the swimming hole", "A gift Grandma Sands gives him", "One of Byron's basketball shoes"] },
          purpose: { q: "What is its role in the novel?", choices: ["It shows the bombing through the eyes of a terrified, confused child", "It is a clue the police need", "It is a good-luck charm for the trip", "It has nothing to do with the church"] },
          significance: { q: "Why does Kenny imagine the 'Wool Pooh' pulling the shoe?", choices: ["It is how his shocked, childlike mind copes with real horror he cannot yet understand", "It proves a monster is real", "It shows Kenny is lying", "It means the shoe is magic"] },
          reveals: "How Curtis lets a child narrator convey the enormity of the tragedy without spelling out every detail.",
          conceals: "That the shoe does not belong to Joey — who, unharmed, has already left the church.",
          ace: "Articulate what the shoe shows Kenny at the church; connect the 'Wool Pooh' to a child's fear; extend it to how people process events too big to grasp."
        },
        {
          id: "couch", name: "The Space Behind the Couch", image: "images/couch.webp",
          clues: ["Back home in Flint, a traumatized Kenny hides in the narrow space behind the living-room couch.", "He calls it the 'World-Famous Watson Pet Hospital,' pretending he is only resting there.", "Byron patiently coaxes him out and tells him he is too smart to believe he needs to hide, and that he will be all right."],
          identify: { q: "What does this hiding place represent?", choices: ["Where the traumatized Kenny withdraws after Birmingham", "A fort the brothers build for fun", "A closet where the family stores winter coats", "A place Kenny plays with his dinosaurs happily"] },
          purpose: { q: "What is its role in the novel?", choices: ["It shows the lasting emotional wound Kenny carries home", "It is a joke with no meaning", "It is where the family keeps a real pet", "It is the setting of the road trip"] },
          significance: { q: "What does Byron's response reveal?", choices: ["That the family's patient love is what helps Kenny begin to heal", "That Byron gives up on Kenny", "That the trauma will never lift", "That the parents ignore Kenny"] },
          reveals: "How trauma follows a child home, and how a family's steady love slowly draws him back.",
          conceals: "How long and quiet the road to healing really is, beneath the story's hopeful ending.",
          ace: "Articulate why Kenny hides behind the couch; connect Byron's help to the theme of resilience; extend it to how communities help people heal today."
        }
      ]
    },

    ctob: {
      name: "The Watsons' Road Log",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "In what year is the main story set? Enter the year.",
          evidence: ["The novel's full title names the year of the family's trip.", "It is a pivotal year of the civil rights movement in the South.", "The narration places the Watsons' summer in the year nineteen sixty-three."],
          hints: ["It is in the early 1960s.", "It begins with 19…", "The year is 1963."],
          answer: "1963"
        },
        {
          type: "word",
          prompt: "In which U.S. city do the Watsons live before their trip? (one word)",
          evidence: ["It is a cold northern industrial city in Michigan.", "Momma, who grew up in the South, complains it is like living in an icebox.", "The children go to Clark Elementary there."],
          hints: ["It is in Michigan, far from the South.", "It starts with 'Fl…'.", "The city is Flint."],
          answer: "Flint"
        },
        {
          type: "mc",
          prompt: "Why do the Watson parents decide to take Byron to Grandma Sands in Birmingham?",
          options: [
            "They hope a summer with strict Grandma Sands will straighten out Byron's growing trouble.",
            "They want to move the whole family to Alabama permanently.",
            "Byron asks to go live with his grandmother.",
            "Grandma Sands is ill and needs the family to care for her."
          ],
          hints: ["Think about who has been getting into the most trouble.", "Which option is about changing Byron's behavior?"]
        },
        {
          type: "word",
          prompt: "What is the family's nickname for their big brown car? The Brown ______. (one word)",
          evidence: ["It is an old, dull-brown sedan handed down from a relative.", "The family fixes it up with used tires and repairs before the long trip.", "Its nickname pairs the color brown with a punchy second word."],
          hints: ["It sounds like a fast, powerful thing.", "It starts with 'Bomb…'.", "The word is Bomber."],
          answer: "Bomber"
        },
        {
          type: "sequence",
          prompt: "Put these events of the story in the order they happen, earliest first.",
          items: [
            "On a freezing Flint morning, Byron gets his lips stuck to the car mirror.",
            "The family fixes up the Brown Bomber and drives south toward Birmingham.",
            "At a forbidden swimming spot, Kenny is pulled under and Byron rescues him.",
            "A bomb explodes at the church, and a shaken Kenny searches the rubble."
          ],
          hints: ["The frozen-mirror comedy comes near the very start.", "The road trip comes before anything happens in Birmingham.", "The church bombing is the story's climax."]
        },
        {
          type: "mc",
          prompt: "What real historical event does the novel's climax portray?",
          options: [
            "The 1963 bombing of the 16th Street Baptist Church in Birmingham, which killed four Black girls.",
            "A tornado that destroys the family's house in Flint.",
            "A car crash on the highway to Alabama.",
            "A fire that burns down Grandma Sands's home."
          ],
          hints: ["It happens at a church during Sunday services.", "It is a real event from the civil rights era in Birmingham."]
        }
      ]
    },

    arcade: {
      name: "History or the Watsons' Story?",
      instruction: "The Watsons mixes documented history with Curtis's invented family. Sort each statement: is it REAL HISTORY (a true fact about the 1963 civil-rights-era South) or THE WATSONS' STORY (something specific to the novel's fictional plot)? Reasoning earns the points.",
      buckets: [
        { id: "history", label: "Real history", short: "History" },
        { id: "story", label: "The Watsons' story", short: "Story" }
      ],
      cards: [
        { text: "In 1963, a bomb killed four Black girls at the 16th Street Baptist Church in Birmingham.", bucket: "history", why: "This is a documented event of the civil rights era, which the novel portrays." },
        { text: "In the Jim Crow South, businesses and public spaces were segregated by law.", bucket: "history", why: "Legal segregation was a real feature of the 1963 South." },
        { text: "Many Black families moved from the South to northern cities in the Great Migration.", bucket: "history", why: "The Great Migration was a real, large-scale movement of people." },
        { text: "Downtown facilities in Southern cities included 'Coloreds Only' signs.", bucket: "history", why: "Such segregation signs were a real part of the segregated South." },
        { text: "A family named Watson lives in Flint and drives a car they call the Brown Bomber.", bucket: "story", why: "The specific Watson family and their car are Curtis's fiction." },
        { text: "Byron gets his lips frozen to the outside mirror of the family car.", bucket: "story", why: "This invented comic scene belongs to the Watsons' story." },
        { text: "Kenny is nearly pulled under by a whirlpool and is rescued by Byron.", bucket: "story", why: "This near-drowning and rescue are part of the novel's fictional plot." },
        { text: "Kenny imagines the 'Wool Pooh' tugging a shoe in the church rubble.", bucket: "story", why: "The Wool Pooh is Kenny's invented image within Curtis's fiction." }
      ],
      followup: "Why might Curtis tell real history through one invented family? What can a story about the Watsons show a reader that a list of facts cannot?"
    },

    analysis: {
      mcq: [
        {
          q: "Curtis fills the first half of the novel with jokes and family chaos mainly because —",
          options: [
            "he wants readers to love the Watsons so the later tragedy lands with full weight.",
            "he has no serious themes to explore.",
            "the humor is meant to hide that nothing important happens.",
            "he is only writing about winter in Flint."
          ],
          why: "The warmth and comedy build a bond with the family, so that when the story turns to the bombing, readers feel it deeply."
        },
        {
          q: "The parents' plan to leave Byron with Grandma Sands shows that —",
          options: [
            "they are worried about him and willing to make a real sacrifice to help him grow up right.",
            "they no longer want Byron in the family.",
            "they think Birmingham is a safer place than Flint.",
            "they simply want a vacation without their oldest son."
          ],
          why: "The decision, and the effort to prepare the car and the trip, reflect the parents' love and concern beneath their frustration."
        },
        {
          q: "Byron pulling Kenny from the whirlpool most clearly reveals that —",
          options: [
            "under his tough, 'cool' act, Byron loves his little brother deeply.",
            "Byron is a reckless troublemaker with no good in him.",
            "Kenny was never really in danger.",
            "the brothers will never get along."
          ],
          why: "The rescue — and Byron's tears afterward — crack his tough shell and show the real bond between the brothers."
        },
        {
          q: "Kenny imagines the 'Wool Pooh' at the church because —",
          options: [
            "his shocked, childlike mind is trying to cope with a horror too big to understand.",
            "a real monster is loose in Birmingham.",
            "he is trying to trick his sister Joetta.",
            "he wants an excuse to leave the church."
          ],
          why: "The Wool Pooh is how Kenny's frightened imagination processes the trauma of the bombing, letting Curtis show the event through a child's eyes."
        },
        {
          q: "By the end of the novel, Kenny has come to understand that —",
          options: [
            "the world can be cruel and frightening, but his family's love can help him carry it.",
            "nothing that happened in Birmingham really mattered.",
            "he should never have cared about Byron.",
            "the trip solved every problem in the family."
          ],
          why: "Kenny's healing behind the couch, helped by Byron, marks his growth: he loses some innocence but gains a deeper trust in his family."
        }
      ],
      short: [
        "Choose one funny early scene (for example, the frozen mirror or a family car ride). Explain how Curtis uses humor to make you care about the Watsons before the story turns serious.",
        "The novel shows Byron as both a bully and, in the end, a loving brother. How does Curtis use him to explore what it means to grow up and protect the people you love?",
        "Explain why Curtis tells the story of the 1963 church bombing through the eyes of a ten-year-old narrator. What does that choice let readers feel or understand?"
      ],
      paragraph: "Write an evidence-based paragraph. The Watson family travels from the cold, funny world of Flint to the segregated South and the tragedy in Birmingham. How does this journey change Kenny — and what role does his family play in helping him carry what he sees? Support your claim with specific details.",
      aceReflection: "Articulate the novel's central idea about family, growing up, and facing hard truths in your own words. Connect two moments that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Then into Now",
      prompt: "The Watsons shows a loving family facing a violent moment of history together, leaning on humor, care, and each other to survive it. Choose one way that families or communities today support one another through frightening or painful events. Explain the connection with evidence, the way Curtis grounds big history in one family's specific experience.",
      format: "A short evidence-based comparison connecting the novel's history to a present-day reality, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why the Watson parents decide Byron needs a summer with Grandma Sands in The Watsons Go to Birmingham — 1963. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Watsons Go to Birmingham — 1963. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in The Watsons Go to Birmingham — 1963 because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Watsons Go to Birmingham — 1963: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect a theme from The Watsons Go to Birmingham — 1963 to the present: [connection]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Watsons Go to Birmingham — 1963 for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to The Watsons Go to Birmingham — 1963. It supports close reading of Curtis's central themes — a warm, funny family; Kenny's coming of age; the bond between the brothers; and a child's-eye encounter with the real history of 1963. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The Watsons Go to Birmingham — 1963 is copyrighted. This is an independent companion — students need their own lawful copy; the room links to and quotes no text.",
        "Mature content: the novel builds to the real 16th Street Baptist Church bombing in Birmingham, in which four Black girls were killed, and it depicts racial violence and segregation; a child also nearly drowns, and the narrator is left traumatized. Preview carefully, prepare students, and follow local policy.",
        "Details here were checked against the novel (the 1963 Flint, Michigan setting; the Watson family — Kenny, Byron, Joetta, Momma, Dad; the Brown Bomber and the Ultra-Glide record player; the frozen-mirror scene; the family drive to Grandma Sands in Birmingham; the whirlpool near-drowning and Byron's rescue; the church bombing and the shoe; the 'Wool Pooh'; and Kenny's trauma and healing at home). Confirm against your class edition, as pagination and framing vary.",
        "The novel presents the bombing through Kenny's confused, frightened perspective; Joetta is unharmed. If clarifying for students, note that the four girls killed were not the Watsons — the family is fictional set against the real event. (Needs review)",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 6–8 ELAR TEKS (19 TAC Ch. 110) for reading response, author's purpose and craft, and multiple-genre analysis, with cross-curricular ties to U.S. history (the civil rights movement, the Great Migration, and the 1963 Birmingham church bombing). Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through clear visuals, plain directions, and device-local supports. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.6.1", "RL.7.1", "RL.8.1", "RL.6.2", "RL.7.2", "RL.8.2", "RL.6.3", "RL.7.3", "RL.8.3", "RL.6.6", "RH.6-8.1", "W.6-8.1", "W.6-8.9"],
      udl: "Multiple means of representation (visuals, plain directions, labeled reconstructions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
