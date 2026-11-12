/* Tort (additions): duty, breach, causation, remoteness, psychiatric injury, economic loss. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "anns-v-merton-london-borough-council-1977", name: "Anns v Merton London Borough Council", cite: "[1978] AC 728", year: 1977, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-duty", key: false,
    tags: ["Two-stage test", "Overruled", "Public authority"],
    gist: "Tenants of a block of maisonettes find the foundations too shallow, and sue the council that was supposed to inspect them.",
    principle: "A duty of care arises where there is sufficient proximity, so that harm is foreseeable, unless policy factors limit it. This approach was later rejected.",
    facts: "Merton Council approved plans for a block of maisonettes and was responsible for inspecting the foundations. They were built too shallow, and cracks appeared. The tenants sued the council for negligent inspection.",
    held: "The House of Lords held that the council could owe a duty. Lord Wilberforce set a two-stage test: first, was there a relationship of proximity such that harm was foreseeable; second, was there any reason to limit that duty.",
    significance: "The two-stage test greatly widened liability, and was criticised. It was departed from in Caparo and overruled in Murphy v Brentwood DC (1990).",
    links: ["murphy-v-brentwood-district-council-1990", "caparo-industries-plc-v-dickman-1990"]
  },
  {
    id: "home-office-v-dorset-yacht-co-ltd-1970", name: "Home Office v Dorset Yacht Co Ltd", cite: "[1970] AC 1004", year: 1970, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-public", key: false,
    tags: ["Public authority", "Third party", "Borstal"],
    gist: "Young offenders on a supervised work trip escape from an island at night, steal a yacht, and wreck other boats in the bay.",
    principle: "A defendant can owe a duty to prevent a third party from causing foreseeable damage if there is a special relationship of control over that person.",
    facts: "Borstal trainees were working on Brownsea Island, supervised by officers who went to bed and left them unattended. Seven escaped, took a yacht and crashed it into the claimant's yacht. The owner sued the Home Office.",
    held: "The House of Lords held that the Home Office could be liable. The officers had control over the trainees and the damage was a foreseeable result of letting them escape. The claim was not struck out.",
    significance: "A key case on liability for the acts of third parties, relying on control and foreseeability.",
    links: ["stovin-v-wise-1996"]
  },
  {
    id: "stovin-v-wise-1996", name: "Stovin v Wise", cite: "[1996] AC 923", year: 1996, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-public", key: false,
    tags: ["Public authority", "Omissions", "Dissent", "Motoring"],
    gist: "A motorcyclist is injured at a road junction with a bank blocking visibility, and sues the council for not removing the bank.",
    principle: "A public authority is not liable for failing to use a statutory power unless it would have been irrational not to use it and there are exceptional grounds.",
    facts: "Stovin, a motorcyclist, was badly hurt in a collision with Wise at a junction with poor visibility caused by a bank of earth. The council had known about the danger and had decided to remove the bank but had not done so.",
    held: "The House of Lords held by a majority that the council was not liable. A power to act does not create a duty, and the council's failure to exercise its power was not irrational. Lord Nicholls dissented.",
    significance: "Restricts liability of public authorities for omissions. It has been followed in Gorringe v Calderdale (2004).",
    links: ["home-office-v-dorset-yacht-co-ltd-1970", "kent-v-griffiths-2000"]
  },
  {
    id: "kent-v-griffiths-2000", name: "Kent v Griffiths", cite: "[2001] QB 36", year: 2000, court: "CA",
    area: "tort", topic: "to-negligence", sub: "ng-public", key: false,
    tags: ["Medical", "Public authority", "Assumption of responsibility"],
    gist: "An ambulance called for a woman having a severe asthma attack takes far longer than promised to arrive, and she suffers a respiratory arrest.",
    principle: "Once an ambulance service accepts a call, it owes a duty to the patient and is not protected by the public-policy reasons that cover the police and fire brigade.",
    facts: "A doctor called an ambulance for Mrs Kent, who was having an asthma attack. The ambulance control room said it would arrive in minutes, but it took much longer. She suffered a respiratory arrest and permanent brain damage.",
    held: "The Court of Appeal held the ambulance service liable. By accepting the call it assumed responsibility for her and was part of the health service. The delay was unexplained and caused her harm.",
    significance: "Shows when an emergency service owes a duty, in contrast with Hill and Capital and Counties v Hampshire CC.",
    links: ["hill-v-chief-constable-of-west-yorkshire-1988", "stovin-v-wise-1996"]
  },
  {
    id: "latimer-v-aec-ltd-1953", name: "Latimer v AEC Ltd", cite: "[1953] AC 643", year: 1953, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-breach", key: false,
    tags: ["Cost of precautions", "Employment", "Flood"],
    gist: "A factory floor is left slippery after a flood, and a worker slips even though sawdust was spread, and sues his employer.",
    principle: "A defendant is not required to take precautions whose cost is out of proportion to the risk of harm.",
    facts: "Heavy rain flooded a factory and left an oily film on the floor. The employer spread sawdust on most of it but not everywhere. Latimer slipped on an untreated patch and was hurt. He said the factory should have been closed.",
    held: "The House of Lords held that the employer was not in breach. The risk was not so great as to make it reasonable to close the factory, and the employer had taken sensible measures.",
    significance: "A key case on the cost and practicality of precautions as a factor in breach of duty.",
    links: ["bolton-v-stone-1951", "watt-v-hertfordshire-county-council-1954"]
  },
  {
    id: "watt-v-hertfordshire-county-council-1954", name: "Watt v Hertfordshire County Council", cite: "[1954] 1 WLR 835", year: 1954, court: "CA",
    area: "tort", topic: "to-negligence", sub: "ng-breach", key: false,
    tags: ["Emergency services", "Social utility", "Employment"],
    gist: "A firefighter is injured when a heavy jack slides in a lorry that is carrying it to rescue a trapped woman.",
    principle: "The social value of the activity can justify taking a greater risk, so a defendant acting in an emergency is judged less strictly.",
    facts: "A woman was trapped under a heavy vehicle. The fire crew needed a heavy lifting jack, which was loaded onto an ordinary lorry because the special vehicle was not available. During the journey, the jack slid and injured Watt, a fireman.",
    held: "The Court of Appeal held that the fire authority was not liable. The risk of saving a life justified the risk taken.",
    significance: "A classic example of the utility of the defendant's conduct as a factor in breach of duty.",
    links: ["latimer-v-aec-ltd-1953"]
  },
  {
    id: "roe-v-minister-of-health-1954", name: "Roe v Minister of Health", cite: "[1954] 2 QB 66", year: 1954, court: "CA",
    area: "tort", topic: "to-negligence", sub: "ng-breach", key: false,
    tags: ["Medical", "State of knowledge", "No hindsight"],
    gist: "Two patients are paralysed after a spinal injection of anaesthetic that had been contaminated by disinfectant seeping through invisible cracks in the ampoule.",
    principle: "Breach is judged by the standard of knowledge at the time of the act, and not with hindsight.",
    facts: "Roe and another patient were given a spinal anaesthetic before minor operations. The anaesthetic had been stored in a phenol disinfectant, which had passed through invisible cracks in the glass ampoules. Both patients were left paralysed.",
    held: "The Court of Appeal held that the hospital was not negligent. The risk of this contamination was not known at the time, so the staff had not breached their duty by failing to guard against it.",
    significance: "Shows that the standard of care is based on what was known at the time of the event. Frequently quoted as warning against being wise after the event.",
    links: ["bolam-v-friern-hospital-management-committee-1957"]
  },
  {
    id: "mullin-v-richards-1998", name: "Mullin v Richards", cite: "[1998] 1 WLR 1304", year: 1998, court: "CA",
    area: "tort", topic: "to-negligence", sub: "ng-breach", key: false,
    tags: ["Children", "Standard of care", "School"],
    gist: "Two schoolgirls play at sword-fighting with plastic rulers, and one snaps and a fragment hits the other in the eye.",
    principle: "A child is judged by the standard of an ordinarily prudent child of the same age, and not by the standard of an adult.",
    facts: "Two 15-year-old girls were fencing with plastic rulers in a school lesson. One ruler snapped and a piece went into Mullin's eye and blinded her. She sued the other girl.",
    held: "The Court of Appeal held that neither was liable. The standard to apply to the girl was that of an ordinary 15-year-old, and such a child would not have realised that there was a risk of injury.",
    significance: "A leading case on the standard of care for children. It is contrasted with the objective adult standard in Nettleship.",
    links: ["nettleship-v-weston-1971"]
  },
  {
    id: "mcghee-v-national-coal-board-1972", name: "McGhee v National Coal Board", cite: "[1973] 1 WLR 1", year: 1972, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-factual", key: false,
    tags: ["Material increase in risk", "Employment", "Dermatitis"],
    gist: "A brick-kiln worker with no washing facilities cycles home covered in dust and later develops dermatitis, and cannot prove which exposure caused it.",
    principle: "A defendant who materially increases the risk of the harm that the claimant suffers can be liable even if the breach cannot be shown to be the but-for cause.",
    facts: "McGhee worked cleaning brick kilns and was covered in dust. His employer did not provide washing facilities, so he cycled home dirty. He developed dermatitis. Medical evidence said that the extra time with dust on his skin increased the risk but could not prove it caused the disease.",
    held: "The House of Lords held the employer liable. Failing to provide showers had materially increased the risk of dermatitis, and that was treated as equivalent to a material contribution to the harm.",
    significance: "An exception to the but-for test. Its scope was discussed in Wilsher and then used in Fairchild.",
    links: ["wilsher-v-essex-area-health-authority-1988", "fairchild-v-glenhaven-funeral-services-ltd-2002"]
  },
  {
    id: "wilsher-v-essex-area-health-authority-1988", name: "Wilsher v Essex Area Health Authority", cite: "[1988] AC 1074", year: 1988, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-factual", key: false,
    tags: ["Medical", "Children", "Multiple causes"],
    gist: "A premature baby is given too much oxygen by mistake and later goes blind, but he also had several other conditions that could have caused it.",
    principle: "Where there are several possible causes of the harm, the claimant must still prove that the defendant's breach caused it, and McGhee did not change the but-for test.",
    facts: "Martin Wilsher was born prematurely and given excess oxygen because of a doctor's mistake. He later developed an eye condition and became nearly blind. The excess oxygen was one of five possible causes of this condition.",
    held: "The House of Lords ordered a retrial. The claimant must show that the breach caused the harm, and McGhee was not authority for the idea that increased risk alone is enough. The court could not assume it was the cause.",
    significance: "Limits the principle in McGhee, and is a leading case on proof of causation where there are multiple causes.",
    links: ["mcghee-v-national-coal-board-1972"]
  },
  {
    id: "bonnington-castings-ltd-v-wardlaw-1956", name: "Bonnington Castings Ltd v Wardlaw", cite: "[1956] AC 613", year: 1956, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-factual", key: false,
    tags: ["Material contribution", "Employment", "Dust"],
    gist: "A foundry worker develops lung disease from silica dust, some from a breach by his employer and some from dust that the employer was not at fault for.",
    principle: "A defendant is liable if the breach made a material contribution to the harm, which means more than a minimal one, even if there were other causes.",
    facts: "Wardlaw worked in a foundry and breathed in silica dust, which gave him pneumoconiosis. Some of the dust came from pneumatic hammers where the employer was in breach, and some came from grinders for which there was no breach.",
    held: "The House of Lords held the employer liable. The dust from the guilty source materially contributed to the disease, and it was not necessary for the claimant to show that it was the sole cause.",
    significance: "A leading case on cumulative causes, where the breach made a material contribution to the disease. Its reach was debated in Wilsher and Fairchild.",
    links: ["mcghee-v-national-coal-board-1972"]
  },
  {
    id: "hotson-v-east-berkshire-area-health-authority-1987", name: "Hotson v East Berkshire Area Health Authority", cite: "[1987] AC 750", year: 1987, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-factual", key: false,
    tags: ["Medical", "Loss of chance", "Children"],
    gist: "A boy who falls from a tree has his injury wrongly diagnosed for five days, and he ends up with a permanent disability that he may have suffered anyway.",
    principle: "Causation is decided on the balance of probabilities, so a loss of a chance of a better outcome is not recoverable in personal injury claims.",
    facts: "Hotson, aged 13, fell from a tree and injured his hip. The hospital negligently failed to diagnose it for five days. He developed a permanent disability. The judge found a 25% chance that prompt treatment would have avoided it and a 75% chance he would have suffered it anyway.",
    held: "The House of Lords refused his claim. On the balance of probabilities the injury was already going to cause the disability, so the delay had not caused it. The 25% chance was not compensable.",
    significance: "The all-or-nothing approach to causation in medical cases. It was confirmed in Gregg v Scott (2005).",
    links: ["barnett-v-chelsea-and-kensington-hospital-management-committee-1968"]
  },
  {
    id: "knightley-v-johns-1981", name: "Knightley v Johns", cite: "[1982] 1 WLR 349", year: 1981, court: "CA",
    area: "tort", topic: "to-negligence", sub: "ng-novus", key: false,
    tags: ["Novus actus interveniens", "Police", "Motoring"],
    gist: "After a crash in a tunnel, a police inspector makes a serious mistake that sends another officer back against the traffic, and he is knocked off his motorcycle.",
    principle: "A third party's negligent act breaks the chain of causation if it is unforeseeable, rather than a natural consequence of the first defendant's act.",
    facts: "Johns crashed his car in a road tunnel. A police inspector, in breach of standing orders, told a motorcyclist officer to ride back against the flow of traffic to close the tunnel. Knightley was hit and injured. He sued Johns.",
    held: "The Court of Appeal held that Johns was not liable. The inspector's mistake was a fresh intervening act that broke the chain. It was not reasonably foreseeable that a senior officer would make such an error.",
    significance: "Shows when negligent intervention by a third party, particularly an emergency service, breaks the chain of causation.",
    links: ["mckew-v-holland-and-hannen-and-cubitts-scotland-ltd-1969"]
  },
  {
    id: "re-polemis-and-furness-withy-and-co-ltd-1921", name: "Re Polemis and Furness, Withy & Co Ltd", cite: "[1921] 3 KB 560", year: 1921, court: "CA",
    area: "tort", topic: "to-negligence", sub: "ng-remoteness", key: false,
    tags: ["Directness test", "Overruled", "Fire"],
    gist: "A stevedore drops a plank into the hold of a ship, and it sparks, setting fire to petrol vapour and destroying the vessel.",
    principle: "A defendant is liable for all direct consequences of a negligent act, whether or not they were foreseeable. This was later overruled.",
    facts: "Workers unloading a ship chartered by the defendants dropped a plank into the hold. It struck something and caused a spark. This ignited petrol vapour that had built up, and the ship was destroyed in the fire.",
    held: "The Court of Appeal held the charterers liable for the whole loss. Some damage from dropping the plank was foreseeable, and once negligence was shown the defendant was liable for all direct consequences.",
    significance: "The old directness test of remoteness, replaced by the foreseeability test in The Wagon Mound (No 1).",
    links: ["overseas-tankship-uk-ltd-v-morts-dock-and-engineering-co-ltd-the-wagon-mound-no-1-1961"]
  },
  {
    id: "the-wagon-mound-no-2-1966", name: "Overseas Tankship (UK) Ltd v The Miller Steamship Co (The Wagon Mound (No 2))", cite: "[1967] 1 AC 617", year: 1966, court: "PC",
    area: "tort", topic: "to-negligence", sub: "ng-remoteness", key: false,
    tags: ["Foreseeability", "Small risk", "Oil spill"],
    gist: "Ship owners whose vessels are burnt in the same oil fire sue the owners of the Wagon Mound, with better evidence about how likely fire was.",
    principle: "A defendant is liable if damage of that type was a real, even if small, risk that a reasonable person would not ignore, since eliminating it would cost little.",
    facts: "The Wagon Mound spilled oil in Sydney Harbour, and welding sparks ignited it, burning the claimants' ships. The claimants' ships were damaged in the fire. The evidence showed that furnace oil spilled on water could catch fire, a risk that was real though small.",
    held: "The Privy Council held the defendants liable in negligence. The risk of fire was a real one and a reasonable person would have taken the simple step of preventing the spill, so the damage was not too remote.",
    significance: "Distinguishes Bolton v Stone: the risk was small but cheap to avoid. It refines the foreseeability test for remoteness.",
    links: ["overseas-tankship-uk-ltd-v-morts-dock-and-engineering-co-ltd-the-wagon-mound-no-1-1961", "bolton-v-stone-1951"]
  },
  {
    id: "mcloughlin-v-obrian-1982", name: "McLoughlin v O'Brian", cite: "[1983] 1 AC 410", year: 1982, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-psych", key: false,
    tags: ["Secondary victim", "Aftermath", "Policy"],
    gist: "A mother is told that her family have been hurt in a road crash and sees them in hospital, covered in blood and badly injured, about two hours later.",
    principle: "A secondary victim may recover if psychiatric harm was foreseeable, based on the closeness of the relationship, the proximity to the event or its aftermath, and the way the shock was caused.",
    facts: "Mrs McLoughlin's husband and children were in a serious road accident caused by a negligent lorry driver. She was at home, two miles away. She was told, and saw them in hospital about two hours later, still in a terrible state. She developed severe psychiatric illness.",
    held: "The House of Lords allowed her claim. The hospital scene was part of the immediate aftermath of the crash, and her illness was a foreseeable result. The policy factors set out by Lord Wilberforce were not a bar to recovery.",
    significance: "Extended liability to the “aftermath” of an incident. It was a basis for the control mechanisms in Alcock.",
    links: ["alcock-v-chief-constable-of-south-yorkshire-1991", "bourhill-v-young-1942"]
  },
  {
    id: "bourhill-v-young-1942", name: "Bourhill v Young", cite: "[1943] AC 92", year: 1942, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-psych", key: false,
    tags: ["Foreseeability", "Ordinary fortitude", "Motoring"],
    gist: "A pregnant woman hears a motorcycle crash nearby, sees the blood on the road afterwards, and suffers a stillbirth.",
    principle: "A duty is owed only to those who are in the area of foreseeable danger, and there is no duty to someone of unusual sensitivity who is not.",
    facts: "A motorcyclist was speeding and was killed in a collision. Mrs Bourhill was getting off a tram about 45 feet away and heard the crash. She did not see it but later went to see the scene and saw blood. She was eight months pregnant and her baby was stillborn.",
    held: "The House of Lords held that the motorcyclist did not owe her a duty of care. She was outside the area of foreseeable danger and the possibility that someone so far away would suffer shock was too remote.",
    significance: "An early case limiting claims for nervous shock. It is relied on for the idea that people are expected to have reasonable fortitude.",
    links: ["mcloughlin-v-obrian-1982"]
  },
  {
    id: "murphy-v-brentwood-district-council-1990", name: "Murphy v Brentwood District Council", cite: "[1991] 1 AC 398", year: 1990, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-economic", key: true,
    tags: ["Pure economic loss", "Overruled", "Public authority"],
    gist: "A buyer finds that his new house has defective foundations because the council approved the plans negligently, and he can only sell it at a big loss.",
    principle: "The cost of repairing a defect in a building is pure economic loss and is not recoverable in negligence from a council or builder.",
    facts: "Murphy bought a house built on a landfill. The foundations were inadequate and cracked. The council had approved the plans on the advice of engineers who were negligent. Murphy sold the house for much less than its value and sued the council.",
    held: "The House of Lords held that the council was not liable. The loss was the cost of repairing the building, which is pure economic loss. It overruled Anns.",
    significance: "A key case on economic loss. It shows the House of Lords using the Practice Statement to overrule one of its own decisions.",
    links: ["anns-v-merton-london-borough-council-1977"]
  },
  {
    id: "smith-v-eric-s-bush-1989", name: "Smith v Eric S Bush", cite: "[1990] 1 AC 831", year: 1989, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-economic", key: false,
    tags: ["Negligent valuation", "Disclaimer", "Consumer"],
    gist: "A building society's surveyor carries out a quick valuation of a house for a mortgage, misses a serious defect, and the buyer relies on it.",
    principle: "A valuer who knows a buyer will rely on the report owes the buyer a duty, and a disclaimer is only effective if it is reasonable under the Unfair Contract Terms Act 1977.",
    facts: "Mrs Smith applied for a mortgage and paid for a valuation. The surveyor, Bush, failed to notice a serious defect in the property. The report had a disclaimer. She bought the house and the defect later caused her loss.",
    held: "The House of Lords held that the surveyor owed her a duty. It was obvious that a buyer on a modest income would rely on it. The disclaimer failed the reasonableness test, so he was liable.",
    significance: "A leading case on negligent misstatement after Hedley Byrne. It shows the effect of the 1977 Act on disclaimers.",
    links: ["hedley-byrne-and-co-ltd-v-heller-and-partners-ltd-1963"]
  },
  {
    id: "henderson-v-merrett-syndicates-ltd-1994", name: "Henderson v Merrett Syndicates Ltd", cite: "[1995] 2 AC 145", year: 1994, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-economic", key: false,
    tags: ["Assumption of responsibility", "Concurrent liability", "Lloyd's"],
    gist: "Investors in an insurance market, who lose large sums, sue the agents managing their money for negligence, although they also have contracts with them.",
    principle: "Where there is an assumption of responsibility and reliance, a claimant may sue in tort for economic loss even if there is also a contract.",
    facts: "The claimants were Names at Lloyd's, who invested in insurance syndicates and lost heavily. They sued the agents who managed their underwriting for negligence.",
    held: "The House of Lords held that the agents owed a duty of care in tort to all the Names. The agents had assumed responsibility for their work and the Names had relied on them. Liability in contract and tort could exist at the same time.",
    significance: "Confirmed the assumption of responsibility test from Hedley Byrne and concurrent liability in contract and tort.",
    links: ["hedley-byrne-and-co-ltd-v-heller-and-partners-ltd-1963", "white-v-jones-1995"]
  },
  {
    id: "white-v-jones-1995", name: "White v Jones", cite: "[1995] 2 AC 207", year: 1995, court: "HL",
    area: "tort", topic: "to-negligence", sub: "ng-economic", key: false,
    tags: ["Wills", "Dissent", "Assumption of responsibility", "Family"],
    gist: "A solicitor delays drafting a new will and the client dies before it is signed, leaving two daughters without the money they were meant to receive.",
    principle: "A solicitor can owe a duty to intended beneficiaries of a will, if his negligence causes them to lose the benefit, since otherwise no one could sue.",
    facts: "Mr Barber cut out his daughters from his will after a quarrel. They were reconciled and he instructed his solicitors to prepare a new will leaving them each £9,000. The solicitors delayed for weeks and Barber died before it was made.",
    held: "The House of Lords held by a majority that the solicitors were liable to the daughters. Without a duty to them, the solicitor's negligence would go unpunished, and the loss would be unremedied. Two judges dissented.",
    significance: "A well-known extension of liability for pure economic loss, and an application of the assumption of responsibility principle.",
    links: ["henderson-v-merrett-syndicates-ltd-1994"]
  }
);
