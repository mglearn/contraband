/* Contraband — Black Boy (Richard Wright). English source data.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; plot, character, and chronology details were
   verified for accuracy and are used only to build original, transformative
   analysis. Standards are good-faith Common Core alignment; TEKS/ELPS flagged
   "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles. */
window.__ROOM__ = {
  id: "blackboy",
  storageKey: "contraband.blackboy.v1",

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
    "enter.readListenNote": "This is a copyrighted memoir; students need lawful access to their own copy. This activity does not link to or reproduce the text.",
    "enter.read": "Find the book",
    "enter.listen": "Audiobook",
    "enter.readAloud": "Use your class's licensed copy or audiobook.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Black Boy",
    "vocab.intro": "{n} terms that unlock the memoir. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Artifacts of a Southern Boyhood",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the memoir",
    "relic.q.significance": "What it reveals about the story's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Record of a Boyhood",
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
    "arcade.title": "History or Wright's Memory?",
    "arcade.default": "Sort each statement by whether it is documented history of the Jim Crow South or a specific memory from Wright's own coming of age.",
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
    "extend.evidence": "The idea from the memoir I am building on",
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
    "print.item.relic": "Artifacts evidence sheet",
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
      id: "blackboy",
      title: "Black Boy",
      author: "Richard Wright",
      grades: "Grades 11–12",
      genre: "Memoir",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the memoir (print, e-book, or licensed audiobook). This activity does not reproduce or replace the book.",
      copyright: "Black Boy is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "The memoir portrays racism and racial violence, hunger and poverty, and strong language, drawn from Wright's own coming of age in the Jim Crow South. It is frequently banned or challenged. Preview carefully, prepare students, and align with local policy.",
      disclaimer: "This activity is an independent educational companion to Black Boy by Richard Wright. Students need lawful access to the book. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author's estate or publisher. Original activity content is licensed under CC BY-NC 4.0. Black Boy, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "../images/blackboy/hero.webp",
      heroAlt: "An instructional illustration evoking Black Boy — a lone boy walking a dusty Southern street at dusk, a shuttered library and a distant train, hunger and longing hanging over the color line."
    },
    hook: "The Deep South, in the years around and after the First World War. A hungry, watchful Black boy grows up moving between Mississippi, Arkansas, and Tennessee, learning early that in this world his questions, his pride, and even his appetite for reading can put him in danger. Across a childhood of poverty, a grandmother's strict religion, and a string of humiliating jobs, Richard Wright discovers the one thing no one means to give him — the power of words — and begins planning his escape north.",
    goals: [
      "Explain how hunger — for food, for dignity, and for knowledge — drives Wright's coming of age.",
      "Trace how the daily rules of the Jim Crow color line shape and threaten a boy who refuses to stop asking questions.",
      "Analyze how Wright's discovery of reading and writing becomes an act of resistance and a path toward freedom.",
      "Distinguish the documented history of the Jim Crow South from the specific, personal memories of Wright's own life, and carry the memoir's questions into the present."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of memoir as a true story told from memory.",
        "Discuss: What does it mean to be hungry for something the world around you is built to deny you?"
      ],
      during: [
        "Use the Artifacts to slow down and read key objects and moments closely.",
        "Track how each humiliation and each book pushes Wright toward leaving the South."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the memoir's history to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why reading becomes so important to Wright. Include one detail from the memoir that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments in the memoir that show hunger of different kinds (for example, hunger for food and hunger for knowledge). Explain how comparing them changes your understanding of Wright or a theme." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a question the memoir raises to the present. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "memoir", def: "A true story a writer tells about their own life, shaped by memory and personal meaning rather than invention.", example: "Wright recounting his own childhood hunger, jobs, and reading.", nonexample: "A made-up novel about characters who never lived.", context: "Because Black Boy is a memoir, its events come from Wright's own remembered life." },
      { term: "Jim Crow", def: "The system of laws and customs that enforced racial segregation and denied Black people equal rights in the American South.", example: "Rules about which doors, jobs, and words a Black person was allowed.", nonexample: "A society where people of all races share equal legal rights.", context: "Every job and street Wright walks is governed by the unwritten rules of Jim Crow." },
      { term: "the color line", def: "The invisible boundary of segregation that dictated how Black and white people were expected to behave toward each other.", example: "A Black worker being expected to act 'lesser' before a white employer.", nonexample: "Two coworkers treating each other as equals.", context: "Wright is constantly punished for stepping over the color line, even by accident." },
      { term: "Great Migration", def: "The mass movement of millions of Black Americans out of the rural South to Northern cities in search of work and freedom.", example: "Wright's own plan to leave the South for the North.", nonexample: "A family choosing to remain on the same Southern land for generations.", context: "Wright's dream of going north is part of the larger Great Migration of his era." },
      { term: "sharecropping", def: "A farming arrangement in which a family works land owned by someone else for a share of the crop, often trapped in debt.", example: "Rural families near Wright working land they will never own.", nonexample: "A farmer who owns their land free and clear.", context: "The poverty around Wright is rooted in a South built on sharecropping and low wages." },
      { term: "prohibition", def: "The period when making and selling alcohol was illegal in the United States, which pushed liquor into a hidden, criminal trade.", example: "The saloon world a very young Richard is exposed to before Prohibition.", nonexample: "A store legally selling wine over the counter.", context: "Wright's early years brush against the world of drink and its risky, hidden economy." },
      { term: "menial", def: "Describing low-status, low-paying work considered fit only for those at the bottom of a social order.", example: "The string of hard, humiliating jobs Wright takes to survive.", nonexample: "A respected, well-paid profession open to advancement.", context: "The color line keeps Wright locked into menial work no matter how capable he is." },
      { term: "dignity", def: "A sense of one's own worth and the respect a person is owed simply for being human.", example: "Wright refusing to grovel or fake cheerfulness to please a white boss.", nonexample: "Accepting insults quietly because you believe you deserve them.", context: "Wright's insistence on his own dignity repeatedly puts him in danger." },
      { term: "literacy", def: "The ability to read and write — and, for Wright, a doorway to ideas the world tries to keep from him.", example: "Wright forging a note to borrow library books meant for white readers.", nonexample: "Being kept from books and never learning to read critically.", context: "For Wright, literacy is not just a skill but a form of escape and resistance." }
    ],

    relic: {
      name: "Artifacts of a Southern Boyhood",
      intro: "Seven instructional reconstructions of objects and moments from Black Boy — teaching recreations, not artwork from the book. Investigate what each is, its role in the memoir, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "hunger", name: "The Empty Plate", image: "../images/blackboy/hunger.webp",
          clues: ["From his earliest memories, Richard is shadowed by a gnawing, physical hunger.", "After his father leaves, there is often little or no food in the house.", "Hunger becomes something he can feel in his body and never quite forget."],
          identify: { q: "What does this empty plate represent?", choices: ["The constant, physical hunger that shapes Richard's earliest childhood", "A single missed meal that is quickly forgotten", "A feast the family enjoys on holidays", "Food Richard refuses to eat out of stubbornness"] },
          purpose: { q: "What is its role in the memoir?", choices: ["It links physical hunger to every other hunger Richard feels — for dignity and knowledge", "It shows the family is wealthy", "It is a minor detail with no larger meaning", "It explains why Richard dislikes his mother"] },
          significance: { q: "What does this hunger reveal?", choices: ["How poverty under the color line marks a child's body and mind for life", "That Richard is simply picky about food", "That hunger had no effect on who he became", "That the family chose to go without food"] },
          reveals: "How poverty and hunger are the ground on which the whole memoir stands.",
          conceals: "How much of Richard's later drive and anger grows out of that early, bodily wanting.",
          ace: "Articulate what the hunger shows; connect it to Richard's other hungers; extend it to how need shapes a young person today."
        },
        {
          id: "bible", name: "Granny's Bible and the Silent House", image: "../images/blackboy/bible.webp",
          clues: ["Richard is raised for a time in his grandmother's strict, religious household.", "The home runs on rules, prayer, and the expectation of unquestioning belief.", "Richard's stubborn questions and doubts set him against Granny's faith."],
          identify: { q: "What does Granny's Bible represent in the house?", choices: ["A demand for strict obedience and belief that Richard cannot accept", "A book Richard loves to read for pleasure", "A gift Granny gives Richard to sell", "A schoolbook assigned by his teacher"] },
          purpose: { q: "What is its role in the memoir?", choices: ["It becomes a battleground between Granny's authority and Richard's questioning mind", "It brings the family peace and unity", "It has no effect on Richard's development", "It teaches Richard to farm"] },
          significance: { q: "What does this conflict reveal about Richard?", choices: ["That his need to question authority is powerful and comes at a cost", "That he secretly agrees with everything Granny believes", "That he cares nothing about ideas", "That religion never appears in the memoir"] },
          reveals: "How early Richard's independent, questioning spirit sets him apart from those around him.",
          conceals: "How lonely and punished that questioning makes a child inside his own family.",
          ace: "Articulate the conflict over the Bible; connect it to Richard's need to question; extend it to the cost of independent thinking."
        },
        {
          id: "job", name: "The White Man's Store Counter", image: "../images/blackboy/job.webp",
          clues: ["To survive, Richard takes a string of menial jobs for white employers.", "He is expected to smile, defer, and never seem too smart or too proud.", "Small acts of dignity or curiosity can get him fired — or worse."],
          identify: { q: "What does this counter represent?", choices: ["The humiliating jobs where Richard must perform submission to survive", "A store Richard owns himself", "A place where Richard is treated as an equal", "A school where Richard learns a trade"] },
          purpose: { q: "What is its role in the memoir?", choices: ["It shows how the color line polices even a boy's face, tone, and manner", "It shows Richard is lazy and unemployable", "It has nothing to do with race", "It is where Richard makes lifelong friends"] },
          significance: { q: "What do these jobs reveal?", choices: ["That survival under Jim Crow demanded a daily, costly performance of submission", "That the jobs were fair and well paid", "That Richard enjoyed the work", "That white employers were always kind"] },
          reveals: "How the color line reached past the law into a boy's every expression and gesture.",
          conceals: "How much rage and self-suppression that constant performance cost him.",
          ace: "Articulate what the jobs demand of Richard; connect the performance to the color line; extend it to code-switching pressures today."
        },
        {
          id: "library", name: "The Forged Library Note", image: "../images/blackboy/library.webp",
          clues: ["Richard is barred from the public library because it is for white patrons only.", "He forges a note pretending he is fetching books for a white man.", "Through this trick he reaches writers whose ideas change how he sees the world."],
          identify: { q: "What is this forged note?", choices: ["A ruse that lets Richard secretly borrow books denied to Black readers", "A permission slip his mother wrote", "A note firing him from a job", "A letter inviting him north"] },
          purpose: { q: "What is its role in the memoir?", choices: ["It opens the world of ideas and modern writers to a boy shut out of it", "It gets Richard a better-paying job", "It has no effect on his thinking", "It is used only once and forgotten"] },
          significance: { q: "What does this act reveal?", choices: ["That reading is so vital to Richard he will risk danger and deceit to reach it", "That Richard breaks rules for no reason", "That books meant little to him", "That the library welcomed him"] },
          reveals: "How literacy becomes an act of resistance against a world designed to keep him ignorant.",
          conceals: "How much reading unsettles him — showing him a wider life he cannot yet reach.",
          ace: "Articulate what the note lets Richard do; connect reading to freedom; extend it to what access to books means today."
        },
        {
          id: "words", name: "The Pawned Pistol and the First Story", image: "../images/blackboy/words.webp",
          clues: ["As a boy, Richard scrapes together words the way others scrape together coins.", "He writes a story and manages to get it printed in a local Black newspaper.", "The adults around him are baffled or suspicious that a boy would want to write."],
          identify: { q: "What does the first printed story represent?", choices: ["Richard's early, lonely discovery that he can make something with words", "A story someone else wrote for him", "A schoolbook he was forced to copy", "A newspaper he delivered but never read"] },
          purpose: { q: "What is its role in the memoir?", choices: ["It marks the birth of Richard's identity as a writer, against everyone's expectations", "It earns the family a fortune", "It has no meaning for his future", "It is quickly forgotten by Richard himself"] },
          significance: { q: "What does the adults' reaction reveal?", choices: ["That Richard's ambition to write sets him apart even from his own community", "That everyone encouraged him to write", "That writing was seen as ordinary", "That he had no real talent"] },
          reveals: "How writing becomes Richard's way of naming a world that has no place for him.",
          conceals: "How isolating it is to want something no one around you understands or values.",
          ace: "Articulate what the first story means to Richard; connect writing to identity; extend it to finding a voice today."
        },
        {
          id: "train", name: "The Northbound Train", image: "../images/blackboy/train.webp",
          clues: ["Throughout his youth, Richard hears of a North where life might be freer.", "Family members and neighbors leave the South seeking work and dignity.", "Richard begins saving, planning, and dreaming of boarding a train out of the South."],
          identify: { q: "What does the northbound train represent?", choices: ["Richard's hope of escaping the Jim Crow South for a freer life in the North", "A train Richard drives for a living", "A vacation the family takes together", "A route to visit relatives and return"] },
          purpose: { q: "What is its role in the memoir?", choices: ["It embodies the pull of the Great Migration and Richard's determination to leave", "It shows Richard is afraid to travel", "It has nothing to do with his future", "It is a train that never runs"] },
          significance: { q: "What does his plan to leave reveal?", choices: ["That Richard believes he must go to survive and become himself", "That he is simply running from responsibility", "That the North is exactly like the South", "That he expects the North to solve everything"] },
          reveals: "How the memoir sits inside the vast history of the Great Migration north.",
          conceals: "That the North holds its own hardships the young Richard cannot yet foresee.",
          ace: "Articulate what the train means to Richard; connect his plan to the Great Migration; extend it to why people leave home today."
        },
        {
          id: "silence", name: "The Lesson in Silence", image: "../images/blackboy/silence.webp",
          clues: ["Richard learns that violence against Black people can come with no punishment.", "He absorbs stories of relatives and neighbors harmed or driven off by white violence.", "The adults teach him to swallow his feelings and stay silent to survive."],
          identify: { q: "What does this 'lesson in silence' represent?", choices: ["The way racial terror teaches Black children to hide their true feelings to stay alive", "A quiet study habit Richard develops", "A game the children play together", "A rule only about being polite at dinner"] },
          purpose: { q: "What is its role in the memoir?", choices: ["It shows how fear and violence shaped the behavior of everyone under Jim Crow", "It shows the South was peaceful and safe", "It has no bearing on Richard's choices", "It explains why Richard likes silence"] },
          significance: { q: "What does Richard's response reveal?", choices: ["That he resents this forced silence and it fuels his need to speak and write", "That he accepts silence gladly", "That the danger was imaginary", "That he never thinks about it again"] },
          reveals: "How racial terror operated as an everyday, unspoken pressure on Black life.",
          conceals: "How much this enforced silence contradicts the very act of writing a memoir.",
          ace: "Articulate what the silence demands; connect it to Richard's drive to write; extend it to who gets silenced today."
        }
      ]
    },

    ctob: {
      name: "The Record of a Boyhood",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "In what region of the United States does Wright's boyhood take place? (one word)",
          evidence: ["The story moves among Mississippi, Arkansas, and Tennessee.", "Its whole world is governed by the segregation laws of Jim Crow.", "It is the region millions of Black families later left in the Great Migration."],
          hints: ["It is the opposite of the North.", "It starts with 'Sou…'.", "The region is the South."],
          answer: "South"
        },
        {
          type: "word",
          prompt: "What physical need shadows Richard from his earliest memories and shapes the whole memoir? (one word)",
          evidence: ["After his father leaves, there is often no food in the house.", "Richard feels this need in his body and cannot forget it.", "The word also describes his longing for dignity and for books."],
          hints: ["It is what you feel when you have not eaten.", "It starts with 'hun…'.", "The word is hunger."],
          answer: "hunger"
        },
        {
          type: "mc",
          prompt: "Why does Richard forge a note to use the public library?",
          options: [
            "Because the library is for white patrons only, and it is the only way he can reach the books he hungers to read.",
            "Because he has lost his own library card.",
            "Because he wants to prove he can trick the librarian for fun.",
            "Because a teacher assigned him to borrow a specific book."
          ],
          hints: ["Think about who was allowed to use the library.", "Which option is about reaching books denied to him?"]
        },
        {
          type: "word",
          prompt: "In which direction does Richard dream of traveling to find a freer life? (one word)",
          evidence: ["Neighbors and relatives leave the South seeking work and dignity.", "This movement of Black families is called the Great Migration.", "Richard saves and plans to board a train heading this way."],
          hints: ["It is the opposite of South.", "It starts with 'Nor…'.", "The direction is North."],
          answer: "North"
        },
        {
          type: "sequence",
          prompt: "Put these moments of Richard's boyhood in the order they happen, earliest first.",
          items: [
            "As a small child, Richard is shadowed by constant hunger after his father leaves.",
            "Richard clashes with Granny's strict religion and her demand that he simply believe.",
            "Richard forges a note and secretly borrows books from the whites-only library.",
            "Richard saves and plans to board a northbound train out of the South."
          ],
          hints: ["The childhood hunger comes first.", "The library reading comes after he is older and working.", "Leaving for the North is the final step."]
        },
        {
          type: "mc",
          prompt: "What does reading and writing most clearly become for Richard?",
          options: [
            "A form of resistance and a doorway toward freedom the world tries to deny him.",
            "A hobby he takes up only to pass idle time.",
            "A way to earn the approval of his white employers.",
            "A skill his family proudly encourages from the start."
          ],
          hints: ["Think about why he risks so much to reach books.", "It is tied to his escape and his sense of self."]
        }
      ]
    },

    arcade: {
      name: "History or Wright's Memory?",
      instruction: "Black Boy sits inside documented history but is built from Wright's own memories. Sort each statement: is it REAL HISTORY (a true fact about the Jim Crow South and its era) or WRIGHT'S MEMORY (a specific memory from his own coming of age)? Reasoning earns the points.",
      buckets: [
        { id: "history", label: "Documented history", short: "History" },
        { id: "memory", label: "Wright's memory", short: "Memory" }
      ],
      cards: [
        { text: "Segregation laws and customs across the South enforced a strict 'color line' between Black and white people.", bucket: "history", why: "Jim Crow segregation was a documented reality of the era." },
        { text: "White violence against Black people frequently went unpunished under Jim Crow.", bucket: "history", why: "Racial terror with impunity is real, documented history." },
        { text: "Millions of Black Americans left the South for Northern cities in the Great Migration.", bucket: "history", why: "The Great Migration is a well-documented historical movement." },
        { text: "Black Southerners were often trapped in low-paid, menial work with little chance of advancement.", bucket: "history", why: "Economic exclusion under Jim Crow is documented history." },
        { text: "A hungry boy named Richard is raised for a time in his grandmother's strict, religious home.", bucket: "memory", why: "This specific family memory belongs to Wright's own life." },
        { text: "Richard forges a note to borrow books from a whites-only library.", bucket: "memory", why: "This particular act is a personal memory from Wright's youth." },
        { text: "Richard gets his first story printed in a local Black newspaper as a boy.", bucket: "memory", why: "This specific event is a memory from Wright's own coming of age." },
        { text: "Richard clashes with his grandmother over her demand that he simply believe.", bucket: "memory", why: "This personal conflict is drawn from Wright's own remembered life." }
      ],
      followup: "Why might Wright tell the history of Jim Crow through the memories of one boyhood? What can a single life show a reader that a list of facts cannot?"
    },

    analysis: {
      mcq: [
        {
          q: "Hunger matters so much in Black Boy because —",
          options: [
            "it links Richard's physical need for food to his deeper hungers for dignity and knowledge.",
            "it is a single episode quickly resolved early in the book.",
            "it shows the family is comfortably well-off.",
            "it is only a symbol with no basis in real events."
          ],
          why: "Wright uses literal hunger as the root image for every other kind of wanting that drives his life."
        },
        {
          q: "Richard's conflict with Granny's religion most clearly shows that —",
          options: [
            "his need to question authority is powerful and sets him at odds even with his own family.",
            "he secretly shares all of Granny's beliefs.",
            "he has no interest in ideas of any kind.",
            "religion plays no real part in his upbringing."
          ],
          why: "The clash over belief reveals the independent, questioning mind that both frees and isolates Richard."
        },
        {
          q: "Richard forges a library note mainly because —",
          options: [
            "the library is closed to Black readers, and reading has become something he will risk danger to reach.",
            "he has simply misplaced his own library card.",
            "he wants to embarrass the librarian.",
            "a teacher required him to check out one specific title."
          ],
          why: "The forged note shows how far Richard will go for books in a world built to keep him from them."
        },
        {
          q: "The menial jobs Richard takes for white employers reveal that —",
          options: [
            "survival under the color line demanded a constant, costly performance of submission.",
            "Richard was too lazy to hold any job.",
            "the work had nothing to do with race.",
            "his employers always treated him as an equal."
          ],
          why: "The jobs show how Jim Crow policed not just the law but a boy's face, tone, and pride."
        },
        {
          q: "By the end of the memoir, reading and writing have become —",
          options: [
            "a form of resistance and a path toward the freedom Richard seeks in the North.",
            "an idle hobby he abandons as he grows up.",
            "a way to win his white employers' approval.",
            "a skill his family proudly encouraged from the start."
          ],
          why: "Wright frames literacy as both escape and rebellion, carrying him toward a life beyond the South."
        }
      ],
      short: [
        "Choose one moment when Richard chooses dignity or truth over safety (for example, questioning Granny, refusing to grovel at a job, or forging the library note). Explain what it costs him and why he does it anyway.",
        "Wright shows how the adults around him teach children to stay silent to survive. How does the memoir use that enforced silence to explain Richard's drive to speak and write?",
        "Explain the meaning of Richard's hunger. Why might Wright make one physical need stand for so many different longings across the memoir?"
      ],
      paragraph: "Write an evidence-based paragraph. Wright is denied food, schooling, dignity, and even books — yet he keeps reaching for more. How does his refusal to stop wanting shape who he becomes across the memoir? Support your claim with specific details.",
      aceReflection: "Articulate the memoir's central idea about hunger, the color line, and the power of words in your own words. Connect two moments that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Then into Now",
      prompt: "Black Boy shows a young person reaching for dignity and knowledge through reading, questioning, and planning an escape. Choose one way that a young person or community today reaches for opportunity or pushes back against being shut out. Explain the connection with evidence, the way Wright grounds big history in one boy's specific choices.",
      format: "A short evidence-based comparison connecting the memoir's history to a present-day reality, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why reading and writing become so important to Richard in Black Boy. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Black Boy. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in Black Boy because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Black Boy: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect a theme from Black Boy to the present: [connection]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Black Boy for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to Black Boy. It supports close reading of Wright's central themes — hunger of body and mind, the daily machinery of the Jim Crow color line, the power of literacy as resistance, and the pull of the Great Migration north. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Black Boy is copyrighted. This is an independent companion — students need their own lawful copy; the room links to and quotes no text.",
        "Mature content: the memoir depicts racism and racial violence, hunger and poverty, and strong language, and it is frequently banned or challenged. Preview carefully, prepare students, and follow local policy.",
        "Details here were checked against the memoir (the Deep South setting across Mississippi, Arkansas, and Tennessee; the early childhood hunger; Granny's strict religion; the string of menial jobs under white employers; the forged note used to borrow whites-only library books; getting a first story printed in a Black newspaper; and the plan to leave for the North). Confirm against your class edition, as pagination and framing vary.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III/IV ELAR TEKS (19 TAC Ch. 110) for reading response, author's purpose and craft, and multiple-genre (memoir) analysis, with cross-curricular ties to U.S. history (the Jim Crow South and the Great Migration). Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through clear visuals, plain directions, and device-local supports. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.3", "RL.11-12.4", "RL.11-12.5", "RL.11-12.6", "RI.11-12.1", "RH.11-12.1", "W.11-12.1", "W.11-12.9"],
      udl: "Multiple means of representation (visuals, plain directions, labeled reconstructions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
