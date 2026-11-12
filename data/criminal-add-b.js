/* Criminal law (additions B): burden of proof, omissions, causation, intention, strict liability, homicide. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "r-v-lambert-2001", name: "R v Lambert", cite: "[2001] UKHL 37", year: 2001, court: "HL",
    area: "criminal", topic: "cl-principles", sub: "cl-burden", key: false,
    tags: ["Reverse burden", "Human Rights Act 1998", "Drugs"],
    gist: "A man is found with a bag containing drugs and says he did not know what was in it, but a statute seems to make him prove that.",
    principle: "A statute that puts a legal burden of proof on the defendant may breach the presumption of innocence in Article 6(2) and can be read as only an evidential burden.",
    facts: "Lambert was arrested with a bag containing cocaine. He said he did not know what was in it. Section 28 of the Misuse of Drugs Act 1971 seemed to require him to prove that on the balance of probabilities.",
    held: "The House of Lords said that, to fit Article 6(2), s28 should be read under s3 of the Human Rights Act as putting only an evidential burden on the defendant. His conviction stood because the Human Rights Act was not in force at his trial.",
    significance: "Shows how the Human Rights Act affects reverse burdens, which are allowed only if they are proportionate. Compare Sheldrake v DPP, where the Lords upheld a legal burden. Woolmington is the starting point.",
    links: ["woolmington-v-dpp-1935", "sheldrake-v-dpp-2004"]
  },
  {
    id: "sheldrake-v-dpp-2004", name: "Sheldrake v DPP", cite: "[2004] UKHL 43", year: 2004, court: "HL",
    area: "criminal", topic: "cl-principles", sub: "cl-burden", key: false,
    tags: ["Reverse burden", "Human Rights Act 1998", "Motoring"],
    gist: "A drunk man found in a parked car says he did not mean to drive, but the law makes him prove it.",
    principle: "A reverse legal burden does not breach Article 6(2) if it is a reasonable and proportionate response to a real problem.",
    facts: "Sheldrake was found drunk in charge of a car. Section 5(2) of the Road Traffic Act 1988 gave a defence if there was no likelihood of his driving while over the limit, but the legal burden of proving this was on him. ",
    held: "The House of Lords held that the burden in s5(2) was justified and proportionate, so Article 6(2) was not breached.",
    significance: "A balancing case on reverse burdens, to set against Lambert. The courts look at the aim, how serious the offence is and how hard the burden is for the defendant to meet. Shows that the presumption of innocence is not absolute.",
    links: ["r-v-lambert-2001", "woolmington-v-dpp-1935"]
  },
  {
    id: "r-v-pittwood-1902", name: "R v Pittwood", cite: "(1902) 19 TLR 37", year: 1902, court: "HC",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-omissions", key: false,
    tags: ["Omissions", "Contractual duty", "Manslaughter"],
    gist: "A railway crossing keeper leaves the gate open when he goes to lunch, and a cart is hit by a train.",
    principle: "A duty to act, which makes an omission criminal, can arise from a contract.",
    facts: "Pittwood was employed by a railway company to keep a level crossing gate closed when trains were coming. He went to lunch and left the gate open. A cart crossed, a train hit it, and a man was killed.",
    held: "Pittwood was guilty of manslaughter. His contract of employment gave him a duty to close the gate, and the duty extended to the public who used the crossing. His failure to act was enough for liability.",
    significance: "The standard example of a contractual duty in the law on omissions. Compare Stone and Dobinson (assumption of care), Miller (creating a danger), Instan (relationship) and Dytham (public office).",
    links: ["r-v-stone-and-dobinson-1977", "r-v-miller-1983", "r-v-instan-1893", "r-v-dytham-1979"]
  },
  {
    id: "r-v-gibbins-and-proctor-1918", name: "R v Gibbins and Proctor", cite: "(1918) 13 Cr App R 134", year: 1918, court: "CA",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-omissions", key: false,
    tags: ["Omissions", "Relationship duty", "Children", "Murder"],
    gist: "A father and the woman living with him fail to feed his young daughter, who starves to death.",
    principle: "A parent owes a duty to care for a child, and another person who takes on the care of the child and is given money for it can also owe a duty.",
    facts: "Gibbins lived with Proctor and his young daughter. He gave Proctor money to buy food for the household. The child was not given enough to eat and died of starvation.",
    held: "Both were guilty of murder. Gibbins owed a duty as the child's father. Proctor owed a duty because she had taken responsibility for the child and been given money to feed her, so her failure to provide food was a breach.",
    significance: "A clear example of both a relationship duty (parent and child) and a duty arising from the assumption of responsibility by a person who is not a relative. Compare Instan and Stone and Dobinson.",
    links: ["r-v-instan-1893", "r-v-stone-and-dobinson-1977", "r-v-pittwood-1902"]
  },
  {
    id: "r-v-roberts-1971", name: "R v Roberts", cite: "(1972) 56 Cr App R 95", year: 1971, court: "CA",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-novus", key: false,
    tags: ["Novus actus interveniens", "Foreseeability", "Victim's reaction"],
    gist: "A girl jumps from a moving car to escape a driver's sexual advances and is injured.",
    principle: "A victim's reaction to the defendant's conduct does not break the chain of causation if it was reasonably foreseeable and not so daft as to be unexpected.",
    facts: "Roberts gave a girl a lift in his car at night. He made sexual advances and began to take off her coat. She jumped from the moving car and was injured.",
    held: "Roberts's conviction for assault occasioning actual bodily harm stood. The test is whether the victim's act was the natural result of what the defendant said or did, in the sense that it could reasonably have been foreseen. It was not so daft as to break the chain.",
    significance: "The origin of the 'reasonable foreseeability' approach to a victim's reaction in escape cases. It was followed in Williams and Davis, where the victim jumped from a car. Compare the thin skull rule in Blaue.",
    links: ["r-v-williams-and-davis-1992", "r-v-blaue-1975", "r-v-kennedy-no-2-2007"]
  },
  {
    id: "r-v-hughes-2013", name: "R v Hughes", cite: "[2013] UKSC 56", year: 2013, court: "UKSC",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-legal", key: false,
    tags: ["Motoring", "Legal causation", "Driving offences"],
    gist: "A careful but unlicensed and uninsured driver is hit by a drug-impaired driver who drifts onto the wrong side of the road, and the other driver dies.",
    principle: "To cause death while driving without a licence or insurance, there must be some fault in the defendant's driving, beyond the lack of licence or insurance, that contributed more than minimally to the death.",
    facts: "Hughes was driving a van without a proper licence or insurance. A car driven by a man who had taken heroin drifted onto the wrong side of the road and crashed into him. The other driver died. There was no evidence that Hughes had driven badly.",
    held: "The Supreme Court quashed his conviction under s3ZB of the Road Traffic Act 1988. His driving must have caused the death, and merely being on the road was not enough. There must be some act or omission in the driving that contributed in a more than minimal way.",
    significance: "A modern case on causation in driving offences. It shows that a defendant's unlawful status (no licence, no insurance) does not make him the cause of a death without fault in the driving itself. Compare Kennedy (No 2) on a free and informed act breaking the chain.",
    links: ["r-v-kennedy-no-2-2007", "r-v-pagett-1983"]
  },
  {
    id: "r-v-matthews-and-alleyne-2003", name: "R v Matthews and Alleyne", cite: "[2003] EWCA Crim 192", year: 2003, court: "CA",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-intention", key: false,
    tags: ["Oblique intent", "Virtual certainty", "Murder"],
    gist: "Two men throw a young man who cannot swim off a bridge into a river, and he drowns.",
    principle: "Foresight that death or serious harm was a virtual certainty is not the same as intention, but it is evidence from which a jury may find intention.",
    facts: "After assaulting a victim, Matthews and Alleyne threw him from a bridge into a river, knowing he could not swim. He drowned. They said they had not intended him to die.",
    held: "The Court of Appeal upheld the murder convictions. Lord Woolf CJ said that Woollin did not turn virtual certainty into a rule of law. It is a rule of evidence, so a jury may find intention if death was a virtual certainty and the defendant knew it.",
    significance: "Confirms that the Woollin direction is a guide to evidence and not a definition of intention. The jury 'may' find intention, but it does not have to. Compare Moloney, Hancock and Shankland, and Nedrick.",
    links: ["r-v-woollin-1998", "r-v-nedrick-1986", "r-v-moloney-1985"]
  },
  {
    id: "r-v-le-brun-1991", name: "R v Le Brun", cite: "[1992] QB 61", year: 1991, court: "CA",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-coincidence", key: false,
    tags: ["Series of acts", "Manslaughter", "Coincidence"],
    gist: "A man knocks his wife unconscious in a row, then drops her while trying to carry her home, and she dies.",
    principle: "If the defendant's unlawful act and the act that causes death are part of one sequence of events, the mens rea for the first act can be matched with the death, even if the later act is not itself unlawful.",
    facts: "After an argument in the street, Le Brun punched his wife on the jaw and knocked her out. He then tried to carry her home and dropped her. She suffered a fractured skull and died.",
    held: "Le Brun was guilty of manslaughter. The Court of Appeal held that the unlawful assault and the fatal dropping were part of one sequence of events. His original unlawful intent could be matched with the death, even if the dropping was accidental.",
    significance: "Extends the Thabo Meli principle to a case where the later act was not itself done with intent. Compare Fagan, where a continuing act was relied on. A key case on coincidence of actus reus and mens rea.",
    links: ["thabo-meli-v-r-1954", "fagan-v-metropolitan-police-commissioner-1968"]
  },
  {
    id: "lim-chin-aik-v-r-1963", name: "Lim Chin Aik v R", cite: "[1963] AC 160", year: 1963, court: "PC",
    area: "criminal", topic: "cl-strict", sub: "sl-presumption", key: false,
    tags: ["Presumption of mens rea", "Strict liability", "Immigration"],
    gist: "A man banned from entering Singapore is found there and convicted, although he did not know about the ban.",
    principle: "Strict liability should not be imposed unless it would help to achieve the aim of the statute, for instance by encouraging people to take greater care.",
    facts: "Lim was prohibited from entering Singapore under the immigration law, but no one told him of the order. He was later found there and convicted of the offence of entering while prohibited.",
    held: "The Privy Council quashed the conviction. Strict liability would serve no purpose, because Lim could not have known about the order and so could not have taken any step to avoid the offence. It would not make anyone more careful.",
    significance: "Limits strict liability to cases where the offender can do something to prevent the offence. It is one of the factors in Gammon. Compare Sweet v Parsley on the presumption of mens rea.",
    links: ["gammon-hong-kong-ltd-v-attorney-general-of-hong-kong-1984", "sweet-v-parsley-1969"]
  },
  {
    id: "r-v-prince-1875", name: "R v Prince", cite: "(1875) LR 2 CCR 154", year: 1875, court: "DC",
    area: "criminal", topic: "cl-strict", sub: "sl-presumption", key: false,
    tags: ["Strict liability", "Honest belief", "Children", "Superseded by statute"],
    gist: "A man takes a girl who is 14 out of her father's possession, honestly believing from her appearance that she is 18.",
    principle: "An offence can be one of strict liability as to the victim's age, so an honest belief that she was over the age is not a defence.",
    facts: "Prince took an unmarried girl of 14 out of the possession of her father, without his consent. She looked older and told Prince she was 18, and he honestly believed it. He was charged under s55 of the Offences against the Person Act 1861, which concerns girls under 16.",
    held: "The Court for Crown Cases Reserved upheld the conviction. The statute protected young girls and did not require knowledge of age. A man who takes such a girl does so at his own risk.",
    significance: "An early example of strict liability as to age, when the courts did not presume mens rea. The modern approach in Sweet v Parsley and B v DPP presumes mens rea unless Parliament clearly excludes it.",
    links: ["b-v-dpp-2000", "sweet-v-parsley-1969", "sherras-v-de-rutzen-1895"]
  },
  {
    id: "harrow-lbc-v-shah-1999", name: "Harrow LBC v Shah", cite: "[1999] 3 All ER 302", year: 1999, court: "DC",
    area: "criminal", topic: "cl-strict", sub: "sl-regulatory", key: false,
    tags: ["Strict liability", "Regulatory offence", "Children", "Employer"],
    gist: "Shop owners who have told staff not to sell lottery tickets to under-16s are prosecuted after an assistant sells one to a 13-year-old.",
    principle: "A regulatory offence of selling to a child can be one of strict liability as to age, and owners can be guilty even though they told staff not to make the sale.",
    facts: "A shop assistant sold a National Lottery ticket to a 13-year-old boy. The owners, the Shahs, were not present. They had told staff not to sell tickets to anyone under 16, and they were prosecuted by the council under the lottery regulations.",
    held: "The Divisional Court held the owners guilty. The offence did not require knowledge of the buyer's age. Applying Gammon, the offence was one of social concern, and strict liability would encourage owners to take care to stop sales to children.",
    significance: "Applies the Gammon factors to a modern regulatory offence. It also shows that employers can be liable for the acts of staff even where they gave clear instructions. Compare Alphacell and Sweet v Parsley.",
    links: ["gammon-hong-kong-ltd-v-attorney-general-of-hong-kong-1984", "alphacell-ltd-v-woodward-1972", "pharmaceutical-society-of-great-britain-v-storkwain-ltd-1986"]
  },
  {
    id: "r-v-inglis-2010", name: "R v Inglis", cite: "[2010] EWCA Crim 2637", year: 2010, court: "CA",
    area: "criminal", topic: "cl-fatal", sub: "fo-murder", key: false,
    tags: ["Murder", "Euthanasia", "Motive"],
    gist: "A mother injects her severely brain-damaged son with a lethal dose of heroin to end his suffering.",
    principle: "There is no defence of mercy killing to murder. A good motive is not a defence if the defendant intended to kill.",
    facts: "Frances Inglis's son Thomas suffered severe brain damage after an accident. She said she wanted to end his suffering and injected him with a lethal dose of heroin. She was convicted of murder.",
    held: "The Court of Appeal dismissed her appeal. Motive is not relevant to liability for murder, and compassion is not a defence. Any change in the law on mercy killing, or the mandatory life sentence, is a matter for Parliament.",
    significance: "Often used in the debate on law and morality, euthanasia and the mandatory life sentence for murder. It shows that the law separates intention from motive. Partial defences such as diminished responsibility may apply in some cases.",
    links: ["r-v-woollin-1998", "r-v-vickers-1957"]
  },
  {
    id: "r-v-dawes-hatter-and-bowyer-2013", name: "R v Dawes, Hatter and Bowyer", cite: "[2013] EWCA Crim 322", year: 2013, court: "CA",
    area: "criminal", topic: "cl-fatal", sub: "fo-loss-of-control", key: true,
    tags: ["Loss of control", "Coroners and Justice Act 2009", "Qualifying trigger"],
    gist: "Three men convicted of murder argue that the jury should have been allowed to consider the new defence of loss of control.",
    principle: "Under the Coroners and Justice Act 2009, loss of control need not be sudden, but delay makes it less likely. The trigger must be a real one, and a trigger the defendant incited as an excuse for violence cannot count.",
    facts: "Three appeals were heard together, each about the new loss of control defence in murder trials. In Dawes, the defendant found his estranged wife asleep on a sofa with another man, fought him and then stabbed him.",
    held: "Lord Judge CJ said loss of control need not be sudden, but the longer the gap between the trigger and the killing, the harder it is to show a loss of control. A qualifying trigger is needed, and a trigger the defendant incited as an excuse for violence cannot count. Dawes's appeal was dismissed.",
    significance: "The leading case on the 2009 Act, which replaced provocation. It shows that loss of control is harder to use than the old defence because of the need for a qualifying trigger. Compare Clinton, Parker and Evans, and Duffy.",
    links: ["r-v-clinton-parker-and-evans-2012", "r-v-duffy-1949", "attorney-general-for-jersey-v-holley-2005"]
  },
  {
    id: "r-v-asmelash-2013", name: "R v Asmelash", cite: "[2013] EWCA Crim 157", year: 2013, court: "CA",
    area: "criminal", topic: "cl-fatal", sub: "fo-loss-of-control", key: false,
    tags: ["Loss of control", "Alcohol and drugs", "Objective test"],
    gist: "A heavily drunk man who stabs a friend after a row says he lost control.",
    principle: "In the objective test for loss of control, voluntary intoxication is ignored. The comparison is with a sober person of the defendant's age and sex with a normal degree of tolerance and self-restraint.",
    facts: "Asmelash drank heavily and killed a friend with a knife after a quarrel. He was charged with murder and relied on loss of control. The question was whether the jury should take his drunkenness into account in deciding how a person of normal self-restraint would have reacted.",
    held: "The Court of Appeal upheld the murder conviction. Voluntary intoxication has no place in the objective test in s54(1)(c). Drink could still be relevant to whether the defendant actually lost control, but not to how a person of normal tolerance would have reacted.",
    significance: "Shows how s54(1)(c) works and that the defendant is compared with a sober person. It follows the general rule that voluntary intoxication is not a defence. Compare Dawes and Clinton, Parker and Evans.",
    links: ["r-v-dawes-hatter-and-bowyer-2013", "r-v-clinton-parker-and-evans-2012"]
  },
  {
    id: "r-v-wood-2008", name: "R v Wood", cite: "[2008] EWCA Crim 1305", year: 2008, court: "CA",
    area: "criminal", topic: "cl-fatal", sub: "fo-dr", key: false,
    tags: ["Diminished responsibility", "Alcohol and drugs", "Abnormality of mind"],
    gist: "A man with a long dependence on alcohol kills after drinking heavily and says his condition should reduce his guilt.",
    principle: "Alcohol dependency syndrome can be an abnormality of mind for diminished responsibility, but the effect of voluntary drinking on the day is treated separately.",
    facts: "Wood suffered from alcohol dependency syndrome. After heavy drinking he killed a man and was convicted of murder. He appealed, arguing that his condition should have supported a defence of diminished responsibility.",
    held: "Under the old s2 of the Homicide Act 1957, the Court of Appeal said that the jury should decide whether the syndrome was an abnormality of mind that substantially impaired his responsibility. The effect of voluntary intoxication on the day had to be left out.",
    significance: "Shows how the courts separate a medical condition from drunkenness. The 2009 reform now requires a recognised medical condition, so Wood is still used on the effect of alcohol. Compare Dietschmann.",
    links: ["r-v-dietschmann-2003", "r-v-golds-2016"]
  },
  {
    id: "r-v-hobson-1997", name: "R v Hobson", cite: "[1998] 1 Cr App R 31", year: 1997, court: "CA",
    area: "criminal", topic: "cl-fatal", sub: "fo-dr", key: false,
    tags: ["Diminished responsibility", "Domestic abuse", "Abnormality of mind"],
    gist: "A woman who killed her violent husband relies on new evidence that she was suffering from battered woman's syndrome.",
    principle: "Battered woman's syndrome can be a recognised psychological condition that amounts to an abnormality of mind for diminished responsibility.",
    facts: "Hobson killed her abusive husband and was convicted of murder. On appeal, she relied on fresh psychiatric evidence that she had been suffering from battered woman's syndrome when she killed him.",
    held: "The Court of Appeal accepted that battered woman's syndrome can be a recognised condition amounting to an abnormality of mind under s2 of the Homicide Act 1957. Whether it did so in a particular case was a question for the jury on the medical evidence.",
    significance: "Links diminished responsibility to domestic abuse. It was decided under the old law, and the 2009 definition now asks for a recognised medical condition. Compare Ahluwalia, a case of abuse and the old defence of provocation.",
    links: ["r-v-ahluwalia-1992", "r-v-golds-2016"]
  },
  {
    id: "r-v-goodfellow-1986", name: "R v Goodfellow", cite: "(1986) 83 Cr App R 23", year: 1986, court: "CA",
    area: "criminal", topic: "cl-fatal", sub: "fo-uam", key: false,
    tags: ["Manslaughter", "Arson", "Dangerousness"],
    gist: "A man sets fire to his council house to get rehoused, and three people in it die.",
    principle: "The unlawful act in unlawful act manslaughter need not be aimed at the victim. An act directed at property can be enough if it is dangerous and causes death.",
    facts: "Goodfellow wanted to be moved by the council, so he set fire to his council house. Three people in the house died. He was convicted of manslaughter.",
    held: "The Court of Appeal upheld the conviction. Arson was an unlawful act, and it was dangerous because sober and reasonable people would recognise the risk of some harm. It did not matter that the act was aimed at property and not at a person.",
    significance: "Confirms that the unlawful act need not be directed at the victim. Compare Church on dangerousness, Newbury and Jones on the mens rea needed, and Lamb on an act that is not unlawful.",
    links: ["r-v-church-1965", "dpp-v-newbury-and-jones-1976", "r-v-lamb-1967"]
  },
  {
    id: "r-v-watson-1989", name: "R v Watson", cite: "[1989] 1 WLR 684", year: 1989, court: "CA",
    area: "criminal", topic: "cl-fatal", sub: "fo-uam", key: false,
    tags: ["Manslaughter", "Burglary", "Dangerousness", "Vulnerable victim"],
    gist: "Burglars break into an elderly man's home, and he dies of a heart attack some time after they leave.",
    principle: "In deciding whether an act was dangerous, the reasonable person is given the knowledge the defendant gained while committing the act, such as the victim's frailty.",
    facts: "Watson and another man burgled the home of an 87-year-old man. The householder came downstairs and the burglars left. He died of a heart attack some time later, and Watson was convicted of manslaughter.",
    held: "The Court of Appeal said that the reasonable person has the knowledge which the burglars gained while they were in the house, such as the victim's age and frailty, so the risk of harm might have been obvious. The conviction was quashed because the jury had not been directed to consider what the burglars knew and when.",
    significance: "Develops Dawson and James on the dangerousness test by adding knowledge gained during the act. It shows that the law applies an objective test of dangerousness, but with the knowledge the defendant acquired.",
    links: ["r-v-dawson-and-james-1976", "r-v-church-1965"]
  },
  {
    id: "r-v-sellu-2016", name: "R v Sellu", cite: "[2016] EWCA Crim 1716", year: 2016, court: "CA",
    area: "criminal", topic: "cl-fatal", sub: "fo-gnm", key: false,
    tags: ["Gross negligence", "Medical", "Manslaughter"],
    gist: "A consultant surgeon is convicted of manslaughter after a patient dies of sepsis following a delay in treating a perforated bowel.",
    principle: "Gross negligence manslaughter needs conduct that is truly exceptionally bad, so that a jury can regard it as criminal. Serious negligence alone is not enough.",
    facts: "Sellu was a consultant surgeon. A patient who had had bowel surgery developed a perforated bowel and was not re-operated on quickly. He died of sepsis. Sellu was convicted of gross negligence manslaughter.",
    held: "The Court of Appeal quashed the conviction. The judge's directions had not made clear enough that 'gross' means exceptionally bad, so that mere errors, or even serious negligence, are not enough. A bad outcome does not itself prove gross negligence.",
    significance: "A key case on the 'gross' threshold in gross negligence manslaughter, especially for doctors. Compare Adomako, Misra and Srivastava, and Rose, which dealt with the requirement of a risk of death.",
    links: ["r-v-adomako-1994", "r-v-misra-and-srivastava-2004", "r-v-rose-2017"]
  }
);
