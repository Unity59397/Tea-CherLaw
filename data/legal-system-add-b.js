/* The Legal System: additional cases (juries, civil procedure, judicial impartiality). */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "r-v-ponting-1985", name: "R v Ponting", cite: "", year: 1985, court: "CCt",
    area: "legal-system", topic: "ls-criminal", sub: "ls-juries", key: true,
    tags: ["Jury", "Official Secrets Act 1911", "Public interest", "Jury independence"],
    gist: "A senior civil servant leaks government papers about a warship sunk during a war, and is charged under official secrets law, with a jury deciding the case.",
    principle: "A jury can acquit a defendant even where the judge's directions point towards guilt, so the jury acts as a check on the state.",
    facts: "Clive Ponting, a senior civil servant at the Ministry of Defence, leaked documents to an MP about the sinking of the Argentine cruiser General Belgrano during the Falklands War. The documents suggested that ministers had misled Parliament. He was charged under section 2 of the Official Secrets Act 1911.",
    held: "The trial judge told the jury that the public interest was not a defence to the charge and that they had to convict if the disclosure was proven. The jury acquitted Ponting. The verdict is an example of a jury reaching its own view of justice, despite the judge's directions.",
    significance: "Used in essays on the role of juries as a check on government and on the limits of judicial direction. The Official Secrets Act 1989 replaced section 2 of the 1911 Act, partly because the old law was criticised as too broad. Students should check the exact directions given before citing them in detail.",
    links: ["r-v-gough-1993"]
  },
  {
    id: "mitchell-v-news-group-newspapers-ltd-2013", name: "Mitchell v News Group Newspapers Ltd", cite: "[2013] EWCA Civ 1537", year: 2013, court: "CA",
    area: "legal-system", topic: "ls-civil", sub: "ls-civil-procedure", key: true,
    tags: ["Civil Procedure Rules", "Relief from sanctions", "Jackson reforms", "Compliance"],
    gist: "A claimant's solicitors miss a court deadline by a short but real margin, and the claimant asks the court to excuse the failure so the claim can carry on.",
    principle: "Court rules and deadlines must be complied with, and relief from a sanction for a breach will rarely be granted.",
    facts: "In a claim against a newspaper publisher, the claimant's solicitors missed a court deadline. The defendant said the breach triggered a sanction. The claimant applied for relief from the sanction.",
    held: "The Court of Appeal held that the rules must be enforced firmly after the Jackson civil costs reforms. Relief from sanctions should be given only in rare circumstances, and a short delay did not justify excusing the breach. The Court's approach made it much harder for parties to escape sanctions for non-compliance.",
    significance: "Key case on CPR 3.9 and the enforcement of case management. It was criticised for making justice harsh, and it was modified by Denton v TH White (2014), which introduced a more flexible three-stage test. Students should use Mitchell and Denton together when discussing access to justice and efficiency.",
    links: ["denton-v-th-white-2014"]
  },
  {
    id: "denton-v-th-white-2014", name: "Denton v TH White Ltd", cite: "[2014] EWCA Civ 906", year: 2014, court: "CA",
    area: "legal-system", topic: "ls-civil", sub: "ls-civil-procedure", key: true,
    tags: ["Relief from sanctions", "Three-stage test", "Modifies Mitchell"],
    gist: "Three separate civil cases are heard together, in each of which a party missed a court deadline and asked the court to excuse the breach and let the case continue.",
    principle: "Courts should decide applications for relief from sanctions using a three-stage test: assess the seriousness of the breach, consider why it happened, then weigh all the circumstances.",
    facts: "Three appeals were heard together, and in each a party had failed to comply with a rule, order or deadline. Each asked for relief from the sanction. The Court of Appeal had to decide how to apply the approach in Mitchell v News Group Newspapers (2013) to these cases, and whether the courts had been too strict.",
    held: "The Court of Appeal held that the court should first assess how serious and significant the failure was, then consider why it happened, and then weigh all the circumstances. These include the need to enforce compliance with rules and the need for litigation to be efficient and proportionate. The Court modified the approach in Mitchell and allowed the appeals.",
    significance: "Central to CPR 3.9 and to the balance between efficient justice and access to justice. It is used in essays on whether the civil courts are too strict or too lenient. It refined rather than overruled Mitchell, so students should explain the change in approach rather than say the earlier case was overruled.",
    links: ["mitchell-v-news-group-newspapers-ltd-2013"]
  },
  {
    id: "mcgonnell-v-united-kingdom-2000", name: "McGonnell v United Kingdom", cite: "", year: 2000, court: "ECtHR",
    area: "legal-system", topic: "ls-personnel", sub: "ls-independence", key: false,
    tags: ["Impartiality", "Article 6", "Bias", "Dual roles"],
    gist: "A planning appeal is heard by a judge who also presided over the island's legislature, which had approved the planning plan at the centre of the dispute.",
    principle: "A judge who has a close connection with the body whose decision is being reviewed may lack the impartiality required by Article 6, so that the right to a fair hearing is breached.",
    facts: "Mr McGonnell wanted to build on land in Guernsey. The planning decision had to follow a development plan approved by the States of Guernsey, the island's legislature. The Bailiff, who presided over the States and also sat as a judge in the Royal Court, took part in hearing the appeal against the planning decision.",
    held: "The European Court of Human Rights held that Article 6(1) was breached. The Bailiff's dual role meant that the court hearing the appeal was not independent and impartial, given his involvement in the States, which had approved the plan. The Court was concerned with the appearance as well as the reality of bias.",
    significance: "Illustrates the requirement of judicial independence and impartiality and the difference between actual and apparent bias. Compare the domestic tests in Locabail (UK) Ltd v Bayfield Properties (2000) and Porter v Magill (2001), and the House of Lords' approach in Pinochet (No 2) where a judge's connection with a party led to the decision being set aside.",
    links: ["locabail-uk-ltd-v-bayfield-properties-ltd-2000", "porter-v-magill-2001", "ex-p-pinochet-ugarte-no-2-1999"]
  }
);
