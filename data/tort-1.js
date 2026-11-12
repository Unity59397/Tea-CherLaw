/* Tort: negligence - duty of care, public authorities, breach. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "donoghue-v-stevenson-1932", name: "Donoghue v Stevenson", cite: "[1932] AC 562", year: 1932, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-duty", key: true,
    tags: ["Neighbour principle", "Consumer", "Dissent"],
    gist: "A woman drinks ginger beer from an opaque bottle bought by a friend, finds the remains of a snail in it, and falls ill.",
    principle: "A manufacturer owes a duty of care to the ultimate consumer of its products, based on the neighbour principle.",
    facts: "Mrs Donoghue drank ginger beer in a café in Paisley. It was bought by a friend in an opaque bottle. When she poured out the last of it, a decomposed snail came out. She became ill and sued the manufacturer, since she had no contract with the café.",
    held: "The House of Lords held by 3 to 2 that the manufacturer owed her a duty. Lord Atkin said you must take reasonable care to avoid acts or omissions that you can reasonably foresee would injure your neighbour, meaning those closely and directly affected by your acts.",
    significance: "The foundation of modern negligence. The neighbour principle was the starting point for the later tests in Anns and Caparo.",
    links: ["caparo-industries-plc-v-dickman-1990"]
  },
  {
    id: "caparo-industries-plc-v-dickman-1990", name: "Caparo Industries plc v Dickman", cite: "[1990] 2 AC 605", year: 1990, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-duty", key: true,
    tags: ["Three-stage test", "Auditors", "Economic loss"],
    gist: "A company buys shares in a target after reading its audited accounts, which turn out to be wrong, and sues the auditors.",
    principle: "A duty of care in a new situation requires reasonable foreseeability of harm, a relationship of proximity, and that it is fair, just and reasonable to impose a duty.",
    facts: "Caparo owned shares in Fidelity and relied on audited accounts which overstated its profits. It bought more shares and took over the company. It then sued the auditors, claiming they had been negligent in preparing the accounts.",
    held: "The House of Lords found no duty. The accounts were prepared for the shareholders to supervise the company, not to help investors who were buying shares, so there was insufficient proximity and it would not be fair, just and reasonable.",
    significance: "The three-stage test was long seen as the general test for duty. In Robinson (2018) the Supreme Court said it applies only in novel situations and not to established categories.",
    links: ["robinson-v-chief-constable-of-west-yorkshire-police-2018"]
  },
  {
    id: "robinson-v-chief-constable-of-west-yorkshire-police-2018", name: "Robinson v Chief Constable of West Yorkshire Police", cite: "[2018] UKSC 4", year: 2018, court: "UKSC",
    area: "tort", topic: "to-negligence", sub: "ng-public", key: true,
    tags: ["Police", "Public authority", "Established duty"],
    gist: "An elderly woman is knocked to the ground when police officers tackle a drug suspect on a busy street in front of her.",
    principle: "Caparo's three-stage test is not a universal test. Where an established category of duty applies, the court should follow existing principles and precedent.",
    facts: "Police officers tried to arrest a suspected drug dealer in a busy shopping street. In the struggle, Mrs Robinson, a passer-by, was knocked over and injured. She sued the police for negligence and the force argued that police are not generally liable for failing to protect people.",
    held: "The Supreme Court held the police liable. The officers had created a foreseeable risk of injury through positive acts, so ordinary principles of negligence applied. The Caparo test is only for novel cases.",
    significance: "Restates the role of Caparo and sets a clear distinction between harm caused by police and a mere failure to protect.",
    links: ["hill-v-chief-constable-of-west-yorkshire-1988", "michael-v-chief-constable-of-south-wales-police-2015"]
  },
  {
    id: "hill-v-chief-constable-of-west-yorkshire-1988", name: "Hill v Chief Constable of West Yorkshire", cite: "[1989] AC 53", year: 1988, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-public", key: true,
    tags: ["Police", "Public authority", "Policy", "Yorkshire Ripper"],
    gist: "The mother of the last victim of a serial killer sues the police for failing to catch him before he struck again.",
    principle: "The police do not owe a duty of care to individual members of the public in investigating crime, partly for reasons of public policy.",
    facts: "Jacqueline Hill was murdered by Peter Sutcliffe, the Yorkshire Ripper. Her mother sued the police, claiming that mistakes in the investigation meant he was not caught earlier, and that they were negligent.",
    held: "The House of Lords struck out the claim. There was no proximity because Jacqueline was just one of a large class of potential victims. Public policy also meant police should not be diverted by fear of litigation from the task of catching criminals.",
    significance: "Established the general police immunity in negligence. It has been narrowed by later cases such as Robinson and criticised under Article 6 in Osman v UK.",
    links: ["michael-v-chief-constable-of-south-wales-police-2015", "robinson-v-chief-constable-of-west-yorkshire-police-2018"]
  },
  {
    id: "michael-v-chief-constable-of-south-wales-police-2015", name: "Michael v Chief Constable of South Wales Police", cite: "[2015] UKSC 2", year: 2015, court: "UKSC",
    area: "tort", topic: "to-negligence", sub: "ng-public", key: false,
    tags: ["Police", "Public authority", "Omissions", "Dissent"],
    gist: "A woman rings 999 saying her ex-partner has threatened to kill her, but police are slow to respond and he murders her.",
    principle: "Public bodies owe no duty to protect individuals from third-party harm unless there is an assumption of responsibility or they created the danger.",
    facts: "Joanna Michael called 999 and said her ex-partner was on his way to kill her. The call was passed between police forces and the response was delayed. He arrived and killed her. Her family sued the police in negligence and under the Human Rights Act.",
    held: "The Supreme Court held by 5 to 2 that there was no common law duty. The police did not create the danger or assume responsibility, and there is no general duty to protect from third parties. The Article 2 claim could continue.",
    significance: "A leading modern case on omissions and public authorities. The dissent of Lord Kerr and Lady Hale favoured liability on the facts.",
    links: ["hill-v-chief-constable-of-west-yorkshire-1988"]
  },
  {
    id: "bolam-v-friern-hospital-management-committee-1957", name: "Bolam v Friern Hospital Management Committee", cite: "[1957] 1 WLR 582", year: 1957, court: "HC",
    area: "tort", topic: "to-negligence", sub: "ng-breach", key: true,
    tags: ["Medical", "Professional standard", "Bolam test"],
    gist: "A mental health patient is given electric shock treatment without a relaxant drug or physical restraint and breaks bones in his pelvis.",
    principle: "A professional is not negligent if they act in accordance with a practice accepted as proper by a responsible body of professionals skilled in that field.",
    facts: "Mr Bolam, a voluntary patient with depression, was given electroconvulsive therapy. He was not given relaxant drugs or restrained and was not warned of the risk. He suffered fractures to his pelvis during the treatment.",
    held: "McNair J held that the doctor was not negligent. There was a body of medical opinion that supported the approach taken, and a doctor is not negligent merely because there is a body of opinion that would have done differently.",
    significance: "The test for breach of duty by professionals. It has been refined by Bolitho and, for patient consent, replaced by the Montgomery test.",
    links: ["bolitho-v-city-and-hackney-health-authority-1997"]
  },
  {
    id: "bolitho-v-city-and-hackney-health-authority-1997", name: "Bolitho v City and Hackney Health Authority", cite: "[1998] AC 232", year: 1997, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-breach", key: true,
    tags: ["Medical", "Children", "Logical basis"],
    gist: "A doctor fails to attend a child with breathing difficulties, and he suffers a cardiac arrest and brain damage.",
    principle: "A professional opinion that supports a practice must be capable of withstanding logical analysis, or the court need not accept it.",
    facts: "Patrick Bolitho, aged two, had breathing difficulties. A doctor was called but did not attend and a nurse did not intubate him. He suffered a cardiac arrest and brain damage. Experts disagreed about whether intubation would have been standard.",
    held: "The House of Lords held that the Bolam test applies, but a court can reject a body of opinion if it has no logical basis. On the facts the doctor's view was logical, and in any case the doctor would not have intubated the child, so there was no causation.",
    significance: "Prevents the Bolam test from allowing the medical profession to set its own standard. It is a key case for evaluating professional negligence.",
    links: ["bolam-v-friern-hospital-management-committee-1957"]
  },
  {
    id: "nettleship-v-weston-1971", name: "Nettleship v Weston", cite: "[1971] 2 QB 691", year: 1971, court: "CA",
    area: "tort", topic: "to-negligence", sub: "ng-breach", key: true,
    tags: ["Learner driver", "Objective standard", "Motoring"],
    gist: "A learner driver, on her third lesson with a friend supervising, crashes into a lamp post and injures the friend.",
    principle: "The standard of care is objective, so a learner driver must meet the standard of a reasonably competent and experienced driver.",
    facts: "Mrs Weston was a learner driver. Mr Nettleship, a friend, had checked that her insurance covered him and sat beside her. She lost control of the car and hit a lamp post, which broke his knee. He sued her.",
    held: "The Court of Appeal held that she was liable. Her inexperience could not lower the standard of care. It also rejected volenti: he had checked that his friend was insured and had not agreed to accept the risk of her negligence.",
    significance: "Shows the objective standard of care in negligence and that inexperience is no excuse. The rule is criticised as harsh, but it protects victims.",
    links: ["bolton-v-stone-1951"]
  },
  {
    id: "bolton-v-stone-1951", name: "Bolton v Stone", cite: "[1951] AC 850", year: 1951, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-breach", key: true,
    tags: ["Sport", "Probability of harm", "Cricket"],
    gist: "A passer-by is struck on the head outside a cricket ground by a ball that was hit over a high fence, a very rare event.",
    principle: "A defendant is not in breach of duty if the risk of harm is very small and was reasonably judged to be negligible.",
    facts: "Miss Stone was hit by a cricket ball hit out of the ground by a batsman. The fence was 17 feet high, and the ball travelled over 100 yards. In about 30 years, balls had gone out around six times, and no one had been injured.",
    held: "The House of Lords held that the cricket club was not negligent. The chance of injury was so small that a reasonable person would not have thought it worth taking further precautions.",
    significance: "A key case on the probability of harm as a factor in breach. Compare it with Miller v Jackson, where later events made the risk greater.",
    links: ["paris-v-stepney-borough-council-1951"]
  },
  {
    id: "paris-v-stepney-borough-council-1951", name: "Paris v Stepney Borough Council", cite: "[1951] AC 367", year: 1951, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-breach", key: false,
    tags: ["Employment", "Severity of harm", "Vulnerable claimant"],
    gist: "A workman who has only one good eye is blinded while using a hammer on a vehicle, and his employer does not provide goggles.",
    principle: "The seriousness of the harm that might result is relevant to the level of care required, including where the claimant is more vulnerable than most.",
    facts: "Paris worked as a garage hand and had sight in only one eye. While knocking a bolt with a hammer, a piece of metal flew into his good eye and blinded him. The council had not given him goggles, which were not usually given to workers doing that job.",
    held: "The House of Lords held the council liable. The risk of injury might have been small for an ordinary worker, but the consequence for a one-eyed man was far worse. The council knew about his condition and should have provided goggles.",
    significance: "Shows that the claimant's vulnerability and the seriousness of the potential harm affect what precautions are reasonable.",
    links: ["bolton-v-stone-1951"]
  }
);
