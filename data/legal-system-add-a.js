/* Legal system and access to justice (additions): ADR, juries, judicial impartiality, separation of powers, court fees and legal aid. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "dunnett-v-railtrack-plc-2002", name: "Dunnett v Railtrack plc", cite: "[2002] EWCA Civ 303", year: 2002, court: "CA",
    area: "legal-system", topic: "ls-civil", sub: "ls-adr", key: false,
    tags: ["ADR", "Costs", "Mediation"],
    gist: "A woman loses an appeal over horses killed on a railway line, but the company that beat her had refused the court's suggestion to try mediation.",
    principle: "A party who unreasonably refuses to try ADR after the court has encouraged it can be penalised in costs, even if that party wins.",
    facts: "Mrs Dunnett's horses strayed onto a railway line and were killed. She sued Railtrack and lost, then appealed. The Court of Appeal strongly encouraged the parties to try mediation or another form of ADR. Railtrack refused.",
    held: "Mrs Dunnett lost her appeal, but the Court of Appeal refused Railtrack its costs because it had turned down ADR after the court's encouragement. Lawyers must now consider seriously whether ADR could settle the dispute.",
    significance: "The first major case where a winning party lost its costs for refusing ADR. It was developed in Halsey (no forced mediation, but an unreasonable refusal can cost you), PGF II (silence is unreasonable) and Churchill (courts may order ADR).",
    links: ["halsey-v-milton-keynes-general-nhs-trust-2004", "pgf-ii-sa-v-omfs-company-1-ltd-2013", "churchill-v-merthyr-tydfil-cbc-2023"]
  },
  {
    id: "pgf-ii-sa-v-omfs-company-1-ltd-2013", name: "PGF II SA v OMFS Company 1 Ltd", cite: "[2013] EWCA Civ 1288", year: 2013, court: "CA",
    area: "legal-system", topic: "ls-civil", sub: "ls-adr", key: false,
    tags: ["ADR", "Costs", "Mediation"],
    gist: "A company invites its opponent to mediate a dispute over leased property and receives no reply at all.",
    principle: "Ignoring a reasonable invitation to try ADR is, as a general rule, unreasonable conduct that can lead to a costs penalty, whatever the merits of the case.",
    facts: "PGF II SA brought a claim connected with a lease and invited OMFS to try mediation. OMFS did not respond to the invitation. The dispute went to court, and the question was what effect the silence should have on costs.",
    held: "The Court of Appeal held that silence in the face of a reasonable invitation to mediate is itself unreasonable. It did not matter that OMFS might have won, or that mediation might have failed. OMFS could be penalised in costs.",
    significance: "Goes further than Halsey. A party need not agree to mediate, but it must engage with the offer and give reasons if it refuses. Part of the line of cases that led to Churchill v Merthyr Tydfil in 2023.",
    links: ["halsey-v-milton-keynes-general-nhs-trust-2004", "dunnett-v-railtrack-plc-2002", "churchill-v-merthyr-tydfil-cbc-2023"]
  },
  {
    id: "r-v-ford-1989", name: "R v Ford", cite: "[1989] QB 868", year: 1989, court: "CA",
    area: "legal-system", topic: "ls-criminal", sub: "ls-juries", key: false,
    tags: ["Jury selection", "Race", "Random selection"],
    gist: "A black defendant asks the trial judge to make sure that some members of his jury are black.",
    principle: "Jurors are chosen at random, and a judge has no power to select or discharge a jury in order to achieve a racial balance.",
    facts: "Ford was black and was to be tried at the Crown Court. He asked the judge to order that the jury should include some black members. The judge refused, Ford was convicted, and he appealed on the ground that the jury had not been selected fairly.",
    held: "The Court of Appeal dismissed the appeal. Juries are selected at random from the electoral register, and a judge cannot choose jurors by race. Random selection is the rule even if the jury ends up being all one race.",
    significance: "Often used when evaluating how representative juries are. Random selection is fair in principle, but may not reflect the defendant's community. Compare Mirza on racial prejudice inside the jury room and Sander v United Kingdom.",
    links: ["r-v-mirza-2004", "sander-v-united-kingdom-2000"]
  },
  {
    id: "r-v-twomey-2009", name: "R v Twomey", cite: "[2009] EWCA Crim 1035", year: 2009, court: "CA",
    area: "legal-system", topic: "ls-criminal", sub: "ls-juries", key: false,
    tags: ["Jury tampering", "Criminal Justice Act 2003"],
    gist: "Prosecutors fear that a jury in a serious criminal trial will be interfered with, and ask for the trial to be heard by a judge alone.",
    principle: "A trial can take place without a jury under s44 Criminal Justice Act 2003 where there is a real and present danger of jury tampering that cannot be dealt with by other measures.",
    facts: "The defendants faced a serious criminal trial. The prosecution applied under s44 of the Criminal Justice Act 2003 for a trial without a jury because of the risk of jury tampering, and the judge made the order.",
    held: "The Court of Appeal upheld the order. There was a real and present danger of jury tampering, and the protective measures that could be used with a jury, such as jury protection, would not be enough to prevent it. A judge-only trial was necessary in the interests of justice.",
    significance: "A rare departure from trial by jury and a key example of the exceptions to it. It shows that the right to a jury trial for serious offences is not absolute. Useful when evaluating the role of the jury.",
    links: ["r-v-mirza-2004"]
  },
  {
    id: "attorney-general-v-fraill-and-sewart-2011", name: "Attorney General v Fraill and Sewart", cite: "[2011] EWCA Crim 1570", year: 2011, court: "CA",
    area: "legal-system", topic: "ls-criminal", sub: "ls-juries", key: false,
    tags: ["Contempt of court", "Social media", "Jury integrity"],
    gist: "A juror contacts a defendant on Facebook while the jury is still considering verdicts on other charges in the same trial.",
    principle: "A juror who communicates with a defendant, or discusses the case outside the jury, commits contempt of court because it undermines the integrity of the trial.",
    facts: "Joanna Fraill was a juror in a trial with several defendants. While the jury was still considering some of its verdicts, she exchanged Facebook messages with Jamie Sewart, a defendant in the same trial, and the contact came to light.",
    held: "The Attorney General brought contempt proceedings and both were found in contempt. The court stressed that jurors must decide the case only on the evidence in court, and that sentences must deter others.",
    significance: "A leading example of the risk social media poses to the jury system. Later reforms made it a specific offence for a juror to research a case or share information about it (Juries Act 1974, as amended in 2015). Compare Attorney General v Dallas.",
    links: ["attorney-general-v-dallas-2012", "r-v-mirza-2004"]
  },
  {
    id: "sander-v-united-kingdom-2000", name: "Sander v United Kingdom", cite: "(2000) 31 EHRR 44", year: 2000, court: "ECtHR",
    area: "legal-system", topic: "ls-criminal", sub: "ls-juries", key: false,
    tags: ["Article 6", "Race", "Impartiality"],
    gist: "A juror tells the judge that other jurors are making racist jokes about an Asian defendant, but the judge accepts general assurances and keeps the jury.",
    principle: "A defendant is entitled to an impartial tribunal. If there are signs of racial bias in a jury, the judge must act and cannot rely only on the jurors' own assurances.",
    facts: "Sander, a man of Asian origin, was on trial. During the trial a juror sent the judge a note saying that two other jurors had been making racist jokes and comments. The judge asked the jury to reflect, accepted their assurances and refused to discharge the jury.",
    held: "The European Court of Human Rights held that there was a breach of Article 6(1). The judge should have discharged the jury. Assurances from the jurors could not remove the objective doubt about whether the jury was impartial.",
    significance: "Links the jury to human rights law and the right to a fair trial. It was an important background to Mirza, where the House of Lords refused to allow evidence of what happened in the jury room, partly because of s8 of the Contempt of Court Act 1981.",
    links: ["r-v-mirza-2004", "r-v-ford-1989"]
  },
  {
    id: "locabail-uk-ltd-v-bayfield-properties-ltd-2000", name: "Locabail (UK) Ltd v Bayfield Properties Ltd", cite: "[2000] QB 451", year: 1999, court: "CA",
    area: "legal-system", topic: "ls-personnel", sub: "ls-independence", key: false,
    tags: ["Judicial bias", "Apparent bias", "Real possibility test"],
    gist: "Several people argue that judges who decided their cases should have stood down because of their backgrounds, connections or earlier views.",
    principle: "A judge is automatically disqualified if he has a financial interest in the outcome. Otherwise the question is whether there is a real possibility of bias, and a judge's background alone is not enough.",
    facts: "The Court of Appeal heard several linked cases in which litigants complained that a judge or recorder should not have heard their case. The complaints included an alleged interest in the outcome and links between the judge and one side.",
    held: "The court said a judge must not sit if he has a direct financial interest in the case. In other cases the test is whether there is a real possibility of bias. A judge's race, religion, gender, politics, social background or earlier views will not usually be enough.",
    significance: "A leading case on when a judge must step aside. The test was refined in Porter v Magill in 2001 to ask whether a fair-minded and informed observer would conclude there was a real possibility of bias. Compare Pinochet (No 2).",
    links: ["ex-p-pinochet-ugarte-no-2-1999", "porter-v-magill-2001", "r-v-gough-1993"]
  },
  {
    id: "duport-steels-ltd-v-sirs-1980", name: "Duport Steels Ltd v Sirs", cite: "[1980] 1 WLR 142", year: 1980, court: "HL",
    area: "legal-system", topic: "ls-personnel", sub: "ls-independence", key: true,
    tags: ["Separation of powers", "Statutory interpretation", "Trade union"],
    gist: "During a national steel strike, a union tries to extend the dispute to private steel firms, and the firms ask the courts to stop it.",
    principle: "Judges must apply an Act of Parliament according to its words, even if they dislike the result. Making new law is for Parliament, not the courts.",
    facts: "In the 1980 steel strike the union tried to extend the strike to private steel firms. The firms argued that the union could not rely on the statutory protection for acts done in a trade dispute. The Court of Appeal read that protection narrowly.",
    held: "The House of Lords reversed. Lord Diplock said that Parliament makes the law and the judges interpret it, and that judges must respect this separation of powers. They cannot change the meaning of an Act because they think it is unwise.",
    significance: "A classic statement of the separation of powers and the limits of judicial law-making. It supports the literal approach to statutory interpretation and is often contrasted with the more creative approach of Lord Denning in the Court of Appeal.",
    links: ["r-evans-v-attorney-general-2015", "r-jackson-v-attorney-general-2005"]
  },
  {
    id: "r-evans-v-attorney-general-2015", name: "R (Evans) v Attorney General", cite: "[2015] UKSC 21", year: 2015, court: "UKSC",
    area: "legal-system", topic: "ls-personnel", sub: "ls-independence", key: false,
    tags: ["Separation of powers", "Rule of law", "Public authority"],
    gist: "A journalist wins a ruling that letters from the Prince of Wales to ministers must be disclosed, and a government minister then tries to override the ruling.",
    principle: "A member of the executive cannot override a final decision of a court or tribunal unless Parliament has clearly said so, as this would offend the rule of law.",
    facts: "Rob Evans, a journalist, asked to see letters sent by Prince Charles to government departments. The Upper Tribunal ordered disclosure. The Attorney General then issued a certificate under s53 of the Freedom of Information Act 2000, saying that the departments could refuse.",
    held: "By a majority, the Supreme Court held that the certificate was unlawful. Reading s53 so that a minister could overrule a court decision would go against the rule of law and the separation of powers, and Parliament had not clearly allowed it.",
    significance: "A strong example of the judiciary protecting its own decisions against the executive. Useful when discussing judicial independence, the rule of law and the separation of powers. Compare Fire Brigades Union and the Miller cases.",
    links: ["duport-steels-ltd-v-sirs-1980", "r-v-secretary-of-state-for-the-home-department-ex-p-fire-brigades-union-1995", "r-miller-v-the-prime-minister-cherry-v-advocate-general-for-scotland-2019"]
  },
  {
    id: "r-v-secretary-of-state-for-the-home-department-ex-p-fire-brigades-union-1995", name: "R v Secretary of State for the Home Department, ex p Fire Brigades Union", cite: "[1995] 2 AC 513", year: 1995, court: "HL",
    area: "law-making", topic: "lm-parliament", sub: "lmp-sovereignty", key: false,
    tags: ["Royal prerogative", "Executive power", "Public authority"],
    gist: "Parliament passes a compensation scheme for crime victims but leaves it unused, and the minister brings in a cheaper scheme using ancient royal powers instead.",
    principle: "The government cannot use the royal prerogative to avoid or defeat the purpose of an Act of Parliament.",
    facts: "The Criminal Justice Act 1988 created a new scheme for compensating victims of violent crime, to start on a date chosen by the Home Secretary. He never brought it into force and introduced a different, less generous scheme using prerogative powers. The Fire Brigades Union challenged this.",
    held: "By a majority, the House of Lords held that the Home Secretary had acted unlawfully. Having been given the power by Parliament to start the statutory scheme, he could not use the prerogative to put in place a different scheme that left the Act without effect.",
    significance: "An important case on parliamentary sovereignty and the limits of executive power. It is used with the Miller cases to show that prerogative powers are subject to statute and the control of the courts.",
    links: ["r-miller-v-secretary-of-state-for-exiting-the-eu-2017", "r-evans-v-attorney-general-2015"]
  },
  {
    id: "r-v-lord-chancellor-ex-p-witham-1997", name: "R v Lord Chancellor, ex p Witham", cite: "[1998] QB 575", year: 1997, court: "DC",
    area: "legal-system", topic: "ls-access", sub: "ls-barriers", key: false,
    tags: ["Access to justice", "Court fees", "Delegated legislation"],
    gist: "A man on income support who cannot pay increased court fees challenges the order that took away the fee exemption for people on benefits.",
    principle: "Access to the courts is a constitutional right. It cannot be taken away by delegated legislation unless the Act clearly authorises it.",
    facts: "In 1996 the Lord Chancellor raised civil court fees and, by an order, removed the exemption for people on income support. Witham, who wanted to bring a claim but could not afford the fees, challenged the order.",
    held: "The Divisional Court held the order was unlawful. Access to the courts is a fundamental right, and the general power to set fees did not clearly allow the Lord Chancellor to make a rule that shut out people who could not afford to pay.",
    significance: "An early case treating access to justice as a constitutional right. It was developed in R (UNISON) v Lord Chancellor in 2017, where the Supreme Court struck down employment tribunal fees. Useful for evaluating barriers to justice.",
    links: ["r-unison-v-lord-chancellor-2017", "r-public-law-project-v-lord-chancellor-2016"]
  },
  {
    id: "r-gudanaviciene-v-director-of-legal-aid-casework-2014", name: "R (Gudanaviciene) v Director of Legal Aid Casework", cite: "[2014] EWCA Civ 1622", year: 2014, court: "CA",
    area: "legal-system", topic: "ls-access", sub: "ls-funding", key: false,
    tags: ["Legal aid", "LASPO 2012", "Exceptional case funding"],
    gist: "People refused legal aid for immigration cases challenge the official guidance on when funding may be given in exceptional cases.",
    principle: "Exceptional case funding must be given where refusing legal aid would breach a person's human rights, such as the right to a fair hearing under Article 6 or to family life under Article 8.",
    facts: "The Legal Aid, Sentencing and Punishment of Offenders Act 2012 took most immigration cases out of legal aid but allowed funding in exceptional cases. The claimants were refused funding under the Lord Chancellor's guidance and challenged the guidance.",
    held: "The Court of Appeal held that the guidance set the test too high and was wrong. Funding had to be given where it was needed to avoid a breach of Convention rights, taking account of the complexity of the case and the person's ability to represent himself.",
    significance: "Shows how the legal aid cuts were limited by human rights law. A useful point when evaluating legal aid and access to justice. See also the Public Law Project case in 2016.",
    links: ["r-public-law-project-v-lord-chancellor-2016", "r-v-lord-chancellor-ex-p-witham-1997"]
  },
  {
    id: "r-public-law-project-v-lord-chancellor-2016", name: "R (Public Law Project) v Lord Chancellor", cite: "[2016] UKSC 39", year: 2016, court: "UKSC",
    area: "legal-system", topic: "ls-access", sub: "ls-funding", key: true,
    tags: ["Legal aid", "Ultra vires", "Delegated legislation"],
    gist: "A minister decides that only people who have lived lawfully in the UK for a year may receive civil legal aid, and a charity challenges the rule.",
    principle: "A minister cannot use delegated powers to make a change that goes against the purpose of the Act that gave the power. Such a rule is ultra vires.",
    facts: "The Lord Chancellor made an order adding a residence test to civil legal aid, so that only people lawfully resident in the UK, and who had been for at least 12 months, could receive it. The Public Law Project challenged the order.",
    held: "The Supreme Court held that the residence test was ultra vires. The Legal Aid, Sentencing and Punishment of Offenders Act 2012 was based on the importance of the case and the need for help, and did not allow the Lord Chancellor to add a test based on residence.",
    significance: "A modern example of the courts policing the limits of delegated powers, and of how the legal aid cuts were challenged. Useful for evaluating access to justice. Compare Witham and UNISON.",
    links: ["r-v-lord-chancellor-ex-p-witham-1997", "r-unison-v-lord-chancellor-2017", "r-gudanaviciene-v-director-of-legal-aid-casework-2014"]
  }
);
