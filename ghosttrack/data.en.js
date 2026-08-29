/* Contraband — Ghost (Track, Book 1) by Jason Reynolds. English source data.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; plot, character, and chronology details were
   verified for accuracy and are used only to build original, transformative
   analysis. Standards are good-faith Common Core alignment; TEKS/ELPS flagged
   "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles. */
window.__ROOM__ = {
  id: "ghosttrack",
  storageKey: "contraband.ghosttrack.v1",

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
    "vocab.title": "Words for Ghost",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Ghost's Keepsakes",
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
    "ctob.title": "The Defenders' Logbook",
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
    "arcade.title": "Real Idea or Ghost's Story?",
    "arcade.default": "Sort each statement by whether it is a real idea the novel explores or part of Ghost's specific fictional story.",
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
      title: "Ghost",
      author: "Jason Reynolds",
      grades: "Grades 6–8",
      genre: "Contemporary fiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the novel (print, e-book, or licensed audiobook). This activity does not reproduce or replace the book.",
      copyright: "Ghost is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "The novel deals with a father's gun violence toward his family, poverty, and bullying. Preview carefully, prepare students, and align with local policy.",
      disclaimer: "This activity is an independent educational companion to Ghost by Jason Reynolds. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY-NC 4.0. Ghost, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "../images/ghosttrack/hero.webp",
      heroAlt: "An instructional illustration evoking Ghost — a lone runner's lane on a track curving past a city neighborhood, a single worn sneaker at the starting line under stadium lights."
    },
    hook: "Castle Cranshaw calls himself Ghost. He is fast — faster than he ever wanted to be, ever since the night he and his mother ran from his own father. When a chance encounter with a track coach pulls him onto an elite youth team, Ghost has to decide whether he can outrun his past, or whether the thing chasing him is something he will finally have to turn and face.",
    goals: [
      "Explain how running becomes both an escape from and a way to confront the painful night that changed Ghost's life.",
      "Trace how Coach and the Defenders team begin to function as a kind of family for Ghost.",
      "Analyze how Ghost's choices — including a serious mistake — reveal his struggle and his growth.",
      "Distinguish the real ideas the novel explores from the specific, invented details of Ghost's story, and carry the novel's questions into the present."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a coming-of-age sports story set in a city neighborhood.",
        "Discuss: What does it mean to run toward something instead of only running away from it?"
      ],
      during: [
        "Use the Keepsakes to slow down and read key objects and moments closely.",
        "Track how each event pushes Ghost between his old trouble and the new team pulling him forward."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the novel's ideas to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what running gives Ghost that he cannot get anywhere else. Include one detail from the novel that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments in the novel that show Coach or the team acting like family for Ghost. Explain how comparing them changes your understanding of Ghost or a theme." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a question the novel raises to the present. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "altercation", def: "A noisy or angry argument or confrontation between people.", example: "A shouting match at the store that draws everyone's attention.", nonexample: "Two friends quietly agreeing on a plan.", context: "Ghost has to work hard not to let a small altercation blow up into a fight." },
      { term: "sprinter", def: "A runner who races short, fast distances rather than long ones.", example: "A runner built for explosive speed over a hundred meters.", nonexample: "A marathoner pacing themselves over many miles.", context: "Coach quickly sees that Ghost has the raw speed of a natural sprinter." },
      { term: "scholarship", def: "Money or support given so a person can take part in something they could not otherwise afford.", example: "A funded spot on a team for a runner whose family cannot pay the fees.", nonexample: "Paying full price out of your own pocket for every uniform.", context: "Coach's own story shows how a chance and some support can change a runner's whole future." },
      { term: "silver", def: "Ghost's nickname for the store owner who gives him credit; also the color of second place.", example: "The corner-store owner Ghost trusts enough to talk to.", nonexample: "A stranger Ghost has never met and does not trust.", context: "Ghost calls the shop owner 'Mr. Charles' but thinks of the store, and the man, in his own private way." },
      { term: "impulsive", def: "Acting suddenly on a feeling without stopping to think it through.", example: "Grabbing something off a shelf and walking out before you can stop yourself.", nonexample: "Carefully weighing a choice before you act on it.", context: "Ghost's most serious mistake is an impulsive act he cannot fully explain even to himself." },
      { term: "shoplifting", def: "Taking goods from a store without paying for them.", example: "Slipping a new pair of shoes out of a store without buying them.", nonexample: "Saving up and paying at the register for what you need.", context: "The shoes Ghost most wants become the center of a shoplifting choice that follows him." },
      { term: "resilience", def: "The ability to recover from hardship and keep going after setbacks.", example: "Getting back on the track after a bad race or a bad day at home.", nonexample: "Giving up completely the first time something goes wrong.", context: "The novel measures Ghost less by his speed than by his resilience." },
      { term: "trauma", def: "A deep, lasting emotional wound left by a frightening or painful experience.", example: "The way one terrifying night keeps replaying in Ghost's mind.", nonexample: "A minor embarrassment that is forgotten by the next day.", context: "Ghost's speed and his temper both grow out of the same buried trauma." },
      { term: "mentor", def: "An experienced person who guides, supports, and challenges someone younger.", example: "Coach pushing Ghost while also looking out for him off the track.", nonexample: "An adult who ignores a young person entirely.", context: "Coach becomes the kind of mentor who expects the truth and refuses to give up on Ghost." }
    ],

    relic: {
      name: "Ghost's Keepsakes",
      intro: "Seven instructional reconstructions of objects and moments from Ghost — teaching recreations, not artwork from the book. Investigate what each is, its role in the novel, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "sunflowers", name: "The Bag of Sunflower Seeds", image: "images/sunflowers.webp",
          clues: ["Ghost buys a small bag from the corner store almost every day.", "The store owner lets him run a tab and pay when he can.", "The seeds are a quiet ritual that steadies him between hard moments."],
          identify: { q: "What is this object?", choices: ["A daily bag of sunflower seeds Ghost buys from the corner store on credit", "A gift from Coach for winning a race", "A snack the whole track team shares", "A prize from a school contest"] },
          purpose: { q: "What is its role in the novel?", choices: ["It is a small comfort and routine that shows Ghost's everyday life and his bond with the store owner", "It teaches Ghost how to run", "It is a clue to a crime he did not commit", "It has no importance to the story"] },
          significance: { q: "What does this daily habit reveal?", choices: ["That small, steady kindnesses help Ghost hold himself together", "That Ghost cares only about food", "That the store owner is his enemy", "That Ghost has plenty of money"] },
          reveals: "How ordinary routines and quiet trust give a struggling kid something to hold onto.",
          conceals: "How much stress Ghost is carrying underneath a small everyday habit.",
          ace: "Articulate what the seeds mean to Ghost; connect the habit to his need for steadiness; extend it to small routines that help people cope today."
        },
        {
          id: "shoes", name: "The Silver Running Shoes", image: "images/shoes.webp",
          clues: ["Ghost becomes fixated on a sleek, expensive pair of running shoes in a store window.", "His old sneakers feel worn out and embarrassing next to the team's gear.", "Unable to buy them, he makes a sudden choice that gets him in serious trouble."],
          identify: { q: "What are these shoes?", choices: ["The expensive running shoes Ghost wants so badly that he steals them", "Shoes Coach buys for the whole team", "A pair Ghost has owned since he was little", "Shoes he wins in a race"] },
          purpose: { q: "What is their role in the novel?", choices: ["They trigger Ghost's most serious mistake and force a reckoning about right and wrong", "They make Ghost the fastest runner instantly", "They are a gift that solves all his problems", "They are only a background detail"] },
          significance: { q: "What does Ghost's choice about the shoes reveal?", choices: ["That his shame and impulsiveness can push him into decisions he regrets", "That stealing always works out fine", "That Ghost never thinks about consequences", "That the shoes did not matter to him"] },
          reveals: "How poverty and shame can pressure a kid toward an impulsive, damaging choice.",
          conceals: "How much Ghost wants to belong, hidden beneath a bad decision.",
          ace: "Articulate why Ghost wants the shoes; connect his impulsiveness to his shame; extend it to how people handle wanting what they cannot afford."
        },
        {
          id: "medal", name: "Coach's Old Medal and Taxi", image: "images/medal.webp",
          clues: ["Coach drives a gold cab and first spots Ghost by watching him race a boy from the sideline.", "Coach was once a serious runner himself, with his own hard beginnings.", "He offers Ghost a place on the elite Defenders team instead of walking away."],
          identify: { q: "What do the cab and Coach's past represent?", choices: ["A second chance offered by an adult who sees himself in Ghost", "A random stranger with no connection to Ghost", "A ride Ghost pays for every day", "A rival trying to slow Ghost down"] },
          purpose: { q: "What is Coach's role in the novel?", choices: ["He becomes a mentor and steady presence who pulls Ghost toward the team and the truth", "He only cares whether Ghost wins races", "He tries to get Ghost in trouble", "He disappears after the first day"] },
          significance: { q: "What does Coach's own story reveal?", choices: ["That someone who has struggled can offer a real path forward to a kid who is struggling now", "That the past never matters", "That Coach dislikes Ghost", "That talent alone is enough"] },
          reveals: "How one adult's belief and second chance can redirect a young person's life.",
          conceals: "How much Coach risks by taking responsibility for a kid with so much trouble.",
          ace: "Articulate what Coach offers Ghost; connect Coach's past to his mentoring; extend it to how mentors change lives today."
        },
        {
          id: "team", name: "The Defenders Team Jersey", image: "images/team.webp",
          clues: ["The Defenders are an elite youth track team Ghost is invited to join.", "At first Ghost feels like an outsider next to teammates with more experience and gear.", "Over time the team and Coach begin to feel like a second family."],
          identify: { q: "What does the jersey represent?", choices: ["Belonging to the Defenders — a team that starts to feel like family", "A costume Ghost wears for fun", "A hand-me-down he is ashamed of", "A uniform for his school, not track"] },
          purpose: { q: "What is the team's role in the novel?", choices: ["It gives Ghost a place to belong and people who hold him accountable", "It keeps Ghost away from anyone who cares about him", "It is only about winning trophies", "It has no effect on the plot"] },
          significance: { q: "What does joining the team reveal about Ghost?", choices: ["That he wants to belong and can grow when people expect the best of him", "That he prefers to be alone", "That he does not care about running", "That teammates mean nothing to him"] },
          reveals: "How a team can become a chosen family that steadies a kid who is struggling.",
          conceals: "How afraid Ghost is of being seen as not belonging.",
          ace: "Articulate what the team gives Ghost; connect belonging to his growth; extend it to how groups can become family for young people today."
        },
        {
          id: "scar", name: "The Night by the Refrigerator", image: "images/scar.webp",
          clues: ["Ghost carries the memory of the night his father fired a gun at him and his mother.", "He and his mom ran out of the house and kept running to save their lives.", "That night is the reason Ghost discovers how fast he can run."],
          identify: { q: "What does this memory represent?", choices: ["The traumatic night that changed Ghost's life and first made him run", "A happy family memory", "A race Ghost lost", "A story Ghost invented"] },
          purpose: { q: "What is its role in the novel?", choices: ["It is the buried event that shapes Ghost's speed, his temper, and his fear", "It is quickly forgotten and unimportant", "It explains why Ghost loves school", "It has nothing to do with running"] },
          significance: { q: "What does the memory reveal about Ghost?", choices: ["That his greatest strength and his deepest wound come from the same night", "That the past cannot affect a person", "That Ghost was never really afraid", "That his father was gentle"] },
          reveals: "How a single frightening night can shape a person's fears and even their gifts.",
          conceals: "How heavy that memory is for Ghost to carry silently.",
          ace: "Articulate what that night did to Ghost; connect the trauma to his running; extend it to how people live with painful memories."
        },
        {
          id: "record", name: "The 'World Record' Notebook of Facts", image: "images/record.webp",
          clues: ["Ghost loves collecting odd world records and surprising facts.", "He shares them at unexpected moments, almost as a way to feel special.", "The facts hint at his hope that he, too, could be exceptional at something."],
          identify: { q: "What is this collection of records and facts?", choices: ["Ghost's habit of memorizing world records that reflects his wish to matter", "A textbook Coach assigns", "A list of his race times", "A prize he won at school"] },
          purpose: { q: "What is its role in the novel?", choices: ["It reveals Ghost's inner longing to be seen as extraordinary", "It shows Ghost hates learning", "It is a clue that Ghost is dishonest", "It has no meaning in the story"] },
          significance: { q: "What does this habit reveal about Ghost?", choices: ["That he wants to be remarkable and to leave a mark despite his hard life", "That he only cares about trivia", "That he never thinks about the future", "That he dislikes attention"] },
          reveals: "How a kid's small obsessions can carry a big hope of being someone who matters.",
          conceals: "How much Ghost fears he is only ordinary, or worse.",
          ace: "Articulate what the records mean to Ghost; connect the habit to his hopes; extend it to how people search for a way to stand out."
        },
        {
          id: "phone", name: "Coach's Phone Call Home", image: "images/phone.webp",
          clues: ["When Ghost's mistake comes to light, Coach does not simply throw him off the team.", "Coach involves the adults in Ghost's life and holds him to account.", "The moment forces Ghost to face the consequences honestly instead of running."],
          identify: { q: "What does this moment represent?", choices: ["Coach holding Ghost accountable while still standing by him", "Coach cutting Ghost from the team for good", "A prize Ghost receives", "A race Ghost wins"] },
          purpose: { q: "What is its role in the novel?", choices: ["It is the turning point where Ghost must stop running and face what he did", "It ends Ghost's running career instantly", "It proves adults never help Ghost", "It is only a small background scene"] },
          significance: { q: "What does Coach's response reveal?", choices: ["That real support can mean accountability, not only comfort", "That mistakes should always be ignored", "That Coach wanted Ghost gone", "That consequences never matter"] },
          reveals: "How caring for someone can mean making them face the truth, not letting them run from it.",
          conceals: "How frightening it is for Ghost to stop running and stand still with what he did.",
          ace: "Articulate what Coach does; connect accountability to real support; extend it to how facing mistakes helps people grow."
        }
      ]
    },

    ctob: {
      name: "The Defenders' Logbook",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "What is the nickname Castle Cranshaw goes by throughout the novel? (one word)",
          evidence: ["He picks a name that fits how he feels: fast, hard to catch, and a little unseen.", "It is the single word that titles the book.", "Even his teammates and Coach come to know him by it."],
          hints: ["It is the title of the book.", "It starts with 'Gh…'.", "The nickname is Ghost."],
          answer: "Ghost"
        },
        {
          type: "word",
          prompt: "What sport does Ghost join, discovering he has a natural talent for it? (one word)",
          evidence: ["Coach spots him after watching him race another kid.", "He is placed on an elite youth team called the Defenders.", "His event involves running fast around a marked oval."],
          hints: ["Runners compete on an oval with lanes.", "It starts with 'tra…'.", "The sport is track."],
          answer: "track"
        },
        {
          type: "mc",
          prompt: "How does Ghost first discover that he can run so fast?",
          options: [
            "The night he and his mother ran from his father, who fired a gun at them, he ran for his life.",
            "He won a race at a school field day for fun.",
            "Coach timed him during a practice drill.",
            "He was chasing a bus he was late for."
          ],
          hints: ["Think about the frightening night that changed his life.", "It was not a game — it was survival."]
        },
        {
          type: "word",
          prompt: "What does Ghost steal from a store, setting off the novel's biggest conflict? (one word, plural)",
          evidence: ["He becomes obsessed with a sleek, expensive pair he sees in a store.", "His own worn pair embarrasses him next to the team's gear.", "He runs out of the store without paying for them."],
          hints: ["You wear them on your feet to run.", "It starts with 'sho…'.", "The answer is shoes."],
          answer: "shoes"
        },
        {
          type: "sequence",
          prompt: "Put these events of Ghost's story in the order they happen, earliest first.",
          items: [
            "On a terrifying night, Ghost and his mother run from his father, and Ghost learns how fast he can run.",
            "Coach spots Ghost racing on the sideline and invites him to join the Defenders track team.",
            "Feeling out of place without proper gear, Ghost steals a pair of expensive running shoes.",
            "Coach confronts Ghost's mistake and holds him accountable instead of cutting him loose."
          ],
          hints: ["The night that made him run comes first.", "Joining the team comes before the theft.", "Coach's confrontation is near the end."]
        },
        {
          type: "mc",
          prompt: "How does Coach respond when Ghost's theft of the shoes comes to light?",
          options: [
            "He holds Ghost accountable and involves the adults in his life, but he does not give up on him.",
            "He immediately cuts Ghost from the team and never speaks to him again.",
            "He pretends nothing happened and lets it slide.",
            "He tells Ghost to run away before anyone finds out."
          ],
          hints: ["Coach acts like a mentor, not just a punisher.", "Support and accountability can go together."]
        }
      ]
    },

    arcade: {
      name: "Real Idea or Ghost's Story?",
      instruction: "Ghost blends real ideas about growing up with Reynolds's invented story. Sort each statement: is it A REAL IDEA (a true idea the novel explores) or GHOST'S STORY (something specific to the novel's fictional plot)? Reasoning earns the points.",
      buckets: [
        { id: "concept", label: "A real idea", short: "Idea" },
        { id: "story", label: "Ghost's story", short: "Story" }
      ],
      cards: [
        { text: "Running can become a way to outrun a painful past.", bucket: "concept", why: "This is a real idea about coping and escape that the novel explores." },
        { text: "A coach and a team can become a kind of family for a young person.", bucket: "concept", why: "The idea that chosen groups can act as family is a real theme, not a single plot event." },
        { text: "Choosing your next step, even after a mistake, is a real form of power.", bucket: "concept", why: "This is a general idea about growth and choice the novel develops." },
        { text: "A boy named Castle Cranshaw calls himself Ghost.", bucket: "story", why: "This specific character and nickname are Reynolds's fiction." },
        { text: "Ghost is invited to join the elite Defenders track team.", bucket: "story", why: "The specific team and invitation belong to the novel's plot." },
        { text: "Coach drives a taxi and first notices Ghost racing on the sideline.", bucket: "story", why: "This particular detail is part of Ghost's invented story." },
        { text: "One night Ghost's father fires a gun at him and his mother.", bucket: "story", why: "This specific traumatic event is part of the novel's plot." },
        { text: "Ghost steals a pair of expensive running shoes.", bucket: "story", why: "This specific choice is an invented event in Ghost's story." }
      ],
      followup: "Why might Reynolds tell big ideas about survival and belonging through one invented boy's story? What can Ghost's story show a reader that a list of ideas cannot?"
    },

    analysis: {
      mcq: [
        {
          q: "Ghost's speed is so meaningful in the novel because —",
          options: [
            "it grows directly out of the night he ran for his life, tying his gift to his deepest wound.",
            "it is the result of years of formal training.",
            "it lets him win money for his family.",
            "Coach gave it to him as a reward."
          ],
          why: "The novel roots Ghost's running in the trauma of the night he fled his father, so his greatest strength and his pain come from the same source."
        },
        {
          q: "Ghost steals the running shoes most clearly because —",
          options: [
            "his shame about his old gear and his impulsiveness push him into a choice he cannot fully explain.",
            "he needs them to survive the winter.",
            "Coach told him to take them.",
            "he plans to sell them for money."
          ],
          why: "The theft grows out of Ghost's shame and impulsiveness and his wish to belong, not out of simple need or anyone's instruction."
        },
        {
          q: "Coach matters most to Ghost's story because —",
          options: [
            "he offers a second chance and a steady, demanding presence, becoming a mentor and a kind of family.",
            "he only cares whether Ghost wins races.",
            "he ignores Ghost's problems off the track.",
            "he wants Ghost to leave the team."
          ],
          why: "Coach's belief, his own past, and his insistence on accountability make him the mentor who redirects Ghost's life."
        },
        {
          q: "When Coach confronts Ghost about the shoes, it most clearly shows that —",
          options: [
            "real support can mean accountability — facing what you did rather than running from it.",
            "adults always let kids off the hook.",
            "Ghost's running career is finished for good.",
            "the mistake does not matter to anyone."
          ],
          why: "Coach holds Ghost accountable without abandoning him, teaching that facing consequences is part of being cared for."
        },
        {
          q: "By the end of the novel, Ghost is learning that —",
          options: [
            "he cannot only run away from his past; he has to choose how to face it and take his next step.",
            "running fast solves every problem in his life.",
            "his past no longer affects him at all.",
            "the team was never really important to him."
          ],
          why: "Ghost's growth is measured by his willingness to stop running from his past and choose to face it, on and off the track."
        }
      ],
      short: [
        "Choose one moment when Coach or a teammate acts like family for Ghost. Explain what it gives him and why it matters.",
        "Reynolds shows Ghost making a serious mistake with the shoes. How does the novel use that mistake to show what Ghost is struggling with underneath?",
        "Explain the meaning of the night Ghost first ran. Why might Reynolds tie Ghost's gift for running to the most frightening moment of his life?"
      ],
      paragraph: "Write an evidence-based paragraph. Ghost is running both away from his past and toward a new team and future. How does that double motion — running away and running toward — shape who Ghost becomes across the novel? Support your claim with specific details.",
      aceReflection: "Articulate the novel's central idea about running, belonging, and facing your past in your own words. Connect two moments that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Then into Now",
      prompt: "Ghost shows a young person surviving a painful past by finding a team, a mentor, and a way to face what he has been running from. Choose one way that young people today find support or a fresh start after a hard experience. Explain the connection with evidence, the way Reynolds grounds big ideas in one boy's specific choices.",
      format: "A short evidence-based comparison connecting the novel's ideas to a present-day reality, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what running gives Ghost in the novel Ghost by Jason Reynolds. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Ghost by Jason Reynolds. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in Ghost by Jason Reynolds because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Ghost by Jason Reynolds: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect a theme from Ghost by Jason Reynolds to the present: [connection]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Ghost by Jason Reynolds for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to Ghost by Jason Reynolds. It supports close reading of Reynolds's central themes — running as escape and confrontation, mentorship and chosen family, mistakes and accountability, and Ghost's coming of age. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Ghost is copyrighted. This is an independent companion — students need their own lawful copy; the room links to and quotes no text.",
        "Mature content: the novel deals with a father's gun violence toward his family, poverty, and bullying. Preview carefully, prepare students, and follow local policy.",
        "Details here were checked against the novel (Castle 'Ghost' Cranshaw; the elite Defenders track team; Coach and his gold taxi; the night his father fired a gun at Ghost and his mother, when Ghost first ran; the sunflower seeds and the corner store; and the stolen running shoes). Confirm against your class edition, as pagination and framing vary.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 6–8 ELAR TEKS (19 TAC Ch. 110) for reading response, author's purpose and craft, and multiple-genre analysis, with cross-curricular ties to social-emotional themes of resilience and mentorship. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through clear visuals, plain directions, and device-local supports. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.6.1", "RL.7.1", "RL.8.1", "RL.6.2", "RL.7.2", "RL.8.2", "RL.6.3", "RL.7.3", "RL.8.3", "RL.6.6", "RH.6-8.1", "W.6-8.1", "W.6-8.9"],
      udl: "Multiple means of representation (visuals, plain directions, labeled reconstructions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
