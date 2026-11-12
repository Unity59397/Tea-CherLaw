/* Contract: consideration, promissory estoppel (additional cases). */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: "hartley-v-ponsonby-1857", name: "Hartley v Ponsonby", cite: "(1857) 7 E & B 872", year: 1857, court: "Hist",
    area: "contract", topic: "ct-formation", sub: "fm-consideration", key: false,
    tags: ["Pre-existing duty", "Seamen", "Exception to Stilk v Myrick"],
    gist: "Around half a ship's crew desert, leaving the voyage dangerous, and the captain promises the remaining sailors extra pay to carry on.",
    principle: "A promise of extra pay is supported by consideration where the existing contract has been effectively discharged, so that the claimant is doing more than the original duty.",
    facts: "A large number of the crew deserted while the ship was in port, leaving it so short-handed that sailing was dangerous. The captain promised the remaining sailors extra money if they sailed on. The owner refused to pay the extra sum and a sailor sued.",
    held: "The court held that the promise was enforceable. The ship was so undermanned that the sailors were no longer bound by their original agreement to make the voyage, so sailing on was fresh consideration for the new promise.",
    significance: "A well-known exception to Stilk v Myrick: the promise to pay more succeeds if the claimant does something extra. Distinguishing the two cases turns on how serious the shortage of crew was. Williams v Roffey later widened the exceptions.",
    links: ["stilk-v-myrick-1809", "williams-v-roffey-bros-and-nicholls-contractors-ltd-1989"]
  },
  {
    id: "pinnels-case-1602", name: "Pinnel's Case", cite: "(1602) 5 Co Rep 117a", year: 1602, court: "Hist",
    area: "contract", topic: "ct-formation", sub: "fm-consideration", key: false,
    tags: ["Part payment of debt", "Foakes v Beer"],
    gist: "A debtor pays part of a debt of about £8 on the due date, the creditor accepts it as full payment, and the creditor later sues for the balance.",
    principle: "Payment of a smaller sum on the due date cannot satisfy a larger debt, but payment of a lesser sum earlier, at a different place, or of a different item, can be good satisfaction.",
    facts: "Pinnel sued Cole for the balance of a debt of £8 10s. Cole said he had paid a smaller sum on the due date and that Pinnel had accepted it in full satisfaction of the debt.",
    held: "The court said, in resolutions that became the famous rule, that part payment on the due date is not satisfaction of the whole debt. However, a lesser sum paid earlier, at a different place, or something different such as a hawk or a robe, can be good satisfaction.",
    significance: "The origin of the rule on part payment of a debt, confirmed by the House of Lords in Foakes v Beer. The rule is criticised as unfair and is softened in practice by promissory estoppel.",
    links: ["foakes-v-beer-1884", "central-london-property-trust-ltd-v-high-trees-house-ltd-1946"]
  },
  {
    id: "d-and-c-builders-ltd-v-rees-1965", name: "D & C Builders Ltd v Rees", cite: "[1966] 2 QB 617", year: 1965, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-estoppel", key: false,
    tags: ["Promissory estoppel", "Part payment of debt", "Economic pressure"],
    gist: "A struggling building firm is pressed by a customer to accept about £300 of a bill of roughly £480 as full settlement, and later sues for the rest.",
    principle: "Promissory estoppel cannot be used where the promisor's agreement to accept less was obtained by pressure, because it would not be inequitable to allow the creditor to go back on it.",
    facts: "The builders were owed about £480 and were in serious financial difficulty. Mrs Rees, knowing this, offered £300 in full settlement and said that otherwise they would get nothing. The builders accepted the cheque, then sued for the balance.",
    held: "The Court of Appeal held that the builders could recover the balance. There was no fresh consideration. Promissory estoppel also failed, because Mrs Rees had taken advantage of the builders' position and so it was not inequitable for them to go back on the agreement.",
    significance: "Shows that estoppel needs fair conduct by the party relying on it and limits High Trees in part payment cases. Lord Denning also doubted the rule in Foakes v Beer, but the House of Lords has not overruled it.",
    links: ["foakes-v-beer-1884", "central-london-property-trust-ltd-v-high-trees-house-ltd-1946"]
  },
  {
    id: "combe-v-combe-1951", name: "Combe v Combe", cite: "[1951] 2 KB 215", year: 1951, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-estoppel", key: false,
    tags: ["Promissory estoppel", "Sword and shield", "Divorce"],
    gist: "After a divorce, a husband promises his former wife a yearly allowance, never pays it, and she sues to enforce his promise.",
    principle: "Promissory estoppel is a shield, not a sword: it can defend against enforcement of existing rights but cannot create a new cause of action where there is no consideration.",
    facts: "On the divorce, the husband promised to pay his wife a yearly sum in maintenance. He never paid. She had not applied to the court for maintenance. She sued, relying on his promise and on promissory estoppel.",
    held: "The Court of Appeal held that she could not recover. She gave no consideration, since the husband had not requested her to refrain from applying to the court. Promissory estoppel could not be used as a cause of action, as High Trees only protects a party defending a claim.",
    significance: "Confirms the sword and shield limit on promissory estoppel, which is still an exam staple. Lord Denning, who decided High Trees, accepted this limit here. Reform has been called for.",
    links: ["central-london-property-trust-ltd-v-high-trees-house-ltd-1946"]
  },
  {
    id: "hughes-v-metropolitan-railway-1877", name: "Hughes v Metropolitan Railway Co", cite: "(1877) 2 App Cas 439", year: 1877, court: "HL",
    area: "contract", topic: "ct-formation", sub: "fm-estoppel", key: false,
    tags: ["Promissory estoppel", "Landlord and tenant", "Origins of estoppel"],
    gist: "A landlord gives a tenant six months to carry out repairs, then starts talks about buying the lease, and tries to end the lease when the talks fail.",
    principle: "If one party leads another to believe strict legal rights will not be enforced, he cannot enforce them without giving reasonable notice to restore the position.",
    facts: "The landlord served notice requiring repairs within six months, failing which the lease would be forfeit. During that period, the parties began negotiating a sale of the lease, and the tenant did not do the repairs. The talks failed and the landlord claimed possession once the six months had run.",
    held: "The House of Lords held that the landlord could not enforce the forfeiture. By entering negotiations, he had led the tenant to believe the notice would not be enforced during them, so the landlord had to allow a reasonable time after the talks ended before enforcing the forfeiture.",
    significance: "Lord Cairns' statement is the foundation of the modern doctrine of promissory estoppel, relied on in High Trees. It shows that the promise can arise from conduct and suspends rights rather than ending them.",
    links: ["central-london-property-trust-ltd-v-high-trees-house-ltd-1946"]
  },
  {
    id: "chappel-and-co-ltd-v-nestle-co-ltd-1959", name: "Chappel & Co Ltd v Nestlé Co Ltd", cite: "[1960] AC 87", year: 1959, court: "HL",
    area: "contract", topic: "ct-formation", sub: "fm-consideration", key: false,
    tags: ["Adequacy of consideration", "Sufficiency", "Peppercorn"],
    gist: "A chocolate company sells a record cheaply to anyone who sends in three wrappers from its bars, and the wrappers are thrown away.",
    principle: "Consideration must be sufficient but need not be adequate; something may be good consideration even if it has little economic value to the promisee.",
    facts: "Nestlé offered a gramophone record for a small sum plus three wrappers from its chocolate bars. The owners of the copyright in the song claimed royalties based on the selling price. The question was whether the wrappers formed part of the price.",
    held: "The House of Lords held that the wrappers were part of the consideration. They had value to Nestlé as they promoted the sale of its chocolate, and it did not matter that the wrappers were worthless in themselves and were thrown away.",
    significance: "Authority that the courts do not weigh the adequacy of consideration; a peppercorn is enough. Compare Williams v Roffey, where the courts have looked for a practical benefit.",
    links: ["williams-v-roffey-bros-and-nicholls-contractors-ltd-1989"]
  },
  {
    id: "collins-v-godefrey-1831", name: "Collins v Godefrey", cite: "(1831) 1 B & Ad 950", year: 1831, court: "Hist",
    area: "contract", topic: "ct-formation", sub: "fm-consideration", key: false,
    tags: ["Pre-existing duty", "Public duty", "Witness"],
    gist: "A man summoned to give evidence in a lawsuit is promised a fee by the party who needs him, and later sues when it is not paid.",
    principle: "A promise to pay someone to perform a duty imposed by law, such as attending court under a subpoena, is not supported by consideration.",
    facts: "Collins was served with a subpoena to attend court as a witness in a case involving Godefrey. Godefrey promised to pay him for his time. Godefrey did not pay and Collins sued on the promise.",
    held: "The Court of King's Bench held that the claim failed. Collins was already under a legal duty to attend court under the subpoena, so he gave nothing in return for the promise and there was no consideration.",
    significance: "An example of the pre-existing duty rule applied to a duty imposed by law. Compare Williams v Roffey, where a promise to pay more for an existing contractual duty was enforced.",
    links: ["stilk-v-myrick-1809", "williams-v-roffey-bros-and-nicholls-contractors-ltd-1989"]
  },
  {
    id: "lampleigh-v-braithwaite-1615", name: "Lampleigh v Braithwaite", cite: "(1615) Hob 105", year: 1615, court: "Hist",
    area: "contract", topic: "ct-formation", sub: "fm-consideration", key: false,
    tags: ["Past consideration", "Exception", "Implied request"],
    gist: "A man who has killed someone asks a friend to seek a royal pardon, and after the friend has travelled and succeeded, promises him £100.",
    principle: "Past consideration is not good consideration, but an act done at the promisor's request, when payment was understood, can support a later promise that confirms it.",
    facts: "Braithwaite had killed a man and asked Lampleigh to seek a pardon from the King. Lampleigh did so at his own expense and effort. Afterwards, Braithwaite promised to pay him £100 but did not do so, and Lampleigh sued.",
    held: "The court held that the promise was enforceable. The earlier service had been done at Braithwaite's request and so the later promise was not a bare promise for a past act, but was linked to the request.",
    significance: "The origin of the exception to the past consideration rule, later set out in Pao On v Lau Yiu Long: the act was at the promisor's request, payment was understood, and the payment would have been legally enforceable if promised in advance.",
    links: ["pao-on-v-lau-yiu-long-1979", "stilk-v-myrick-1809"]
  }
);
