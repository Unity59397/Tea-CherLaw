/* Criminal law: burden of proof, actus reus and causation, mens rea, strict liability, attempts. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "woolmington-v-dpp-1935", name: "Woolmington v DPP", cite: "[1935] AC 462", year: 1935, court: "HL",
    area: "criminal", topic: "cl-principles", sub: "cl-burden", key: true,
    tags: ["Golden thread", "Burden of proof"],
    gist: "A man charged with shooting his estranged wife says the gun went off by accident, and the judge tells the jury it is for him to prove that.",
    principle: "The prosecution must prove guilt beyond reasonable doubt. The only exceptions are insanity and statutory reversals of the burden.",
    facts: "Woolmington shot his wife, who had left him. He said he took a shotgun to threaten to shoot himself and it went off accidentally. The trial judge directed the jury that once a killing was shown, murder was presumed unless he proved otherwise.",
    held: "The House of Lords quashed the conviction. Viscount Sankey said the prosecution must prove the case throughout, the “golden thread” of English criminal law.",
    significance: "The foundation of the presumption of innocence. Statutory reverse burdens are tested against Article 6(2) of the ECHR.",
    links: []
  },
  {
    id: "r-v-miller-1983", name: "R v Miller", cite: "[1983] 2 AC 161", year: 1983, court: "HL",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-omissions", key: true,
    tags: ["Omission", "Creating a danger", "Arson"],
    gist: "A squatter falls asleep with a lit cigarette, wakes to find the mattress smouldering, and moves to another room without trying to put it out.",
    principle: "A person who creates a dangerous situation, even accidentally, has a duty to take reasonable steps to counteract it.",
    facts: "Miller was a squatter. He fell asleep with a lit cigarette and woke to find the mattress on fire. He moved to another room and went back to sleep. The house was damaged. He was charged with arson.",
    held: "The House of Lords upheld the conviction. Once he became aware he had started a fire, he had a duty to act. His failure to do so was the actus reus, and his awareness of the risk supplied the mens rea.",
    significance: "Key authority for the “creating a danger” duty. It also shows the courts sometimes treat conduct as a continuing act.",
    links: ["r-v-stone-and-dobinson-1977", "fagan-v-metropolitan-police-commissioner-1968"]
  },
  {
    id: "r-v-stone-and-dobinson-1977", name: "R v Stone and Dobinson", cite: "[1977] QB 354", year: 1977, court: "CA",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-omissions", key: true,
    tags: ["Omission", "Assumption of care", "Manslaughter"],
    gist: "A couple take in a relative who stops eating, then fail to get proper help as her health collapses, and she dies in their house.",
    principle: "A duty to act arises where a person voluntarily assumes care of another who is unable to look after themselves.",
    facts: "Stone's sister Fanny lodged with him and his partner Dobinson. She was anorexic and became bedridden. They made some ineffective efforts to help but did not call a doctor, and she died.",
    held: "The Court of Appeal upheld their manslaughter convictions. By taking Fanny into their home and making efforts to care for her, they assumed a duty, and their failure to summon help was grossly negligent.",
    significance: "A leading case on duties arising from assumption of care. Contrast with the difficulty of drawing the line on moral duties.",
    links: ["r-v-miller-1983"]
  },
  {
    id: "r-v-white-1910", name: "R v White", cite: "[1910] 2 KB 124", year: 1910, court: "CA",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-factual", key: true,
    tags: ["But for test", "Factual causation"],
    gist: "A son puts poison in his mother's drink intending to kill her, but she dies of heart failure before the poison could have worked.",
    principle: "Factual causation is tested by asking whether the result would have happened but for the defendant's conduct.",
    facts: "White put potassium cyanide in his mother's lemonade to inherit. She drank a little and was found dead. The medical evidence showed she died of heart failure, not poisoning.",
    held: "The Court of Criminal Appeal quashed the murder conviction. His act did not cause her death, since she would have died anyway, but he was guilty of attempted murder.",
    significance: "The classic “but for” example. It shows factual causation is necessary but not enough, since legal causation must also be proved.",
    links: ["r-v-pagett-1983"]
  },
  {
    id: "r-v-pagett-1983", name: "R v Pagett", cite: "(1983) 76 Cr App R 279", year: 1983, court: "CA",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-legal", key: true,
    tags: ["Legal causation", "Novus actus interveniens", "Self-preservation"],
    gist: "A man uses his pregnant girlfriend as a shield while firing at armed police, and she is killed by their return fire.",
    principle: "A reasonable act of self-defence or self-preservation by a third party does not break the chain of causation.",
    facts: "Pagett held his pregnant girlfriend in front of him as a human shield and fired at police officers. The police fired back in self-defence and killed her. He was convicted of manslaughter.",
    held: "The Court of Appeal upheld the conviction. His acts were an operating and substantial cause of her death. The officers' reaction was reasonable and foreseeable, so the chain was not broken.",
    significance: "Authority that a foreseeable and reasonable response to the defendant's act does not amount to a novus actus.",
    links: ["r-v-kennedy-no-2-2007"]
  },
  {
    id: "r-v-blaue-1975", name: "R v Blaue", cite: "[1975] 1 WLR 1411", year: 1975, court: "CA",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-legal", key: true,
    tags: ["Thin skull rule", "Legal causation", "Religion"],
    gist: "A man stabs a woman who refuses a blood transfusion that would have saved her life because of her religious beliefs, and she dies.",
    principle: "A defendant must take his victim as he finds her, including her religious beliefs. Refusing treatment does not break the chain.",
    facts: "Blaue stabbed a young woman after she refused sex. She was a Jehovah's Witness and refused a blood transfusion on religious grounds. She died of the wound.",
    held: "The Court of Appeal upheld the manslaughter conviction. The thin skull rule applies to the whole person, not only physical vulnerability, and the stab wound remained an operating and substantial cause.",
    significance: "The leading case on the thin skull rule in criminal law. Often criticised for treating a free choice by the victim as irrelevant.",
    links: ["r-v-kennedy-no-2-2007"]
  },
  {
    id: "r-v-smith-1959", name: "R v Smith", cite: "[1959] 2 QB 35", year: 1959, court: "CA",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-novus", key: false,
    tags: ["Medical negligence", "Novus actus interveniens"],
    gist: "A soldier stabbed in a barracks fight is dropped twice on the way to the medical centre and then given poor treatment, and he dies.",
    principle: "Negligent medical treatment breaks the chain only where it is so independent of the original act that the wound is merely the setting.",
    facts: "Private Smith stabbed a fellow soldier with a bayonet. The victim was dropped twice while being carried, and the doctor missed a punctured lung and gave treatment that was “thoroughly bad”. He died.",
    held: "The Courts-Martial Appeal Court upheld the murder conviction. The original wound was still an operating and substantial cause, so the bad treatment did not break the chain.",
    significance: "Contrast with R v Jordan (1956) where the treatment was “palpably wrong”. Medical negligence rarely breaks the chain.",
    links: ["r-v-pagett-1983"]
  },
  {
    id: "r-v-kennedy-no-2-2007", name: "R v Kennedy (No 2)", cite: "[2007] UKHL 38", year: 2007, court: "HL",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-novus", key: true,
    tags: ["Free, deliberate and informed act", "Drugs", "Manslaughter"],
    gist: "A man prepares a syringe of heroin and hands it to a friend, who injects himself and dies.",
    principle: "A free, voluntary and informed decision by the victim to take the drug breaks the chain of causation.",
    facts: "Kennedy filled a syringe with heroin and gave it to Bosque, who injected himself and died. Kennedy was convicted of unlawful act manslaughter.",
    held: "The House of Lords quashed the conviction. Supplying the drug could not be the cause of death because the victim, a fully informed adult, freely chose to inject himself.",
    significance: "Key authority on novus actus by the victim. Distinguishes joint injecting, where the defendant takes part in the act itself.",
    links: ["r-v-pagett-1983", "r-v-blaue-1975"]
  },
  {
    id: "r-v-woollin-1998", name: "R v Woollin", cite: "[1999] 1 AC 82", year: 1998, court: "HL",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-intention", key: true,
    tags: ["Oblique intent", "Virtual certainty", "Murder"],
    gist: "A father loses his temper and throws his baby son across a room towards a hard surface, and the baby dies of a skull fracture.",
    principle: "Oblique intent can be found if death or serious harm was a virtual certainty and the defendant appreciated that.",
    facts: "Woollin threw his three-month-old son towards a pram near a wall. The child hit a hard surface and died. Woollin said he had not meant to harm him.",
    held: "The House of Lords quashed the murder conviction because the judge had used the wrong test. The jury may find intention if the result was a virtual certainty and the defendant realised that.",
    significance: "The leading authority on oblique intention, refining Nedrick. It says the jury is “entitled to find” intent, not that it must, leaving it unclear whether this is a rule of evidence or substantive law.",
    links: ["r-v-g-2003"]
  },
  {
    id: "r-v-cunningham-1957", name: "R v Cunningham", cite: "[1957] 2 QB 396", year: 1957, court: "CA",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-recklessness", key: true,
    tags: ["Subjective recklessness", "Gas meter"],
    gist: "A man rips a gas meter from a cellar wall to steal the coins, and gas seeps next door and poisons a neighbour.",
    principle: "Recklessness means the defendant foresaw the risk of the harm and went on to take it.",
    facts: "Cunningham stole money from a gas meter by tearing it off the wall. Gas leaked into the neighbouring house and partly asphyxiated Mrs Wade. He was charged under s23 OAPA 1861 with “maliciously” administering a noxious thing.",
    held: "The Court of Appeal quashed the conviction. “Maliciously” requires actual intention to do the harm or recklessness, meaning he foresaw the risk and took it. Foresight of harm by a reasonable person was not enough.",
    significance: "The origin of subjective recklessness, restored by R v G (2003) after the brief objective test in Caldwell.",
    links: ["r-v-g-2003"]
  },
  {
    id: "r-v-g-2003", name: "R v G", cite: "[2003] UKHL 50", year: 2003, court: "HL",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-recklessness", key: true,
    tags: ["Subjective recklessness", "Children", "Overruled"],
    gist: "Two boys aged eleven and twelve set fire to newspapers behind a shop, leave them burning and the fire spreads, causing about a million pounds of damage.",
    principle: "Recklessness requires the defendant to be aware of a risk that exists or will exist and to act unreasonably in taking it.",
    facts: "G and another, aged 11 and 12, lit newspapers behind a Co-op and left. The fire spread to the shop and nearby buildings. They had not thought it would spread. They were convicted of arson under the Caldwell test.",
    held: "The House of Lords quashed the convictions and overruled Caldwell. A defendant is reckless only if they were aware of the risk, which protects those who lack the capacity to foresee it, such as children.",
    significance: "Restored the subjective test. A prime example of the House of Lords using the Practice Statement to overrule an earlier decision.",
    links: ["r-v-cunningham-1957"]
  },
  {
    id: "r-v-latimer-1886", name: "R v Latimer", cite: "(1886) 17 QBD 359", year: 1886, court: "DC",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-transferred", key: false,
    tags: ["Transferred malice"],
    gist: "A man swings his belt at someone in a pub, but it glances off and badly injures a woman standing nearby.",
    principle: "If a defendant intends to harm one person but harms another, the mens rea transfers to the actual victim.",
    facts: "Latimer was in a fight in a pub. He aimed a blow with his belt at a man, but the belt bounced off and struck a woman, wounding her seriously.",
    held: "The Court for Crown Cases Reserved upheld his conviction for unlawfully and maliciously wounding. His intent towards the man was transferred to the woman.",
    significance: "The standard authority on transferred malice. It applies only if the offence is the same, as shown in R v Pembliton (1874).",
    links: []
  },
  {
    id: "fagan-v-metropolitan-police-commissioner-1968", name: "Fagan v Metropolitan Police Commissioner", cite: "[1969] 1 QB 439", year: 1968, court: "DC",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-coincidence", key: true,
    tags: ["Continuing act", "Assault", "Police"],
    gist: "A driver accidentally parks on a police officer's foot, then deliberately leaves the car there for a few moments when told to move.",
    principle: "Actus reus and mens rea must coincide, but the actus reus can be treated as a continuing act.",
    facts: "Fagan, told by PC Morris to park, drove onto the officer's foot. Told to move off, he swore and refused for some time, and then switched off the engine. He was convicted of assaulting a police officer.",
    held: "The Divisional Court upheld the conviction by a majority. Driving on was not complete until the car moved, so he formed the intent to cause the touch while the act was still continuing.",
    significance: "A leading case on coincidence, sometimes seen as an omission to move the car. Compare Thabo Meli and Miller.",
    links: ["r-v-miller-1983", "thabo-meli-v-r-1954"]
  },
  {
    id: "thabo-meli-v-r-1954", name: "Thabo Meli v R", cite: "[1954] 1 WLR 228", year: 1954, court: "PC",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-coincidence", key: true,
    tags: ["Series of acts", "Murder"],
    gist: "Men hit a victim over the head, believe him dead, and throw his body off a cliff to fake an accident, but he dies of exposure.",
    principle: "A series of acts can be treated as one transaction, so mens rea at the start is enough if it continues through the series.",
    facts: "The defendants planned to kill a man. They lured him to a hut, struck him on the head and, believing he was dead, rolled his body over a cliff. The post-mortem showed he had died of exposure after the fall.",
    held: "The Privy Council rejected the argument that the first act had mens rea but not the death, and the second act had death but no mens rea. It was a series of acts forming one transaction, and the convictions stood.",
    significance: "Authority for the “one transaction” approach. Also approved in R v Church (1966).",
    links: ["fagan-v-metropolitan-police-commissioner-1968"]
  },
  {
    id: "sweet-v-parsley-1969", name: "Sweet v Parsley", cite: "[1970] AC 132", year: 1969, court: "HL",
    area: "criminal", topic: "cl-strict", sub: "sl-presumption", key: true,
    tags: ["Presumption of mens rea", "Drugs", "Landlord"],
    gist: "A teacher who rents out a farmhouse is convicted of managing premises used for smoking cannabis, though she had no idea her tenants did so.",
    principle: "There is a presumption that mens rea is required unless Parliament clearly or by necessary implication says otherwise.",
    facts: "Miss Sweet let a farmhouse to students and rarely visited it. Police found cannabis there. She was convicted under the Dangerous Drugs Act 1965 of being concerned in the management of premises used for smoking cannabis.",
    held: "The House of Lords quashed the conviction. Where a statute is silent, mens rea is presumed, especially for serious offences carrying a stigma. The prosecution had to prove she knew about the smoking.",
    significance: "The leading case on the presumption of mens rea, later restated in Gammon.",
    links: ["gammon-hong-kong-ltd-v-attorney-general-of-hong-kong-1984"]
  },
  {
    id: "gammon-hong-kong-ltd-v-attorney-general-of-hong-kong-1984", name: "Gammon (Hong Kong) Ltd v Attorney General of Hong Kong", cite: "[1985] AC 1", year: 1984, court: "PC",
    area: "criminal", topic: "cl-strict", sub: "sl-presumption", key: true,
    tags: ["Social concern", "Building safety", "Presumption of mens rea"],
    gist: "Builders deviate from approved plans for a building in a way that creates serious risk, and say they did not know the deviation was significant.",
    principle: "The presumption of mens rea is displaced only where the statute is clearly or by necessary implication to the contrary and the offence concerns an issue of social concern.",
    facts: "Gammon were building contractors who deviated from approved plans in a way that risked collapse. They were charged under the Hong Kong Buildings Ordinance and argued they lacked knowledge.",
    held: "The Privy Council upheld the convictions. Lord Scarman set out the principles: the presumption is strong for “truly criminal” offences, but it can be displaced when the statute deals with an issue of social concern such as public safety, and strict liability will help enforcement.",
    significance: "The classic statement of when the courts impose strict liability. Often used to evaluate how consistent the courts are.",
    links: ["sweet-v-parsley-1969"]
  },
  {
    id: "alphacell-ltd-v-woodward-1972", name: "Alphacell Ltd v Woodward", cite: "[1972] AC 824", year: 1972, court: "HL",
    area: "criminal", topic: "cl-strict", sub: "sl-regulatory", key: false,
    tags: ["Pollution", "Regulatory offence", "Company"],
    gist: "A paper company's settling tanks overflow because of a blocked pump and pollute a river, though the company had taken precautions.",
    principle: "Causing pollution is an offence of strict liability, so no proof of fault is needed.",
    facts: "Alphacell's settling tanks overflowed into a river when pumps were blocked by brambles. The company had taken care but was convicted of causing polluting matter to enter a river.",
    held: "The House of Lords upheld the conviction. The offence covered anyone who caused the pollution, and the company need not have intended or been negligent. The seriousness of pollution justified strict liability.",
    significance: "Typical of strict liability in regulatory offences. Often used to justify strict liability for companies where public safety or the environment is at stake.",
    links: ["gammon-hong-kong-ltd-v-attorney-general-of-hong-kong-1984"]
  },
  {
    id: "cundy-v-le-cocq-1884", name: "Cundy v Le Cocq", cite: "(1884) 13 QBD 207", year: 1884, court: "DC",
    area: "criminal", topic: "cl-strict", sub: "sl-regulatory", key: false,
    tags: ["Alcohol and drugs", "Licensing"],
    gist: "A licensee serves a man who is drunk without realising it, in a pub whose licence forbids selling alcohol to a drunk person.",
    principle: "A publican who sells alcohol to an intoxicated person commits the offence whether or not he knew the person was drunk.",
    facts: "Cundy, a licensee, sold alcohol to a man who was already drunk. He did not realise this and had no reason to. He was convicted under the Licensing Act 1872.",
    held: "The Divisional Court upheld the conviction. The statute made it an offence to sell to a drunken person, so knowledge of the drunkenness was not an element.",
    significance: "An early strict liability case in licensing. Contrast Sherras v De Rutzen (1895), where the court read a mental element into a similar licensing offence.",
    links: []
  },
  {
    id: "pharmaceutical-society-of-great-britain-v-storkwain-ltd-1986", name: "Pharmaceutical Society of Great Britain v Storkwain Ltd", cite: "[1986] 1 WLR 903", year: 1986, court: "HL",
    area: "criminal", topic: "cl-strict", sub: "sl-regulatory", key: false,
    tags: ["Medicines", "Forged prescription", "Public safety"],
    gist: "A pharmacist supplies prescription-only drugs on forged prescriptions that looked genuine, and says he could not have known.",
    principle: "Supplying prescription-only drugs without a valid prescription is a strict liability offence, even if the pharmacist was honestly deceived.",
    facts: "A pharmacist dispensed drugs against forged prescriptions that looked genuine. The Medicines Act 1968 made it an offence to supply them without a doctor's prescription.",
    held: "The House of Lords held the offence was strict. Public protection from dangerous drugs was the aim of the Act, and the defendant could take precautions, such as checking prescriptions.",
    significance: "Shows strict liability for public safety in a regulated trade, often criticised as harsh on a defendant who is not at fault.",
    links: ["alphacell-ltd-v-woodward-1972"]
  },
  {
    id: "r-v-gullefer-1987", name: "R v Gullefer", cite: "[1990] 3 All ER 882", year: 1987, court: "CA",
    area: "criminal", topic: "cl-attempts", sub: "at-ar", key: false,
    tags: ["More than merely preparatory", "Criminal Attempts Act 1981"],
    gist: "A gambler whose dog is losing a race jumps onto the track to stop the race so that bets are refunded.",
    principle: "An act is an attempt only if it is more than merely preparatory, meaning the defendant has embarked on the crime itself.",
    facts: "Gullefer's greyhound looked set to lose, so he climbed onto the track to distract the dogs and have the race declared void so his stake would be returned. He was stopped and charged with attempted theft.",
    held: "The Court of Appeal quashed the conviction. He had not yet embarked on the crime proper, so his act was only preparatory. Lord Lane CJ said the act must show he had “embarked upon the crime proper”.",
    significance: "Key authority on the actus reus of attempt under s1(1) Criminal Attempts Act 1981.",
    links: ["r-v-jones-1990"]
  },
  {
    id: "r-v-jones-1990", name: "R v Jones", cite: "[1990] 1 WLR 1057", year: 1990, court: "CA",
    area: "criminal", topic: "cl-attempts", sub: "at-ar", key: false,
    tags: ["More than merely preparatory", "Firearm"],
    gist: "A man gets into his love rival's car, points a loaded sawn-off shotgun at his chest, and is stopped before he can fire because the safety catch was on.",
    principle: "An act can be more than merely preparatory even though the defendant still has further acts to do before the offence is complete.",
    facts: "Jones got into the victim's car with a loaded shotgun and pointed it at the victim's chest. The safety catch was on and he had not yet put his finger on the trigger. He was convicted of attempted murder.",
    held: "The Court of Appeal upheld the conviction. Whether an act is more than merely preparatory is for the jury, and the earlier acts of getting the gun and getting into the car were only preparatory but pointing it was enough.",
    significance: "Shows the jury decides when preparation becomes attempt. Compare with Campbell and Gullefer.",
    links: ["r-v-gullefer-1987"]
  },
  {
    id: "r-v-shivpuri-1986", name: "R v Shivpuri", cite: "[1987] AC 1", year: 1986, court: "HL",
    area: "criminal", topic: "cl-attempts", sub: "at-mr", key: true,
    tags: ["Impossibility", "Overruled", "Practice Statement"],
    gist: "A man takes a package he believes contains illegal drugs, but it holds only harmless vegetable matter, and he is charged with attempting to deal in drugs.",
    principle: "A defendant can be guilty of attempting an offence even though success is impossible, if they believed the facts made it a crime.",
    facts: "Shivpuri was told that a suitcase contained heroin or cannabis. He took it, but it actually contained a harmless vegetable matter. He was charged with attempting to be knowingly concerned in dealing with prohibited drugs.",
    held: "The House of Lords upheld the conviction and overruled Anderton v Ryan (1985). Under the Criminal Attempts Act 1981, impossibility is no defence, and the court looks at what the defendant intended.",
    significance: "One of the first uses of the Practice Statement in a criminal case. Settles that factual impossibility is not a defence to attempt.",
    links: ["r-v-g-2003"]
  }
);
