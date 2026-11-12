/* Law-making: Parliament, delegated legislation, judicial precedent. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "pickin-v-british-railways-board-1974", name: "Pickin v British Railways Board", cite: "[1974] AC 765", year: 1974, court: "HL",
    area: "law-making", topic: "lm-parliament", sub: "lmp-sovereignty", key: true,
    tags: ["Parliamentary sovereignty", "Enrolled Act rule", "Public authority"],
    gist: "A landowner says a railway company deceived Parliament to obtain a private Act that took away his rights, and asks the court to ignore the Act.",
    principle: "Courts cannot question how an Act of Parliament was passed. An Act is valid once it has passed through Parliament.",
    facts: "Pickin owned land that would have reverted to him if a railway line closed. The British Railways Act 1968 removed that right. He claimed that British Railways had misled Parliament in getting the Act passed.",
    held: "The House of Lords refused to look behind the Act. The courts have no power to examine Parliament's internal procedures or to decide whether Parliament was misled. An enrolled Act is conclusive.",
    significance: "A classic authority for the sovereignty of Parliament, showing that courts must apply a valid Act and cannot review its making.",
    links: ["r-jackson-v-attorney-general-2005"]
  },
  {
    id: "r-jackson-v-attorney-general-2005", name: "R (Jackson) v Attorney General", cite: "[2005] UKHL 56", year: 2005, court: "HL",
    area: "law-making", topic: "lm-parliament", sub: "lmp-sovereignty", key: true,
    tags: ["Parliament Acts", "Hunting Act", "Obiter"],
    gist: "Campaigners argue that the ban on fox hunting is invalid because it was forced through without the House of Lords' agreement.",
    principle: "An Act passed under the Parliament Acts 1911 and 1949 is a valid Act of Parliament, and the courts can decide whether the Parliament Acts procedure was lawfully used.",
    facts: "The Hunting Act 2004 was passed using the Parliament Act 1949, after the House of Lords refused to agree. Jackson argued the 1949 Act was itself invalid because it had been made under the 1911 Act, which could not be used to extend its own powers.",
    held: "The House of Lords held the Hunting Act valid. Acts passed under the Parliament Acts are primary legislation. Some judges said in obiter remarks that the courts might refuse to apply an Act that attacked the rule of law or removed fundamental rights.",
    significance: "A major case on sovereignty. The obiter comments are often used to argue that parliamentary sovereignty is not unlimited.",
    links: ["pickin-v-british-railways-board-1974"]
  },
  {
    id: "r-miller-v-secretary-of-state-for-exiting-the-eu-2017", name: "R (Miller) v Secretary of State for Exiting the European Union", cite: "[2017] UKSC 5", year: 2017, court: "UKSC",
    area: "law-making", topic: "lm-parliament", sub: "lmp-sovereignty", key: true,
    tags: ["Brexit", "Prerogative power", "Article 50"],
    gist: "Campaigners argue that ministers cannot trigger the process for leaving the EU without the approval of Parliament.",
    principle: "The government cannot use prerogative powers to change domestic law, so Parliament must authorise the notice to leave the EU by statute.",
    facts: "After the 2016 referendum the government planned to give notice under Article 50 using the royal prerogative. Gina Miller and others argued that this would remove rights given by the European Communities Act 1972 without an Act of Parliament.",
    held: "The Supreme Court held by 8 to 3 that an Act of Parliament was needed. The prerogative cannot be used to alter domestic law or remove rights created by statute. The devolved legislatures had no legal veto.",
    significance: "Reaffirms that Parliament, not the executive, makes and unmakes law. It led to the European Union (Notification of Withdrawal) Act 2017.",
    links: ["r-miller-v-the-prime-minister-cherry-v-advocate-general-for-scotland-2019"]
  },
  {
    id: "r-miller-v-the-prime-minister-cherry-v-advocate-general-for-scotland-2019", name: "R (Miller) v The Prime Minister; Cherry v Advocate General for Scotland", cite: "[2019] UKSC 41", year: 2019, court: "UKSC",
    area: "law-making", topic: "lm-parliament", sub: "lmp-sovereignty", key: true,
    tags: ["Prorogation", "Prerogative power", "Public authority"],
    gist: "The Prime Minister advises the Queen to suspend Parliament for five weeks shortly before the Brexit deadline, and opponents say it was done to stop scrutiny.",
    principle: "A prorogation is unlawful if it frustrates or prevents Parliament from carrying out its constitutional functions without reasonable justification.",
    facts: "In 2019, Boris Johnson advised the Queen to prorogue Parliament for about five weeks. The challengers said this was to avoid scrutiny in the weeks before the UK was due to leave the EU. The courts in England and Scotland reached different conclusions.",
    held: "The Supreme Court unanimously held that the advice was unlawful, so the prorogation was void and treated as never having happened. It had the effect of frustrating Parliament's role, and no reasonable justification was offered.",
    significance: "Establishes that the courts can review the lawfulness of prerogative powers over Parliament, based on parliamentary sovereignty and accountability.",
    links: ["r-miller-v-secretary-of-state-for-exiting-the-eu-2017"]
  },
  {
    id: "agricultural-horticultural-and-forestry-industry-training-board-v-aylesbury-mushrooms-ltd-1972", name: "Agricultural, Horticultural and Forestry Industry Training Board v Aylesbury Mushrooms Ltd", cite: "[1972] 1 WLR 190", year: 1972, court: "DC",
    area: "law-making", topic: "lm-delegated", sub: "dl-procedural", key: true,
    tags: ["Consultation", "Procedural ultra vires"],
    gist: "A mushroom grower is told to pay a training levy under a ministerial order, and says the minister did not consult its trade association before making it.",
    principle: "If the enabling Act requires consultation, failure to consult the organisations it names makes the delegated legislation invalid for procedural ultra vires.",
    facts: "The Industrial Training Act 1964 required the minister to consult organisations that represented substantial numbers of those affected before making an order. The Mushroom Growers' Association was not consulted before an order covering mushroom farms was made.",
    held: "The Divisional Court held that the consultation requirement was mandatory, not just advisory. The order was invalid as it applied to the mushroom growers, who could not be made to pay the levy.",
    significance: "The standard example of procedural ultra vires. It shows that the courts check that the procedure in the parent Act was followed.",
    links: ["r-v-secretary-of-state-for-social-security-ex-p-jcwi-1996"]
  },
  {
    id: "r-v-secretary-of-state-for-social-security-ex-p-jcwi-1996", name: "R v Secretary of State for Social Security, ex p Joint Council for the Welfare of Immigrants", cite: "[1997] 1 WLR 275", year: 1996, court: "CA",
    area: "law-making", topic: "lm-delegated", sub: "dl-substantive", key: false,
    tags: ["Asylum seekers", "Substantive ultra vires", "Public authority"],
    gist: "Regulations take away benefits from most asylum seekers who do not claim asylum on arrival, leaving many destitute.",
    principle: "Delegated legislation is substantively ultra vires if it goes beyond, or defeats, the rights that the parent Act itself gives.",
    facts: "Social security regulations in 1996 removed income support and housing benefit from asylum seekers who did not claim asylum immediately on arrival, or who were appealing a refusal. The JCWI challenged them as incompatible with the Asylum and Immigration Appeals Act 1993.",
    held: "The Court of Appeal held the regulations ultra vires. They would make the statutory right to claim asylum and to appeal worthless in practice because claimants would have no means to support themselves. Simon Brown LJ called the effect uncompromisingly draconian.",
    significance: "An example of the courts striking down delegated legislation because it undermines the parent Act. Often used to show the judicial control of ministers.",
    links: ["agricultural-horticultural-and-forestry-industry-training-board-v-aylesbury-mushrooms-ltd-1972"]
  },
  {
    id: "kruse-v-johnson-1898", name: "Kruse v Johnson", cite: "[1898] 2 QB 91", year: 1898, court: "DC",
    area: "law-making", topic: "lm-delegated", sub: "dl-unreasonableness", key: false,
    tags: ["Byelaws", "Unreasonableness", "Public authority"],
    gist: "A man is prosecuted for singing near a house after the occupier objected, and challenges the byelaw as unreasonable.",
    principle: "Byelaws made by local authorities can be struck down as unreasonable if they are manifestly unjust, made in bad faith, or oppressive.",
    facts: "Kent County Council made a byelaw banning singing or playing music within fifty yards of a dwelling house after the occupier objected. Kruse was convicted of breaching it and argued that it was unreasonable.",
    held: "The Divisional Court upheld the byelaw. Courts should be slow to strike down byelaws made by elected bodies, but could do so if they were partial, made in bad faith, unjust, or so oppressive that no reasonable person could justify them.",
    significance: "Sets the basic test for unreasonableness in delegated legislation. The courts take a more restrained approach to byelaws made by elected councils.",
    links: ["associated-provincial-picture-houses-ltd-v-wednesbury-corporation-1947"]
  },
  {
    id: "associated-provincial-picture-houses-ltd-v-wednesbury-corporation-1947", name: "Associated Provincial Picture Houses Ltd v Wednesbury Corporation", cite: "[1948] 1 KB 223", year: 1947, court: "CA",
    area: "law-making", topic: "lm-delegated", sub: "dl-unreasonableness", key: true,
    tags: ["Wednesbury unreasonableness", "Public authority"],
    gist: "A cinema is allowed to open on Sundays but only if it bars children under fifteen, and the owner says the condition is unreasonable.",
    principle: "A decision is unreasonable if it is so absurd that no reasonable authority could ever have come to it.",
    facts: "Wednesbury Corporation licensed a cinema to open on Sundays on condition that no children under 15 were admitted, even if accompanied by an adult. The cinema owner said the condition was unreasonable and outside the council's powers.",
    held: "The Court of Appeal upheld the condition. The court can interfere only if the authority took irrelevant considerations into account, ignored relevant ones, or reached a decision so unreasonable that no reasonable authority could have made it.",
    significance: "Gives its name to “Wednesbury unreasonableness”, a key ground of judicial review that is applied to delegated legislation.",
    links: ["kruse-v-johnson-1898"]
  },
  {
    id: "young-v-bristol-aeroplane-co-ltd-1944", name: "Young v Bristol Aeroplane Co Ltd", cite: "[1944] KB 718", year: 1944, court: "CA",
    area: "law-making", topic: "lm-precedent", sub: "jp-hierarchy", key: true,
    tags: ["Court of Appeal", "Binding precedent", "Per incuriam"],
    gist: "A compensation dispute leads the Court of Appeal to decide when it may refuse to follow its own earlier rulings.",
    principle: "The Court of Appeal (Civil Division) is bound by its own decisions, except in three situations.",
    facts: "The case concerned whether an injured workman had to choose between statutory compensation and damages. The Court of Appeal considered whether it was bound by its own earlier decisions and whether a full court could overrule them.",
    held: "The Court of Appeal held that it is generally bound by its own earlier decisions. The exceptions are where there are two conflicting Court of Appeal decisions, where an earlier decision conflicts with a later House of Lords decision, or where the earlier decision was made per incuriam.",
    significance: "The leading authority on how far the Court of Appeal is bound by its own precedents. It also underlies the rule in Davis v Johnson.",
    links: ["davis-v-johnson-1978", "broome-v-cassell-and-co-ltd-1972"]
  },
  {
    id: "broome-v-cassell-and-co-ltd-1972", name: "Broome v Cassell & Co Ltd", cite: "[1972] AC 1027", year: 1972, court: "HL",
    area: "law-making", topic: "lm-precedent", sub: "jp-hierarchy", key: false,
    tags: ["Exemplary damages", "Binding precedent", "Defamation"],
    gist: "After a naval officer wins libel damages over a book about a wartime convoy, the Court of Appeal criticises a House of Lords ruling on exemplary damages.",
    principle: "Lower courts must follow decisions of higher courts, even if they believe the decision is wrong.",
    facts: "Captain Broome sued for libel over a book about a disastrous wartime convoy and was awarded exemplary damages. In the Court of Appeal, Lord Denning said the House of Lords' earlier ruling in Rookes v Barnard had been made per incuriam and should not be followed.",
    held: "The House of Lords firmly rejected this. Lord Hailsham said that in a hierarchical system, each lower tier must accept loyally the decisions of the higher tiers, and Lord Denning's approach could not be accepted.",
    significance: "A strong statement of the hierarchy of the courts. It shows that the doctrine of binding precedent depends on the lower courts following the higher ones.",
    links: ["young-v-bristol-aeroplane-co-ltd-1944"]
  },
  {
    id: "davis-v-johnson-1978", name: "Davis v Johnson", cite: "[1979] AC 264", year: 1978, court: "HL",
    area: "law-making", topic: "lm-precedent", sub: "jp-departing", key: true,
    tags: ["Court of Appeal", "Domestic abuse", "Lord Denning"],
    gist: "An unmarried woman who is beaten by her partner asks the court to exclude him from their council flat, and the Court of Appeal tries to bend the rules on precedent.",
    principle: "The Court of Appeal is bound by its own earlier decisions, and the Young v Bristol Aeroplane exceptions are the only grounds for departing from them.",
    facts: "Ms Davis was assaulted by her partner and left the flat they shared. She asked for an order excluding him under the Domestic Violence and Matrimonial Proceedings Act 1976. Earlier Court of Appeal cases had limited the Act, and the Court of Appeal in this case decided to depart from them.",
    held: "The House of Lords agreed with the result on the interpretation of the Act but said the Court of Appeal was wrong to depart from its earlier decisions. It was bound by Young v Bristol Aeroplane.",
    significance: "Reaffirms that the Court of Appeal's own precedent rule is fixed. Lord Denning's attempt to relax it was firmly rejected.",
    links: ["young-v-bristol-aeroplane-co-ltd-1944"]
  },
  {
    id: "anderton-v-ryan-1985", name: "Anderton v Ryan", cite: "[1985] AC 560", year: 1985, court: "HL",
    area: "law-making", topic: "lm-precedent", sub: "jp-overruling", key: false,
    tags: ["Overruled", "Attempts", "Practice Statement"],
    gist: "A woman buys a video recorder believing it is stolen, but it is not, and she is charged with attempting to handle stolen goods.",
    principle: "The House of Lords held that there was no attempt to handle stolen goods if the goods were not in fact stolen. This was later overruled.",
    facts: "Mrs Ryan bought a video recorder, believing it to be stolen. It turned out that it was not stolen. She admitted this to the police and was charged with attempting to handle stolen goods.",
    held: "The House of Lords quashed her conviction. It held that she could not be guilty of attempt where it was impossible to commit the full offence.",
    significance: "Overruled by R v Shivpuri (1986) less than eighteen months later, using the 1966 Practice Statement. A well-known example of the House of Lords overruling its own decision.",
    links: ["r-v-shivpuri-1986"]
  },
  {
    id: "r-v-r-1991", name: "R v R", cite: "[1992] 1 AC 599", year: 1991, court: "HL",
    area: "law-making", topic: "lm-precedent", sub: "jp-overruling", key: true,
    tags: ["Marital rape", "Declaratory theory", "Family"],
    gist: "A husband is charged with attempted rape of his wife while they were living apart, and argues that a husband cannot be guilty of raping his wife.",
    principle: "The old common law rule that a husband could not be guilty of raping his wife no longer reflected the law, and was removed.",
    facts: "R and his wife had separated. He forced his way into her parents' house and attempted to have sex with her against her will. He argued that the common law, going back to Hale in the 17th century, meant that a husband could not rape his wife.",
    held: "The House of Lords upheld the conviction. The exemption was a common law fiction that no longer reflected the position of a wife in modern society, and the courts could remove it.",
    significance: "Shows judges developing the common law to match social change. The European Court of Human Rights held in SW v UK (1995) that the change was foreseeable.",
    links: []
  }
);
