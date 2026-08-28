/* Contraband — Narrative of the Life of Frederick Douglass, an American Slave
   (Frederick Douglass, 1845). English source data.

   PUBLIC-DOMAIN WORK. This 1845 memoir is in the public domain and freely
   available (Project Gutenberg / LibriVox). This room reproduces no long
   passages and invents no quotations; historical, biographical, and narrative
   details are paraphrased from well-established public knowledge and used only
   to build original, transformative analysis. Standards are good-faith Common
   Core alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "douglass",
  storageKey: "contraband.douglass.v1",

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
    "enter.readListenNote": "This memoir is in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for the Narrative of the Life of Frederick Douglass",
    "vocab.intro": "{n} terms that unlock the memoir. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Objects and Moments from the Narrative",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the memoir",
    "relic.q.significance": "What it reveals about the memoir's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Road from Slavery to Freedom",
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
    "arcade.title": "Historical Fact or Common Misconception?",
    "arcade.default": "Sort each statement by whether it is a documented historical fact about American slavery and abolition or a common misconception.",
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
      title: "Narrative of the Life of Frederick Douglass",
      author: "Frederick Douglass",
      grades: "Grades 9–12",
      genre: "Memoir · Slave narrative",
      time: "60–90 minutes",
      spoiler: "Minimal spoilers",
      rights: "public-domain",
      textAccess: "This 1845 memoir is in the public domain. Students can read or listen to the full text for free through Project Gutenberg and LibriVox. This room paraphrases rather than reproducing long passages.",
      contentNote: "This memoir describes the brutality of slavery — whippings, beatings, family separation, and other violence — recounted plainly and with dignity by a man who survived it. Preview carefully, prepare students, and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/23",
      audio: "https://librivox.org/narrative-of-the-life-of-frederick-douglass-by-frederick-douglass/",
      hero: "../images/douglass/hero.webp",
      heroAlt: "An instructional illustration evoking the Narrative — a spelling book and a quill resting on rough wooden planks beside a broken chain, with the North Star faint above a distant horizon (no real people depicted)."
    },
    hook: "Maryland, in the decades before the Civil War. A boy born into slavery is not even told the year of his birth. He is worked, watched, and beaten to keep him ignorant — because the people who hold him understand that a person who can read and reason is already halfway to being free. In his own memoir, Frederick Douglass traces the exact steps by which he moved from bondage to a stolen literacy, to open defiance, and at last to freedom in the North — and shows the reader why slavery had to depend on lies to survive.",
    goals: [
      "Explain how Douglass presents literacy as both dangerous to enslavers and essential to his path toward freedom.",
      "Trace how everyday cruelties — hunger, the denied birthdate, the whip, forced ignorance — build toward Douglass's resistance and escape.",
      "Analyze how Douglass exposes the hypocrisy that let a slaveholding society call itself Christian and free.",
      "Distinguish the documented history of American slavery and abolition from common misconceptions, and carry the memoir's questions into the present."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of the slave narrative as both memoir and argument for abolition.",
        "Discuss: Why might a system built on holding people captive work so hard to keep them from learning to read?"
      ],
      during: [
        "Use the Relic Room to slow down and read key objects and moments closely.",
        "Track how each experience pushes Douglass from silent endurance toward open resistance and escape."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the memoir's ideas to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Douglass says learning to read was 'the pathway from slavery to freedom.' Include one detail from the memoir that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments in the memoir that show Douglass moving from endurance toward resistance (for example, learning to read and standing up to Covey). Explain how comparing them changes your understanding of Douglass or a theme." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a question the memoir raises to the present. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "slave narrative", def: "A first-person account, written by a formerly enslaved person, describing life in slavery and the escape or path to freedom.", example: "Douglass's Narrative, written to prove from his own experience that slavery was real and cruel.", nonexample: "A novel invented by an author who was never enslaved.", context: "As a slave narrative, the book is meant both to tell Douglass's life and to argue against slavery itself." },
      { term: "abolition", def: "The movement and cause dedicated to ending slavery entirely.", example: "The antislavery activists in the North who published and promoted Douglass's book.", nonexample: "A plan only to make slavery a little less harsh while keeping it legal.", context: "Douglass became one of the most powerful voices of abolition, using his own story as evidence." },
      { term: "emancipation", def: "The act of freeing a person or a whole group from slavery or bondage.", example: "Douglass reaching the free North and later working so all enslaved people might be freed.", nonexample: "A person choosing to remain legally enslaved forever.", context: "The memoir points beyond Douglass's own escape toward the emancipation of everyone still held in slavery." },
      { term: "literacy", def: "The ability to read and write.", example: "Douglass secretly trading bread to poor white boys for reading lessons.", nonexample: "Being deliberately kept ignorant so a person cannot read a pass or a Bible.", context: "Douglass presents literacy as the exact thing enslavers most feared, because a reader could imagine and argue for freedom." },
      { term: "overseer", def: "A man hired to supervise enslaved workers and to enforce labor and punishment on a plantation.", example: "The brutal overseers Douglass describes, who whipped enslaved people for the smallest reasons.", nonexample: "A worker with no authority over anyone else.", context: "The overseer's whip is one of the memoir's clearest images of how slavery was maintained by force." },
      { term: "chattel slavery", def: "A system in which enslaved people are treated as personal property that can be bought, sold, and inherited.", example: "Douglass being listed and valued alongside livestock when an estate is divided.", nonexample: "A worker who is paid wages and free to quit a job.", context: "Under chattel slavery, a human being could be counted as property, which is why Douglass's very birth year went unrecorded." },
      { term: "dehumanize", def: "To treat people as less than human, stripping away their dignity and rights.", example: "Denying enslaved people their names, birthdays, families, and the right to read.", nonexample: "Recognizing a person's full humanity, history, and worth.", context: "Douglass shows how slavery had to dehumanize people in order to justify holding them as property." },
      { term: "hypocrisy", def: "Claiming to hold moral or religious values while acting against them.", example: "Slaveholders who called themselves devout Christians while whipping the people they enslaved.", nonexample: "A person whose actions honestly match the values they claim.", context: "Douglass draws a sharp line between real Christianity and the hypocrisy of the 'slaveholding religion' he witnessed." },
      { term: "testimony", def: "A firsthand account offered as evidence of the truth of something.", example: "Douglass naming places and people so readers cannot dismiss his account as invented.", nonexample: "A secondhand rumor no one can trace or verify.", context: "The whole memoir works as testimony — Douglass stakes his own reputation on the truth of what he saw." }
    ],

    relic: {
      name: "Objects and Moments from the Narrative",
      intro: "Seven instructional reconstructions of objects and moments from the Narrative of the Life of Frederick Douglass — teaching recreations, not artwork from any edition. Investigate what each is, its role in the memoir, and what it reveals. (This room paraphrases and reproduces no long passages.)",
      artifacts: [
        {
          id: "birthdate", name: "The Unknown Birthdate", image: "images/birthdate.webp",
          clues: ["Douglass opens the memoir by saying he has no accurate knowledge of his own age.", "Enslaved children were rarely told the year of their birth, and records were withheld.", "He notes that white children could always tell their ages, but he could not."],
          identify: { q: "What is this 'artifact'?", choices: ["The deliberate absence of Douglass's recorded birth year", "A birthday party his family held", "A birth certificate his mother kept", "A calendar he received as a gift"] },
          purpose: { q: "What is its role in the memoir?", choices: ["It is the very first proof Douglass offers that slavery erased people's basic humanity", "It explains why he was a poor student", "It is a minor detail with no larger point", "It shows his enslavers were simply forgetful"] },
          significance: { q: "What does the missing birthdate reveal?", choices: ["That slavery worked by stripping away even the simplest facts of a person's identity", "That Douglass did not care about his age", "That birthdays were unimportant to everyone then", "That the record was lost by accident"] },
          reveals: "How slavery began its dehumanizing by denying enslaved people the ordinary facts of their own lives.",
          conceals: "The pain behind a fact stated so plainly — a man who could never know his own mother's face by daylight or his own age.",
          ace: "Articulate what the missing birthdate shows; connect it to the idea of dehumanization; extend it to why identity records matter to people today."
        },
        {
          id: "spellingbook", name: "The Spelling Book and Stolen Lessons", image: "images/spellingbook.webp",
          clues: ["In Baltimore, Sophia Auld begins teaching Douglass his letters until her husband forbids it.", "Hugh Auld warns that learning to read would make an enslaved person 'unmanageable' and unfit to be a slave.", "Douglass then teaches himself by trading bread to poor white boys and copying letters wherever he can."],
          identify: { q: "What does the spelling book represent?", choices: ["Douglass's stolen, self-taught path to literacy", "A book his enslaver happily gave him", "A schoolbook from a free public school he attended", "A Bible he was told to memorize"] },
          purpose: { q: "What is its role in the memoir?", choices: ["It marks the turning point where Douglass grasps that literacy is the road to freedom", "It shows he was a naturally lazy student", "It has nothing to do with his escape", "It is a gift from an abolitionist society"] },
          significance: { q: "Why does Hugh Auld's warning matter so much?", choices: ["It accidentally teaches Douglass the exact secret his enslavers feared — that reading leads to freedom", "It proves reading is unimportant", "It shows the Aulds were generous", "It convinces Douglass to stop learning"] },
          reveals: "That enslavers understood literacy as a threat, and that Douglass turned their own fear into his strategy.",
          conceals: "How dangerous and lonely the self-teaching was — done in secret, at real risk, with no teacher.",
          ace: "Articulate what the spelling book means to Douglass; connect literacy to freedom; extend it to who controls access to knowledge today."
        },
        {
          id: "covey", name: "The Fight with Covey the 'Slave-Breaker'", image: "images/covey.webp",
          clues: ["Douglass is hired out to Edward Covey, a poor farmer known for breaking the spirit of enslaved people.", "Months of overwork and beatings nearly crush Douglass's will to live.", "One day Douglass fights back and refuses to be whipped again, and Covey never truly beats him afterward."],
          identify: { q: "What was this confrontation?", choices: ["Douglass physically resisting the man hired to break his spirit", "A friendly wrestling match between equals", "A misunderstanding that was quickly forgotten", "A fight Douglass started for no reason"] },
          purpose: { q: "What is its role in the memoir?", choices: ["It is the emotional turning point where Douglass reclaims his sense of himself as a man", "It shows Douglass losing all hope", "It is a small event with no meaning", "It convinces him slavery is acceptable"] },
          significance: { q: "What does Douglass say the fight restored?", choices: ["His self-respect and his determination to be free, even if not yet free in law", "His enslaver's trust in him", "His desire to remain with Covey", "His belief that resistance is pointless"] },
          reveals: "That reclaiming dignity can precede and power the fight for physical freedom.",
          conceals: "How much fear and risk still remained — resisting could easily have cost Douglass his life.",
          ace: "Articulate what changes in Douglass after the fight; connect dignity to resistance; extend it to what it costs a person to refuse to be broken."
        },
        {
          id: "orator", name: "The Columbian Orator", image: "images/orator.webp",
          clues: ["As a boy in Baltimore, Douglass buys a popular schoolbook of speeches called The Columbian Orator.", "In it he reads arguments against slavery and powerful speeches about liberty.", "The book gives him words for feelings he already had, and sharpens his hatred of his condition."],
          identify: { q: "What is The Columbian Orator?", choices: ["A book of speeches that gave Douglass language and arguments for freedom", "A novel about pirates", "A hymn book from his enslaver's church", "A farming manual"] },
          purpose: { q: "What is its role in the memoir?", choices: ["It turns Douglass's literacy into political awareness and a hunger for liberty", "It teaches him to accept slavery quietly", "It is a book he never actually reads", "It has no effect on his thinking"] },
          significance: { q: "What does his reaction to the book reveal?", choices: ["That ideas and words can awaken a mind and make freedom feel both real and necessary", "That reading only made him unhappy for no reason", "That the book was worthless to him", "That he preferred to stop reading"] },
          reveals: "How access to ideas transformed private suffering into a clear argument against slavery.",
          conceals: "The torment of new awareness — Douglass says reading at times made him envy the enslaved who could not yet see their condition so clearly.",
          ace: "Articulate what the book gives Douglass; connect literacy to political awakening; extend it to a text that changed how you see the world."
        },
        {
          id: "whip", name: "The Overseer's Whip", image: "images/whip.webp",
          clues: ["Douglass describes witnessing brutal whippings from his earliest childhood, including of his own Aunt Hester.", "Overseers used the whip freely, often for reasons that were no fault at all.", "He presents these scenes plainly, as the everyday machinery that kept slavery in place."],
          identify: { q: "What does the whip represent in the memoir?", choices: ["The routine, terrorizing violence that enforced slavery", "A tool used only rarely and reluctantly", "A prop with no real meaning", "A punishment reserved for serious crimes"] },
          purpose: { q: "What is its role in Douglass's argument?", choices: ["It shows readers, plainly, that slavery could only be maintained through cruelty", "It proves enslaved people deserved punishment", "It is a background detail he ignores", "It shows slavery was gentle"] },
          significance: { q: "Why does Douglass describe the violence so directly?", choices: ["So readers cannot look away from what slavery actually required", "To shock readers for entertainment", "To exaggerate a system that was really mild", "To protect the reputations of enslavers"] },
          reveals: "How violence was not an excess of slavery but the ordinary means of holding it together.",
          conceals: "The lasting trauma such scenes left on a child forced to watch, which the plain telling only partly conveys.",
          ace: "Articulate what the whip enforces; connect the violence to slavery's need for control; extend it to how systems today rely on fear or force."
        },
        {
          id: "northstar", name: "The North Star and the Escape", image: "images/northstar.webp",
          clues: ["For enslaved people seeking freedom, the North Star pointed the way toward the free states.", "Douglass keeps the exact means of his own escape secret in the memoir, to protect others who might follow.", "He explains he withholds the details so the same routes can still be used by others seeking freedom."],
          identify: { q: "What does the North Star represent?", choices: ["The guide and hope of escape toward the free North", "A star Douglass named after himself", "A ship he sailed on", "A plantation where he worked"] },
          purpose: { q: "Why does Douglass hide the details of his escape?", choices: ["To protect the routes and the people who might still use them to reach freedom", "Because he could not remember how he escaped", "Because the escape did not really happen", "Because his enslaver ordered him to"] },
          significance: { q: "What does that careful silence reveal?", choices: ["That Douglass writes for the freedom of others still enslaved, not only his own story", "That he had something to hide from readers", "That the escape was unimportant", "That he did not trust his readers at all"] },
          reveals: "That the memoir is an act of collective purpose — protecting the path so others can follow.",
          conceals: "The exact, dangerous mechanics of the escape, which Douglass deliberately keeps out of the book.",
          ace: "Articulate what the North Star means; connect Douglass's silence to his purpose; extend it to when withholding information protects people today."
        },
        {
          id: "newname", name: "The New Name 'Douglass'", image: "images/newname.webp",
          clues: ["Born Frederick Augustus Washington Bailey, he changes his name after reaching freedom.", "A friend in the North suggests the surname 'Douglass,' which he accepts.", "He keeps 'Frederick' to hold on to a sense of his own identity across the change."],
          identify: { q: "What does the new name represent?", choices: ["Douglass claiming a free identity of his own choosing", "A name forced on him by an enslaver", "A code name to hide from the law", "A name he disliked and later dropped"] },
          purpose: { q: "What is its role in the memoir?", choices: ["It marks the transition from property to a free man who names himself", "It shows he wanted to forget his whole past", "It is an accident of paperwork", "It has no meaning in the story"] },
          significance: { q: "Why is keeping 'Frederick' significant?", choices: ["It shows he holds on to a thread of his own identity even as he becomes free", "It proves he had no attachment to his past", "It was required by the friend who named him", "It shows he could not decide who he was"] },
          reveals: "That naming oneself is an act of freedom and self-authorship after slavery denied that right.",
          conceals: "The complicated loss inside the gain — the family names and history slavery had already taken from him.",
          ace: "Articulate what choosing a name means for Douglass; connect naming to freedom and identity; extend it to how names carry identity for people today."
        }
      ]
    },

    ctob: {
      name: "The Road from Slavery to Freedom",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "In what year was the Narrative first published? Enter the year.",
          evidence: ["Douglass wrote it after escaping slavery and joining the abolitionist movement.", "It appeared in the 1840s, before the Civil War.", "The memoir was first published in the year eighteen forty-five."],
          hints: ["It is in the 1840s, well before the Civil War.", "It begins with 184…", "The year is 1845."],
          answer: "1845"
        },
        {
          type: "word",
          prompt: "According to Douglass, learning to do what was 'the pathway from slavery to freedom'? (one word)",
          evidence: ["His enslaver forbade it, saying it would make him unfit to be a slave.", "Douglass taught himself in secret, even trading bread for lessons.", "It is the skill of turning letters into words on a page."],
          hints: ["It is the first half of 'reading and writing.'", "It starts with 'read…'.", "The word is reading."],
          answer: "reading"
        },
        {
          type: "mc",
          prompt: "Why did Douglass's enslaver forbid teaching him to read?",
          options: [
            "Because he believed reading would make an enslaved person discontented and eager for freedom.",
            "Because he thought Douglass was too young to learn.",
            "Because books were too expensive to buy.",
            "Because he wanted Douglass to learn a trade instead."
          ],
          hints: ["Think about what a reader might start to imagine or demand.", "Which option is about reading leading toward freedom?"]
        },
        {
          type: "word",
          prompt: "What is the last name of the cruel 'slave-breaker' Douglass finally fights and resists? (one word)",
          evidence: ["He was a poor farmer known for crushing the spirit of enslaved people hired out to him.", "After months of beatings, Douglass refuses to be whipped and stands up to him.", "His name begins with a hard 'C' sound."],
          hints: ["The name has two syllables and starts with 'Cov…'.", "It rhymes roughly with 'lovey.'", "The name is Covey."],
          answer: "Covey"
        },
        {
          type: "sequence",
          prompt: "Put these stages of Douglass's life in the order they happen, earliest first.",
          items: [
            "Born into slavery in Maryland, he is never told the year of his birth.",
            "In Baltimore he begins learning his letters and secretly teaches himself to read.",
            "Hired out to Covey, he fights back and reclaims his will to be free.",
            "He escapes to the North, takes a new name, and joins the abolitionist cause."
          ],
          hints: ["Birth and childhood come first.", "The self-teaching in Baltimore comes before the fight with Covey.", "The escape and new name come last."]
        },
        {
          type: "mc",
          prompt: "Why does Douglass leave out the exact details of how he escaped?",
          options: [
            "To protect the escape routes and the people who might still use them to reach freedom.",
            "Because he had forgotten how the escape happened.",
            "Because the publisher would not allow it.",
            "Because the escape was too boring to describe."
          ],
          hints: ["Think about who else was still enslaved when he wrote.", "It is a choice made to protect others, not himself."]
        }
      ]
    },

    arcade: {
      name: "Historical Fact or Common Misconception?",
      instruction: "Douglass's memoir is a primary source about American slavery. Sort each statement: is it a documented HISTORICAL FACT about slavery and abolition, or a COMMON MISCONCEPTION people still repeat? Reasoning — not speed — earns the points.",
      buckets: [
        { id: "fact", label: "Historical fact", short: "Fact" },
        { id: "myth", label: "Common misconception", short: "Myth" }
      ],
      cards: [
        { text: "In many slave states, laws made it a crime to teach enslaved people to read and write.", bucket: "fact", why: "Anti-literacy laws were real and widespread; keeping people illiterate was a tool of control." },
        { text: "Enslaved people were legally treated as property that could be bought, sold, and inherited.", bucket: "fact", why: "Chattel slavery defined enslaved people as property under law — a documented reality." },
        { text: "Formerly enslaved writers like Douglass published narratives that helped fuel the abolition movement.", bucket: "fact", why: "Slave narratives were an important documented force in antislavery organizing." },
        { text: "Many enslaved people resisted slavery through escape, sabotage, rebellion, and self-education.", bucket: "fact", why: "Resistance in many forms is well documented; enslaved people were active agents, not passive." },
        { text: "Enslaved people generally accepted slavery and rarely tried to resist or escape.", bucket: "myth", why: "This is a false, harmful misconception; resistance and escape attempts were common and documented." },
        { text: "Slavery existed only in a few far Southern states and never in places like Maryland.", bucket: "myth", why: "Slavery was legal across many states, including Maryland, where Douglass was enslaved." },
        { text: "Learning to read was easy and openly encouraged for enslaved children.", bucket: "myth", why: "The opposite is true: literacy was forbidden and dangerous, which is central to Douglass's story." },
        { text: "The abolition of slavery was achieved quickly and without conflict or resistance.", bucket: "myth", why: "Abolition took decades of struggle and a civil war; the claim ignores enormous conflict." }
      ],
      followup: "Why do some misconceptions about slavery survive even today? How does a firsthand account like Douglass's memoir make those misconceptions harder to believe?"
    },

    analysis: {
      mcq: [
        {
          q: "Douglass presents learning to read as so important because —",
          options: [
            "it was the crucial step that let him imagine and pursue his own freedom.",
            "it helped him find a better-paying job on the plantation.",
            "it was required by his enslaver's rules.",
            "it made his daily work physically easier."
          ],
          why: "Douglass calls reading 'the pathway from slavery to freedom'; literacy awakens the awareness and desire that drive him toward escape."
        },
        {
          q: "When Hugh Auld forbids his wife to teach Douglass to read, Douglass realizes —",
          options: [
            "he has just been shown the very secret his enslavers most feared — that reading leads toward freedom.",
            "that reading is genuinely dangerous and should be avoided.",
            "that the Aulds are trying to protect him from harm.",
            "that he will never be able to learn to read at all."
          ],
          why: "Auld's warning accidentally teaches Douglass why literacy matters, turning the enslaver's fear into Douglass's strategy."
        },
        {
          q: "The fight with Covey is a turning point mainly because —",
          options: [
            "it restores Douglass's self-respect and his determination to be free, even before he is free in law.",
            "it convinces Covey to set Douglass free immediately.",
            "it proves that violence always solves every problem.",
            "it makes Douglass decide that slavery is acceptable after all."
          ],
          why: "Douglass describes the fight as the moment he becomes a man again in his own eyes — a psychological rebirth that fuels his later escape."
        },
        {
          q: "Douglass draws a sharp distinction between real Christianity and the 'slaveholding religion' in order to —",
          options: [
            "expose the hypocrisy of people who called themselves devout while enslaving and beating others.",
            "argue that all religion is worthless.",
            "prove that enslavers were not religious at all.",
            "encourage enslaved people to give up their faith."
          ],
          why: "Douglass condemns not Christianity itself but the hypocrisy of using it to justify cruelty — a central argument of the memoir."
        },
        {
          q: "Douglass withholds the details of his escape in order to —",
          options: [
            "protect the routes and the people who might still use them to reach freedom.",
            "make the memoir more mysterious for entertainment.",
            "hide the fact that he never truly escaped.",
            "keep the story shorter for his publisher."
          ],
          why: "Douglass explains that revealing the method could close the door on others still seeking freedom, showing his purpose extends beyond himself."
        }
      ],
      short: [
        "Choose one moment when Douglass chooses dignity or truth over safety (for example, teaching himself to read, standing up to Covey, or naming slaveholders). Explain what it risks and why he does it anyway.",
        "Douglass presents himself as both a specific person and as testimony for millions still enslaved. How does the memoir use his individual story to make a larger argument against slavery?",
        "Explain what Douglass means when he calls literacy 'the pathway from slavery to freedom.' Why would an enslaver work so hard to keep it away?"
      ],
      paragraph: "Write an evidence-based paragraph. Douglass argues that slavery had to depend on keeping people ignorant, powerless, and dehumanized. Choose one way the memoir shows this (the denied birthdate, forbidden literacy, the whip, or the slaveholding religion) and explain how it supports his larger case against slavery. Support your claim with specific details.",
      aceReflection: "Articulate the memoir's central idea about literacy, dignity, and freedom in your own words. Connect two moments that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Then into Now",
      prompt: "Douglass shows a person claiming freedom through literacy, self-respect, truth-telling, and the courage to resist. Choose one way that people today work to gain knowledge, tell the truth, or push back against injustice. Explain the connection with evidence, the way Douglass grounds a huge historical argument in the specific steps of one life.",
      format: "A short evidence-based comparison connecting the memoir's ideas to a present-day reality, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why literacy was so important to Frederick Douglass in his Narrative. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in the Narrative of the Life of Frederick Douglass. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in the Narrative of the Life of Frederick Douglass because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about the Narrative of the Life of Frederick Douglass: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect an idea from the Narrative of the Life of Frederick Douglass to the present: [connection]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of the Narrative of the Life of Frederick Douglass for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Douglass's 1845 memoir through evidence-based tasks. It focuses on Douglass's central ideas — literacy as the pathway to freedom, the dehumanizing machinery of slavery, the hypocrisy of the slaveholding religion, and the reclaiming of dignity and identity. The memoir is public domain and freely available; this room paraphrases rather than reproducing long passages and keeps every response on the student's device.",
      reviewNotes: [
        "The Narrative of the Life of Frederick Douglass (1845) is in the public domain and freely available through Project Gutenberg and LibriVox. Students can read or listen at no cost.",
        "Mature content: the memoir describes the brutality of slavery — whippings, beatings, the violence witnessed against Douglass's own relatives, family separation, and forced ignorance. Preview carefully, prepare students, and follow local policy.",
        "Details here were paraphrased from well-established public knowledge of the memoir (the unknown birth year; Maryland and Baltimore settings; the forbidden reading lessons and Hugh Auld's warning; The Columbian Orator; Edward Covey the 'slave-breaker'; the withheld escape; and the change of name to Douglass). Confirm framing against your class edition, as pagination and introductions vary. (Needs review)",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English III / grade 11–12 ELAR TEKS (19 TAC Ch. 110) for reading response, author's purpose and craft, and analysis of literary nonfiction and argument, with cross-curricular ties to U.S. history (slavery, abolition, and the road to the Civil War). Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through clear visuals, plain directions, and device-local supports. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.11-12.1", "RI.11-12.2", "RI.11-12.3", "RI.11-12.5", "RI.11-12.6", "RI.11-12.9", "RH.11-12.1", "RH.11-12.2", "RH.11-12.9", "W.11-12.1", "W.11-12.9"],
      udl: "Multiple means of representation (visuals, plain directions, labeled reconstructions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
