/* Human rights: privacy, confidence, obscenity, defamation, harassment. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "kaye-v-robertson-1990", name: "Kaye v Robertson", cite: "[1991] FSR 62", year: 1990, court: "CA",
    area: "human-rights", topic: "hr-art8", sub: "a8-privacy", key: false,
    tags: ["No right to privacy", "Malicious falsehood", "Media"],
    gist: "Journalists walk into the hospital room of a seriously injured actor, take photographs and publish a story about an “interview” he was in no state to give.",
    principle: "English law had no general right to privacy, so the actor's claim had to be brought through other torts.",
    facts: "Gorden Kaye, a well-known actor, suffered serious head injuries in a storm. Journalists from the Sunday Sport got into his hospital room, photographed him, and claimed to have an interview in which he had agreed to publication. He was in no fit state to consent.",
    held: "The Court of Appeal held that English law had no right to privacy. It granted an injunction only on the basis of malicious falsehood, as the paper wrongly suggested that he had agreed to the interview. Leggatt LJ called for Parliament to act.",
    significance: "Showed the gap in English law before the Human Rights Act. It was later filled by the development of misuse of private information, as in Campbell v MGN.",
    links: ["campbell-v-mgn-ltd-2004"]
  },
  {
    id: "campbell-v-mgn-ltd-2004", name: "Campbell v MGN Ltd", cite: "[2004] UKHL 22", year: 2004, court: "HL",
    area: "human-rights", topic: "hr-confidence", sub: "cf-confidence", key: true,
    tags: ["Misuse of private information", "Media", "Alcohol and drugs", "Dissent"],
    gist: "A supermodel who had publicly said she did not take drugs is photographed leaving a meeting for recovering addicts, and a newspaper publishes the details.",
    principle: "Private information is protected under Article 8 if there is a reasonable expectation of privacy, and the court then balances Articles 8 and 10.",
    facts: "Naomi Campbell publicly denied using drugs. The Mirror published a story that she was attending Narcotics Anonymous, with details of the treatment and photographs of her leaving a meeting. She sued for breach of confidence and invasion of privacy.",
    held: "The House of Lords held by 3 to 2 that the paper had breached her privacy. It was legitimate to correct the false claim that she did not use drugs, but not to publish the details of her therapy or photos of her at a meeting.",
    significance: "A leading case on the tort of misuse of private information. It shows how courts balance Articles 8 and 10 using the HRA.",
    links: ["kaye-v-robertson-1990"]
  },
  {
    id: "handyside-v-united-kingdom-1976", name: "Handyside v United Kingdom", cite: "(1976) 1 EHRR 737", year: 1976, court: "ECtHR",
    area: "human-rights", topic: "hr-obscenity", sub: "ob-obscenity", key: true,
    tags: ["Margin of appreciation", "Protection of morals", "Article 10"],
    gist: "A publisher is convicted of obscenity for a schoolchildren's handbook that has a section on sex, and argues that this breaches his freedom of expression.",
    principle: "Article 10 protects ideas that offend, shock or disturb, but states have a margin of appreciation to restrict expression to protect morals.",
    facts: "Richard Handyside published The Little Red Schoolbook, a guide for schoolchildren which had a section on sex. He was convicted under the Obscene Publications Acts and the copies were seized and destroyed. He claimed this violated Article 10.",
    held: "The European Court of Human Rights held there was no violation. The restrictions were prescribed by law and aimed to protect morals. The domestic authorities were better placed to judge what was necessary, and so the UK acted within its margin of appreciation.",
    significance: "The origin of the margin of appreciation in Article 10 cases. Often quoted: freedom of expression is a foundation of a democratic society.",
    links: []
  },
  {
    id: "sim-v-stretch-1936", name: "Sim v Stretch", cite: "(1936) 52 TLR 669", year: 1936, court: "HL",
    area: "human-rights", topic: "hr-defamation", sub: "de-meaning", key: true,
    tags: ["Defamatory meaning", "Right-thinking members of society"],
    gist: "An employer sends a telegram to a former employer about a maid who had moved, and the former employer says it suggests he is short of money.",
    principle: "A statement is defamatory if it tends to lower the claimant in the estimation of right-thinking members of society generally.",
    facts: "Mr Sim's maid left to work for Mr Stretch. Stretch sent Sim a telegram about her belongings and money that Sim had borrowed. Sim said that it implied he was a person who borrowed money from a servant, and sued for libel.",
    held: "The House of Lords held that the words were not defamatory. Lord Atkin gave the test of whether the words would tend to lower the claimant in the estimation of right-thinking members of society generally. An ordinary person would not think less of Sim.",
    significance: "The standard test of what is defamatory, which is also used in cases such as Berkoff v Burchill. It is an objective test based on the ordinary reasonable reader.",
    links: ["lachaux-v-independent-print-ltd-2019"]
  },
  {
    id: "lachaux-v-independent-print-ltd-2019", name: "Lachaux v Independent Print Ltd", cite: "[2019] UKSC 27", year: 2019, court: "UKSC",
    area: "human-rights", topic: "hr-defamation", sub: "de-meaning", key: true,
    tags: ["Serious harm", "Defamation Act 2013", "Media"],
    gist: "A man says newspaper articles accusing him of abusing his wife harmed his reputation, and the question is how serious that harm must be.",
    principle: "Under s1 Defamation Act 2013, serious harm to reputation must be shown by the facts, not just by the tendency of the words to cause it.",
    facts: "Several newspapers published articles about Mr Lachaux, who was in a dispute over the custody of his child with his wife, accusing him of abusing her. He sued the publishers for defamation. They argued that he could not show the serious harm that the 2013 Act required.",
    held: "The Supreme Court held that s1 requires actual serious harm, which has to be proved by looking at the real impact of the statement and not only at its meaning. It held that Lachaux had met the test.",
    significance: "The leading case on the “serious harm” threshold. It makes it harder to bring trivial claims, and so supports freedom of expression.",
    links: ["sim-v-stretch-1936", "reynolds-v-times-newspapers-ltd-1999"]
  },
  {
    id: "reynolds-v-times-newspapers-ltd-1999", name: "Reynolds v Times Newspapers Ltd", cite: "[2001] 2 AC 127", year: 1999, court: "HL",
    area: "human-rights", topic: "hr-defamation", sub: "de-defences", key: true,
    tags: ["Qualified privilege", "Responsible journalism", "Superseded by statute"],
    gist: "A newspaper accuses a former Irish prime minister of misleading parliament, but fails to include his explanation, and is sued for libel.",
    principle: "A newspaper may have a defence of qualified privilege for publishing matters of public concern if it acted responsibly, judged on a list of factors.",
    facts: "The Sunday Times published an article about Albert Reynolds, the former Taoiseach, suggesting that he had lied to the Irish parliament. The article did not give his own explanation, which he had given in the Dáil. He sued for libel.",
    held: "The House of Lords refused to recognise a general privilege for political speech. However, it said that a newspaper could rely on qualified privilege if the publication was responsible, using ten non-exclusive factors. The paper failed because it did not include his side.",
    significance: "Was replaced by the statutory public interest defence in s4 Defamation Act 2013, but its factors still guide the courts.",
    links: ["lachaux-v-independent-print-ltd-2019"]
  },
  {
    id: "majrowski-v-guys-and-st-thomas-nhs-trust-2006", name: "Majrowski v Guy's and St Thomas' NHS Trust", cite: "[2006] UKHL 34", year: 2006, court: "HL",
    area: "human-rights", topic: "hr-harassment", sub: "ha-harassment", key: false,
    tags: ["Protection from Harassment Act 1997", "Employment", "Vicarious liability"],
    gist: "A hospital employee says his manager bullied him, and he sues the employer for harassment under a law designed for stalkers.",
    principle: "An employer can be vicariously liable under the Protection from Harassment Act 1997 for harassment by an employee in the course of employment.",
    facts: "Majrowski worked in a hospital and said that his manager had bullied and humiliated him over a long period, with unfair criticism and intimidating behaviour. He sued the NHS trust under the 1997 Act. The trust argued that it could not be liable for its employee's harassment.",
    held: "The House of Lords held that the employer could be vicariously liable. The Act creates a statutory tort and the normal principles of vicarious liability apply. The conduct must be oppressive and unacceptable, not just unattractive or unreasonable.",
    significance: "Extended harassment claims to workplace bullying. The case also set the threshold that harassment must be of a seriousness that can support a criminal sanction.",
    links: []
  }
);
