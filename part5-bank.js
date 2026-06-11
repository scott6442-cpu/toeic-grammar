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
    ["Unless", ["Until", "During", "Despite"], "The order will not ship _____ payment is received.", "조건을 나타내는 Unless가 맞습니다."],
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
      ["Unless", ["Until", "During", "Despite"], "The order will not be released _____ payment is confirmed.", "조건을 나타내는 Unless가 필요합니다."],
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

  const TARGET_TOTAL = 1000;
  const shuffled = shuffle(bank, 950).slice(0, TARGET_TOTAL).map((q, idx) => ({
    ...q,
    set: Math.floor(idx / 30) + 1,
    number: 101 + (idx % 30)
  }));

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
