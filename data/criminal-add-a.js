/* Criminal law (additions): intention, recklessness, transferred malice, omissions, causation, strict liability. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "r-v-mohan-1975", name: "R v Mohan", cite: "[1976] QB 1", year: 1975, court: "CA",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-intention", key: true,
    tags: ["Direct intent", "Police", "Motoring"],
    gist: "A driver ignores a police signal to stop and accelerates towards the officer, who jumps out of the way.",
    principle: "Direct intention is a decision to bring about a particular consequence, whether or not the defendant desired it.",
    facts: "Police signalled Mohan to stop. He drove towards the officer, who jumped out of the way. Mohan was charged with attempted malicious wounding, which required intention.",
    held: "The Court of Appeal defined intention as a decision to bring about, as far as it lies within the accused's power, the commission of the offence, no matter whether the accused desired that consequence.",
    significance: "The standard definition of direct intent, and so the starting point for the cases on oblique intent that follow.",
    links: ["r-v-moloney-1985", "r-v-nedrick-1986"]
  },
  {
    id: "r-v-moloney-1985", name: "R v Moloney", cite: "[1985] AC 905", year: 1985, court: "HL",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-intention", key: true,
    tags: ["Oblique intent", "Murder", "Guidelines"],
    gist: "A young man, in a drunken contest with his stepfather over who can draw a gun faster, shoots him dead without aiming.",
    principle: "Foresight of consequences is evidence from which a jury may infer intention, but it is not the same as intention.",
    facts: "Moloney and his stepfather, both drunk, competed over who could load and fire a shotgun faster. Moloney fired and killed his stepfather. He said he had never aimed at him or thought he might hurt him.",
    held: "The House of Lords substituted a manslaughter verdict. Intention should not be explained to the jury in a complicated way, but they could be asked whether death or serious harm was a natural consequence of the act and whether the defendant foresaw this.",
    significance: "Started the modern law on oblique intent. The guidelines were criticised and were refined in Hancock and Shankland and then Nedrick.",
    links: ["r-v-hancock-and-shankland-1985", "r-v-nedrick-1986"]
  },
  {
    id: "r-v-hancock-and-shankland-1985", name: "R v Hancock and Shankland", cite: "[1986] AC 455", year: 1985, court: "HL",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-intention", key: false,
    tags: ["Oblique intent", "Probability", "Miners' strike"],
    gist: "Striking miners push a concrete block off a bridge onto a road to stop a convoy, and it kills a taxi driver carrying a working miner.",
    principle: "The greater the probability of a consequence, the more likely it was foreseen, and if foreseen, the more likely it was intended.",
    facts: "During the miners' strike, Hancock and Shankland dropped a concrete post and block from a bridge on the road where a taxi was taking a working miner to work. It killed the driver. They said they had only meant to block the road.",
    held: "The House of Lords quashed the murder convictions. The Moloney guidelines were misleading because they did not mention probability. The judge should explain that the more probable the consequence, the more likely it was foreseen and intended.",
    significance: "A step in the development of oblique intent. Nedrick quickly added the idea of virtual certainty.",
    links: ["r-v-moloney-1985", "r-v-nedrick-1986"]
  },
  {
    id: "r-v-nedrick-1986", name: "R v Nedrick", cite: "[1986] 1 WLR 1025", year: 1986, court: "CA",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-intention", key: false,
    tags: ["Oblique intent", "Virtual certainty", "Arson"],
    gist: "A man pours paraffin through a woman's letterbox and sets it alight to frighten her, and a child in the house dies in the fire.",
    principle: "A jury may find intention if death or serious harm was a virtual certainty from the defendant's act and the defendant realised that.",
    facts: "Nedrick had a grudge against a woman. He poured paraffin through her letterbox and set it alight, saying he only wanted to frighten her. A child died in the fire and he was convicted of murder.",
    held: "The Court of Appeal substituted manslaughter. It set out a model direction: the jury should ask how probable the consequence was, and whether the defendant appreciated that death or serious injury was a virtual certainty. If so, they may find intention.",
    significance: "The leading test on oblique intent before Woollin, which put the test into a safer form as a rule of evidence.",
    links: ["r-v-woollin-1998", "r-v-hancock-and-shankland-1985"]
  },
  {
    id: "metropolitan-police-commissioner-v-caldwell-1981", name: "Metropolitan Police Commissioner v Caldwell", cite: "[1982] AC 341", year: 1981, court: "HL",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-recklessness", key: false,
    tags: ["Objective recklessness", "Overruled", "Criminal damage"],
    gist: "A drunk hotel worker with a grudge against his employer sets fire to the hotel while guests are sleeping inside.",
    principle: "A defendant is reckless if he does an act that creates an obvious risk and either has not thought about the risk or has seen it and gone on. This was later overruled.",
    facts: "Caldwell, who had a grudge against the hotel owner, set fire to the hotel when drunk. He was charged with criminal damage being reckless as to whether life would be endangered. He said he was too drunk to think about the risk.",
    held: "The House of Lords held that recklessness included failing to consider an obvious risk. A person who did not give thought to an obvious risk could be reckless, whether or not they were capable of appreciating it.",
    significance: "Introduced an objective test of recklessness. It was criticised as unfair and overruled by R v G in 2003, which restored the subjective approach.",
    links: ["r-v-g-2003", "r-v-cunningham-1957"]
  },
  {
    id: "r-v-pembliton-1874", name: "R v Pembliton", cite: "(1874) LR 2 CCR 119", year: 1874, court: "Hist",
    area: "criminal", topic: "cl-mens-rea", sub: "mr-transferred", key: false,
    tags: ["Transferred malice", "Same type of offence"],
    gist: "A man throws a stone at people during a fight, misses them, and breaks a window.",
    principle: "Malice can be transferred only between the same type of offence, so intent to harm a person cannot be transferred to damaging property.",
    facts: "After a fight outside a pub, Pembliton threw a stone at a group of men. He missed and broke a window in the pub. He was convicted of maliciously damaging property.",
    held: "The Court for Crown Cases Reserved quashed the conviction. His intent was to hit a person, not to damage a window, and the mens rea for one kind of crime cannot be transferred to a different kind.",
    significance: "The standard limit on the doctrine of transferred malice, which is contrasted with R v Latimer.",
    links: ["r-v-latimer-1886"]
  },
  {
    id: "r-v-larsonneur-1933", name: "R v Larsonneur", cite: "(1933) 24 Cr App R 74", year: 1933, court: "CA",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-voluntary", key: true,
    tags: ["State of affairs", "Involuntary act"],
    gist: "A foreign woman whom the Irish authorities deport to England against her will is convicted of being an alien “found” in the country without permission.",
    principle: "A defendant can be convicted of a state of affairs offence even if the circumstances arose involuntarily.",
    facts: "Larsonneur was a French woman whose permission to stay in the UK had expired. She went to Ireland, and the Irish police deported her back to England, where she was arrested. She was charged with being an alien found in the UK without leave.",
    held: "The Court of Criminal Appeal upheld the conviction. The offence was being “found” in the UK, and it did not matter that she was brought here against her will.",
    significance: "Often cited as a harsh decision that shows the problem with state of affairs offences. Compare Winzar v Chief Constable of Kent.",
    links: []
  },
  {
    id: "r-v-dytham-1979", name: "R v Dytham", cite: "[1979] QB 722", year: 1979, court: "CA",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-omissions", key: false,
    tags: ["Police", "Public office", "Omissions"],
    gist: "A police officer on duty watches a doorman kick a man to death outside a nightclub, and drives away without helping or reporting it.",
    principle: "A public official who wilfully fails to carry out a duty of his office, in a way that is serious, can be guilty of misconduct in public office.",
    facts: "Dytham was a police constable who saw a bouncer throw a man out of a club and then kick him to death. The officer did nothing, did not call for help and left the scene. He was convicted of misconduct in a public office.",
    held: "The Court of Appeal upheld the conviction. His office carried a duty to protect the public, and his wilful neglect of that duty was an abuse of the public's trust.",
    significance: "A key case on liability for omissions where there is a duty arising from a public office.",
    links: ["r-v-stone-and-dobinson-1977"]
  },
  {
    id: "r-v-instan-1893", name: "R v Instan", cite: "[1893] 1 QB 450", year: 1893, court: "DC",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-omissions", key: false,
    tags: ["Duty of care", "Relationship", "Family"],
    gist: "A woman living with her elderly aunt neither feeds her nor gets help when she is ill with gangrene, and the aunt dies.",
    principle: "A duty to act can arise from a family relationship combined with the defendant taking responsibility for the person's care.",
    facts: "Instan lived with her aunt, who developed gangrene in her leg and could not move. Instan took food that the aunt's money paid for, but did not feed her, call a doctor or tell anyone. The aunt died.",
    held: "The Court for Crown Cases Reserved upheld a manslaughter conviction. She had a legal duty to care for her aunt because she lived with her, was supported by her and had assumed the task. Her omission caused the death.",
    significance: "A classic example of a duty based on relationship and assumption of care. See also Stone and Dobinson.",
    links: ["r-v-stone-and-dobinson-1977", "r-v-miller-1983"]
  },
  {
    id: "r-v-evans-2009", name: "R v Evans", cite: "[2009] EWCA Crim 650", year: 2009, court: "CA",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-omissions", key: true,
    tags: ["Creating a danger", "Gross negligence manslaughter", "Alcohol and drugs", "Family"],
    gist: "A woman supplies heroin to her half-sister, who overdoses, and she and her mother fail to call for help.",
    principle: "A person who creates or contributes to a dangerous situation, even innocently, is under a duty to take reasonable steps to prevent harm.",
    facts: "Evans bought heroin for her half-sister, who took it and showed signs of overdose. Evans and her mother did not call an ambulance and instead tried to treat her themselves. The half-sister died. Evans was convicted of gross negligence manslaughter.",
    held: "The Court of Appeal upheld the conviction. A duty of care exists where a person has created or contributed to a state of affairs that they know has become life-threatening, and the person did not have to be at fault.",
    significance: "Extends the categories of duty for omissions to include creating a dangerous situation. It builds on Miller.",
    links: ["r-v-miller-1983", "r-v-adomako-1994"]
  },
  {
    id: "r-v-cheshire-1991", name: "R v Cheshire", cite: "[1991] 1 WLR 844", year: 1991, court: "CA",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-novus", key: false,
    tags: ["Medical negligence", "Operating and substantial cause", "Medical"],
    gist: "A man shoots another man in a takeaway, and the victim later dies from a complication caused by medical treatment.",
    principle: "Medical negligence breaks the chain of causation only if it is so independent of the defendant's acts, and so potent, that it makes the defendant's contribution insignificant.",
    facts: "Cheshire shot a man in a chip shop in the leg and stomach. In hospital, doctors carried out a tracheotomy. Weeks later the victim died because of a breathing problem caused by the tracheotomy, which the doctors had not noticed.",
    held: "The Court of Appeal upheld the murder conviction. The shooting remained a significant cause, and negligent treatment only breaks the chain if it is so extraordinary that the original wound is merely part of the history.",
    significance: "A leading case on novus actus interveniens and medical negligence. It follows Smith and Jordan.",
    links: ["r-v-smith-1959", "r-v-malcherek-and-steel-1981"]
  },
  {
    id: "r-v-malcherek-and-steel-1981", name: "R v Malcherek and Steel", cite: "[1981] 1 WLR 690", year: 1981, court: "CA",
    area: "criminal", topic: "cl-actus-reus", sub: "ar-novus", key: false,
    tags: ["Life support", "Medical", "Operating and substantial cause"],
    gist: "Two attackers inflict very serious injuries on victims, who are put on life support and later have the machines turned off when they are declared brain dead.",
    principle: "Switching off a life-support machine, once the victim is brain dead, does not break the chain of causation from the defendant's attack.",
    facts: "Malcherek stabbed his wife, who was put on a ventilator. Steel attacked a woman and left her with severe head injuries. In both cases, doctors turned off the machines after tests showed brain death. The attackers argued that the doctors had caused the deaths.",
    held: "The Court of Appeal upheld both convictions. The original injuries were still the operating and substantial cause of death, and the doctors' decision to switch off the machine did not break the chain of causation.",
    significance: "Settles the legal position on life support and causation in homicide. Also shows the courts being slow to find an intervening act in medical treatment.",
    links: ["r-v-cheshire-1991"]
  },
  {
    id: "sherras-v-de-rutzen-1895", name: "Sherras v De Rutzen", cite: "[1895] 1 QB 918", year: 1895, court: "DC",
    area: "criminal", topic: "cl-strict", sub: "sl-presumption", key: false,
    tags: ["Presumption of mens rea", "Licensing", "Police"],
    gist: "A pub landlord serves a drink to a police officer who has taken off his armband to show that he is off duty.",
    principle: "There is a presumption that mens rea is required, so an honest and reasonable mistake can be a defence to an offence that does not expressly say so.",
    facts: "Sherras, a publican, was charged with serving alcohol to a police constable on duty. The officer had removed his arm badge. Sherras reasonably believed the constable was off duty.",
    held: "The Divisional Court quashed the conviction. The offence had no wording to exclude mens rea, and there is a presumption that Parliament intends a guilty mind to be required. He reasonably believed the officer was off duty.",
    significance: "The origin of the presumption of mens rea. It is contrasted with Cundy v Le Cocq, where the court found a strict liability offence.",
    links: ["cundy-v-le-cocq-1884", "sweet-v-parsley-1969"]
  },
  {
    id: "b-v-dpp-2000", name: "B v DPP", cite: "[2000] 2 AC 428", year: 2000, court: "HL",
    area: "criminal", topic: "cl-strict", sub: "sl-presumption", key: false,
    tags: ["Presumption of mens rea", "Children", "Honest belief"],
    gist: "A 15-year-old boy asks a 13-year-old girl to perform a sex act on a bus, believing she is over 14.",
    principle: "The presumption of mens rea applies unless Parliament clearly excludes it, and the more serious the offence, the stronger the presumption.",
    facts: "B, aged 15, repeatedly asked a 13-year-old girl on a bus to perform a sex act. He said that he honestly believed she was over 14. He was charged with inciting a child under 14 to commit an act of gross indecency, which did not mention his belief.",
    held: "The House of Lords quashed the conviction. The presumption of mens rea could be displaced only by express words or necessary implication. The offence was not strict, and an honest belief that the girl was older was a defence.",
    significance: "A leading modern authority on the presumption of mens rea. It was followed in R v K (2001).",
    links: ["sweet-v-parsley-1969"]
  },
  {
    id: "smedleys-ltd-v-breed-1974", name: "Smedleys Ltd v Breed", cite: "[1974] AC 839", year: 1974, court: "HL",
    area: "criminal", topic: "cl-strict", sub: "sl-absolute", key: false,
    tags: ["Consumer", "Food safety", "Regulatory"],
    gist: "A caterpillar is found in a tin of peas that a food company had processed with every reasonable precaution.",
    principle: "A regulatory offence of selling food not of the quality demanded is one of strict liability, even though the producer took care.",
    facts: "A customer found a caterpillar in a tin of peas produced by Smedleys. The company had taken care over its production process. It was prosecuted under the Food and Drugs Act 1955 for selling food not of the quality demanded.",
    held: "The House of Lords upheld the conviction. The offence was one of strict liability, so the company's care in production did not avoid liability.",
    significance: "An example of strict liability in consumer protection, where the aim is to maintain high standards. Compare Alphacell, another strict liability case.",
    links: ["alphacell-ltd-v-woodward-1972", "pharmaceutical-society-of-great-britain-v-storkwain-ltd-1986"]
  }
);
