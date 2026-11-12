/* Criminal law: homicide defences, non-fatal offences, property offences, attempts (additions). */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "r-v-duffy-1949", name: "R v Duffy", cite: "[1949] 1 All ER 932", year: 1949, court: "CA",
    area: "criminal", topic: "cl-fatal", sub: "fo-loss-of-control", key: true,
    tags: ["Domestic abuse", "Sudden loss of control", "Superseded by statute"],
    gist: "After years of violence, a woman waits until her husband is asleep and kills him with a hatchet and a hammer.",
    principle: "Provocation required a sudden and temporary loss of self-control, which meant the defendant was for the moment not master of her mind.",
    facts: "Mrs Duffy suffered years of violence from her husband. After a violent night she left, then returned and attacked him with a hatchet while he slept. He died. She argued provocation.",
    held: "The Court of Criminal Appeal upheld her conviction for murder. Devlin J's direction was approved: provocation involves a sudden and temporary loss of self-control, and a delay or time for cooling off may suggest that it was not provocation.",
    significance: "The origin of the sudden loss of control rule, which was criticised for disadvantaging abused women. The rule was removed by the Coroners and Justice Act 2009.",
    links: ["r-v-ahluwalia-1992", "r-v-clinton-parker-and-evans-2012"]
  },
  {
    id: "dpp-v-camplin-1978", name: "DPP v Camplin", cite: "[1978] AC 705", year: 1978, court: "HL",
    area: "criminal", topic: "cl-fatal", sub: "fo-loss-of-control", key: true,
    tags: ["Children", "Reasonable man", "Superseded by statute"],
    gist: "A 15-year-old boy kills a man who sexually assaulted him and then laughed at him.",
    principle: "In provocation, the reasonable person has the age and sex of the defendant, but the same ordinary powers of self-control as a person of that age and sex.",
    facts: "Camplin, aged 15, was sexually assaulted by an older man, who then laughed at him. Camplin lost control and hit the man on the head with a heavy pan, killing him. He was convicted of murder.",
    held: "The House of Lords held that the jury should be told to consider what a reasonable boy of Camplin's age would have done. Characteristics such as age and sex can be taken into account in the objective test.",
    significance: "A key case in the development of the objective test for provocation. It was later developed in Morgan Smith and Holley, and replaced by the 2009 Act.",
    links: ["attorney-general-for-jersey-v-holley-2005"]
  },
  {
    id: "attorney-general-for-jersey-v-holley-2005", name: "Attorney-General for Jersey v Holley", cite: "[2005] UKPC 23", year: 2005, court: "PC",
    area: "criminal", topic: "cl-fatal", sub: "fo-loss-of-control", key: true,
    tags: ["Alcohol and drugs", "Reasonable person", "Superseded by statute"],
    gist: "A chronic alcoholic kills his partner with an axe after she tells him she has been seeing another man, and says that his drinking should count in judging his self-control.",
    principle: "The reasonable person in provocation is a person with the ordinary powers of self-control of a person of the defendant's age and sex, and the defendant's own characteristics do not lower that standard.",
    facts: "Holley was a chronic alcoholic who killed his partner with an axe after she said she had been seeing someone else. He said that his alcoholism should be considered when judging whether a reasonable person would have lost control.",
    held: "A nine-judge Privy Council held that the test of self-control is objective. Alcoholism could not be used to lower the standard. The Board said that the House of Lords in Smith (Morgan) had been wrong to allow it.",
    significance: "Resolved a conflict between decisions on the reasonable person test. It had a short life, as provocation was replaced by loss of control in 2009.",
    links: ["dpp-v-camplin-1978"]
  },
  {
    id: "r-v-constanza-1997", name: "R v Constanza", cite: "[1997] 2 Cr App R 492", year: 1997, court: "CA",
    area: "criminal", topic: "cl-nonfatal", sub: "nf-assault", key: false,
    tags: ["Stalking", "Words as assault", "Psychiatric injury"],
    gist: "A man who has become obsessed with a woman sends her hundreds of threatening letters and she develops clinical depression and anxiety.",
    principle: "Words alone can be an assault, and the fear need not be of immediate violence if there is a fear that violence may be used at some point, which could be imminent.",
    facts: "Constanza became obsessed with a female colleague. He followed her, sent hundreds of letters and made phone calls. His last letter led her to think he might attack her at any moment. She developed clinical depression and anxiety.",
    held: "The Court of Appeal upheld his conviction for assault occasioning ABH. A threat in a letter could be an assault, as the victim might fear violence at some time which was not excluded from being imminent. Psychiatric illness counted as ABH.",
    significance: "Extended assault to written threats. It was a step towards the Protection from Harassment Act 1997 and stalking offences.",
    links: ["r-v-ireland-and-r-v-burstow-1997"]
  },
  {
    id: "r-v-martin-1881", name: "R v Martin", cite: "(1881) 8 QBD 54", year: 1881, court: "DC",
    area: "criminal", topic: "cl-nonfatal", sub: "nf-gbh", key: false,
    tags: ["Inflict", "Indirect harm", "Theatre"],
    gist: "A man turns off the lights in a theatre stairway and puts an iron bar across the door, causing a panic in which people are hurt.",
    principle: "“Inflict” in s20 does not require a direct assault, and harm can be inflicted indirectly.",
    facts: "Martin, in order to cause a panic, put out the lights at a theatre stairway and placed an iron bar across the doors as the audience was leaving. There was a rush and several people were seriously injured.",
    held: "The Court for Crown Cases Reserved upheld his conviction under s20. A person who deliberately causes a panic in which people are injured can be said to have inflicted GBH, and there is no need for a direct application of force.",
    significance: "An early authority that “inflict” is not limited to direct violence. It was cited in Dica and Burstow.",
    links: ["r-v-savage-dpp-v-parmenter-1991"]
  },
  {
    id: "r-v-clarence-1888", name: "R v Clarence", cite: "(1888) 22 QBD 23", year: 1888, court: "DC",
    area: "criminal", topic: "cl-nonfatal", sub: "nf-gbh", key: false,
    tags: ["Overruled", "Medical", "Transmission of disease"],
    gist: "A husband who knows he has a sexual disease has intercourse with his wife without telling her, and she becomes infected.",
    principle: "A man who infects his wife through consensual intercourse cannot be convicted of inflicting GBH or assault. This was later overruled.",
    facts: "Clarence had gonorrhoea and had sex with his wife, who did not know of his condition. She was infected. He was convicted of assault occasioning ABH and of inflicting GBH.",
    held: "The Court for Crown Cases Reserved quashed his conviction by a majority. His wife had consented to intercourse, and there was no assault or infliction of harm in the sense of the 1861 Act.",
    significance: "Overruled by Dica (2004), so that the reckless transmission of a disease can be an offence under s20 in certain cases.",
    links: ["r-v-dica-2004"]
  },
  {
    id: "r-v-ghosh-1982", name: "R v Ghosh", cite: "[1982] QB 1053", year: 1982, court: "CA",
    area: "criminal", topic: "cl-property", sub: "pr-theft-mr", key: true,
    tags: ["Dishonesty", "Overruled", "Medical"],
    gist: "A surgeon claims payment for operations that he did not carry out and says that he thought what he was doing was honest.",
    principle: "Dishonesty was judged in two stages: whether the conduct was dishonest by ordinary standards, and whether the defendant realised it would be regarded that way. This test is no longer used.",
    facts: "Dr Ghosh was a consultant surgeon who claimed fees for an operation that he had not performed himself, and which was in fact done by another doctor. He said that he believed he was entitled to the money.",
    held: "The Court of Appeal approved a two-part test: first, was the conduct dishonest according to the standards of ordinary decent people? If so, did the defendant realise that ordinary people would regard it as dishonest?",
    significance: "The test for dishonesty for over 30 years. The second limb was rejected in Ivey (2017) and Barton and Booth (2020).",
    links: ["ivey-v-genting-casinos-uk-ltd-2017", "r-v-barton-and-booth-2020"]
  },
  {
    id: "r-v-morris-1983", name: "R v Morris; Anderton v Burnside", cite: "[1984] AC 320", year: 1983, court: "HL",
    area: "criminal", topic: "cl-property", sub: "pr-theft-ar", key: false,
    tags: ["Appropriation", "Price labels", "Supermarket"],
    gist: "Shoppers swap price labels on goods in a supermarket for cheaper ones, and are arrested at the till.",
    principle: "Appropriation involves an assumption of any of the owner's rights, so it does not need an assumption of all of them.",
    facts: "Morris switched the price labels on some goods in a supermarket for lower ones and took them to the checkout. In the joined case, Burnside did the same. They were stopped at the till and charged with theft.",
    held: "The House of Lords upheld the convictions. Switching the labels was an assumption of the right of the owner to fix the price, which was an appropriation. It did not require the assumption of all the rights of an owner.",
    significance: "Widened appropriation, and was followed by Gomez (1992). It confirmed that there is no need for the goods to be taken away.",
    links: ["r-v-gomez-1992", "lawrence-v-metropolitan-police-commissioner-1971"]
  },
  {
    id: "lawrence-v-metropolitan-police-commissioner-1971", name: "Lawrence v Metropolitan Police Commissioner", cite: "[1972] AC 626", year: 1971, court: "HL",
    area: "criminal", topic: "cl-property", sub: "pr-theft-ar", key: false,
    tags: ["Appropriation", "Consent", "Taxi fare"],
    gist: "A student who has just arrived from Italy holds out his wallet to a taxi driver, who takes £6 for a journey that cost about 50 pence.",
    principle: "Appropriation can occur even if the owner consents, so consent is no defence to theft.",
    facts: "An Italian student with little English showed a taxi driver an address. The fare was around 50 pence, but the driver took £6 from the open wallet that the student held out. The driver was convicted of theft.",
    held: "The House of Lords upheld the conviction. The Theft Act 1968 requires only that there be an appropriation. It does not have to be without the owner's consent, which is a matter that may be relevant to dishonesty.",
    significance: "The first stage of the debate that led to Gomez, which later confirmed that consent is irrelevant to appropriation.",
    links: ["r-v-gomez-1992"]
  },
  {
    id: "r-v-hall-1972", name: "R v Hall", cite: "[1973] 1 QB 126", year: 1972, court: "CA",
    area: "criminal", topic: "cl-property", sub: "pr-theft-ar", key: false,
    tags: ["Property belonging to another", "Travel agent", "Deposits"],
    gist: "A travel agent takes deposits from customers for flights, uses the money for the business and never books the flights.",
    principle: "Under s5(3) Theft Act 1968, money belongs to another only if the defendant is under an obligation to keep or deal with it in a specific way.",
    facts: "Hall ran a travel agency and took deposits for flights to the USA. The business ran into trouble, the money was paid into the firm's general account and used, and the flights were not provided. He was convicted of theft.",
    held: "The Court of Appeal quashed the convictions. The customers had no right to have the money kept separate or used for the flights, so there was no obligation within s5(3) and the money did not belong to anyone else once it was paid.",
    significance: "Shows the limits of s5(3). Compare it with Klineberg and Marsden (1999), where the money was held in a trust-like way.",
    links: []
  },
  {
    id: "r-v-marshall-1998", name: "R v Marshall, Coombes and Eren", cite: "[1998] 2 Cr App R 282", year: 1998, court: "CA",
    area: "criminal", topic: "cl-property", sub: "pr-theft-ar", key: false,
    tags: ["Appropriation", "Underground tickets", "Property"],
    gist: "Men collect unused or partly used travel tickets from passengers leaving the Underground and resell them to other passengers.",
    principle: "A person can appropriate property even though the owner has given it to someone else, if the person who passes it on has no authority to transfer ownership.",
    facts: "Marshall and others took used Underground tickets, which still had some time left on them, from passengers and sold them on. London Underground still owned the tickets. They were convicted of theft.",
    held: "The Court of Appeal upheld their convictions. The tickets still belonged to London Underground, and the defendants appropriated them by assuming the right to sell them. The passengers had no right to give the tickets away.",
    significance: "An application of Gomez and Hinks to a new situation. It shows that appropriation can be done even where possession came from the owner's customer.",
    links: ["r-v-gomez-1992"]
  },
  {
    id: "r-v-robinson-1977", name: "R v Robinson", cite: "[1977] Crim LR 173", year: 1977, court: "CA",
    area: "criminal", topic: "cl-property", sub: "pr-theft-mr", key: false,
    tags: ["Claim of right", "Dishonesty", "Robbery"],
    gist: "A man threatens someone with a knife to get back money that he says he is owed.",
    principle: "A defendant who honestly believes he has a legal right to the property is not dishonest, so he is not guilty of theft or robbery.",
    facts: "Robinson said that a man owed him money. He threatened the man with a knife to get it, and took money from him. He said that he honestly believed he was entitled to it. He was convicted of robbery.",
    held: "The Court of Appeal quashed the conviction. Under s2(1)(a) Theft Act 1968, a person is not dishonest if he appropriates property believing that he has a legal right to deprive. If there is no theft, there can be no robbery.",
    significance: "Authority on claim of right. A belief in a right to the property is enough, even if the defendant used force or a threat to get it.",
    links: ["r-v-ghosh-1982"]
  },
  {
    id: "r-v-walkington-1979", name: "R v Walkington", cite: "[1979] 1 WLR 1169", year: 1979, court: "CA",
    area: "criminal", topic: "cl-property", sub: "pr-burglary", key: false,
    tags: ["Trespasser", "Part of a building", "Shop"],
    gist: "A man walks into a department store and goes behind a counter, opens the till and finds nothing in it.",
    principle: "A person who enters part of a building that he knows he has no permission to enter is a trespasser, so a visitor to a shop can commit burglary.",
    facts: "Walkington went into a department store during opening hours. He went behind a counter area and opened a till, which was empty. He was convicted of burglary under s9(1)(a), as a trespasser who entered with intent to steal.",
    held: "The Court of Appeal upheld the conviction. The counter area was part of the building and the public were not allowed there, so he entered it as a trespasser when he went in, and he had the intention to steal at the time.",
    significance: "Shows how “part of a building” can make a customer into a burglar. It is a key case on trespass in burglary.",
    links: ["r-v-collins-1972", "r-v-jones-and-smith-1976"]
  },
  {
    id: "r-v-ryan-1996", name: "R v Ryan", cite: "(1996) 160 JP 85", year: 1996, court: "CA",
    area: "criminal", topic: "cl-property", sub: "pr-burglary", key: false,
    tags: ["Entry", "Trapped burglar"],
    gist: "A burglar gets stuck in a window of a house with only his head and one arm inside, and is found there by the occupier.",
    principle: "Entry for burglary does not need the whole body to go in, and it is a question of fact for the jury whether it was effective.",
    facts: "Ryan was found trapped in the window of a house. His head and right arm were inside, and the rest of his body was outside. He argued that he had not entered the building and could not be guilty of burglary.",
    held: "The Court of Appeal upheld the conviction. Entry only needs to be effective, which was a matter for the jury. His head and arm inside could be enough, as they could have been used to reach and take something.",
    significance: "Shows that partial entry can be enough. It follows the “effective entry” test from Collins and Brown.",
    links: ["r-v-collins-1972"]
  },
  {
    id: "r-v-campbell-1990", name: "R v Campbell", cite: "(1991) 93 Cr App R 350", year: 1990, court: "CA",
    area: "criminal", topic: "cl-attempts", sub: "at-ar", key: false,
    tags: ["More than merely preparatory", "Robbery", "Post office"],
    gist: "A man wearing sunglasses and a hat, with a threatening note and an imitation gun, is arrested a few yards from a post office.",
    principle: "An act is an attempt only if it is more than merely preparatory, so a person who has not yet started to commit the offence is not guilty.",
    facts: "Campbell was arrested outside a post office. He had an imitation gun, a threatening note and was wearing sunglasses and a hat. He said that he had decided not to rob the post office. He was charged with attempted robbery.",
    held: "The Court of Appeal quashed the conviction. He had not yet entered the post office or made a threat to anyone, so his actions were no more than preparatory and not an attempt.",
    significance: "A frequently used example of the line between preparation and attempt under s1 Criminal Attempts Act 1981. Contrast with Geddes (1996) and Tosti (1997).",
    links: ["r-v-gullefer-1987", "r-v-jones-1990"]
  }
);
