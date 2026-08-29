/* Contraband — The Scarlet Letter (Nathaniel Hawthorne, 1850). English source data.

   PUBLIC-DOMAIN WORK. This 1850 novel is in the public domain and freely
   available (Project Gutenberg / LibriVox). This room reproduces no long
   passages and invents no quotations; historical, biographical, and narrative
   details are paraphrased from well-established public knowledge and used only
   to build original, transformative analysis. Standards are good-faith Common
   Core alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "scarletletter",
  storageKey: "contraband.scarletletter.v1",

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
    "vocab.title": "Words for The Scarlet Letter",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Objects and Moments from The Scarlet Letter",
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
    "ctob.title": "The Scaffold and the Secret",
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
    "arcade.title": "Real History or Hester's Story?",
    "arcade.default": "Sort each statement by whether it is real history of Puritan New England or part of Hawthorne's fictional story of Hester Prynne.",
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
      title: "The Scarlet Letter",
      author: "Nathaniel Hawthorne",
      grades: "Grades 11–12",
      genre: "Fiction",
      time: "60–90 minutes",
      spoiler: "Minimal spoilers",
      rights: "public-domain",
      textAccess: "This 1850 novel is in the public domain. Students can read or listen to the full text for free through Project Gutenberg and LibriVox. This room paraphrases rather than reproducing long passages.",
      contentNote: "The novel centers on adultery and public shaming — the long-standing reason it has been challenged — along with hidden guilt, revenge, and the harsh punishments of Puritan society. Preview carefully, prepare students, and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/25344",
      audio: "https://librivox.org/the-scarlet-letter-by-nathaniel-hawthorne/",
      hero: "../images/scarletletter/hero.webp",
      heroAlt: "An instructional illustration evoking The Scarlet Letter — an embroidered red letter 'A' on plain dark cloth beside a sprig of wild rose, set against the weathered timbers of a Puritan scaffold under a gray New England sky (no real people depicted)."
    },
    hook: "Boston, in the early days of Puritan New England. A young woman named Hester Prynne is led from the town prison to a public scaffold, an infant in her arms and a scarlet letter 'A' embroidered on her chest. The community has judged her guilty of adultery and condemned her to wear that mark for the rest of her life. But Hester refuses to name the child's father — and the town does not know that he stands among them, or that her long-lost husband has just returned in disguise, bent on revenge. Hawthorne's novel traces how a single hidden sin works on four lives, and asks whether the deepest damage comes from the sin itself or from the secrecy and hypocrisy that surround it.",
    goals: [
      "Explain how the scarlet letter functions as a public punishment and how its meaning shifts over the course of the novel.",
      "Trace how hidden guilt, public shame, and the desire for revenge shape Hester, Dimmesdale, and Chillingworth in different ways.",
      "Analyze how Hawthorne exposes the hypocrisy of a community that punishes one sinner in public while others hide their own guilt.",
      "Distinguish the real history of Puritan New England and its moral codes from the specific, invented story of Hester Prynne, and carry the novel's questions into the present."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of Puritan New England as a community governed by strict religious law.",
        "Discuss: What does public shaming do to a person — and what does it reveal about the community that demands it?"
      ],
      during: [
        "Use the Relic Room to slow down and read key objects and moments closely.",
        "Track how each character responds to guilt and shame — concealing it, wearing it openly, or feeding on someone else's."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the novel's ideas to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Hawthorne suggests that the hidden sin can be more destructive than the one punished in public. Include one detail from the novel that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments in the novel that show the difference between open shame and hidden guilt (for example, Hester on the scaffold and Dimmesdale's secret suffering). Explain how comparing them changes your understanding of a character or a theme." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a question the novel raises to the present. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "Puritan", def: "A member of a strict Protestant group that sought to purify the church and built communities governed by rigid religious and moral law.", example: "The Boston townspeople who gather to judge and punish Hester.", nonexample: "A community that keeps religion entirely separate from its laws.", context: "The Puritan settlement holds public morality and religious duty above nearly everything else." },
      { term: "adultery", def: "A married person having a sexual relationship with someone who is not their spouse — the offense the letter 'A' marks.", example: "The sin the community accuses Hester of committing while her husband was absent.", nonexample: "A single, unmarried person choosing whom to court.", context: "The whole plot turns on an act of adultery that Hester will not fully explain." },
      { term: "scaffold", def: "A raised wooden platform where an accused person was displayed for public shaming or punishment.", example: "The place where Hester is forced to stand before the whole town holding her child.", nonexample: "A private room where a person confesses only to a friend.", context: "The scaffold scenes open, center, and close the novel, tying its key moments together." },
      { term: "penance", def: "An act of self-punishment or suffering meant to make up for a sin.", example: "Hester wearing the letter openly and living apart from the town for years.", nonexample: "Ignoring a wrong and pretending it never happened.", context: "The novel contrasts open penance with the hidden, private torment of a sin never confessed." },
      { term: "hypocrisy", def: "Claiming to hold moral or religious values while secretly acting against them.", example: "A respected community leader publicly condemning sin while hiding his own guilt.", nonexample: "A person whose public words and private actions honestly match.", context: "Hawthorne aims his sharpest criticism at the hypocrisy of a town that shames one sinner while others conceal their sins." },
      { term: "revenge", def: "Deliberately inflicting harm on someone in return for a wrong, real or imagined.", example: "Chillingworth devoting himself to secretly tormenting the man who wronged him.", nonexample: "Forgiving a wrong and choosing to move on from it.", context: "The pursuit of revenge slowly transforms Chillingworth into the novel's most corrupted figure." },
      { term: "stigma", def: "A mark of shame or disgrace that sets a person apart in the eyes of a community.", example: "The scarlet 'A' that brands Hester as an outcast wherever she goes.", nonexample: "A neutral badge that carries no judgment at all.", context: "The letter is a stigma, yet over time Hester's dignity begins to change what it means to others." },
      { term: "symbol", def: "An object or image that stands for a larger idea beyond itself.", example: "The letter 'A' standing at different times for 'adultery,' 'able,' or something else entirely.", nonexample: "A plain label that means only exactly what it says.", context: "Hawthorne makes the letter a shifting symbol whose meaning depends on who is reading it." },
      { term: "conscience", def: "The inner sense of right and wrong that judges one's own actions.", example: "The private guilt that eats at a character who cannot bring himself to confess.", nonexample: "Acting with no inner sense of guilt or responsibility at all.", context: "Much of the novel's drama unfolds inside the conscience of a man wrestling with a secret." }
    ],

    relic: {
      name: "Objects and Moments from The Scarlet Letter",
      intro: "Seven instructional reconstructions of objects and moments from The Scarlet Letter — teaching recreations, not artwork from any edition. Investigate what each is, its role in the novel, and what it reveals. (This room paraphrases and reproduces no long passages.)",
      artifacts: [
        {
          id: "letter", name: "The Scarlet Letter 'A'", image: "images/letter.webp",
          clues: ["Hester is sentenced to wear a red letter 'A' on her chest for the rest of her life.", "She embroiders it elaborately with gold thread, turning a mark of shame into something striking.", "Over the years, some townspeople begin to read the 'A' as standing for 'Able' rather than 'Adultery.'"],
          identify: { q: "What is this object?", choices: ["A red letter Hester is forced to wear as public punishment for adultery", "A badge of honor the town awards her", "A decoration she chose freely for fashion", "A religious symbol every Puritan wears"] },
          purpose: { q: "What is its role in the novel?", choices: ["It marks Hester as a public sinner while quietly becoming the novel's central shifting symbol", "It has no lasting importance to the story", "It is a gift from Dimmesdale", "It identifies her as a town leader"] },
          significance: { q: "What does the changing meaning of the letter reveal?", choices: ["That the meaning of shame can shift depending on how a person carries it and how others come to see them", "That symbols never change meaning", "That the town admired Hester from the start", "That the letter meant nothing to anyone"] },
          reveals: "How a public mark of shame can, over time, be reshaped by the dignity of the person forced to wear it.",
          conceals: "The private cost of wearing it — years of isolation the elaborate embroidery cannot soften.",
          ace: "Articulate what the letter is meant to do; connect its shifting meaning to Hester's character; extend it to how communities label people today."
        },
        {
          id: "scaffold", name: "The Public Scaffold", image: "images/scaffold.webp",
          clues: ["The novel opens with Hester led to a raised platform to be displayed before the whole town.", "She is made to stand there holding her infant while the community stares and judges.", "Later scaffold scenes bring the key characters back to the same spot, by day and by night."],
          identify: { q: "What does the scaffold represent?", choices: ["A place of public shaming where the town displays and judges the accused", "A stage for town celebrations", "A private confessional booth", "A marketplace stall"] },
          purpose: { q: "What is its role in the novel?", choices: ["It is the structural center where the town's judgment and the characters' secrets collide", "It appears only once and is forgotten", "It is where the town holds elections", "It has no connection to the plot"] },
          significance: { q: "Why does Hawthorne return to the scaffold three times?", choices: ["To contrast public exposure with hidden guilt and to tie the story's key moments together", "Because he ran out of other settings", "To show the town's kindness", "Because nothing important happens there"] },
          reveals: "How public shaming was built into the machinery of Puritan justice.",
          conceals: "That the person most deserving of the scaffold, in the town's own terms, stands hidden in the crowd below.",
          ace: "Articulate what the scaffold does to Hester; connect the public setting to the theme of exposure; extend it to public shaming in the present."
        },
        {
          id: "pearl", name: "Pearl, the Living Symbol", image: "images/pearl.webp",
          clues: ["Pearl is Hester's daughter, born of the sin the letter marks.", "She is wild, quick, and fascinated by her mother's scarlet letter from her earliest years.", "Townspeople whisper that there is something strange, almost otherworldly, about the child."],
          identify: { q: "Who is Pearl?", choices: ["Hester's daughter, who becomes a living emblem of the scarlet letter itself", "A neighbor's child Hester adopts", "A servant in the Governor's house", "A friend of Hester from England"] },
          purpose: { q: "What is her role in the novel?", choices: ["She embodies the consequence of the sin and constantly forces the truth toward the surface", "She is only a background character", "She works to clear Hester's name in court", "She has no effect on the other characters"] },
          significance: { q: "What does Pearl's fascination with the letter reveal?", choices: ["That the truth Hester carries cannot be hidden — the child keeps drawing attention to it", "That Pearl dislikes her mother", "That the letter is meaningless to the family", "That children never notice such things"] },
          reveals: "How the consequence of a hidden act can take on a life of its own and refuse to be ignored.",
          conceals: "The tenderness beneath Pearl's wildness, and the loneliness of a child set apart by her mother's stigma.",
          ace: "Articulate what Pearl represents; connect the child to the theme of consequence; extend it to how the effects of our choices can outlast the choices themselves."
        },
        {
          id: "herbs", name: "Chillingworth's Herbs and Medicines", image: "images/herbs.webp",
          clues: ["Roger Chillingworth arrives in disguise as a physician skilled with plants and remedies.", "He moves in close to the ailing minister, claiming to heal him.", "The dark herbs he gathers hint that his true aim is to prolong suffering, not to cure it."],
          identify: { q: "What do the herbs represent?", choices: ["Chillingworth's outward role as healer, masking his real work of revenge", "An honest attempt to cure the whole town", "A hobby with no meaning in the plot", "Medicine that finally saves Dimmesdale"] },
          purpose: { q: "What is their role in the novel?", choices: ["They let Chillingworth pose as a helper while secretly probing and torturing his victim", "They cure the minister's guilt", "They poison the entire community", "They have no bearing on the story"] },
          significance: { q: "What does the disguise of healing reveal about Chillingworth?", choices: ["That revenge can hide behind the appearance of care, corrupting the one who pursues it", "That he is a genuinely kind doctor", "That medicine is dangerous in itself", "That he wants to leave the town"] },
          reveals: "How the pursuit of revenge can wear the mask of help while it does its damage.",
          conceals: "How far Chillingworth's own soul is being deformed by the very hatred he feeds.",
          ace: "Articulate the gap between Chillingworth's role and his aim; connect the disguise to the theme of revenge; extend it to how harm can hide behind good intentions today."
        },
        {
          id: "hand", name: "The Minister's Hand Over His Heart", image: "images/hand.webp",
          clues: ["Throughout the novel, the respected minister presses his hand to his chest in moments of distress.", "He grows pale and sickly as a private guilt eats away at him.", "The town reads his suffering as holiness, never guessing its true cause."],
          identify: { q: "What does this repeated gesture signal?", choices: ["The hidden guilt secretly tormenting a man who will not confess", "A simple physical illness with no deeper meaning", "A habit of prayer the town taught him", "A sign that he is perfectly at peace"] },
          purpose: { q: "What is its role in the novel?", choices: ["It quietly reveals to the reader the secret the town cannot see", "It is a meaningless tic", "It shows he is physically strong", "It proves he feels no guilt at all"] },
          significance: { q: "What does the town's misreading of his suffering reveal?", choices: ["That hidden guilt can be mistaken for virtue, deepening the novel's theme of hypocrisy", "That the town understood him completely", "That guilt has no effect on the body", "That his suffering was faked"] },
          reveals: "How a concealed sin can destroy a person from the inside while the world sees only piety.",
          conceals: "The exact nature of what lies beneath the hand — which Hawthorne withholds until the end.",
          ace: "Articulate what the gesture tells the reader; connect hidden guilt to public reputation; extend it to how appearances can hide inner turmoil today."
        },
        {
          id: "forest", name: "The Forest Meeting", image: "images/forest.webp",
          clues: ["Hester and the minister meet away from the town, deep in the surrounding forest.", "Away from the community's eyes, they speak more freely than anywhere else in the novel.", "For a moment Hester casts off the letter and imagines a life of freedom beyond the settlement."],
          identify: { q: "What does the forest represent?", choices: ["A space outside the town's rules, where truth and freedom feel briefly possible", "A dangerous place with no meaning", "The town's official meeting hall", "A garden the Puritans carefully tend"] },
          purpose: { q: "What is its role in the novel?", choices: ["It offers the characters a rare place to speak honestly and imagine escape from their shame", "It is only scenery with no purpose", "It is where the town holds its trials", "It has no connection to the plot"] },
          significance: { q: "Why does Hester take off the letter in the forest?", choices: ["Because the forest, beyond the town's judgment, is the one place she can imagine being free of it", "Because she has forgotten her punishment", "Because the letter was never important", "Because the minister ordered her to"] },
          reveals: "How the wilderness stands, in the novel, for a freedom the rigid town cannot allow.",
          conceals: "That the freedom imagined in the forest cannot survive the return to the town and its demands.",
          ace: "Articulate what the forest offers the characters; connect the setting to the theme of freedom versus judgment; extend it to where people find honesty today."
        },
        {
          id: "wildrose", name: "The Wild Rose by the Prison Door", image: "images/wildrose.webp",
          clues: ["Beside the grim prison door, Hawthorne places a single wild rosebush in bloom.", "He offers it to the reader as a token of sweetness and mercy amid a dark tale.", "It stands in sharp contrast to the heavy prison and the harshness of the town."],
          identify: { q: "What does the wild rose represent?", choices: ["A note of mercy and natural beauty set against the town's harsh justice", "A flower with no meaning in the story", "A garden Hester plants later", "A symbol of the town's kindness to prisoners"] },
          purpose: { q: "What is its role in the novel?", choices: ["It signals early that the story will hold beauty and sympathy alongside punishment", "It is only decoration for the prison", "It marks where a character is buried", "It has nothing to do with the themes"] },
          significance: { q: "Why place beauty at the door of a prison?", choices: ["To suggest that mercy and humanity can survive even in a place built for punishment", "To show the prison was a pleasant place", "To prove nature is dangerous", "To hide the prison from view"] },
          reveals: "How Hawthorne plants sympathy for his 'sinner' from the very first pages.",
          conceals: "How much harshness the single rose must stand against in the pages that follow.",
          ace: "Articulate what the rose offers the reader; connect the image to the novel's mix of judgment and mercy; extend it to finding humanity in harsh systems today."
        }
      ]
    },

    ctob: {
      name: "The Scaffold and the Secret",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "In what year was The Scarlet Letter first published? Enter the year.",
          evidence: ["Hawthorne wrote it in the mid-nineteenth century, a decade before the Civil War.", "It appeared in the year eighteen fifty.", "It quickly became his most famous novel."],
          hints: ["It is in the 1850s decade's very start.", "It begins with 185…", "The year is 1850."],
          answer: "1850"
        },
        {
          type: "word",
          prompt: "What single letter is embroidered on Hester's chest as her punishment? (one letter)",
          evidence: ["The novel takes its title from this red letter.", "It is the first letter of the word 'adultery,' the sin she is accused of.", "Some townspeople later say it stands for 'Able.'"],
          hints: ["It is the first letter of the alphabet.", "It begins the word 'adultery.'", "The letter is A."],
          answer: "A"
        },
        {
          type: "mc",
          prompt: "Why does Hester refuse to name the father of her child?",
          options: [
            "To protect him from the same public shame and punishment she is forced to bear.",
            "Because she does not know who the father is.",
            "Because the town forbids her from speaking his name.",
            "Because she is planning to leave the child behind."
          ],
          hints: ["Think about whom her silence shields.", "Which option is about protecting someone else?"]
        },
        {
          type: "word",
          prompt: "What is the first name of Hester's young daughter, born of the sin the letter marks? (one word)",
          evidence: ["Her name suggests something precious bought at a great price.", "She is wild, quick, and fascinated by the scarlet letter.", "It is a word for a small, shining gem formed inside a shell."],
          hints: ["It is a gem that forms inside an oyster.", "It starts with 'Pear…'.", "The name is Pearl."],
          answer: "Pearl"
        },
        {
          type: "sequence",
          prompt: "Put these events of the novel in the order they happen, earliest first.",
          items: [
            "Hester is led from prison to the scaffold to be shamed before the town.",
            "Chillingworth arrives in disguise and moves close to the ailing minister.",
            "Hester and the minister meet in the forest and imagine a life of freedom.",
            "The minister at last reveals his secret before the townspeople."
          ],
          hints: ["The public shaming on the scaffold opens the story.", "The forest meeting comes before the final confession.", "The minister's revelation is the climax."]
        },
        {
          type: "mc",
          prompt: "What slowly happens to Chillingworth as he pursues his revenge?",
          options: [
            "He becomes twisted and corrupted, consumed by the hatred he feeds.",
            "He grows kinder and forgives the man who wronged him.",
            "He forgets his purpose and leaves the town in peace.",
            "He becomes the town's most beloved and trusted leader."
          ],
          hints: ["Think about what revenge does to the person who chases it.", "It is the opposite of healing or peace."]
        }
      ]
    },

    arcade: {
      name: "Real History or Hester's Story?",
      instruction: "The Scarlet Letter sets an invented story inside a real historical world. Sort each statement: is it REAL HISTORY (a true fact about Puritan New England and its moral codes) or HESTER'S STORY (something specific to Hawthorne's fictional plot)? Reasoning — not speed — earns the points.",
      buckets: [
        { id: "history", label: "Real history", short: "History" },
        { id: "story", label: "Hester's story", short: "Story" }
      ],
      cards: [
        { text: "Puritan communities in New England governed daily life by strict religious and moral law.", bucket: "history", why: "Puritan settlements really did enforce rigid moral and religious codes." },
        { text: "Public shaming, including forced displays and marks of disgrace, was used to punish offenders.", bucket: "history", why: "Public shaming punishments were a documented feature of colonial Puritan justice." },
        { text: "The Puritans blended church authority and civil authority in running their settlements.", bucket: "history", why: "The overlap of religious and civil power was real in Puritan New England." },
        { text: "Offenses against Puritan moral codes could bring harsh community punishment.", bucket: "history", why: "Harsh moral enforcement by the community was a real historical practice." },
        { text: "A woman named Hester Prynne is forced to wear an embroidered scarlet letter 'A.'", bucket: "story", why: "Hester and her specific punishment are Hawthorne's invention." },
        { text: "A disguised husband, Chillingworth, secretly torments the guilty minister.", bucket: "story", why: "Chillingworth and his revenge plot are part of the novel's fiction." },
        { text: "Hester's daughter Pearl becomes a living emblem of the scarlet letter.", bucket: "story", why: "Pearl and her symbolic role belong to Hawthorne's fictional plot." },
        { text: "The minister Dimmesdale hides his guilt until a final confession on the scaffold.", bucket: "story", why: "Dimmesdale's secret and his confession are invented events in the novel." }
      ],
      followup: "Why might Hawthorne set an invented story inside a real historical world? What can a story about Hester show a reader that a list of historical facts about the Puritans cannot?"
    },

    analysis: {
      mcq: [
        {
          q: "The meaning of the scarlet letter changes over the course of the novel because —",
          options: [
            "the way Hester carries her punishment slowly reshapes how the community reads the mark.",
            "the town officially changes the law about what it stands for.",
            "the embroidery on it fades and becomes unreadable.",
            "Hester eventually removes it for good."
          ],
          why: "The 'A' shifts from 'adultery' toward meanings like 'able' as Hester's dignity and service change how others see her — a central irony of the novel."
        },
        {
          q: "Hester refuses to name the child's father mainly because —",
          options: [
            "she chooses to bear the punishment alone rather than expose him to the same shame.",
            "she genuinely cannot remember who he is.",
            "the town has promised to reward her silence.",
            "she wants to punish the town by keeping a secret."
          ],
          why: "Hester's silence is an act of protection and strength, shielding the father even as she bears the public cost alone."
        },
        {
          q: "The minister's hidden guilt is more destructive than Hester's public shame because —",
          options: [
            "concealment lets the guilt fester inside him while the town mistakes his suffering for holiness.",
            "public shame is legally worse than private guilt.",
            "he feels no guilt at all and simply pretends.",
            "the town knows his secret and torments him openly."
          ],
          why: "Hawthorne contrasts open penance with hidden guilt: the secret sin, unconfessed, corrodes the minister from within while his reputation only rises."
        },
        {
          q: "As Chillingworth pursues his revenge, Hawthorne shows that —",
          options: [
            "the desire for revenge corrupts and deforms the person who gives himself to it.",
            "revenge finally brings Chillingworth peace and honor.",
            "revenge has no effect on the one who seeks it.",
            "Chillingworth was always the story's most virtuous figure."
          ],
          why: "Chillingworth's transformation into a twisted, obsessive figure dramatizes the novel's warning that revenge destroys the avenger."
        },
        {
          q: "Hawthorne's placement of the wild rose by the prison door mainly serves to —",
          options: [
            "signal early that the story will hold mercy and sympathy alongside harsh punishment.",
            "prove that the prison was a comfortable place.",
            "show that nature is a threat to the town.",
            "hide the prison from the reader's view."
          ],
          why: "The rose introduces a note of mercy and beauty at the outset, guiding readers to sympathize with Hester rather than only condemn her."
        }
      ],
      short: [
        "Choose one moment when Hester carries her punishment with dignity (for example, embroidering the letter, standing on the scaffold, or her years of service to the town). Explain what it costs her and why she does it anyway.",
        "Hawthorne presents Dimmesdale as both admired and secretly tormented. How does the novel use him to show what hidden guilt does to a person?",
        "Explain the meaning of the town's public shaming of Hester. Why might Hawthorne make the community's punishment so public while the minister's guilt stays hidden?"
      ],
      paragraph: "Write an evidence-based paragraph. Hawthorne suggests that concealment and hypocrisy can do more damage than the sin the town chooses to punish. Choose one way the novel shows this (Hester's open letter versus Dimmesdale's hidden guilt, or Chillingworth's disguised revenge) and explain how it supports his larger argument. Support your claim with specific details.",
      aceReflection: "Articulate the novel's central idea about sin, shame, and hypocrisy in your own words. Connect two moments that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Then into Now",
      prompt: "The Scarlet Letter shows a community that punishes one person's sin in public while other guilt stays hidden, and it asks what shame does to a human being. Choose one way that public shaming or judgment works today (for example, online). Explain the connection with evidence, the way Hawthorne grounds a large question about judgment in the specific story of one woman.",
      format: "A short evidence-based comparison connecting the novel's ideas to a present-day reality, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why hidden guilt might be more destructive than public shame in The Scarlet Letter. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Scarlet Letter. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in The Scarlet Letter because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Scarlet Letter: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect a theme from The Scarlet Letter to the present: [connection]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Scarlet Letter for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Hawthorne's 1850 novel through evidence-based tasks. It focuses on Hawthorne's central ideas — public shame versus hidden guilt, the hypocrisy of a community that punishes one sinner while others conceal their own, the corrosive power of revenge, and the shifting meaning of the scarlet letter as a symbol. The novel is public domain and freely available; this room paraphrases rather than reproducing long passages and keeps every response on the student's device.",
      reviewNotes: [
        "The Scarlet Letter (1850) is in the public domain and freely available through Project Gutenberg and LibriVox. Students can read or listen at no cost.",
        "Mature content: the novel centers on adultery and public shaming — the long-standing reason it has been challenged — along with hidden guilt, revenge, and harsh punishment. Preview carefully, prepare students, and follow local policy.",
        "Details here were paraphrased from well-established public knowledge of the novel (the Puritan Boston setting; Hester Prynne and the embroidered scarlet 'A'; her daughter Pearl; the scaffold scenes; the minister Arthur Dimmesdale's hidden guilt; the disguised Roger Chillingworth's revenge; the forest meeting; and the wild rose by the prison door). Confirm framing against your class edition, as pagination and introductions vary. (Needs review)",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English III / grade 11–12 ELAR TEKS (19 TAC Ch. 110) for reading response, author's purpose and craft, and analysis of fiction, symbolism, and theme, with cross-curricular ties to U.S. history (Puritan New England and its moral codes). Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through clear visuals, plain directions, and device-local supports. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.3", "RL.11-12.4", "RL.11-12.5", "RL.11-12.6", "RH.11-12.1", "RH.11-12.2", "RH.11-12.9", "W.11-12.1", "W.11-12.9"],
      udl: "Multiple means of representation (visuals, plain directions, labeled reconstructions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
