/* Law of Contract (1 of 4): offer, revocation, acceptance, intention to create legal relations. */
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  /* ---------- Offer and invitation to treat ---------- */
  {
    id: "carlill-v-carbolic-smoke-ball-1893", name: "Carlill v Carbolic Smoke Ball Co", cite: "[1893] 1 QB 256", year: 1893, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-offer", key: true,
    tags: ["Unilateral contract", "Advertisement", "Acceptance by conduct"],
    gist: "A company advertises £100 to anyone who catches flu after using its product as directed, says £1,000 is deposited at a bank, and refuses to pay when a user falls ill.",
    principle: "An advertisement can be a unilateral offer to the whole world, accepted by performing its conditions without telling the offeror.",
    facts: "The company advertised that it would pay £100 to anyone who caught influenza after using its smoke ball three times daily for two weeks, and said £1,000 was deposited at the Alliance Bank. Mrs Carlill used the ball as directed, caught flu and claimed the £100.",
    held: "The Court of Appeal held there was a binding contract. The advert was an offer to the world, not a mere puff, because the bank deposit showed serious intent. Using the ball as directed was acceptance, and notice of acceptance was not required. Consideration was the inconvenience of using the ball and the benefit to the company.",
    significance: "Leading case on unilateral contracts, adverts as offers and acceptance by conduct. Contrast with Partridge v Crittenden, where an advert was only an invitation to treat.",
    links: ["partridge-v-crittenden-1968", "errington-v-errington-and-woods-1952"]
  },
  {
    id: "fisher-v-bell-1960", name: "Fisher v Bell", cite: "[1961] 1 QB 394", year: 1960, court: "DC",
    area: "contract", topic: "ct-formation", sub: "fm-offer", key: false,
    tags: ["Invitation to treat", "Shop window", "Statutory interpretation"],
    gist: "A shopkeeper displays a flick knife in his window with a price tag and is prosecuted for offering it for sale, which a statute prohibits.",
    principle: "Goods displayed in a shop window with a price are an invitation to treat, not an offer.",
    facts: "Bell displayed a flick knife with a price ticket in his shop window. The Restriction of Offensive Weapons Act 1959 made it an offence to offer such a knife for sale. He was prosecuted.",
    held: "The Divisional Court held he had not offered the knife for sale. In contract law a display of goods is an invitation to treat, and the customer makes the offer. The court applied the ordinary contract meaning of the words, so the conviction was quashed.",
    significance: "Standard authority on shop displays. Also a famous example of the literal rule of statutory interpretation. Parliament later closed the gap by amending the legislation.",
    links: ["pharmaceutical-society-v-boots-1953", "partridge-v-crittenden-1968"]
  },
  {
    id: "pharmaceutical-society-v-boots-1953", name: "Pharmaceutical Society of Great Britain v Boots Cash Chemists (Southern) Ltd", cite: "[1953] 1 QB 401", year: 1953, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-offer", key: true,
    tags: ["Invitation to treat", "Self-service", "Pharmacy and Poisons Act 1933"],
    gist: "A chemist switches to self-service, so customers take medicines from shelves and pay at the till, where a pharmacist can supervise the sale.",
    principle: "Goods on display in a self-service shop are an invitation to treat. The customer makes the offer at the till, and the sale is complete when the cashier accepts.",
    facts: "Boots introduced self-service in a pharmacy. Customers took goods, including some listed poisons, from the shelves and paid at the cash desk, where a registered pharmacist supervised. The Society argued the sale was made when the customer picked the goods up, without supervision.",
    held: "The Court of Appeal held the display was an invitation to treat. The customer made an offer by bringing goods to the till and the contract was made when the cashier accepted. The pharmacist's supervision at that point satisfied the Act.",
    significance: "Key authority that shelf displays are not offers. Practical reasoning: customers can change their minds and the shop is not bound to sell to everyone.",
    links: ["fisher-v-bell-1960"]
  },
  {
    id: "partridge-v-crittenden-1968", name: "Partridge v Crittenden", cite: "[1968] 1 WLR 1204", year: 1968, court: "DC",
    area: "contract", topic: "ct-formation", sub: "fm-offer", key: false,
    tags: ["Invitation to treat", "Advertisement", "Protection of Birds Act 1954"],
    gist: "A man places a small advert for bramblefinch hens at 25 shillings each and is prosecuted for offering a wild bird for sale.",
    principle: "An advertisement in a newspaper or magazine is generally an invitation to treat, not an offer.",
    facts: "Crittenden placed an advert in a magazine reading 'Quality British bramblefinch cocks, bramblefinch hens, 25s each'. He was charged under the Protection of Birds Act 1954 with offering a live wild bird for sale.",
    held: "The Divisional Court quashed the conviction. The advert was an invitation to treat, not an offer for sale. If it were an offer, a seller with limited stock could be bound to more buyers than he could supply.",
    significance: "Contrasts with Carlill, where the advert was an offer because it was unilateral and showed intent to be bound. Another case where the contract meaning of 'offer' was applied to a statute.",
    links: ["carlill-v-carbolic-smoke-ball-1893", "fisher-v-bell-1960"]
  },
  {
    id: "gibson-v-manchester-city-council-1979", name: "Gibson v Manchester City Council", cite: "[1979] 1 WLR 294", year: 1979, court: "HL",
    area: "contract", topic: "ct-formation", sub: "fm-offer", key: false,
    tags: ["Invitation to treat", "Council house sale", "Offer and acceptance"],
    gist: "A tenant returns a form to buy his council house after a letter saying the council 'may be prepared to sell', then the council changes policy before any contract is signed.",
    principle: "A statement that someone 'may be prepared to sell' is an invitation to treat. Contracts are analysed by looking for a clear offer and a clear acceptance.",
    facts: "Manchester City Council wrote to Mr Gibson that it 'may be prepared to sell' his house at a stated price and invited him to apply. He returned the application form. After a change of council control, sales were stopped before contracts were exchanged.",
    held: "The House of Lords held there was no contract. The letter was an invitation to treat, the application was an offer and the council never accepted it. The Court of Appeal, which had looked at the correspondence as a whole, was reversed.",
    significance: "Confirms the offer-and-acceptance analysis against Lord Denning's looser approach. Compare Storer v Manchester City Council, decided differently on its documents.",
    links: ["storer-v-manchester-city-council-1974"]
  },
  {
    id: "storer-v-manchester-city-council-1974", name: "Storer v Manchester City Council", cite: "[1974] 1 WLR 1403", year: 1974, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-offer", key: false,
    tags: ["Objective test", "Council house sale", "Specific performance"],
    gist: "A tenant signs and returns an agreement to buy his council house, then the council, under new political control, refuses to complete.",
    principle: "Whether a contract exists is judged objectively from the parties' words and conduct, not their hidden intentions.",
    facts: "The council sent Mr Storer an agreement for sale of his house and told him that if he signed and returned it the council would exchange contracts. He signed and returned it. A change of council control led the council to refuse to go on.",
    held: "The Court of Appeal held a binding contract existed when he returned the signed agreement. The council's documents amounted to an offer which he had accepted, so he could not be refused. Specific performance was ordered.",
    significance: "Shows the objective test of agreement in action. Contrast with Gibson, where the council's letter was only an invitation to treat.",
    links: ["gibson-v-manchester-city-council-1979"]
  },
  {
    id: "harvey-v-facey-1893", name: "Harvey v Facey", cite: "[1893] AC 552", year: 1893, court: "PC",
    area: "contract", topic: "ct-formation", sub: "fm-offer", key: false,
    tags: ["Invitation to treat", "Request for information", "Telegrams"],
    gist: "A buyer telegraphs to ask whether a property is for sale and for the lowest price. The owner replies with a price only, and the buyer then says he accepts.",
    principle: "A statement of the lowest price in answer to a request for information is not an offer to sell.",
    facts: "Harvey telegraphed Facey: 'Will you sell us Bumper Hall Pen? Telegraph lowest cash price.' Facey replied: 'Lowest price for Bumper Hall Pen £900.' Harvey then wired that he accepted £900. Facey did not reply.",
    held: "The Privy Council held there was no contract. Facey had answered only the question about price. He had not answered the question whether he would sell, so there was no offer for Harvey to accept.",
    significance: "Classic case on the line between an offer and a mere supply of information. Compare Stevenson, Jacques v McLean on requests for information.",
    links: ["stevenson-jacques-v-mclean-1880"]
  },
  {
    id: "grainger-v-gough-1896", name: "Grainger & Son v Gough", cite: "[1896] AC 325", year: 1896, court: "HL",
    area: "contract", topic: "ct-formation", sub: "fm-offer", key: false,
    tags: ["Invitation to treat", "Price list", "Tax case"],
    gist: "A foreign wine merchant sends price lists to customers in England, and a tax dispute turns on where the resulting contracts were made.",
    principle: "A price list sent to potential customers is an invitation to treat, not an offer.",
    facts: "A French wine merchant sent price lists to people in England through an agent. Whether he was liable to English income tax depended on where the sales contracts were made.",
    held: "The House of Lords held the price lists were not offers. If they were, the merchant could be bound to supply more wine than he had. The customer's order was the offer, accepted abroad by the merchant.",
    significance: "Early statement that price lists and catalogues are invitations to treat. Supports the later cases on shop displays and adverts.",
    links: ["pharmaceutical-society-v-boots-1953"]
  },

  /* ---------- Counter-offers and revocation ---------- */
  {
    id: "hyde-v-wrench-1840", name: "Hyde v Wrench", cite: "(1840) 3 Beav 334", year: 1840, court: "Hist",
    area: "contract", topic: "ct-formation", sub: "fm-revocation", key: false,
    tags: ["Counter-offer", "Termination of offer"],
    gist: "A landowner offers a farm for £1,000, the buyer proposes £950, the owner refuses, and the buyer then says he will pay £1,000 after all.",
    principle: "A counter-offer destroys the original offer, which cannot then be accepted.",
    facts: "Wrench offered to sell his farm to Hyde for £1,000. Hyde said he would pay £950, which Wrench refused. Hyde then said he accepted the £1,000 price. Wrench would not go ahead and Hyde sued.",
    held: "The Rolls Court held there was no contract. Hyde's offer of £950 was a counter-offer which rejected and ended Wrench's original offer, so it was no longer open to be accepted.",
    significance: "Starting authority on counter-offers. Contrast with Stevenson, Jacques v McLean, where a mere request for information did not kill the offer.",
    links: ["stevenson-jacques-v-mclean-1880"]
  },
  {
    id: "stevenson-jacques-v-mclean-1880", name: "Stevenson, Jacques & Co v McLean", cite: "(1880) 5 QBD 346", year: 1880, court: "HC",
    area: "contract", topic: "ct-formation", sub: "fm-revocation", key: false,
    tags: ["Request for information", "Counter-offer", "Telegrams"],
    gist: "A seller offers iron at a stated price, open until Monday. The buyer telegraphs to ask about different delivery terms, then telegraphs acceptance, and the seller says the offer has ended.",
    principle: "A request for information about an offer's terms is not a counter-offer and does not end the offer.",
    facts: "McLean offered iron at 40s per ton, open until Monday. On Monday the buyers telegraphed asking whether delivery could be spread over two months. McLean did not reply and sold elsewhere. The buyers then telegraphed acceptance.",
    held: "Lush J held the buyers' telegram was only an inquiry, not a rejection or counter-offer. The original offer was still open when they accepted, so a contract was made and McLean was in breach.",
    significance: "Draws the line between a request for information, which keeps the offer alive, and a counter-offer, which ends it (Hyde v Wrench).",
    links: ["hyde-v-wrench-1840", "harvey-v-facey-1893"]
  },
  {
    id: "payne-v-cave-1789", name: "Payne v Cave", cite: "(1789) 3 Term Rep 148", year: 1789, court: "Hist",
    area: "contract", topic: "ct-formation", sub: "fm-revocation", key: false,
    tags: ["Auctions", "Revocation of offer"],
    gist: "A bidder at an auction changes his mind and withdraws his bid before the auctioneer brings down the hammer, and the seller sues him.",
    principle: "A bid at auction is an offer and can be withdrawn at any time before the auctioneer accepts it by the fall of the hammer.",
    facts: "Payne bought goods at an auction by a bid of £40. Before the hammer fell, he withdrew the bid. The seller held him to it and he refused to pay.",
    held: "The court held Payne was not bound. His bid was an offer which could be withdrawn until it was accepted. Acceptance was complete only when the auctioneer brought down the hammer.",
    significance: "Basic rule that an offer can be revoked before acceptance. Now supported by the Sale of Goods Act 1979, section 57.",
    links: ["dickinson-v-dodds-1876"]
  },
  {
    id: "dickinson-v-dodds-1876", name: "Dickinson v Dodds", cite: "(1876) 2 Ch D 463", year: 1876, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-revocation", key: false,
    tags: ["Revocation of offer", "Communication through third party"],
    gist: "Houses are offered for sale 'open until Friday morning'. Before then the buyer learns from a third party that the seller has sold them elsewhere, and still tries to accept.",
    principle: "An offer can be revoked at any time before acceptance, even if it was promised to stay open, and revocation can be communicated by a reliable third party.",
    facts: "Dodds offered to sell houses to Dickinson, saying the offer was open until 9am on Friday. On Thursday, Berry told Dickinson that Dodds had sold or was selling to Allan. Dickinson handed in a written acceptance before the deadline.",
    held: "The Court of Appeal held there was no contract. A promise to keep an offer open is not binding without consideration, and Dickinson knew from a reliable source that Dodds no longer intended to sell.",
    significance: "Revocation need not come from the offeror, but the source must be reliable. A promise to keep an offer open needs separate consideration to bind.",
    links: ["byrne-v-van-tienhoven-1880", "payne-v-cave-1789"]
  },
  {
    id: "byrne-v-van-tienhoven-1880", name: "Byrne & Co v Van Tienhoven & Co", cite: "(1880) 5 CPD 344", year: 1880, court: "HC",
    area: "contract", topic: "ct-formation", sub: "fm-revocation", key: true,
    tags: ["Postal rule", "Revocation of offer", "Communication"],
    gist: "A seller posts an offer, then posts a withdrawal. The buyer telegraphs acceptance before the withdrawal reaches him.",
    principle: "A revocation takes effect only when it is received by the offeree, not when it is posted.",
    facts: "On 1 October the defendants in Cardiff posted an offer to the claimants in New York. On 8 October they posted a letter revoking it. The claimants received the offer on 11 October and accepted by telegram the same day. The revocation arrived on 20 October.",
    held: "Lindley J held there was a binding contract. The postal rule helps acceptance, but not revocation, which has to be actually communicated. The acceptance came before the revocation was received.",
    significance: "Revocation, unlike acceptance by post, is effective only on receipt. Compare Adams v Lindsell and Dickinson v Dodds.",
    links: ["adams-v-lindsell-1818", "dickinson-v-dodds-1876"]
  },
  {
    id: "errington-v-errington-and-woods-1952", name: "Errington v Errington and Woods", cite: "[1952] 1 KB 290", year: 1952, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-revocation", key: false,
    tags: ["Unilateral contract", "Revocation of offer", "Family"],
    gist: "A father promises his son and daughter-in-law that a house will be theirs if they pay off the mortgage instalments, and they have paid part of them when he dies.",
    principle: "In a unilateral contract the offeror cannot revoke once the offeree has begun performing, provided the offeree carries on performing.",
    facts: "A father bought a house on a mortgage and told his son and daughter-in-law that if they paid the instalments the house would be theirs. They paid some instalments. After the father died, his widow tried to remove them.",
    held: "The Court of Appeal held the couple could stay. The father's promise was a unilateral offer that could not be revoked once they started to perform, so long as they carried on paying.",
    significance: "Answers the problem that an offer of a unilateral contract could be withdrawn just before performance is complete. Compare Carlill on acceptance by performance.",
    links: ["carlill-v-carbolic-smoke-ball-1893"]
  },

  /* ---------- Acceptance and communication ---------- */
  {
    id: "adams-v-lindsell-1818", name: "Adams v Lindsell", cite: "(1818) 1 B & Ald 681", year: 1818, court: "Hist",
    area: "contract", topic: "ct-formation", sub: "fm-acceptance", key: true,
    tags: ["Postal rule", "Acceptance by post"],
    gist: "A seller posts an offer of wool, asking for an answer by post. The offer is delayed, the buyer posts acceptance, and the seller sells the wool to someone else before the acceptance arrives.",
    principle: "Where acceptance by post is expected, a contract is formed when the letter of acceptance is posted, even if it never arrives or arrives late.",
    facts: "Lindsell posted an offer to sell wool to Adams on 2 September, asking for a reply 'in course of post'. The letter was misdirected and arrived on 5 September. Adams posted his acceptance that evening. Lindsell had sold the wool elsewhere on 8 September, before the reply arrived.",
    held: "The court held a contract was made when Adams posted his acceptance. Otherwise neither party could ever be bound, because each would have to wait for the other's letter to arrive.",
    significance: "Origin of the postal rule. Later limited in Holwell Securities v Hughes and does not apply to revocation (Byrne v Van Tienhoven).",
    links: ["household-fire-v-grant-1879", "byrne-v-van-tienhoven-1880", "holwell-securities-v-hughes-1973"]
  },
  {
    id: "household-fire-v-grant-1879", name: "Household Fire and Carriage Accident Insurance Co v Grant", cite: "(1879) 4 Ex D 216", year: 1879, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-acceptance", key: false,
    tags: ["Postal rule", "Lost letter", "Company shares"],
    gist: "A man applies for shares and the company posts a letter of allotment that never arrives. The company later goes into liquidation and claims he still owes for the shares.",
    principle: "Under the postal rule, acceptance is complete on posting, even if the letter is lost in the post.",
    facts: "Grant applied for shares in a company. The company posted a letter of allotment to him which never arrived. When the company went into liquidation, it claimed money for the shares and Grant denied that he had any contract.",
    held: "The Court of Appeal held a contract was made when the allotment letter was posted. Grant was a shareholder even though he never received it. Bramwell LJ dissented.",
    significance: "Extends the postal rule to a lost letter. Shows the harshness of the rule, since the offeror is bound without ever knowing of acceptance.",
    links: ["adams-v-lindsell-1818"]
  },
  {
    id: "holwell-securities-v-hughes-1973", name: "Holwell Securities Ltd v Hughes", cite: "[1974] 1 WLR 155", year: 1973, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-acceptance", key: false,
    tags: ["Postal rule", "Option", "Exclusion of postal rule"],
    gist: "A buyer must exercise an option to purchase land by giving written notice. His solicitors post the notice in time, but it never arrives.",
    principle: "The postal rule does not apply if the offeror's terms require that the acceptance be actually received.",
    facts: "Dr Hughes granted Holwell an option to buy land, to be exercised 'by notice in writing' to him within six months. Holwell's solicitors posted the notice in time, but it never reached Dr Hughes.",
    held: "The Court of Appeal held the option had not been validly exercised. The requirement of 'notice' meant actual communication, which excluded the postal rule. The postal rule only applies where the parties would reasonably expect post to be used.",
    significance: "Shows the postal rule is not mandatory and can be excluded expressly or by implication.",
    links: ["adams-v-lindsell-1818", "household-fire-v-grant-1879"]
  },
  {
    id: "entores-v-miles-far-east-1955", name: "Entores Ltd v Miles Far East Corporation", cite: "[1955] 2 QB 327", year: 1955, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-acceptance", key: true,
    tags: ["Instantaneous communication", "Telex", "Receipt rule"],
    gist: "A London company makes an offer by telex to a firm's agents in Amsterdam, whose acceptance is received on its London machine, and the court must decide where the contract was formed.",
    principle: "For instantaneous communications such as telex, acceptance takes effect when and where it is received, not when it is sent.",
    facts: "Entores in London sent a telex offer to the agents in Amsterdam of Miles Far East Corporation, which was based in New York. The agents accepted by telex, received on Entores' machine in London. The question was where the contract was made for the purposes of serving proceedings.",
    held: "The Court of Appeal held the contract was made in London, where the acceptance was received. The postal rule is an exception for non-instantaneous communication. Lord Denning compared telex to a conversation across a room or a telephone call.",
    significance: "Sets the receipt rule for instant communications. Applied to modern equivalents such as phone calls and, by analogy, emails. See Brinkibon for its limits.",
    links: ["brinkibon-v-stahag-stahl-1982", "adams-v-lindsell-1818"]
  },
  {
    id: "brinkibon-v-stahag-stahl-1982", name: "Brinkibon Ltd v Stahag Stahl und Stahlwarenhandelsgesellschaft mbH", cite: "[1983] 2 AC 34", year: 1982, court: "HL",
    area: "contract", topic: "ct-formation", sub: "fm-acceptance", key: false,
    tags: ["Instantaneous communication", "Telex", "Receipt rule"],
    gist: "A buyer in London telexes acceptance to an Austrian seller in Vienna, and the court must decide where the contract was made.",
    principle: "The receipt rule applies to instantaneous communications between the parties, but where messages go through intermediaries or out of office hours, the time and place of contract depend on intention, business practice and where the risk lies.",
    facts: "Brinkibon, in London, accepted an offer by telex sent to the Austrian company Stahag Stahl in Vienna. Brinkibon wished to serve proceedings in England and so argued the contract had been made there.",
    held: "The House of Lords held the contract was made in Vienna, where the acceptance was received. Lord Wilberforce approved Entores but said it would not suit every case, such as messages sent when the office is closed.",
    significance: "Confirms and qualifies Entores. Often used to evaluate how the receipt rule applies to emails and messaging.",
    links: ["entores-v-miles-far-east-1955"]
  },
  {
    id: "felthouse-v-bindley-1862", name: "Felthouse v Bindley", cite: "(1862) 11 CBNS 869", year: 1862, court: "Hist",
    area: "contract", topic: "ct-formation", sub: "fm-acceptance", key: false,
    tags: ["Silence", "Acceptance"],
    gist: "An uncle writes that if he hears no more about a horse he will consider it his nephew's to sell to him, and the nephew never replies. An auctioneer later sells the horse by mistake.",
    principle: "Silence cannot be acceptance, and an offeror cannot impose a contract on an offeree who has not communicated assent.",
    facts: "Felthouse offered to buy his nephew's horse for £30 15s and wrote, 'If I hear no more about him, I consider the horse mine.' The nephew did not reply but told the auctioneer, Bindley, not to sell it. Bindley sold it by mistake and Felthouse sued him.",
    held: "The court held there was no contract between uncle and nephew. The nephew had never communicated acceptance to his uncle, and the uncle could not make silence into acceptance. So the horse was not the uncle's and he could not sue.",
    significance: "The leading authority that silence is not acceptance. Compare the rule that acceptance by conduct can be valid (Brogden v Metropolitan Railway). Modern consumer law also bans inertia selling.",
    links: ["brogden-v-metropolitan-railway-1877", "powell-v-lee-1908"]
  },
  {
    id: "brogden-v-metropolitan-railway-1877", name: "Brogden v Metropolitan Railway Co", cite: "(1877) 2 App Cas 666", year: 1877, court: "HL",
    area: "contract", topic: "ct-formation", sub: "fm-acceptance", key: false,
    tags: ["Acceptance by conduct", "Informal agreement"],
    gist: "A coal supplier amends a draft agreement, returns it marked 'approved' and the railway puts it in a drawer. Both then carry on trading on those terms.",
    principle: "Acceptance can be shown by conduct, and a contract can be made by the parties acting on agreed terms.",
    facts: "Brogden supplied coal to the railway without a formal contract. A draft agreement was sent, Brogden filled in a blank and returned it marked 'approved'. The railway's agent put it in a drawer. Both sides then traded on its terms until a dispute arose.",
    held: "The House of Lords held there was a binding contract. The conduct of both parties in ordering and supplying coal under the draft showed acceptance of its terms.",
    significance: "Shows acceptance need not be by words. Often paired with Felthouse v Bindley on silence versus conduct.",
    links: ["felthouse-v-bindley-1862"]
  },
  {
    id: "powell-v-lee-1908", name: "Powell v Lee", cite: "(1908) 99 LT 284", year: 1908, court: "HC",
    area: "contract", topic: "ct-formation", sub: "fm-acceptance", key: false,
    tags: ["Communication of acceptance", "Authorised agent"],
    gist: "A teacher is told informally by one school manager that he has been chosen as headmaster, but the managers later give the job to someone else.",
    principle: "Acceptance must be communicated to the offeror by the offeree or by someone authorised to communicate it.",
    facts: "School managers resolved to appoint Powell as headmaster, but did not authorise anyone to tell him. One manager told him informally. The managers then changed their minds and appointed another man.",
    held: "The court held there was no contract. The decision of the managers was not communicated by a person authorised to do so, and the manager who told Powell had no authority.",
    significance: "Illustrates the rule that acceptance must be communicated, here by an authorised person. Applies to how offers are accepted in employment and commercial settings.",
    links: ["felthouse-v-bindley-1862"]
  },
  {
    id: "tinn-v-hoffmann-1873", name: "Tinn v Hoffmann & Co", cite: "(1873) 29 LT 271", year: 1873, court: "Hist",
    area: "contract", topic: "ct-formation", sub: "fm-acceptance", key: false,
    tags: ["Mode of acceptance", "Prescribed method"],
    gist: "An offer asks for a reply 'by return of post'. The buyer replies by a different but equally quick method.",
    principle: "Unless the offeror insists on a particular method as the only way to accept, any method that is no less effective will do.",
    facts: "Hoffmann offered to sell iron and asked for a reply by return of post. Tinn replied by a method other than return of post, which was just as quick. Hoffmann said that the acceptance was not in the form that he had required.",
    held: "The court held a contract had been made. Where an offeror does not stipulate that only one method may be used, the offeree may accept by any other method that is as fast and effective.",
    significance: "Compare Yates Building v Pulleyn, which says that a stipulated method need not be followed if the alternative is no less advantageous to the offeror.",
    links: ["adams-v-lindsell-1818"]
  },
  {
    id: "williams-v-carwardine-1833", name: "Williams v Carwardine", cite: "(1833) 4 B & Ad 621", year: 1833, court: "Hist",
    area: "contract", topic: "ct-formation", sub: "fm-acceptance", key: false,
    tags: ["Reward", "Motive", "Unilateral contract"],
    gist: "A woman who knows a reward has been offered gives information about a murder, partly to ease her conscience, and claims the reward.",
    principle: "A person who performs the act requested in a reward offer, knowing of the offer, can accept it whatever their motive.",
    facts: "A reward was offered for information leading to the conviction of the person responsible for a murder. Mrs Williams, believing she was dying, gave information that implicated her husband to ease her conscience. She had seen the reward notice.",
    held: "The court held she was entitled to the reward. She had performed the act requested knowing of the offer, and her motive for doing so was irrelevant.",
    significance: "Acceptance of a unilateral offer requires knowledge of the offer, but not any particular motive. Contrast with cases where the claimant did not know of the offer.",
    links: ["carlill-v-carbolic-smoke-ball-1893"]
  },

  /* ---------- Intention to create legal relations ---------- */
  {
    id: "balfour-v-balfour-1919", name: "Balfour v Balfour", cite: "[1919] 2 KB 571", year: 1919, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-ilr", key: true,
    tags: ["Domestic agreement", "Presumption of no intention", "Husband and wife"],
    gist: "A husband working abroad promises his wife a monthly allowance while she stays in England for her health. The marriage then breaks down and she sues for the unpaid allowance.",
    principle: "Domestic and social agreements are presumed not to be intended to create legal relations.",
    facts: "Mr Balfour was a civil servant in Ceylon. On leave in England, he promised his wife £30 a month while she remained in England because of her health. The couple later separated and he stopped paying.",
    held: "The Court of Appeal held she could not enforce the promise. Agreements between husband and wife made in the ordinary course of marriage do not create legal relations. Atkin LJ said such arrangements are outside the contract sphere.",
    significance: "The origin of the presumption against intention in domestic agreements. Rebutted in Merritt v Merritt, where the spouses had separated.",
    links: ["merritt-v-merritt-1970", "jones-v-padavatton-1969"]
  },
  {
    id: "merritt-v-merritt-1970", name: "Merritt v Merritt", cite: "[1970] 1 WLR 1211", year: 1970, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-ilr", key: true,
    tags: ["Domestic agreement", "Presumption rebutted", "Separation"],
    gist: "A husband who has left his wife agrees in writing to pay her a monthly sum if she pays off the mortgage, so the house will be hers.",
    principle: "The presumption against legal intention in domestic agreements is rebutted where the parties are no longer living together in amity and the agreement is written.",
    facts: "Mr Merritt left his wife and agreed to pay her £40 a month to cover the mortgage on the matrimonial home. He signed a note saying he would then transfer the house to her. She paid off the mortgage, but he refused to transfer it.",
    held: "The Court of Appeal held the agreement was binding. The couple were separated and not on friendly terms, so the Balfour presumption did not apply. The written note showed they intended to be legally bound.",
    significance: "Key contrast with Balfour v Balfour. Lord Denning said that the court should ask whether parties intended to be bound, based on all the circumstances.",
    links: ["balfour-v-balfour-1919"]
  },
  {
    id: "jones-v-padavatton-1969", name: "Jones v Padavatton", cite: "[1969] 1 WLR 328", year: 1969, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-ilr", key: false,
    tags: ["Domestic agreement", "Mother and daughter", "Presumption of no intention"],
    gist: "A mother offers her daughter a monthly allowance to give up her job and study for the Bar in England, then later buys her a house, before the two fall out.",
    principle: "Arrangements between close family members are presumed to be family arrangements without legal intention, and the party claiming a contract must show intention.",
    facts: "Mrs Jones persuaded her daughter to leave a job in the US and study for the Bar in England, with an allowance. Later she bought a house in London for the daughter to live in and let rooms. The two fell out and the mother claimed possession of the house.",
    held: "The Court of Appeal held the mother could recover the house. The majority found the arrangements were family arrangements without intention to create legal relations. Salmon LJ would have found a contract, but one which had expired after a reasonable time.",
    significance: "Shows the presumption in a parent and child setting, and how it can be hard to rebut. The result also shows the court reluctant to interfere in family disputes.",
    links: ["balfour-v-balfour-1919", "merritt-v-merritt-1970"]
  },
  {
    id: "simpkins-v-pays-1955", name: "Simpkins v Pays", cite: "[1955] 1 WLR 975", year: 1955, court: "HC",
    area: "contract", topic: "ct-formation", sub: "fm-ilr", key: false,
    tags: ["Domestic agreement", "Presumption rebutted", "Competition"],
    gist: "A grandmother, her granddaughter and a lodger enter a newspaper competition together, sharing the cost, and the entry in the grandmother's name wins a prize.",
    principle: "Even in a family household, the presumption against legal intention is rebutted by a mutual arrangement to share costs and winnings.",
    facts: "Mrs Pays, her granddaughter and a lodger, Simpkins, submitted a weekly fortnightly newspaper competition entry in Mrs Pays's name. They agreed to share the winnings and each contributed to the cost. They won £750 and Mrs Pays refused to share.",
    held: "Sellers J held there was a binding agreement. This was a joint enterprise with shared contribution and shared prize, not a casual family arrangement, so the presumption was rebutted.",
    significance: "Shows that family-based agreements can be binding when the parties treat them as a business-like arrangement. Compare with Balfour.",
    links: ["balfour-v-balfour-1919"]
  },
  {
    id: "parker-v-clark-1960", name: "Parker v Clark", cite: "[1960] 1 WLR 286", year: 1960, court: "HC",
    area: "contract", topic: "ct-formation", sub: "fm-ilr", key: false,
    tags: ["Domestic agreement", "Presumption rebutted", "Relatives"],
    gist: "An elderly couple persuade their niece and her husband to sell their home and move in with them, promising to leave them the house, then fall out with them.",
    principle: "The presumption against legal intention in family agreements can be rebutted, especially where one side has made a significant change of position.",
    facts: "The Clarks, an elderly couple, invited their niece and her husband, the Parkers, to sell their own house and move in. They said the Parkers would inherit the house. The Parkers sold their home and moved in, but the arrangement later broke down.",
    held: "Devlin J held there was a binding contract. The parties intended legal consequences because the Parkers sold their home and moved in on the strength of the promise, so the presumption was rebutted.",
    significance: "A leading example of a family agreement rebutting the presumption because of reliance and detailed terms.",
    links: ["balfour-v-balfour-1919", "merritt-v-merritt-1970"]
  },
  {
    id: "rose-and-frank-v-crompton-1925", name: "Rose and Frank Co v JR Crompton & Bros Ltd", cite: "[1925] AC 445", year: 1925, court: "HL",
    area: "contract", topic: "ct-formation", sub: "fm-ilr", key: false,
    tags: ["Commercial agreement", "Honour clause", "Rebutting presumption"],
    gist: "A commercial distribution agreement states that it is 'not a formal or legal agreement' and not subject to the courts, and a dispute arises over cancelled orders.",
    principle: "In commercial agreements there is a presumption of legal intention, but it can be rebutted by clear words such as an honour clause.",
    facts: "A US company and a British manufacturer made a written distribution agreement containing an 'honourable pledge' clause saying it was not a formal or legal agreement and was not subject to the law courts. The manufacturer later cancelled the agreement, and the US company sued for breach.",
    held: "The House of Lords held the agreement itself was not legally binding because the clause expressly excluded intention. But individual orders placed and accepted under it were binding contracts.",
    significance: "Shows commercial agreements can lack legal intention if the parties clearly say so. The presumption is strong but not irrebuttable.",
    links: ["edwards-v-skyways-1964", "kleinwort-benson-v-malaysia-mining-1989"]
  },
  {
    id: "edwards-v-skyways-1964", name: "Edwards v Skyways Ltd", cite: "[1964] 1 WLR 349", year: 1964, court: "HC",
    area: "contract", topic: "ct-formation", sub: "fm-ilr", key: false,
    tags: ["Commercial agreement", "Ex gratia", "Employment"],
    gist: "An airline promises a pilot being made redundant an 'ex gratia' payment based on his pension contributions, then refuses to pay once he has acted on it.",
    principle: "In a commercial agreement the presumption of legal intention is not rebutted merely by calling a payment 'ex gratia'.",
    facts: "Skyways told pilots being made redundant that they would receive an 'ex gratia' payment approximately equal to the company's pension contribution if they withdrew from the pension scheme. Mr Edwards did so, but Skyways refused to pay, arguing that it was not a legal obligation.",
    held: "Megaw J held the promise was legally binding. The words 'ex gratia' did not clearly show that the parties did not intend to be bound, and the burden of rebutting the presumption lay on the company.",
    significance: "Shows how heavy the burden is on a party who wants to rebut the presumption in commercial dealings. Compare Rose and Frank, where the clause was clear.",
    links: ["rose-and-frank-v-crompton-1925"]
  },
  {
    id: "kleinwort-benson-v-malaysia-mining-1989", name: "Kleinwort Benson Ltd v Malaysia Mining Corporation Bhd", cite: "[1989] 1 WLR 379", year: 1989, court: "CA",
    area: "contract", topic: "ct-formation", sub: "fm-ilr", key: false,
    tags: ["Commercial agreement", "Letter of comfort", "Rebutting presumption"],
    gist: "A parent company writes a letter of comfort to a bank saying it is its policy to ensure its subsidiary can meet its debts. The subsidiary collapses and the bank tries to enforce it.",
    principle: "A letter of comfort that states present policy, rather than promising future conduct, is not legally binding, even in a commercial setting.",
    facts: "Malaysia Mining Corporation gave Kleinwort Benson a letter of comfort for a loan to its subsidiary, saying it was its policy to ensure that the subsidiary would at all times be in a position to meet its liabilities. The subsidiary collapsed and the bank claimed against the parent company.",
    held: "The Court of Appeal held the statement was one of present policy, not a promise about future conduct. In the circumstances the parties had not intended it to create a legal obligation, so the parent company was not liable.",
    significance: "Shows the commercial presumption can be displaced by the nature of the words used and the context, in particular where the borrower asked for a guarantee but only a comfort letter was given.",
    links: ["rose-and-frank-v-crompton-1925"]
  }
);
