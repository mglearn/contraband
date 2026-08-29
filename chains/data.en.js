/* Contraband — Chains (Laurie Halse Anderson). English source data.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; plot, character, and chronology details were
   verified for accuracy and are used only to build original, transformative
   analysis. Standards are good-faith Common Core alignment; TEKS/ELPS flagged
   "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles. */
window.__ROOM__ = {
  id: "chains",
  storageKey: "contraband.chains.v1",

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
    "vocab.title": "Words for Chains",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Isabel's Keepsakes",
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
    "ctob.title": "The Locktons' House of Secrets",
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
    "arcade.title": "Real History or Isabel's Story?",
    "arcade.default": "Sort each statement by whether it is real history of the Revolutionary era or part of Anderson's fictional story of Isabel.",
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
      title: "Chains",
      author: "Laurie Halse Anderson",
      grades: "Grades 6–8",
      genre: "Historical fiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the novel (print, e-book, or licensed audiobook). This activity does not reproduce or replace the book.",
      copyright: "Chains is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "The novel portrays the violence of slavery, including a public branding, cruel physical punishment, and the forced separation of a family. Preview carefully, prepare students, and align with local policy.",
      disclaimer: "This activity is an independent educational companion to Chains by Laurie Halse Anderson. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY-NC 4.0. Chains, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "../images/chains/hero.webp",
      heroAlt: "An instructional illustration evoking Chains — a young enslaved girl standing at the window of a grand New York townhouse in 1776, the harbor and British warships beyond, a broken chain and a scrap of ink and paper on the sill."
    },
    hook: "New York City, 1776. As the American Revolution begins, thirteen-year-old Isabel and her little sister Ruth are sold away from the only home they knew — even though the woman who owned them had promised, in her will, to set them free. Bound now to the cruel Locktons, a Loyalist family in a city on the edge of war, Isabel discovers that her ability to move unseen through a divided city makes her useful to both sides. She must decide whether to risk everything spying for a cause that speaks of liberty while keeping people like her in chains.",
    goals: [
      "Explain the contradiction at the heart of the Revolution as Isabel experiences it: colonists demanding 'liberty' while holding people enslaved.",
      "Trace how Isabel weighs the Patriot and Loyalist sides by a single question — which one might actually free her and Ruth.",
      "Analyze how Isabel changes from someone who waits for others to grant her freedom to someone who acts to seize it.",
      "Distinguish the real history of slavery and Revolutionary-era New York from Anderson's specific, invented story of Isabel, and carry the novel's questions into the present."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of historical fiction set in Revolutionary-era New York.",
        "Discuss: What does the word 'liberty' mean if it is claimed by people who deny it to others?"
      ],
      during: [
        "Use the Keepsakes to slow down and read key objects and moments closely.",
        "Track how Isabel judges each side of the war by whether it might free her and Ruth."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the novel's history to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Isabel comes to distrust the Patriots' talk of 'liberty.' Include one detail from the novel that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments in the novel that show Isabel deciding whether to trust a promise (for example, Madam Lockton's word and a Patriot's word). Explain how comparing them changes your understanding of a character or a theme." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a question the novel raises to the present. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "slavery", def: "A system in which people are treated as property — bought, sold, and forced to work without freedom or pay.", example: "Isabel and Ruth being sold to the Locktons despite a promise of freedom.", nonexample: "A worker who is paid wages and can quit a job.", context: "Slavery existed across the colonies in 1776, in Northern cities like New York as well as in the South." },
      { term: "abolition", def: "The movement and effort to end slavery entirely.", example: "The small but growing group of colonists who argued that slavery should be outlawed.", nonexample: "A law that only limited how enslaved people could be treated, without freeing them.", context: "A few voices called for abolition during the Revolution, but most leaders who spoke of liberty did not extend it to enslaved people. (Needs review)" },
      { term: "Loyalist", def: "A colonist who stayed loyal to the British king and opposed the Revolution.", example: "The Lockton family, who secretly support the British.", nonexample: "A colonist who fights for independence from Britain.", context: "The Locktons are Loyalists in a New York that swings between British and Patriot control." },
      { term: "Patriot", def: "A colonist who supported independence from Britain and the Revolutionary cause.", example: "The rebels who tear down the king's statue and later occupy the city.", nonexample: "A colonist loyal to King George III.", context: "Isabel is drawn toward the Patriots, then troubled that their 'liberty' may not include her." },
      { term: "liberty", def: "The state of being free — able to act, move, and choose for oneself without being controlled by another.", example: "The freedom Isabel is owed by the will that promised to release her and Ruth.", nonexample: "Being owned by another person and forced to obey.", context: "Both sides of the war shout about liberty, but Isabel asks whose liberty they actually mean." },
      { term: "hypocrisy", def: "Claiming to hold values or beliefs that one's own actions contradict.", example: "Colonists demanding 'liberty' from Britain while keeping people enslaved.", nonexample: "Someone whose actions match the values they claim.", context: "The novel exposes the hypocrisy of a revolution for freedom led by enslavers." },
      { term: "spy", def: "A person who secretly gathers and passes information about one side to another during a conflict.", example: "Isabel carrying messages about the Locktons' Loyalist plotting to the rebels.", nonexample: "A soldier fighting openly on a battlefield in uniform.", context: "Because an enslaved girl is treated as invisible, Isabel can move as a spy where others cannot." },
      { term: "indomitable", def: "Impossible to defeat, subdue, or discourage; unbreakable in spirit.", example: "Isabel's refusal to be crushed even after she is branded and betrayed.", nonexample: "Someone who gives up the first time a plan fails.", context: "Anderson portrays Isabel's spirit as indomitable — bent by cruelty but never broken." },
      { term: "manumission", def: "The formal act of an owner freeing an enslaved person, often through a legal document such as a will.", example: "The clause in Miss Mary Finch's will that was supposed to free Isabel and Ruth.", nonexample: "A person being sold from one owner to another.", context: "The promised manumission is denied, and the missing or ignored document sets the whole plot in motion. (Needs review)" }
    ],

    relic: {
      name: "Isabel's Keepsakes",
      intro: "Seven instructional reconstructions of objects and moments from Chains — teaching recreations, not artwork from the book. Investigate what each is, its role in the novel, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "will", name: "The Promise in the Will", image: "images/will.webp",
          clues: ["The woman who owned Isabel and Ruth, Miss Mary Finch, stated that they were to be freed when she died.", "After her death, the man who takes charge refuses to honor it and cannot or will not produce the document.", "Isabel spends much of the novel trying to find proof that the promise of freedom is real."],
          identify: { q: "What is this document?", choices: ["A will that was supposed to free Isabel and Ruth upon their owner's death", "A bill of sale the Locktons wrote", "A letter from a British officer", "A page from Isabel's own diary"] },
          purpose: { q: "What is its role in the novel?", choices: ["Its denial is what wrongfully keeps the sisters enslaved and drives Isabel to seek proof", "It gives the Locktons legal ownership from the start", "It records the family's cotton harvest", "It has no effect on the plot"] },
          significance: { q: "What does the missing proof reveal?", choices: ["That freedom promised on paper means nothing without power to enforce it", "That Isabel imagined the promise", "That the law always protected enslaved people", "That the will was unimportant"] },
          reveals: "How a legal promise of freedom could be ignored when the enslaved had no power to enforce it.",
          conceals: "How much of Isabel's hope, and her risk-taking, rests on a document she cannot produce.",
          ace: "Articulate what the will promised; connect its denial to Isabel's choices; extend it to what makes a promise trustworthy today."
        },
        {
          id: "brand", name: "The Branded 'I'", image: "images/brand.webp",
          clues: ["After Isabel is caught defying Madam Lockton, she is punished with a brand burned onto her face.", "The letter 'I' is meant to mark her publicly as an 'Insolent' slave and a warning to others.", "Isabel later reclaims the mark, insisting the 'I' can stand for her own name and her own self."],
          identify: { q: "What is the branded 'I'?", choices: ["A letter burned into Isabel's cheek as a public punishment and warning", "A tattoo Isabel chose for herself", "A soldier's badge of rank", "A mark showing she had been freed"] },
          purpose: { q: "What is its role in the novel?", choices: ["It is meant to shame and control Isabel, yet becomes a symbol she refuses to let define her", "It has no meaning to the story", "It proves the Locktons are kind", "It is how the rebels recruit her"] },
          significance: { q: "What does Isabel's response to the brand reveal?", choices: ["That she turns a mark of cruelty into a claim on her own identity and worth", "That she accepts she is only property", "That the punishment ended her spirit", "That she blames herself for it"] },
          reveals: "How enslavers used bodily violence to terrify and mark human beings as property.",
          conceals: "The lasting pain behind Isabel's act of reclaiming the scar as her own.",
          ace: "Articulate what the brand was meant to do; connect it to Isabel's spirit; extend it to how people reclaim identity after harm."
        },
        {
          id: "statue", name: "The Toppled Statue of King George", image: "images/statue.webp",
          clues: ["When independence is declared, a crowd in New York tears down a gilded statue of King George III.", "The lead from the statue is melted to make bullets for the Patriot cause.", "Isabel watches the celebration of 'liberty' knowing it is not meant to include her."],
          identify: { q: "What is this event?", choices: ["A real Patriot crowd tearing down the king's statue after independence is declared", "A Loyalist parade in the king's honor", "A statue the Locktons built", "A fire that destroyed a church"] },
          purpose: { q: "What is its role in the novel?", choices: ["It marks the Revolution's arrival in the city and frames Isabel's doubt about 'liberty'", "It has nothing to do with the war", "It frees all enslaved people at once", "It is a scene Isabel invents"] },
          significance: { q: "What does Isabel's view of the scene reveal?", choices: ["That a celebration of freedom can exclude the very people who most need it", "That she fully trusts the Patriots", "That the statue mattered more than her freedom", "That the crowd intended to free her"] },
          reveals: "How the language and symbols of liberty filled New York in 1776.",
          conceals: "How hollow that liberty rang for the enslaved people watching from the edges.",
          ace: "Articulate what the toppled statue celebrated; connect it to Isabel's exclusion; extend it to symbols of freedom today."
        },
        {
          id: "pump", name: "The Water Pump and the Rebel Messages", image: "images/pump.webp",
          clues: ["Isabel is sent out on errands and to fetch water, moving through the city unnoticed.", "She overhears the Locktons' Loyalist plotting inside the house.", "She carries what she learns to the rebels, using her invisibility as an enslaved girl."],
          identify: { q: "What does the pump and Isabel's errands represent?", choices: ["The freedom of movement that lets Isabel gather and pass secret information", "A place Isabel goes to rest", "A gift from Madam Lockton", "A tool for farming"] },
          purpose: { q: "What is its role in the novel?", choices: ["It shows how Isabel becomes a spy because she is treated as invisible", "It shows Isabel is lazy", "It explains why the Locktons trust her fully", "It is only a background detail"] },
          significance: { q: "What does Isabel's spying reveal about her situation?", choices: ["That the same invisibility meant to erase her becomes a source of quiet power", "That spying was safe and easy", "That the rebels rewarded her fairly", "That she never took any real risk"] },
          reveals: "How being treated as invisible could, painfully, become a tool of resistance.",
          conceals: "The danger Isabel faces each time she carries a secret across a divided city.",
          ace: "Articulate how Isabel spies; connect her invisibility to her power; extend it to who goes unseen and unheard today."
        },
        {
          id: "ruth", name: "Ruth's Empty Place", image: "images/ruth.webp",
          clues: ["Ruth is Isabel's younger sister, who has seizures the Locktons treat with fear and cruelty.", "Madam Lockton sells Ruth away to be rid of her, without telling Isabel where.", "For much of the novel Isabel does not know if Ruth is alive or where she has been taken."],
          identify: { q: "What does Ruth's empty place represent?", choices: ["The forced separation of an enslaved family, tearing the sisters apart", "A room Ruth chose to leave", "A punishment Isabel earned", "A journey the sisters took together"] },
          purpose: { q: "What is its role in the novel?", choices: ["Losing Ruth is the wound that drives Isabel's choices and her longing for freedom", "It has little effect on Isabel", "It convinces Isabel to stay loyal to the Locktons", "It ends the war"] },
          significance: { q: "What does Ruth's fate reveal about slavery?", choices: ["That enslaved families could be broken apart at an owner's whim", "That owners always kept families together", "That Isabel did not care for Ruth", "That the sale was a kindness"] },
          reveals: "How the buying and selling of people routinely destroyed enslaved families.",
          conceals: "The depth of Isabel's grief and guilt at being unable to protect her sister.",
          ace: "Articulate what the sale of Ruth costs Isabel; connect it to the theme of family; extend it to what people risk to protect those they love."
        },
        {
          id: "curzon", name: "Curzon's Choice", image: "images/curzon.webp",
          clues: ["Curzon is an enslaved boy who urges Isabel to spy for the Patriots, believing they may bring freedom.", "He himself goes to fight, expecting the promise of freedom in return for service.", "By the end, Isabel risks a great deal to help the imprisoned, suffering Curzon."],
          identify: { q: "Who is Curzon?", choices: ["An enslaved boy who believes the Patriot cause might win him freedom", "A British officer who owns Isabel", "Madam Lockton's son", "A free merchant in the city"] },
          purpose: { q: "What is his role in the novel?", choices: ["He pushes Isabel toward the Patriots and becomes someone she chooses to save", "He is an enemy Isabel must defeat", "He runs the Lockton household", "He has no connection to Isabel"] },
          significance: { q: "What does Curzon's fate reveal?", choices: ["That the freedom promised to enslaved people for their service often went unhonored", "That the Patriots always kept their promises", "That Curzon never truly wanted freedom", "That war rewarded him richly"] },
          reveals: "How enslaved people gambled their lives on promises of freedom from both sides.",
          conceals: "How often those promises were broken, leaving people like Curzon betrayed.",
          ace: "Articulate what Curzon hopes for; connect his gamble to Isabel's; extend it to the cost of trusting a promise from the powerful."
        },
        {
          id: "river", name: "The Crossing to Freedom", image: "images/river.webp",
          clues: ["Denied freedom by both the Locktons and the rebels, Isabel stops waiting for others to grant it.", "She forges a pass and frees the wounded Curzon from prison.", "At the novel's end she rows across the river, choosing to seize her own liberty."],
          identify: { q: "What does the crossing represent?", choices: ["Isabel deciding to take her freedom instead of waiting to be given it", "A trip the Locktons send her on", "A battle Isabel joins as a soldier", "A return to Miss Finch's home"] },
          purpose: { q: "What is its role in the novel?", choices: ["It is the climax of Isabel's growth from waiting for freedom to seizing it", "It ends the Revolution", "It proves the will was real", "It is a dream Isabel has"] },
          significance: { q: "What does Isabel's decision reveal?", choices: ["That, betrayed by both sides, she claims her own freedom by her own hand", "That she gives up on freedom", "That she trusts the Locktons in the end", "That freedom was handed to her"] },
          reveals: "How self-emancipation — freeing oneself — was often the only path when neither side would grant liberty.",
          conceals: "How uncertain and dangerous the road ahead remains, even after the crossing.",
          ace: "Articulate what the crossing means for Isabel; connect it to her growth; extend it to what it means to claim a right no one will grant."
        }
      ]
    },

    ctob: {
      name: "The Locktons' House of Secrets",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "In what year does the main story begin? Enter the year.",
          evidence: ["The American Revolution is just breaking out.", "Independence is declared and a crowd tears down the king's statue in New York.", "The narration places the story's opening in the year seventeen seventy-six."],
          hints: ["It is the year the Declaration of Independence was signed.", "It begins with 17…", "The year is 1776."],
          answer: "1776"
        },
        {
          type: "word",
          prompt: "In what city is most of the novel set, a port that both sides fight to control? (one word)",
          evidence: ["It is a major harbor city with British warships offshore.", "A crowd there tears down a statue of the king when independence is declared.", "It is later occupied by the British after the rebels are driven out."],
          hints: ["It is the largest port city in the colonies.", "It starts with 'New…'.", "The city is New York."],
          answer: "York"
        },
        {
          type: "mc",
          prompt: "Why are Isabel and Ruth wrongfully kept enslaved instead of being freed?",
          options: [
            "Their late owner's will promised them freedom, but the man in charge refuses to honor it and the proof cannot be produced.",
            "They chose to remain with the Locktons.",
            "They were captured while fighting in the war.",
            "A judge freed them, but they returned on their own."
          ],
          hints: ["Think about the promise made in the will.", "Which option is about a document that is denied?"]
        },
        {
          type: "word",
          prompt: "What single letter is branded onto Isabel's face as a punishment and mark of 'insolence'? (one letter)",
          evidence: ["It is burned onto her cheek after she defies Madam Lockton.", "It is meant to label her as 'Insolent' and warn others.", "Isabel later insists it can stand for her own name instead."],
          hints: ["It is the first letter of the word 'Insolent'.", "It is also the first letter of a word meaning 'myself'.", "The letter is I."],
          answer: "I"
        },
        {
          type: "sequence",
          prompt: "Put these events of Isabel's story in the order they happen, earliest first.",
          items: [
            "Isabel and Ruth are sold to the Loyalist Lockton family despite the promise of freedom.",
            "Isabel begins spying, carrying the Locktons' secrets to the rebels.",
            "Madam Lockton sells Ruth away, and Isabel is branded on the face.",
            "Isabel frees Curzon from prison and rows across the river to claim her freedom."
          ],
          hints: ["The sale to the Locktons comes first.", "The branding and Ruth's sale come before the escape.", "The river crossing is the climax."]
        },
        {
          type: "mc",
          prompt: "By the end of the novel, how does Isabel finally gain her freedom?",
          options: [
            "She stops waiting to be freed, forges a pass, frees Curzon, and rows across the river to take her own liberty.",
            "Madam Lockton has a change of heart and releases her.",
            "The Patriots reward her spying by granting her freedom.",
            "A British officer buys her and sets her free."
          ],
          hints: ["Think about who finally acts to free Isabel.", "Both sides refuse her, so she does it herself."]
        }
      ]
    },

    arcade: {
      name: "Real History or Isabel's Story?",
      instruction: "Chains mixes documented history with Anderson's invented characters. Sort each statement: is it REAL HISTORY (a true fact about slavery and the Revolutionary era) or ISABEL'S STORY (something specific to the novel's fictional plot)? Reasoning earns the points.",
      buckets: [
        { id: "history", label: "Real history", short: "History" },
        { id: "story", label: "Isabel's story", short: "Story" }
      ],
      cards: [
        { text: "Slavery existed in the Northern colonies, including cities like New York, not only in the South.", bucket: "history", why: "Enslaved people lived and labored throughout the North in this era; this is documented history." },
        { text: "Many colonists demanded 'liberty' from Britain while continuing to hold people enslaved.", bucket: "history", why: "This contradiction between the rhetoric of liberty and the practice of slavery is real history." },
        { text: "In 1776, New York City became a battleground and was occupied by British forces.", bucket: "history", why: "The British took and occupied New York in 1776; this is documented military history." },
        { text: "Enslaved people weighed which side — Patriot or British — might actually offer them freedom.", bucket: "history", why: "Enslaved people really did assess both sides by the prospect of freedom; both made appeals during the war." },
        { text: "A girl named Isabel and her sister Ruth are sold to the Lockton family.", bucket: "story", why: "Isabel, Ruth, and the Locktons are Anderson's invented characters." },
        { text: "Madam Lockton has the letter 'I' branded onto Isabel's face as punishment.", bucket: "story", why: "This specific branding of the fictional Isabel belongs to the novel's plot." },
        { text: "Isabel spies on the Loyalist Locktons and carries their secrets to the rebels.", bucket: "story", why: "Isabel's spying is part of Anderson's fictional story." },
        { text: "Isabel frees Curzon and rows across the river to claim her own freedom.", bucket: "story", why: "This specific climax and the character Curzon are Anderson's invention." }
      ],
      followup: "Why might Anderson tell the real history of the Revolution through one invented enslaved girl? What can Isabel's story show a reader that a list of facts cannot?"
    },

    analysis: {
      mcq: [
        {
          q: "Isabel comes to distrust the Patriots' talk of 'liberty' because —",
          options: [
            "the people shouting for freedom from Britain still keep her and others enslaved.",
            "she does not understand what the word means.",
            "the Loyalists have promised to free her first.",
            "she prefers life under British rule for its own sake."
          ],
          why: "The novel's central irony is that a revolution proclaiming liberty is led and joined by people who deny it to the enslaved — which is exactly what Isabel sees."
        },
        {
          q: "Isabel becomes an effective spy mainly because —",
          options: [
            "she is treated as invisible, so she can move and listen where others cannot.",
            "she has special military training.",
            "the Locktons openly trust her with their secrets.",
            "the rebels give her a disguise and weapons."
          ],
          why: "Isabel's power comes from the very dehumanization that erases her: because an enslaved girl is overlooked, she can gather what no one thinks she hears."
        },
        {
          q: "The branded 'I' on Isabel's face most clearly comes to mean —",
          options: [
            "a mark of cruelty that Isabel reclaims as a symbol of her own name and self.",
            "proof that Isabel has been set free.",
            "a badge the rebels gave her for spying.",
            "a sign that Isabel accepts being property."
          ],
          why: "Meant to shame her as 'Insolent,' the brand is turned by Isabel into a claim on her own identity — 'I' for herself — a key act of her indomitable spirit."
        },
        {
          q: "When Madam Lockton sells Ruth away, the event most clearly shows that —",
          options: [
            "under slavery, a family could be torn apart at an owner's whim, with no recourse.",
            "Isabel no longer cared about her sister.",
            "the Locktons were trying to protect Ruth.",
            "the sale was required by the law of the will."
          ],
          why: "Ruth's forced sale dramatizes the routine destruction of enslaved families and becomes the wound that drives Isabel's later choices."
        },
        {
          q: "By the end of the novel, Isabel has come to understand that —",
          options: [
            "if neither side will grant her freedom, she must claim it by her own hand.",
            "the Patriots will surely free her if she waits.",
            "freedom is not worth the risk of escape.",
            "the Locktons will honor the will after all."
          ],
          why: "Betrayed by both the Locktons and the rebels, Isabel stops waiting to be freed and acts — forging a pass, freeing Curzon, and crossing the river."
        }
      ],
      short: [
        "Choose one moment when Isabel weighs whether to trust a promise (the will, a Patriot's word, or Curzon's urging). Explain what she stands to gain or lose and why she decides as she does.",
        "Anderson shows Isabel as both powerless and quietly powerful. How does the novel use her 'invisibility' as an enslaved girl to show both at once?",
        "Explain the meaning of Isabel reclaiming the branded 'I.' Why might Anderson turn a mark of cruelty into a claim of identity?"
      ],
      paragraph: "Write an evidence-based paragraph. The Revolution around Isabel is fought in the name of 'liberty,' yet Isabel remains enslaved. How does Anderson use Isabel's story to expose the hypocrisy at the heart of that liberty — and to redefine what real freedom means? Support your claim with specific details.",
      aceReflection: "Articulate the novel's central idea about liberty, hypocrisy, and claiming one's own freedom in your own words. Connect two moments that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Then into Now",
      prompt: "Chains shows a nation proclaiming liberty while denying it to enslaved people, and a girl who finally claims her freedom herself. Choose one way that people today point out a gap between a stated ideal and how it is actually practiced, or claim a right they have been denied. Explain the connection with evidence, the way Anderson grounds big history in one girl's specific choices.",
      format: "A short evidence-based comparison connecting the novel's history to a present-day reality, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Isabel distrusts the Patriots' talk of 'liberty' in Chains. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Chains. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in Chains because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Chains: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect a theme from Chains to the present: [connection]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Chains for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to Chains. It supports close reading of Anderson's central themes — the contradiction of a revolution for 'liberty' led by enslavers, the weighing of Patriot and Loyalist promises, invisibility as both dehumanization and power, and Isabel's growth toward self-emancipation. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Chains is copyrighted. This is an independent companion — students need their own lawful copy; the room links to and quotes no text.",
        "Mature content: the novel depicts the violence of slavery, including a public branding of the protagonist, cruel physical punishment, and the forced separation of a family. Preview carefully, prepare students, and follow local policy.",
        "Details here were checked against public knowledge of the novel (the 1776 New York setting; Isabel and Ruth sold to the Loyalist Locktons; the denied promise of freedom in Miss Finch's will; the toppling of King George's statue; Isabel's spying; the branding of the letter 'I'; the sale of Ruth; Curzon; and Isabel's escape across the river). Confirm against your class edition, as pagination and framing vary.",
        "Historical framing (Northern slavery, both sides' wartime appeals to enslaved people, and specifics of abolition and manumission) is aligned in good faith but marked 'Needs review'; confirm against your U.S. history materials.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 6–8 ELAR TEKS (19 TAC Ch. 110) for reading response, author's purpose and craft, and multiple-genre analysis, with cross-curricular ties to U.S. history (the American Revolution, slavery in the colonies, and Revolutionary-era New York). Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through clear visuals, plain directions, and device-local supports. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.6.1", "RL.7.1", "RL.8.1", "RL.6.2", "RL.7.2", "RL.8.2", "RL.6.3", "RL.7.3", "RL.8.3", "RL.6.6", "RH.6-8.1", "W.6-8.1", "W.6-8.9"],
      udl: "Multiple means of representation (visuals, plain directions, labeled reconstructions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
