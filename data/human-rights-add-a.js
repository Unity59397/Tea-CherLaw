/* Human rights (additions A): HRA, Articles 2/3/8, police powers, public order, obscenity, defamation, trespass. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "aston-cantlow-parochial-church-council-v-wallbank-2003", name: "Aston Cantlow and Wilmcote with Billesley Parochial Church Council v Wallbank", cite: "[2003] UKHL 37", year: 2003, court: "HL",
    area: "human-rights", topic: "hr-framework", sub: "hrf-s6", key: false,
    tags: ["Public authority", "Hybrid body", "Property"],
    gist: "A church council tries to make farmland owners pay for repairs to the chancel of a parish church, and they say that this breaches their human rights.",
    principle: "A body is a core public authority under s6 HRA only if it is a governmental body, and a parochial church council is not one.",
    facts: "The Wallbanks owned land that carried an ancient liability to pay for repairs to the chancel of a church. The parochial church council demanded about £95,000. They argued that this breached their rights under the HRA, which would only be possible if the council was a public authority.",
    held: "The House of Lords held that the council was not a core public authority. It was a church body that was not governmental, and it was enforcing a private property right. The claim under s6 failed.",
    significance: "A leading case on the meaning of public authority in s6 HRA, and on the difference between core and hybrid authorities.",
    links: ["a-v-secretary-of-state-for-the-home-department-2004"]
  },
  {
    id: "mccann-v-united-kingdom-1995", name: "McCann v United Kingdom", cite: "(1995) 21 EHRR 97", year: 1995, court: "ECtHR",
    area: "human-rights", topic: "hr-art2-3", sub: "a2-life", key: false,
    tags: ["Right to life", "State force", "Police"],
    gist: "Soldiers shoot dead three suspected IRA members in Gibraltar, who it turns out were unarmed and had no detonator, and their families complain to Strasbourg.",
    principle: "Article 2 allows lethal force only if it is absolutely necessary, and requires the operation to be planned and controlled so as to minimise the risk to life.",
    facts: "In 1988 the SAS shot three IRA suspects in Gibraltar who were thought to be planning a car bomb. The three were unarmed and there was no bomb in the car. The families said that the UK had breached Article 2.",
    held: "By 10 votes to 9 the European Court of Human Rights held that Article 2 was breached. The soldiers' actions were considered honest, but the planning and control of the operation had not given enough weight to protecting life.",
    significance: "A leading case on Article 2 and the duty to plan operations carefully. It also shows the court looking at the whole operation, and not only the moment of the shooting.",
    links: ["r-pretty-v-dpp-2001"]
  },
  {
    id: "ireland-v-united-kingdom-1978", name: "Ireland v United Kingdom", cite: "(1978) 2 EHRR 25", year: 1978, court: "ECtHR",
    area: "human-rights", topic: "hr-art2-3", sub: "a3-inhuman", key: false,
    tags: ["Inhuman treatment", "Interrogation", "Police"],
    gist: "Suspects detained in Northern Ireland are hooded, made to stand against a wall for hours, and deprived of sleep and food, and Ireland takes the UK to Strasbourg.",
    principle: "Interrogation techniques causing intense physical and mental suffering are inhuman and degrading treatment under Article 3, but torture requires a special stigma.",
    facts: "In 1971 the security forces used five techniques on fourteen detainees: wall-standing, hooding, continuous noise, deprivation of sleep, and deprivation of food and drink. Ireland complained that this was torture and breached Article 3.",
    held: "The Court held that the techniques were inhuman and degrading treatment, in breach of Article 3, but not torture, as they did not cause suffering of the particular intensity and cruelty that torture implies.",
    significance: "A key case on the distinction between torture and inhuman or degrading treatment. Article 3 is absolute and no justification is allowed.",
    links: []
  },
  {
    id: "christie-v-leachinsky-1947", name: "Christie v Leachinsky", cite: "[1947] AC 573", year: 1947, court: "HL",
    area: "human-rights", topic: "hr-police", sub: "pp-arrest", key: false,
    tags: ["Reasons for arrest", "Police", "Unlawful arrest"],
    gist: "Police arrest a man on suspicion of stealing, but they choose to say that it is under a Liverpool Act, because it lets them arrest without a warrant.",
    principle: "A person arrested must be told in simple language why he is being arrested, unless it is obvious or he makes that impossible by his conduct.",
    facts: "Leachinsky was arrested by police in Liverpool who suspected that he had stolen goods, but who arrested him under a local Act that allowed arrest without warrant for unlawful possession. He was not told of the real reason. The charge failed, and he sued for false imprisonment.",
    held: "The House of Lords held that the arrest was unlawful. A person has a right to know why he is being arrested, so that he can know what to answer and ask for release. Lord Simonds set out the principles.",
    significance: "The origin of the rule that reasons must be given for an arrest. This is now in s28 PACE 1984.",
    links: ["r-v-samuel-1988"]
  },
  {
    id: "r-v-samuel-1988", name: "R v Samuel", cite: "[1988] QB 615", year: 1988, court: "CA",
    area: "human-rights", topic: "hr-police", sub: "pp-detention", key: false,
    tags: ["Access to solicitor", "Police", "Exclusion of evidence"],
    gist: "A suspect questioned about burglaries and a robbery is refused access to a solicitor, and then makes a confession.",
    principle: "The right to legal advice in s58 PACE is fundamental, and it can be delayed only if the officer has a reasonable belief that one of the specified harms would happen.",
    facts: "Samuel was arrested on suspicion of burglary and was later questioned about a robbery. The police twice refused to let him see a solicitor, saying that it could alert accomplices. He then confessed to the robbery and was convicted.",
    held: "The Court of Appeal held that the denial of access was unlawful. The belief that a solicitor would tip off others was not reasonable, and the evidence obtained should have been excluded under s78 PACE.",
    significance: "A leading case on the right to a solicitor at the police station and on s78 PACE. The reasons for delay must be real and specific.",
    links: ["christie-v-leachinsky-1947"]
  },
  {
    id: "ohara-v-chief-constable-of-the-royal-ulster-constabulary-1997", name: "O'Hara v Chief Constable of the Royal Ulster Constabulary", cite: "[1997] AC 286", year: 1996, court: "HL",
    area: "human-rights", topic: "hr-police", sub: "pp-arrest", key: false,
    tags: ["Reasonable suspicion", "Police", "Terrorism"],
    gist: "A man is arrested on suspicion of terrorism, and the officer's suspicion comes from a briefing, not from anything he saw himself.",
    principle: "Reasonable suspicion for an arrest can be based on information from another officer, as long as the arresting officer genuinely suspects and the grounds are reasonable.",
    facts: "O'Hara was arrested in Northern Ireland under the Prevention of Terrorism Act. The officer had been told at a briefing that he was involved in a murder, but had no personal knowledge. O'Hara sued for false imprisonment and said there were no reasonable grounds.",
    held: "The House of Lords held that the arrest was lawful. The test has a subjective part, that the officer actually suspects, and an objective one, that a reasonable person would suspect. Information from a briefing can supply the grounds.",
    significance: "Shows what counts as reasonable suspicion for the purposes of arrest, and confirms that the officer may rely on information from colleagues.",
    links: ["christie-v-leachinsky-1947"]
  },
  {
    id: "gillan-and-quinton-v-united-kingdom-2010", name: "Gillan and Quinton v United Kingdom", cite: "(2010) 50 EHRR 45", year: 2010, court: "ECtHR",
    area: "human-rights", topic: "hr-police", sub: "pp-stop", key: false,
    tags: ["Stop and search", "Police", "Article 8", "Terrorism"],
    gist: "A student and a journalist are stopped and searched on their way to a protest at an arms fair, though police had no suspicion about them.",
    principle: "Stop and search powers without reasonable suspicion, with insufficient safeguards, are not \"in accordance with the law\" and breach Article 8.",
    facts: "Gillan, a student, and Quinton, a journalist, were stopped near the ExCeL centre in London, where an arms fair was held. Police used s44 of the Terrorism Act 2000, which allowed searches without reasonable suspicion in designated areas. They said this breached their rights.",
    held: "The European Court of Human Rights held that there was a breach of Article 8. The power was too wide and was not subject to enough legal safeguards against abuse, and so was arbitrary.",
    significance: "Led to the repeal of s44 and its replacement with a narrower power. It is a major case on stop and search and privacy.",
    links: ["malone-v-united-kingdom-1984"]
  },
  {
    id: "brutus-v-cozens-1972", name: "Brutus v Cozens", cite: "[1973] AC 854", year: 1972, court: "HL",
    area: "human-rights", topic: "hr-public-order", sub: "po-offences", key: false,
    tags: ["Insulting behaviour", "Protest", "Meaning of words"],
    gist: "An anti-apartheid protester blows a whistle and throws leaflets during a tennis match at Wimbledon, and is charged with insulting behaviour.",
    principle: "The word \"insulting\" in the Public Order Act has its ordinary meaning, and whether behaviour is insulting is a question of fact.",
    facts: "In 1970 Brutus ran onto court 2 at Wimbledon during a match with South African players and blew a whistle and threw leaflets. He was charged with using insulting behaviour under s5 Public Order Act 1936. The magistrates dismissed the case.",
    held: "The House of Lords held that the behaviour was not insulting. The word has its ordinary meaning and does not need to be given a special legal definition. Conduct can be annoying without being insulting.",
    significance: "A key authority on the meaning of insulting in public order law, and on the freedom to protest. The Public Order Act 1986 replaced s5 of the 1936 Act, and 'insulting' remains in the modern offences.",
    links: ["r-v-howell-1981", "redmond-bate-v-dpp-1999"]
  },
  {
    id: "dpp-v-jones-1999", name: "DPP v Jones", cite: "[1999] 2 AC 240", year: 1999, court: "HL",
    area: "human-rights", topic: "hr-trespass", sub: "tl-trespass", key: false,
    tags: ["Peaceful assembly", "Highway", "Protest"],
    gist: "Protesters gather on the roadside verge near Stonehenge despite a police ban on assemblies, and are charged with trespassory assembly.",
    principle: "The public's right to use the highway includes a right to assemble peacefully on it, if the assembly is reasonable and does not unreasonably obstruct.",
    facts: "The police banned assemblies of more than 20 people near Stonehenge. Jones and about 20 others stood on a roadside verge of the A344 in a peaceful protest, and were convicted of taking part in a trespassory assembly.",
    held: "By a majority, the House of Lords quashed the convictions. The highway can be used for any reasonable purpose that is not an obstruction, so the protest was not a trespass.",
    significance: "A leading case on how far the law protects peaceful protest on public land, and on the link between trespass and the right of assembly.",
    links: ["redmond-bate-v-dpp-1999", "bernstein-v-skyviews-and-general-ltd-1977"]
  },
  {
    id: "bernstein-v-skyviews-and-general-ltd-1977", name: "Bernstein of Leigh v Skyviews & General Ltd", cite: "[1978] QB 479", year: 1977, court: "HC",
    area: "human-rights", topic: "hr-trespass", sub: "tl-trespass", key: false,
    tags: ["Airspace", "Aerial photograph", "Property", "Privacy"],
    gist: "A company flies over a lord's country house to take an aerial photograph, and then offers to sell it to him.",
    principle: "A landowner's rights in the airspace are limited to the height that is necessary for the ordinary use and enjoyment of his land and the structures on it.",
    facts: "Skyviews took aerial photographs of houses and sold them to the owners. A plane flew over Lord Bernstein's country house and took a picture, which it offered to him for sale. He sued in trespass and said that his privacy was invaded.",
    held: "Griffiths J held that there was no trespass. The plane was at a height that did not affect his enjoyment of the land. There was also no general right to privacy against photography from the air.",
    significance: "Sets the limit on trespass to airspace. It also shows the absence of a right to privacy in English law at the time.",
    links: ["kaye-v-robertson-1990"]
  },
  {
    id: "r-v-hicklin-1868", name: "R v Hicklin", cite: "(1868) LR 3 QB 360", year: 1868, court: "Hist",
    area: "human-rights", topic: "hr-obscenity", sub: "ob-obscenity", key: false,
    tags: ["Deprave and corrupt", "Obscenity", "Historical"],
    gist: "A man sells an anti-Catholic pamphlet containing explicit descriptions, and the question is how to define obscenity.",
    principle: "The test of obscenity is whether the material tends to deprave and corrupt those whose minds are open to such immoral influences and into whose hands it may fall.",
    facts: "Henry Scott sold copies of a pamphlet called \"The Confessional Unmasked\", which was a Protestant attack on the Catholic Church but included graphic sexual passages. Magistrates ordered the copies destroyed, a recorder named Hicklin overturned this, and the case went to the Queen's Bench.",
    held: "Cockburn CJ held that the pamphlet was obscene. The test was whether the material had a tendency to deprave and corrupt those open to such influences, and the author's good motive made no difference.",
    significance: "The origin of the deprave and corrupt test, which was written into s1 Obscene Publications Act 1959.",
    links: ["handyside-v-united-kingdom-1976", "shaw-v-dpp-1961"]
  },
  {
    id: "berkoff-v-burchill-1996", name: "Berkoff v Burchill", cite: "[1996] 4 All ER 1008", year: 1996, court: "CA",
    area: "human-rights", topic: "hr-defamation", sub: "de-meaning", key: false,
    tags: ["Ridicule", "Media", "Defamatory meaning"],
    gist: "A journalist describes an actor as \"hideously ugly\" in a newspaper article, and he sues for libel.",
    principle: "Words that expose a person to ridicule can be defamatory, even if they do not damage his moral character or reputation for honesty.",
    facts: "Julie Burchill wrote in the Sunday Times that the actor and director Steven Berkoff was \"hideously ugly\" and mocked his appearance. Berkoff sued for libel. The defendants argued that it could not be defamatory.",
    held: "By a majority the Court of Appeal held that the words were capable of being defamatory. They could expose him to ridicule and could damage his reputation as an actor. The case was sent to a jury.",
    significance: "Shows that ridicule can be enough for defamation, extending the test in Sim v Stretch.",
    links: ["sim-v-stretch-1936"]
  }
);
