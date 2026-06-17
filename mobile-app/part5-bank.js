/* TOEIC Part 5 generated question bank.
   Original items generated from the extracted pattern notes, not copied from the PDF. */
(function () {
  "use strict";

  const CATEGORY_META = {
    word_form: { label: "품사/어형", tone: "teal" },
    verb_form: { label: "동사 형태", tone: "blue" },
    preposition: { label: "전치사/표현", tone: "amber" },
    connector: { label: "접속사/논리", tone: "rose" },
    pronoun: { label: "대명사/한정사", tone: "violet" },
    comparison: { label: "비교급/최상급", tone: "green" },
    collocation: { label: "어휘/콜로케이션", tone: "slate" }
  };

  const DIFFICULTY_LABELS = {
    easy: "기초",
    medium: "실전",
    hard: "고난도"
  };

  const bank = [];

  function shuffle(items, salt) {
    const arr = items.slice();
    let seed = 9719 + salt * 37;
    for (let i = arr.length - 1; i > 0; i--) {
      seed = (seed * 48271) % 2147483647;
      const j = seed % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function genericWrong(category) {
    const map = {
      word_form: "문장 속 자리에서 요구하는 품사와 맞지 않습니다.",
      verb_form: "주어, 시제, 태 또는 뒤따르는 구조와 맞지 않습니다.",
      preposition: "앞뒤 명사구나 시간 표현과 자연스럽게 연결되지 않습니다.",
      connector: "뒤따르는 구조나 문장 논리와 맞지 않습니다.",
      pronoun: "가리키는 대상의 격, 소유, 수와 맞지 않습니다.",
      comparison: "비교 표현의 형태나 비교 대상과 맞지 않습니다.",
      collocation: "TOEIC 비즈니스 문맥에서 자연스러운 결합이 아닙니다."
    };
    return map[category] || "문맥과 구조에 맞지 않습니다.";
  }

  function pastOf(base) {
    if (base === "submit") return "submitted";
    if (base.endsWith("y") && !/[aeiou]y$/.test(base)) return `${base.slice(0, -1)}ied`;
    if (base.endsWith("e")) return `${base}d`;
    return `${base}ed`;
  }

  function ingOf(base) {
    if (base === "submit") return "submitting";
    if (base.endsWith("ie")) return `${base.slice(0, -2)}ying`;
    if (base.endsWith("e") && base !== "see") return `${base.slice(0, -1)}ing`;
    return `${base}ing`;
  }

  function add(item) {
    const meta = CATEGORY_META[item.category];
    const rawChoices = [
      { text: item.correct, correct: true },
      ...item.wrongs.map((text, idx) => ({
        text,
        correct: false,
        wrongReason: item.wrongReasons?.[idx] || genericWrong(item.category)
      }))
    ];
    const choices = shuffle(rawChoices, bank.length + 1);
    bank.push({
      id: `P5-${String(bank.length + 1).padStart(4, "0")}`,
      category: item.category,
      categoryLabel: meta.label,
      tone: meta.tone,
      difficulty: item.difficulty,
      difficultyLabel: DIFFICULTY_LABELS[item.difficulty],
      q: item.q,
      choices,
      explanation: item.explanation,
      sourcePattern: item.sourcePattern || meta.label
    });
  }

  const nounItems = [
    ["proposal", ["propose", "proposed", "proposing"], "The strategy team submitted a detailed _____ before the quarterly meeting.", "관사 a와 형용사 detailed 뒤에는 명사 proposal이 필요합니다."],
    ["approval", ["approve", "approved", "approving"], "Please wait for final _____ before ordering the equipment.", "final 뒤에서 주문 전에 필요한 것은 명사 approval입니다."],
    ["inspection", ["inspect", "inspected", "inspector"], "The building must pass a safety _____ before tenants move in.", "a safety 뒤에는 행위나 절차를 뜻하는 명사 inspection이 옵니다."],
    ["reimbursement", ["reimburse", "reimbursed", "reimbursing"], "Employees should submit receipts to request travel _____.", "request의 목적어 자리에는 명사 reimbursement가 자연스럽습니다."],
    ["extension", ["extend", "extended", "extending"], "The contractor asked for a two-week _____ on the renovation deadline.", "a two-week 뒤에는 기간 연장을 뜻하는 명사 extension이 필요합니다."],
    ["evaluation", ["evaluate", "evaluated", "evaluating"], "The board requested an independent _____ of the merger plan.", "an independent 뒤에는 명사 evaluation이 들어갑니다."],
    ["attendance", ["attend", "attended", "attending"], "Conference _____ increased after the early-bird discount was announced.", "문장의 주어 자리에 명사 attendance가 필요합니다."],
    ["maintenance", ["maintain", "maintained", "maintaining"], "Regular _____ keeps the packaging machines operating safely.", "문장의 주어 자리에 동명사가 아니라 추상명사 maintenance가 알맞습니다."],
    ["compliance", ["comply", "compliant", "complying"], "All suppliers must show full _____ with the new safety rules.", "show full 뒤에는 명사 compliance가 필요합니다."],
    ["replacement", ["replace", "replaced", "replacing"], "The manager ordered a _____ for the damaged monitor.", "a 뒤에는 사물 명사 replacement가 들어갑니다."],
    ["registration", ["register", "registered", "registering"], "Online _____ for the workshop closes on Friday.", "Online이 수식하는 명사 주어 자리이므로 registration이 맞습니다."],
    ["shipment", ["ship", "shipped", "shipping"], "The delayed _____ finally arrived at the warehouse.", "delayed가 수식하는 명사 shipment가 필요합니다."],
    ["reservation", ["reserve", "reserved", "reserving"], "Hotel _____ must be confirmed at least two days in advance.", "Hotel이 수식하는 명사 reservation이 문장의 주어가 됩니다."],
    ["subscription", ["subscribe", "subscribed", "subscribing"], "The magazine _____ includes access to digital archives.", "The magazine 뒤에는 명사 subscription이 필요합니다."],
    ["installation", ["install", "installed", "installing"], "Software _____ will begin after the network upgrade.", "문장의 주어로 명사 installation이 알맞습니다."],
    ["description", ["describe", "described", "describing"], "The job posting includes a clear _____ of daily duties.", "a clear 뒤에는 명사 description이 들어갑니다."],
    ["recommendation", ["recommend", "recommended", "recommending"], "The consultant made a practical _____ for reducing costs.", "made a 뒤에는 명사 recommendation이 필요합니다."],
    ["decision", ["decide", "decided", "deciding"], "The final _____ will be announced after the board vote.", "The final 뒤에는 명사 decision이 옵니다."],
    ["announcement", ["announce", "announced", "announcing"], "The official _____ surprised many employees.", "The official 뒤에서 주어 역할을 하는 명사 announcement가 필요합니다."],
    ["participation", ["participate", "participated", "participating"], "Employee _____ in the survey was higher than expected.", "Employee가 수식하는 명사 participation이 주어입니다."],
    ["delivery", ["deliver", "delivered", "delivering"], "Same-day _____ is available for orders placed before noon.", "Same-day가 수식하는 명사 delivery가 필요합니다."],
    ["security", ["secure", "secured", "securing"], "The company improved network _____ after the audit.", "network가 수식하는 명사 security가 목적어입니다."],
    ["assistance", ["assist", "assisted", "assisting"], "Please contact reception if you need further _____.", "further 뒤에는 명사 assistance가 자연스럽습니다."],
    ["accuracy", ["accurate", "accurately", "accurateness"], "The accountant checked the report for _____.", "전치사 for 뒤에서 검토 대상이 되는 명사 accuracy가 필요합니다."],
    ["availability", ["available", "availably", "avail"], "Product _____ may vary by region.", "Product가 수식하는 명사 availability가 문장의 주어입니다."],
    ["reliability", ["reliable", "reliably", "rely"], "The laboratory tested the _____ of the new device.", "the 뒤에서 of구를 받는 명사 reliability가 필요합니다."],
    ["membership", ["member", "members", "membered"], "Annual _____ gives customers free shipping.", "Annual이 수식하는 명사 membership이 문장의 주어입니다."],
    ["renovation", ["renovate", "renovated", "renovating"], "The lobby _____ is scheduled for early July.", "The lobby가 수식하는 명사 renovation이 필요합니다."],
    ["coordination", ["coordinate", "coordinated", "coordinating"], "Better _____ among departments reduced delays.", "Better가 수식하는 추상명사 coordination이 주어입니다."],
    ["permission", ["permit", "permitted", "permitting"], "Written _____ is required before using the logo.", "Written이 수식하는 명사 permission이 필요합니다."]
  ];

  nounItems.forEach((it, idx) => add({
    category: "word_form",
    difficulty: idx % 3 === 0 ? "easy" : idx % 3 === 1 ? "medium" : "hard",
    q: it[2],
    correct: it[0],
    wrongs: it[1],
    explanation: it[3],
    sourcePattern: "명사 자리"
  }));

  const adjectiveItems = [
    ["accurate", ["accuracy", "accurately", "accuse"], "The finance team requested an _____ estimate of travel expenses.", "관사 an과 명사 estimate 사이에는 형용사 accurate가 필요합니다."],
    ["reliable", ["reliability", "reliably", "rely"], "Customers prefer a _____ delivery service during the holiday season.", "명사 delivery service를 수식하는 형용사 reliable이 맞습니다."],
    ["comprehensive", ["comprehension", "comprehensively", "comprehend"], "The report provides a _____ summary of last year's sales.", "명사 summary 앞에는 형용사 comprehensive이 필요합니다."],
    ["confidential", ["confidentially", "confidentiality", "confide"], "The files contain _____ information about clients.", "명사 information을 수식하는 형용사 confidential이 알맞습니다."],
    ["competitive", ["competition", "competitively", "compete"], "The company offers a _____ salary for experienced designers.", "명사 salary 앞에는 형용사 competitive가 필요합니다."],
    ["additional", ["addition", "additionally", "add"], "The manager requested _____ information about the warranty.", "명사 information을 수식하는 형용사 additional이 필요합니다."],
    ["significant", ["significance", "significantly", "signify"], "The new policy led to a _____ reduction in waste.", "명사 reduction 앞에는 형용사 significant가 맞습니다."],
    ["annual", ["annually", "annuity", "announced"], "The _____ conference will take place in Toronto.", "명사 conference를 수식하는 형용사 annual이 필요합니다."],
    ["technical", ["technically", "technique", "technician"], "The role requires strong _____ knowledge of software systems.", "명사 knowledge 앞에는 형용사 technical이 알맞습니다."],
    ["regional", ["region", "regionally", "regionalize"], "A _____ manager will visit each branch next month.", "명사 manager 앞에는 형용사 regional이 필요합니다."],
    ["current", ["currently", "currency", "curtail"], "Please review the _____ version of the employee handbook.", "명사 version을 수식하는 형용사 current가 필요합니다."],
    ["successful", ["success", "successfully", "succeed"], "The campaign was a _____ attempt to attract new members.", "명사 attempt를 수식하는 형용사 successful이 맞습니다."],
    ["efficient", ["efficiency", "efficiently", "effort"], "The warehouse adopted a more _____ inventory system.", "명사 system 앞에는 형용사 efficient가 필요합니다."],
    ["eligible", ["eligibility", "eligibly", "elect"], "Only _____ employees may apply for the training grant.", "명사 employees를 수식하는 형용사 eligible이 필요합니다."],
    ["available", ["availability", "availably", "avail"], "The brochure lists all _____ payment options.", "명사 payment options 앞에는 형용사 available이 들어갑니다."],
    ["impressive", ["impression", "impressively", "impress"], "The applicant has an _____ record of project leadership.", "명사 record 앞에는 형용사 impressive가 필요합니다."],
    ["secure", ["security", "securely", "secured"], "Use a _____ connection when submitting personal data.", "명사 connection을 수식하는 형용사 secure가 맞습니다."],
    ["original", ["origin", "originally", "originate"], "The designer kept the _____ layout of the lobby.", "명사 layout 앞에는 형용사 original이 필요합니다."],
    ["practical", ["practice", "practically", "practicing"], "The seminar offers _____ advice for small-business owners.", "명사 advice를 수식하는 형용사 practical이 맞습니다."],
    ["substantial", ["substance", "substantially", "substantiate"], "The store reported a _____ increase in online sales.", "명사 increase 앞에는 형용사 substantial이 필요합니다."],
    ["optional", ["option", "optionally", "opt"], "The second workshop is _____ for all new employees.", "be동사 뒤 보어 자리에는 형용사 optional이 알맞습니다."],
    ["visible", ["visibility", "visibly", "vision"], "Security badges must remain _____ at all times.", "remain 뒤 보어 자리에는 형용사 visible이 필요합니다."],
    ["financial", ["finance", "financially", "financier"], "The board discussed the project's _____ risks.", "명사 risks를 수식하는 형용사 financial이 필요합니다."],
    ["protective", ["protection", "protectively", "protect"], "Workers must wear _____ gloves in the laboratory.", "명사 gloves 앞에는 형용사 protective가 맞습니다."],
    ["considerable", ["considerably", "consideration", "consider"], "The renovation required a _____ amount of planning.", "명사 amount를 수식하는 형용사 considerable이 필요합니다."],
    ["potential", ["potentially", "potency", "potent"], "The brochure explains the _____ benefits of membership.", "명사 benefits 앞에는 형용사 potential이 알맞습니다."],
    ["valuable", ["value", "valuably", "valued"], "The survey provided _____ feedback from customers.", "명사 feedback을 수식하는 형용사 valuable이 필요합니다."],
    ["distinct", ["distinction", "distinctly", "distinguish"], "The factory has four _____ production areas.", "명사 production areas를 수식하는 형용사 distinct가 필요합니다."],
    ["responsible", ["responsibility", "responsibly", "respond"], "Each supervisor is _____ for checking attendance.", "be responsible for는 고정 표현입니다."],
    ["familiar", ["familiarity", "familiarly", "familiarize"], "All staff should be _____ with the new policy.", "be familiar with는 고정 표현입니다."]
  ];

  adjectiveItems.forEach((it, idx) => add({
    category: "word_form",
    difficulty: idx % 3 === 0 ? "easy" : idx % 3 === 1 ? "medium" : "hard",
    q: it[2],
    correct: it[0],
    wrongs: it[1],
    explanation: it[3],
    sourcePattern: "형용사 자리"
  }));

  const adverbItems = [
    ["carefully", ["careful", "care", "carefulness"], "The technician _____ inspected the machine before restarting it.", "동사 inspected를 수식하므로 부사 carefully가 필요합니다."],
    ["promptly", ["prompt", "promptness", "prompts"], "Customer requests should be answered _____ within one business day.", "answered를 수식하는 부사 promptly가 맞습니다."],
    ["directly", ["direct", "direction", "directed"], "Please send the signed contract _____ to the legal department.", "send를 수식하는 부사 directly가 필요합니다."],
    ["significantly", ["significant", "significance", "signify"], "The new software _____ reduced processing time.", "동사 reduced를 수식하는 부사 significantly가 맞습니다."],
    ["sincerely", ["sincere", "sincerity", "sincerest"], "We _____ appreciate your continued support.", "동사 appreciate를 수식하는 부사 sincerely가 필요합니다."],
    ["temporarily", ["temporary", "temporariness", "temporize"], "The north entrance will be _____ closed during repairs.", "형용사/분사 closed를 수식하므로 부사 temporarily가 맞습니다."],
    ["routinely", ["routine", "routines", "routed"], "The equipment is _____ checked for safety issues.", "분사 checked를 수식하는 부사 routinely가 필요합니다."],
    ["effectively", ["effective", "effect", "effectiveness"], "The new layout _____ reduces customer wait times.", "동사 reduces를 수식하는 부사 effectively가 맞습니다."],
    ["rarely", ["rare", "rarity", "rarest"], "Because of strong donations, the museum _____ raises admission fees.", "동사 raises를 빈도 부사 rarely가 자연스럽게 수식합니다."],
    ["frequently", ["frequent", "frequency", "frequented"], "The supervisor _____ asks Ms. Garcia to prepare charts.", "동사 asks를 수식하는 빈도 부사 frequently가 필요합니다."],
    ["enthusiastically", ["enthusiastic", "enthusiasm", "enthusiast"], "Reviewers _____ praised the company's new video game.", "동사 praised를 수식하는 부사 enthusiastically가 맞습니다."],
    ["closely", ["close", "closeness", "closed"], "The instructor's movements should be watched _____ during training.", "watched를 수식하는 부사 closely가 필요합니다."],
    ["newly", ["new", "newness", "news"], "The library's _____ acquired collection will open on Tuesday.", "분사 acquired를 수식하는 부사 newly가 필요합니다."],
    ["fully", ["full", "fullness", "fill"], "The machine must be _____ cleaned after each production cycle.", "분사 cleaned를 수식하는 부사 fully가 맞습니다."],
    ["professionally", ["professional", "profession", "professor"], "All complaints were handled _____ by the service team.", "handled를 수식하는 부사 professionally가 필요합니다."],
    ["accurately", ["accurate", "accuracy", "accuse"], "The payroll system calculates overtime _____ for each employee.", "동사 calculates를 수식하는 부사 accurately가 맞습니다."],
    ["regularly", ["regular", "regularity", "regularize"], "Security updates are _____ installed on all company laptops.", "분사 installed를 수식하는 부사 regularly가 필요합니다."],
    ["immediately", ["immediate", "immediacy", "mediate"], "Please notify your manager _____ after discovering an error.", "동사 notify를 수식하는 부사 immediately가 필요합니다."],
    ["publicly", ["public", "publication", "publish"], "The CEO _____ thanked the volunteers at the event.", "동사 thanked를 수식하는 부사 publicly가 맞습니다."],
    ["privately", ["private", "privacy", "privatize"], "Salary concerns should be discussed _____ with Human Resources.", "discussed를 수식하는 부사 privately가 필요합니다."],
    ["competitively", ["competitive", "competition", "compete"], "Our products are priced _____ in the regional market.", "분사 priced를 수식하는 부사 competitively가 맞습니다."],
    ["safely", ["safe", "safety", "save"], "The materials must be stored _____ away from heat.", "stored를 수식하는 부사 safely가 필요합니다."],
    ["efficiently", ["efficient", "efficiency", "effort"], "The new routing system helps drivers work more _____.", "work를 수식하는 부사 efficiently가 필요합니다."],
    ["approximately", ["approximate", "approximation", "approach"], "The repair will take _____ two hours to complete.", "수량 표현 two hours를 수식하는 부사 approximately가 맞습니다."],
    ["widely", ["wide", "width", "widen"], "The policy is _____ supported by department managers.", "분사 supported를 수식하는 부사 widely가 필요합니다."],
    ["clearly", ["clear", "clarity", "clearance"], "The instructions are _____ printed on the back of the form.", "분사 printed를 수식하는 부사 clearly가 맞습니다."],
    ["jointly", ["joint", "joints", "join"], "The report was prepared _____ by two research teams.", "prepared를 수식하는 부사 jointly가 필요합니다."],
    ["locally", ["local", "locality", "locate"], "The restaurant uses _____ grown vegetables whenever possible.", "분사 grown을 수식하는 부사 locally가 필요합니다."],
    ["electronically", ["electronic", "electronics", "electrify"], "Receipts can be submitted _____ through the portal.", "submitted를 수식하는 부사 electronically가 맞습니다."],
    ["gradually", ["gradual", "graduation", "graduate"], "Sales increased _____ after the advertising campaign began.", "동사 increased를 수식하는 부사 gradually가 필요합니다."]
  ];

  adverbItems.forEach((it, idx) => add({
    category: "word_form",
    difficulty: idx % 3 === 0 ? "easy" : idx % 3 === 1 ? "medium" : "hard",
    q: it[2],
    correct: it[0],
    wrongs: it[1],
    explanation: it[3],
    sourcePattern: "부사 자리"
  }));

  const verbBases = [
    ["inspect", "the device before shipment"], ["review", "the final contract"], ["submit", "the expense report"], ["renew", "the software license"],
    ["approve", "the purchase request"], ["update", "the customer records"], ["process", "all refund requests"], ["install", "the security patch"],
    ["confirm", "the reservation by noon"], ["prepare", "the presentation slides"], ["evaluate", "the vendor proposal"], ["schedule", "the maintenance visit"],
    ["contact", "the regional office"], ["complete", "the registration form"], ["verify", "the account number"], ["repair", "the loading dock"],
    ["announce", "the revised policy"], ["replace", "the damaged printer"], ["organize", "the training materials"], ["finalize", "the annual budget"]
  ];

  verbBases.forEach((v, idx) => add({
    category: "verb_form",
    difficulty: idx % 3 === 0 ? "easy" : idx % 3 === 1 ? "medium" : "hard",
    q: `The supervisor must _____ ${v[1]} before Friday.`,
    correct: v[0],
    wrongs: [pastOf(v[0]), ingOf(v[0]), `to ${v[0]}`],
    explanation: "조동사 must 뒤에는 동사원형이 와야 하므로 원형이 정답입니다.",
    sourcePattern: "조동사 + 동사원형"
  }));

  verbBases.forEach((v, idx) => add({
    category: "verb_form",
    difficulty: idx % 3 === 0 ? "medium" : idx % 3 === 1 ? "easy" : "hard",
    q: `The ${idx % 2 ? "documents" : "equipment"} will be _____ after the manager gives approval.`,
    correct: pastOf(v[0]),
    wrongs: [v[0], ingOf(v[0]), `to ${v[0]}`],
    explanation: "will be 뒤에서 대상이 처리되는 의미이므로 수동태 be + 과거분사가 필요합니다.",
    sourcePattern: "수동태"
  }));

  verbBases.slice(0, 15).forEach((v, idx) => add({
    category: "verb_form",
    difficulty: idx % 3 === 0 ? "medium" : idx % 3 === 1 ? "hard" : "easy",
    q: `The committee has _____ ${v[1]} for the upcoming audit.`,
    correct: pastOf(v[0]),
    wrongs: [v[0], ingOf(v[0]), `to ${v[0]}`],
    explanation: "has 뒤 완료형에는 과거분사가 필요합니다.",
    sourcePattern: "현재완료"
  }));

  verbBases.slice(0, 15).forEach((v, idx) => add({
    category: "verb_form",
    difficulty: idx % 3 === 0 ? "easy" : idx % 3 === 1 ? "medium" : "hard",
    q: `The company hired a consultant _____ ${v[1]}.`,
    correct: `to ${v[0]}`,
    wrongs: [v[0], pastOf(v[0]), ingOf(v[0])],
    explanation: "목적을 나타내는 구조에서는 to부정사가 자연스럽습니다.",
    sourcePattern: "목적의 to부정사"
  }));

  verbBases.slice(0, 10).forEach((v, idx) => add({
    category: "verb_form",
    difficulty: idx % 3 === 0 ? "medium" : idx % 3 === 1 ? "hard" : "easy",
    q: `Before _____ ${v[1]}, please check the latest instructions.`,
    correct: ingOf(v[0]),
    wrongs: [v[0], pastOf(v[0]), `to ${v[0]}`],
    explanation: "전치사 Before 뒤에는 명사나 동명사가 오므로 동명사 형태가 맞습니다.",
    sourcePattern: "전치사 + 동명사"
  }));

  const prepositionItems = [
    ["by", ["until", "at", "down"], "The order is expected to arrive _____ November 15.", "마감 시점까지 완료되는 의미이므로 by가 맞습니다."],
    ["until", ["during", "by", "for"], "Registration will remain open _____ Friday afternoon.", "계속 열려 있는 상태의 종료 시점을 나타내므로 until이 맞습니다."],
    ["during", ["between", "onto", "since"], "Visitors may not enter the warehouse _____ inventory checks.", "특정 기간 중을 뜻하므로 during이 자연스럽습니다."],
    ["within", ["during", "from", "among"], "All receipts must be submitted _____ five business days.", "정해진 기간 이내를 뜻하므로 within이 맞습니다."],
    ["since", ["for", "during", "within"], "Mr. Pereira has worked in the legal department _____ 2016.", "현재완료와 시작 시점에는 since를 씁니다."],
    ["for", ["since", "lately", "while"], "Mr. Barrientos has worked at the company _____ six years.", "현재완료와 기간 표현에는 for가 필요합니다."],
    ["before", ["once", "both", "then"], "Back up the data _____ turning in your device for repairs.", "동작의 선후 관계를 나타내며 뒤에 동명사구가 오므로 before가 맞습니다."],
    ["after", ["among", "opposite", "beside"], "The flower beds had to be replanted _____ the recent rainstorm.", "사건 이후를 뜻하므로 after가 맞습니다."],
    ["at", ["as", "off", "into"], "Custom furniture orders require a deposit _____ the time of the order.", "시점 표현 the time of the order 앞에는 at이 자연스럽습니다."],
    ["in", ["about", "near", "of"], "Using last year's profits, Mr. Shakar invested _____ a new delivery service.", "invest in은 고정 표현입니다."],
    ["to", ["of", "by", "out"], "Members get exclusive access _____ after-hours tours.", "access to는 고정 표현입니다."],
    ["with", ["to", "of", "under"], "All employees should become familiar _____ the new procedures.", "be familiar with는 고정 표현입니다."],
    ["for", ["to", "under", "beside"], "The contract states that Solcus is accountable _____ work delays.", "be accountable for는 고정 표현입니다."],
    ["under", ["among", "behind", "opposite"], "Regional managers serve _____ the direction of the vice president.", "under the direction of는 지휘 아래라는 뜻의 고정 표현입니다."],
    ["over", ["during", "above", "across"], "The board debated _____ the revised hiring policies for hours.", "debate over는 안건을 두고 논의한다는 표현입니다."],
    ["along", ["onto", "since", "inside"], "The tour takes visitors to historic sites _____ the river.", "강을 따라라는 의미에는 along이 적절합니다."],
    ["throughout", ["about", "except", "beside"], "The resort offers activities for guests _____ the day.", "하루 내내라는 의미에는 throughout이 맞습니다."],
    ["following", ["toward", "usually", "whenever"], "The company expanded to 26 stores _____ its takeover of a rival chain.", "사건 이후를 나타내는 전치사 following이 알맞습니다."],
    ["according to", ["prior to", "instead of", "except for"], "_____ the rules, overnight parking is not permitted.", "규칙에 따르면이라는 의미에는 according to가 맞습니다."],
    ["in light of", ["just as", "according to", "in spite of"], "_____ the closure of the transport service, we need a new shipping company.", "상황을 고려하여라는 의미에는 in light of가 자연스럽습니다."],
    ["owing to", ["possibly", "in total", "everywhere"], "_____ a recent surge in demand, the caterer is hiring servers.", "명사구 앞에서 원인을 나타내는 표현은 owing to입니다."],
    ["aside from", ["along", "because", "even if"], "_____ travel costs, attending the conference is reasonable.", "무엇을 제외하고는이라는 의미에는 aside from이 맞습니다."],
    ["including", ["excepting", "alongside", "within"], "The camera is on sale for $375, _____ tax.", "포함을 나타내는 전치사 including이 맞습니다."],
    ["on", ["under", "against", "from"], "The video camera is currently _____ sale.", "on sale은 할인 판매 중이라는 고정 표현입니다."],
    ["between", ["among", "during", "onto"], "Orders are accepted _____ 9:00 A.M. and 6:00 P.M.", "두 시점 사이에는 between A and B를 씁니다."],
    ["across", ["beside", "onto", "inside"], "The project required collaboration _____ several departments.", "여러 부서 전체에 걸친 협업에는 across가 자연스럽습니다."],
    ["from", ["under", "on", "against"], "Representatives handle issues ranging _____ missed connections to lost luggage.", "range from A to B 구조입니다."],
    ["of", ["for", "at", "to"], "The team prepared a list _____ changes for the next update.", "a list of는 고정 표현입니다."],
    ["into", ["at", "to", "from"], "The analyst divided the results _____ four categories.", "divide into는 나누어 넣는 구조입니다."],
    ["toward", ["whenever", "usually", "following"], "A portion of the budget was allocated _____ research and development.", "자금이 향하는 목적에는 toward가 자연스럽습니다."],
    ["effective", ["effect", "effected", "effecting"], "The promotion is _____ June 1.", "직책 변경이나 규정 적용일에는 형용사 effective를 전치사처럼 씁니다."],
    ["in", ["at", "by", "down"], "The training session will begin _____ the main conference room.", "공간 내부에서 시작된다는 의미이므로 in이 맞습니다."],
    ["of", ["for", "to", "by"], "Please keep personal belongings out _____ sight.", "out of sight는 보이지 않는 곳에라는 고정 표현입니다."],
    ["to", ["with", "for", "under"], "Questions should be addressed _____ the payroll department.", "address questions to는 문의를 보내는 대상을 나타냅니다."],
    ["for", ["with", "to", "beside"], "The city is accepting proposals _____ the park redesign.", "proposals for는 무엇에 대한 제안이라는 뜻입니다."],
    ["on", ["near", "past", "to"], "Ms. Najjar will give a presentation _____ workplace regulations.", "presentation on은 주제를 나타냅니다."],
    ["against", ["from", "under", "on"], "The warranty protects customers _____ unexpected repair costs.", "protect against는 위험을 막는다는 표현입니다."],
    ["through", ["there", "which", "who"], "Participants can join _____ a videoconferencing program.", "수단을 나타낼 때 through가 자연스럽습니다."],
    ["to", ["for", "about", "of"], "The company will promote Ms. Ahn _____ Chief Financial Officer.", "promote A to B는 직위로 승진시키다라는 구조입니다."],
    ["with", ["of", "near", "about"], "The consultant assisted the team _____ the inventory audit.", "assist someone with something 구조입니다."],
    ["for", ["at", "by", "with"], "The extended warranty is valid _____ ten years.", "유효 기간을 나타내는 for가 필요합니다."],
    ["as", ["about", "after", "around"], "Mr. Louden was hired _____ a division manager.", "직책이나 역할에는 as가 알맞습니다."],
    ["in", ["about", "of", "near"], "The committee specializes _____ workplace safety.", "specialize in은 고정 표현입니다."],
    ["to", ["of", "with", "under"], "The finance team contributed _____ the annual report.", "contribute to는 기여 대상을 나타냅니다."],
    ["by", ["of", "with", "for"], "The form must be signed _____ a department supervisor.", "수동태에서 행위자를 나타낼 때 by가 필요합니다."],
    ["without", ["since", "who", "that"], "The software cannot be installed _____ administrator approval.", "승인 없이를 뜻하므로 without이 맞습니다."],
    ["near", ["about", "in", "of"], "The new branch is located _____ the central station.", "위치를 나타내는 near가 자연스럽습니다."],
    ["past", ["near", "to", "on"], "The delivery truck drove _____ the main entrance.", "지나쳐 갔다는 의미에는 past가 맞습니다."],
    ["inside", ["onto", "since", "along"], "The safety notice should be posted _____ the elevator.", "엘리베이터 안쪽 위치에는 inside가 맞습니다."],
    ["onto", ["between", "during", "from"], "The boxes were loaded _____ the delivery truck.", "이동하여 위/안으로 실리는 의미에는 onto가 자연스럽습니다."]
  ];

  prepositionItems.forEach((it, idx) => add({
    category: "preposition",
    difficulty: idx % 3 === 0 ? "easy" : idx % 3 === 1 ? "medium" : "hard",
    q: it[2],
    correct: it[0],
    wrongs: it[1],
    explanation: it[3],
    sourcePattern: "전치사 및 고정 표현"
  }));

  const connectorItems = [
    ["Although", ["Until", "Because", "Therefore"], "_____ the organization doubled its outreach efforts, it has yet to see more clients.", "두 절이 양보 관계이므로 Although가 맞습니다."],
    ["Because", ["Although", "Despite", "However"], "_____ the museum receives generous donations, it rarely raises ticket prices.", "원인절을 이끄는 접속사 Because가 필요합니다."],
    ["While", ["Either", "Still", "Also"], "_____ your order is being processed, call customer service with any questions.", "동시에 진행되는 상황을 나타내므로 While이 자연스럽습니다."],
    ["Once", ["Arrived", "To arrive", "Is arriving"], "_____ everyone has arrived, we can begin the conference call.", "조건/시간절을 이끄는 Once가 맞습니다."],
    ["Before", ["Since", "Although", "Without"], "Download your tickets to your phone _____ arriving at the venue.", "도착하기 전에라는 의미이므로 before가 맞습니다."],
    ["After", ["That", "How", "Every"], "_____ a mineral-rich spring was discovered nearby, the hotel became popular.", "사건 이후의 결과를 나타내므로 After가 알맞습니다."],
    ["Until", ["When", "Lately", "From"], "Ms. Sampson will not arrive at the convention _____ after the team presentation.", "not ... until 구조로 특정 시점까지 하지 않음을 나타냅니다."],
    ["as long as", ["or else", "as well as", "in between"], "We will keep producing the shoe designs _____ there is demand for them.", "조건을 나타내는 as long as가 맞습니다."],
    ["so that", ["instead of", "resulting from", "as"], "Please park on the west side _____ customers can use spaces near the entrance.", "목적절을 이끄는 so that이 필요합니다."],
    ["in case", ["whereas", "despite", "if not"], "Provide your phone number _____ the delivery driver needs to contact you.", "혹시 ~할 경우에 대비해라는 의미에는 in case가 맞습니다."],
    ["if", ["and", "then", "but"], "Contact the department _____ you have problems with the database.", "조건절을 이끄는 if가 필요합니다."],
    ["whether", ["who", "since", "that"], "Chat Mobile will determine _____ it should open additional stores.", "~인지 아닌지 판단하다는 의미에는 whether가 필요합니다."],
    ["wherever", ["Either", "In addition to", "In contrast to"], "_____ she travels, Ms. Flores collects local fabric samples.", "장소가 어디든이라는 의미에는 wherever가 맞습니다."],
    ["whereas", ["if only", "alternatively", "because of"], "We chose Okafor Construction, _____ the other bidder was more expensive.", "두 사실을 대조하므로 whereas가 자연스럽습니다."],
    ["but", ["or", "once", "either"], "The editors will review the manuscript _____ will not return it until next week.", "앞뒤 절이 대조/추가 관계이므로 but이 맞습니다."],
    ["or", ["but", "once", "either"], "Please call customer service _____ send an e-mail to the help desk.", "두 선택지를 연결하므로 or가 자연스럽습니다."],
    ["and", ["whether", "how", "within"], "Log on to your account _____ keep the profile active.", "동작을 병렬로 연결하므로 and가 맞습니다."],
    ["that", ["they", "what", "whoever"], "Small businesses _____ participate in the program will receive marketing tools.", "명사 businesses를 수식하는 관계대명사 that이 필요합니다."],
    ["which", ["there", "who", "through"], "The online meeting, _____ each participant can join by video, begins at noon.", "사물을 선행사로 받는 관계대명사 which가 맞습니다."],
    ["who", ["which", "there", "through"], "Applicants _____ need larger quantities should place a special order.", "사람 applicants를 수식하는 관계대명사 who가 필요합니다."],
    ["whoever", ["that", "they", "what"], "The award will be given to _____ submits the best proposal.", "누구든 ~하는 사람이라는 의미에는 whoever가 맞습니다."],
    ["whichever", ["whoever", "either", "another"], "The warranty ends after ten years or 100,000 miles, _____ comes first.", "둘 중 어느 것이든 먼저 오는 것을 뜻하므로 whichever가 맞습니다."],
    ["Even if", ["Along", "Aside from", "Because"], "_____ the registration fee increases, the conference remains affordable.", "가정적 양보를 나타내는 Even if가 맞습니다."],
    ["Despite", ["Behind", "Versus", "Among"], "_____ the organizers' best efforts, they could not attract enough volunteers.", "명사구 앞에서 양보를 나타내는 Despite가 맞습니다."],
    ["Though", ["Soon", "Ever", "Next"], "_____ she lacks political experience, Ms. Diaz has been impressive.", "양보절을 이끄는 Though가 필요합니다."],
    ["Because of", ["Because", "Although", "Therefore"], "_____ the heavy rain, the outdoor event was postponed.", "명사구 heavy rain 앞에는 전치사구 Because of가 필요합니다."],
    ["While", ["Despite", "Owing to", "According to"], "_____ the software is being updated, some features may be unavailable.", "절을 이끄는 시간 접속사 While이 필요합니다."],
    ["Unless", ["Because of", "During", "Despite"], "The order will not ship _____ payment is received.", "조건을 나타내는 Unless가 맞습니다."],
    ["When", ["During", "Despite", "Because of"], "_____ reviewing applications, Ms. Ng considers both education and experience.", "분사구문과 함께 시점을 나타내는 When이 자연스럽습니다."],
    ["As", ["Off", "Into", "Record"], "_____ requested, the invoice was sent to the accounting department.", "요청받은 대로라는 의미에는 As가 맞습니다."],
    ["Rather than", ["Because of", "Despite", "According to"], "_____ replace the system, the team upgraded its security features.", "대신 ~하다라는 의미에는 Rather than이 맞습니다."],
    ["Not only", ["Either", "Whether", "While"], "_____ did the seminar attract managers, but it also drew new employees.", "not only A but also B 강조 구조입니다."],
    ["As soon as", ["As well as", "In between", "Or else"], "_____ the report is finalized, it will be sent to the board.", "완료 직후를 나타내는 As soon as가 필요합니다."],
    ["Provided that", ["Despite", "Instead of", "Along"], "The refund will be issued _____ the product is returned unused.", "조건을 나타내는 Provided that이 맞습니다."],
    ["Now that", ["Even if", "Aside from", "Along"], "_____ the contract has been signed, work can begin.", "이미 성립된 상황을 이유로 삼을 때 Now that이 자연스럽습니다."],
    ["Since", ["During", "Within", "Unless"], "_____ the figures are incomplete, the report cannot be released.", "이유절을 이끄는 Since가 맞습니다."],
    ["Before", ["Prior to", "Despite", "According to"], "_____ you submit the form, check that all fields are complete.", "뒤에 주어+동사가 있는 절이 오므로 접속사 Before가 필요합니다."],
    ["Prior to", ["Before", "Although", "If"], "_____ submitting the form, check that all fields are complete.", "뒤에 동명사구가 오므로 전치사구 Prior to가 알맞습니다."],
    ["In addition to", ["Wherever", "Either", "Although"], "_____ managing invoices, the assistant schedules vendor calls.", "명사/동명사구를 더하는 표현은 In addition to입니다."],
    ["In contrast to", ["Wherever", "Either", "Once"], "_____ last year's decline, this year's sales increased.", "대조되는 명사구 앞에는 In contrast to가 필요합니다."],
    ["Whenever", ["Either", "Yet", "Into"], "Contact the help desk _____ the printer displays an error message.", "언제든 ~할 때마다라는 의미에는 Whenever가 맞습니다."],
    ["If only", ["Whereas", "Despite", "Alternatively"], "The repair can be finished today _____ the parts arrive by noon.", "조건이 충족되기만 하면이라는 의미에는 if only가 가능합니다."],
    ["As if", ["Because of", "According to", "Owing to"], "The prototype operates _____ it were already a finished product.", "마치 ~인 것처럼이라는 의미에는 As if가 맞습니다."],
    ["Even though", ["Due to", "During", "About"], "_____ the deadline was tight, the team submitted the proposal on time.", "양보절에는 Even though가 자연스럽습니다."],
    ["So", ["Neither", "Whenever", "Although"], "Inventory was low, _____ the store placed an urgent order.", "원인과 결과를 연결하므로 so가 맞습니다."],
    ["Neither", ["Although", "Whenever", "So"], "_____ the director nor the assistant was available for the meeting.", "neither A nor B 구조입니다."],
    ["Either", ["Neither", "Although", "Since"], "You may submit the form _____ online or by mail.", "either A or B 구조입니다."],
    ["Not until", ["Because of", "Despite", "Even if"], "_____ the manager approves the budget can purchases begin.", "not until 도치 구조로 특정 시점 전에는 불가능함을 나타냅니다."],
    ["As well as", ["As long as", "Or else", "In between"], "The package includes setup support _____ monthly reports.", "A뿐 아니라 B도 포함한다는 의미에는 as well as가 맞습니다."],
    ["In order that", ["In spite of", "According to", "Aside from"], "The policy was revised _____ employees could understand it more easily.", "목적절을 이끄는 In order that이 필요합니다."]
  ];

  connectorItems.forEach((it, idx) => add({
    category: "connector",
    difficulty: idx % 3 === 0 ? "easy" : idx % 3 === 1 ? "medium" : "hard",
    q: it[2],
    correct: it[0],
    wrongs: it[1],
    explanation: it[3],
    sourcePattern: "접속사와 논리"
  }));

  const pronounItems = [
    ["their", ["they", "theirs", "themselves"], "The new policy allows employees to set _____ own working hours.", "명사 working hours 앞에는 소유격 their가 필요합니다."],
    ["his", ["he", "him", "himself"], "Mr. Kam invited all staff members to attend _____ retirement party.", "명사 retirement party 앞에는 소유격 his가 맞습니다."],
    ["her", ["she", "hers", "herself"], "Ms. Sieglak stated that the app design was based on _____ own research.", "own research 앞에는 소유격 her가 필요합니다."],
    ["your", ["you", "yourself", "yours"], "Make sure that _____ personal belongings are safely stored.", "명사 personal belongings 앞에는 소유격 your가 필요합니다."],
    ["our", ["us", "we", "ours"], "According to the department head, _____ team is ready to begin the project.", "명사 team 앞에는 소유격 our가 알맞습니다."],
    ["them", ["theirs", "they", "themselves"], "Office supplies are available for anyone who needs _____.", "동사 needs의 목적어 자리에는 목적격 them이 맞습니다."],
    ["themselves", ["their", "them", "theirs"], "New employees should familiarize _____ with the safety procedures.", "familiarize oneself with 구조이므로 재귀대명사가 필요합니다."],
    ["itself", ["it", "its", "it own"], "The device shuts _____ off after twenty minutes of inactivity.", "주어와 목적어가 같은 대상이므로 itself가 필요합니다."],
    ["its", ["it", "itself", "its own"], "The organization will publish _____ annual report next week.", "명사 annual report 앞에는 소유격 its가 맞습니다."],
    ["Each", ["All", "Some", "Most"], "_____ client is assigned to a personal financial adviser.", "단수 명사 client 앞에는 Each가 자연스럽습니다."],
    ["All", ["Each", "Any", "Every"], "_____ employees must complete the security training by Friday.", "복수 명사 employees 전체를 나타내므로 All이 맞습니다."],
    ["Some", ["Each", "Anyone", "Every"], "_____ applicants may be asked to provide additional documents.", "복수 applicants 일부를 뜻하므로 Some이 적절합니다."],
    ["Any", ["Everybody", "Those", "Each"], "_____ questions about payroll should be sent to Ms. Jones.", "복수 questions 앞에서 어떤 질문이든이라는 의미에는 Any가 맞습니다."],
    ["Anyone", ["Each", "Those", "Everything"], "_____ who arrives after 10:00 A.M. must contact security.", "사람을 가리키며 관계절 who를 받으므로 Anyone이 맞습니다."],
    ["Those", ["Each", "Anyone", "Everything"], "_____ who need receipts should contact the accounting office.", "복수 사람들을 가리키는 Those who 구조입니다."],
    ["Most", ["Each", "Every", "Anyone"], "_____ picture frames at the lab go on sale today.", "복수 명사 picture frames 앞에는 Most가 자연스럽습니다."],
    ["another", ["other", "each", "whose"], "Please contact customer service if you need _____ copy of the invoice.", "단수 명사 copy 앞에서 추가 하나를 뜻하므로 another가 맞습니다."],
    ["other", ["another", "each", "any"], "Please do not share the access code with people from _____ communities.", "복수 명사 communities 앞에는 other가 필요합니다."],
    ["both", ["either", "neither", "somewhat"], "Ms. Ng will consider _____ education and experience.", "both A and B 구조입니다."],
    ["either", ["both", "all", "further"], "Business travel is allowed by _____ train or airplane.", "either A or B 구조입니다."],
    ["neither", ["either", "all", "some"], "_____ option was available after registration closed.", "둘 중 어느 것도 아니라는 뜻에는 neither가 맞습니다."],
    ["whose", ["which", "who", "whom"], "Applicants _____ documents are incomplete will be contacted.", "소유 관계를 나타내는 관계대명사 whose가 필요합니다."],
    ["whom", ["who", "whose", "which"], "The adviser to _____ inquiries should be addressed is on vacation.", "전치사 to의 목적어로 whom이 알맞습니다."],
    ["which", ["who", "whom", "whose"], "The report, _____ was published yesterday, includes updated figures.", "사물 report를 받는 관계대명사 which가 맞습니다."],
    ["who", ["which", "whom", "whose"], "The technician _____ repaired the printer left a note.", "사람 technician을 주격으로 받는 who가 필요합니다."],
    ["one", ["ones", "those", "some"], "The blue folder is the _____ that contains the signed forms.", "단수 대상을 대신하므로 one이 맞습니다."],
    ["ones", ["one", "it", "itself"], "The new chairs are more comfortable than the old _____.", "복수 명사를 대신하므로 ones가 맞습니다."],
    ["few", ["little", "much", "anyone"], "Only a _____ employees attended the optional seminar.", "셀 수 있는 복수 employees에는 a few가 필요합니다."],
    ["little", ["few", "many", "several"], "The team had _____ time to revise the proposal.", "셀 수 없는 time에는 little이 맞습니다."],
    ["many", ["much", "little", "anyone"], "The survey received _____ responses from customers.", "셀 수 있는 복수 responses에는 many가 필요합니다."],
    ["much", ["many", "few", "several"], "The project did not require _____ additional funding.", "셀 수 없는 funding에는 much가 필요합니다."],
    ["several", ["much", "each", "anyone"], "The manager interviewed _____ candidates for the position.", "복수 candidates 앞에는 several이 자연스럽습니다."],
    ["fewer", ["less", "least", "fewest"], "The updated process requires _____ approval steps.", "셀 수 있는 복수 steps에는 fewer가 맞습니다."],
    ["less", ["fewer", "fewest", "many"], "The new printer uses _____ energy than the previous model.", "셀 수 없는 energy에는 less가 필요합니다."],
    ["every", ["all", "some", "many"], "The training room is cleaned _____ morning.", "단수 명사 morning 앞에는 every가 맞습니다."]
  ];

  pronounItems.forEach((it, idx) => add({
    category: "pronoun",
    difficulty: idx % 3 === 0 ? "easy" : idx % 3 === 1 ? "medium" : "hard",
    q: it[2],
    correct: it[0],
    wrongs: it[1],
    explanation: it[3],
    sourcePattern: "대명사와 한정사"
  }));

  const comparisonItems = [
    ["higher", ["high", "highly", "highest"], "Cormet Motors' profits are _____ this year than last year.", "than이 있으므로 비교급 higher가 필요합니다."],
    ["widest", ["wide", "wider", "widely"], "ABC Truck Supplies has the _____ selection of mufflers in the state.", "the와 범위 표현이 있으므로 최상급 widest가 맞습니다."],
    ["most ambitious", ["ambitious", "ambitiously", "more ambitiously"], "Mira Kumar was probably the _____ of all the interns.", "of all과 함께 최상급 표현이 필요합니다."],
    ["more efficient", ["efficient", "most efficient", "efficiently"], "The revised system is _____ than the old one.", "than이 있으므로 비교급 more efficient가 필요합니다."],
    ["largest", ["large", "largely", "larger"], "The company opened its _____ distribution center in the region.", "소유 범위 안에서 가장 큰 것을 말하므로 최상급 largest가 맞습니다."],
    ["better", ["best", "well", "good"], "The new layout provides _____ access to emergency exits than before.", "than before와 함께 비교급 better가 필요합니다."],
    ["best", ["better", "good", "well"], "This is the _____ option for clients with limited budgets.", "the와 단수 명사 option에는 최상급 best가 자연스럽습니다."],
    ["more reliable", ["reliable", "most reliable", "reliably"], "The updated server is _____ than the previous model.", "than이 있으므로 비교급 more reliable이 맞습니다."],
    ["most reliable", ["more reliable", "reliably", "reliability"], "Of the three couriers, Hanto Express is the _____.", "Of the three와 the가 있으므로 최상급 most reliable이 필요합니다."],
    ["less expensive", ["least expensive", "expensively", "expense"], "The online course is _____ than the in-person seminar.", "than과 함께 비교급 less expensive가 맞습니다."],
    ["least expensive", ["less expensive", "expensively", "expense"], "This is the _____ plan available to small businesses.", "the와 범위 의미가 있어 최상급 least expensive가 필요합니다."],
    ["as quickly as", ["so quickly than", "more quick as", "quickest than"], "Please respond _____ possible.", "as quickly as possible은 고정 비교 표현입니다."],
    ["as much as", ["as many as", "so much than", "more much"], "The new model costs _____ $500 less than the old version.", "금액 정도를 나타낼 때 as much as를 씁니다."],
    ["as many as", ["as much as", "so many than", "more many"], "The auditorium can seat _____ 600 guests.", "셀 수 있는 guests 수량에는 as many as가 맞습니다."],
    ["equally", ["equal", "equality", "equalize"], "Both candidates are _____ suitable for the position.", "형용사 suitable을 수식하므로 부사 equally가 필요합니다."],
    ["increasingly", ["increasing", "increase", "increased"], "Online reservations have become _____ popular among travelers.", "형용사 popular를 수식하는 부사 increasingly가 맞습니다."],
    ["more frequently", ["most frequently", "frequent", "frequency"], "Customers use the mobile app _____ than the desktop site.", "than이 있으므로 비교급 부사 more frequently가 필요합니다."],
    ["most frequently", ["more frequently", "frequent", "frequency"], "The topic mentioned _____ in the survey was delivery speed.", "가장 자주 언급된 것을 뜻하므로 최상급 부사 most frequently가 맞습니다."],
    ["faster", ["fast", "fastest", "fastly"], "The new scanner processes documents _____ than the old one.", "than과 함께 비교급 faster가 필요합니다."],
    ["fastest", ["faster", "fast", "fastly"], "The express lane is the _____ way to complete registration.", "the와 단수 명사 way 앞에는 최상급 fastest가 필요합니다."],
    ["more clearly", ["most clearly", "clear", "clarity"], "The updated manual explains the process _____ than the old version.", "than이 있으므로 비교급 부사 more clearly가 맞습니다."],
    ["most clearly", ["more clearly", "clear", "clarity"], "Of all the presenters, Ms. Tran explained the policy the _____.", "of all과 the가 있으므로 최상급 부사 most clearly가 필요합니다."],
    ["larger", ["large", "largest", "largely"], "The revised plan requires a _____ budget than originally expected.", "than이 있으므로 비교급 larger가 필요합니다."],
    ["smaller", ["small", "smallest", "smallness"], "The new packaging uses a _____ amount of plastic than before.", "than before와 함께 비교급 smaller가 필요합니다."],
    ["most successful", ["successful", "successfully", "more successfully"], "The spring campaign was the company's _____ promotion.", "the와 소유 범위가 있으므로 최상급 most successful이 필요합니다."]
  ];

  comparisonItems.forEach((it, idx) => add({
    category: "comparison",
    difficulty: idx % 3 === 0 ? "easy" : idx % 3 === 1 ? "medium" : "hard",
    q: it[2],
    correct: it[0],
    wrongs: it[1],
    explanation: it[3],
    sourcePattern: "비교 표현"
  }));

  const collocationItems = [
    ["place", ["make", "do", "set"], "Customers who need larger quantities should _____ a special order.", "place an order는 주문하다라는 자연스러운 표현입니다."],
    ["renew", ["repeat", "return", "remind"], "Central Oregon Power must _____ the contract before it expires.", "계약을 갱신하다는 renew the contract가 맞습니다."],
    ["submit", ["supply", "suggest", "suspend"], "Employees should _____ receipts for reimbursement.", "영수증을 제출하다는 submit receipts가 자연스럽습니다."],
    ["attend", ["assist", "arrive", "access"], "All new hires must _____ the orientation on Monday.", "행사나 교육에 참석하다는 attend가 맞습니다."],
    ["review", ["revise", "reveal", "remove"], "The legal team will _____ the contract before it is signed.", "계약 내용을 검토하다는 review the contract가 자연스럽습니다."],
    ["process", ["progress", "produce", "perform"], "The service center can _____ refund requests within two days.", "요청을 처리하다는 process requests가 맞습니다."],
    ["schedule", ["settle", "store", "state"], "Please _____ a maintenance visit for next week.", "방문 일정을 잡다는 schedule a visit가 맞습니다."],
    ["conduct", ["contain", "connect", "consist"], "The research team will _____ a survey of local residents.", "조사를 실시하다는 conduct a survey가 자연스럽습니다."],
    ["launch", ["lift", "locate", "label"], "The company plans to _____ a new advertising campaign.", "캠페인을 시작하다는 launch a campaign입니다."],
    ["reduce", ["refer", "release", "remain"], "The new system is designed to _____ processing time.", "시간을 줄이다는 reduce time이 자연스럽습니다."],
    ["increase", ["include", "indicate", "install"], "The discount helped _____ online sales.", "매출을 증가시키다는 increase sales가 맞습니다."],
    ["attract", ["adopt", "attach", "adjust"], "The event is expected to _____ hundreds of visitors.", "방문객을 끌어들이다는 attract visitors가 맞습니다."],
    ["resolve", ["reserve", "restore", "result"], "The technician was able to _____ the network issue.", "문제를 해결하다는 resolve an issue가 자연스럽습니다."],
    ["maintain", ["manage", "mention", "measure"], "Employees must _____ accurate records of all transactions.", "기록을 유지하다는 maintain records가 맞습니다."],
    ["provide", ["prevent", "prove", "produce"], "The brochure will _____ details about membership benefits.", "정보를 제공하다는 provide details가 자연스럽습니다."],
    ["offer", ["operate", "order", "own"], "The company will _____ free training to all supervisors.", "교육을 제공하다는 offer training이 맞습니다."],
    ["meet", ["match", "move", "mark"], "The supplier was unable to _____ the delivery deadline.", "마감일을 맞추다는 meet a deadline입니다."],
    ["exceed", ["expand", "expect", "explain"], "Sales are expected to _____ last year's total.", "수치나 기대를 초과하다는 exceed가 맞습니다."],
    ["monitor", ["modify", "motivate", "maintain"], "Managers will _____ inventory levels throughout the week.", "수준을 계속 살피다는 monitor levels가 자연스럽습니다."],
    ["assign", ["assist", "assume", "assure"], "The director will _____ tasks to each project member.", "업무를 배정하다는 assign tasks가 맞습니다."],
    ["handle", ["hold", "hire", "head"], "Airline representatives must _____ a wide range of passenger issues.", "문제를 처리하다는 handle issues가 자연스럽습니다."],
    ["open", ["operate", "order", "own"], "Registration for the conference will _____ on Monday.", "등록이 시작/열리다는 open이 맞습니다."],
    ["close", ["collect", "carry", "claim"], "Registration will _____ at 5:00 P.M. on Friday.", "등록이 마감되다는 close가 자연스럽습니다."],
    ["earn", ["enter", "ensure", "employ"], "Members can _____ reward points on every purchase.", "포인트를 적립하다는 earn points가 맞습니다."],
    ["redeem", ["repair", "reduce", "recruit"], "Customers may _____ coupons at participating stores.", "쿠폰을 사용/상환하다는 redeem coupons가 자연스럽습니다."],
    ["protect", ["permit", "predict", "publish"], "The policy helps _____ customer information.", "정보를 보호하다는 protect information이 맞습니다."],
    ["boost", ["distribute", "sweat", "tone"], "The company offers fitness classes to _____ productivity.", "생산성을 높이다는 boost productivity가 자연스럽습니다."],
    ["discard", ["describe", "deliver", "divide"], "Residents can _____ unwanted appliances at the public works facility.", "불필요한 물건을 폐기하다는 discard가 맞습니다."],
    ["install", ["instruct", "inspect", "include"], "The contractor will _____ new lighting in the lobby.", "장비를 설치하다는 install lighting이 맞습니다."],
    ["file", ["fill", "feel", "find"], "Employees may _____ a complaint through the HR portal.", "불만을 제기/접수하다는 file a complaint가 자연스럽습니다."],
    ["book", ["boost", "brief", "build"], "Travelers should _____ hotel rooms early during peak season.", "객실을 예약하다는 book rooms가 맞습니다."],
    ["allocate", ["alter", "allow", "alert"], "The committee will _____ more funds to research.", "자금을 배정하다는 allocate funds가 맞습니다."],
    ["confirm", ["conform", "contain", "contact"], "Please _____ your attendance by replying to the e-mail.", "참석 여부를 확인하다는 confirm attendance입니다."],
    ["collect", ["collide", "conduct", "connect"], "Be sure to _____ your name tag at the registration table.", "명찰을 수령하다는 collect가 자연스럽습니다."],
    ["streamline", ["strengthen", "summarize", "separate"], "The app is intended to _____ the reimbursement process.", "절차를 간소화하다는 streamline the process가 맞습니다."],
    ["expand", ["explain", "expect", "export"], "The retailer plans to _____ its product line next year.", "제품군을 확장하다는 expand a product line이 맞습니다."],
    ["evaluate", ["evacuate", "estimate", "establish"], "The consultant will _____ the company's financial assets.", "자산을 평가하다는 evaluate assets가 자연스럽습니다."],
    ["retain", ["repair", "replace", "request"], "The program helped the company _____ experienced employees.", "직원을 유지하다는 retain employees가 맞습니다."],
    ["recognize", ["recommend", "reconcile", "recreate"], "The award will _____ outstanding customer service.", "공로를 인정하다는 recognize가 자연스럽습니다."],
    ["post", ["print", "press", "prove"], "Once approval is received, please _____ the job listing online.", "공고를 게시하다는 post a listing이 맞습니다."]
  ];

  collocationItems.forEach((it, idx) => add({
    category: "collocation",
    difficulty: idx % 3 === 0 ? "easy" : idx % 3 === 1 ? "medium" : "hard",
    q: it[2],
    correct: it[0],
    wrongs: it[1],
    explanation: it[3],
    sourcePattern: "비즈니스 콜로케이션"
  }));

  const usedQuestions = new Set(bank.map(q => q.q));
  function addUnique(item) {
    if (usedQuestions.has(item.q)) return;
    const allChoices = [item.correct, ...item.wrongs];
    if (new Set(allChoices).size !== allChoices.length) return;
    usedQuestions.add(item.q);
    add(item);
  }

  function padToThousandQuestions() {
    const businesses = [
      "Aster Logistics", "Bramwell Foods", "Canyon Tech", "Darin Hotels", "Everline Apparel",
      "Foster Medical", "Glenford Bank", "Hanley Motors", "Ivory Books", "Juno Software",
      "Keller Design", "Linton Energy", "Marlowe Foods", "Nexora Travel", "Orbis Furniture",
      "Pioneer Labs", "Quanta Media", "Riverton Supplies", "Solace Pharmacy", "Tandem Builders",
      "Urbanite Salon", "Verdant Farms", "Westport Shipping", "Yamana Textiles", "Zenith Tools",
      "Atlas Catering", "Beacon Insurance", "Crescent Electronics", "Dover Printing", "Elmwood Resorts"
    ];
    const departments = [
      "accounting department", "marketing team", "research division", "customer service desk",
      "regional office", "warehouse staff", "training center", "legal department",
      "product design team", "sales department", "maintenance crew", "human resources office"
    ];
    const nouns = [
      ["assessment", ["assess", "assessed", "assessing"], "a complete", "of supplier performance"],
      ["authorization", ["authorize", "authorized", "authorizing"], "written", "from the branch manager"],
      ["clarification", ["clarify", "clarified", "clarifying"], "further", "of the refund policy"],
      ["confirmation", ["confirm", "confirmed", "confirming"], "official", "of the booking"],
      ["documentation", ["document", "documented", "documenting"], "proper", "for the inspection"],
      ["expansion", ["expand", "expanded", "expanding"], "rapid", "of the delivery network"],
      ["implementation", ["implement", "implemented", "implementing"], "successful", "of the new system"],
      ["improvement", ["improve", "improved", "improving"], "steady", "in customer ratings"],
      ["notification", ["notify", "notified", "notifying"], "advance", "of schedule changes"],
      ["preparation", ["prepare", "prepared", "preparing"], "careful", "for the annual audit"],
      ["qualification", ["qualify", "qualified", "qualifying"], "minimum", "for the technician role"],
      ["replacement", ["replace", "replaced", "replacing"], "immediate", "of the damaged part"],
      ["requirement", ["require", "required", "requiring"], "mandatory", "for all contractors"],
      ["selection", ["select", "selected", "selecting"], "final", "of the keynote speaker"],
      ["supervision", ["supervise", "supervised", "supervising"], "direct", "of new interns"],
      ["verification", ["verify", "verified", "verifying"], "digital", "of customer accounts"],
      ["coordination", ["coordinate", "coordinated", "coordinating"], "close", "among several teams"],
      ["distribution", ["distribute", "distributed", "distributing"], "regional", "of promotional materials"],
      ["participation", ["participate", "participated", "participating"], "active", "in the training program"],
      ["renovation", ["renovate", "renovated", "renovating"], "major", "of the conference hall"]
    ];
    const adjectives = [
      ["accessible", ["access", "accessibly", "accessibility"], "online manuals", "for remote workers"],
      ["affordable", ["afford", "affordably", "affordability"], "pricing plans", "for small businesses"],
      ["beneficial", ["benefit", "beneficially", "benefits"], "training sessions", "for new managers"],
      ["consistent", ["consistency", "consistently", "consist"], "service standards", "across all branches"],
      ["durable", ["duration", "durably", "endure"], "packaging materials", "for overseas shipments"],
      ["flexible", ["flexibility", "flexibly", "flex"], "working hours", "for project teams"],
      ["informative", ["information", "informatively", "inform"], "brochures", "for first-time visitors"],
      ["innovative", ["innovation", "innovatively", "innovate"], "software tools", "for inventory control"],
      ["profitable", ["profit", "profitably", "profiting"], "product lines", "in the domestic market"],
      ["qualified", ["qualification", "qualify", "qualifying"], "candidates", "for the supervisor position"],
      ["suitable", ["suitability", "suitably", "suit"], "locations", "for the new outlet"],
      ["valuable", ["value", "valuably", "valuation"], "feedback", "from long-term customers"],
      ["accurate", ["accuracy", "accurately", "accuse"], "sales forecasts", "for the next quarter"],
      ["compliant", ["compliance", "comply", "complying"], "suppliers", "under the safety rules"],
      ["efficient", ["efficiency", "efficiently", "effort"], "procedures", "for processing claims"]
    ];
    const adverbs = [
      ["accurately", ["accurate", "accuracy", "accuse"], "calculate", "shipping charges"],
      ["briefly", ["brief", "briefing", "briefness"], "explain", "the revised policy"],
      ["closely", ["close", "closed", "closeness"], "monitor", "inventory levels"],
      ["efficiently", ["efficient", "efficiency", "effort"], "process", "online orders"],
      ["frequently", ["frequent", "frequency", "frequented"], "update", "the project schedule"],
      ["independently", ["independent", "independence", "depend"], "review", "the proposal"],
      ["promptly", ["prompt", "promptness", "prompts"], "respond to", "customer inquiries"],
      ["securely", ["secure", "security", "secured"], "store", "confidential files"],
      ["temporarily", ["temporary", "temporariness", "temporize"], "close", "the east entrance"],
      ["thoroughly", ["thorough", "thoroughness", "through"], "inspect", "the warehouse"],
      ["voluntarily", ["voluntary", "volunteer", "volunteering"], "attend", "the extra workshop"],
      ["electronically", ["electronic", "electronics", "electrify"], "submit", "tax documents"],
      ["regularly", ["regular", "regularity", "regularize"], "maintain", "delivery vehicles"],
      ["publicly", ["public", "publication", "publish"], "announce", "the award winners"],
      ["privately", ["private", "privacy", "privatize"], "discuss", "salary concerns"]
    ];

    nouns.forEach((it, idx) => {
      businesses.forEach((company, cIdx) => addUnique({
        category: "word_form",
        difficulty: (idx + cIdx) % 3 === 0 ? "easy" : (idx + cIdx) % 3 === 1 ? "medium" : "hard",
        q: `${company} requested ${it[2]} _____ ${it[3]}.`,
        correct: it[0],
        wrongs: it[1],
        explanation: `${it[2]} 뒤에서 ${it[3]}와 연결되는 명사 자리이므로 ${it[0]}이 정답입니다.`,
        sourcePattern: "명사 자리 확장"
      }));
    });

    adjectives.forEach((it, idx) => {
      departments.forEach((dept, dIdx) => addUnique({
        category: "word_form",
        difficulty: (idx + dIdx) % 3 === 0 ? "easy" : (idx + dIdx) % 3 === 1 ? "medium" : "hard",
        q: `The ${dept} prepared _____ ${it[2]} ${it[3]}.`,
        correct: it[0],
        wrongs: it[1],
        explanation: `명사 ${it[2]}를 앞에서 수식해야 하므로 형용사 ${it[0]}이 필요합니다.`,
        sourcePattern: "형용사 자리 확장"
      }));
    });

    adverbs.forEach((it, idx) => {
      businesses.forEach((company, cIdx) => addUnique({
        category: "word_form",
        difficulty: (idx + cIdx) % 3 === 0 ? "medium" : (idx + cIdx) % 3 === 1 ? "easy" : "hard",
        q: `${company} will _____ ${it[2]} ${it[3]} before the deadline.`,
        correct: it[0],
        wrongs: it[1],
        explanation: `동사 표현 ${it[2]}를 수식해야 하므로 부사 ${it[0]}이 정답입니다.`,
        sourcePattern: "부사 자리 확장"
      }));
    });

    const verbs = [
      ["approve", "the revised budget"], ["arrange", "the product demonstration"], ["audit", "the expense records"],
      ["clarify", "the warranty terms"], ["compile", "the survey results"], ["confirm", "the guest list"],
      ["deliver", "the replacement parts"], ["evaluate", "the training program"], ["finalize", "the merger agreement"],
      ["inspect", "the loading area"], ["notify", "all registered participants"], ["organize", "the safety workshop"],
      ["prepare", "the quarterly report"], ["process", "the membership applications"], ["renew", "the vendor contract"],
      ["repair", "the security gate"], ["review", "the insurance claim"], ["schedule", "the installation visit"],
      ["submit", "the grant proposal"], ["update", "the employee directory"], ["verify", "the shipping address"],
      ["install", "the accounting software"], ["replace", "the faulty scanner"], ["publish", "the annual report"],
      ["collect", "the completed forms"], ["distribute", "the visitor badges"], ["monitor", "the server room"],
      ["reimburse", "the travel expenses"], ["reserve", "the conference room"], ["train", "the new associates"]
    ];

    verbs.forEach((it, idx) => {
      addUnique({
        category: "verb_form",
        difficulty: idx % 3 === 0 ? "easy" : idx % 3 === 1 ? "medium" : "hard",
        q: `The coordinator must _____ ${it[1]} by Thursday.`,
        correct: it[0],
        wrongs: [pastOf(it[0]), ingOf(it[0]), `to ${it[0]}`],
        explanation: `조동사 must 뒤에는 동사원형이 오므로 ${it[0]}이 정답입니다.`,
        sourcePattern: "조동사 + 동사원형 확장"
      });
      addUnique({
        category: "verb_form",
        difficulty: idx % 3 === 0 ? "medium" : idx % 3 === 1 ? "hard" : "easy",
        q: `${it[1][0].toUpperCase()}${it[1].slice(1)} will be _____ after management approval.`,
        correct: pastOf(it[0]),
        wrongs: [it[0], ingOf(it[0]), `to ${it[0]}`],
        explanation: `will be 뒤에서 수동 의미를 만들려면 과거분사 ${pastOf(it[0])}가 필요합니다.`,
        sourcePattern: "수동태 확장"
      });
      addUnique({
        category: "verb_form",
        difficulty: idx % 3 === 0 ? "hard" : idx % 3 === 1 ? "easy" : "medium",
        q: `Before _____ ${it[1]}, employees should read the latest instructions.`,
        correct: ingOf(it[0]),
        wrongs: [it[0], pastOf(it[0]), `to ${it[0]}`],
        explanation: `전치사 Before 뒤에는 동명사 ${ingOf(it[0])}가 와야 합니다.`,
        sourcePattern: "전치사 + 동명사 확장"
      });
      addUnique({
        category: "verb_form",
        difficulty: idx % 3 === 0 ? "medium" : idx % 3 === 1 ? "easy" : "hard",
        q: `The company hired a specialist _____ ${it[1]}.`,
        correct: `to ${it[0]}`,
        wrongs: [it[0], pastOf(it[0]), ingOf(it[0])],
        explanation: `목적을 나타내는 자리이므로 to부정사 to ${it[0]}이 정답입니다.`,
        sourcePattern: "목적의 to부정사 확장"
      });
    });

    const prepPatterns = [
      ["by", ["until", "during", "at"], "The package should arrive _____ Friday afternoon.", "완료 시한은 by로 나타냅니다."],
      ["until", ["by", "during", "within"], "The help desk will remain open _____ 8:00 P.M.", "상태가 계속되는 종료 시점에는 until이 맞습니다."],
      ["within", ["during", "since", "from"], "All warranty claims must be filed _____ 30 days.", "정해진 기간 이내는 within입니다."],
      ["during", ["between", "onto", "through"], "The main entrance will be closed _____ the inspection.", "특정 기간 중에는 during이 필요합니다."],
      ["for", ["since", "until", "lately"], "The analyst has worked at the firm _____ seven years.", "기간 표현에는 for가 맞습니다."],
      ["since", ["for", "during", "within"], "The analyst has worked at the firm _____ 2019.", "시작 시점에는 since가 맞습니다."],
      ["with", ["to", "of", "under"], "All trainees should become familiar _____ emergency procedures.", "be familiar with는 고정 표현입니다."],
      ["for", ["to", "with", "beside"], "The manager is responsible _____ approving overtime requests.", "be responsible for는 고정 표현입니다."],
      ["to", ["of", "for", "under"], "Employees have access _____ the online training library.", "access to는 고정 표현입니다."],
      ["in", ["of", "about", "near"], "The board decided to invest _____ warehouse automation.", "invest in은 고정 표현입니다."],
      ["under", ["among", "opposite", "behind"], "The interns work _____ the supervision of Ms. Chen.", "under the supervision of는 지휘 아래라는 뜻입니다."],
      ["according to", ["despite", "prior to", "instead of"], "_____ the employee handbook, badges must be worn at all times.", "규정에 따르면은 according to입니다."],
      ["owing to", ["in total", "possibly", "everywhere"], "_____ heavy demand, the restaurant hired extra servers.", "명사구 앞에서 원인을 나타내는 owing to가 맞습니다."],
      ["aside from", ["even if", "because", "along"], "_____ minor delays, the installation was successful.", "무엇을 제외하고는이라는 의미에는 aside from이 맞습니다."],
      ["following", ["toward", "whenever", "usually"], "The store reopened _____ extensive renovations.", "사건 이후에는 following이 자연스럽습니다."],
      ["throughout", ["about", "beside", "except"], "Security staff will monitor the building _____ the night.", "기간 전체에는 throughout가 필요합니다."],
      ["between", ["among", "during", "onto"], "The shuttle runs _____ the airport and the hotel.", "두 대상 사이에는 between A and B를 씁니다."],
      ["among", ["between", "during", "onto"], "The award was divided _____ three research teams.", "셋 이상 사이에서는 among이 자연스럽습니다."],
      ["on", ["under", "against", "from"], "The tablets are currently _____ sale at all branches.", "on sale은 할인 판매 중이라는 표현입니다."],
      ["as", ["about", "after", "around"], "Ms. Patel joined the company _____ a regional director.", "직책이나 역할에는 as가 필요합니다."]
    ];
    prepPatterns.forEach((it, idx) => {
      businesses.forEach((company, cIdx) => addUnique({
        category: "preposition",
        difficulty: (idx + cIdx) % 3 === 0 ? "easy" : (idx + cIdx) % 3 === 1 ? "medium" : "hard",
        q: `${company}: ${it[2]}`,
        correct: it[0],
        wrongs: it[1],
        explanation: it[3],
        sourcePattern: "전치사/고정 표현 확장"
      }));
    });

    const connectorPatterns = [
      ["Although", ["Because", "Until", "Therefore"], "_____ sales increased, profits remained flat.", "양보 관계이므로 Although가 필요합니다."],
      ["Because", ["Although", "Despite", "However"], "_____ the shipment arrived late, the team adjusted the schedule.", "원인절에는 Because가 맞습니다."],
      ["While", ["Either", "Still", "Also"], "_____ the software is being updated, some services may be unavailable.", "동시 상황에는 While이 자연스럽습니다."],
      ["Before", ["Prior to", "Despite", "According to"], "_____ you submit the application, review all required fields.", "뒤에 주어+동사가 있으므로 접속사 Before가 맞습니다."],
      ["Prior to", ["Before", "Although", "If"], "_____ submitting the application, review all required fields.", "뒤에 동명사구가 있으므로 Prior to가 필요합니다."],
      ["Once", ["Arrived", "To arrive", "Is arriving"], "_____ the client approves the design, production can begin.", "조건/시간절에는 Once가 맞습니다."],
      ["Unless", ["Because of", "During", "Despite"], "The order will not be released _____ payment is confirmed.", "조건을 나타내는 Unless가 필요합니다."],
      ["as long as", ["or else", "as well as", "in between"], "The company will keep the service open _____ customers need it.", "조건을 나타내는 as long as가 맞습니다."],
      ["so that", ["instead of", "resulting from", "as"], "The deadline was extended _____ teams could review the data.", "목적절에는 so that이 필요합니다."],
      ["in case", ["whereas", "despite", "if not"], "Leave your phone number _____ the courier needs directions.", "만일을 대비하는 의미에는 in case가 맞습니다."]
    ];
    connectorPatterns.forEach((it, idx) => {
      departments.forEach((dept, dIdx) => addUnique({
        category: "connector",
        difficulty: (idx + dIdx) % 3 === 0 ? "easy" : (idx + dIdx) % 3 === 1 ? "medium" : "hard",
        q: `${dept}: ${it[2]}`,
        correct: it[0],
        wrongs: it[1],
        explanation: it[3],
        sourcePattern: "접속사/논리 확장"
      }));
    });

    const pronounPatterns = [
      ["their", ["they", "theirs", "themselves"], "Employees must update _____ contact information by Friday.", "명사 contact information 앞에는 소유격 their가 필요합니다."],
      ["its", ["it", "itself", "it own"], "The company revised _____ refund policy last month.", "명사 refund policy 앞에는 소유격 its가 필요합니다."],
      ["her", ["she", "hers", "herself"], "Ms. Allen submitted _____ travel receipts online.", "명사 travel receipts 앞에는 소유격 her가 맞습니다."],
      ["himself", ["he", "his", "him"], "Mr. Novak prepared the presentation by _____.", "by oneself 구조이므로 himself가 필요합니다."],
      ["themselves", ["their", "them", "theirs"], "Trainees should familiarize _____ with the equipment.", "familiarize oneself with 구조입니다."],
      ["Each", ["All", "Some", "Most"], "_____ applicant must submit two references.", "단수 applicant 앞에는 Each가 맞습니다."],
      ["All", ["Each", "Any", "Every"], "_____ visitors must sign in at reception.", "복수 visitors 전체에는 All이 맞습니다."],
      ["Anyone", ["Each", "Those", "Everything"], "_____ who needs parking should contact security.", "사람을 가리키며 who절을 받으므로 Anyone이 맞습니다."],
      ["Those", ["Each", "Anyone", "Everything"], "_____ who registered early will receive a discount.", "복수 사람들을 가리키는 Those who 구조입니다."],
      ["both", ["either", "neither", "somewhat"], "The director reviewed _____ the budget and the schedule.", "both A and B 구조입니다."]
    ];
    pronounPatterns.forEach((it, idx) => {
      businesses.forEach((company, cIdx) => addUnique({
        category: "pronoun",
        difficulty: (idx + cIdx) % 3 === 0 ? "easy" : (idx + cIdx) % 3 === 1 ? "medium" : "hard",
        q: `${company}: ${it[2]}`,
        correct: it[0],
        wrongs: it[1],
        explanation: it[3],
        sourcePattern: "대명사/한정사 확장"
      }));
    });

    const comparisonPatterns = [
      ["higher", ["high", "highly", "highest"], "Online sales were _____ this quarter than last quarter.", "than이 있으므로 비교급 higher가 필요합니다."],
      ["wider", ["wide", "widest", "widely"], "The new model has a _____ screen than the previous version.", "than이 있으므로 비교급 wider가 필요합니다."],
      ["most efficient", ["efficient", "more efficient", "efficiently"], "This is the _____ process available to the warehouse team.", "the와 범위 의미가 있으므로 최상급 most efficient가 맞습니다."],
      ["more reliable", ["reliable", "most reliable", "reliably"], "The upgraded server is _____ than the old system.", "than이 있으므로 비교급 more reliable이 필요합니다."],
      ["as quickly as", ["so quickly than", "more quick as", "quickest than"], "Please respond _____ possible.", "as quickly as possible은 고정 표현입니다."],
      ["equally", ["equal", "equality", "equalize"], "Both candidates are _____ qualified for the position.", "형용사 qualified를 수식하므로 부사 equally가 맞습니다."],
      ["less expensive", ["least expensive", "expensively", "expense"], "The online workshop is _____ than the seminar.", "than과 함께 비교급 less expensive가 맞습니다."],
      ["largest", ["large", "largely", "larger"], "The company opened its _____ branch in Busan.", "소유 범위 안의 최상급이므로 largest가 맞습니다."]
    ];
    comparisonPatterns.forEach((it, idx) => {
      businesses.forEach((company, cIdx) => addUnique({
        category: "comparison",
        difficulty: (idx + cIdx) % 3 === 0 ? "easy" : (idx + cIdx) % 3 === 1 ? "medium" : "hard",
        q: `${company}: ${it[2]}`,
        correct: it[0],
        wrongs: it[1],
        explanation: it[3],
        sourcePattern: "비교 표현 확장"
      }));
    });

    const collocations = [
      ["place", ["make", "do", "set"], "a special order"], ["renew", ["repeat", "return", "remind"], "the service contract"],
      ["submit", ["supply", "suggest", "suspend"], "the reimbursement form"], ["attend", ["assist", "arrive", "access"], "the safety seminar"],
      ["review", ["revise", "reveal", "remove"], "the vendor agreement"], ["process", ["progress", "produce", "perform"], "membership applications"],
      ["schedule", ["settle", "store", "state"], "a maintenance visit"], ["conduct", ["contain", "connect", "consist"], "a customer survey"],
      ["launch", ["lift", "locate", "label"], "a promotional campaign"], ["reduce", ["refer", "release", "remain"], "operating costs"],
      ["increase", ["include", "indicate", "install"], "brand awareness"], ["attract", ["adopt", "attach", "adjust"], "new clients"],
      ["resolve", ["reserve", "restore", "result"], "technical issues"], ["maintain", ["manage", "mention", "measure"], "accurate records"],
      ["provide", ["prevent", "prove", "produce"], "detailed instructions"], ["offer", ["operate", "order", "own"], "free consultations"],
      ["meet", ["match", "move", "mark"], "the project deadline"], ["exceed", ["expand", "expect", "explain"], "monthly sales targets"],
      ["monitor", ["modify", "motivate", "maintain"], "server performance"], ["assign", ["assist", "assume", "assure"], "daily tasks"]
    ];
    collocations.forEach((it, idx) => {
      departments.forEach((dept, dIdx) => addUnique({
        category: "collocation",
        difficulty: (idx + dIdx) % 3 === 0 ? "easy" : (idx + dIdx) % 3 === 1 ? "medium" : "hard",
        q: `The ${dept} will _____ ${it[2]} before the end of the week.`,
        correct: it[0],
        wrongs: it[1],
        explanation: `${it[2]}와 자연스럽게 결합하는 동사는 ${it[0]}입니다.`,
        sourcePattern: "비즈니스 콜로케이션 확장"
      }));
    });

    if (bank.length < 1000) {
      throw new Error(`Question generation produced only ${bank.length} items.`);
    }
  }

  padToThousandQuestions();

  function correctText(q) {
    return q.choices.find(choice => choice.correct)?.text || "";
  }

  function filledSentence(q) {
    return q.q.replace(/_{3,}|-{3,}|•/g, correctText(q));
  }

  const phraseKo = {
    "accounting department": "회계 부서",
    "marketing team": "마케팅팀",
    "research division": "연구 부서",
    "customer service desk": "고객 서비스 데스크",
    "regional office": "지역 사무소",
    "warehouse staff": "창고 직원들",
    "training center": "교육 센터",
    "legal department": "법무 부서",
    "product design team": "제품 디자인팀",
    "sales department": "영업 부서",
    "maintenance crew": "정비팀",
    "human resources office": "인사 부서",
    "warehouse team": "창고팀",
    "the safety seminar": "안전 교육",
    "the vendor agreement": "공급업체 계약서",
    "membership applications": "회원 신청서",
    "a maintenance visit": "정비 방문 일정",
    "a customer survey": "고객 설문조사",
    "a promotional campaign": "홍보 캠페인",
    "operating costs": "운영 비용",
    "brand awareness": "브랜드 인지도",
    "new clients": "신규 고객",
    "technical issues": "기술 문제",
    "accurate records": "정확한 기록",
    "detailed instructions": "자세한 안내",
    "free consultations": "무료 상담",
    "the project deadline": "프로젝트 마감일",
    "monthly sales targets": "월간 매출 목표",
    "server performance": "서버 성능",
    "daily tasks": "일일 업무",
    "the revised budget": "수정 예산안",
    "the product demonstration": "제품 시연",
    "the expense records": "경비 기록",
    "the warranty terms": "보증 조건",
    "the survey results": "설문 결과",
    "the guest list": "손님 명단",
    "the replacement parts": "교체 부품",
    "the training program": "교육 프로그램",
    "the merger agreement": "합병 계약서",
    "the loading area": "상하차 구역",
    "all registered participants": "모든 등록 참가자",
    "the safety workshop": "안전 워크숍",
    "the quarterly report": "분기 보고서",
    "the vendor contract": "공급업체 계약",
    "the security gate": "보안 게이트",
    "the insurance claim": "보험 청구서",
    "the installation visit": "설치 방문 일정",
    "the grant proposal": "보조금 제안서",
    "the employee directory": "직원 명부",
    "the shipping address": "배송 주소",
    "the accounting software": "회계 소프트웨어",
    "the faulty scanner": "고장 난 스캐너",
    "the annual report": "연례 보고서",
    "the completed forms": "작성 완료된 양식",
    "the visitor badges": "방문자 배지",
    "the server room": "서버실",
    "the travel expenses": "출장 경비",
    "the conference room": "회의실",
    "the new associates": "신입 직원들",
    "the application": "신청서",
    "all required fields": "모든 필수 항목",
    "payment": "결제",
    "the budget and the schedule": "예산과 일정",
    "a special order": "특별 주문",
    "the service contract": "서비스 계약",
    "the reimbursement form": "환급 신청서",
    "the company's financial assets": "그 회사의 금융 자산",
    "the night": "밤새",
    "shipping charges": "배송료",
    "online orders": "온라인 주문",
    "the old system": "기존 시스템",
    "the previous version": "이전 버전",
    "the seminar": "세미나",
    "the online workshop": "온라인 워크숍",
    "the upgraded server": "업그레이드된 서버",
    "the new model": "새 모델",
    "the signed contract": "서명된 계약서",
    "the legal department": "법무 부서",
    "the courier": "배송 기사",
    "phone number": "전화번호",
    "directions": "길 안내",
    "contact information": "연락처 정보",
    "the presentation": "발표 자료",
    "the application": "신청서",
    "the building": "건물",
    "security staff": "보안 직원들",
    "all required fields": "모든 필수 항목",
    "for all contractors": "모든 계약업체에 대한",
    "mandatory": "필수적인",
    "requirement": "요건",
    "most efficient": "가장 효율적인",
    "more efficient": "더 효율적인",
    "efficient": "효율적인",
    "efficiently": "효율적으로",
    "accurately": "정확하게",
    "briefly": "간단히",
    "closely": "면밀히",
    "frequently": "자주",
    "independently": "독립적으로",
    "promptly": "신속하게",
    "securely": "안전하게",
    "temporarily": "일시적으로",
    "thoroughly": "철저히",
    "voluntarily": "자발적으로",
    "electronically": "전자 방식으로",
    "regularly": "정기적으로",
    "publicly": "공개적으로",
    "privately": "비공개로",
    "higher": "더 높은",
    "wider": "더 넓은",
    "more reliable": "더 신뢰할 수 있는",
    "less expensive": "더 저렴한",
    "largest": "가장 큰",
    "best": "가장 좋은",
    "better": "더 좋은",
    "most reliable": "가장 신뢰할 수 있는",
    "least expensive": "가장 저렴한",
    "most successful": "가장 성공적인",
    "as quickly as": "가능한 한 빨리",
    "equally": "동등하게"
  };

  const verbKo = {
    approve: "승인하다",
    arrange: "준비하다",
    audit: "감사하다",
    clarify: "명확히 하다",
    compile: "취합하다",
    confirm: "확인하다",
    deliver: "배송하다",
    evaluate: "평가하다",
    finalize: "마무리하다",
    inspect: "점검하다",
    notify: "알리다",
    organize: "준비하다",
    prepare: "준비하다",
    process: "처리하다",
    renew: "갱신하다",
    repair: "수리하다",
    review: "검토하다",
    schedule: "일정을 잡다",
    submit: "제출하다",
    update: "갱신하다",
    verify: "확인하다",
    install: "설치하다",
    replace: "교체하다",
    publish: "발행하다",
    collect: "수령하다",
    distribute: "배포하다",
    monitor: "점검하다",
    reimburse: "환급하다",
    reserve: "예약하다",
    train: "교육하다",
    attend: "참석하다",
    conduct: "실시하다",
    launch: "시작하다",
    reduce: "줄이다",
    increase: "늘리다",
    attract: "끌어들이다",
    resolve: "해결하다",
    maintain: "유지하다",
    provide: "제공하다",
    offer: "제공하다",
    meet: "맞추다",
    exceed: "초과하다",
    assign: "배정하다"
    ,calculate: "계산하다",
    explain: "설명하다",
    respond: "답변하다",
    store: "보관하다",
    close: "폐쇄하다",
    discuss: "논의하다",
    announce: "발표하다"
  };

  function koPhrase(text) {
    const raw = String(text || "").trim();
    const key = raw.toLowerCase().replace(/[.]/g, "");
    if (phraseKo[key]) return phraseKo[key];
    return raw
      .replace(/\bthe company\b/gi, "그 회사")
      .replace(/\bthe coordinator\b/gi, "코디네이터")
      .replace(/\bthe supervisor\b/gi, "관리자")
      .replace(/\bemployees\b/gi, "직원들")
      .replace(/\bapplicants\b/gi, "지원자들")
      .replace(/\bvisitors\b/gi, "방문객들")
      .replace(/\bcustomers\b/gi, "고객들")
      .replace(/\bthe manager\b/gi, "관리자")
      .replace(/\bthe team\b/gi, "그 팀")
      .replace(/\bthe board\b/gi, "이사회")
      .replace(/\bthe committee\b/gi, "위원회")
      .replace(/\bthe order\b/gi, "주문")
      .replace(/\bthe package\b/gi, "소포")
      .replace(/\bthe report\b/gi, "보고서")
      .replace(/\bthe form\b/gi, "양식")
      .replace(/\bthe policy\b/gi, "정책")
      .replace(/\bthe contract\b/gi, "계약서")
      .replace(/\bsales\b/gi, "매출")
      .replace(/\bprofits\b/gi, "수익")
      .replace(/\bthis year\b/gi, "올해")
      .replace(/\blast year\b/gi, "작년")
      .replace(/\bthis quarter\b/gi, "이번 분기")
      .replace(/\blast quarter\b/gi, "지난 분기")
      .replace(/\bbefore the deadline\b/gi, "마감일 전에")
      .replace(/\bbefore the end of the week\b/gi, "이번 주가 끝나기 전에")
      .replace(/\bafter management approval\b/gi, "경영진 승인 후")
      .replace(/\bafter the manager gives approval\b/gi, "관리자가 승인한 후")
      .replace(/\bby Thursday\b/gi, "목요일까지")
      .replace(/\bbefore Friday\b/gi, "금요일 전에");
  }

  function companyPrefix(name, translated) {
    return `${name}: ${translated}`;
  }

  function koVerb(text) {
    const key = String(text || "").trim().split(/\s+/)[0].toLowerCase();
    return verbKo[key] || `${text}하다`;
  }

  function politeAction(text) {
    const verb = koVerb(text);
    if (verb.endsWith("하다")) return `${verb.slice(0, -2)}합니다`;
    if (verb.endsWith("다")) return `${verb.slice(0, -1)}습니다`;
    return `${verb}합니다`;
  }

  function translateQuestion(q) {
    const sentence = filledSentence(q);
    const prefixed = sentence.match(/^([^:]+):\s*(.+)$/);
    if (prefixed) {
      return companyPrefix(prefixed[1], translateQuestion({ ...q, q: prefixed[2].replace(correctText(q), "_____") }));
    }

    let m = sentence.match(/^This is the (.+) process available to the warehouse team\.$/);
    if (m) return `이것은 창고팀이 이용할 수 있는 ${koPhrase(m[1])} 절차입니다.`;

    m = sentence.match(/^Prior to submitting the application, review all required fields\.$/);
    if (m) return "신청서를 제출하기 전에 모든 필수 항목을 검토하세요.";

    m = sentence.match(/^Before you submit the application, review all required fields\.$/);
    if (m) return "신청서를 제출하기 전에 모든 필수 항목을 검토하세요.";

    m = sentence.match(/^Security staff will monitor the building throughout the night\.$/);
    if (m) return "보안 직원들이 밤새 건물을 감시할 것입니다.";

    m = sentence.match(/^Mr\. Novak prepared the presentation by himself\.$/);
    if (m) return "Novak 씨는 발표 자료를 직접 준비했습니다.";

    m = sentence.match(/^Leave your phone number in case the courier needs directions\.$/);
    if (m) return "배송 기사에게 길 안내가 필요할 경우에 대비해 전화번호를 남겨 두세요.";

    m = sentence.match(/^Please send the signed contract directly to the legal department\.$/);
    if (m) return "서명된 계약서를 법무 부서로 직접 보내 주세요.";

    m = sentence.match(/^The online workshop is less expensive than the seminar\.$/);
    if (m) return "온라인 워크숍은 세미나보다 더 저렴합니다.";

    m = sentence.match(/^The upgraded server is more reliable than the old system\.$/);
    if (m) return "업그레이드된 서버는 기존 시스템보다 더 신뢰할 수 있습니다.";

    m = sentence.match(/^The new model has a wider screen than the previous version\.$/);
    if (m) return "새 모델은 이전 버전보다 더 넓은 화면을 갖추고 있습니다.";

    m = sentence.match(/^Online sales were higher this quarter than last quarter\.$/);
    if (m) return "온라인 매출은 지난 분기보다 이번 분기에 더 높았습니다.";

    m = sentence.match(/^Please respond as quickly as possible\.$/);
    if (m) return "가능한 한 빨리 답변해 주세요.";

    m = sentence.match(/^Both candidates are equally qualified for the position\.$/);
    if (m) return "두 후보 모두 그 직책에 동등하게 자격이 있습니다.";

    m = sentence.match(/^The company opened its largest branch in Busan\.$/);
    if (m) return "그 회사는 부산에 가장 큰 지점을 열었습니다.";

    m = sentence.match(/^Employees must update their contact information by Friday\.$/);
    if (m) return "직원들은 금요일까지 자신의 연락처 정보를 갱신해야 합니다.";

    m = sentence.match(/^The company revised its refund policy last month\.$/);
    if (m) return "그 회사는 지난달 자체 환불 정책을 개정했습니다.";

    m = sentence.match(/^Ms\. Allen submitted her travel receipts online\.$/);
    if (m) return "Allen 씨는 자신의 출장 영수증을 온라인으로 제출했습니다.";

    m = sentence.match(/^Trainees should familiarize themselves with the equipment\.$/);
    if (m) return "교육생들은 장비에 익숙해져야 합니다.";

    m = sentence.match(/^Each applicant must submit two references\.$/);
    if (m) return "각 지원자는 추천인 두 명을 제출해야 합니다.";

    m = sentence.match(/^All visitors must sign in at reception\.$/);
    if (m) return "모든 방문객은 접수처에서 서명해야 합니다.";

    m = sentence.match(/^Anyone who needs parking should contact security\.$/);
    if (m) return "주차가 필요한 사람은 누구든 보안 담당자에게 연락해야 합니다.";

    m = sentence.match(/^The director reviewed both the budget and the schedule\.$/);
    if (m) return "이사는 예산과 일정을 둘 다 검토했습니다.";

    m = sentence.match(/^(.+) requested (.+) (assessment|authorization|clarification|confirmation|documentation|expansion|implementation|improvement|notification|preparation|qualification|replacement|requirement|selection|supervision|verification|coordination|distribution|participation|renovation) (.+)\.$/);
    if (m && m[3] === "requirement" && m[2] === "mandatory" && m[4] === "for all contractors") {
      return `${koPhrase(m[1])}은/는 모든 계약업체에 대한 필수 요건을 요청했습니다.`;
    }
    if (m) return `${koPhrase(m[1])}은/는 ${koPhrase(m[4])}에 관한 ${m[2]} ${m[3]}을/를 요청했습니다.`;

    m = sentence.match(/^The (.+) prepared (.+) (.+) (for|under|across|in|from) (.+)\.$/);
    if (m) return `${koPhrase(m[1])}은/는 ${koPhrase(m[5])}에 대한 ${m[2]} ${koPhrase(m[3])}을/를 준비했습니다.`;

    m = sentence.match(/^(.+) will (.+ly) (calculate|explain|monitor|process|update|review|respond to|store|close|inspect|attend|submit|maintain|announce|discuss) (.+) before the deadline\.$/);
    if (m) return `${koPhrase(m[1])}은/는 마감일 전에 ${koPhrase(m[4])}을/를 ${koPhrase(m[2])} ${politeAction(m[3])}.`;

    m = sentence.match(/^The (coordinator|supervisor) must ([a-z]+) (.+) (by Thursday|before Friday)\.$/);
    if (m) return `${koPhrase(`the ${m[1]}`)}는 ${koPhrase(m[4])} ${koPhrase(m[3])}을/를 ${koVerb(m[2])}.`;

    m = sentence.match(/^(.+) will be ([a-z]+) after (management approval|the manager gives approval)\.$/);
    if (m) return `${koPhrase(m[1])}은/는 ${koPhrase(`after ${m[3]}`)} ${m[2]}될 것입니다.`;

    m = sentence.match(/^Before ([a-z]+ing) (.+), (employees should read|please check) the latest instructions\.$/);
    if (m) return `${koPhrase(m[2])}을/를 하기 전에 최신 지침을 읽거나 확인해야 합니다.`;

    m = sentence.match(/^The company hired a (consultant|specialist) to ([a-z]+) (.+)\.$/);
    if (m) return `그 회사는 ${koPhrase(m[3])}을/를 ${koVerb(m[2])} 위해 ${m[1] === "consultant" ? "컨설턴트" : "전문가"}를 고용했습니다.`;

    m = sentence.match(/^The (.+) will attend (.+) before the end of the week\.$/);
    if (m) return `${topicWithParticle(koPhrase(m[1]))} 이번 주가 끝나기 전에 ${koPhrase(m[2])}에 참석할 것입니다.`;

    m = sentence.match(/^The (.+) will ([a-z]+) (.+) before the end of the week\.$/);
    if (m) return `${topicWithParticle(koPhrase(m[1]))} 이번 주가 끝나기 전에 ${objectWithParticle(koPhrase(m[3]))} ${politeAction(m[2])}.`;

    return `${koPhrase(sentence)}`;
  }

  function conceptFor(q) {
    const pattern = q.sourcePattern || "";
    const category = q.category;
    if (pattern.includes("명사 자리")) {
      return "관사, 형용사, 소유격 뒤에서 문장의 주어·목적어·보어 역할을 하는 자리에는 명사가 옵니다. 동사형이나 부사형은 그 자리를 채울 수 없습니다.";
    }
    if (pattern.includes("형용사 자리")) {
      return "명사 앞에서 명사를 꾸미거나 be/remain/become 뒤 보어가 되는 자리에는 형용사가 필요합니다. 부사는 명사를 직접 수식하지 못합니다.";
    }
    if (pattern.includes("부사 자리")) {
      return "동사, 형용사, 분사, 문장 전체를 꾸미는 자리에는 부사가 옵니다. 명사나 형용사 형태를 고르면 문장 성분이 맞지 않습니다.";
    }
    if (pattern.includes("조동사")) {
      return "must, should, can 같은 조동사 뒤에는 시제나 수에 따라 변하지 않는 동사원형이 와야 합니다.";
    }
    if (pattern.includes("수동태")) {
      return "주어가 행동을 직접 하는 것이 아니라 행동의 대상이 될 때는 be동사 + 과거분사 구조를 씁니다.";
    }
    if (pattern.includes("현재완료")) {
      return "has/have 뒤에서 완료 의미를 만들 때는 과거형이 아니라 과거분사가 필요합니다.";
    }
    if (pattern.includes("to부정사")) {
      return "목적을 나타내는 자리에서는 to + 동사원형을 사용해 '~하기 위해'라는 의미를 만듭니다.";
    }
    if (pattern.includes("동명사")) {
      return "전치사 뒤에는 동사원형이나 to부정사가 아니라 명사 역할을 하는 동명사(-ing)가 옵니다.";
    }
    if (category === "preposition") {
      return "전치사는 뒤의 명사구와 앞 문장을 연결해 시간, 장소, 방향, 원인, 대상 같은 관계를 만듭니다. 토익 Part 5에서는 고정 표현을 함께 외우는 것이 중요합니다.";
    }
    if (category === "connector") {
      return "접속사 문제는 빈칸 뒤 구조가 절인지 명사구인지, 앞뒤 의미가 원인·조건·양보·대조·목적인지 확인해야 합니다.";
    }
    if (category === "pronoun") {
      return "대명사와 한정사는 뒤 명사의 수, 셀 수 있는지 여부, 소유 관계, 주격·목적격·재귀 용법을 함께 확인해야 합니다.";
    }
    if (category === "comparison") {
      return "than이 있으면 비교급, the나 of/in 범위 표현이 있으면 최상급, as ... as 구조는 원급 비교를 의심해야 합니다.";
    }
    if (category === "collocation") {
      return "콜로케이션 문제는 문법 형태보다 영어에서 실제로 함께 쓰이는 동사와 명사의 결합을 묻습니다.";
    }
    return "빈칸 앞뒤의 문장 성분과 의미 관계를 함께 확인해야 정답을 고를 수 있습니다.";
  }

  function optionForm(text) {
    const value = String(text || "").trim();
    const lower = value.toLowerCase();
    const fixedForms = {
      "accurate": "형용사",
      "accuse": "동사",
      "access": "명사/동사",
      "also": "부사",
      "alternatively": "담화부사",
      "and": "등위접속사",
      "as": "접속사/전치사",
      "as if": "양태 접속사",
      "as long as": "조건 접속사",
      "as soon as": "시간 접속사",
      "as well as": "병렬 전치사구/접속 표현",
      "because of": "원인 전치사구",
      "benefit": "명사/동사",
      "benefits": "복수명사/3인칭 단수동사",
      "both": "상관접속 한정사",
      "brief": "형용사/동사",
      "but": "등위접속사",
      "close": "형용사/동사",
      "depend": "동사",
      "direct": "형용사/동사",
      "either": "상관접속 한정사/부사",
      "electrify": "동사",
      "electronic": "형용사",
      "electronics": "명사",
      "even if": "양보 조건 접속사",
      "even though": "양보 접속사",
      "effort": "명사",
      "enthusiasm": "명사",
      "enthusiast": "명사",
      "however": "접속부사",
      "if not": "축약 조건 표현",
      "in between": "전치사구/부사구",
      "in case": "대비 목적 접속사",
      "in order that": "목적 접속사",
      "instead of": "대체 전치사구",
      "lately": "부사",
      "neither": "상관접속 한정사",
      "not only": "상관접속 부사",
      "not until": "시간 강조 접속 표현",
      "now that": "이유 접속사",
      "or": "등위접속사",
      "or else": "조건/경고 접속 표현",
      "private": "형용사",
      "privatize": "동사",
      "prompt": "형용사/동사",
      "prompts": "복수명사/3인칭 단수동사",
      "provided that": "조건 접속사",
      "rather than": "대조/선택 접속 표현",
      "regular": "형용사",
      "regularize": "동사",
      "resulting from": "분사구/원인 전치사적 표현",
      "safe": "형용사",
      "safety": "명사",
      "save": "동사",
      "so": "결과 등위접속사",
      "so that": "목적 접속사",
      "still": "부사",
      "then": "부사",
      "therefore": "접속부사",
      "though": "양보 접속사",
      "what": "복합관계대명사",
      "whatever": "복합관계대명사",
      "when": "시간 접속사",
      "whenever": "복합관계부사",
      "wherever": "복합관계부사",
      "whichever": "복합관계대명사",
      "whoever": "복합관계대명사",
      "yet": "접속부사/등위접속사"
    };
    if (fixedForms[lower]) return fixedForms[lower];
    if (/^to\s+[a-z]+$/.test(lower)) return "to부정사";
    if (/ing$/.test(lower)) return "동명사/현재분사";
    if (/ly$/.test(lower)) return "부사";
    if (/(tion|sion|ment|ness|ity|cy|ship|ance|ence|al|ure|or|er|ist)$/.test(lower)) return "명사";
    if (/(able|ible|ive|ous|ful|less|ic|al|ent|ant|ary|ory|ed)$/.test(lower)) return "형용사/분사";
    if (/^(he|she|they|we|you|it|him|her|them|us|his|their|its|your|our|hers|theirs|himself|herself|itself|themselves)$/.test(lower)) return "대명사";
    if (/^(because|although|while|unless|once|if|when|before|after|since|whereas|that|which|who|whoever|whether)$/.test(lower)) return "접속사";
    if (/^(by|until|during|within|for|since|with|to|in|under|on|as|throughout|following|according to|owing to|prior to|in addition to|in contrast to|despite|because of)$/.test(lower)) return "전치사/전치사구";
    return "동사원형/어휘";
  }

  function sanitizeChoices(q) {
    const correct = correctText(q);
    return q.choices.map(choice => {
      if (!choice.correct && correct === "Prior to" && choice.text === "Before" && /submitting/.test(q.q)) {
        return { ...choice, text: "Because" };
      }
      return choice;
    });
  }

  function connectiveProfile(text) {
    const key = String(text || "").trim().toLowerCase();
    const profiles = {
      "also": {
        type: "부사",
        takes: "완성된 절 안의 동사·형용사·문장 전체를 수식하는 자리",
        meaning: "또한",
        note: "also는 절과 절을 종속 관계로 묶지 못합니다. 빈칸 뒤에 주어+동사가 이어지더라도 접속사처럼 절을 이끌 수 없습니다."
      },
      "according to": {
        type: "출처 전치사구",
        takes: "명사구",
        meaning: "~에 따르면",
        note: "according to 뒤에는 규정·보고서·사람 같은 출처 명사구가 오며, 절이나 동사원형을 직접 이끌지 않습니다."
      },
      "along": {
        type: "방향/동행 전치사",
        takes: "명사구",
        meaning: "~을 따라",
        note: "along은 위치나 이동 방향을 나타내는 전치사라서 조건·이유·목적절을 만들 수 없습니다."
      },
      "among": {
        type: "범위 전치사",
        takes: "복수 명사구",
        meaning: "~사이에/~중에서",
        note: "among은 여러 대상 사이의 분포나 포함 관계를 나타내며 양보 의미를 만들지 않습니다."
      },
      "and": {
        type: "등위접속사",
        takes: "문법적으로 같은 성격의 단어·구·절",
        meaning: "그리고",
        note: "and는 병렬을 만들지만 조건·이유·양보 같은 종속 의미를 만들지 않습니다."
      },
      "another": {
        type: "한정사/대명사",
        takes: "단수 명사 또는 대명사 자리",
        meaning: "또 다른 하나",
        note: "another는 관계절을 이끄는 말이 아니라 명사 앞에서 '또 다른'을 뜻하는 한정사입니다."
      },
      "as": {
        type: "접속사/전치사",
        takes: "절 또는 명사구",
        meaning: "~할 때/~이므로/~로서",
        note: "as는 시간·이유·역할 의미가 중심이고, 목적을 나타내는 so that처럼 '할 수 있도록'의 의미를 직접 만들지는 않습니다."
      },
      "as if": {
        type: "양태 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "마치 ~인 것처럼",
        note: "as if 뒤에는 실제가 아니라 가정·비유의 절이 이어집니다."
      },
      "as long as": {
        type: "조건 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "~하는 한",
        note: "as long as는 어떤 상태가 유지되는 조건을 제시합니다."
      },
      "as soon as": {
        type: "시간 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "~하자마자",
        note: "as soon as는 한 사건 직후 다른 사건이 일어나는 시간 관계를 만듭니다."
      },
      "as well as": {
        type: "병렬 전치사구/접속 표현",
        takes: "명사구·동명사구 등 앞 항목과 같은 구조",
        meaning: "~뿐만 아니라",
        note: "as well as는 A as well as B처럼 같은 구조를 병렬로 더할 때 씁니다."
      },
      "aside from": {
        type: "제외/추가 전치사구",
        takes: "명사구 또는 동명사구",
        meaning: "~을 제외하고/~뿐 아니라",
        note: "aside from 뒤에는 명사 성격의 표현이 오며, 목적절이나 이유절을 직접 만들지 않습니다."
      },
      "arrived": {
        type: "과거동사/과거분사",
        takes: "독립된 절의 동사 자리 또는 분사 자리",
        meaning: "도착했다/도착한",
        note: "arrived는 접속사가 아니므로 뒤의 절을 시간·조건절로 이끌 수 없습니다."
      },
      "because of": {
        type: "원인 전치사구",
        takes: "명사구 또는 동명사구",
        meaning: "~때문에",
        note: "because of 뒤에는 the delay, receiving the request처럼 명사 성격의 표현이 와야 합니다."
      },
      "behind": {
        type: "위치 전치사",
        takes: "명사구",
        meaning: "~뒤에",
        note: "behind는 위치 관계를 나타내므로 양보나 원인 관계를 만들지 않습니다."
      },
      "but": {
        type: "등위접속사",
        takes: "문법적으로 같은 성격의 단어·구·절",
        meaning: "그러나",
        note: "but은 앞뒤를 대조하지만 조건절이나 이유절을 만들지는 않습니다."
      },
      "due to": {
        type: "원인 전치사구",
        takes: "명사구 또는 동명사구",
        meaning: "~때문에",
        note: "due to 뒤에는 원인이 되는 명사구가 오며, 주어+동사가 있는 절을 바로 받을 수 없습니다."
      },
      "either": {
        type: "상관접속 한정사/부사",
        takes: "either A or B 구조의 첫 항목",
        meaning: "둘 중 하나",
        note: "either는 단독으로 절을 이끄는 접속사가 아니라 보통 either A or B 구조를 만듭니다."
      },
      "ever": {
        type: "부사",
        takes: "완성된 절 안의 동사·형용사 수식 자리",
        meaning: "언젠가/도대체",
        note: "ever는 접속사가 아니므로 뒤의 주어+동사를 양보절로 이끌 수 없습니다."
      },
      "even if": {
        type: "양보 조건 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "설령 ~하더라도",
        note: "even if는 가정적 양보 조건을 나타냅니다."
      },
      "even though": {
        type: "양보 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "~임에도 불구하고",
        note: "even though는 실제 사실을 인정하면서 주절과 반대되는 결과를 연결합니다."
      },
      "however": {
        type: "접속부사",
        takes: "완성된 절과 쉼표 또는 세미콜론으로 연결되는 자리",
        meaning: "그러나",
        note: "however는 종속접속사처럼 문장 맨 앞에서 바로 절을 지배하지 않고, 보통 구두점과 함께 문장 간 전환을 표시합니다."
      },
      "if": {
        type: "조건 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "만약 ~라면",
        note: "if는 주절이 성립하는 조건을 제시합니다."
      },
      "if only": {
        type: "강조 조건 접속 표현",
        takes: "주어+동사가 있는 절",
        meaning: "~하기만 하면",
        note: "if only는 조건을 강하게 제한하거나 바람을 나타낼 때 쓰입니다."
      },
      "if not": {
        type: "축약 조건 표현",
        takes: "앞 문맥을 받은 생략 구조",
        meaning: "그렇지 않다면",
        note: "if not은 독립적인 절 앞에 새 접속사처럼 붙이기보다 앞 내용을 받아 줄이는 표현입니다."
      },
      "in spite of": {
        type: "양보 전치사구",
        takes: "명사구 또는 동명사구",
        meaning: "~에도 불구하고",
        note: "in spite of는 despite처럼 전치사구라서 뒤에 주어+동사가 있는 절을 바로 받을 수 없습니다."
      },
      "into": {
        type: "방향 전치사",
        takes: "명사구",
        meaning: "~안으로",
        note: "into는 이동 방향이나 변화 대상을 나타내며 시간·조건 접속사를 대신할 수 없습니다."
      },
      "is arriving": {
        type: "현재진행 동사구",
        takes: "독립된 절의 동사 자리",
        meaning: "도착하고 있다/도착할 예정이다",
        note: "is arriving은 동사구이지 접속사가 아니므로 뒤 절을 시간·조건절로 이끌 수 없습니다."
      },
      "in addition to": {
        type: "추가 전치사구",
        takes: "명사구 또는 동명사구",
        meaning: "~에 더하여",
        note: "in addition to 뒤에는 명사 성격의 표현이 오며, 절을 직접 이끌지는 않습니다."
      },
      "in between": {
        type: "전치사구/부사구",
        takes: "두 기준 사이의 위치·범위",
        meaning: "그 사이에",
        note: "in between은 조건이나 병렬 추가가 아니라 위치·범위의 중간을 나타냅니다."
      },
      "in contrast to": {
        type: "대조 전치사구",
        takes: "명사구 또는 동명사구",
        meaning: "~와 대조적으로",
        note: "in contrast to 뒤에는 비교 기준이 되는 명사구가 옵니다."
      },
      "in order that": {
        type: "목적 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "~하기 위해서",
        note: "in order that은 뒤 절이 앞 행동의 목적임을 나타냅니다."
      },
      "instead of": {
        type: "대체 전치사구",
        takes: "명사구 또는 동명사구",
        meaning: "~대신에",
        note: "instead of 뒤에는 명사구나 -ing가 와야 하며, 주어+동사가 있는 절을 바로 받을 수 없습니다."
      },
      "neither": {
        type: "상관접속 한정사",
        takes: "neither A nor B 구조의 첫 항목",
        meaning: "둘 다 아니다",
        note: "neither는 보통 nor와 짝을 이루어 부정 병렬을 만듭니다."
      },
      "next": {
        type: "부사/형용사",
        takes: "시간 순서를 나타내는 수식 자리 또는 명사 앞",
        meaning: "다음에/다음의",
        note: "next는 절을 이끄는 접속사가 아니므로 뒤의 주어+동사를 양보절로 묶을 수 없습니다."
      },
      "not only": {
        type: "상관접속 부사",
        takes: "not only A but also B 구조",
        meaning: "~뿐만 아니라",
        note: "not only가 문두에 오면 조동사/동사 도치가 뒤따를 수 있습니다."
      },
      "not until": {
        type: "시간 강조 접속 표현",
        takes: "주어+동사가 있는 절",
        meaning: "~하고 나서야 비로소",
        note: "not until이 문두에 오면 뒤 주절에 도치가 일어납니다."
      },
      "now that": {
        type: "이유 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "이제 ~이므로",
        note: "now that은 이미 성립한 상황을 이유로 제시합니다."
      },
      "or": {
        type: "등위접속사",
        takes: "문법적으로 같은 성격의 단어·구·절",
        meaning: "또는",
        note: "or는 선택지를 병렬로 연결합니다."
      },
      "or else": {
        type: "조건/경고 접속 표현",
        takes: "앞 문장 뒤의 결과·경고",
        meaning: "그렇지 않으면",
        note: "or else는 앞 행동을 하지 않을 때 생기는 결과를 경고하듯 연결합니다."
      },
      "once": {
        type: "시간/조건 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "일단 ~하면/~하자마자",
        note: "once는 어떤 일이 완료된 뒤 다음 일이 가능해지는 시간·조건 관계를 만듭니다."
      },
      "owing to": {
        type: "원인 전치사구",
        takes: "명사구 또는 동명사구",
        meaning: "~때문에",
        note: "owing to 뒤에는 원인이 되는 명사구가 오며, 주어+동사가 있는 절을 바로 받을 수 없습니다."
      },
      "provided that": {
        type: "조건 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "~라는 조건으로",
        note: "provided that은 공식적인 조건을 제시합니다."
      },
      "rather than": {
        type: "대조/선택 접속 표현",
        takes: "동사원형·동명사·명사구 등 앞뒤가 맞는 병렬 구조",
        meaning: "~하기보다는",
        note: "rather than은 A가 아니라 B를 선택했다는 대조를 만듭니다."
      },
      "resulting from": {
        type: "분사구/원인 전치사적 표현",
        takes: "명사구",
        meaning: "~에서 비롯된",
        note: "resulting from 뒤에는 원인이 되는 명사구가 오며, 목적절을 만들지 않습니다."
      },
      "since": {
        type: "이유/시간 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "~이므로/~이래로",
        note: "since는 이유나 시작 시점을 나타내며, '~인지 아닌지'를 묻는 명사절을 만들지는 않습니다."
      },
      "so": {
        type: "결과 등위접속사",
        takes: "앞 절의 결과가 되는 절",
        meaning: "그래서",
        note: "so는 원인 뒤의 결과를 연결합니다."
      },
      "so that": {
        type: "목적 접속사",
        takes: "주어+can/could/will/would 등 조동사가 있는 절",
        meaning: "~할 수 있도록",
        note: "so that은 뒤 절이 앞 행동의 목적임을 나타냅니다."
      },
      "soon": {
        type: "부사",
        takes: "완성된 절 안의 시간 부사 자리",
        meaning: "곧",
        note: "soon은 시간 부사라서 뒤의 절을 양보절이나 조건절로 이끌 수 없습니다."
      },
      "still": {
        type: "부사",
        takes: "동사·형용사·문장 전체를 수식하는 자리",
        meaning: "여전히/그럼에도",
        note: "still은 절을 이끄는 접속사가 아니라 부사입니다."
      },
      "that": {
        type: "관계대명사/명사절 접속사",
        takes: "선행사를 수식하는 관계절 또는 완전한 명사절",
        meaning: "~하는/ ~라는 것",
        note: "that은 전치사 to 바로 뒤에서 '누구든 ~하는 사람'이라는 명사 역할을 만들 수 없습니다."
      },
      "then": {
        type: "부사",
        takes: "완성된 절 안의 시간·순서 자리",
        meaning: "그때/그러면",
        note: "then은 조건절을 이끄는 접속사가 아니라 결과나 순서를 나타내는 부사입니다."
      },
      "there": {
        type: "부사/유도부사",
        takes: "완성된 절 안의 장소 부사 자리 또는 there is/are 구조",
        meaning: "거기에",
        note: "there는 관계절을 이끄는 관계대명사가 아니므로 명사를 수식하는 절의 주어 역할을 할 수 없습니다."
      },
      "therefore": {
        type: "접속부사",
        takes: "완성된 절과 쉼표 또는 세미콜론으로 연결되는 자리",
        meaning: "그러므로",
        note: "therefore는 종속접속사가 아니라 문장 간 논리 전환을 표시하는 접속부사입니다."
      },
      "to arrive": {
        type: "to부정사",
        takes: "목적·예정·수식 역할의 구",
        meaning: "도착하기 위해/도착할",
        note: "to arrive는 구를 만들 뿐 접속사처럼 뒤 절을 이끌 수 없습니다."
      },
      "they": {
        type: "인칭대명사",
        takes: "절 안의 주어 자리",
        meaning: "그들은",
        note: "they는 대명사라서 뒤의 관계절을 이끌 수 없고, 단수 동사 submits와도 맞지 않습니다."
      },
      "versus": {
        type: "대립 전치사",
        takes: "명사구",
        meaning: "~대/~와 비교하여",
        note: "versus는 두 대상을 맞세워 비교할 때 쓰며 양보 의미를 만들지 않습니다."
      },
      "though": {
        type: "양보 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "비록 ~이지만",
        note: "though는 although와 비슷하게 양보절을 만듭니다."
      },
      "through": {
        type: "전치사",
        takes: "명사구",
        meaning: "~을 통해/~내내",
        note: "through는 전치사라서 사람·사물을 수식하는 관계절을 이끌 수 없습니다."
      },
      "what": {
        type: "복합관계대명사",
        takes: "불완전한 절",
        meaning: "~하는 것",
        note: "what은 사물을 가리키므로 사람을 뜻하는 '누구든 ~하는 사람' 자리에는 맞지 않습니다."
      },
      "whatever": {
        type: "복합관계대명사",
        takes: "불완전한 절",
        meaning: "무엇이든",
        note: "whatever는 사물·내용을 포괄합니다."
      },
      "when": {
        type: "시간 접속사",
        takes: "주어+동사가 있는 절 또는 -ing 축약구",
        meaning: "~할 때",
        note: "when은 시간 관계를 나타냅니다."
      },
      "whether": {
        type: "명사절 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "~인지 아닌지",
        note: "whether는 determine, decide, know 같은 동사의 목적어가 되는 명사절을 이끕니다."
      },
      "whenever": {
        type: "복합관계부사",
        takes: "주어+동사가 있는 절",
        meaning: "~할 때마다",
        note: "whenever는 반복되는 시간 조건을 나타냅니다."
      },
      "wherever": {
        type: "복합관계부사",
        takes: "주어+동사가 있는 절",
        meaning: "어디에서든",
        note: "wherever는 장소가 어디이든 상관없다는 의미를 만듭니다."
      },
      "whichever": {
        type: "복합관계대명사",
        takes: "불완전한 절",
        meaning: "어느 것이든",
        note: "whichever는 둘 이상 중 어느 선택지든 상관없다는 의미를 만듭니다."
      },
      "while": {
        type: "시간/대조 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "~하는 동안 / 반면에",
        note: "while은 뒤 절의 동작이 진행되는 동안 주절 상황이 일어난다는 시간 관계를 만들 수 있습니다."
      },
      "who": {
        type: "관계대명사",
        takes: "사람 선행사를 수식하는 불완전한 절",
        meaning: "~하는 사람",
        note: "who는 앞의 사람 명사를 수식하는 관계절을 만듭니다."
      },
      "whoever": {
        type: "복합관계대명사",
        takes: "불완전한 절",
        meaning: "~하는 사람은 누구든",
        note: "whoever는 선행사 없이 'anyone who'의 뜻을 만들며, 뒤 절에서 주어 역할을 할 수 있습니다."
      },
      "unless": {
        type: "조건 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "~하지 않는다면 / ~하지 않는 한",
        note: "unless S+V는 if S does not V와 비슷하게 조건을 만듭니다."
      },
      "in case": {
        type: "대비·예방 목적의 종속접속사",
        takes: "주어+동사가 있는 절",
        meaning: "~할 경우에 대비해서",
        note: "in case S+V는 실제 발생 여부와 상관없이 미리 대비한다는 뜻을 만듭니다."
      },
      "despite": {
        type: "양보 전치사",
        takes: "명사구 또는 동명사구",
        meaning: "~에도 불구하고",
        note: "despite 뒤에는 절을 바로 쓰지 못합니다. despite the delay, despite receiving처럼 써야 합니다."
      },
      "during": {
        type: "시간 전치사",
        takes: "명사구",
        meaning: "~동안",
        note: "during 뒤에는 during the meeting처럼 기간을 나타내는 명사구가 옵니다. 주어+동사 절은 직접 받을 수 없습니다."
      },
      "because of": {
        type: "원인 전치사구",
        takes: "명사구 또는 동명사구",
        meaning: "~때문에",
        note: "because of 뒤에는 명사구가 와야 하고, because처럼 절을 직접 이끌 수 없습니다."
      },
      "whereas": {
        type: "대조 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "~인 반면에",
        note: "whereas는 두 사실을 대조할 때 쓰며, '혹시 ~할 경우에 대비해'라는 예방 목적을 만들지 않습니다."
      },
      "if not": {
        type: "축약 조건 표현",
        takes: "앞 내용의 생략을 전제로 한 구/절",
        meaning: "그렇지 않다면",
        note: "if not은 독립된 연결어처럼 아무 절 앞에 붙이기보다 앞 문맥을 받아 '그렇지 않으면'으로 씁니다."
      },
      "although": {
        type: "양보 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "비록 ~이지만",
        note: "although는 양보 관계를 만들고 조건·대비·원인 의미를 만들지 않습니다."
      },
      "because": {
        type: "원인 접속사",
        takes: "주어+동사가 있는 절",
        meaning: "~이기 때문에",
        note: "because는 이유를 제시하며 양보·대조·예방 목적을 만들지 않습니다."
      },
      "until": {
        type: "시간 접속사/전치사",
        takes: "절 또는 명사구",
        meaning: "~할 때까지",
        note: "until은 시간의 종료점을 나타내며 조건 자체를 뜻하지는 않습니다."
      },
      "prior to": {
        type: "시간 전치사구",
        takes: "명사구 또는 동명사구",
        meaning: "~전에",
        note: "prior to 뒤에는 submitting처럼 동명사구나 명사구가 옵니다."
      },
      "before": {
        type: "시간 접속사/전치사",
        takes: "절 또는 명사구/동명사구",
        meaning: "~전에",
        note: "before는 뒤 구조에 따라 접속사 또는 전치사로 쓰입니다."
      },
      "how": {
        type: "의문부사/명사절 접속사",
        takes: "주어+동사가 있는 명사절",
        meaning: "어떻게",
        note: "how는 방법을 묻거나 설명하는 명사절을 만들며, 명령문 두 개를 병렬로 잇는 등위접속사가 아닙니다."
      },
      "within": {
        type: "범위/시간 전치사",
        takes: "명사구",
        meaning: "~이내에/~안에서",
        note: "within은 전치사이므로 뒤에 기간·범위 명사구가 와야 하고, 동사원형 구를 병렬로 연결하지 못합니다."
      },
      "without": {
        type: "부정 전치사",
        takes: "명사구 또는 동명사구",
        meaning: "~없이",
        note: "without은 전치사라서 뒤에 -ing나 명사구를 받을 수 있지만, 의미는 '~전에'가 아니라 '~없이'입니다."
      },
      "yet": {
        type: "접속부사/등위접속사",
        takes: "완성된 절 또는 대조되는 병렬절",
        meaning: "그러나/아직",
        note: "yet은 대조 전환이나 '아직'의 뜻을 나타내며, 반복 조건 '~할 때마다'를 만들지 않습니다."
      }
    };
    return profiles[key] || {
      type: optionForm(text),
      takes: "문맥에 맞는 절 또는 구",
      meaning: "문맥에 따라 달라짐",
      note: `${text}의 품사와 뒤따르는 구조를 확인해야 합니다.`
    };
  }

  function followingAfterBlank(q) {
    return q.q.replace(/^.*?_____\s*/, "").replace(/[.?!]$/, "").trim();
  }

  function followingStructure(q) {
    const after = followingAfterBlank(q);
    if (/^(?:the|a|an|this|that|these|those|his|her|their|our|your|its)\s+[a-z][\w.'-]*\s+(?:is|are|was|were|has|have|had|can|could|will|would|should|must|may|might|do|does|did|needs?|receives?|arrived|approves?|submits?|participates?|travels?|collects?|displays?|lacks?|comes?|increased|remained|chose|understand|use|open|review)\b/i.test(after)) return "주어+동사가 있는 절";
    if (/^[a-z][\w.'-]*\s+(?:is|are|was|were|has|have|had|can|could|will|would|should|must|may|might|do|does|did|needs?|receives?|arrived|approves?|submits?|participates?|travels?|collects?|displays?|lacks?|comes?|increased|remained|chose|understand|use|open|review)\b/i.test(after)) return "주어+동사가 있는 절";
    if (/^[a-z]+ing\b/i.test(after)) return "동명사구";
    if (/^(the|a|an|this|that|these|those|his|her|their|our|your|its)\b/i.test(after) && !/\b(is|are|was|were|has|have|had|needs|need|receives|arrived|approves|is confirmed|was confirmed)\b/i.test(after)) return "명사구";
    if (/\b(is|are|was|were|has|have|had|needs|need|receives|arrived|approves|confirmed|is confirmed|was confirmed|can|will|should|must)\b/i.test(after)) return "주어+동사가 있는 절";
    return "구/절";
  }

  function connectiveWrongReason(q, value, answer) {
    const selected = connectiveProfile(value);
    const correct = connectiveProfile(answer);
    const after = followingAfterBlank(q);
    const structure = followingStructure(q);
    const sameStructure = selected.takes === correct.takes;
    const structureComment = sameStructure
      ? `둘 다 비슷한 구조를 받을 수 있어 보이지만, 이 문항의 핵심은 의미 관계입니다.`
      : `${value}가 보통 받는 구조는 '${selected.takes}'이고, 정답 ${answer}가 받는 구조는 '${correct.takes}'입니다.`;
    return `${value}는 ${selected.type}입니다. ${selected.note} 빈칸 뒤는 '${after}'로, ${structure}입니다. ${structureComment} 이 문장에는 '${correct.meaning}'의 의미가 필요하므로 ${answer}(${correct.type})가 맞습니다.`;

    if (String(value).toLowerCase() === "despite") {
      return `${value}는 ${selected.type}로, 뒤에 명사구나 동명사구를 받습니다. 지금 빈칸 뒤는 '${after}'처럼 ${structure}이므로 despite가 직접 이끌 수 없습니다. 뜻도 '${selected.meaning}'라서 대비·조건 의미가 아니라 양보 의미입니다. 여기서는 ${answer}(${correct.type})가 '${correct.meaning}'의 의미로 절을 연결해야 합니다.`;
    }
    if (String(value).toLowerCase() === "during") {
      return `${value}는 ${selected.type}입니다. during the meeting처럼 기간 명사구 앞에 쓰는 전치사라서 '${after}' 같은 ${structure} 앞에는 맞지 않습니다. 또한 during은 조건이 아니라 시간 배경을 나타내므로, 주절의 성립 조건을 만드는 ${answer}가 필요합니다.`;
    }
    if (String(value).toLowerCase() === "because of") {
      return `${value}는 ${selected.type}라서 뒤에 명사구가 와야 합니다. '${after}'는 ${structure}이므로 because of가 바로 받을 수 없습니다. 절을 이끌어 조건을 만드는 ${answer}가 필요합니다.`;
    }
    if (String(value).toLowerCase() === "whereas") {
      return `${value}는 ${selected.type}로 두 절을 대조할 때 씁니다. '${after}'라는 절을 받을 수는 있지만 의미가 '${selected.meaning}'라서, 전화번호를 남기는 목적이 '배송 기사에게 길 안내가 필요할 경우에 대비해서'라는 뜻과 맞지 않습니다. 대비 목적은 ${answer}입니다.`;
    }
    if (String(value).toLowerCase() === "if not") {
      return `${value}는 ${selected.type}입니다. 이 표현은 앞 문맥을 받아 '그렇지 않다면'으로 쓰는 축약형이라 '${after}' 앞에 붙이면 '그렇지 않다면 배송 기사가 길 안내를 필요로 한다'처럼 어색한 조건절이 됩니다. 이 문장은 만일의 상황에 대비해 전화번호를 남기라는 뜻이므로 ${answer}가 필요합니다.`;
    }
    if (String(value).toLowerCase() === "until") {
      return `${value}는 ${selected.type}로 시간의 끝점을 나타냅니다. 선택지로 보이면 그럴듯하지만, 이 문항은 '결제가 확인되지 않으면 출고하지 않는다'는 조건을 묻는 구조로 설계되어 있습니다. 조건 자체를 명확히 나타내는 ${answer}가 정답입니다.`;
    }
    if (answer === "Prior to") {
      return `${value}는 ${selected.type}입니다. 빈칸 뒤는 '${after}'라는 ${structure}이고, 여기서는 '제출하기 전에'라는 시간 전치사구가 필요합니다. ${answer}는 ${correct.type}라서 동명사구 submitting the application을 받을 수 있습니다.`;
    }

    return `${value}는 ${selected.type}이고 보통 ${selected.takes}를 받습니다. 하지만 이 문장의 빈칸 뒤는 '${after}'라는 ${structure}이며, 필요한 의미는 '${correct.meaning}'입니다. 따라서 ${answer}(${correct.type})가 구조와 의미를 동시에 만족합니다.`;
  }

  function prepositionProfile(text) {
    const key = String(text || "").trim().toLowerCase();
    const profiles = {
      about: ["관련/주제 전치사", "~에 관하여", "report about the issue처럼 주제나 관련 대상을 표시합니다."],
      above: ["위치 전치사", "~보다 위에", "물리적·수치적 위치가 위쪽임을 나타냅니다."],
      across: ["이동/위치 전치사", "~을 가로질러", "공간을 가로지르는 이동이나 반대편 위치를 나타냅니다."],
      after: ["시간 전치사/접속사", "~후에", "사건이나 시점이 먼저 일어난 뒤의 관계를 나타냅니다."],
      against: ["대립/접촉 전치사", "~에 반대하여/~에 기대어", "반대 대상이나 맞닿는 대상을 표시합니다."],
      along: ["방향 전치사", "~을 따라", "길·강·복도처럼 선형 공간을 따라가는 움직임을 나타냅니다."],
      alongside: ["위치/동반 전치사", "~옆에/~와 함께", "나란히 있는 위치나 함께 진행되는 대상을 나타냅니다."],
      among: ["범위 전치사", "~사이에/~중에서", "셋 이상의 대상 사이의 분포나 포함 관계를 나타냅니다."],
      around: ["위치 전치사", "~주위에", "둘레나 주변 위치를 나타냅니다."],
      as: ["역할 전치사", "~로서", "직책·역할·자격을 나타냅니다."],
      at: ["지점 전치사", "~에", "정확한 장소·시각·지점을 찍습니다."],
      beside: ["위치 전치사", "~옆에", "가까운 옆 위치를 나타냅니다."],
      between: ["범위 전치사", "~사이에", "두 대상 사이의 관계, 특히 between A and B 구조를 만듭니다."],
      beyond: ["범위 전치사", "~을 넘어서", "한계나 범위를 넘어감을 나타냅니다."],
      by: ["기한/수단 전치사", "~까지/~에 의해", "마감 시한이나 행위의 수단·행위자를 나타냅니다."],
      during: ["기간 전치사", "~동안", "during the meeting처럼 특정 기간 명사구를 받습니다."],
      except: ["제외 전치사", "~을 제외하고", "전체에서 일부를 빼는 관계를 만듭니다."],
      excepting: ["제외 전치사", "~을 제외하고", "except와 비슷하게 예외 대상을 표시합니다."],
      following: ["시간 전치사", "~후에", "following extensive renovations처럼 사건 이후를 나타냅니다."],
      for: ["기간/목적 전치사", "~동안/~을 위해", "숫자 기간과 함께 지속 시간을 나타내거나 목적 대상을 표시합니다."],
      from: ["출발점 전치사", "~부터/~에서", "시간·장소·출처의 시작점을 나타냅니다."],
      in: ["범위/분야 전치사", "~안에/~에", "분야·공간·소속 범위를 나타내며 invest in처럼 동사와 결합하기도 합니다."],
      including: ["포함 전치사", "~을 포함하여", "가격·범위 안에 들어가는 항목을 덧붙입니다."],
      inside: ["내부 위치 전치사", "~안에", "공간 내부에 있음을 나타냅니다."],
      into: ["방향 전치사", "~안으로", "밖에서 안으로 들어가는 이동이나 변화 방향을 나타냅니다."],
      near: ["근접 위치 전치사", "~근처에", "가까운 위치를 나타냅니다."],
      of: ["소속/부분 전치사", "~의", "소유·부분·성질의 관계를 만듭니다."],
      on: ["접촉/상태 전치사", "~위에/~상태로", "표면 접촉이나 on sale 같은 고정 상태 표현을 만듭니다."],
      onto: ["방향 전치사", "~위로", "어떤 표면 위로 이동해 올라감을 나타냅니다."],
      past: ["이동 전치사", "~을 지나서", "지점을 지나쳐 이동하는 방향을 나타냅니다."],
      since: ["시작 시점 전치사", "~이래로", "현재완료와 함께 시작 시점을 나타냅니다."],
      through: ["통과/수단 전치사", "~을 통해", "통로·절차·수단을 거쳐 감을 나타냅니다."],
      throughout: ["전체 기간/범위 전치사", "~내내/~전역에", "기간이나 공간 전체에 걸쳐 계속됨을 나타냅니다."],
      to: ["방향/대상 전치사", "~로/~에게", "이동의 도착점이나 전달 대상을 나타냅니다."],
      toward: ["방향/목표 전치사", "~쪽으로/~을 향해", "물리적 방향이나 예산·노력의 목표를 나타냅니다."],
      under: ["위치/조건 전치사", "~아래에/~하에", "아래 위치나 특정 조건·제도 아래 있음을 나타냅니다."],
      until: ["종료 시점 전치사", "~까지", "어떤 상태가 끝나는 시점을 나타냅니다."],
      with: ["동반/수단 전치사", "~와 함께/~을 가지고", "동반 대상이나 도구·수단을 표시합니다."],
      within: ["기한/범위 전치사", "~이내에/~안에서", "정해진 기간이나 범위 안쪽을 뜻합니다."],
      without: ["부정 전치사", "~없이", "필요한 대상이 없는 상태를 나타냅니다."],
      "according to": ["출처 전치사구", "~에 따르면", "규정·보고서·사람 같은 정보 출처를 표시합니다."],
      "because of": ["원인 전치사구", "~때문에", "원인이 되는 명사구를 받아 결과의 이유를 나타냅니다."],
      "in addition to": ["추가 전치사구", "~에 더하여", "이미 있는 대상에 추가되는 항목을 나타냅니다."],
      "in contrast to": ["대조 전치사구", "~와 대조적으로", "비교 기준이 되는 명사구와 반대되는 내용을 연결합니다."],
      "owing to": ["원인 전치사구", "~때문에", "원인이 되는 명사구를 받는 공식적인 표현입니다."],
      "prior to": ["시간 전치사구", "~전에", "명사구나 동명사구 앞에서 선후 관계를 나타냅니다."]
    };
    const [type, meaning, note] = profiles[key] || ["전치사/전치사구", "문맥상 관계", `${text}가 만드는 시간·장소·대상 관계를 확인해야 합니다.`];
    return { type, meaning, note };
  }

  function prepositionWrongReason(q, value, answer) {
    const selected = prepositionProfile(value);
    const correct = prepositionProfile(answer);
    const after = followingAfterBlank(q);
    return `${value}는 ${selected.type}로, 기본 의미는 '${selected.meaning}'입니다. ${selected.note} 빈칸 뒤 명사구는 '${after}'이고, 이 문장에서는 '${correct.meaning}' 관계가 필요합니다. 따라서 ${answer}(${correct.type})가 앞 표현과 뒤 명사구를 가장 정확하게 연결합니다.`;
  }

  function collocationObject(q) {
    const text = q.q.replace(/^[^:]+:\s*/, "");
    const match = text.match(/_____\s+(.+?)(?:\s+before\b|\s+within\b|\s+by\b|\s+on\b|\s+through\b|\s+at\b|\s+for\b|\.|$)/i);
    return match ? match[1].trim() : "the object";
  }

  const verbMeaningKo = {
    access: "접근하다/이용하다",
    arrive: "도착하다",
    assist: "돕다",
    make: "만들다",
    do: "하다",
    set: "설정하다/놓다",
    repeat: "반복하다",
    return: "돌려주다/반환하다",
    remind: "상기시키다",
    supply: "공급하다",
    suggest: "제안하다",
    suspend: "중단하다",
    revise: "수정하다",
    reveal: "드러내다",
    remove: "제거하다",
    settle: "해결하다/정산하다",
    store: "보관하다",
    state: "진술하다",
    prevent: "막다",
    prove: "증명하다",
    produce: "생산하다",
    match: "일치시키다",
    move: "이동하다",
    mark: "표시하다",
    evacuate: "대피시키다",
    estimate: "추정하다",
    establish: "설립하다"
  };

  const intransitiveVerbs = new Set(["arrive", "remain", "result", "consist", "progress"]);

  function hasKoreanBatchim(text) {
    const chars = String(text || "").trim();
    const last = chars.charCodeAt(chars.length - 1);
    if (last < 0xac00 || last > 0xd7a3) return null;
    return (last - 0xac00) % 28 !== 0;
  }

  function objectWithParticle(text) {
    const hasBatchim = hasKoreanBatchim(text);
    if (hasBatchim === null) return `${text}을/를`;
    return `${text}${hasBatchim ? "을" : "를"}`;
  }

  function topicWithParticle(text) {
    const hasBatchim = hasKoreanBatchim(text);
    if (hasBatchim === null) return `${text}은/는`;
    return `${text}${hasBatchim ? "은" : "는"}`;
  }

  function collocationWrongReason(q, value, answer) {
    const object = collocationObject(q);
    const objectKo = koPhrase(object);
    const chosenMeaning = verbMeaningKo[value] || koVerb(value);
    const answerMeaning = verbMeaningKo[answer] || koVerb(answer);
    const inserted = `'${value} ${object}'`;
    const correctPair = `'${answer} ${object}'`;
    const objectMarked = objectWithParticle(objectKo);
    const correctMeaning = answer === "attend" ? `'${objectKo}에 참석하다'` : `'${objectMarked} ${answerMeaning}'`;

    if (intransitiveVerbs.has(value)) {
      return `${value}는 보통 목적어를 바로 취하지 않는 자동사입니다. 그래서 ${inserted}처럼 쓰면 구조가 깨집니다. 예를 들어 arrive는 'arrive at/in + 장소'처럼 전치사가 필요하고, 뜻도 '${objectKo}에 도착하다'이지 ${correctMeaning}가 아닙니다. 이 문장은 ${correctPair}, 즉 ${correctMeaning}라는 타동사 결합이 필요합니다.`;
    }

    if (value === "access") {
      return `${inserted}를 넣으면 '${objectKo}에 접근하다/이용하다'라는 뜻이 됩니다. access는 자료, 시스템, 계정, 장소처럼 '접근 대상'을 목적어로 취할 때 쓰는 동사입니다. 하지만 seminar는 접근하는 대상이 아니라 참석하는 행사이므로 ${correctPair}, 즉 '${objectKo}에 참석하다'가 맞습니다.`;
    }

    if (value === "assist") {
      return `${inserted}를 넣으면 '${objectWithParticle(objectKo)} 돕다'라는 뜻이 되어, 세미나 자체가 도움을 받는 대상처럼 해석됩니다. assist는 보통 사람을 돕거나 assist with/in + 업무 구조로 씁니다. 여기서는 행사에 참여한다는 뜻이 필요하므로 ${correctPair}, 즉 '${objectKo}에 참석하다'가 맞습니다.`;
    }

    if (value === "make" && answer === "place") {
      return `${inserted}는 직역하면 '${objectMarked} 만들다'에 가깝습니다. 주문을 '넣다/하다'는 영어에서 make가 아니라 place an order라는 고정 타동사 결합을 씁니다. 따라서 ${correctPair}가 맞습니다.`;
    }

    if (value === "do" && answer === "place") {
      return `${inserted}는 '${objectMarked} 하다'라는 매우 일반적인 표현이라 주문을 넣는다는 업무 표현을 만들지 못합니다. order는 place an order로 결합하므로 ${correctPair}가 필요합니다.`;
    }

    if (value === "set" && answer === "place") {
      return `${inserted}는 '${objectMarked} 설정하다/놓다'라는 의미가 되어 주문을 제출한다는 뜻이 아닙니다. 주문을 넣는다는 뜻은 ${correctPair}로 표현합니다.`;
    }

    if (value === "repeat" && answer === "renew") {
      return `${inserted}는 '${objectMarked} 반복하다'라는 뜻입니다. 계약은 같은 행동을 반복하는 것이 아니라 기간을 연장해 효력을 다시 살리는 것이므로 renew the contract가 맞습니다.`;
    }

    if (value === "return" && answer === "renew") {
      return `${inserted}는 '${objectMarked} 돌려주다/반환하다'라는 뜻입니다. 계약 만료 전에 해야 하는 일은 반환이 아니라 갱신이므로 ${correctPair}가 맞습니다.`;
    }

    if (value === "remind" && answer === "renew") {
      return `${inserted}는 remind가 사람 목적어를 요구하기 때문에 구조가 맞지 않습니다. remind someone of/about something처럼 쓰며, contract를 직접 목적어로 두고 '갱신하다'라는 뜻을 만들 수 없습니다. 정답은 ${correctPair}입니다.`;
    }

    if (value === "supply" && answer === "submit") {
      return `${inserted}는 '${objectMarked} 공급하다'라는 뜻입니다. form이나 receipt는 기관에 내는 제출물이지 공급하는 물건이 아니므로 submit the form/receipts가 맞습니다.`;
    }

    if (value === "suggest" && answer === "submit") {
      return `${inserted}는 '${objectMarked} 제안하다'라는 뜻입니다. 신청서나 양식은 제안하는 것이 아니라 제출하는 것이므로 ${correctPair}가 필요합니다.`;
    }

    if (value === "suspend" && answer === "submit") {
      return `${inserted}는 '${objectMarked} 중단하다'라는 뜻이라, 양식이나 영수증을 회사에 내는 상황과 맞지 않습니다. 제출 행위는 ${correctPair}입니다.`;
    }

    if (value === "revise" && answer === "review") {
      return `${inserted}는 '${objectMarked} 수정하다'라는 뜻입니다. 서명 전 법무팀이 먼저 하는 일은 내용을 검토하는 것이지 바로 고쳐 쓰는 것이 아니므로 review가 필요합니다.`;
    }

    if (value === "reveal" && answer === "review") {
      return `${inserted}는 '${objectMarked} 드러내다/공개하다'라는 뜻입니다. 계약서를 살펴본다는 의미가 아니므로 ${correctPair}가 맞습니다.`;
    }

    if (value === "remove" && answer === "review") {
      return `${inserted}는 '${objectMarked} 제거하다'라는 뜻입니다. 계약서 서명 전 필요한 행위는 제거가 아니라 검토이므로 ${correctPair}가 맞습니다.`;
    }

    if (value === "settle" && answer === "schedule") {
      return `${inserted}는 '${objectMarked} 해결하다/정산하다'라는 뜻입니다. visit은 해결하는 대상이 아니라 날짜를 잡는 일정이므로 schedule a visit이 맞습니다.`;
    }

    if (value === "store" && answer === "schedule") {
      return `${inserted}는 '${objectMarked} 보관하다'라는 뜻입니다. 방문 일정은 저장·보관하는 물건이 아니라 잡는 것이므로 ${correctPair}가 필요합니다.`;
    }

    if (value === "state" && answer === "schedule") {
      return `${inserted}는 '${objectMarked} 진술하다'라는 뜻입니다. 방문을 진술하는 것이 아니라 일정을 잡는 것이므로 ${correctPair}가 맞습니다.`;
    }

    if (value === "prevent" && answer === "provide") {
      return `${inserted}는 '${objectMarked} 막다'라는 뜻입니다. instructions/details는 막는 대상이 아니라 제공하는 정보이므로 provide가 필요합니다.`;
    }

    if (value === "prove" && answer === "provide") {
      return `${inserted}는 '${objectMarked} 증명하다'라는 뜻입니다. 안내나 세부사항은 증명하는 것이 아니라 제공하는 것이므로 ${correctPair}가 맞습니다.`;
    }

    if (value === "produce" && answer === "provide") {
      return `${inserted}는 '${objectMarked} 생산하다'라는 뜻입니다. instructions/details는 제조물이 아니라 상대에게 주는 정보이므로 ${correctPair}가 필요합니다.`;
    }

    if (value === "match" && answer === "meet") {
      return `${inserted}는 '${objectKo}와 일치하다/맞추다'라는 뜻에 가깝습니다. deadline은 '일치시키는' 대상이 아니라 지켜야 하는 마감 시한이므로 meet the deadline이 맞습니다.`;
    }

    if (value === "move" && answer === "meet") {
      return `${inserted}는 '${objectMarked} 이동시키다'라는 뜻입니다. 마감일을 이동시키는 것이 아니라 정해진 마감일을 지킨다는 뜻이 필요하므로 ${correctPair}가 맞습니다.`;
    }

    if (value === "mark" && answer === "meet") {
      return `${inserted}는 '${objectMarked} 표시하다'라는 뜻입니다. deadline을 표시하는 것이 아니라 기한을 맞추는 것이므로 ${correctPair}가 필요합니다.`;
    }

    return `${inserted}를 넣으면 '${objectMarked} ${chosenMeaning}'라는 뜻이 됩니다. 그런데 이 문장의 목적어는 그런 행위의 대상이 아니라 ${correctMeaning}의 대상입니다. 따라서 ${correctPair}가 타동사 + 목적어 구조를 만들고, 의미상으로도 맞습니다.`;
  }

  function wrongReasonFor(q, choice) {
    if (choice.correct) return "";
    const pattern = q.sourcePattern || "";
    const category = q.category;
    const answer = correctText(q);
    const value = choice.text;
    const form = optionForm(value);

    if (pattern.includes("명사 자리")) {
      return `${value}는 ${form}입니다. 빈칸은 형용사나 한정사 뒤에서 전치사구/목적어와 이어지는 명사 자리이므로, 동작을 나타내는 동사형이나 수식어 형태가 아니라 사물·개념 이름을 나타내는 명사 ${answer}가 필요합니다.`;
    }
    if (pattern.includes("형용사 자리")) {
      return `${value}는 ${form}입니다. 빈칸 뒤의 명사를 직접 꾸미는 자리이므로 명사형이나 부사형이 올 수 없고, 명사 앞에서 '어떤 ${q.q.match(/_____ ([a-z -]+)/)?.[1] || "대상"}인지'를 설명하는 형용사 ${answer}가 필요합니다.`;
    }
    if (pattern.includes("부사 자리")) {
      return `${value}는 ${form}입니다. 빈칸은 동사 또는 분사를 수식해 '어떻게' 그 동작이 이루어지는지를 설명하는 자리입니다. 명사나 형용사는 동사를 직접 수식하지 못하므로 부사 ${answer}가 필요합니다.`;
    }
    if (pattern.includes("조동사")) {
      if (/^to\s/.test(value)) return `${value}는 to부정사입니다. 조동사 must 뒤에는 'to + 동사'가 아니라 반드시 동사원형이 바로 와야 하므로 ${answer}가 정답입니다.`;
      if (/ing$/.test(value)) return `${value}는 동명사/현재분사 형태입니다. must 뒤는 진행형이나 명사형 자리가 아니라 본동사의 원형 자리이므로 ${answer}가 필요합니다.`;
      if (/ed$/.test(value)) return `${value}는 과거형/과거분사 형태입니다. 조동사 뒤에서는 시제를 조동사가 담당하므로 동사에 과거 표시를 붙이지 않고 원형 ${answer}를 씁니다.`;
      return `${value}는 이 문장의 조동사 must 뒤에서 요구되는 동사원형 형태가 아닙니다.`;
    }
    if (pattern.includes("수동태")) {
      if (/^to\s/.test(value)) return `${value}는 목적을 나타내는 to부정사라서 will be 뒤의 보어가 될 수 없습니다. 주어가 행위의 대상이므로 be + 과거분사 구조의 ${answer}가 필요합니다.`;
      if (/ing$/.test(value)) return `${value}는 현재분사/동명사입니다. will be + -ing는 진행의 능동 의미가 되지만, 이 문장은 주어가 처리·준비·검토되는 대상이므로 과거분사 ${answer}가 맞습니다.`;
      return `${value}는 동사원형입니다. will be 뒤에서 수동태를 만들려면 동사원형이 아니라 과거분사가 와야 하므로 ${answer}가 필요합니다.`;
    }
    if (pattern.includes("현재완료")) {
      if (/^to\s/.test(value)) return `${value}는 목적을 나타내는 to부정사입니다. has/have 뒤에서 완료시제를 만들 때는 to부정사가 아니라 과거분사 ${answer}가 와야 합니다.`;
      if (/ing$/.test(value)) return `${value}는 -ing 형태입니다. has + -ing는 완료시제 구조가 아니므로, 현재완료 has + 과거분사의 ${answer}가 필요합니다.`;
      return `${value}는 동사원형입니다. 현재완료는 has/have + 과거분사 구조이므로 원형이 아니라 ${answer}가 정답입니다.`;
    }
    if (pattern.includes("동명사")) {
      if (/^to\s/.test(value)) return `${value}는 to부정사입니다. 여기서 Before는 전치사처럼 쓰여 뒤에 명사 역할을 하는 -ing 형태를 요구하므로 ${answer}가 필요합니다.`;
      if (/ed$/.test(value)) return `${value}는 과거형/과거분사입니다. 전치사 뒤에는 시제 표시가 된 동사가 아니라 명사 역할의 동명사 ${answer}가 와야 합니다.`;
      return `${value}는 동사원형입니다. 전치사 Before 뒤에는 동사원형을 바로 쓸 수 없고, 동사를 명사화한 동명사 ${answer}가 필요합니다.`;
    }
    if (pattern.includes("to부정사")) {
      if (/ing$/.test(value)) return `${value}는 동명사/현재분사입니다. 이 문장에서는 specialist/consultant를 고용한 목적을 설명해야 하므로 목적의 to부정사 ${answer}가 필요합니다.`;
      if (/ed$/.test(value)) return `${value}는 과거형/과거분사입니다. 빈칸은 수동이나 과거시제가 아니라 '무엇을 하기 위해 고용했는지'를 나타내는 목적 부사구 자리입니다.`;
      return `${value}는 동사원형입니다. hired a specialist 뒤에서 목적을 나타내려면 원형만 둘 수 없고 to + 동사원형인 ${answer}가 와야 합니다.`;
    }

    if (category === "comparison") {
      if (/ly$/.test(value)) return `${value}는 부사 형태입니다. 빈칸 뒤에 명사 process/screen/branch 등이 오면 명사를 수식하는 형용사 비교 표현이 필요하므로 ${answer}가 맞습니다.`;
      if (/^more /.test(value)) return `${value}는 비교급입니다. 이 문장은 the와 범위 표현이 있어 여러 대상 중 '가장 ~한' 것을 말하므로 비교급이 아니라 최상급 ${answer}가 필요합니다.`;
      if (/est$|^most |^least /.test(answer)) return `${value}는 원급 또는 비교급 형태라서 'the + 최상급 + 명사' 구조를 완성하지 못합니다. 범위 안의 최고 정도를 나타내는 ${answer}가 필요합니다.`;
      return `${value}는 이 문장의 비교 신호와 맞지 않습니다. than이 있으면 비교급, the/of/in 범위가 있으면 최상급을 써야 하므로 ${answer}가 정답입니다.`;
    }

    if (category === "connector") {
      return connectiveWrongReason(q, value, answer);
    }

    if (category === "pronoun") {
      if (/self|selves/.test(answer)) return `${value}는 재귀대명사가 아닙니다. by oneself 또는 familiarize oneself with처럼 주어와 목적어가 같은 대상을 가리킬 때는 재귀대명사 ${answer}가 필요합니다.`;
      if (/^(his|her|their|its|your|our)$/.test(answer)) return `${value}는 소유격이 아니거나 뒤 명사를 직접 꾸미는 형태가 아닙니다. 빈칸 뒤에 명사가 있으므로 소유격 ${answer}가 필요합니다.`;
      if (/^(Each|Every)$/.test(answer)) return `${value}는 뒤의 단수 명사와 수 일치가 맞지 않습니다. 단수 명사 앞에서는 개별 대상을 나타내는 ${answer}가 필요합니다.`;
      if (/^(All|Some|Many|Several|Those)$/.test(answer)) return `${value}는 뒤의 복수 명사/관계절과 수 또는 의미가 맞지 않습니다. 복수 대상을 받는 ${answer}가 적절합니다.`;
      return `${value}는 격, 수, 소유 관계가 빈칸 뒤 구조와 맞지 않습니다. 대명사는 가리키는 대상과 문장 속 역할이 맞아야 하므로 ${answer}가 정답입니다.`;
    }

    if (category === "preposition") {
      return prepositionWrongReason(q, value, answer);
    }

    if (category === "collocation") {
      return collocationWrongReason(q, value, answer);
    }

    return `${value}는 빈칸의 문장 성분과 문법 구조를 만족하지 못합니다. 정답 ${answer}가 앞뒤 구조를 가장 정확하게 완성합니다.`;
  }

  function polishText(text) {
    return String(text || "")
      .replaceAll("자연스럽게 결합하는", "목적어로 취할 수 있는")
      .replaceAll("자연스러운 결합", "문법적으로 맞는 동사-목적어 결합")
      .replaceAll("자연스럽습니다", "문법적으로 맞습니다")
      .replaceAll("자연스럽게", "문법적으로")
      .replaceAll("자연스러운", "문법적으로 알맞은");
  }

  function correctReasonFor(q) {
    const pattern = q.sourcePattern || "";
    const answer = correctText(q);
    const base = polishText(q.explanation);
    if (pattern.includes("명사 자리")) {
      return `${base} 빈칸 앞의 형용사/한정사가 뒤 명사를 꾸미는 구조이고, 빈칸 뒤 전치사구가 그 명사를 보충합니다. 따라서 이 자리는 동작을 나타내는 동사 자리가 아니라 개념명사 자리이므로 '${answer}'가 정답입니다.`;
    }
    if (pattern.includes("형용사 자리")) {
      return `${base} 빈칸은 뒤 명사를 앞에서 수식합니다. 영어에서는 명사를 직접 꾸미는 기본 품사가 형용사이므로 명사형이나 부사형이 아니라 '${answer}'가 들어가야 합니다.`;
    }
    if (pattern.includes("부사 자리")) {
      return `${base} 빈칸은 동사/분사 앞에서 동작의 방식이나 정도를 설명합니다. 동사를 수식하는 품사는 부사이므로 '${answer}'가 정답입니다.`;
    }
    if (pattern.includes("조동사")) {
      return `${base} 이 문장의 핵심 구조는 '주어 + must + 동사원형 + 목적어'입니다. must가 이미 의무 의미와 시제 기능을 담당하므로 뒤 동사에는 to, -ing, -ed를 붙이지 않습니다.`;
    }
    if (pattern.includes("수동태")) {
      return `${base} 주어는 행동을 하는 주체가 아니라 승인 후 처리되는 대상입니다. 그래서 능동형이 아니라 'will be + 과거분사' 수동태가 필요합니다.`;
    }
    if (pattern.includes("현재완료")) {
      return `${base} has/have가 완료시제를 만들 때 뒤에는 반드시 과거분사가 와야 합니다. 원형, -ing, to부정사는 완료시제의 본동사 자리를 채울 수 없습니다.`;
    }
    if (pattern.includes("동명사")) {
      return `${base} Before가 전치사로 쓰이면 뒤에 명사 상당어구가 옵니다. 동사를 그 자리에 넣으려면 -ing를 붙여 동명사로 만들어야 합니다.`;
    }
    if (pattern.includes("to부정사")) {
      return `${base} 앞 절은 사람을 고용했다는 완전한 내용이고, 빈칸 이하는 고용한 목적을 덧붙입니다. 목적을 나타내는 부사적 용법은 'to + 동사원형'입니다.`;
    }
    if (q.category === "comparison") {
      return `${base} 비교 문제는 신호어를 먼저 봅니다. than은 비교급, the나 of/in/available 같은 범위 표지는 최상급을 요구합니다. 이 문장의 비교 신호와 품사를 동시에 만족하는 답은 '${answer}'입니다.`;
    }
    if (q.category === "connector") {
      const profile = connectiveProfile(answer);
      const after = followingAfterBlank(q);
      const structure = followingStructure(q);
      return `${base} '${answer}'는 ${profile.type}이고, 보통 뒤에는 ${profile.takes} 형태가 옵니다. 이 문장의 빈칸 뒤는 '${after}'라는 ${structure}입니다. 따라서 먼저 뒤 구조가 절인지 구인지 확인하고, 그다음 앞뒤 의미가 ${profile.meaning}인지 판단해야 합니다. 구조와 의미를 동시에 만족하는 연결어가 '${answer}'입니다.`;
    }
    if (q.category === "pronoun") {
      return `${base} 대명사 문제는 빈칸 뒤 명사의 유무, 주어와 목적어의 관계, 단수/복수, 소유격 여부를 확인해야 합니다. 이 문장에서 요구되는 격과 수를 만족하는 형태가 '${answer}'입니다.`;
    }
    if (q.category === "preposition") {
      const profile = prepositionProfile(answer);
      const after = followingAfterBlank(q);
      return `${base} '${answer}'는 ${profile.type}이고 기본 의미는 '${profile.meaning}'입니다. 빈칸 뒤 명사구는 '${after}'입니다. 전치사 문제는 뒤 명사구의 형태보다, 앞 표현과 뒤 명사구가 어떤 관계를 맺는지를 묻는 경우가 많습니다. 여기서는 ${profile.note} 그래서 '${answer}'가 문장의 시간·장소·대상 관계를 정확하게 완성합니다.`;
    }
    if (q.category === "collocation") {
      return `빈칸 뒤 목적어가 어떤 동사를 요구하는지 보는 문제입니다. 이 문장의 동사는 뒤 명사를 직접 목적어로 취해야 하며, 의미상 그 목적어에 수행할 수 있는 행위를 나타내야 합니다. '${answer}'는 해당 목적어를 취하는 타동사 결합을 만들지만, 다른 선택지는 목적어의 의미역이나 타동사 구조가 맞지 않습니다.`;
    }
    return `${base} 따라서 빈칸에는 '${answer}'가 들어가야 문법과 의미가 모두 맞습니다.`;
  }

  function detailedExplanation(q) {
    const correct = correctText(q);
    const wrongs = q.choices
      .filter(choice => !choice.correct)
      .map(choice => `${choice.text}: ${choice.wrongReason || genericWrong(q.category)}`)
      .join("\n");
    return {
      translation: translateQuestion(q),
      concept: conceptFor(q),
      reason: correctReasonFor(q),
      distractors: wrongs
    };
  }

  function calibratedDifficulty(q) {
    const level = q.difficulty || "medium";
    if ((q.category === "connector" || q.category === "collocation") && level === "easy") return "medium";
    if ((q.category === "connector" || q.category === "collocation") && level === "medium") return "hard";
    if ((q.category === "preposition" || q.category === "comparison" || q.category === "verb_form") && level === "easy") return "medium";
    return level;
  }

  const TARGET_TOTAL = 1000;
  const shuffled = shuffle(bank, 950).slice(0, TARGET_TOTAL).map((q, idx) => {
    const enhancedChoices = sanitizeChoices(q).map(choice => ({
      ...choice,
      wrongReason: choice.correct ? "" : wrongReasonFor({ ...q, choices: sanitizeChoices(q) }, choice)
    }));
    const difficulty = calibratedDifficulty(q);
    const enhancedQuestion = { ...q, difficulty, difficultyLabel: DIFFICULTY_LABELS[difficulty], choices: enhancedChoices };
    const details = detailedExplanation(enhancedQuestion);
    return {
      ...enhancedQuestion,
      translation: details.translation,
      concept: details.concept,
      detailedExplanation: details.reason,
      distractorExplanation: details.distractors,
      set: Math.floor(idx / 30) + 1,
      number: 101 + (idx % 30)
    };
  });

  globalThis.PART5_BANK = shuffled;
  globalThis.PART5_META = {
    total: shuffled.length,
    sets: Math.ceil(shuffled.length / 30),
    perSet: 30,
    categories: CATEGORY_META,
    difficulties: DIFFICULTY_LABELS,
    generatedAt: "2026-06-11"
  };
})();
