/* Contract: consideration, privity, terms, vitiating factors, discharge, remedies. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "stilk-v-myrick-1809", name: "Stilk v Myrick", cite: "(1809) 2 Camp 317", year: 1809, court: "Hist",
    area: "contract", topic: "ct-formation", sub: "fm-consideration", key: true,
    tags: ["Pre-existing duty", "Employment", "Seamen"],
    gist: "A ship's captain promises the remaining crew extra pay to sail home after two sailors desert, and later the owner refuses to pay.",
    principle: "A promise to do what one is already bound to do is not good consideration for a new promise.",
    facts: "Two sailors deserted during a voyage. The captain could not replace them and promised the rest of the crew the deserters' wages if they sailed the ship home. The owners refused to pay and Stilk sued for the extra money.",
    held: "Lord Ellenborough held that the claim failed. The crew were already bound to meet the normal emergencies of the voyage, so they gave nothing new in return for the promise. It would also have been against public policy to allow sailors to demand more during a voyage.",
    significance: "The classic statement of the pre-existing duty rule. It has been qualified by Williams v Roffey Bros for the performance of existing contractual duties.",
    links: ["williams-v-roffey-bros-and-nicholls-contractors-ltd-1989"]
  },
  {
    id: "williams-v-roffey-bros-and-nicholls-contractors-ltd-1989", name: "Williams v Roffey Bros & Nicholls (Contractors) Ltd", cite: "[1991] 1 QB 1", year: 1989, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-consideration", key: true,
    tags: ["Practical benefit", "Building contract", "Pre-existing duty"],
    gist: "A building firm promises extra payment to a struggling carpenter to make sure he finishes work on time, and then refuses to pay the extra.",
    principle: "A promise to pay more for the performance of an existing duty can be supported by consideration if the promisor gains a practical benefit and there is no duress or fraud.",
    facts: "Roffey, a building contractor, subcontracted carpentry work on 27 flats to Williams for £20,000. Williams ran into financial difficulties. Roffey, facing a penalty clause for late completion, promised £575 per flat for the rest of the work. Williams completed eight more flats but was not paid.",
    held: "The Court of Appeal held that the promise was enforceable. Roffey had obtained a practical benefit, since it avoided the penalty and the trouble of finding another carpenter. Glidewell LJ set out the conditions in which that benefit is good consideration.",
    significance: "A major relaxation of the pre-existing duty rule. It does not apply to part payment of a debt, which Foakes v Beer governs.",
    links: ["stilk-v-myrick-1809", "foakes-v-beer-1884"]
  },
  {
    id: "foakes-v-beer-1884", name: "Foakes v Beer", cite: "(1884) 9 App Cas 605", year: 1884, court: "HL",
    area: "contract", topic: "ct-formation", sub: "fm-consideration", key: true,
    tags: ["Part payment of debt", "Pinnel's Case"],
    gist: "A widow agrees to accept payment of a court judgment debt by instalments, and then claims interest after the debt is paid.",
    principle: "Payment of a smaller sum is not good consideration for a promise to give up the rest of a debt.",
    facts: "Dr Foakes owed Mrs Beer about £2,090 under a court judgment. They agreed in writing that he would pay by instalments and that she would take no further action. After he paid in full, she claimed interest on the judgment debt.",
    held: "The House of Lords held that she could recover the interest. Foakes had given no fresh consideration for the promise to waive it, because paying part of a debt does not amount to consideration. The rule in Pinnel's Case was confirmed.",
    significance: "Still the rule on part payment of debts, although Lord Blackburn doubted it. It was limited by promissory estoppel in High Trees.",
    links: ["central-london-property-trust-ltd-v-high-trees-house-ltd-1946"]
  },
  {
    id: "central-london-property-trust-ltd-v-high-trees-house-ltd-1946", name: "Central London Property Trust Ltd v High Trees House Ltd", cite: "[1947] KB 130", year: 1946, court: "HC",
    area: "contract", topic: "ct-formation", sub: "fm-estoppel", key: true,
    tags: ["Promissory estoppel", "Obiter", "Property"],
    gist: "During the Second World War, a landlord agrees to halve the rent on a block of flats, and after the war it claims the full rent again.",
    principle: "A promise intended to be relied on, and which is relied on, can be enforced even without consideration, but only as a shield and only for as long as the promise lasts.",
    facts: "In 1937 High Trees took a lease of a block of flats at £2,500 a year. In 1940, because of the war, the landlord agreed to halve the rent. By 1945 the flats were full again. The landlord claimed the full rent from then and also for the earlier years.",
    held: "Denning J held that the landlord could claim the full rent from 1945, as the promise applied only while the war conditions lasted. He said, obiter, that the landlord would not have been allowed to claim the unpaid half rent for the earlier years.",
    significance: "The origin of the modern doctrine of promissory estoppel. It operates only as a shield, not a sword, according to Combe v Combe.",
    links: ["foakes-v-beer-1884"]
  },
  {
    id: "tweddle-v-atkinson-1861", name: "Tweddle v Atkinson", cite: "(1861) 1 B & S 393", year: 1861, court: "Hist",
    area: "contract", topic: "ct-formation", sub: "fm-privity", key: true,
    tags: ["Privity of contract", "Marriage", "Family"],
    gist: "Two fathers promise each other to pay money to a young couple on their marriage, and when one father dies, the husband sues his estate.",
    principle: "A person who is not a party to a contract cannot enforce it, even if the contract was made for his benefit.",
    facts: "Before John Tweddle married William Guy's daughter, their fathers agreed in writing to pay sums of money to John. Guy died without paying. John sued Guy's executor to enforce the promise.",
    held: "The court held that his claim failed. He was not a party to the contract and had provided no consideration. It did not matter that the contract was clearly made for his benefit.",
    significance: "The classic case on privity. The Contracts (Rights of Third Parties) Act 1999 now allows third parties to enforce terms in certain cases.",
    links: []
  },
  {
    id: "oscar-chess-ltd-v-williams-1957", name: "Oscar Chess Ltd v Williams", cite: "[1957] 1 WLR 370", year: 1957, court: "CA",
    area: "contract", topic: "ct-terms", sub: "tm-express", key: false,
    tags: ["Representation or term", "Motoring", "Special knowledge"],
    gist: "A man trading in his car in good faith describes it as a 1948 model, and the dealer finds out later that it is an older car and worth much less.",
    principle: "Whether a statement is a term or a mere representation depends on the parties' intention, and a person who has no special knowledge is less likely to be taken to have promised its truth.",
    facts: "Williams traded in a car to a dealer. He said it was a 1948 Morris, which was what the registration book showed. In fact it was a 1939 model and the log book had been altered. The dealer paid a price based on the later date and sued when it learned the truth.",
    held: "The Court of Appeal held that the statement was only a representation and not a term of the contract. Williams had no special knowledge, while the dealer was better placed to check, and so the dealer could not claim damages for breach.",
    significance: "A key authority on the test of intention in deciding what is a term. Compare Dick Bentley Productions v Harold Smith (Motors), in which a statement by the dealer was a term.",
    links: []
  },
  {
    id: "the-moorcock-1889", name: "The Moorcock", cite: "(1889) 14 PD 64", year: 1889, court: "CA",
    area: "contract", topic: "ct-terms", sub: "tm-implied", key: false,
    tags: ["Business efficacy", "Implied terms", "Thames"],
    gist: "A ship moored at a riverside jetty is damaged when the tide goes out and it settles on a hard ridge on the river bed.",
    principle: "A term may be implied to give business efficacy to a contract, where it is necessary to make the contract work as the parties must have intended.",
    facts: "The owners of a wharf on the Thames agreed that a ship could unload at their jetty. The ship was moored there, and when the tide went out she settled on a hard ridge on the river bed and was damaged. The contract said nothing about the condition of the river bed.",
    held: "The Court of Appeal held that there was an implied term that the owners had taken reasonable care to see that the river bed was safe. Both parties must have intended it, as otherwise the contract would be unworkable.",
    significance: "The origin of the business efficacy test for implied terms. It was restated in Marks and Spencer v BNP Paribas (2015), which emphasises necessity.",
    links: []
  },
  {
    id: "hong-kong-fir-shipping-co-ltd-v-kawasaki-kisen-kaisha-ltd-1961", name: "Hong Kong Fir Shipping Co Ltd v Kawasaki Kisen Kaisha Ltd", cite: "[1962] 2 QB 26", year: 1961, court: "CA",
    area: "contract", topic: "ct-terms", sub: "tm-classification", key: true,
    tags: ["Innominate terms", "Seaworthiness", "Shipping"],
    gist: "A ship hired for two years turns out to be unseaworthy because of an inadequate engine room crew, and the charterers end the contract after a long delay.",
    principle: "Some terms are intermediate or innominate, and whether a breach allows the innocent party to terminate depends on how serious its effect is.",
    facts: "Hong Kong Fir chartered a ship to Kawasaki for 24 months. The ship was unseaworthy because her old engines were not well maintained and her engine room staff were incompetent. The ship lost many weeks to repairs, and the charterers then said they had the right to end the contract.",
    held: "The Court of Appeal held that the charterers could not end the contract. The term was neither a condition nor a warranty. The breach had not deprived them of substantially the whole benefit of the contract, since there was still a long period left.",
    significance: "Created the intermediate or innominate term, a middle option that looks at the consequences of the breach rather than just the label.",
    links: ["poussard-v-spiers-and-pond-1876"]
  },
  {
    id: "poussard-v-spiers-and-pond-1876", name: "Poussard v Spiers and Pond", cite: "(1876) 1 QBD 410", year: 1876, court: "HC",
    area: "contract", topic: "ct-terms", sub: "tm-classification", key: false,
    tags: ["Condition", "Termination", "Theatre"],
    gist: "A leading opera singer falls ill and misses the opening nights of a run, and the producers hire a replacement.",
    principle: "A breach of a condition, a term that goes to the root of the contract, allows the innocent party to terminate and claim damages.",
    facts: "Madame Poussard was engaged to sing the lead in an opera for three months. She fell ill and was unable to appear in the first week. The producers had to engage a replacement and when she recovered they refused to take her back.",
    held: "The court held that the producers were entitled to treat the contract as ended. Her appearance from the opening night was essential and her failure went to the root of the contract. It was a breach of condition.",
    significance: "An early example of a condition. Compare Bettini v Gye (1876), where the missed rehearsals were only a breach of warranty.",
    links: ["hong-kong-fir-shipping-co-ltd-v-kawasaki-kisen-kaisha-ltd-1961"]
  },
  {
    id: "lestrange-v-f-graucob-ltd-1934", name: "L'Estrange v F Graucob Ltd", cite: "[1934] 2 KB 394", year: 1934, court: "DC",
    area: "contract", topic: "ct-terms", sub: "tm-exclusion-cl", key: true,
    tags: ["Signature rule", "Exclusion clause", "Consumer"],
    gist: "A café owner signs an order form for a cigarette vending machine without reading it, and the machine does not work properly.",
    principle: "A person who signs a contractual document is bound by its terms, whether or not they have read it, unless there is fraud or misrepresentation.",
    facts: "Miss L'Estrange bought an automatic cigarette machine for her café. She signed a sales agreement with small print that excluded all conditions and warranties, including any implied by law. The machine did not work and she claimed her money back.",
    held: "The court held that she was bound by the exclusion clause. She had signed the document and, in the absence of fraud or misrepresentation, she was bound by its terms even if she had not read them.",
    significance: "The signature rule. It has been limited by the Unfair Contract Terms Act 1977 and the Consumer Rights Act 2015.",
    links: []
  },
  {
    id: "derry-v-peek-1889", name: "Derry v Peek", cite: "(1889) 14 App Cas 337", year: 1889, court: "HL",
    area: "contract", topic: "ct-vitiating", sub: "vt-misrep", key: true,
    tags: ["Fraudulent misrepresentation", "Honest belief", "Company"],
    gist: "Directors tell investors that a tramway company has the right to use steam power, believing approval will be granted, but it is refused.",
    principle: "Fraud requires a false statement made knowingly, without belief in its truth, or recklessly careless of whether it is true or false.",
    facts: "The directors of a tramway company said in a prospectus that it had the right to use steam power rather than horses. They honestly believed that the Board of Trade's approval was a formality. It was refused and the company failed. Peek bought shares in reliance on the prospectus.",
    held: "The House of Lords held that the directors were not liable for fraud. They had honestly believed the statement, so there was no fraud. A mere lack of reasonable grounds for the belief is not enough.",
    significance: "The definition of fraud in deceit. It led to the Misrepresentation Act 1967, which provides remedies for negligent misrepresentation.",
    links: ["redgrave-v-hurd-1881"]
  },
  {
    id: "redgrave-v-hurd-1881", name: "Redgrave v Hurd", cite: "(1881) 20 Ch D 1", year: 1881, court: "CA",
    area: "contract", topic: "ct-vitiating", sub: "vt-misrep", key: false,
    tags: ["Inducement", "Rescission", "Innocent misrepresentation"],
    gist: "A buyer of a solicitor's practice is told that it makes about £300 a year, and does not take up an offer to look at the accounts, which show much less.",
    principle: "A misrepresentation need not be fraudulent to allow rescission, and the representee has no duty to check the truth of what he is told.",
    facts: "Redgrave, a solicitor, agreed to sell his practice and house to Hurd, saying the practice made about £300 a year. He offered to let Hurd see the accounts, which Hurd did not look at. When the true income, about £200, was clear, Hurd refused to complete.",
    held: "The Court of Appeal held that Hurd could rescind. He had relied on the statement, which was false, and it did not matter that it was innocent or that he could have found out the truth by checking the papers.",
    significance: "Authority on inducement and that a representee need not check, and also on innocent misrepresentation allowing rescission.",
    links: ["derry-v-peek-1889"]
  },
  {
    id: "pao-on-v-lau-yiu-long-1979", name: "Pao On v Lau Yiu Long", cite: "[1980] AC 614", year: 1979, court: "PC",
    area: "contract", topic: "ct-vitiating", sub: "vt-duress", key: true,
    tags: ["Economic duress", "Illegitimate pressure", "Hong Kong"],
    gist: "A party to a share deal in Hong Kong says he gave a guarantee only because the other side threatened to cancel the main agreement.",
    principle: "Economic duress requires illegitimate pressure that amounts to a coercion of the will and leaves the victim with no practical alternative.",
    facts: "Pao On and others agreed to sell shares in a company to a company controlled by Lau Yiu Long. They were then asked to give a guarantee and the other side said it would not complete the main agreement unless this was agreed. They later argued that the guarantee was made under duress.",
    held: "The Privy Council held that there was no duress. Lord Scarman said that pressure must amount to a coercion of the will so as to vitiate consent, and listed factors such as protesting, having an alternative, and taking independent advice. The pressure was not illegitimate here.",
    significance: "The leading statement on economic duress as a vitiating factor. The remedy is for the contract to be voidable.",
    links: []
  },
  {
    id: "taylor-v-caldwell-1863", name: "Taylor v Caldwell", cite: "(1863) 3 B & S 826", year: 1863, court: "Hist",
    area: "contract", topic: "ct-discharge", sub: "dc-frustration", key: true,
    tags: ["Frustration", "Destruction of subject matter", "Music hall"],
    gist: "A music hall hired for a series of concerts burns down a few days before the first one, through no fault of either party.",
    principle: "A contract is discharged by frustration if, without the fault of either party, its subject matter is destroyed so that performance is impossible.",
    facts: "Caldwell agreed to let Taylor use a music hall for four concerts. Shortly before the first concert, the hall was destroyed by fire, without fault on either side. Taylor sued for the expense of advertising and preparing.",
    held: "The court held that both parties were excused from the contract. Blackburn J implied a condition that the contract would be discharged if the hall ceased to exist.",
    significance: "The origin of the doctrine of frustration, which softened the rule of absolute contractual liability. It is now supplemented by the Law Reform (Frustrated Contracts) Act 1943.",
    links: ["krell-v-henry-1903"]
  },
  {
    id: "krell-v-henry-1903", name: "Krell v Henry", cite: "[1903] 2 KB 740", year: 1903, court: "CA",
    area: "contract", topic: "ct-discharge", sub: "dc-frustration", key: false,
    tags: ["Frustration of purpose", "Coronation", "Property"],
    gist: "A man rents a flat for two days to watch a royal procession, and the procession is cancelled because the king is ill.",
    principle: "A contract can be frustrated if an event destroys the common purpose which both parties had in mind, even if performance is still possible.",
    facts: "Henry hired rooms on Pall Mall for two days, in order to watch the coronation procession of Edward VII. The contract did not mention the procession. The procession was cancelled because of the King's illness. Henry had paid a deposit and refused to pay the rest.",
    held: "The Court of Appeal held that Henry did not have to pay the balance. The coronation procession was the foundation of the contract, and the cancellation of the procession frustrated it.",
    significance: "The leading case on frustration of purpose. Compare Herne Bay Steam Boat v Hutton (1903), where the contract was not frustrated.",
    links: ["taylor-v-caldwell-1863"]
  },
  {
    id: "hadley-v-baxendale-1854", name: "Hadley v Baxendale", cite: "(1854) 9 Exch 341", year: 1854, court: "Hist",
    area: "contract", topic: "ct-remedies", sub: "cr-damages", key: true,
    tags: ["Remoteness", "Foreseeability", "Lost profits"],
    gist: "A mill's broken crankshaft is sent for repair by carrier, the carrier delays, and the mill is closed for longer than expected.",
    principle: "Damages for breach cover loss arising naturally from the breach, or loss that was in the reasonable contemplation of both parties when they made the contract.",
    facts: "The shaft of Hadley's mill broke. He sent it with a carrier, Baxendale, to be used as a pattern for a new one. Baxendale delayed the delivery and the mill stood idle for longer. Hadley sued for lost profits. Baxendale did not know the mill had no spare shaft.",
    held: "The court held that Baxendale was not liable for the lost profits. He had not been told that the mill would stop without the shaft, so the loss was not within the reasonable contemplation of the parties.",
    significance: "The leading authority on remoteness of damage in contract, with its two limbs. It was refined in Victoria Laundry v Newman and The Heron II.",
    links: []
  },
  {
    id: "ruxley-electronics-and-construction-ltd-v-forsyth-1995", name: "Ruxley Electronics and Construction Ltd v Forsyth", cite: "[1996] AC 344", year: 1995, court: "HL",
    area: "contract", topic: "ct-remedies", sub: "cr-loss", key: false,
    tags: ["Loss of amenity", "Cost of cure", "Swimming pool"],
    gist: "A homeowner's new swimming pool is built shallower than the contract specified, but it is still perfectly safe to use.",
    principle: "If the cost of rebuilding is out of proportion to the benefit, a court may award damages for loss of amenity instead of the cost of cure.",
    facts: "Forsyth asked Ruxley to build a pool 7 feet 6 inches deep at its deepest. It was built to 6 feet 9 inches and was safe to dive into. The cost of rebuilding was £21,560. The judge awarded £2,500 for the loss of amenity.",
    held: "The House of Lords restored the award of £2,500. The cost of rebuilding was out of all proportion to the benefit and it was unreasonable to insist on it, as Forsyth did not intend to rebuild. Damages for loss of amenity were appropriate.",
    significance: "A leading case on the measure of damages, where the courts treat the cost of cure and diminution in value as alternatives and look at reasonableness.",
    links: []
  }
);
