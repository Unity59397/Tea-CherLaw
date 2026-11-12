/* Criminal law: insanity, automatism, intoxication. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "mnaghtens-case-1843", name: "M'Naghten's Case", cite: "(1843) 10 Cl & Fin 200", year: 1843, court: "HL",
    area: "criminal", topic: "cl-mental-defences", sub: "md-insanity", key: false,
    tags: ["M'Naghten Rules", "Delusion", "Insanity"],
    gist: "A man who believes the government is persecuting him shoots the Prime Minister's secretary, mistaking him for the Prime Minister.",
    principle: "A defendant is legally insane if a defect of reason, from a disease of the mind, meant he did not know what he was doing or that it was wrong.",
    facts: "Daniel M'Naghten shot and killed Edward Drummond, secretary to Sir Robert Peel, believing he was shooting Peel. Medical evidence showed he suffered from delusions. He was found not guilty by reason of insanity.",
    held: "The public outcry led the House of Lords to ask the judges for their opinion. They set out the M'Naghten Rules: a defect of reason from a disease of the mind meaning the defendant did not know the nature and quality of the act, or that it was wrong.",
    significance: "The rules are still the legal test for insanity. They are often criticised as outdated and too narrow because they ignore uncontrollable impulses and focus on reasoning only.",
    links: ["r-v-clarke-1972", "r-v-sullivan-1983"]
  },
  {
    id: "r-v-clarke-1972", name: "R v Clarke", cite: "[1972] 1 All ER 219", year: 1972, court: "CA",
    area: "criminal", topic: "cl-mental-defences", sub: "md-insanity", key: false,
    tags: ["Defect of reason", "Absent-mindedness", "Depression"],
    gist: "A depressed woman puts items in her own bag in a supermarket without paying and says she was not thinking about what she was doing.",
    principle: "A defect of reason means the power of reasoning is deprived, not merely that it was not used through absent-mindedness or confusion.",
    facts: "Mrs Clarke, who was suffering from depression, was accused of shoplifting. She said that she had put the items in her bag absent-mindedly. The judge ruled that her defence amounted to a plea of insanity, so she pleaded guilty.",
    held: "The Court of Appeal quashed her conviction. A defect of reason requires the power of reasoning to be impaired, and a failure to use powers one has is not enough. Her evidence did not show insanity.",
    significance: "Clarifies the “defect of reason” limb of the M'Naghten Rules and distinguishes lapses of concentration from insanity.",
    links: ["mnaghtens-case-1843"]
  },
  {
    id: "r-v-sullivan-1983", name: "R v Sullivan", cite: "[1984] AC 156", year: 1983, court: "HL",
    area: "criminal", topic: "cl-mental-defences", sub: "md-insanity", key: true,
    tags: ["Disease of the mind", "Epilepsy", "Internal factor"],
    gist: "An epileptic man kicks his elderly friend during the confused period after a seizure and seriously injures him.",
    principle: "A disease of the mind is any disease that affects the mind's faculties of reason, memory and understanding, however temporary or physical in origin.",
    facts: "Sullivan was an epileptic who kicked and seriously injured a friend while recovering from a seizure. He argued he was in a state of automatism. The judge said his evidence amounted to insanity and he pleaded guilty to the lesser offence.",
    held: "The House of Lords upheld the conviction. Epilepsy is a disease of the mind because it affects the faculties of reason, memory and understanding, whether permanent or transient. The correct verdict was not guilty by reason of insanity.",
    significance: "Authority for the “internal factor” approach to insanity. Heavily criticised because conditions such as epilepsy and diabetes are labelled “insanity”, with serious consequences.",
    links: ["r-v-quick-1973", "r-v-hennessy-1989"]
  },
  {
    id: "r-v-quick-1973", name: "R v Quick", cite: "[1973] QB 910", year: 1973, court: "CA",
    area: "criminal", topic: "cl-mental-defences", sub: "md-automatism", key: false,
    tags: ["External factor", "Insulin", "Medical"],
    gist: "A diabetic nurse assaults a patient after taking his insulin but not eating enough, and argues he was not in control.",
    principle: "Automatism caused by an external factor, such as insulin taken as prescribed, is non-insane automatism and leads to acquittal.",
    facts: "Quick was a psychiatric nurse and diabetic. He injured a patient while suffering a hypoglycaemic episode, having taken insulin but eaten little. The judge ruled that his defence was insanity, so he changed his plea.",
    held: "The Court of Appeal quashed the conviction. His condition was caused by the external factor of insulin rather than by his diabetes itself, so it was a case of non-insane automatism that should have gone to the jury.",
    significance: "Draws the line between internal and external causes of automatism, and so decides whether the defendant is acquitted or found insane.",
    links: ["r-v-sullivan-1983", "r-v-hennessy-1989"]
  },
  {
    id: "r-v-hennessy-1989", name: "R v Hennessy", cite: "[1989] 1 WLR 287", year: 1989, court: "CA",
    area: "criminal", topic: "cl-mental-defences", sub: "md-automatism", key: false,
    tags: ["Internal factor", "Diabetes", "Medical", "Motoring"],
    gist: "A diabetic who has not taken his insulin, and is stressed, takes a car and drives while disqualified and claims he was not aware.",
    principle: "Hyperglycaemia caused by diabetes itself is an internal cause, and stress or anxiety is not an external factor, so the defence is insanity.",
    facts: "Hennessy, a diabetic, failed to take insulin after a period of stress and illness and suffered hyperglycaemia. He took a car and drove while disqualified. He said he had been in a state of automatism.",
    held: "The Court of Appeal upheld the conviction. His state was caused by diabetes, which is an internal factor. Stress and anxiety are not external factors, so the only defence available was insanity, which he did not pursue.",
    significance: "The counterpart to Quick. Shows how the same condition can lead to different outcomes depending on whether the cause is insulin taken or insulin not taken.",
    links: ["r-v-quick-1973", "r-v-sullivan-1983"]
  },
  {
    id: "bratty-v-attorney-general-for-northern-ireland-1961", name: "Bratty v Attorney-General for Northern Ireland", cite: "[1963] AC 386", year: 1961, court: "HL",
    area: "criminal", topic: "cl-mental-defences", sub: "md-automatism", key: false,
    tags: ["Automatism", "Burden of proof"],
    gist: "A man strangles a young woman with her own stocking and says he blacked out and has no memory of it.",
    principle: "Automatism is an act done without any control of the mind, and the defendant must put forward enough evidence to raise it.",
    facts: "Bratty strangled a girl he had given a lift to. He claimed he had blacked out. Medical evidence suggested it might have been due to psychomotor epilepsy.",
    held: "The House of Lords upheld the murder conviction. A bare assertion of a blackout is not enough for automatism, and if the cause was psychomotor epilepsy it would be a disease of the mind and so a case of insanity.",
    significance: "Sets out the meaning of automatism and the requirement for evidence, and links it with the definition of disease of the mind.",
    links: ["r-v-sullivan-1983"]
  },
  {
    id: "attorney-generals-reference-no-2-of-1992-1993", name: "Attorney-General's Reference (No 2 of 1992)", cite: "[1994] QB 91", year: 1993, court: "CA",
    area: "criminal", topic: "cl-mental-defences", sub: "md-automatism", key: false,
    tags: ["Total loss of control", "Motoring", "Reflex"],
    gist: "A lorry driver on a motorway drives along the hard shoulder and kills two people, and says he was in a trance caused by the monotony of the road.",
    principle: "Automatism requires a total destruction of voluntary control, and impaired or reduced control is not enough.",
    facts: "A lorry driver drove for some distance along the hard shoulder of a motorway and ran into a parked vehicle, killing two people. He claimed he had been driving without awareness caused by the repetitive road.",
    held: "The Court of Appeal said automatism needs a complete destruction of voluntary control. Driving without awareness is not complete loss of control and cannot support the defence. Self-induced automatism may also not be available if the defendant was reckless.",
    significance: "A key limit on automatism and on the idea of “reflex” actions. Used with discussion of self-induced automatism.",
    links: ["bratty-v-attorney-general-for-northern-ireland-1961"]
  },
  {
    id: "dpp-v-majewski-1976", name: "DPP v Majewski", cite: "[1977] AC 443", year: 1976, court: "HL",
    area: "criminal", topic: "cl-mental-defences", sub: "md-intoxication", key: true,
    tags: ["Alcohol and drugs", "Basic intent", "Specific intent", "Policy"],
    gist: "A man on a binge of alcohol and drugs starts a fight in a pub and attacks the landlord and then the police.",
    principle: "Voluntary intoxication is no defence to a crime of basic intent, because becoming intoxicated is itself reckless.",
    facts: "Majewski took drugs and drank heavily. He attacked people in a pub and then the police who arrested him. He was convicted of assault occasioning ABH and assaulting police. He argued he lacked the mens rea because of intoxication.",
    held: "The House of Lords upheld the convictions. Voluntary intoxication can be a defence to a specific intent crime, where it prevents the defendant forming the intention. It is no defence to basic intent crimes, since being voluntarily intoxicated supplies the recklessness.",
    significance: "The foundation of the law on voluntary intoxication. It rests on public policy rather than on strict logic, and so is often criticised in evaluation.",
    links: ["r-v-kingston-1994", "r-v-hardie-1984"]
  },
  {
    id: "r-v-kingston-1994", name: "R v Kingston", cite: "[1995] 2 AC 355", year: 1994, court: "HL",
    area: "criminal", topic: "cl-mental-defences", sub: "md-intoxication", key: true,
    tags: ["Alcohol and drugs", "Involuntary intoxication", "Disinhibition"],
    gist: "A man's coffee is secretly drugged by a person trying to blackmail him, and he sexually assaults a boy while under its influence.",
    principle: "Involuntary intoxication is a defence only if the defendant lacked the mens rea. A drugged intent is still an intent.",
    facts: "Kingston had paedophilic tendencies that he normally kept in check. His drink was spiked by a man who wanted to blackmail him, and he indecently assaulted a 15-year-old boy. He said the drug had removed his inhibitions.",
    held: "The House of Lords upheld the conviction. If the defendant formed the intention, it does not matter that his inhibitions were lowered by involuntary intoxication, because the defence only operates where the mens rea is absent.",
    significance: "Settles the law on involuntary intoxication. It is criticised for convicting a defendant who is blameless in how the intoxication occurred.",
    links: ["dpp-v-majewski-1976"]
  },
  {
    id: "r-v-hardie-1984", name: "R v Hardie", cite: "[1984] 3 All ER 848", year: 1984, court: "CA",
    area: "criminal", topic: "cl-mental-defences", sub: "md-intoxication", key: false,
    tags: ["Alcohol and drugs", "Sedatives", "Valium"],
    gist: "A man who has just been left by his partner takes her Valium tablets to calm down and sets fire to a wardrobe in their flat.",
    principle: "The Majewski rule does not apply automatically to non-dangerous drugs such as sedatives. The question is whether the defendant was reckless in taking them.",
    facts: "Hardie took several Valium tablets belonging to his former partner after their relationship ended. Later he started a fire in a wardrobe in the flat. He was convicted of arson being reckless as to whether life was endangered.",
    held: "The Court of Appeal quashed his conviction. Valium is a sedative and not normally known to make people aggressive or unpredictable, so taking it is not necessarily reckless. The jury should have been asked whether he was reckless in taking it.",
    significance: "Shows that the intoxication rules depend on the type of drug. Used to illustrate the exceptions to the Majewski rule.",
    links: ["dpp-v-majewski-1976"]
  },
  {
    id: "r-v-ogrady-1987", name: "R v O'Grady", cite: "[1987] QB 995", year: 1987, court: "CA",
    area: "criminal", topic: "cl-mental-defences", sub: "md-intoxication", key: false,
    tags: ["Alcohol and drugs", "Mistake", "Self-defence"],
    gist: "A drunk man wakes to find his friend hitting him, hits back in what he thinks is self-defence, and the friend dies.",
    principle: "A defendant who makes a mistake about the need for self-defence because he was voluntarily intoxicated cannot rely on that mistake.",
    facts: "After a night of drinking cider, O'Grady and his friend went to sleep. O'Grady woke to find the friend hitting him. He hit back and the friend later died. He said he thought he was being attacked and was acting in self-defence.",
    held: "The Court of Appeal upheld the manslaughter conviction. A mistaken belief caused by voluntary intoxication cannot be relied on to support self-defence, because the rule in Majewski applies.",
    significance: "Shows how the intoxication rules affect other defences. It has been followed in later cases such as R v Hatton (2005).",
    links: ["dpp-v-majewski-1976"]
  }
);
