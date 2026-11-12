/* Criminal law: insanity, automatism, intoxication, duress, self-defence, consent (additions). */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "r-v-windle-1952", name: "R v Windle", cite: "[1952] 2 QB 826", year: 1952, court: "CA",
    area: "criminal", topic: "cl-mental-defences", sub: "md-insanity", key: false,
    tags: ["Wrong in law", "M'Naghten Rules", "Mental illness"],
    gist: "A man with a mental illness gives his wife an overdose of aspirin, and tells the police that he supposes they will hang him for it.",
    principle: "In the M'Naghten Rules, “wrong” means legally wrong, so a defendant who knew that the act was against the law cannot be insane.",
    facts: "Windle's wife was mentally unstable and often spoke of suicide. He gave her 100 aspirins and she died. A doctor said he suffered from a form of folie à deux. After the killing he said to the police, “I suppose they will hang me for this”.",
    held: "The Court of Criminal Appeal upheld the conviction. The words “wrong” in the Rules means contrary to law, and his remark showed that he knew that what he did was against the law.",
    significance: "The leading case on the meaning of “wrong” in the second limb of the M'Naghten Rules. It makes the test narrow.",
    links: ["mnaghtens-case-1843"]
  },
  {
    id: "r-v-kemp-1956", name: "R v Kemp", cite: "[1957] 1 QB 399", year: 1956, court: "HC",
    area: "criminal", topic: "cl-mental-defences", sub: "md-insanity", key: false,
    tags: ["Disease of the mind", "Physical cause", "Arteriosclerosis"],
    gist: "A man with a hardening of the arteries has a blackout and attacks his wife with a hammer.",
    principle: "A disease of the mind is a disease that affects the mind's functioning, and it does not matter whether the cause is mental or physical.",
    facts: "Kemp suffered from arteriosclerosis, which restricted blood flow to his brain. During a blackout, he attacked his wife with a hammer and caused her grievous bodily harm. He said that he could not remember what had happened.",
    held: "Devlin J held that the defence was insanity. The law is concerned with the mind's faculties of reason, memory and understanding, and it does not matter whether the cause was a disease of the brain or of the mind.",
    significance: "Established that physical illnesses affecting the mind can be a disease of the mind. This was developed in Sullivan and Hennessy.",
    links: ["r-v-sullivan-1983"]
  },
  {
    id: "r-v-burgess-1991", name: "R v Burgess", cite: "[1991] 2 QB 92", year: 1991, court: "CA",
    area: "criminal", topic: "cl-mental-defences", sub: "md-insanity", key: false,
    tags: ["Sleepwalking", "Internal factor", "Disease of the mind"],
    gist: "A man falls asleep on a sofa at a friend's flat, and in his sleep hits her with a bottle and a video recorder and grabs her by the throat.",
    principle: "Sleepwalking is caused by an internal factor, so it is a disease of the mind and the defence is insanity rather than automatism.",
    facts: "Burgess fell asleep while watching a video at a friend's flat. He got up and hit her on the head with a bottle and a video recorder and gripped her throat. He said he was sleepwalking and remembered nothing.",
    held: "The Court of Appeal held that the defence was insanity. The cause of sleepwalking was internal to him, not an external factor, and he was a danger who could repeat his behaviour. The special verdict of not guilty by reason of insanity was correct.",
    significance: "Applies the internal and external factor test. It is used to criticise the law as unfair on those with conditions such as sleepwalking.",
    links: ["r-v-t-1990", "r-v-sullivan-1983"]
  },
  {
    id: "r-v-t-1990", name: "R v T", cite: "[1990] Crim LR 256", year: 1990, court: "CCt",
    area: "criminal", topic: "cl-mental-defences", sub: "md-automatism", key: false,
    tags: ["External factor", "Post-traumatic stress", "Non-insane automatism"],
    gist: "A woman who was raped a few days earlier takes part in a robbery in a dazed, detached state.",
    principle: "Automatism caused by a severe external shock, such as a rape, can be non-insane automatism.",
    facts: "T had been raped three days before the robbery. She was suffering from post-traumatic stress disorder and was in a dissociative state. She took part in a robbery and later said she had no memory or control of what she was doing.",
    held: "The Crown Court held that the cause of her state was an external factor, the rape, so it was non-insane automatism and could be left to the jury. She was acquitted.",
    significance: "A well-known example of an external factor in automatism. It is a Crown Court ruling, so it is not binding, and it has been criticised.",
    links: ["r-v-quick-1973"]
  },
  {
    id: "r-v-bailey-1983", name: "R v Bailey", cite: "[1983] 1 WLR 760", year: 1983, court: "CA",
    area: "criminal", topic: "cl-mental-defences", sub: "md-automatism", key: false,
    tags: ["Self-induced automatism", "Diabetes", "Medical"],
    gist: "A diabetic man, who took his insulin but did not eat enough, hits his former partner's new boyfriend over the head with an iron bar.",
    principle: "Self-induced automatism is a defence to a specific intent crime unless the defendant was reckless, and it is no defence to a basic intent crime if he knew he risked losing control.",
    facts: "Bailey was a diabetic who took his insulin but did not eat. He suffered a hypoglycaemic episode and hit another man on the head with an iron bar. He said that he was in a state of automatism and was charged with wounding with intent.",
    held: "The Court of Appeal said the judge wrongly directed the jury that self-induced incapacity was no defence, when the question for a specific intent offence was whether Bailey had formed that intent. The appeal was dismissed, as there was no miscarriage of justice given that he armed himself and the medical evidence.",
    significance: "Deals with self-induced automatism from a medical condition. Compare it with Quick, where the defendant was not at fault.",
    links: ["r-v-quick-1973", "dpp-v-majewski-1976"]
  },
  {
    id: "r-v-sheehan-and-moore-1974", name: "R v Sheehan and Moore", cite: "[1975] 1 WLR 739", year: 1974, court: "CA",
    area: "criminal", topic: "cl-mental-defences", sub: "md-intoxication", key: false,
    tags: ["Alcohol and drugs", "Specific intent", "Direction to jury"],
    gist: "Two very drunk men pour petrol over a man and set him alight, and say they were too drunk to intend what they did.",
    principle: "Drunkenness is relevant only if it prevented the defendant forming the specific intent, and it is not a defence just because he would not have done it if sober.",
    facts: "Sheehan and Moore were drunk when they poured petrol on a man and set him on fire. The man died. They said that they were too drunk to form an intention to kill or cause serious harm.",
    held: "The Court of Appeal said that the judge should ask whether the defendants had formed the necessary intent, and the jury should be told that evidence of drunkenness is relevant only if it showed that they were unable to form it.",
    significance: "A leading authority on how a jury should approach intoxication and intent. It is often cited with Majewski and Gallagher.",
    links: ["dpp-v-majewski-1976"]
  },
  {
    id: "r-v-allen-1988", name: "R v Allen", cite: "[1988] Crim LR 698", year: 1988, court: "CA",
    area: "criminal", topic: "cl-mental-defences", sub: "md-intoxication", key: false,
    tags: ["Alcohol and drugs", "Involuntary intoxication", "Strength of drink"],
    gist: "A man drinks several glasses of home-made wine, which turns out to be much stronger than he expected, and later commits an offence.",
    principle: "A defendant who knowingly drinks alcohol is voluntarily intoxicated, even if he does not know how strong it is.",
    facts: "Allen drank a number of glasses of home-made wine, which was much stronger than he thought. He said he did not know how drunk it would make him. He later committed a sexual offence and argued that his intoxication was involuntary.",
    held: "The Court of Appeal held that his intoxication was voluntary. He knew he was taking alcohol, and ignorance of the strength did not make it involuntary.",
    significance: "A key case on the boundary between voluntary and involuntary intoxication. Drugs spiked in drinks, as in Kingston, are involuntary.",
    links: ["r-v-kingston-1994"]
  },
  {
    id: "r-v-lipman-1969", name: "R v Lipman", cite: "[1970] 1 QB 152", year: 1969, court: "CA",
    area: "criminal", topic: "cl-mental-defences", sub: "md-intoxication", key: false,
    tags: ["Alcohol and drugs", "Basic intent", "LSD"],
    gist: "A man on an LSD trip believes he is fighting snakes in a hole in the ground, and kills his girlfriend by pushing a sheet into her mouth.",
    principle: "Voluntary intoxication from drugs is no defence to a basic intent crime like manslaughter.",
    facts: "Lipman took LSD and thought that he was descending into the centre of the earth and fighting snakes. He killed his girlfriend by hitting her and stuffing a sheet into her mouth. He was convicted of manslaughter.",
    held: "The Court of Appeal upheld the conviction. Manslaughter is a crime of basic intent, and self-induced intoxication by drugs can supply the necessary mens rea.",
    significance: "An early application of the principle later confirmed in Majewski. It is often used to illustrate that drugs are treated like alcohol.",
    links: ["dpp-v-majewski-1976"]
  },
  {
    id: "dpp-v-beard-1919", name: "DPP v Beard", cite: "[1920] AC 479", year: 1919, court: "HL",
    area: "criminal", topic: "cl-mental-defences", sub: "md-intoxication", key: false,
    tags: ["Alcohol and drugs", "Specific intent", "Origin of rules"],
    gist: "A drunk man rapes a young girl and kills her by pressing his hand over her mouth.",
    principle: "Drunkenness is no defence to a crime, except where it prevents the defendant forming a specific intent.",
    facts: "Beard was drunk when he raped a girl and suffocated her by putting his hand over her mouth. He was convicted of murder and argued that he was too drunk to know what he was doing.",
    held: "Lord Birkenhead set out rules on drunkenness. It is no defence to a criminal charge in general, but evidence of drunkenness that makes a person incapable of forming the specific intent in a crime can be taken into account.",
    significance: "The origin of the distinction between specific and basic intent, which was developed in Majewski.",
    links: ["dpp-v-majewski-1976"]
  },
  {
    id: "dpp-for-northern-ireland-v-lynch-1975", name: "DPP for Northern Ireland v Lynch", cite: "[1975] AC 653", year: 1975, court: "HL",
    area: "criminal", topic: "cl-general-defences", sub: "gd-duress", key: false,
    tags: ["Overruled", "Murder", "Accomplice"],
    gist: "A man who drives gunmen to a place where they kill a police officer says he did so because they threatened to kill him.",
    principle: "Duress could be a defence to murder for a secondary party. This has been overruled.",
    facts: "Lynch drove IRA gunmen to a place where they murdered a police officer. He said he had been told that if he did not drive, he would be killed. He was convicted as a secondary party to murder.",
    held: "A majority of the House of Lords held that duress was available as a defence to a person charged with murder as a secondary party, and ordered a retrial.",
    significance: "Overruled in Howe (1987), which held that duress is never a defence to murder. A key case in the debate about whether duress should apply to murder.",
    links: ["r-v-howe-1986"]
  },
  {
    id: "r-v-hudson-and-taylor-1971", name: "R v Hudson and Taylor", cite: "[1971] 2 QB 202", year: 1971, court: "CA",
    area: "criminal", topic: "cl-general-defences", sub: "gd-duress", key: false,
    tags: ["Imminence", "Perjury", "Young defendants"],
    gist: "Two teenage girls change their evidence in court after a man in the public gallery had threatened to injure them if they gave evidence against his friend.",
    principle: "A threat does not have to be capable of being carried out immediately for duress to apply, and it can be enough that it is operating on the defendant's mind.",
    facts: "Hudson and Taylor, aged 17 and 19, were witnesses in a trial, and they gave false evidence. They said that a man with a reputation for violence had threatened to cut them up if they identified a defendant, and he was in the public gallery.",
    held: "The Court of Appeal quashed their convictions for perjury. The threat did not have to be immediately capable of being carried out, and the police could not have protected them from the threat while they were in court.",
    significance: "A leading case on the imminence of the threat in duress. It was later qualified in Abdul-Hussain.",
    links: ["r-v-graham-1981", "r-v-abdul-hussain-1998"]
  },
  {
    id: "r-v-conway-1988", name: "R v Conway", cite: "[1989] QB 290", year: 1988, court: "CA",
    area: "criminal", topic: "cl-general-defences", sub: "gd-duress", key: false,
    tags: ["Duress of circumstances", "Motoring"],
    gist: "A driver drives off recklessly when two men approach his car, because his passenger is afraid of being attacked.",
    principle: "Duress of circumstances is a defence where the defendant acts to avoid death or serious injury from the circumstances, and the same test applies as for duress by threats.",
    facts: "Conway was in a car with a passenger who had previously been attacked. Two men approached, and the passenger shouted that they were the men who had attacked him before. Conway drove off and was charged with reckless driving.",
    held: "The Court of Appeal quashed the conviction. The defence of necessity in the form of duress of circumstances was available where there was a reasonable fear of death or serious bodily harm, and the defendant acted to avoid it.",
    significance: "Recognised duress of circumstances as a separate defence. It was followed in Martin (1989) and Abdul-Hussain.",
    links: ["r-v-abdul-hussain-1998"]
  },
  {
    id: "r-v-abdul-hussain-1998", name: "R v Abdul-Hussain", cite: "[1999] Crim LR 570", year: 1998, court: "CA",
    area: "criminal", topic: "cl-general-defences", sub: "gd-duress", key: false,
    tags: ["Duress of circumstances", "Hijacking", "Imminence"],
    gist: "Men who fled Iraq because they feared execution hijack a plane to get to safety, and then say that they had no choice.",
    principle: "Duress of circumstances can apply even if the threat is not immediate, if it was imminent in the sense that it was operating on the defendant's mind and he could not avoid it.",
    facts: "Several Shiite Muslims fled Iraq and, in Sudan, feared they would be returned to face execution. They hijacked a plane and ended up at Stansted. They said that they acted to avoid a serious threat to their lives.",
    held: "The Court of Appeal allowed the appeal, as the judge had treated imminence too narrowly. The peril had to be imminent, but this meant it was operating on their minds so as to overbear their wills, and not that it had to be about to happen immediately.",
    significance: "A key case on imminence in duress of circumstances. The courts remain cautious about extending this defence.",
    links: ["r-v-conway-1988", "r-v-hudson-and-taylor-1971"]
  },
  {
    id: "attorney-generals-reference-no-2-of-1983-1983", name: "Attorney-General's Reference (No 2 of 1983)", cite: "[1984] QB 456", year: 1983, court: "CA",
    area: "criminal", topic: "cl-general-defences", sub: "gd-selfdefence", key: false,
    tags: ["Property", "Preparing to defend", "Riots"],
    gist: "A shopkeeper whose shop has been attacked in a riot makes petrol bombs in case he is attacked again.",
    principle: "Self-defence may be available for acts of preparing to defend oneself, if the defendant genuinely feared an imminent attack and the force was reasonable.",
    facts: "During riots, the defendant's shop was attacked and damaged. He made petrol bombs and kept them to defend himself and his shop if he was attacked again. He was charged with possessing explosives. The trial judge directed an acquittal.",
    held: "The Court of Appeal held that self-defence can be a defence to possessing an explosive substance where a defendant has a genuine and reasonable fear of imminent unlawful attack, and the force would be reasonable.",
    significance: "Shows that self-defence can cover preparation as well as the act of defence. It is often used with the cases on pre-emptive force.",
    links: ["beckford-v-r-1987"]
  },
  {
    id: "r-v-tabassum-2000", name: "R v Tabassum", cite: "[2000] 2 Cr App R 328", year: 2000, court: "CA",
    area: "criminal", topic: "cl-general-defences", sub: "gd-consent", key: false,
    tags: ["Fraud", "Medical", "Nature and quality"],
    gist: "A man tells women he is carrying out research into breast cancer and examines their breasts, and they agree because they think he is medically trained.",
    principle: "Consent is not valid if it is given to the nature and quality of the act, and agreeing to a medical examination is not consent to touching for a non-medical purpose.",
    facts: "Tabassum, who had no medical qualifications, told women that he was preparing a database for a breast cancer clinic. He persuaded them to allow him to examine their breasts. They consented because they thought he was medically trained.",
    held: "The Court of Appeal upheld the convictions for indecent assault. The women had consented to touching only for a medical purpose, which was not what he was doing, so their consent was to a different nature and quality of act.",
    significance: "A key case on fraud and consent. The Sexual Offences Act 2003 and the later cases on deception have now modified the law.",
    links: ["r-v-dica-2004", "r-v-wilson-1996"]
  }
);
