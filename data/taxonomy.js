/* Tea-cher taxonomy: area > topic > sub-topic. Structure follows the OCR A Level Law (H418) specification.
   Every case in data/*.js must use ids from this file. Sub-topic ids are globally unique. */
window.TC_TAXONOMY = [
  {
    id: 'legal-system', label: 'The Legal System', papers: ['Paper 1'],
    blurb: 'Civil and criminal courts, ADR, juries, judges, legal personnel and access to justice.',
    topics: [
      { id: 'ls-civil', label: 'Civil Courts & ADR', subs: [
        { id: 'ls-adr', label: 'ADR and costs' },
        { id: 'ls-civil-procedure', label: 'Civil procedure and appeals' } ] },
      { id: 'ls-criminal', label: 'Criminal Courts & Lay People', subs: [
        { id: 'ls-juries', label: 'Juries' },
        { id: 'ls-magistrates', label: 'Magistrates and sentencing' } ] },
      { id: 'ls-personnel', label: 'Legal Personnel & the Judiciary', subs: [
        { id: 'ls-independence', label: 'Judicial independence and impartiality' },
        { id: 'ls-profession', label: 'Barristers and solicitors' } ] },
      { id: 'ls-access', label: 'Access to Justice', subs: [
        { id: 'ls-funding', label: 'Funding and legal aid' },
        { id: 'ls-barriers', label: 'Barriers to the courts' } ] }
    ]
  },
  {
    id: 'criminal', label: 'Criminal Law', papers: ['Paper 1'],
    blurb: 'General principles, homicide, non-fatal and property offences, attempts and defences.',
    topics: [
      { id: 'cl-principles', label: 'Rules, Burden of Proof & Principles', subs: [
        { id: 'cl-burden', label: 'Burden and standard of proof' },
        { id: 'cl-aims', label: 'Definition, aims and principles' } ] },
      { id: 'cl-actus-reus', label: 'Actus Reus', subs: [
        { id: 'ar-voluntary', label: 'Voluntary acts and states of affairs' },
        { id: 'ar-omissions', label: 'Omissions' },
        { id: 'ar-factual', label: 'Factual causation' },
        { id: 'ar-legal', label: 'Legal causation' },
        { id: 'ar-novus', label: 'Breaking the chain (novus actus interveniens)' } ] },
      { id: 'cl-mens-rea', label: 'Mens Rea', subs: [
        { id: 'mr-intention', label: 'Intention (direct and oblique)' },
        { id: 'mr-recklessness', label: 'Recklessness' },
        { id: 'mr-transferred', label: 'Transferred malice' },
        { id: 'mr-coincidence', label: 'Coincidence of actus reus and mens rea' } ] },
      { id: 'cl-strict', label: 'Strict Liability', subs: [
        { id: 'sl-presumption', label: 'Presumption of mens rea' },
        { id: 'sl-regulatory', label: 'Regulatory and public-safety offences' },
        { id: 'sl-absolute', label: 'Absolute liability' } ] },
      { id: 'cl-fatal', label: 'Fatal Offences', subs: [
        { id: 'fo-murder', label: 'Murder' },
        { id: 'fo-loss-of-control', label: 'Loss of control' },
        { id: 'fo-dr', label: 'Diminished responsibility' },
        { id: 'fo-uam', label: 'Unlawful act manslaughter' },
        { id: 'fo-gnm', label: 'Gross negligence manslaughter' } ] },
      { id: 'cl-nonfatal', label: 'Non-Fatal Offences', subs: [
        { id: 'nf-assault', label: 'Assault and battery' },
        { id: 'nf-abh', label: 'Assault occasioning actual bodily harm (s47)' },
        { id: 'nf-gbh', label: 'Wounding and GBH (s20 and s18)' } ] },
      { id: 'cl-property', label: 'Property Offences', subs: [
        { id: 'pr-theft-ar', label: 'Theft: actus reus' },
        { id: 'pr-theft-mr', label: 'Theft: dishonesty and intention to permanently deprive' },
        { id: 'pr-robbery', label: 'Robbery' },
        { id: 'pr-burglary', label: 'Burglary' } ] },
      { id: 'cl-attempts', label: 'Attempts', subs: [
        { id: 'at-ar', label: 'More than merely preparatory' },
        { id: 'at-mr', label: 'Intent and impossibility' } ] },
      { id: 'cl-mental-defences', label: 'Mental Capacity Defences', subs: [
        { id: 'md-insanity', label: 'Insanity' },
        { id: 'md-automatism', label: 'Automatism' },
        { id: 'md-intoxication', label: 'Intoxication' } ] },
      { id: 'cl-general-defences', label: 'General Defences', subs: [
        { id: 'gd-selfdefence', label: 'Self-defence' },
        { id: 'gd-duress', label: 'Duress by threats' },
        { id: 'gd-necessity', label: 'Necessity and duress of circumstances' },
        { id: 'gd-consent', label: 'Consent' } ] }
    ]
  },
  {
    id: 'law-making', label: 'Law Making', papers: ['Paper 2'],
    blurb: 'Parliament, delegated legislation, statutory interpretation, precedent and EU law.',
    topics: [
      { id: 'lm-parliament', label: 'Parliamentary Law Making', subs: [
        { id: 'lmp-sovereignty', label: 'Sovereignty and the Parliament Acts' } ] },
      { id: 'lm-delegated', label: 'Delegated Legislation', subs: [
        { id: 'dl-procedural', label: 'Procedural ultra vires' },
        { id: 'dl-substantive', label: 'Substantive ultra vires' },
        { id: 'dl-unreasonableness', label: 'Unreasonableness' } ] },
      { id: 'lm-interpretation', label: 'Statutory Interpretation', subs: [
        { id: 'si-literal', label: 'Literal rule' },
        { id: 'si-golden', label: 'Golden rule' },
        { id: 'si-mischief', label: 'Mischief rule' },
        { id: 'si-purposive', label: 'Purposive approach' },
        { id: 'si-language', label: 'Rules of language' },
        { id: 'si-aids', label: 'Aids to interpretation' },
        { id: 'si-hra-eu', label: 'Human Rights Act and EU influence' } ] },
      { id: 'lm-precedent', label: 'Judicial Precedent', subs: [
        { id: 'jp-hierarchy', label: 'Hierarchy and binding precedent' },
        { id: 'jp-distinguishing', label: 'Distinguishing' },
        { id: 'jp-overruling', label: 'Overruling and reversing' },
        { id: 'jp-departing', label: 'Departing from precedent' } ] },
      { id: 'lm-eu', label: 'European Union Law', subs: [
        { id: 'eu-supremacy', label: 'Supremacy over domestic law' },
        { id: 'eu-effect', label: 'Direct and indirect effect' },
        { id: 'eu-state-liability', label: 'State liability' } ] }
    ]
  },
  {
    id: 'tort', label: 'Law of Tort', papers: ['Paper 2'],
    blurb: 'Negligence, occupiers\' liability, nuisance, Rylands v Fletcher, vicarious liability, defences and remedies.',
    topics: [
      { id: 'to-negligence', label: 'Negligence', subs: [
        { id: 'ng-duty', label: 'Duty of care' },
        { id: 'ng-public', label: 'Duty: public bodies and omissions' },
        { id: 'ng-breach', label: 'Breach of duty' },
        { id: 'ng-factual', label: 'Factual causation' },
        { id: 'ng-novus', label: 'Intervening acts' },
        { id: 'ng-remoteness', label: 'Remoteness of damage' },
        { id: 'ng-psych', label: 'Psychiatric harm' },
        { id: 'ng-economic', label: 'Pure economic loss and negligent misstatement' } ] },
      { id: 'to-occupiers', label: 'Occupiers\' Liability', subs: [
        { id: 'ol-1957', label: 'Lawful visitors (OLA 1957)' },
        { id: 'ol-1984', label: 'Trespassers (OLA 1984)' } ] },
      { id: 'to-land', label: 'Torts Connected to Land', subs: [
        { id: 'ld-nuisance', label: 'Private nuisance: unreasonable interference' },
        { id: 'ld-nuisance-parties', label: 'Private nuisance: claimants and defendants' },
        { id: 'ld-nuisance-defences', label: 'Nuisance: defences and remedies' },
        { id: 'ld-rylands', label: 'Rylands v Fletcher' } ] },
      { id: 'to-vicarious', label: 'Vicarious Liability', subs: [
        { id: 'vl-status', label: 'Employee or independent contractor' },
        { id: 'vl-course', label: 'In the course of employment' },
        { id: 'vl-akin', label: 'Akin to employment and close connection' } ] },
      { id: 'to-defences', label: 'Tort Defences', subs: [
        { id: 'df-contributory', label: 'Contributory negligence' },
        { id: 'df-volenti', label: 'Volenti non fit injuria' } ] },
      { id: 'to-remedies', label: 'Tort Remedies', subs: [
        { id: 'tr-damages', label: 'Damages and mitigation' },
        { id: 'tr-injunction', label: 'Injunctions' } ] }
    ]
  },
  {
    id: 'nature-of-law', label: 'Nature of Law', papers: ['Paper 3', 'Paper 4'],
    blurb: 'The rule of law, and how law relates to morality, justice and society.',
    topics: [
      { id: 'nl-rule-of-law', label: 'The Rule of Law', subs: [
        { id: 'rol-core', label: 'Core principles of the rule of law' } ] },
      { id: 'nl-morality', label: 'Law & Morality', subs: [
        { id: 'mo-hart-devlin', label: 'Enforcing morals (Hart–Devlin)' },
        { id: 'mo-autonomy', label: 'Autonomy, consent and harm' },
        { id: 'mo-life-death', label: 'Life, death and medical ethics' } ] },
      { id: 'nl-justice', label: 'Law & Justice', subs: [
        { id: 'ju-outcomes', label: 'Just outcomes' } ] },
      { id: 'nl-society', label: 'Law & Society', subs: [
        { id: 'so-change', label: 'Social control and change' } ] }
    ]
  },
  {
    id: 'human-rights', label: 'Human Rights', papers: ['Paper 3'],
    blurb: 'The ECHR, the Human Rights Act 1998, Articles 5, 6, 8, 10 and 11, and their effect on English law.',
    topics: [
      { id: 'hr-framework', label: 'ECHR & the Human Rights Act', subs: [
        { id: 'hrf-s3', label: 'HRA s3: interpretation' },
        { id: 'hrf-s4', label: 'HRA s4: declarations of incompatibility' },
        { id: 'hrf-s6', label: 'HRA s6: public authorities' },
        { id: 'hrf-echr', label: 'ECtHR principles (margin of appreciation, proportionality)' } ] },
      { id: 'hr-art2-3', label: 'Articles 2 & 3: Life and Ill-treatment', subs: [
        { id: 'a2-life', label: 'Article 2: right to life' },
        { id: 'a3-inhuman', label: 'Article 3: torture and inhuman treatment' } ] },
      { id: 'hr-art5', label: 'Article 5: Liberty & Security', subs: [
        { id: 'a5-detention', label: 'Detention and deprivation of liberty' },
        { id: 'a5-arrest', label: 'Lawful arrest and reasons' } ] },
      { id: 'hr-art6', label: 'Article 6: Fair Trial', subs: [
        { id: 'a6-fair-trial', label: 'Fair trial and access to court' } ] },
      { id: 'hr-art8', label: 'Article 8: Private & Family Life', subs: [
        { id: 'a8-privacy', label: 'Privacy and the media' },
        { id: 'a8-state', label: 'Policing, data and the state' } ] },
      { id: 'hr-art10-11', label: 'Articles 10 & 11: Expression & Assembly', subs: [
        { id: 'a10-expression', label: 'Freedom of expression' },
        { id: 'a11-assembly', label: 'Freedom of assembly' } ] },
      { id: 'hr-public-order', label: 'Public Order', subs: [
        { id: 'po-breach', label: 'Breach of the peace' },
        { id: 'po-offences', label: 'Public Order Act 1986 offences' } ] },
      { id: 'hr-police', label: 'Police Powers', subs: [
        { id: 'pp-stop', label: 'Stop and search' },
        { id: 'pp-arrest', label: 'Arrest' },
        { id: 'pp-detention', label: 'Detention, interview and evidence' } ] },
      { id: 'hr-interception', label: 'Interception of Communications', subs: [
        { id: 'ic-interception', label: 'Interception and surveillance' } ] },
      { id: 'hr-confidence', label: 'Confidentiality', subs: [
        { id: 'cf-confidence', label: 'Breach of confidence' } ] },
      { id: 'hr-obscenity', label: 'Obscenity', subs: [
        { id: 'ob-obscenity', label: 'Obscene publications' } ] },
      { id: 'hr-defamation', label: 'Defamation', subs: [
        { id: 'de-meaning', label: 'Defamatory meaning and serious harm' },
        { id: 'de-defences', label: 'Defamation defences' } ] },
      { id: 'hr-harassment', label: 'Harassment', subs: [
        { id: 'ha-harassment', label: 'Protection from Harassment Act 1997' } ] },
      { id: 'hr-trespass', label: 'Trespass to Land', subs: [
        { id: 'tl-trespass', label: 'Trespass to land' } ] }
    ]
  },
  {
    id: 'contract', label: 'Law of Contract', papers: ['Paper 4'],
    blurb: 'Formation, terms, misrepresentation, economic duress, discharge and remedies.',
    topics: [
      { id: 'ct-formation', label: 'Formation', subs: [
        { id: 'fm-offer', label: 'Offer and invitation to treat' },
        { id: 'fm-acceptance', label: 'Acceptance and communication' },
        { id: 'fm-revocation', label: 'Counter-offers and revocation' },
        { id: 'fm-ilr', label: 'Intention to create legal relations' },
        { id: 'fm-consideration', label: 'Consideration' },
        { id: 'fm-estoppel', label: 'Promissory estoppel' },
        { id: 'fm-privity', label: 'Privity of contract' } ] },
      { id: 'ct-terms', label: 'Terms', subs: [
        { id: 'tm-express', label: 'Express terms and representations' },
        { id: 'tm-implied', label: 'Implied terms' },
        { id: 'tm-classification', label: 'Conditions, warranties and innominate terms' },
        { id: 'tm-exclusion-cl', label: 'Exclusion clauses: common law' },
        { id: 'tm-exclusion-stat', label: 'Exclusion clauses: statute and unfair terms' } ] },
      { id: 'ct-vitiating', label: 'Vitiating Factors', subs: [
        { id: 'vt-misrep', label: 'Misrepresentation' },
        { id: 'vt-misrep-remedies', label: 'Misrepresentation: remedies and bars' },
        { id: 'vt-duress', label: 'Economic duress' },
        { id: 'vt-undue', label: 'Undue influence' } ] },
      { id: 'ct-discharge', label: 'Discharge', subs: [
        { id: 'dc-performance', label: 'Performance' },
        { id: 'dc-frustration', label: 'Frustration' },
        { id: 'dc-breach', label: 'Breach and repudiation' } ] },
      { id: 'ct-remedies', label: 'Remedies', subs: [
        { id: 'cr-damages', label: 'Damages: causation and remoteness' },
        { id: 'cr-loss', label: 'Types of loss and mitigation' },
        { id: 'cr-penalty', label: 'Liquidated damages and penalties' },
        { id: 'cr-equitable', label: 'Specific performance and injunctions' } ] }
    ]
  }
];
