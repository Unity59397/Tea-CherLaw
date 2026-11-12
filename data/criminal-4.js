/* Criminal law: self-defence, duress, necessity, consent. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "palmer-v-r-1971", name: "Palmer v R", cite: "[1971] AC 814", year: 1971, court: "PC",
    area: "criminal", topic: "cl-general-defences", sub: "gd-selfdefence", key: true,
    tags: ["Reasonable force", "Instinctive reaction"],
    gist: "A man who shoots someone he is facing in a confrontation appeals over how the jury was told to judge the force he used.",
    principle: "A person under attack can use the force that is reasonably necessary. A person acting in the heat of the moment is not expected to weigh the force to a nicety.",
    facts: "Palmer shot a man dead and said he had acted in self-defence. The appeal to the Privy Council concerned how the trial judge directed the jury on the amount of force that a person defending himself may use.",
    held: "The Privy Council said that only reasonable force is allowed, but a person who honestly and instinctively thought what he did was necessary would be strong evidence that it was reasonable. There is no duty to retreat, although this may be a factor.",
    significance: "The classic statement of the test for reasonable force in self-defence. It now sits alongside s76 Criminal Justice and Immigration Act 2008.",
    links: ["r-v-williams-gladstone-1983", "beckford-v-r-1987"]
  },
  {
    id: "r-v-williams-gladstone-1983", name: "R v Williams (Gladstone)", cite: "(1984) 78 Cr App R 276", year: 1983, court: "CA",
    area: "criminal", topic: "cl-general-defences", sub: "gd-selfdefence", key: true,
    tags: ["Mistaken belief", "Honest belief"],
    gist: "A passer-by sees a man seizing a youth, thinks the youth is being attacked, and hits the man, who is really a plain-clothes officer trying to arrest a mugger.",
    principle: "A defendant is judged on the facts as he honestly believed them to be, even if the belief was mistaken.",
    facts: "Williams saw a man apparently assaulting a youth. He intervened and hit the man, who was in fact arresting the youth for mugging. Williams said he honestly believed he was preventing a crime.",
    held: "The Court of Appeal quashed the conviction. The defence must be judged on the facts as the defendant honestly believed them, even if that belief was unreasonable. The reasonableness of the belief is only evidence on whether it was honestly held.",
    significance: "Sets out the subjective approach to mistake. It is now reflected in s76 Criminal Justice and Immigration Act 2008, except for intoxicated mistakes.",
    links: ["beckford-v-r-1987", "palmer-v-r-1971"]
  },
  {
    id: "beckford-v-r-1987", name: "Beckford v R", cite: "[1988] AC 130", year: 1987, court: "PC",
    area: "criminal", topic: "cl-general-defences", sub: "gd-selfdefence", key: false,
    tags: ["Police", "Pre-emptive strike", "Honest belief"],
    gist: "A police officer shoots a man after being told he is armed, and says he honestly thought he was about to be shot.",
    principle: "A person may use force pre-emptively if he honestly believes he is about to be attacked, and need not wait to be struck first.",
    facts: "Beckford was a police officer in Jamaica. He shot and killed a man during an operation after a report that the man was armed. He said he believed he was about to be shot.",
    held: "The Privy Council quashed the murder conviction. A defendant is to be judged on the facts as he honestly believed them to be, whether or not the belief was reasonable, and he does not need to wait to be attacked first.",
    significance: "Confirms the honest belief approach from Williams (Gladstone). It was later put into statute in s76 Criminal Justice and Immigration Act 2008.",
    links: ["r-v-williams-gladstone-1983"]
  },
  {
    id: "r-v-martin-anthony-2001", name: "R v Martin (Anthony)", cite: "[2001] EWCA Crim 2245", year: 2001, court: "CA",
    area: "criminal", topic: "cl-general-defences", sub: "gd-selfdefence", key: false,
    tags: ["Householder", "Property", "Excessive force"],
    gist: "A farmer sleeping in his isolated farmhouse shoots at burglars and kills one of them as they run away.",
    principle: "Force is reasonable if it is no more than the defendant honestly believed was necessary. A defendant's mental condition does not change the objective standard of reasonable force unless it causes a delusion.",
    facts: "Tony Martin, a Norfolk farmer, was burgled several times. One night he fired a shotgun at two burglars in his house. One was killed and the other injured. Martin was convicted of murder.",
    held: "The Court of Appeal rejected self-defence. The force was excessive on the facts as he believed them to be, and the burglars were running away. His paranoid personality disorder was relevant to diminished responsibility, so murder was reduced to manslaughter.",
    significance: "Prompted debate about householders and reasonable force. The law was then amended by s43 Crime and Courts Act 2013, which gives householders some leeway.",
    links: ["r-v-clegg-1994"]
  },
  {
    id: "r-v-clegg-1994", name: "R v Clegg", cite: "[1995] 1 AC 482", year: 1994, court: "HL",
    area: "criminal", topic: "cl-general-defences", sub: "gd-selfdefence", key: false,
    tags: ["Police", "Excessive force", "Policy"],
    gist: "A soldier at a checkpoint in Northern Ireland fires at a car that has already passed him and kills a passenger.",
    principle: "If the force used in self-defence is excessive, the defence fails completely, and there is no halfway defence reducing murder to manslaughter.",
    facts: "Clegg, a soldier on patrol in Northern Ireland, fired at a speeding car that failed to stop at a checkpoint. The last shot hit a woman in the back as the car was driving away. He said he had acted to protect colleagues.",
    held: "The House of Lords upheld the murder conviction. The last shot was fired when the threat had passed, so it was not self-defence. The defence is an all or nothing one, and there is no partial defence of excessive force.",
    significance: "Authority that excessive self-defence does not reduce murder to manslaughter. It is a main point when evaluating the all-or-nothing nature of self-defence.",
    links: ["r-v-martin-anthony-2001"]
  },
  {
    id: "r-v-howe-1986", name: "R v Howe", cite: "[1987] AC 417", year: 1986, court: "HL",
    area: "criminal", topic: "cl-general-defences", sub: "gd-duress", key: true,
    tags: ["Murder", "Overruled", "Policy"],
    gist: "Two men take part in the torture and killing of two victims and claim they were afraid of the man who led the group.",
    principle: "Duress is not available as a defence to murder, whether the defendant is the principal or an accomplice.",
    facts: "Howe and Bannister took part in the torture and killing of two men. They claimed they had acted because they feared the leader of the group. They were convicted of murder.",
    held: "The House of Lords upheld the convictions. Duress is not a defence to murder for a principal or a secondary party. It overruled DPP for Northern Ireland v Lynch (1975), which had allowed it for an accomplice.",
    significance: "Rests on public policy: ordinary people should be expected to resist threats where another's life is at stake. Still the law and widely debated.",
    links: ["r-v-gotts-1991", "r-v-graham-1981"]
  },
  {
    id: "r-v-graham-1981", name: "R v Graham", cite: "[1982] 1 WLR 294", year: 1981, court: "CA",
    area: "criminal", topic: "cl-general-defences", sub: "gd-duress", key: false,
    tags: ["Two-part test", "Threat of death or serious injury"],
    gist: "A man takes part in killing his wife and says he did so out of fear of a violent man who lived with them.",
    principle: "Duress requires a threat of death or serious injury and that a person of reasonable firmness sharing the defendant's characteristics would have acted in the same way.",
    facts: "Graham took part in killing his wife. He said that he was afraid of King, a violent man who lived with them and who had been drinking. He argued that he acted under duress.",
    held: "The Court of Appeal approved a two-stage test. First, was the defendant impelled to act by a reasonable belief that he would be killed or seriously injured if he did not? Second, would a sober person of reasonable firmness sharing his characteristics have acted in the same way?",
    significance: "The standard test for duress, approved by the House of Lords in Howe and refined in Hasan.",
    links: ["r-v-hasan-2005", "r-v-howe-1986"]
  },
  {
    id: "r-v-hasan-2005", name: "R v Hasan", cite: "[2005] UKHL 22", year: 2005, court: "HL",
    area: "criminal", topic: "cl-general-defences", sub: "gd-duress", key: true,
    tags: ["Voluntary association", "Criminal gangs"],
    gist: "A driver who works for a violent drug dealer says he committed a burglary only because of threats to him and his family.",
    principle: "Duress is not available if the defendant voluntarily associated with criminals and knew that he might be subjected to threats of violence.",
    facts: "Hasan worked as a driver and minder for a drug dealer. He said he took part in a burglary because he and his family were threatened with violence.",
    held: "The House of Lords upheld the conviction. The defence fails where the defendant foresaw, or ought reasonably to have foreseen, the risk of being subjected to compulsion by threats of violence through voluntarily associating with criminals. The threat must also be of death or serious injury.",
    significance: "Narrowed duress by tightening the test of the defendant's own fault, and held that the “reasonable firmness” test is objective.",
    links: ["r-v-graham-1981"]
  },
  {
    id: "r-v-gotts-1991", name: "R v Gotts", cite: "[1992] 2 AC 412", year: 1991, court: "HL",
    area: "criminal", topic: "cl-general-defences", sub: "gd-duress", key: false,
    tags: ["Children", "Attempted murder", "Family"],
    gist: "A teenage boy stabs his mother after his father threatens to shoot him if he does not, and she survives.",
    principle: "Duress is not available as a defence to attempted murder.",
    facts: "Gotts was 16. His father told him to kill his mother and said he would shoot him if he did not. Gotts stabbed his mother, who survived. He was convicted of attempted murder and argued duress.",
    held: "The House of Lords upheld the conviction by a majority. The reasoning in Howe applies equally to attempted murder, because the mens rea is the same and the moral position is no different.",
    significance: "Extends the Howe rule to attempted murder. It is often criticised because the defendant was young and the threat was extreme.",
    links: ["r-v-howe-1986"]
  },
  {
    id: "r-v-dudley-and-stephens-1884", name: "R v Dudley and Stephens", cite: "(1884) 14 QBD 273", year: 1884, court: "DC",
    area: "criminal", topic: "cl-general-defences", sub: "gd-necessity", key: true,
    tags: ["Murder", "Cannibalism", "Shipwreck"],
    gist: "Shipwrecked sailors adrift for weeks kill and eat the cabin boy to survive.",
    principle: "Necessity, such as the need to survive, is not a defence to murder, however desperate the circumstances.",
    facts: "After the yacht Mignonette sank, Dudley, Stephens and Brooks, together with the cabin boy Richard Parker, were adrift in a lifeboat. Parker was ill. After nearly three weeks, Dudley killed him and the men ate him. They were rescued four days later.",
    held: "The court held that necessity was no defence to murder. There was no legal duty or justification that allowed a person to take an innocent life to save his own. They were sentenced to death, later commuted to six months' imprisonment.",
    significance: "The original authority on necessity and murder. It was followed in Re A (Conjoined Twins), where the court distinguished it.",
    links: ["re-a-children-conjoined-twins-surgical-separation-2000"]
  },
  {
    id: "re-a-children-conjoined-twins-surgical-separation-2000", name: "Re A (Children) (Conjoined Twins: Surgical Separation)", cite: "[2001] Fam 147", year: 2000, court: "CA",
    area: "criminal", topic: "cl-general-defences", sub: "gd-necessity", key: true,
    tags: ["Medical", "Children", "Doctrine of necessity"],
    gist: "Doctors want to separate conjoined twins so that one can survive, knowing the weaker twin will die as a result, and the parents refuse.",
    principle: "Necessity can justify an act that causes death if it is needed to avoid an inevitable and irreparable evil, is no more than reasonably necessary, and the evil is not disproportionate.",
    facts: "Jodie and Mary were conjoined twins. Mary's life depended on Jodie's heart and lungs. Without surgery both would die within months, but separation would kill Mary. The parents refused consent and the hospital applied to the court.",
    held: "The Court of Appeal allowed the operation. Brooke LJ set out three requirements for necessity. The court distinguished Dudley and Stephens, and found that Mary was already designated for death and that the doctors' intention was to save Jodie.",
    significance: "A rare modern case on necessity. It is seen as limited to extreme medical situations and is often contrasted with Dudley and Stephens.",
    links: ["r-v-dudley-and-stephens-1884"]
  },
  {
    id: "r-v-donovan-1934", name: "R v Donovan", cite: "[1934] 2 KB 498", year: 1934, court: "CA",
    area: "criminal", topic: "cl-general-defences", sub: "gd-consent", key: false,
    tags: ["Bodily harm", "Caning", "Public policy"],
    gist: "A man canes a consenting young woman for sexual gratification and she is bruised.",
    principle: "Consent is no defence to an act intended or likely to cause bodily harm, unless the activity falls within a recognised exception.",
    facts: "Donovan caned a 17-year-old woman, with her consent, for his sexual gratification. She suffered bruising. He was convicted of indecent assault and common assault.",
    held: "The Court of Criminal Appeal held that consent cannot be a defence where the force used is intended or likely to cause bodily harm, apart from exceptions such as properly conducted sport and surgery. The conviction was quashed because the jury had not been directed correctly.",
    significance: "The starting point of the modern law on consent. It was developed and applied in Brown (1993).",
    links: ["r-v-brown-1993"]
  },
  {
    id: "r-v-brown-1993", name: "R v Brown", cite: "[1994] 1 AC 212", year: 1993, court: "HL",
    area: "criminal", topic: "cl-general-defences", sub: "gd-consent", key: true,
    tags: ["Sadomasochism", "Dissent", "Policy"],
    gist: "A group of men take part in consensual sadomasochistic activities in private, causing injuries that need no medical treatment, and are prosecuted.",
    principle: "Consent is no defence to the infliction of ABH or GBH in the course of sadomasochistic activity, on grounds of public policy.",
    facts: "A group of adult men took part in sadomasochistic activities in private, causing wounds and bruising. All consented and none needed medical treatment. They were convicted of offences under ss47 and 20 OAPA 1861.",
    held: "The House of Lords upheld the convictions by 3 to 2. Consent is not a defence to harm that is more than trivial in the course of such activities, since the law must protect against the risks of violence, injury and the spread of disease. Lords Mustill and Slynn dissented.",
    significance: "The leading case on the limits of consent. The European Court of Human Rights found no breach of Article 8 in Laskey v UK (1997). Often criticised for interfering with private autonomy.",
    links: ["r-v-wilson-1996", "r-v-donovan-1934"]
  },
  {
    id: "r-v-wilson-1996", name: "R v Wilson", cite: "[1997] QB 47", year: 1996, court: "CA",
    area: "criminal", topic: "cl-general-defences", sub: "gd-consent", key: false,
    tags: ["Tattooing", "Marriage", "Family"],
    gist: "A husband brands his initials on his wife's buttocks with a hot knife at her request, and she later needs medical treatment.",
    principle: "Consent can be a defence to injury that is similar to tattooing and is done in a private marital context with no public interest in prosecution.",
    facts: "At his wife's request, Wilson branded his initials on her buttocks with a hot knife. The wounds became infected and she went to the doctor. He was convicted of ABH.",
    held: "The Court of Appeal quashed the conviction. The act was comparable to tattooing and it was not in the public interest to criminalise consensual activity between married couples in the privacy of the matrimonial home.",
    significance: "Contrasted with Brown to show that the cases turn on policy rather than on any clear principle.",
    links: ["r-v-brown-1993", "r-v-dica-2004"]
  },
  {
    id: "r-v-dica-2004", name: "R v Dica", cite: "[2004] QB 1257", year: 2004, court: "CA",
    area: "criminal", topic: "cl-general-defences", sub: "gd-consent", key: true,
    tags: ["Medical", "HIV", "Informed consent"],
    gist: "A man who knows he has HIV has unprotected sex with two women who did not know and who later became infected.",
    principle: "Consent to sexual intercourse is not consent to the risk of HIV infection unless the person knew of the risk. Transmitting a disease can be GBH.",
    facts: "Dica knew he was HIV positive. He had unprotected sex with two women, who both became infected. They said they would not have consented had they known. He was convicted of inflicting GBH under s20.",
    held: "The Court of Appeal held that a person can be convicted of s20 for the reckless transmission of a disease. The women's consent to sex did not amount to consent to the risk of infection unless they knew. The conviction was quashed because the judge wrongly withdrew the issue of consent from the jury, and a retrial was ordered.",
    significance: "A major case extending criminal liability to the transmission of disease, which took the law past Clarence (1888). It is balanced by the requirement for informed consent in Konzani.",
    links: ["r-v-konzani-2005"]
  },
  {
    id: "r-v-konzani-2005", name: "R v Konzani", cite: "[2005] EWCA Crim 706", year: 2005, court: "CA",
    area: "criminal", topic: "cl-general-defences", sub: "gd-consent", key: false,
    tags: ["Medical", "HIV", "Informed consent"],
    gist: "A man with HIV has unprotected sex with several partners without telling them and says they accepted the risk.",
    principle: "A defence of consent to the risk of HIV needs informed consent, so it is not enough that the partner did not ask or should have known.",
    facts: "Konzani knew he was HIV positive and had unprotected sex with several women without telling them. He claimed that they had impliedly consented to the risk. He was convicted under s20.",
    held: "The Court of Appeal upheld the conviction. Consent in this context must be a genuine, informed consent to the risk of infection, and it cannot be implied from the fact that the partner took part in unprotected sex.",
    significance: "Follows Dica and states the position clearly: without knowledge of the risk, there is no defence. It is often cited on the limits of consent.",
    links: ["r-v-dica-2004"]
  }
);
