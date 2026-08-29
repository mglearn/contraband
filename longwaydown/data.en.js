/* Contraband — Long Way Down (Jason Reynolds). English source data.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; plot, character, and structural details were
   verified from public knowledge for accuracy and are used only to build
   original, transformative analysis. Standards are good-faith Common Core
   alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "longwaydown",
  storageKey: "contraband.longwaydown.v1",

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
    "vocab.title": "Words for Long Way Down",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Objects from the Elevator",
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
    "ctob.title": "The Elevator Ride",
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
    "arcade.title": "The Idea or Will's Story?",
    "arcade.default": "Sort each statement by whether it names a real-world idea the book explores or a specific detail of Will's own story.",
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
    "print.item.relic": "Objects evidence sheet",
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
      title: "Long Way Down",
      author: "Jason Reynolds",
      grades: "Grades 8–12",
      genre: "Verse fiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the novel (print, e-book, or licensed audiobook). This activity does not reproduce or replace the book.",
      copyright: "Long Way Down is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "The novel deals with gun violence, the killing of a sibling, grief, and trauma. Several characters have died from shootings, and the story sits inside a cycle of retaliation. Preview carefully, prepare students, and align with local policy.",
      disclaimer: "This activity is an independent educational companion to Long Way Down by Jason Reynolds. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY-NC 4.0. Long Way Down, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "../images/longwaydown/hero.webp",
      heroAlt: "An instructional illustration evoking Long Way Down — a lone teenager standing inside an old apartment-building elevator, floor numbers glowing above the doors as the car begins to descend."
    },
    hook: "Fifteen-year-old Will has just watched his older brother, Shawn, gunned down in the street. He knows The Rules: no crying, no snitching, always get revenge. So he tucks Shawn's gun into his waistband and steps into the elevator to go find the person he thinks did it. But between his floor and the lobby, the doors keep opening — and each time, someone from his past who died by a bullet steps on. In roughly sixty seconds, Will has to decide whether the Rules are a law or a trap.",
    goals: [
      "Explain the unwritten Rules — no crying, no snitching, always get revenge — and how they drive Will's plan.",
      "Trace how the ghosts who board the elevator complicate Will's certainty about who did what and why.",
      "Analyze how Reynolds uses the verse form, the elevator, and the descent to build meaning and suspense.",
      "Distinguish the real-world ideas the book explores — the cycle of retaliatory violence, grief, and trauma — from the specific, invented story of Will's ride, and carry the book's central question into the present."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a novel written in verse.",
        "Discuss: When someone you love is hurt, what 'rules' does your community expect you to follow — and who wrote them?"
      ],
      during: [
        "Use the Objects from the Elevator to slow down and read key images and moments closely.",
        "Track each floor: who boards, what they reveal, and how it shifts Will's thinking."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the book's central question to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what The Rules are and why Will believes he has to follow them. Include one detail from the novel that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the ghosts who board the elevator. Explain how comparing what each one reveals changes your understanding of Will or of the cycle he is caught in." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the book's central question — whether to follow the Rules or break the cycle — to the present. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "verse novel", def: "A book that tells a full story through poems instead of ordinary paragraphs, using line breaks, spacing, and rhythm to carry meaning.", example: "Long Way Down, told in short poems across a single elevator ride.", nonexample: "A novel written in standard prose paragraphs from start to finish.", context: "Reynolds writes the whole story in verse, so where a line breaks can matter as much as the words." },
      { term: "retaliation", def: "Striking back to hurt someone in return for a harm they caused.", example: "Will's plan to shoot the person he believes killed Shawn.", nonexample: "Choosing to walk away from a fight instead of hitting back.", context: "The third Rule — always get revenge — turns each death into a reason for the next act of retaliation." },
      { term: "the cycle", def: "A pattern that keeps repeating, where each act of violence causes another in a chain that does not end on its own.", example: "One shooting leading to another, generation after generation, in Will's neighborhood.", nonexample: "A single argument that is settled and never happens again.", context: "The ghosts show Will that the Rules do not stop the killing — they keep the cycle spinning." },
      { term: "grief", def: "The deep sorrow a person feels after losing someone they love.", example: "The heaviness Will carries in the hours after Shawn is shot.", nonexample: "A minor disappointment that fades by the next day.", context: "Grief and anger are tangled together in Will, and the Rules give him only one way to express them." },
      { term: "trauma", def: "A lasting emotional wound left by a frightening or painful experience.", example: "The way witnessing shootings has shaped how Will and the ghosts think and act.", nonexample: "A single bad day that leaves no lasting mark.", context: "Each ghost carries their own trauma, and their stories show how it passes from person to person." },
      { term: "the Rules", def: "The unwritten code Will is taught — no crying, no snitching, always get revenge — that dictates how to respond to violence.", example: "Will refusing to cry and tucking the gun in his waistband to get revenge.", nonexample: "Calling for help, talking about your feelings, and letting the law handle it.", context: "The whole book tests whether the Rules are a law Will must obey or a trap he can break." },
      { term: "ghost", def: "In this novel, the spirit of someone who died by gun violence who returns to speak to the living.", example: "Buck, Dani, Uncle Mark, and the others who board the elevator.", nonexample: "A living neighbor who rides the elevator with Will.", context: "Each floor brings a new ghost, and each one knew someone Will thought he already understood." },
      { term: "descent", def: "A downward movement — and, in a story, a symbolic journey down into darkness, danger, or the truth.", example: "The elevator carrying Will down floor by floor toward the lobby.", nonexample: "Riding an elevator up to a rooftop view.", context: "The whole book takes place during one descent, and going down mirrors Will's journey into the past and the pull of the cycle." },
      { term: "ambiguity", def: "When a moment, choice, or ending can honestly be read in more than one way and is left open on purpose.", example: "The book's final image, which does not fully tell the reader what Will decides.", nonexample: "A conclusion that spells out exactly what every character does next.", context: "Reynolds leaves Will's choice deliberately open, so readers must weigh the evidence themselves." }
    ],

    relic: {
      name: "Objects from the Elevator",
      intro: "Seven instructional reconstructions of objects and moments from Long Way Down — teaching recreations, not artwork from the book. Investigate what each is, its role in the novel, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "gun", name: "The Gun in the Waistband", image: "../images/longwaydown/gun.webp",
          clues: ["After Shawn is killed, Will finds a gun hidden in a drawer in Shawn's room.", "He tucks it into the back of his waistband before stepping onto the elevator.", "He is carrying it to do the one thing the Rules demand: get revenge."],
          identify: { q: "What is this object?", choices: ["Shawn's gun, which Will takes to carry out revenge", "A toy Will has had since childhood", "A gun the police give Will for protection", "A gift from one of the ghosts"] },
          purpose: { q: "What is its role in the novel?", choices: ["It is the physical weight of the Rules — the tool Will believes he must use to follow them", "It is only a background detail with no meaning", "It is used to threaten his mother", "It is never mentioned again after the first floor"] },
          significance: { q: "What does carrying it reveal about Will?", choices: ["That he intends to obey the third Rule even though he is scared and unsure", "That he is a hardened, experienced criminal", "That he does not care about Shawn at all", "That he plans to turn it in to the police"] },
          reveals: "How the Rules turn grief into a plan of action with a weapon at its center.",
          conceals: "Whether Will truly wants to use it, or is only doing what he believes he is supposed to do.",
          ace: "Articulate what the gun represents; connect it to the third Rule; extend it to how people feel pressured to act on codes they did not choose."
        },
        {
          id: "elevator", name: "The Descending Elevator", image: "../images/longwaydown/elevator.webp",
          clues: ["The entire story unfolds inside an apartment-building elevator over about sixty seconds.", "At each floor the doors open and a new passenger steps on.", "The numbers count down as the car moves toward the lobby."],
          identify: { q: "What is the setting of almost the entire novel?", choices: ["A single elevator ride down through the floors of Will's building", "A long car trip across the city", "A courtroom during a trial", "Will's school classroom"] },
          purpose: { q: "What is its role in the novel?", choices: ["It becomes a tight, inescapable space where the past comes to confront Will", "It is just a way to get from one place to another", "It shows how fancy Will's building is", "It has nothing to do with the story's meaning"] },
          significance: { q: "What does the downward motion suggest?", choices: ["A descent into memory, danger, and the pull of the cycle Will is caught in", "That the building is very tall", "That Will is late for something", "That the elevator is broken"] },
          reveals: "How a small, enclosed space and a countdown can hold an entire life-or-death decision.",
          conceals: "Whether the ghosts are real, imagined, or something in between — the book leaves it open.",
          ace: "Articulate why the elevator setting matters; connect the descent to Will's inner journey; extend it to how pressure narrows the choices people feel they have."
        },
        {
          id: "floornumbers", name: "The Glowing Floor Numbers", image: "../images/longwaydown/floornumbers.webp",
          clues: ["A lit panel above the doors counts the floors as the car goes down.", "Each new number marks the arrival of another ghost from Will's past.", "The countdown gives the whole book the feel of a ticking clock."],
          identify: { q: "What do the changing floor numbers mark?", choices: ["The structure of the story — each floor brings a new passenger and a new revelation", "How much the elevator ride costs", "The ages of the people on the elevator", "The number of bullets in the gun"] },
          purpose: { q: "What is their role in the novel?", choices: ["They pace the story and build suspense as time runs out before the lobby", "They are a random detail with no purpose", "They tell Will which apartment to visit", "They show that the elevator is modern"] },
          significance: { q: "What does the countdown pressure reveal?", choices: ["That Will has only moments to weigh a decision that will shape the rest of his life", "That elevators move too slowly", "That Will is impatient by nature", "That the ghosts are in a hurry to leave"] },
          reveals: "How a simple counter turns the ride into a compressed, urgent decision.",
          conceals: "What waits for Will in the lobby, which the book does not fully resolve.",
          ace: "Articulate what the floor numbers do for the pacing; connect the countdown to Will's pressure; extend it to how time pressure affects big decisions."
        },
        {
          id: "cigarette", name: "Buck's Cigarette and the Reappearing Gun", image: "../images/longwaydown/cigarette.webp",
          clues: ["Buck, who taught Shawn the Rules and once carried the same gun, boards the elevator smoking.", "He asks Will a question that unsettles the story Will has told himself.", "Through Buck, Will learns the gun may be empty — or not what he assumed."],
          identify: { q: "Who is Buck to Will and Shawn?", choices: ["An older mentor, now dead, who taught Shawn the Rules and passed down the gun", "A police detective investigating the case", "A stranger with no connection to the family", "Will's classmate from school"] },
          purpose: { q: "What is Buck's role in the elevator?", choices: ["He begins to unravel Will's certainty about the gun and the Rules", "He is comic relief with nothing to say", "He tells Will exactly who to shoot", "He tries to steal the gun from Will"] },
          significance: { q: "What does the question about the gun reveal?", choices: ["That the tools and certainties Will is relying on may not be what he believes", "That the gun is brand new", "That Buck never knew Shawn", "That the Rules are simple and reliable"] },
          reveals: "How each ghost chips away at the neat story Will has told himself.",
          conceals: "The full history of how many hands have carried that same gun through the cycle.",
          ace: "Articulate who Buck is; connect his question to Will's doubt; extend it to how a mentor's code can outlive the person who taught it."
        },
        {
          id: "photo", name: "Dani and the Memory of Childhood", image: "../images/longwaydown/photo.webp",
          clues: ["Dani was Will's childhood friend, killed by a stray bullet when they were young.", "She boards the elevator carrying the mark of the wound that killed her.", "Her presence forces Will to remember an innocence the cycle took from him."],
          identify: { q: "Who is Dani?", choices: ["Will's childhood friend, killed years earlier by a stray bullet", "Will's older sister", "A ghost from a different neighborhood Will never met", "Shawn's girlfriend"] },
          purpose: { q: "What is her role in the elevator?", choices: ["She reminds Will that the cycle claims the innocent, not only its intended targets", "She encourages Will to hurry up and get revenge", "She is unrelated to the theme of violence", "She tries to make Will laugh and forget"] },
          significance: { q: "What does her death reveal about the cycle?", choices: ["That retaliatory violence often kills bystanders who were never part of anyone's plan", "That only guilty people are ever harmed", "That childhood friends never matter", "That the Rules keep everyone safe"] },
          reveals: "How the cycle spreads harm far beyond the people it is aimed at.",
          conceals: "The lifelong weight Will carries from a loss he could do nothing to prevent.",
          ace: "Articulate who Dani is; connect her death to the theme of collateral harm; extend it to who really pays the price in cycles of violence."
        },
        {
          id: "uncle", name: "Uncle Mark and the Father", image: "../images/longwaydown/uncle.webp",
          clues: ["Will's Uncle Mark and Will's own father both died by gun violence years before.", "Their stories reveal earlier links in the same chain of revenge.", "Through them Will sees that the men before him followed the very same Rules."],
          identify: { q: "Who are these ghosts to Will?", choices: ["His Uncle Mark and his father, earlier victims of the same cycle of violence", "Two strangers with no family tie", "Friends of Shawn from school", "Neighbors Will has never met"] },
          purpose: { q: "What is their role in the elevator?", choices: ["They show that Will's family has been trapped in this cycle for generations", "They prove the Rules have always worked", "They are there only to fill the crowded elevator", "They tell Will to forget about Shawn"] },
          significance: { q: "What does their shared fate reveal?", choices: ["That following the Rules has already cost Will's family more than one life", "That revenge finally ended the violence for good", "That Will's family was never touched by violence", "That the Rules are brand new to Will's generation"] },
          reveals: "How the same code and the same cycle passed down through Will's own family.",
          conceals: "How much of who Will is has already been shaped by losses he was too young to understand.",
          ace: "Articulate who these ghosts are; connect their deaths to the generational cycle; extend it to how patterns repeat within families and communities."
        },
        {
          id: "shawn", name: "Shawn on the Elevator", image: "../images/longwaydown/shawn.webp",
          clues: ["On one of the final floors, Will's just-killed brother Shawn steps onto the elevator.", "Shawn does not cheer Will on or hand him a plan for revenge.", "His silence and presence press the book's central question directly onto Will."],
          identify: { q: "Who boards on one of the last floors?", choices: ["Shawn, Will's brother, killed only hours before", "A police officer", "The person Will plans to shoot", "A stranger from the lobby"] },
          purpose: { q: "What is Shawn's role in this moment?", choices: ["His presence forces Will to face what revenge for Shawn would actually mean", "He gives Will detailed orders to shoot someone", "He is there to protect Will from the other ghosts", "He tells Will the Rules were always right"] },
          significance: { q: "What does Shawn's arrival reveal?", choices: ["That the person Will is avenging may not want the cycle to continue through Will", "That Shawn is glad Will is seeking revenge", "That Shawn was never really Will's brother", "That the elevator ride was only a dream with no meaning"] },
          reveals: "How the one person Will is acting for becomes the one who most complicates the plan.",
          conceals: "What Shawn would actually want, which the book leaves for the reader to weigh.",
          ace: "Articulate who joins Will on the elevator; connect Shawn's silence to the central question; extend it to whether honoring someone means obeying a code."
        }
      ]
    },

    ctob: {
      name: "The Elevator Ride",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "How old is Will, the narrator? Enter the number.",
          evidence: ["Will is a teenager, still in school, living with his mother.", "He is old enough to make an adult-sized decision but is not yet an adult.", "The narration places his age at fifteen."],
          hints: ["He is in his mid-teens.", "It is one more than fourteen.", "He is 15."],
          answer: "15"
        },
        {
          type: "word",
          prompt: "What is the name of Will's older brother, whose death sets the whole story in motion? (one name)",
          evidence: ["He is shot and killed in the street at the start of the book.", "It is his gun that Will takes from a drawer.", "The entire ride is Will's response to this brother's death."],
          hints: ["His name begins with 'Sh…'.", "It rhymes with 'yawn'.", "His name is Shawn."],
          answer: "Shawn"
        },
        {
          type: "mc",
          prompt: "Why does Will step onto the elevator carrying Shawn's gun?",
          options: [
            "To follow the Rules and get revenge on the person he believes killed Shawn.",
            "To turn the gun in to the police at the front desk.",
            "To sell the gun so his family can pay rent.",
            "To hide the gun somewhere his mother will never find it."
          ],
          hints: ["Think about the third Rule.", "Which option is about revenge?"]
        },
        {
          type: "word",
          prompt: "The unwritten code Will lives by has a short name used throughout the book. What is it? (one word)",
          evidence: ["It has three parts: no crying, no snitching, always get revenge.", "Buck taught them to Shawn, who lived by them.", "The whole book tests whether Will must obey them."],
          hints: ["It is what Will believes he has to follow.", "It starts with 'Rul…'.", "The word is Rules."],
          answer: "Rules"
        },
        {
          type: "sequence",
          prompt: "Put these events of Will's night and ride in the order they happen, earliest first.",
          items: [
            "Shawn is shot and killed in the street.",
            "Will finds Shawn's gun and tucks it into his waistband.",
            "Will steps onto the elevator, and at each floor a ghost boards.",
            "Shawn himself steps onto the elevator near the bottom floors."
          ],
          hints: ["The death that starts everything comes first.", "Will must get the gun before he can ride down.", "Shawn is one of the last to board."]
        },
        {
          type: "mc",
          prompt: "As the ghosts board floor by floor, what happens to Will's certainty about his plan?",
          options: [
            "It is shaken — each ghost complicates the story he told himself about revenge.",
            "It grows stronger, and every ghost urges him to shoot.",
            "It disappears because the ghosts explain exactly who to kill.",
            "It never changes; the ghosts have no effect on him."
          ],
          hints: ["Think about how each floor adds new information.", "Do the ghosts make the choice simpler or harder?"]
        }
      ]
    },

    arcade: {
      name: "The Idea or Will's Story?",
      instruction: "Long Way Down explores real-world ideas through one invented character's ride. Sort each statement: is it A REAL IDEA the book examines (something true about violence, grief, and the choices people face) or WILL'S STORY (a specific detail of the novel's fictional plot)? Reasoning earns the points.",
      buckets: [
        { id: "concept", label: "A real idea", short: "Concept" },
        { id: "story", label: "Will's story", short: "Story" }
      ],
      cards: [
        { text: "Retaliatory gun violence can trap a community in a cycle where each death causes the next.", bucket: "concept", why: "This is a real-world idea about how cycles of violence sustain themselves." },
        { text: "Unwritten codes — do not cry, do not snitch, always get even — shape how some people respond to loss.", bucket: "concept", why: "These 'rules' name a real social pressure the book examines, not a single plot event." },
        { text: "Grief and trauma can push a grieving person toward a decision they have not fully thought through.", bucket: "concept", why: "This describes a real emotional truth the novel explores." },
        { text: "Cycles of violence often harm bystanders and pass through families across generations.", bucket: "concept", why: "This is a real-world pattern the book illustrates through its characters." },
        { text: "Will tucks his brother Shawn's gun into his waistband and steps onto the elevator.", bucket: "story", why: "This specific action belongs to Will's invented story." },
        { text: "At each floor, a ghost of someone killed by a bullet boards the elevator.", bucket: "story", why: "The boarding ghosts are a specific feature of the novel's plot." },
        { text: "Buck, Dani, Uncle Mark, and Will's father each ride down and speak with Will.", bucket: "story", why: "These particular characters are part of Reynolds's fictional story." },
        { text: "Near the bottom, Shawn himself steps onto the elevator with Will.", bucket: "story", why: "This specific moment is an invented plot detail." }
      ],
      followup: "Why might Reynolds explore a huge real-world problem through one boy's sixty-second elevator ride? What can Will's specific story show a reader that a list of facts about violence cannot?"
    },

    analysis: {
      mcq: [
        {
          q: "Will steps onto the elevator with the gun mainly because —",
          options: [
            "the Rules tell him that revenge is the only acceptable response to Shawn's death.",
            "he wants to protect his mother from an intruder.",
            "he has always dreamed of using a gun.",
            "a police officer instructed him to carry it."
          ],
          why: "Will's plan is driven by the third Rule — always get revenge — not by personal desire or outside orders."
        },
        {
          q: "The ghosts who board the elevator function mainly to —",
          options: [
            "complicate Will's certainty by revealing what he did not know about the cycle and the gun.",
            "cheer Will on toward carrying out his revenge.",
            "give Will directions to the lobby.",
            "prove that the Rules have always kept everyone safe."
          ],
          why: "Each ghost adds information that unsettles the neat story Will has told himself, making his decision harder rather than easier."
        },
        {
          q: "Dani's death by a stray bullet most clearly shows that —",
          options: [
            "the cycle of violence harms innocent bystanders, not only its intended targets.",
            "revenge always reaches the right person.",
            "children are never affected by neighborhood violence.",
            "the Rules protect everyone equally."
          ],
          why: "Dani was not anyone's target, so her death exposes how retaliatory violence spreads harm far beyond its aim."
        },
        {
          q: "The presence of Uncle Mark and Will's father on the elevator suggests that —",
          options: [
            "Will's family has been caught in the same cycle of revenge for generations.",
            "the violence ended long before Will was born.",
            "Will's family was never touched by gun violence.",
            "the Rules are new to Will's generation."
          ],
          why: "Their deaths reveal that the code and the cycle Will is about to obey have already claimed members of his own family."
        },
        {
          q: "Reynolds leaves the book's final moment open in order to —",
          options: [
            "force readers to weigh the evidence and decide what Will's choice should be.",
            "show that Will's decision does not matter.",
            "prove that revenge was clearly the right answer.",
            "confirm that the ghosts were only a dream."
          ],
          why: "The deliberate ambiguity puts the central question — follow the Rules or break the cycle — onto the reader."
        }
      ],
      short: [
        "Choose one ghost who boards the elevator. Explain what that ghost reveals to Will and how it complicates his plan for revenge.",
        "The Rules are 'no crying, no snitching, always get revenge.' Explain how the novel treats these Rules as both powerful and dangerous.",
        "Reynolds ends the book without telling us exactly what Will does. Why might he leave the choice open, and what does that ask of the reader?"
      ],
      paragraph: "Write an evidence-based paragraph. Long Way Down is built as a single descent in an elevator, with a ghost boarding at each floor. How does this structure — the enclosed space, the countdown, the boarding ghosts — shape the way the book makes its central argument about the cycle of violence? Support your claim with specific details.",
      aceReflection: "Articulate the novel's central idea about the Rules and the cycle of violence in your own words. Connect two moments (or two ghosts) that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Then into Now",
      prompt: "Long Way Down asks whether a person can break a cycle of violence instead of obeying the unwritten rules that keep it going. Choose one real way that people or communities today try to interrupt cycles of retaliation — through mentorship, mediation, grief support, or another approach. Explain the connection with evidence, the way Reynolds grounds a huge question in one boy's specific choices.",
      format: "A short evidence-based comparison connecting the novel's central question to a present-day reality, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what The Rules are and why Will follows them in Long Way Down. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Long Way Down. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [ghost one] connects to [ghost two] in Long Way Down because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Long Way Down: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect a theme from Long Way Down to the present: [connection]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Long Way Down for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to Long Way Down. It supports close reading of Reynolds's central concerns — the unwritten Rules, the cycle of retaliatory violence, grief and trauma, and the weight of a single decision — and of the verse form and elevator structure that carry them. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Long Way Down is copyrighted. This is an independent companion — students need their own lawful copy; the room links to and quotes no text.",
        "Mature content: the novel centers on gun violence, the killing of a sibling, grief, and trauma, with several characters who died by shooting. Preview carefully, prepare students, and follow local policy.",
        "Details here were checked from public knowledge (fifteen-year-old narrator Will; his brother Shawn's shooting; the Rules of no crying, no snitching, always get revenge; the gun taken from a drawer; the roughly sixty-second elevator descent; the ghosts — including Buck, Dani, Uncle Mark, and Will's father — who board floor by floor; Shawn boarding near the end; and the deliberately open ending). Confirm against your class edition, as framing and details vary.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 8–10 ELAR TEKS (19 TAC Ch. 110) for reading response, author's purpose and craft, poetry and multiple-genre analysis, with cross-curricular ties to health and social-emotional learning around conflict and grief. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through clear visuals, plain directions, and device-local supports. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.3", "RL.9-10.4", "RL.9-10.5", "RL.9-10.6", "RL.9-10.10", "W.9-10.1", "W.9-10.9", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, plain directions, labeled reconstructions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
