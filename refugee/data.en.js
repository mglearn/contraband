/* Contraband — Refugee (Alan Gratz). English source data.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; plot, character, and chronology details were
   verified from public knowledge for accuracy and are used only to build
   original, transformative analysis. Standards are good-faith Common Core
   alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "refugee",
  storageKey: "contraband.refugee.v1",

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
    "vocab.title": "Words for Refugee",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Belongings of the Journey",
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
    "ctob.title": "Three Journeys, One Case",
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
    "arcade.title": "Real History or the Novel's Story?",
    "arcade.default": "Sort each statement by whether it is real history behind the three crises or part of Gratz's fictional family stories.",
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
    "print.item.relic": "Belongings evidence sheet",
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
      title: "Refugee",
      author: "Alan Gratz",
      grades: "Grades 6–8",
      genre: "Historical fiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the novel (print, e-book, or licensed audiobook). This activity does not reproduce or replace the book.",
      copyright: "Refugee is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "The novel portrays war and the dangers of forced flight, including bombing, imprisonment, peril at sea, drowning, and the loss of family members. Preview carefully, prepare students, and align with local policy.",
      disclaimer: "This activity is an independent educational companion to Refugee by Alan Gratz. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY-NC 4.0. Refugee, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "../images/refugee/hero.webp",
      heroAlt: "An instructional illustration evoking Refugee — three small figures on three horizons, a 1930s ocean liner, a homemade raft on open water, and an overloaded boat in the Mediterranean, all reaching toward a distant safe shore."
    },
    hook: "Three children. Three different times and places. One desperate search for a safe place to call home. Josef flees Nazi Germany in 1938 aboard a great ocean liner. Isabel pushes off from Cuba on a homemade raft in 1994, hoping to reach Florida. Mahmoud slips out of a shattered Syrian city in 2015, headed across land and sea toward Europe. Their journeys unfold decades apart — yet as the pages turn, the reader begins to see how their stories reach across time to touch one another.",
    goals: [
      "Explain what forces each of the three protagonists — Josef, Isabel, and Mahmoud — to leave home, and what they hope to find.",
      "Trace how the novel braids three separate journeys, and analyze why Gratz tells them together instead of one at a time.",
      "Analyze how ordinary people show courage, sacrifice, and difficult choices under the pressure of forced flight.",
      "Distinguish the real history behind the three crises from Gratz's invented families, and carry the novel's questions into the present."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a refugee — someone forced to flee for safety.",
        "Discuss: What would you carry, and what would you leave behind, if you had to leave home in a hurry?"
      ],
      during: [
        "Use the Belongings to slow down and read key objects and moments closely.",
        "Track how the three timelines echo one another — a danger in one story rhyming with a danger in another."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the novel's history to refugees in the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why one of the three families decides they must leave home. Include one detail from the novel that helped you understand the danger they face." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect a moment from one journey (Josef, Isabel, or Mahmoud) to a moment from another that echoes it. Explain how putting the two side by side changes your understanding of a character or a theme." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a question the novel raises to refugees in the world today. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "refugee", def: "A person forced to leave their country to escape war, violence, or persecution and find safety somewhere else.", example: "Josef, Isabel, and Mahmoud, each fleeing danger toward a safer place.", nonexample: "A tourist choosing to travel abroad for a vacation and planning to return home.", context: "The novel follows three children who become refugees in three different eras." },
      { term: "asylum", def: "Protection granted by a country to someone who has fled danger in their own, allowing them to stay safely.", example: "A family hoping a new country will let them stay because it is too dangerous to go home.", nonexample: "Being ordered to return to the country you just escaped from.", context: "Each family's journey is really a search for a country that will offer them asylum." },
      { term: "persecution", def: "Cruel and unfair treatment of people, often because of their religion, race, or beliefs.", example: "The Nazi laws and violence aimed at Jewish families like Josef's.", nonexample: "Being fairly asked to follow the same rules as everyone else.", context: "Josef's family flees the persecution of Jews in Nazi Germany." },
      { term: "exile", def: "Being forced to live away from your home country, often unable to return.", example: "Families who can never safely go back to the homes they fled.", nonexample: "Moving to a new town by choice while free to visit home whenever you like.", context: "For each family, leaving means a kind of exile — a home they may never see again." },
      { term: "empathy", def: "The ability to understand and share another person's feelings by imagining yourself in their situation.", example: "A stranger who helps a refugee family because they can picture their fear and hope.", nonexample: "Turning away from someone in trouble without a second thought.", context: "The novel invites readers to feel empathy across time for three very different children." },
      { term: "visa", def: "An official document a government issues that allows a person to enter or stay in a country.", example: "The papers Josef's family needs to be allowed to land safely.", nonexample: "Simply showing up at a border with no permission to enter.", context: "Whether a family has the right papers can decide whether they are turned away." },
      { term: "smuggler", def: "A person who is paid to move people or goods secretly and often illegally across borders.", example: "The people Mahmoud's family must pay to arrange a crossing.", nonexample: "An official border guard checking documents at a legal crossing.", context: "Desperate families sometimes must trust dangerous smugglers to keep moving." },
      { term: "detention", def: "Being held or locked up by authorities, sometimes for trying to enter or leave a country.", example: "Being confined by officials during a journey rather than being allowed to move on freely.", nonexample: "Walking freely through a border checkpoint with the right documents.", context: "Along the way, refugees may face detention that stalls or endangers their journey." },
      { term: "sacrifice", def: "Giving up something you value — even your safety — for the sake of someone or something else.", example: "A parent risking everything so a child might reach safety.", nonexample: "Keeping something for yourself when someone else needs it more.", context: "Each family's story turns on a moment of painful sacrifice for the people they love." }
    ],

    relic: {
      name: "Belongings of the Journey",
      intro: "Seven instructional reconstructions of objects and moments from Refugee — teaching recreations, not artwork from the book. Investigate what each is, its role in the novel, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "liner", name: "The Ocean Liner to Cuba", image: "../images/refugee/liner.webp",
          clues: ["In 1938, Josef's family boards a large German ocean liner carrying Jewish passengers away from Nazi Germany.", "The ship sails across the Atlantic toward Cuba, where the passengers hope to be allowed to land.", "For a time, life aboard feels almost safe and ordinary — until the question of whether any country will accept them grows desperate."],
          identify: { q: "What is this ship?", choices: ["An ocean liner carrying Jewish refugees away from Nazi Germany toward hoped-for safety", "A cruise ship on an ordinary vacation", "A warship on a mission", "A small fishing boat"] },
          purpose: { q: "What is its role in the novel?", choices: ["It carries Josef's family on their flight and becomes the stage for their hope and fear", "It is only a fun setting with no importance", "It brings the family home to Germany", "It has nothing to do with the plot"] },
          significance: { q: "What does the voyage reveal?", choices: ["That being on the move is no guarantee of safety when no country will take you in", "That the sea is always calm and easy", "That refugees are never really in danger", "That the passengers wanted a holiday"] },
          reveals: "How a real historical voyage carried the desperate hope of families fleeing persecution.",
          conceals: "How much depended on distant governments deciding whether the passengers could land at all.",
          ace: "Articulate what the liner meant to Josef's family; connect their hope to their fear; extend it to what safety depends on for refugees today."
        },
        {
          id: "raft", name: "The Homemade Raft", image: "../images/refugee/raft.webp",
          clues: ["In 1994, Isabel's family and neighbors build a small boat by hand to leave Cuba.", "They push off from shore hoping to reach Florida across open water.", "The little craft is crowded, fragile, and always at the mercy of the sea and the weather."],
          identify: { q: "What is this boat?", choices: ["A homemade raft built to carry Isabel's family from Cuba toward Florida", "A luxury yacht", "A navy patrol boat", "A ferry with a scheduled route"] },
          purpose: { q: "What is its role in the novel?", choices: ["It carries Isabel's family on a dangerous open-water crossing in search of a new home", "It is only used for fishing near shore", "It takes the family on a short trip and back", "It has no effect on the plot"] },
          significance: { q: "What does the fragile raft reveal?", choices: ["That desperate families will risk everything on the sea when staying feels impossible", "That the ocean is easy to cross", "That the family was not really in danger", "That they left just for adventure"] },
          reveals: "How real Cuban 'balseros' set out on homemade rafts in 1994, risking the sea for a chance at safety.",
          conceals: "How many such crossings ended in loss, and how much luck a safe arrival required.",
          ace: "Articulate what the raft demanded of Isabel's family; connect their risk to their hope; extend it to why people still make dangerous crossings today."
        },
        {
          id: "trumpet", name: "Isabel's Trumpet", image: "../images/refugee/trumpet.webp",
          clues: ["Isabel loves music and plays the trumpet, feeling the rhythms of her home in Cuba.", "During the journey her instrument becomes tied to hard choices about what a family can keep and what it must give up.", "Music, and what it costs to hold onto it, threads through her story."],
          identify: { q: "What does the trumpet represent for Isabel?", choices: ["Her identity, her home, and the culture she carries with her", "A toy she does not care about", "A gift from a stranger on the raft", "A tool for fishing"] },
          purpose: { q: "What is its role in her story?", choices: ["It ties her sense of home and self to the sacrifices the journey demands", "It is only a background object", "It helps steer the raft", "It has nothing to do with her family"] },
          significance: { q: "What does her connection to music reveal?", choices: ["That refugees carry their home inside them even when they must leave everything behind", "That music does not matter in hard times", "That Isabel wanted to become famous", "That she had no real reason to leave"] },
          reveals: "How culture and identity travel with a person even when almost nothing else can.",
          conceals: "How painful it is to weigh something you love against your family's survival.",
          ace: "Articulate what the trumpet means to Isabel; connect it to the idea of carrying home with you; extend it to what people hold onto when they must flee."
        },
        {
          id: "phone", name: "The Smartphone and the Sea Crossing", image: "../images/refugee/phone.webp",
          clues: ["In 2015, Mahmoud's family flees the Syrian civil war, traveling by land and then by sea.", "Along the way, a smartphone helps map routes, find help, and stay in touch — a modern lifeline.", "The most dangerous stretch is an overcrowded rubber boat crossing the Mediterranean toward Europe."],
          identify: { q: "What does the smartphone represent in Mahmoud's journey?", choices: ["A modern lifeline for refugees — for navigation, information, and staying connected", "A toy for playing games", "A device with no use on the trip", "A camera only for taking selfies"] },
          purpose: { q: "What is its role in the novel?", choices: ["It shows how a 21st-century refugee journey differs from earlier ones, while the danger remains", "It replaces the need to travel at all", "It guarantees the family's safety", "It has no importance to the story"] },
          significance: { q: "What does the Mediterranean crossing reveal?", choices: ["That even with modern tools, crossing the sea in an overloaded boat is deadly dangerous", "That modern journeys carry no risk", "That the family was never in real peril", "That the phone made the sea safe"] },
          reveals: "How the 2015 refugee journey mirrors older ones even as technology changes.",
          conceals: "How thin the line is between rescue and disaster on an overloaded boat at sea.",
          ace: "Articulate how the phone changes Mahmoud's journey; connect it to the older journeys' dangers; extend it to what stays the same across a century of flight."
        },
        {
          id: "papers", name: "The Papers That Decide Everything", image: "../images/refugee/papers.webp",
          clues: ["Across all three stories, official documents — visas, permissions, and border decisions — hold enormous power.", "Whether a family is allowed to land, to stay, or to cross can turn on a stamp or a signature.", "Governments far away decide the fate of families who have already risked everything to arrive."],
          identify: { q: "What do these papers represent?", choices: ["The official permissions that can decide whether a refugee family is accepted or turned away", "Ordinary mail with no importance", "The family's personal diaries", "Tickets for a fun trip"] },
          purpose: { q: "What is their role across the three stories?", choices: ["They show how a family's fate can rest on decisions made by distant governments", "They are only mentioned once and forgotten", "They guarantee every family reaches safety", "They have nothing to do with the plot"] },
          significance: { q: "What does the power of these papers reveal?", choices: ["That reaching a border is not the same as reaching safety — someone still has to say yes", "That borders never matter", "That documents are easy for refugees to get", "That every country welcomes everyone"] },
          reveals: "How the choices of governments and officials shape whether refugees find refuge.",
          conceals: "The human cost hidden behind a bureaucratic 'yes' or 'no.'",
          ace: "Articulate what the papers control; connect that power to the families' helplessness; extend it to how nations decide who is let in today."
        },
        {
          id: "parent", name: "A Parent's Impossible Choice", image: "../images/refugee/parent.webp",
          clues: ["In each story, a parent must make an agonizing decision to protect their children.", "These choices demand giving up safety, comfort, or even more, for the sake of a child.", "The novel returns again and again to what parents will sacrifice so their children might live."],
          identify: { q: "What does this moment represent?", choices: ["A parent's sacrifice, risking or giving up everything so a child might reach safety", "A parent abandoning their family", "A minor disagreement about chores", "A choice that costs nothing"] },
          purpose: { q: "What is its role in the novel?", choices: ["It reveals the depth of love and sacrifice at the heart of each family's journey", "It is a small side detail", "It shows the parents do not care", "It has no effect on the story"] },
          significance: { q: "What does this repeated pattern reveal?", choices: ["That across time and place, parents will give up almost anything for their children's future", "That the parents made no hard choices", "That the children were never in danger", "That sacrifice is easy"] },
          reveals: "How love and sacrifice bind the three families across very different eras.",
          conceals: "The lifelong weight such a choice leaves on those who survive it.",
          ace: "Articulate one parent's sacrifice; connect it to a sacrifice in another story; extend it to what people risk for those they love."
        },
        {
          id: "connection", name: "The Threads That Connect the Journeys", image: "../images/refugee/connection.webp",
          clues: ["The three stories are set decades apart, yet Gratz weaves them together chapter by chapter.", "Small echoes link the journeys — a danger, an object, or a kindness that rhymes across time.", "By the end, the reader discovers that the three families' paths touch in ways they never expected."],
          identify: { q: "What does this weaving represent?", choices: ["The way separate refugee journeys across time echo and even connect to one another", "Three stories with nothing in common", "A single story told three times", "A random collection of unrelated facts"] },
          purpose: { q: "What is its role in the novel?", choices: ["It lets the reader see one shared human experience across very different times and places", "It only makes the book confusing", "It keeps the families completely apart", "It has no purpose"] },
          significance: { q: "What does the final connection reveal?", choices: ["That kindness and consequence can ripple across generations of refugees", "That the stories never really relate", "That history does not repeat in any way", "That the families forgot each other instantly"] },
          reveals: "How Gratz's braided structure turns three stories into one larger truth about refugees.",
          conceals: "How much careful design links moments that first seem unrelated.",
          ace: "Articulate how the three journeys connect; connect one echo you noticed between two stories; extend it to why seeing the pattern matters for readers today."
        }
      ]
    },

    ctob: {
      name: "Three Journeys, One Case",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "In what year does Josef's story begin, as his family flees Nazi Germany by ship? Enter the year.",
          evidence: ["Josef is a Jewish boy living under the growing danger of Nazi Germany.", "His family boards an ocean liner bound for Cuba to escape persecution.", "The novel places the start of his voyage in the year nineteen thirty-eight."],
          hints: ["It is in the late 1930s, before World War II fully breaks out.", "It begins with 19…", "The year is 1938."],
          answer: "1938"
        },
        {
          type: "word",
          prompt: "From which island country does Isabel's family set out on a homemade raft, hoping to reach Florida? (one word)",
          evidence: ["Isabel loves the music of her Caribbean homeland.", "In 1994, hardship and unrest push many families to leave by sea.", "It is the island nation just south of Florida whose people made rafts to cross the strait."],
          hints: ["It is an island south of Florida.", "It starts with 'Cu…'.", "The country is Cuba."],
          answer: "Cuba"
        },
        {
          type: "mc",
          prompt: "Why does Mahmoud's family leave their home in 2015?",
          options: [
            "Their city has been devastated by the Syrian civil war, making it too dangerous to stay.",
            "They simply want to see new countries as tourists.",
            "They have been offered better jobs abroad.",
            "They dislike their neighbors."
          ],
          hints: ["Think about what makes a home impossible to live in.", "Which option is about war and danger?"]
        },
        {
          type: "word",
          prompt: "What body of water must Mahmoud's family cross by boat on their way toward Europe? (one word — the sea)",
          evidence: ["After traveling overland, the family faces a dangerous sea crossing.", "They pile into an overcrowded rubber boat to reach European shores.", "It is the sea between North Africa, the Middle East, and southern Europe."],
          hints: ["It is the sea bordered by Europe, Africa, and the Middle East.", "It starts with 'Medi…'.", "The sea is the Mediterranean."],
          answer: "Mediterranean"
        },
        {
          type: "sequence",
          prompt: "Put these three journeys in the order of the years they take place, earliest first.",
          items: [
            "Josef flees Nazi Germany aboard an ocean liner bound for Cuba.",
            "Isabel pushes off from Cuba on a homemade raft toward Florida.",
            "Mahmoud escapes the Syrian civil war, heading across land and sea toward Europe."
          ],
          hints: ["Josef's story is set in the 1930s.", "Isabel's story is set in the 1990s.", "Mahmoud's story is the most recent, in the 2010s."]
        },
        {
          type: "mc",
          prompt: "Why does Gratz tell all three journeys together, weaving between them, instead of one after another?",
          options: [
            "To show that refugees across very different times and places share one human experience.",
            "Because he could not decide which story to tell.",
            "To make the three families forget one another.",
            "Because the three stories have nothing in common."
          ],
          hints: ["Think about what the reader notices when the stories are placed side by side.", "It is about connection across time, not confusion."]
        }
      ]
    },

    arcade: {
      name: "Real History or the Novel's Story?",
      instruction: "Refugee mixes documented history with Gratz's invented families. Sort each statement: is it REAL HISTORY (a true event behind the three crises) or THE NOVEL'S STORY (something specific to Gratz's fictional families)? Reasoning earns the points.",
      buckets: [
        { id: "history", label: "Real history", short: "History" },
        { id: "story", label: "The novel's story", short: "Story" }
      ],
      cards: [
        { text: "In 1939, a real ocean liner, the MS St. Louis, carried Jewish refugees fleeing Nazi Germany but was turned away and forced back toward Europe.", bucket: "history", why: "The voyage of the MS St. Louis is a documented historical event." },
        { text: "In 1994, thousands of Cuban 'balseros' set out on homemade rafts to try to reach Florida.", bucket: "history", why: "The 1994 Cuban rafter crisis really happened." },
        { text: "Beginning around 2011, Syria's civil war forced millions of people to flee their homes, many reaching a peak of migration toward Europe in 2015.", bucket: "history", why: "The Syrian war and the 2015 refugee movement are real history." },
        { text: "For centuries, refugees fleeing danger have made perilous journeys across land and sea in search of safety.", bucket: "history", why: "The broad reality of refugee journeys across history is documented fact." },
        { text: "Josef, a Jewish boy, flees Germany with his family aboard a liner bound for Cuba.", bucket: "story", why: "Josef and his family are Gratz's invented characters." },
        { text: "Isabel, a Cuban girl who plays the trumpet, escapes on a raft her family and neighbors built by hand.", bucket: "story", why: "Isabel and her trumpet are part of the novel's fiction." },
        { text: "Mahmoud, a Syrian boy, guides his family across land and the Mediterranean toward Europe.", bucket: "story", why: "Mahmoud and his family are Gratz's fictional creations." },
        { text: "By the end, the three families' paths turn out to connect across the decades in a surprising way.", bucket: "story", why: "The way the invented families' stories link is Gratz's narrative design." }
      ],
      followup: "Why might Gratz tell real history through three invented families? What can their braided stories show a reader that a timeline of events cannot?"
    },

    analysis: {
      mcq: [
        {
          q: "Gratz braids three separate journeys together mainly because —",
          options: [
            "placing them side by side reveals a shared human experience of flight that spans decades and continents.",
            "he wanted to make the book as long as possible.",
            "the three stories are actually the same story repeated.",
            "he could not decide which family to write about."
          ],
          why: "The interwoven structure lets the reader feel the echoes among Josef, Isabel, and Mahmoud, turning three stories into one larger truth about refugees."
        },
        {
          q: "What most clearly links Josef's, Isabel's, and Mahmoud's stories?",
          options: [
            "Each family is forced from home by danger and undertakes a desperate, perilous search for safety.",
            "Each family travels for fun and adventure.",
            "Each family stays safely in its own country.",
            "Each family is wealthy and unafraid."
          ],
          why: "Despite different eras and dangers, all three are refugees driven from home and risking everything to find a place that will take them in."
        },
        {
          q: "The sea functions in the novel most powerfully as —",
          options: [
            "both a path to possible safety and a source of deadly danger the families cannot control.",
            "a peaceful, easy road that poses no threat.",
            "a barrier that keeps every family safely at home.",
            "an unimportant background detail."
          ],
          why: "For Isabel and Mahmoud especially, the water is the way toward hope and, at the same time, the place where they are most in peril."
        },
        {
          q: "The parents' repeated sacrifices across the three stories most clearly show that —",
          options: [
            "across time and place, families will give up almost anything so their children might reach safety.",
            "the parents care little about their children.",
            "sacrifice is easy and costs nothing.",
            "only one of the three families faces hard choices."
          ],
          why: "Gratz returns to the theme of parental sacrifice in each timeline, underscoring how love drives the families' most painful decisions."
        },
        {
          q: "By connecting the three families across the decades, the novel suggests that —",
          options: [
            "acts of cruelty and kindness can ripple across generations, and refugees' struggles are deeply connected.",
            "history has nothing to teach the present.",
            "refugees from different eras have nothing in common.",
            "the three families never truly affect one another."
          ],
          why: "The surprising links among the families press the reader to see refugees not as isolated cases but as part of one ongoing human story."
        }
      ],
      short: [
        "Choose one of the three protagonists (Josef, Isabel, or Mahmoud). Explain what forces them to leave home and one difficult choice their journey demands of them or their family.",
        "Gratz sets his three stories decades apart. Choose two moments — one from each of two different journeys — that echo each other. Explain what the echo helps you understand.",
        "Explain the meaning of one parent's sacrifice in the novel. Why might Gratz make each family pay such a painful price?"
      ],
      paragraph: "Write an evidence-based paragraph. Refugee follows three children fleeing three different crises in three different eras. What does telling their stories together — braided rather than one after another — allow Gratz to show that a single story could not? Support your claim with specific details from at least two of the journeys.",
      aceReflection: "Articulate the novel's central idea about refugees, danger, and the search for home in your own words. Connect two moments from different journeys that develop it. Extend it to refugees in the world today, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Then into Now",
      prompt: "Refugee shows three families across history forced to flee war and persecution in search of safety. Choose one situation in the world today in which people are seeking refuge. Explain the connection with evidence, the way Gratz grounds big history in the specific choices of one family at a time.",
      format: "A short evidence-based comparison connecting the novel's history to a present-day reality, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why one of the families in Refugee by Alan Gratz is forced to leave home. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Refugee by Alan Gratz. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in Refugee by Alan Gratz because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Refugee by Alan Gratz: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect a theme from Refugee by Alan Gratz to refugees in the world today: [connection]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Refugee by Alan Gratz for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to Refugee by Alan Gratz. It supports close reading of the novel's central themes — the forces that make people flee, the perils of the journey, courage and sacrifice under pressure, and the braided connection among refugees across time. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Refugee is copyrighted. This is an independent companion — students need their own lawful copy; the room links to and quotes no text.",
        "Mature content: the novel depicts war and forced flight, including bombing, imprisonment, peril at sea, drowning, and the loss of family members. Preview carefully, prepare students, and follow local policy.",
        "Details here reflect public knowledge of the novel's three interwoven timelines: Josef fleeing Nazi Germany by ocean liner in 1938; Isabel leaving Cuba by homemade raft in 1994; and Mahmoud escaping the Syrian civil war toward Europe across the Mediterranean in 2015. The real history behind these — the 1939 voyage of the MS St. Louis, the 1994 Cuban rafter crisis, and the Syrian refugee movement peaking around 2015 — is documented. Confirm specific plot points, names, and dates against your class edition. (Needs review)",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 6–8 ELAR TEKS (19 TAC Ch. 110) for reading response, author's purpose and craft, and multiple-genre analysis, with cross-curricular ties to world history (the rise of Nazi Germany, the 1994 Cuban rafter crisis, and the Syrian civil war and refugee movement). Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through clear visuals, plain directions, and device-local supports. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.6.1", "RL.7.1", "RL.8.1", "RL.6.2", "RL.7.2", "RL.8.2", "RL.6.3", "RL.7.3", "RL.8.3", "RL.6.5", "RH.6-8.1", "W.6-8.1", "W.6-8.9"],
      udl: "Multiple means of representation (visuals, plain directions, labeled reconstructions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
