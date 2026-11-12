/* Law-making: statutory interpretation and EU law. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "whiteley-v-chappell-1868", name: "Whiteley v Chappell", cite: "(1868) LR 4 QB 147", year: 1868, court: "DC",
    area: "law-making", topic: "lm-interpretation", sub: "si-literal", key: true,
    tags: ["Literal rule", "Absurd result"],
    gist: "A man pretends to be a recently dead person so that he can vote in that person's name.",
    principle: "Under the literal rule, words are given their plain, ordinary meaning even if the result seems unjust or absurd.",
    facts: "Whiteley voted at an election by pretending to be a man who had died. He was charged under a statute that made it an offence to personate “any person entitled to vote”.",
    held: "The court quashed the conviction. A dead person is not “entitled to vote”, so the words of the statute did not cover the conduct, even though it was clearly the type of wrongdoing the Act aimed to stop.",
    significance: "A standard example of the literal rule giving a result that Parliament probably did not intend. Compare Fisher v Bell.",
    links: ["fisher-v-bell-1960", "london-and-north-eastern-railway-co-v-berriman-1946"]
  },
  {
    id: "london-and-north-eastern-railway-co-v-berriman-1946", name: "London and North Eastern Railway Co v Berriman", cite: "[1946] AC 278", year: 1946, court: "HL",
    area: "law-making", topic: "lm-interpretation", sub: "si-literal", key: false,
    tags: ["Literal rule", "Employment", "Railways"],
    gist: "A railway worker is killed by a train while oiling the points, and his widow claims compensation available to those killed while relaying or repairing the track.",
    principle: "Under the literal rule, a statute is applied according to the natural meaning of the words, even if it leads to harsh results.",
    facts: "Berriman was a railway worker who was killed by a train while oiling points. His widow claimed compensation under a provision that applied to workers “relaying or repairing” the track.",
    held: "The House of Lords denied the claim. Oiling points was maintenance rather than relaying or repairing, so it was outside the plain meaning of the words used.",
    significance: "A frequently cited example of the harshness of the literal rule. Used when evaluating whether the courts should look at Parliament's purpose.",
    links: ["whiteley-v-chappell-1868"]
  },
  {
    id: "adler-v-george-1964", name: "Adler v George", cite: "[1964] 2 QB 7", year: 1964, court: "DC",
    area: "law-making", topic: "lm-interpretation", sub: "si-golden", key: true,
    tags: ["Golden rule", "Official Secrets Act", "Protest"],
    gist: "A protester who is inside an RAF base is charged with obstructing the armed forces “in the vicinity of” the base.",
    principle: "Under the golden rule, a court can depart from the literal meaning of words to avoid an absurd result.",
    facts: "Adler took part in a protest at an RAF base and was charged under the Official Secrets Act 1920 with obstructing members of the armed forces “in the vicinity of” a prohibited place. He argued that he was in the base, not near it.",
    held: "The Divisional Court upheld the conviction. Reading “in the vicinity of” to include “in” avoided the absurd result that it would be an offence to obstruct near the base but not inside it.",
    significance: "A leading example of the narrow form of the golden rule, which resolves ambiguity and absurdity by adding or changing words.",
    links: ["re-sigsworth-1935"]
  },
  {
    id: "re-sigsworth-1935", name: "Re Sigsworth", cite: "[1935] Ch 89", year: 1934, court: "HC",
    area: "law-making", topic: "lm-interpretation", sub: "si-golden", key: false,
    tags: ["Golden rule", "Murder", "Inheritance", "Family"],
    gist: "A son who murdered his mother stands to inherit her estate under the rules for those who die without a will.",
    principle: "Under the broad form of the golden rule, a court may avoid a literal reading that would be repugnant, here by refusing to let a person profit from a crime.",
    facts: "Mrs Sigsworth died without a will and her son, who had murdered her, was her nearest relative. Under the Administration of Estates Act 1925, “issue” would inherit.",
    held: "The High Court held that the murderer could not inherit. The Act should be read subject to the rule of public policy that a person cannot benefit from their own crime.",
    significance: "A frequently used example of the broad golden rule, which allows a court to depart from the meaning of the words on public policy grounds.",
    links: ["adler-v-george-1964"]
  },
  {
    id: "heydons-case-1584", name: "Heydon's Case", cite: "(1584) 3 Co Rep 7a", year: 1584, court: "Hist",
    area: "law-making", topic: "lm-interpretation", sub: "si-mischief", key: true,
    tags: ["Mischief rule", "Four questions"],
    gist: "A dispute over a Tudor statute leads the judges to set out how to find the problem the Act was meant to solve.",
    principle: "A court should interpret an Act by identifying the gap in the old law, the mischief Parliament wanted to cure, and the remedy it provided.",
    facts: "The case involved a dispute over a property interest and the effect of a Tudor statute. The Barons of the Exchequer set out their approach to reading statutes.",
    held: "The court set out four questions: what was the common law before the Act; what was the mischief or defect the common law did not cover; what remedy Parliament appointed; and the true reason for the remedy. The judge should then adopt the reading that suppresses the mischief.",
    significance: "The source of the mischief rule, the oldest approach to statutory interpretation. It is a forerunner of the modern purposive approach.",
    links: ["smith-v-hughes-1960"]
  },
  {
    id: "smith-v-hughes-1960", name: "Smith v Hughes", cite: "[1960] 1 WLR 830", year: 1960, court: "DC",
    area: "law-making", topic: "lm-interpretation", sub: "si-mischief", key: true,
    tags: ["Mischief rule", "Street Offences Act 1959", "Soliciting"],
    gist: "Women tap on windows and call to men from balconies and open windows to attract custom, and are prosecuted for soliciting in a street.",
    principle: "Under the mischief rule, a statute should be read to prevent the problem it was passed to deal with, even if the wording is narrower.",
    facts: "Several women solicited men from inside a house, by tapping on a window or calling from a balcony. They were charged under the Street Offences Act 1959 with soliciting in a street or public place.",
    held: "The Divisional Court upheld the convictions. The aim of the Act was to clean up the streets for the public, so the mischief was soliciting that affected people in the street, whether the women were inside or not.",
    significance: "The standard modern example of the mischief rule. A literal approach would have meant an acquittal.",
    links: ["heydons-case-1584"]
  },
  {
    id: "pepper-v-hart-1992", name: "Pepper v Hart", cite: "[1993] AC 593", year: 1992, court: "HL",
    area: "law-making", topic: "lm-interpretation", sub: "si-aids", key: true,
    tags: ["Hansard", "Extrinsic aids", "Tax"],
    gist: "Teachers at a private school pay reduced fees for their own children, and the tax authorities say the benefit is taxable. The Act is unclear, so the court turns to ministers' statements.",
    principle: "Courts may refer to Hansard where legislation is ambiguous or obscure, or leads to an absurdity, and the statement relied on is clear and made by the minister promoting the Bill.",
    facts: "Teachers at Malvern College paid reduced fees for their children. The Revenue said they should be taxed on the cost to the school of providing the benefit. The statute was unclear about how to value it.",
    held: "A House of Lords majority allowed a reference to Hansard. Ministerial statements during the passage of the Bill showed that the benefit would be taxed at the additional cost to the school, which was small, so the teachers won.",
    significance: "A major change to the rule that prevented use of Hansard. Later cases have kept the exception narrow.",
    links: []
  },
  {
    id: "r-quintavalle-v-secretary-of-state-for-health-2003", name: "R (Quintavalle) v Secretary of State for Health", cite: "[2003] UKHL 13", year: 2003, court: "HL",
    area: "law-making", topic: "lm-interpretation", sub: "si-purposive", key: true,
    tags: ["Purposive approach", "Cloning", "Medical"],
    gist: "A pro-life group argues that cloned embryos created without fertilisation are outside a law that regulates embryo research.",
    principle: "Under the purposive approach, a court gives an Act the meaning that fits its aim and applies it to new developments that its drafters could not have foreseen.",
    facts: "The Human Fertilisation and Embryology Act 1990 regulated a “live human embryo where fertilisation is complete”. Scientists later created embryos by cell nuclear replacement, as with Dolly the sheep, without fertilisation. The question was whether the Act covered them.",
    held: "The House of Lords held that the Act covered them. Looked at as a whole, the purpose of the Act was to regulate embryos created outside the body, and Parliament would have wanted it to apply to such developments.",
    significance: "A leading modern example of the purposive approach. It also shows that statutes are interpreted as “always speaking”.",
    links: []
  },
  {
    id: "powell-v-kempton-park-racecourse-co-1899", name: "Powell v Kempton Park Racecourse Co", cite: "[1899] AC 143", year: 1899, court: "HL",
    area: "law-making", topic: "lm-interpretation", sub: "si-language", key: false,
    tags: ["Ejusdem generis", "Gambling"],
    gist: "A bookmaker takes bets in an open-air enclosure at a racecourse, and is prosecuted under a law about betting in a “house, office, room or other place”.",
    principle: "Under the ejusdem generis rule, general words that follow a list of specific words are limited to things of the same kind.",
    facts: "The Betting Act 1853 banned the use of a “house, office, room or other place” for betting. A bookmaker took bets in the open-air Tattersall's ring at Kempton Park.",
    held: "The House of Lords held that “other place” had to be read with the specific words before it. All of them are indoor places, so an open-air enclosure was not covered.",
    significance: "The leading case on the ejusdem generis rule, one of the three language rules (with noscitur a sociis and expressio unius).",
    links: []
  },
  {
    id: "ghaidan-v-godin-mendoza-2004", name: "Ghaidan v Godin-Mendoza", cite: "[2004] UKHL 30", year: 2004, court: "HL",
    area: "law-making", topic: "lm-interpretation", sub: "si-hra-eu", key: true,
    tags: ["Human Rights Act 1998", "Section 3", "Same-sex couples", "Family"],
    gist: "After a man dies, his same-sex partner is told he has no right to take over the tenancy because he was not living “as his wife or husband”.",
    principle: "Section 3 of the Human Rights Act 1998 requires courts to read legislation in a way that is compatible with Convention rights where possible, even if that means departing from the ordinary meaning.",
    facts: "Mr Godin-Mendoza lived with his partner, Mr Wallwyn-James, in a flat for many years. After his partner's death the landlord sought to end the tenancy, because the Rent Act 1977 allowed a survivor to take over if living with the tenant “as his or her wife or husband”.",
    held: "The House of Lords held that the words could be read to include same-sex partners, so that the Act was compatible with Article 14 with Article 8. Section 3 is a strong tool, but it cannot be used to go against a fundamental feature of the Act.",
    significance: "The leading authority on s3 HRA. It is cited when discussing how the Act affects interpretation and the role of the judges.",
    links: ["r-v-a-no-2-2001"]
  },
  {
    id: "r-v-a-no-2-2001", name: "R v A (No 2)", cite: "[2001] UKHL 25", year: 2001, court: "HL",
    area: "law-making", topic: "lm-interpretation", sub: "si-hra-eu", key: false,
    tags: ["Human Rights Act 1998", "Section 3", "Rape shield"],
    gist: "A man charged with rape wants to give evidence of an earlier consensual relationship with the complainant, which a statute restricts.",
    principle: "Section 3 HRA can require a court to read words into a statute to protect the right to a fair trial.",
    facts: "Section 41 of the Youth Justice and Criminal Evidence Act 1999 restricted evidence about a complainant's past sexual behaviour. A defendant said it prevented him from putting forward a relevant defence, so it breached the right to a fair trial under Article 6.",
    held: "The House of Lords held that, using s3, the restrictions should be read subject to an implied provision allowing evidence needed for a fair trial. A declaration of incompatibility was therefore not needed.",
    significance: "An early example of a very wide use of s3, which was later more restrained in Ghaidan v Godin-Mendoza.",
    links: ["ghaidan-v-godin-mendoza-2004"]
  },
  {
    id: "van-gend-en-loos-v-nederlandse-administratie-der-belastingen-1963", name: "Van Gend en Loos v Nederlandse Administratie der Belastingen", cite: "Case 26/62, [1963] ECR 1", year: 1963, court: "CJEU",
    area: "law-making", topic: "lm-eu", sub: "eu-effect", key: true,
    tags: ["Direct effect", "Treaty Articles"],
    gist: "A Dutch transport firm challenges a customs duty increase, and relies on a Treaty ban on new duties.",
    principle: "Treaty provisions that are clear, unconditional and not dependent on further action can have direct effect, so individuals can rely on them in national courts.",
    facts: "Van Gend en Loos imported a chemical from West Germany and was charged a higher import duty than before. It argued that this breached Article 12 of the EEC Treaty, which prohibited new customs duties between member states.",
    held: "The Court of Justice held that the Community was a new legal order and individuals could rely on directly effective Treaty provisions. Article 12 was clear and unconditional, so it gave rights that national courts must protect.",
    significance: "The foundation of direct effect in EU law. After Brexit it no longer applies to the UK going forward, but it explains how EU law once operated in domestic courts.",
    links: ["costa-v-enel-1964", "van-duyn-v-home-office-1974"]
  },
  {
    id: "costa-v-enel-1964", name: "Costa v ENEL", cite: "Case 6/64, [1964] ECR 585", year: 1964, court: "CJEU",
    area: "law-making", topic: "lm-eu", sub: "eu-supremacy", key: true,
    tags: ["Supremacy", "Nationalisation"],
    gist: "A shareholder refuses to pay a small electricity bill, arguing that the nationalisation of the electricity industry breached the Treaty.",
    principle: "EU law takes precedence over conflicting national law, including laws passed after the Treaty.",
    facts: "Mr Costa was a shareholder in an electricity company that was nationalised by Italy, and he refused to pay a bill of 1,925 lire. He argued that the nationalisation law breached the EEC Treaty. The Italian government said that the later Italian law prevailed.",
    held: "The Court of Justice held that the Treaty created its own legal system that became part of the law of member states. It would be impossible for states to override it with later national law, so EU law is supreme.",
    significance: "The origin of the doctrine of supremacy of EU law. It led to the question of its effect on parliamentary sovereignty, seen in Factortame.",
    links: ["r-v-secretary-of-state-for-transport-ex-p-factortame-ltd-no-2-1990"]
  },
  {
    id: "r-v-secretary-of-state-for-transport-ex-p-factortame-ltd-no-2-1990", name: "R v Secretary of State for Transport, ex p Factortame Ltd (No 2)", cite: "[1991] 1 AC 603", year: 1990, court: "HL",
    area: "law-making", topic: "lm-eu", sub: "eu-supremacy", key: true,
    tags: ["Supremacy", "Implied repeal", "Parliamentary sovereignty", "Fishing"],
    gist: "Spanish-owned fishing companies registered in the UK challenge a new Act that stops them from fishing under the British flag.",
    principle: "National courts must disapply an Act of Parliament that conflicts with directly effective EU law.",
    facts: "The Merchant Shipping Act 1988 required fishing vessels registered in the UK to be mainly British-owned. Factortame and other companies, mainly Spanish-owned, said this breached EU law and asked for interim relief. English law would not allow courts to suspend an Act.",
    held: "After a reference to the Court of Justice, the House of Lords held that the courts must set aside the 1988 Act to the extent that it conflicted with EU law, and could grant interim relief.",
    significance: "The first time a court disapplied an Act of Parliament. It is a key case on how membership of the EU affected the traditional idea of sovereignty and implied repeal.",
    links: ["costa-v-enel-1964", "francovich-and-bonifaci-v-italy-1991"]
  },
  {
    id: "van-duyn-v-home-office-1974", name: "Van Duyn v Home Office", cite: "Case 41/74, [1974] ECR 1337", year: 1974, court: "CJEU",
    area: "law-making", topic: "lm-eu", sub: "eu-effect", key: true,
    tags: ["Directives", "Direct effect", "Public policy"],
    gist: "A Dutch woman is refused entry to the UK to work for the Church of Scientology and relies on an EU directive on free movement.",
    principle: "A directive can have direct effect if it is clear, precise and unconditional, and the time for implementation has passed.",
    facts: "Ms Van Duyn, a Dutch national, was refused entry to the UK to take a job with the Church of Scientology, which the UK government considered socially harmful. She relied on a directive that limited the grounds of public policy for restricting free movement.",
    held: "The Court of Justice held that a directive can be directly effective where its obligations are clear and unconditional. She was able to rely on it in the national court, although the UK's decision was still allowed on public policy grounds.",
    significance: "Established that directives can be directly effective, which was then limited to vertical effect by Marshall.",
    links: ["marshall-v-southampton-and-south-west-hampshire-area-health-authority-1986"]
  },
  {
    id: "marshall-v-southampton-and-south-west-hampshire-area-health-authority-1986", name: "Marshall v Southampton and South-West Hampshire Area Health Authority (Teaching)", cite: "Case 152/84, [1986] QB 401", year: 1986, court: "CJEU",
    area: "law-making", topic: "lm-eu", sub: "eu-effect", key: true,
    tags: ["Directives", "Vertical direct effect", "Employment", "Public authority"],
    gist: "A dietician is dismissed at 62 when the retirement age for men is 65, and she relies on an equal treatment directive against her public-sector employer.",
    principle: "Directives have vertical direct effect only, so they can be enforced against the State and its emanations but not against private parties.",
    facts: "Helen Marshall was dismissed by a health authority when she turned 62, because the authority's policy was that women should retire at 60 and men at 65. She said that this breached the Equal Treatment Directive.",
    held: "The Court of Justice held that she could rely on the directive against the health authority, which was a public body and so part of the State. A directive cannot be relied on against a private person, since it is addressed to member states.",
    significance: "Confirms vertical but not horizontal direct effect for directives, which led to the development of indirect effect and state liability.",
    links: ["van-duyn-v-home-office-1974", "francovich-and-bonifaci-v-italy-1991"]
  },
  {
    id: "francovich-and-bonifaci-v-italy-1991", name: "Francovich and Bonifaci v Italy", cite: "Joined Cases C-6/90 and C-9/90, [1991] ECR I-5357", year: 1991, court: "CJEU",
    area: "law-making", topic: "lm-eu", sub: "eu-state-liability", key: true,
    tags: ["State liability", "Failure to implement", "Employment"],
    gist: "Workers whose employers become insolvent lose their pay because Italy never implemented a directive that was meant to protect them.",
    principle: "A member state must compensate individuals for loss caused by its failure to implement a directive, if the directive was intended to give rights, the rights can be identified, and there is a causal link.",
    facts: "A directive required member states to set up a fund to pay employees' wages when their employer became insolvent. Italy did not do so. Mr Francovich and others were owed wages by insolvent employers and sued the Italian State.",
    held: "The Court of Justice held that the directive did not have direct effect, but the State was liable to pay damages for failing to implement it. Liability depends on the three conditions, and the national court decides how the claim works.",
    significance: "Created the principle of state liability, which fills the gap left by the lack of horizontal direct effect for directives.",
    links: ["marshall-v-southampton-and-south-west-hampshire-area-health-authority-1986"]
  }
);
