/* The Legal System: juries, ADR, legal personnel, access to justice. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "bushells-case-1670", name: "Bushell's Case", cite: "(1670) Vaugh 135", year: 1670, court: "Hist",
    area: "legal-system", topic: "ls-criminal", sub: "ls-juries", key: true,
    tags: ["Jury independence", "Quakers"],
    gist: "Jurors acquit two Quaker preachers against the judge's direction, and the judge fines and imprisons them until they pay.",
    principle: "Jurors cannot be punished for the verdict they reach. Jury independence is a cornerstone of the criminal trial.",
    facts: "William Penn and William Mead were tried for unlawful assembly. The jury refused to convict despite the judge's pressure. The judge fined the jurors and jailed those who would not pay. Edward Bushell sought a writ of habeas corpus.",
    held: "Chief Justice Vaughan ordered Bushell's release. Jurors decide facts using their own knowledge and conscience, so a judge cannot fine them for a verdict he dislikes.",
    significance: "The founding authority for jury independence. It is why a judge cannot direct a jury to convict and why jurors cannot be questioned about their deliberations. Often quoted in evaluations of juries.",
    links: ["r-v-young-1995"]
  },
  {
    id: "r-v-young-1995", name: "R v Young", cite: "[1995] QB 324", year: 1995, court: "CA",
    area: "legal-system", topic: "ls-criminal", sub: "ls-juries", key: false,
    tags: ["Jury misconduct", "Contempt of Court Act 1981"],
    gist: "Jurors in a murder trial stay overnight at a hotel and use a ouija board to ask the dead victims who killed them.",
    principle: "A conviction can be quashed where jury misconduct outside the jury room risks an unfair trial.",
    facts: "During a murder trial the jury stayed at a hotel. Some jurors held a séance with a ouija board to contact the victims. A juror later told the defence solicitor about it.",
    held: "The Court of Appeal quashed the conviction and ordered a retrial. It could investigate what happened because the conduct occurred outside the jury room, so the secrecy rule in s8 Contempt of Court Act 1981 did not block it.",
    significance: "Shows the limit of jury secrecy and why jurors are told not to discuss the case outside deliberations. Used in evaluating juries for their unaccountable decision-making.",
    links: ["attorney-general-v-dallas-2012", "bushells-case-1670"]
  },
  {
    id: "attorney-general-v-dallas-2012", name: "Attorney General v Dallas", cite: "[2012] EWHC 156 (Admin)", year: 2012, court: "DC",
    area: "legal-system", topic: "ls-criminal", sub: "ls-juries", key: false,
    tags: ["Jury misconduct", "Internet research", "Contempt of court"],
    gist: "A juror looks up the defendant's past on the internet and tells fellow jurors what she found, despite being told to use only the trial evidence.",
    principle: "A juror who researches a case online and shares it with other jurors commits contempt of court.",
    facts: "Theodora Dallas, a juror in a GBH trial, found online that the defendant had previously been tried for a serious offence. She told other jurors. The jury was discharged and the Attorney General brought contempt proceedings.",
    held: "The Divisional Court found her in contempt. She had been warned not to research and deliberately disobeyed. She was sentenced to six months' imprisonment.",
    significance: "A leading example of the risk of the internet for juries. Section 20A Juries Act 1974 now makes research an offence. Used when evaluating the jury system.",
    links: ["r-v-young-1995"]
  },
  {
    id: "halsey-v-milton-keynes-general-nhs-trust-2004", name: "Halsey v Milton Keynes General NHS Trust", cite: "[2004] EWCA Civ 576", year: 2004, court: "CA",
    area: "legal-system", topic: "ls-civil", sub: "ls-adr", key: true,
    tags: ["ADR", "Costs", "Mediation"],
    gist: "A family loses a claim after a hospital refuses mediation, and the winners are denied some costs because they did not try to settle.",
    principle: "Courts cannot force parties into mediation, but an unreasonable refusal to try ADR can be penalised in costs.",
    facts: "The claimant lost a clinical negligence claim after the hospital refused mediation. The question was whether the winning party should still get its costs given its refusal.",
    held: "The Court of Appeal said compelling ADR could breach Article 6. A party who unreasonably refuses ADR can lose costs, and Dyson LJ set out factors such as the nature of the dispute, merits, other settlement attempts, cost and delay.",
    significance: "The key case on ADR and costs. The principle that courts cannot order ADR was later qualified in Churchill v Merthyr Tydfil CBC (2023).",
    links: ["churchill-v-merthyr-tydfil-cbc-2023"]
  },
  {
    id: "churchill-v-merthyr-tydfil-cbc-2023", name: "Churchill v Merthyr Tydfil CBC", cite: "[2023] EWCA Civ 1416", year: 2023, court: "CA",
    area: "legal-system", topic: "ls-civil", sub: "ls-adr", key: false,
    tags: ["ADR", "Overruled", "Post-Halsey"],
    gist: "A neighbour sues a council over Japanese knotweed and the council refuses to join any form of ADR before trial.",
    principle: "The court can stay proceedings or order the parties to engage in non-court-based dispute resolution if proportionate.",
    facts: "Mr Churchill claimed in nuisance over Japanese knotweed spreading from council land. The council argued he should first use its complaints procedure. The question was whether a court could order or require ADR.",
    held: "The Court of Appeal held that Halsey did not bind it on this point. A court may order or stay the case for ADR, so long as that does not impair the right of access to the court and is proportionate.",
    significance: "A major shift away from Halsey. Cited in evaluations of ADR and in the Civil Procedure Rules amendments that followed.",
    links: ["halsey-v-milton-keynes-general-nhs-trust-2004"]
  },
  {
    id: "rondel-v-worsley-1967", name: "Rondel v Worsley", cite: "[1969] 1 AC 191", year: 1967, court: "HL",
    area: "legal-system", topic: "ls-personnel", sub: "ls-profession", key: false,
    tags: ["Barristers", "Advocates' immunity", "Overruled"],
    gist: "A convicted man sues his barrister for negligence in the way the case was presented at trial.",
    principle: "A barrister was immune from a negligence claim for work in court and for pre-trial work closely linked to it.",
    facts: "Rondel was convicted of causing grievous bodily harm and later sued his barrister, Worsley, for negligent conduct of the defence.",
    held: "The House of Lords held the claim could not succeed. Immunity was justified by the barrister's duty to the court, the cab-rank rule and the need to avoid relitigating cases.",
    significance: "Later overruled by Hall v Simons (2000), which ended advocates' immunity. Useful to show how precedent and public policy change.",
    links: ["hall-v-simons-2000"]
  },
  {
    id: "hall-v-simons-2000", name: "Hall v Simons", cite: "[2002] 1 AC 615", year: 2000, court: "HL",
    area: "legal-system", topic: "ls-personnel", sub: "ls-profession", key: false,
    tags: ["Barristers", "Advocates' immunity", "Overruled"],
    gist: "Clients sue their solicitors for negligence over conduct of litigation and argue that lawyers should not enjoy immunity.",
    principle: "Advocates no longer have immunity from negligence claims for conduct of a case in court.",
    facts: "Three sets of claimants alleged their solicitors had negligently handled earlier proceedings. The solicitors relied on advocates' immunity from Rondel v Worsley.",
    held: "A seven-judge House of Lords used the 1966 Practice Statement to depart from Rondel. The immunity was no longer justified in the public interest, so advocates can now be sued for negligence in their court work.",
    significance: "Example of the House of Lords overruling its own precedent for public policy reasons. Also relevant to evaluating the legal profession.",
    links: ["rondel-v-worsley-1967"]
  },
  {
    id: "ex-p-pinochet-ugarte-no-2-1999", name: "R v Bow Street Magistrate ex p Pinochet Ugarte (No 2)", cite: "[2000] 1 AC 119", year: 1999, court: "HL",
    area: "legal-system", topic: "ls-personnel", sub: "ls-independence", key: true,
    tags: ["Judicial bias", "Impartiality", "Amnesty International"],
    gist: "A court sets aside its own ruling because one of the judges was an unpaid director of a charity that took part in the case.",
    principle: "A judge with an interest in the outcome through a link with a party is automatically disqualified from sitting.",
    facts: "Lord Hoffmann sat in the first Pinochet appeal and was an unpaid director of Amnesty International Charity Ltd, which was linked to Amnesty International, a party to the case. Pinochet asked for the decision to be set aside.",
    held: "A newly constituted House of Lords set the first decision aside. A judge is automatically disqualified where he is in effect acting in his own cause, even without any actual bias.",
    significance: "A leading authority on judicial impartiality. Used to show how judicial independence is protected, alongside the test in Porter v Magill for apparent bias.",
    links: []
  },
  {
    id: "r-unison-v-lord-chancellor-2017", name: "R (UNISON) v Lord Chancellor", cite: "[2017] UKSC 51", year: 2017, court: "UKSC",
    area: "legal-system", topic: "ls-access", sub: "ls-barriers", key: true,
    tags: ["Access to justice", "Tribunal fees", "Rule of law"],
    gist: "A union challenges fees of up to £1,200 to bring an employment tribunal claim after claims fall by about 70 per cent.",
    principle: "Fees that make it practically impossible or excessively difficult to bring a claim unlawfully interfere with access to justice.",
    facts: "In 2013 the Lord Chancellor introduced fees for employment tribunal claims. The number of claims fell sharply. UNISON brought judicial review arguing the Fees Order was unlawful.",
    held: "The Supreme Court unanimously quashed the Fees Order. Access to the courts is a constitutional right, and fees that prevent people bringing claims also hinder the rule of law.",
    significance: "Major recent case on access to justice. The fees were refunded. Compare it with legal aid cuts in LASPO 2012 when evaluating access to justice.",
    links: []
  }
);
