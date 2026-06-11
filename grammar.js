// ==========================================================
//  TOEIC 어법(Grammar) 학습 데이터
//  10 주제 × 3 난이도(하/중/상) × (3 규칙 + 10 문제)
// ==========================================================
const GRAMMAR_TOPICS = [

  // ====================== 1. 품사 자리 ======================
  {
    id: "pos",
    icon: "🏷️",
    title: "품사 자리",
    description: "명사 · 형용사 · 부사 · 동사 자리 구분",
    levels: {
      easy: {
        name: "하 · 기본",
        summary: "관사/be동사 뒤, 동사 수식 등 기본 품사 자리",
        rules: [
          { title: "명사 자리", body: "관사(a/an/the), 소유격(my/your/our), 형용사 뒤에는 <b>명사</b>가 와요.", example: "The <u>decision</u> was crucial for the merger.", translation: "그 결정은 합병에 결정적이었다." },
          { title: "형용사 자리", body: "관사와 명사 사이, 또는 be/become/seem/look 뒤에는 <b>형용사</b>가 와요.", example: "The report is <u>accurate</u> and detailed.", translation: "그 보고서는 정확하고 상세하다." },
          { title: "부사 자리", body: "동사/형용사/다른 부사/문장 전체를 수식. be + p.p. 사이, 동사 뒤에 주로 <b>부사</b>가 와요.", example: "She finished the task <u>quickly</u>.", translation: "그녀는 빠르게 업무를 끝냈다." }
        ],
        questions: [
          { q: "The manager made an _____ announcement about the merger.", choices: [ {text:"important",correct:true}, {text:"importantly",wrongReason:"importantly는 부사(중요하게)로 동사/문장을 수식해요. 관사 an과 명사 announcement 사이엔 명사를 꾸미는 형용사가 필요해요."}, {text:"importance",wrongReason:"importance는 명사(중요성). 관사 an 뒤엔 다른 명사가 바로 올 수 없고, 명사를 수식하는 자리예요."}, {text:"importing",wrongReason:"importing은 분사/동명사로 '수입하는 것'이라는 뜻. 발표의 성격을 묘사하는 일반 형용사가 자연스러워요."} ], explanation: "an(관사) + ___ + announcement(명사) 구조 → 명사를 수식하는 형용사 자리. 정답은 important." },
          { q: "Our team works _____ to meet tight deadlines.", choices: [ {text:"efficiently",correct:true}, {text:"efficient",wrongReason:"efficient는 형용사예요. 동사 works를 수식하려면 부사가 필요해요."}, {text:"efficiency",wrongReason:"efficiency는 명사(효율성). 동사 works 뒤엔 동사를 수식하는 부사가 필요해요."}, {text:"efficiencies",wrongReason:"efficiencies도 명사(복수). 동사를 꾸밀 수 없어요."} ], explanation: "동사 works를 수식 → 부사 자리. efficiently(효율적으로)가 정답." },
          { q: "The proposal is _____ for the new project.", choices: [ {text:"beneficial",correct:true}, {text:"benefit",wrongReason:"benefit은 명사(이익) 또는 동사. is 뒤에 '이익이다' 의미로 명사를 쓰려면 a/the가 필요하고 문맥상 어색해요."}, {text:"beneficially",wrongReason:"beneficially는 부사. be동사 뒤에는 주어의 상태를 설명하는 형용사가 자연스러워요."}, {text:"benefits",wrongReason:"benefits는 명사 복수. is 뒤에 단수 주어 설명은 형용사가 맞아요."} ], explanation: "be동사(is) 뒤엔 주어의 상태를 설명하는 형용사 보어가 와요 → beneficial." },
          { q: "The company launched a _____ product line last month.", choices: [ {text:"creative",correct:true}, {text:"create",wrongReason:"create는 동사 원형. 관사 a와 명사 product 사이엔 형용사가 필요해요."}, {text:"creatively",wrongReason:"creatively는 부사. 명사 product를 수식하려면 형용사가 필요해요."}, {text:"creativity",wrongReason:"creativity는 명사(창의성). 관사 a 뒤에 다른 명사가 바로 올 수 없어요."} ], explanation: "a + ___ + product 구조 → 명사를 수식하는 형용사가 필요해요. creative가 정답." },
          { q: "The team _____ completed the project ahead of schedule.", choices: [ {text:"successfully",correct:true}, {text:"success",wrongReason:"success는 명사. 주어와 동사 사이에 명사가 오면 문장이 성립하지 않아요."}, {text:"successful",wrongReason:"successful은 형용사. 동사 completed를 수식하려면 부사가 필요해요."}, {text:"succeed",wrongReason:"succeed는 동사. 이미 completed라는 동사가 있어요."} ], explanation: "주어와 동사 사이, 또는 동사 앞 부사 자리 → successfully가 정답." },
          { q: "Her _____ was impressive during the interview.", choices: [ {text:"performance",correct:true}, {text:"perform",wrongReason:"perform은 동사 원형. 소유격 her 뒤엔 명사가 와야 해요."}, {text:"performing",wrongReason:"performing은 동명사/분사. '수행하는 것'으로 해석은 되지만, 문맥상 '수행(명사)'인 performance가 훨씬 자연스러워요."}, {text:"performed",wrongReason:"performed는 과거동사/과거분사. her 뒤에 올 수 없어요."} ], explanation: "소유격(Her) + ___ → 명사 자리. performance(명사: 수행)가 정답." },
          { q: "This report contains _____ information about the market.", choices: [ {text:"useful",correct:true}, {text:"use",wrongReason:"use는 명사/동사. 명사 information 앞엔 다른 명사보다 형용사가 필요해요."}, {text:"usefully",wrongReason:"usefully는 부사. 명사 information을 수식하려면 형용사가 필요해요."}, {text:"usefulness",wrongReason:"usefulness는 명사(유용함). 명사 information을 수식할 수 없어요."} ], explanation: "형용사 + 명사(information) 자리 → useful이 정답." },
          { q: "The new employee is very _____ in computer skills.", choices: [ {text:"proficient",correct:true}, {text:"proficiently",wrongReason:"proficiently는 부사. be동사(is) + very 뒤엔 주어 상태를 묘사하는 형용사가 와야 해요."}, {text:"proficiency",wrongReason:"proficiency는 명사(숙련됨). is very 뒤엔 형용사가 자연스러워요."}, {text:"proficiencies",wrongReason:"proficiencies는 명사 복수. be동사 + very 뒤에 올 수 없어요."} ], explanation: "is + very + ___ → 형용사 자리. proficient(능숙한)가 정답." },
          { q: "Please submit your _____ by Friday afternoon.", choices: [ {text:"application",correct:true}, {text:"apply",wrongReason:"apply는 동사 원형. 소유격 your 뒤엔 명사가 와야 해요."}, {text:"applicable",wrongReason:"applicable은 형용사(적용 가능한). your 뒤엔 명사가 오고, 형용사는 명사를 수식하는 자리에 써요."}, {text:"applying",wrongReason:"applying은 동명사/분사. 문맥상 '지원서'를 의미하는 명사 application이 가장 자연스러워요."} ], explanation: "소유격(your) + ___ → 명사 자리. application(지원서)이 정답." },
          { q: "The CEO _____ approved the proposed budget.", choices: [ {text:"finally",correct:true}, {text:"final",wrongReason:"final은 형용사(마지막의). 동사 approved를 수식하려면 부사가 필요해요."}, {text:"finalize",wrongReason:"finalize는 동사 원형. 이미 approved라는 동사가 있어요."}, {text:"finality",wrongReason:"finality는 명사(종결). 주어와 동사 사이에 명사가 올 수 없어요."} ], explanation: "주어와 동사 사이 → 동사를 수식하는 부사 자리. finally(마침내)가 정답." }
        ]
      },
      medium: {
        name: "중 · 800점대",
        summary: "-ly 형용사, 복합명사, 동명사 주어 등 함정",
        rules: [
          { title: "-ly로 끝나는 형용사", body: "friendly, lovely, costly, timely, weekly, monthly, orderly — 모두 부사가 아닌 <b>형용사</b>예요.", example: "We provide <u>timely</u> service.", translation: "저희는 시기적절한 서비스를 제공합니다." },
          { title: "복합명사 (명사 + 명사)", body: "sales report, customer service, job opening — 앞의 명사가 형용사처럼 뒤 명사를 수식해요.", example: "The <u>customer service</u> team is helpful.", translation: "고객 서비스 팀은 도움이 된다." },
          { title: "주어 자리의 동명사", body: "동사가 문장의 주어가 되려면 -ing(동명사) 형태로 바꿔요. 단수 취급.", example: "<u>Training</u> new employees takes time.", translation: "신입사원 교육은 시간이 걸린다." }
        ],
        questions: [
          { q: "The company provides _____ service to its loyal customers.", choices: [ {text:"friendly",correct:true}, {text:"friend",wrongReason:"friend는 명사(친구). 명사 service 앞엔 수식하는 형용사가 와야 해요."}, {text:"friendship",wrongReason:"friendship은 명사(우정). 명사 service를 수식할 수 없어요."}, {text:"friends",wrongReason:"friends는 명사 복수. 단독으로 다른 명사를 수식하진 않아요."} ], explanation: "-ly로 끝나지만 friendly는 형용사예요. service(명사)를 수식하는 자리." },
          { q: "Please submit the monthly _____ report by the 5th.", choices: [ {text:"sales",correct:true}, {text:"sell",wrongReason:"sell은 동사 원형. 복합명사의 앞 요소로 쓰려면 명사 형태가 필요해요."}, {text:"sold",wrongReason:"sold는 과거동사/과거분사. 여기선 'sales report'라는 복합명사가 자연스러워요."}, {text:"selling",wrongReason:"selling은 동명사/분사. 토익 빈출 복합명사 sales report가 정답이에요."} ], explanation: "sales report는 토익 빈출 복합명사(판매 보고서). 앞 자리에 sales(명사)가 와요." },
          { q: "_____ new software requires extensive testing.", choices: [ {text:"Developing",correct:true}, {text:"Develop",wrongReason:"Develop는 동사 원형. 문장의 주어 자리에는 명사나 동명사가 와야 해요."}, {text:"Development",wrongReason:"Development도 가능하지만 뒤에 목적어 new software가 이어지므로 동명사 developing이 자연스러워요."}, {text:"Developed",wrongReason:"Developed는 과거동사/과거분사. 주어 자리에 올 수 없어요."} ], explanation: "주어 자리 + 목적어(new software) → 동명사 Developing이 정답." },
          { q: "We offer _____ updates on your order status.", choices: [ {text:"timely",correct:true}, {text:"time",wrongReason:"time은 명사. 명사 updates를 수식하려면 형용사가 필요해요."}, {text:"timed",wrongReason:"timed는 과거분사(시간이 정해진)로 문맥과 어울리지 않아요. timely(시기적절한)가 더 자연스러워요."}, {text:"timing",wrongReason:"timing은 명사(타이밍). updates를 수식하려면 형용사가 필요해요."} ], explanation: "-ly지만 timely는 형용사. 명사 updates 앞 자리." },
          { q: "The _____ opening has attracted many qualified candidates.", choices: [ {text:"job",correct:true}, {text:"jobs",wrongReason:"jobs는 복수 명사. 복합명사 'job opening'은 단수형의 job을 써요."}, {text:"working",wrongReason:"working은 분사/동명사. 관례적으로 job opening이 토익 빈출 복합명사예요."}, {text:"worked",wrongReason:"worked는 과거동사/과거분사. 여기선 명사 opening을 수식하는 앞 요소가 필요해요."} ], explanation: "job opening(채용 공고)은 토익 빈출 복합명사." },
          { q: "_____ to new procedures takes several weeks.", choices: [ {text:"Adapting",correct:true}, {text:"Adapt",wrongReason:"Adapt는 동사 원형. 주어 자리엔 명사나 동명사가 필요해요."}, {text:"Adaptation",wrongReason:"Adaptation(명사) 자체는 가능하지만, 뒤에 'to new procedures'처럼 동사적 구조가 이어지면 동명사가 더 자연스러워요."}, {text:"Adapted",wrongReason:"Adapted는 과거동사/과거분사. 주어 자리에 올 수 없어요."} ], explanation: "주어 자리의 동명사. Adapting이 정답." },
          { q: "Our _____ representative will contact you shortly.", choices: [ {text:"sales",correct:true}, {text:"sale",wrongReason:"sale(단수)도 가능해 보이지만, 직책을 나타내는 복합명사에서는 sales representative가 관용적 표현이에요."}, {text:"sell",wrongReason:"sell은 동사. 명사 representative를 수식하려면 명사나 형용사가 필요해요."}, {text:"sold",wrongReason:"sold는 과거분사. '팔린 담당자'는 어색해요."} ], explanation: "sales representative(영업 담당자)는 토익 빈출 복합명사." },
          { q: "We hold _____ staff meetings every Monday.", choices: [ {text:"weekly",correct:true}, {text:"week",wrongReason:"week는 명사. 명사 meetings를 꾸미려면 형용사가 필요해요."}, {text:"weeks",wrongReason:"weeks는 명사 복수. 다른 명사를 단독 수식하지 않아요."}, {text:"weeken",wrongReason:"weeken은 존재하지 않는 단어예요."} ], explanation: "-ly지만 weekly는 형용사(주간의) + 부사(주마다) 둘 다 가능. 명사 meetings 앞엔 형용사로 쓰임." },
          { q: "The _____ of the new policy was delayed by one week.", choices: [ {text:"implementation",correct:true}, {text:"implement",wrongReason:"implement는 동사 원형 또는 명사(도구). 관사 The 뒤엔 '시행'을 뜻하는 추상명사 implementation이 자연스러워요."}, {text:"implementing",wrongReason:"implementing은 동명사. 관사 The와 함께 쓰는 경우는 드물고, implementation이 명사로 더 적합해요."}, {text:"implemented",wrongReason:"implemented는 과거분사. 관사 The 뒤에 단독으로 올 수 없어요."} ], explanation: "The(관사) + ___ + of → 일반 명사 자리. implementation이 정답." },
          { q: "The manager's _____ to change was admirable.", choices: [ {text:"willingness",correct:true}, {text:"willing",wrongReason:"willing은 형용사(기꺼이 하는). 소유격 뒤엔 명사가 와야 해요."}, {text:"willingly",wrongReason:"willingly는 부사(기꺼이). 소유격 뒤에 올 수 없어요."}, {text:"will",wrongReason:"will도 명사로 '의지'가 되긴 하지만, '변화에 대한 의지'를 표현할 때 관용적으로 willingness가 쓰여요."} ], explanation: "소유격(manager's) + ___ → 명사 자리. willingness(기꺼이 함)가 정답." }
        ]
      },
      hard: {
        name: "상 · 900 목표",
        summary: "형태 동일 부사, 혼동 품사쌍 (considerable/considerate 등)",
        rules: [
          { title: "형태가 같은 부사/형용사", body: "hard(열심히·어려운), fast(빠르게·빠른), late(늦게·늦은), high(높게·높은), early(일찍·이른) — 같은 형태로 둘 다 쓰여요.", example: "He works <u>hard</u> every day.", translation: "그는 매일 열심히 일한다." },
          { title: "완전히 다른 뜻의 -ly 부사", body: "hardly(거의~않다), lately(최근), highly(매우), nearly(거의), shortly(곧) — 기본 부사와 뜻이 전혀 달라요.", example: "She has been busy <u>lately</u>.", translation: "그녀는 최근 바빴다." },
          { title: "혼동 품사쌍", body: "considerable(상당한)↔considerate(사려깊은), respectable(존경할 만한)↔respectful(공손한)↔respective(각각의), economic(경제의)↔economical(절약되는).", example: "She received a <u>considerable</u> bonus.", translation: "그녀는 상당한 보너스를 받았다." }
        ],
        questions: [
          { q: "The research team worked _____ to meet the tight deadline.", choices: [ {text:"hard",correct:true}, {text:"hardly",wrongReason:"hardly는 '거의 ~하지 않다'라는 부정의 의미예요. 열심히 일했다는 맥락과 정반대예요."}, {text:"harder",wrongReason:"harder는 비교급으로 비교 대상이 있어야 해요(than ~). 단독으로는 어색해요."}, {text:"hardness",wrongReason:"hardness는 명사(단단함). 동사를 수식할 수 없어요."} ], explanation: "hard는 형용사(어려운)와 부사(열심히)가 동일 형태. '열심히 일하다'의 부사로 사용." },
          { q: "The CEO made a _____ contribution to the charity.", choices: [ {text:"considerable",correct:true}, {text:"considerate",wrongReason:"considerate는 '사려 깊은'이라는 뜻으로 사람의 성격을 묘사해요. 기부 금액의 크기를 말하는 맥락엔 맞지 않아요."}, {text:"considering",wrongReason:"considering은 분사/전치사(~을 고려할 때). 명사 contribution을 단순 수식하기엔 어색해요."}, {text:"considered",wrongReason:"considered는 '신중한'이라는 뜻도 있지만, 금액의 크기를 말하는 맥락엔 considerable이 정답이에요."} ], explanation: "considerable은 '(수량이) 상당한'. considerate는 '사려 깊은'으로 뜻이 완전히 달라요." },
          { q: "The company has expanded _____ over the past decade.", choices: [ {text:"considerably",correct:true}, {text:"considerable",wrongReason:"considerable은 형용사. 동사 has expanded를 수식하려면 부사가 필요해요."}, {text:"considerate",wrongReason:"considerate는 형용사(사려 깊은)이고, 문맥상 확장의 '정도'를 나타내는 부사가 맞아요."}, {text:"consideration",wrongReason:"consideration은 명사(고려). 동사를 수식할 수 없어요."} ], explanation: "동사 수식 부사 자리. considerably(상당히) 정답." },
          { q: "Their _____ opinions on the matter were recorded separately.", choices: [ {text:"respective",correct:true}, {text:"respectable",wrongReason:"respectable은 '존경할 만한'. 각자의 의견을 구분한다는 맥락엔 맞지 않아요."}, {text:"respectful",wrongReason:"respectful은 '공손한, 경의를 표하는'. 각자의 의견을 말할 땐 respective가 정답이에요."}, {text:"respecting",wrongReason:"respecting은 분사 또는 전치사(~에 관하여). 의견을 수식하는 용법으론 respective가 맞아요."} ], explanation: "respective는 '각각의'. 세 단어가 형태는 비슷하지만 뜻이 모두 달라요." },
          { q: "The new hybrid car is very _____ on fuel.", choices: [ {text:"economical",correct:true}, {text:"economic",wrongReason:"economic은 '경제의, 경제학의'라는 거시적 의미예요. 연비가 좋다는 의미엔 economical이 맞아요."}, {text:"economy",wrongReason:"economy는 명사(경제). 부사 very 뒤엔 형용사가 와야 해요."}, {text:"economically",wrongReason:"economically는 부사. be동사 + very 뒤엔 형용사 보어가 필요해요."} ], explanation: "economical(절약되는) ≠ economic(경제의). 연비가 좋다는 맥락은 economical." },
          { q: "The package will arrive _____ at your office.", choices: [ {text:"shortly",correct:true}, {text:"short",wrongReason:"short는 '짧은/짧게'. '곧 도착한다'는 의미엔 shortly(곧)가 맞아요."}, {text:"shortness",wrongReason:"shortness는 명사(짧음). 동사를 수식할 수 없어요."}, {text:"shorter",wrongReason:"shorter는 비교급으로 '더 짧은/더 짧게'. 의미가 맞지 않아요."} ], explanation: "shortly는 '곧, 머지않아'라는 뜻의 부사로 short(짧은)와 뜻이 달라요." },
          { q: "She has been working _____ on the new report.", choices: [ {text:"lately",correct:true}, {text:"late",wrongReason:"late(늦게)와 lately(최근에)는 뜻이 달라요. 완료 시제(has been)는 '최근에'와 어울리므로 lately가 정답이에요."}, {text:"later",wrongReason:"later는 '나중에'. 완료 진행 시제의 기간 부사로는 lately가 자연스러워요."}, {text:"latest",wrongReason:"latest는 '최신의' 형용사 또는 '가장 최근에' 부사로는 덜 쓰여요. 기간 부사로는 lately가 정답."} ], explanation: "lately(최근에) ≠ late(늦게). 완료시제와 자주 결합." },
          { q: "The speaker was _____ praised for her insightful analysis.", choices: [ {text:"highly",correct:true}, {text:"high",wrongReason:"high는 '높이/높은'이라는 물리적 의미로 쓰여요. '매우, 대단히'의 의미로는 highly가 맞아요."}, {text:"higher",wrongReason:"higher는 비교급. 단독 부사로 praised를 수식하려면 highly가 정답."}, {text:"height",wrongReason:"height는 명사(높이). 동사를 수식할 수 없어요."} ], explanation: "highly = '매우'(정도). high = '높게'(물리적). 칭찬의 정도를 말하므로 highly." },
          { q: "The manager is known for being _____ to all staff members.", choices: [ {text:"considerate",correct:true}, {text:"considerable",wrongReason:"considerable은 '(수량이) 상당한'이라는 의미예요. 사람의 성격을 묘사할 땐 considerate가 맞아요."}, {text:"considering",wrongReason:"considering은 분사 또는 전치사. 성격 형용사로는 considerate가 정답이에요."}, {text:"consideration",wrongReason:"consideration은 명사(배려). be + 명사는 가능하나 being 뒤엔 형용사가 자연스러워요."} ], explanation: "considerate(사려 깊은) ≠ considerable(상당한). 사람의 성격 → considerate." },
          { q: "The flight was _____ delayed due to bad weather.", choices: [ {text:"significantly",correct:true}, {text:"significant",wrongReason:"significant는 형용사. 과거분사 delayed를 수식하려면 부사가 필요해요."}, {text:"signify",wrongReason:"signify는 동사(의미하다). 품사 자리 자체가 맞지 않아요."}, {text:"significance",wrongReason:"significance는 명사(중요성). 과거분사를 수식할 수 없어요."} ], explanation: "be + ___ + p.p. 구조의 부사 자리. significantly가 정답." }
        ]
      }
    }
  },

  // ====================== 2. 동사 시제 ======================
  {
    id: "tense",
    icon: "⏰",
    title: "동사 시제",
    description: "현재 · 과거 · 미래 · 완료 · 진행",
    levels: {
      easy: {
        name: "하 · 기본",
        summary: "기본 시제 식별하기",
        rules: [
          { title: "현재 시제", body: "습관, 반복, 일반적 사실을 표현. every day/week, usually, often, always와 자주 쓰여요.", example: "The store <u>opens</u> at 9 AM every day.", translation: "그 가게는 매일 오전 9시에 문을 연다." },
          { title: "과거 시제", body: "yesterday, last week, ago, in 2020 같은 과거 시점 부사구와 함께 써요.", example: "We <u>hired</u> five new employees last month.", translation: "우리는 지난달에 신입 다섯 명을 채용했다." },
          { title: "미래 시제 (will / be going to)", body: "tomorrow, next week, soon과 함께 써요.", example: "The CEO <u>will announce</u> the plan tomorrow.", translation: "CEO가 내일 계획을 발표할 것이다." }
        ],
        questions: [
          { q: "The board _____ every Monday morning.", choices: [ {text:"meets",correct:true}, {text:"met",wrongReason:"met은 과거. every Monday는 반복되는 습관이므로 현재 시제가 맞아요."}, {text:"meeting",wrongReason:"meeting 단독 형태는 동사로 쓰일 수 없어요. be동사가 앞에 있어야 해요."}, {text:"will meet",wrongReason:"반복적 습관은 미래가 아닌 현재 시제로 표현해요."} ], explanation: "every Monday = 반복 → 현재 시제 meets." },
          { q: "We _____ the contract last Friday.", choices: [ {text:"signed",correct:true}, {text:"sign",wrongReason:"sign은 현재 원형. last Friday는 과거 시점이므로 과거형이 필요해요."}, {text:"will sign",wrongReason:"will sign은 미래. last Friday와 함께 쓸 수 없어요."}, {text:"signing",wrongReason:"signing은 현재분사/동명사. 단독 동사로 쓸 수 없어요."} ], explanation: "last Friday(과거 시점) → 과거 시제 signed." },
          { q: "The conference _____ next week in Seoul.", choices: [ {text:"will be held",correct:true}, {text:"is holding",wrongReason:"hold는 타동사라 진행형 수동을 쓰려면 is being held가 맞아요. 단순 미래는 will be held."}, {text:"was held",wrongReason:"was held는 과거. next week(미래)와 맞지 않아요."}, {text:"holds",wrongReason:"holds는 현재 능동. 컨퍼런스는 개최되는 대상이므로 수동 표현이 필요해요."} ], explanation: "next week → 미래. 컨퍼런스는 개최되는 대상 → 수동형 will be held." },
          { q: "She usually _____ her reports by email.", choices: [ {text:"sends",correct:true}, {text:"sent",wrongReason:"sent는 과거. usually(습관)는 현재 시제와 결합해요."}, {text:"will send",wrongReason:"will send는 미래. 습관은 현재 시제로 표현해요."}, {text:"sending",wrongReason:"sending 단독으론 동사 역할을 하지 못해요."} ], explanation: "usually(습관) → 현재. 주어가 3인칭 단수라 sends." },
          { q: "The new branch _____ in 2021.", choices: [ {text:"opened",correct:true}, {text:"opens",wrongReason:"opens는 현재. in 2021은 과거 시점이에요."}, {text:"will open",wrongReason:"will open은 미래. 2021은 이미 지난 해예요."}, {text:"is opening",wrongReason:"현재진행형은 지금 진행되는 일에 써요. in 2021은 과거예요."} ], explanation: "in 2021(과거 시점) → 과거 시제 opened." },
          { q: "Our team _____ a meeting tomorrow at 10 AM.", choices: [ {text:"will have",correct:true}, {text:"has",wrongReason:"has(현재)는 습관/사실에 써요. tomorrow라는 미래 부사와 맞지 않아요."}, {text:"had",wrongReason:"had는 과거. tomorrow(미래)와 맞지 않아요."}, {text:"having",wrongReason:"having 단독은 동사 역할을 못 해요."} ], explanation: "tomorrow → 미래 시제 will have." },
          { q: "The workshop _____ three hours every Friday afternoon.", choices: [ {text:"lasts",correct:true}, {text:"lasted",wrongReason:"lasted는 과거. every Friday는 반복되는 현재 습관이에요."}, {text:"will last",wrongReason:"반복되는 습관은 미래가 아니라 현재로 표현해요."}, {text:"lasting",wrongReason:"lasting은 분사/형용사. 단독 동사로 쓸 수 없어요."} ], explanation: "every Friday(반복) → 현재. 주어 단수라 lasts." },
          { q: "The manager _____ the application yesterday.", choices: [ {text:"reviewed",correct:true}, {text:"reviews",wrongReason:"reviews는 현재. yesterday는 과거 시점이에요."}, {text:"will review",wrongReason:"미래 시제는 yesterday와 쓸 수 없어요."}, {text:"is reviewing",wrongReason:"현재진행은 '지금 하고 있는 중'. yesterday는 과거예요."} ], explanation: "yesterday → 과거. reviewed." },
          { q: "Our company _____ a new product next quarter.", choices: [ {text:"will launch",correct:true}, {text:"launched",wrongReason:"launched는 과거. next quarter는 미래예요."}, {text:"launches",wrongReason:"launches는 현재/습관. 특정 미래 시점엔 미래 시제가 자연스러워요."}, {text:"launching",wrongReason:"launching 단독은 동사 역할을 못 해요."} ], explanation: "next quarter → 미래 will launch." },
          { q: "The receptionist _____ calls from 9 to 5 every day.", choices: [ {text:"answers",correct:true}, {text:"answered",wrongReason:"answered는 과거. every day(반복)는 현재 시제."}, {text:"will answer",wrongReason:"반복되는 업무는 현재 시제."}, {text:"is answering",wrongReason:"is answering은 지금 전화받는 중. 일반적 업무는 단순 현재."} ], explanation: "every day → 현재. 3인칭 단수 answers." }
        ]
      },
      medium: {
        name: "중 · 800점대",
        summary: "현재완료 vs 과거, 진행형",
        rules: [
          { title: "현재완료 (have/has + p.p.)", body: "과거에 시작해 지금까지 이어지거나, 경험, 완료를 표현. since, for, already, yet, just, ever와 결합.", example: "She <u>has worked</u> here for 10 years.", translation: "그녀는 여기서 10년째 일해 왔다." },
          { title: "현재완료 vs 과거", body: "과거 시점 부사(yesterday, last, ago, in 2020)는 <b>과거 시제</b>만 허용. 현재완료와 함께 쓸 수 없어요.", example: "I <u>met</u> him yesterday. (NOT have met)", translation: "" },
          { title: "진행형", body: "now, currently, at the moment와 결합. 일시적 상황을 표현.", example: "The team <u>is preparing</u> the proposal now.", translation: "팀이 지금 제안서를 준비하고 있다." }
        ],
        questions: [
          { q: "She _____ for this company since 2015.", choices: [ {text:"has worked",correct:true}, {text:"worked",wrongReason:"since 2015는 '그때부터 지금까지'를 뜻해요. 단순 과거가 아니라 현재완료가 필요해요."}, {text:"works",wrongReason:"works(현재)는 지금의 사실만. '과거부터 계속' 의미엔 현재완료가 맞아요."}, {text:"is working",wrongReason:"현재진행은 '지금 하고 있는 중'. since + 기간엔 현재완료가 어울려요."} ], explanation: "since + 과거시점 → 현재완료. has worked." },
          { q: "They _____ the meeting an hour ago.", choices: [ {text:"canceled",correct:true}, {text:"have canceled",wrongReason:"ago는 과거 시점 부사라 현재완료와 함께 쓸 수 없어요."}, {text:"cancel",wrongReason:"cancel은 현재. ago와 맞지 않아요."}, {text:"will cancel",wrongReason:"미래는 ago와 함께 쓸 수 없어요."} ], explanation: "ago(과거 시점) → 단순 과거만 가능. canceled." },
          { q: "We _____ on this project for three months.", choices: [ {text:"have been working",correct:true}, {text:"are working",wrongReason:"현재진행은 지금 이 순간만. for three months처럼 기간을 나타내면 현재완료 진행형이 맞아요."}, {text:"worked",wrongReason:"과거 시제는 과거에만 국한돼요. 현재까지 이어지는 기간은 현재완료 진행형."}, {text:"work",wrongReason:"단순 현재는 습관/사실. 기간 표현엔 어울리지 않아요."} ], explanation: "for + 기간 → 현재완료(진행)형. have been working." },
          { q: "The CEO _____ the new policy last week.", choices: [ {text:"announced",correct:true}, {text:"has announced",wrongReason:"last week는 과거 시점 부사. 현재완료와 함께 쓸 수 없어요."}, {text:"announces",wrongReason:"last week는 과거."}, {text:"is announcing",wrongReason:"현재진행은 지금. last week는 과거예요."} ], explanation: "last week → 단순 과거만 가능. announced." },
          { q: "I _____ this report already. Here it is.", choices: [ {text:"have finished",correct:true}, {text:"finished",wrongReason:"already는 현재완료와 자주 결합해요. 단순 과거도 회화에선 쓰지만, 토익 Part5는 현재완료를 선호해요."}, {text:"finish",wrongReason:"현재는 습관/사실. '이미 끝냈다'는 완료 개념엔 현재완료가 맞아요."}, {text:"am finishing",wrongReason:"현재진행은 '지금 하고 있는 중'. 완료 의미가 없어요."} ], explanation: "already + 완료 → 현재완료 have finished." },
          { q: "The manager _____ currently reviewing the applications.", choices: [ {text:"is",correct:true}, {text:"has",wrongReason:"currently는 '지금'. 현재완료가 아닌 현재진행형이 맞아요."}, {text:"will be",wrongReason:"will be는 미래. currently(지금)와 맞지 않아요."}, {text:"was",wrongReason:"was는 과거. currently는 '지금'이에요."} ], explanation: "currently(지금) + V-ing → 현재진행형. is reviewing." },
          { q: "She _____ to Japan twice for business.", choices: [ {text:"has been",correct:true}, {text:"was",wrongReason:"단순 과거는 특정 시점을 말해요. '경험 횟수(twice)'는 현재완료로 표현해요."}, {text:"is",wrongReason:"현재는 경험의 축적을 표현하지 못해요."}, {text:"will be",wrongReason:"미래는 경험이 아니에요."} ], explanation: "횟수(twice) + 경험 → 현재완료 has been." },
          { q: "The construction _____ in 2019 and took two years.", choices: [ {text:"started",correct:true}, {text:"has started",wrongReason:"in 2019는 과거 시점. 현재완료와 맞지 않아요."}, {text:"starts",wrongReason:"in 2019는 과거."}, {text:"will start",wrongReason:"in 2019는 이미 지난 시점이에요."} ], explanation: "in 2019 → 단순 과거 started." },
          { q: "I _____ just received the email from headquarters.", choices: [ {text:"have",correct:true}, {text:"had",wrongReason:"had는 과거완료로 과거의 더 이전. 'just + 방금 받았다'는 현재완료 have received."}, {text:"did",wrongReason:"do동사는 이 자리에 쓸 수 없어요. have p.p. 형태가 필요해요."}, {text:"am",wrongReason:"am은 be동사로 p.p.와 함께 쓰면 수동형. 여기선 능동 현재완료예요."} ], explanation: "just + 방금 완료 → have received." },
          { q: "The team _____ the presentation when the client arrived.", choices: [ {text:"was preparing",correct:true}, {text:"is preparing",wrongReason:"is preparing은 현재진행. when the client arrived(과거)와 시제가 맞지 않아요."}, {text:"prepares",wrongReason:"prepares는 현재. 과거 시점 문맥과 어긋나요."}, {text:"has prepared",wrongReason:"현재완료는 과거 시점 동작 중임을 표현하지 못해요. 과거진행이 맞아요."} ], explanation: "과거 어느 시점에 진행 중 → 과거진행 was preparing." }
        ]
      },
      hard: {
        name: "상 · 900 목표",
        summary: "미래완료, 과거완료, 시간/조건 부사절의 현재 시제",
        rules: [
          { title: "과거완료 (had + p.p.)", body: "과거 어느 시점보다 더 이전에 일어난 일. 과거의 과거.", example: "By the time we arrived, the meeting <u>had already started</u>.", translation: "우리가 도착했을 때 회의가 이미 시작되어 있었다." },
          { title: "미래완료 (will have + p.p.)", body: "미래 특정 시점까지 완료될 일. by + 미래시점과 자주 결합.", example: "By next month, she <u>will have worked</u> here for 20 years.", translation: "다음 달이면 그녀는 여기서 20년 일한 것이 된다." },
          { title: "시간/조건 부사절의 현재 시제", body: "when, if, until, before, as soon as가 이끄는 부사절에서는 미래를 현재 시제로 표현.", example: "I will call you when I <u>arrive</u>. (NOT will arrive)", translation: "도착하면 전화할게요." }
        ],
        questions: [
          { q: "By the time the manager arrived, the employees _____ already left.", choices: [ {text:"had",correct:true}, {text:"have",wrongReason:"현재완료는 '지금까지'. 과거 시점(arrived)보다 더 전엔 과거완료(had p.p.)가 맞아요."}, {text:"were",wrongReason:"were left는 수동형. '떠났다'는 능동이고, 과거보다 전의 행위는 had p.p."}, {text:"will have",wrongReason:"미래완료는 미래 시점까지 완료. 과거 문장과 맞지 않아요."} ], explanation: "By the time + 과거 → 그보다 더 이전은 과거완료 had left." },
          { q: "By next June, she _____ for our company for ten years.", choices: [ {text:"will have worked",correct:true}, {text:"has worked",wrongReason:"현재완료는 지금까지. '미래 특정 시점까지'는 미래완료가 필요해요."}, {text:"worked",wrongReason:"단순 과거는 이미 끝난 일. by next June(미래)과 맞지 않아요."}, {text:"works",wrongReason:"현재는 습관. 미래완료 맥락과 달라요."} ], explanation: "by + 미래시점 + for 기간 → 미래완료 will have worked." },
          { q: "We will start the meeting as soon as everyone _____.", choices: [ {text:"arrives",correct:true}, {text:"will arrive",wrongReason:"시간 부사절(as soon as)에서는 미래를 현재 시제로 표현해요. will arrive는 쓸 수 없어요."}, {text:"arrived",wrongReason:"과거 시제는 문맥상 맞지 않아요."}, {text:"has arrived",wrongReason:"현재완료도 가능한 경우가 있지만 as soon as 뒤엔 단순 현재가 일반적이에요."} ], explanation: "시간/조건 부사절 → 미래 대신 현재. arrives." },
          { q: "She had never visited Europe before she _____ there on business.", choices: [ {text:"went",correct:true}, {text:"goes",wrongReason:"현재 시제는 과거 맥락과 맞지 않아요. had visited(과거완료)와 대응되는 단순 과거가 필요해요."}, {text:"has gone",wrongReason:"현재완료는 '지금까지'. 과거 문장 구조와 맞지 않아요."}, {text:"had gone",wrongReason:"had gone은 과거완료. 이미 주절이 had visited로 과거완료이므로 부사절엔 단순 과거가 맞아요."} ], explanation: "과거완료(had p.p.) ↔ 단순 과거 시제 대응." },
          { q: "The report _____ by the time you come back from lunch.", choices: [ {text:"will have been completed",correct:true}, {text:"has been completed",wrongReason:"현재완료는 '지금까지'. 미래 특정 시점까지 완료는 미래완료 수동이 맞아요."}, {text:"was completed",wrongReason:"과거 시제는 미래 문맥과 맞지 않아요."}, {text:"is completed",wrongReason:"단순 현재 수동은 습관/사실. 미래 완료 맥락엔 미래완료 수동이 자연스러워요."} ], explanation: "by the time + 미래 → 미래완료. 보고서는 완료되는 대상이므로 수동." },
          { q: "Please call me if you _____ any questions about the document.", choices: [ {text:"have",correct:true}, {text:"will have",wrongReason:"조건 부사절(if)에서는 미래를 현재로 표현해요."}, {text:"had",wrongReason:"과거는 과거 사실이나 가정법에 쓰여요. 실제 조건은 현재."}, {text:"are having",wrongReason:"진행형은 일시적 상황. 상태 동사 have는 보통 진행형을 쓰지 않아요."} ], explanation: "if 조건절 → 현재 시제 have." },
          { q: "She _____ in Paris for three years before moving to London.", choices: [ {text:"had lived",correct:true}, {text:"has lived",wrongReason:"현재완료는 지금까지. 과거 시점 'before moving'보다 이전의 기간은 과거완료."}, {text:"lived",wrongReason:"단순 과거도 가능하지만 'before moving'과의 시간 순서를 분명히 하려면 과거완료가 정확해요."}, {text:"lives",wrongReason:"현재 시제는 과거 맥락과 맞지 않아요."} ], explanation: "과거 시점보다 더 이전의 지속 → 과거완료 had lived." },
          { q: "By the end of this year, our sales _____ by 20%.", choices: [ {text:"will have increased",correct:true}, {text:"increase",wrongReason:"단순 현재는 습관. 미래 특정 시점까지 완료된 결과는 미래완료."}, {text:"will increase",wrongReason:"단순 미래는 '언젠가 증가할 것'. 특정 시점까지 누적된 결과는 미래완료."}, {text:"have increased",wrongReason:"현재완료는 지금까지. '연말까지'의 미래 시점엔 미래완료."} ], explanation: "By the end of + 미래 → 미래완료 will have increased." },
          { q: "When you _____ the package, please sign the receipt.", choices: [ {text:"receive",correct:true}, {text:"will receive",wrongReason:"시간 부사절(when)에서는 미래를 현재로 써요."}, {text:"received",wrongReason:"과거 시제는 실제 상황과 맞지 않아요."}, {text:"are receiving",wrongReason:"진행형은 의미상 어색해요. 단순 현재 동작이 맞아요."} ], explanation: "시간 부사절의 현재 시제. receive." },
          { q: "The client had already signed the contract when we _____ the error.", choices: [ {text:"noticed",correct:true}, {text:"notice",wrongReason:"현재 시제는 과거 문맥과 맞지 않아요."}, {text:"had noticed",wrongReason:"주절이 had signed(과거완료)이고 부사절은 단순 과거로 대응해요."}, {text:"have noticed",wrongReason:"현재완료는 과거 시간 문맥과 결합하지 않아요."} ], explanation: "과거완료(주절) ↔ 단순 과거(부사절) 대응." }
        ]
      }
    }
  },

  // ====================== 3. 수일치 ======================
  {
    id: "agreement",
    icon: "⚖️",
    title: "수일치",
    description: "주어-동사 수 맞추기",
    levels: {
      easy: {
        name: "하 · 기본",
        summary: "단수/복수 주어와 동사",
        rules: [
          { title: "단수 주어 + 단수 동사", body: "3인칭 단수 주어는 현재 시제에서 동사에 -s를 붙여요.", example: "The report <u>contains</u> detailed information.", translation: "그 보고서는 상세한 정보를 담고 있다." },
          { title: "복수 주어 + 복수 동사", body: "복수 주어에는 동사 원형.", example: "The employees <u>work</u> from 9 to 6.", translation: "직원들은 9시부터 6시까지 일한다." },
          { title: "There is/are + 명사", body: "There 뒤의 실제 주어(뒤 명사)에 맞춰 is/are 결정.", example: "There <u>are</u> several options available.", translation: "몇 가지 선택지가 있다." }
        ],
        questions: [
          { q: "The manager _____ a meeting every Monday morning.", choices: [ {text:"holds",correct:true}, {text:"hold",wrongReason:"hold는 복수 동사. 주어 The manager가 3인칭 단수라 holds가 필요해요."}, {text:"holding",wrongReason:"holding 단독은 동사가 될 수 없어요."}, {text:"are holding",wrongReason:"are는 복수 동사. 주어는 단수예요."} ], explanation: "단수 주어 + 단수 동사. holds." },
          { q: "Our employees _____ the new system very useful.", choices: [ {text:"find",correct:true}, {text:"finds",wrongReason:"finds는 단수 동사. 주어 employees는 복수예요."}, {text:"finding",wrongReason:"finding 단독은 동사 역할을 못 해요."}, {text:"has found",wrongReason:"has는 단수. 복수 주어엔 have가 맞아요."} ], explanation: "복수 주어(employees) + 복수 동사 find." },
          { q: "There _____ several reasons for the delay.", choices: [ {text:"are",correct:true}, {text:"is",wrongReason:"뒤에 오는 진짜 주어(several reasons)가 복수이므로 are."}, {text:"was",wrongReason:"was는 단수 과거."}, {text:"has",wrongReason:"has는 단수 동사. 복수 주어엔 have가 맞아요."} ], explanation: "There 구문은 뒤 명사에 수일치. reasons 복수 → are." },
          { q: "The CEO, along with her assistants, _____ the conference next week.", choices: [ {text:"attends",correct:true}, {text:"attend",wrongReason:"along with~는 수식어구로 주어 수에 영향을 주지 않아요. 주어는 The CEO(단수)예요."}, {text:"attending",wrongReason:"동사 자리에 단독 V-ing는 올 수 없어요."}, {text:"are attending",wrongReason:"are는 복수. 주어는 단수 The CEO."} ], explanation: "along with 구문은 주어에 영향 없음. 단수 동사 attends." },
          { q: "The list of qualified candidates _____ very long.", choices: [ {text:"is",correct:true}, {text:"are",wrongReason:"주어는 The list(단수)예요. of qualified candidates는 수식어라 수에 영향 없어요."}, {text:"were",wrongReason:"were는 복수 과거. 주어가 단수고 문맥상 현재 시제예요."}, {text:"have",wrongReason:"have는 본동사로 쓸 때 '가지다'. 문맥상 be동사가 맞아요."} ], explanation: "주어 the list(단수). of + 명사는 수식어구." },
          { q: "Each of the applicants _____ required to submit a resume.", choices: [ {text:"is",correct:true}, {text:"are",wrongReason:"Each는 단수 취급. of applicants는 수식어."}, {text:"were",wrongReason:"Each는 단수. were는 복수."}, {text:"have",wrongReason:"Each는 단수. 수동태(be + p.p.) 구조가 필요해요."} ], explanation: "Each of + 복수명사 → 단수 취급. is required." },
          { q: "My colleagues _____ to the conference every year.", choices: [ {text:"go",correct:true}, {text:"goes",wrongReason:"goes는 단수. 복수 주어 colleagues엔 go."}, {text:"going",wrongReason:"단독 V-ing는 동사 역할을 못 해요."}, {text:"is going",wrongReason:"is는 단수. 복수 주어엔 are going."} ], explanation: "복수 주어 colleagues + 복수 동사 go." },
          { q: "The information on those websites _____ helpful.", choices: [ {text:"is",correct:true}, {text:"are",wrongReason:"information은 불가산 단수. 수식어(on those websites)에 영향받지 않아요."}, {text:"were",wrongReason:"불가산 명사는 단수 취급. is가 맞아요."}, {text:"have",wrongReason:"문맥상 be동사가 필요해요."} ], explanation: "information(불가산 단수) → is." },
          { q: "There _____ a package for you at the front desk.", choices: [ {text:"is",correct:true}, {text:"are",wrongReason:"뒤의 명사 a package가 단수이므로 is."}, {text:"were",wrongReason:"were는 복수 과거. 문맥은 현재 단수."}, {text:"have",wrongReason:"There have는 쓰이지 않아요. be동사가 맞아요."} ], explanation: "There + 단수 명사 → is." },
          { q: "The number of applications _____ increasing every year.", choices: [ {text:"is",correct:true}, {text:"are",wrongReason:"The number of ~는 '~의 수'로 단수 취급. (a number of는 '많은~'으로 복수 취급)"}, {text:"were",wrongReason:"The number는 단수. 문맥은 현재."}, {text:"have",wrongReason:"진행형(be + V-ing)이 필요해요. be동사가 맞아요."} ], explanation: "The number of + 복수 → 단수 취급. is increasing." }
        ]
      },
      medium: {
        name: "중 · 800점대",
        summary: "수식어구로 멀어진 주어, there 구문 함정",
        rules: [
          { title: "주어를 수식하는 구/절에 혼동 주의", body: "주어와 동사 사이의 전치사구, 관계사절은 동사 수에 영향을 주지 않아요.", example: "The books <u>on the shelf</u> <b>are</b> mine.", translation: "선반 위의 책들은 내 것이다." },
          { title: "A and B vs A or B", body: "and로 연결된 주어는 보통 복수, or로 연결된 주어는 가까운 쪽에 맞춰요.", example: "Either the manager or the employees <u>are</u> responsible.", translation: "매니저 또는 직원들이 책임진다." },
          { title: "부분표현: some/most/half/all + of + N", body: "of 뒤 명사의 수에 맞춰요. (단수면 단수, 복수면 복수)", example: "Most of the information <u>is</u> correct.", translation: "대부분의 정보는 정확하다." }
        ],
        questions: [
          { q: "The reports on the manager's desk _____ ready for review.", choices: [ {text:"are",correct:true}, {text:"is",wrongReason:"주어는 The reports(복수)예요. on the manager's desk는 수식어구."}, {text:"was",wrongReason:"was는 단수 과거. 복수 주어 + 현재."}, {text:"has",wrongReason:"복수 주어엔 have가 맞아요. 단, 문맥은 be동사."} ], explanation: "실제 주어는 reports(복수). 수식어구 무시." },
          { q: "Either the CEO or the board members _____ to attend the meeting.", choices: [ {text:"have",correct:true}, {text:"has",wrongReason:"or 구문은 가까운 주어에 일치. 가까운 쪽이 board members(복수)라 have."}, {text:"is",wrongReason:"is는 단수. 가까운 주어가 복수예요."}, {text:"was",wrongReason:"was는 단수 과거. 가까운 주어가 복수."} ], explanation: "or 주어 → 가까운 쪽에 맞춤. board members(복수) → have." },
          { q: "Most of the staff _____ satisfied with the new policy.", choices: [ {text:"are",correct:true}, {text:"is",wrongReason:"staff는 집합 명사로 구성원을 의미할 땐 복수 취급. Most of + 복수 → 복수."}, {text:"was",wrongReason:"was는 단수 과거. 복수 주어예요."}, {text:"has",wrongReason:"be동사가 필요해요."} ], explanation: "Most of + 복수명사 → 복수 동사." },
          { q: "Neither the supervisor nor the interns _____ the password.", choices: [ {text:"know",correct:true}, {text:"knows",wrongReason:"neither~nor 구문은 가까운 주어에 맞춤. 가까운 interns(복수) → know."}, {text:"is knowing",wrongReason:"know는 상태 동사라 진행형을 잘 쓰지 않아요."}, {text:"has known",wrongReason:"has는 단수. 가까운 주어가 복수예요."} ], explanation: "neither A nor B → 가까운 쪽에 수일치. interns 복수 → know." },
          { q: "Most of the budget _____ already been spent.", choices: [ {text:"has",correct:true}, {text:"have",wrongReason:"Most of + 불가산 단수(budget) → 단수 동사."}, {text:"are",wrongReason:"be동사만으론 'been spent' 수동 완료형이 안 돼요. has/have가 필요해요."}, {text:"were",wrongReason:"were는 복수 과거. budget은 불가산 단수."} ], explanation: "Most of + 단수/불가산 → 단수 동사 has." },
          { q: "The CEO and the founder _____ the keynote together.", choices: [ {text:"deliver",correct:true}, {text:"delivers",wrongReason:"A and B 주어는 복수. deliver가 맞아요."}, {text:"is delivering",wrongReason:"is는 단수. 복수 주어예요."}, {text:"delivering",wrongReason:"단독 V-ing는 동사 역할을 못 해요."} ], explanation: "A and B → 복수 주어 → deliver." },
          { q: "A number of visitors _____ attended the product launch.", choices: [ {text:"have",correct:true}, {text:"has",wrongReason:"A number of ~는 '많은 ~'으로 복수 취급. have가 맞아요."}, {text:"was",wrongReason:"was는 단수. A number of는 복수."}, {text:"is",wrongReason:"is는 단수. 문맥상 복수 완료형 have attended가 필요해요."} ], explanation: "A number of + 복수 → 복수 취급. have attended." },
          { q: "Some of the documents _____ missing from the file.", choices: [ {text:"are",correct:true}, {text:"is",wrongReason:"Some of + 복수명사 → 복수 동사."}, {text:"was",wrongReason:"was는 단수 과거. 복수 주어예요."}, {text:"has",wrongReason:"be동사가 필요해요."} ], explanation: "Some of + 복수 → 복수 동사 are." },
          { q: "Every employee in the departments _____ required to attend.", choices: [ {text:"is",correct:true}, {text:"are",wrongReason:"Every + 단수 명사는 항상 단수 취급. 수식어구(in the departments)에 영향받지 않아요."}, {text:"were",wrongReason:"Every는 단수."}, {text:"have",wrongReason:"Every는 단수. 수동태(be p.p.) 구조가 필요해요."} ], explanation: "Every + 단수 → 단수 동사 is." },
          { q: "Half of the applicants _____ already been interviewed.", choices: [ {text:"have",correct:true}, {text:"has",wrongReason:"Half of + 복수명사(applicants) → 복수 동사."}, {text:"is",wrongReason:"is는 단수. 뒤가 복수 명사예요."}, {text:"was",wrongReason:"was는 단수 과거."} ], explanation: "Half of + 복수 → 복수 동사 have." }
        ]
      },
      hard: {
        name: "상 · 900 목표",
        summary: "단/복수 집합명사, 시간/돈 단위, 관계사절 수일치",
        rules: [
          { title: "시간 · 거리 · 금액 · 무게", body: "단일 개념으로 쓰이면 단수 취급.", example: "Ten dollars <u>is</u> not enough for dinner.", translation: "10달러는 저녁으로 충분하지 않다." },
          { title: "관계사절의 동사", body: "관계사(who/which/that) 뒤 동사는 선행사(수식받는 명사)의 수에 일치.", example: "The employees who <u>work</u> overtime get bonuses.", translation: "야근하는 직원들은 보너스를 받는다." },
          { title: "the + 형용사 (사람 복수)", body: "the rich, the poor, the unemployed — 복수 취급.", example: "The unemployed <u>face</u> many challenges.", translation: "실업자들은 많은 어려움을 겪는다." }
        ],
        questions: [
          { q: "Twenty years _____ a long time to work at one company.", choices: [ {text:"is",correct:true}, {text:"are",wrongReason:"기간을 하나의 단위로 볼 때는 단수 취급. 20년이라는 '한 덩어리'."}, {text:"were",wrongReason:"기간은 단수 개념. was/were 중 is가 맞아요."}, {text:"have",wrongReason:"문맥상 be동사가 필요해요."} ], explanation: "시간/금액은 단일 개념 → 단수 동사." },
          { q: "The candidates who _____ interviewed yesterday all passed.", choices: [ {text:"were",correct:true}, {text:"was",wrongReason:"선행사 candidates(복수)에 수일치. 관계사 who 뒤 동사는 복수."}, {text:"is",wrongReason:"yesterday는 과거. 복수 과거 were가 맞아요."}, {text:"has been",wrongReason:"has는 단수. 선행사가 복수이고 시점이 과거예요."} ], explanation: "관계사절 동사는 선행사에 수일치. candidates 복수 → were." },
          { q: "The rich _____ different problems from the poor.", choices: [ {text:"have",correct:true}, {text:"has",wrongReason:"the + 형용사는 복수 취급(the rich = 부유한 사람들). have가 맞아요."}, {text:"is",wrongReason:"the + 형용사는 복수."}, {text:"was",wrongReason:"the + 형용사는 복수 취급."} ], explanation: "the + 형용사(사람 복수) → 복수 동사." },
          { q: "The manager is one of the employees who _____ overtime regularly.", choices: [ {text:"work",correct:true}, {text:"works",wrongReason:"who의 선행사는 employees(복수)예요. one of the + 복수 뒤 관계사절은 복수 취급."}, {text:"working",wrongReason:"단독 V-ing는 동사 역할을 못 해요."}, {text:"has worked",wrongReason:"has는 단수. 선행사가 복수예요."} ], explanation: "one of the 복수 + who + 복수 동사." },
          { q: "Five million dollars _____ been allocated to the research.", choices: [ {text:"has",correct:true}, {text:"have",wrongReason:"금액은 단일 개념. 5백만 달러는 하나의 총액으로 단수 취급."}, {text:"is",wrongReason:"is는 'been + p.p.'와 결합하지 않아요. 완료 수동은 has/have been p.p."}, {text:"were",wrongReason:"금액은 단수."} ], explanation: "금액 = 단수 개념 → has been allocated." },
          { q: "Mathematics _____ a required subject for business majors.", choices: [ {text:"is",correct:true}, {text:"are",wrongReason:"-s로 끝나는 학문명(mathematics, physics, economics, statistics)은 단수 취급."}, {text:"were",wrongReason:"학문명은 단수."}, {text:"have",wrongReason:"학문명은 단수. be동사가 필요해요."} ], explanation: "학문명(-ics)은 형태가 복수여도 단수." },
          { q: "The committee _____ on a new proposal this morning.", choices: [ {text:"is voting",correct:true}, {text:"are voting",wrongReason:"committee는 집합명사. 하나의 단위로 볼 땐 단수 취급이에요."}, {text:"vote",wrongReason:"vote는 복수. 집합명사는 단수 취급이 일반적이에요."}, {text:"were voting",wrongReason:"this morning은 보통 현재/현재진행. was/were는 과거."} ], explanation: "committee(집합명사)는 보통 단수 취급." },
          { q: "Neither of the applicants _____ the required qualifications.", choices: [ {text:"has",correct:true}, {text:"have",wrongReason:"neither는 단수 취급. of + 복수명사에 영향받지 않아요."}, {text:"are",wrongReason:"neither는 단수. of 뒤 명사가 복수여도 수일치는 neither 기준."}, {text:"were",wrongReason:"neither는 단수."} ], explanation: "neither of + 복수명사 → 단수 동사." },
          { q: "The staff members who _____ in marketing receive additional training.", choices: [ {text:"work",correct:true}, {text:"works",wrongReason:"선행사가 members(복수)이므로 who 뒤는 복수 동사."}, {text:"working",wrongReason:"동사 자리에 단독 V-ing는 불가능해요."}, {text:"is working",wrongReason:"is는 단수. 선행사가 복수예요."} ], explanation: "관계사절 동사는 선행사 수에 일치. members 복수 → work." },
          { q: "Economics _____ a fascinating field for business students.", choices: [ {text:"is",correct:true}, {text:"are",wrongReason:"-ics 학문명은 단수 취급."}, {text:"were",wrongReason:"학문명은 단수이고 현재 사실은 현재 시제."}, {text:"have",wrongReason:"be동사가 필요해요."} ], explanation: "Economics(학문명) → 단수 동사 is." }
        ]
      }
    }
  },

  // ====================== 4. 대명사 ======================
  {
    id: "pronoun",
    icon: "👤",
    title: "대명사",
    description: "주격 · 목적격 · 소유격 · 재귀",
    levels: {
      easy: {
        name: "하 · 기본",
        summary: "인칭 대명사 격 구분",
        rules: [
          { title: "주격 vs 목적격", body: "주어 자리엔 주격(I/he/she/we/they), 동사·전치사 목적어엔 목적격(me/him/her/us/them).", example: "The manager thanked <u>them</u> for their hard work.", translation: "매니저는 그들에게 노고를 감사했다." },
          { title: "소유격 + 명사", body: "소유격(my/your/his/her/our/their)은 뒤에 명사가 반드시 와요.", example: "Please send me <u>your</u> resume.", translation: "이력서를 저에게 보내주세요." },
          { title: "소유대명사", body: "mine/yours/his/hers/ours/theirs — 명사 없이 '~의 것' 의미로 단독 사용.", example: "This office is <u>mine</u>.", translation: "이 사무실은 내 것이다." }
        ],
        questions: [
          { q: "The supervisor asked _____ to submit the report by noon.", choices: [ {text:"me",correct:true}, {text:"I",wrongReason:"I는 주격. 동사 asked의 목적어 자리엔 목적격이 필요해요."}, {text:"my",wrongReason:"my는 소유격으로 뒤에 명사가 와야 해요."}, {text:"mine",wrongReason:"mine은 소유대명사(내 것). 동사의 목적어로 쓰면 뜻이 어색해요."} ], explanation: "ask + 목적어 → 목적격 me." },
          { q: "_____ office is located on the third floor.", choices: [ {text:"Our",correct:true}, {text:"We",wrongReason:"We는 주격. 명사 office를 수식하려면 소유격이 필요해요."}, {text:"Us",wrongReason:"Us는 목적격. 명사 앞엔 소유격이 와요."}, {text:"Ours",wrongReason:"Ours는 소유대명사로 단독 사용. 뒤에 명사가 없어야 해요."} ], explanation: "소유격 + 명사(office) → Our." },
          { q: "This laptop belongs to _____.", choices: [ {text:"her",correct:true}, {text:"she",wrongReason:"she는 주격. 전치사 to의 목적어엔 목적격이 필요해요."}, {text:"hers",wrongReason:"hers도 가능하지만 '그녀의 것'이라는 의미가 추가돼요. belongs to + 사람(목적격)이 기본 구조예요."}, {text:"herself",wrongReason:"herself는 재귀대명사로 주어와 같은 대상을 가리킬 때 써요."} ], explanation: "전치사 to + 목적격 her." },
          { q: "The manager and _____ will attend the conference.", choices: [ {text:"I",correct:true}, {text:"me",wrongReason:"me는 목적격. 문장의 주어 자리(and로 연결)에는 주격 I가 맞아요."}, {text:"my",wrongReason:"my는 소유격. 주어 자리에 올 수 없어요."}, {text:"mine",wrongReason:"mine은 소유대명사. 사람 주어로 쓰이지 않아요."} ], explanation: "주어 자리 → 주격 I. (and로 연결되어도 격은 동일)" },
          { q: "They gave _____ a bonus for meeting the deadline.", choices: [ {text:"us",correct:true}, {text:"we",wrongReason:"we는 주격. gave + 간접목적어 자리엔 목적격이 필요해요."}, {text:"our",wrongReason:"our는 소유격 + 명사. 여기선 명사가 없어요."}, {text:"ours",wrongReason:"ours는 '우리의 것'. 사람 목적어로는 부적합해요."} ], explanation: "give + 목적격 + 명사. us가 정답." },
          { q: "Is this pen _____ or mine?", choices: [ {text:"yours",correct:true}, {text:"you",wrongReason:"you는 주격/목적격으로 단독 사물 소유를 나타내지 못해요."}, {text:"your",wrongReason:"your는 소유격으로 뒤에 명사가 와야 해요."}, {text:"yourself",wrongReason:"yourself는 재귀대명사. 소유를 나타내지 않아요."} ], explanation: "단독으로 쓰이는 '너의 것' → yours." },
          { q: "The committee made _____ decision after long discussion.", choices: [ {text:"its",correct:true}, {text:"it",wrongReason:"it은 주격/목적격. 명사 decision을 수식하려면 소유격이 필요해요."}, {text:"it's",wrongReason:"it's는 it is의 축약형이에요. 소유격은 its(아포스트로피 없음)."}, {text:"itself",wrongReason:"itself는 재귀대명사. 소유를 나타내지 않아요."} ], explanation: "소유격 its + 명사 decision. it's가 아니라 its!" },
          { q: "Please hand _____ your business card.", choices: [ {text:"him",correct:true}, {text:"he",wrongReason:"he는 주격. hand + 간접목적어 자리엔 목적격."}, {text:"his",wrongReason:"his는 소유격. 뒤에 명사가 와야 하지만 여기선 your business card가 목적어로 이미 있어요."}, {text:"himself",wrongReason:"himself는 재귀. 주어가 아닌 일반 목적어엔 맞지 않아요."} ], explanation: "hand + 간접목적어 + 직접목적어. him이 정답." },
          { q: "The decision is _____ to make, not ours.", choices: [ {text:"theirs",correct:true}, {text:"them",wrongReason:"them은 목적격. '그들의 것'이라는 소유 의미가 필요해요."}, {text:"their",wrongReason:"their는 소유격 + 명사. 여기선 명사 없이 단독 사용이 필요해요."}, {text:"they",wrongReason:"they는 주격. '그들의 것'을 나타내려면 소유대명사가 필요해요."} ], explanation: "소유대명사 theirs. 뒤 not ours와 대비되는 구조." },
          { q: "_____ department is responsible for processing invoices.", choices: [ {text:"Their",correct:true}, {text:"They",wrongReason:"They는 주격. 명사 department를 수식하려면 소유격."}, {text:"Them",wrongReason:"Them은 목적격. 명사 앞엔 소유격."}, {text:"Theirs",wrongReason:"Theirs는 소유대명사(단독). 뒤에 명사가 있으면 Their가 필요해요."} ], explanation: "소유격 + 명사 → Their department." }
        ]
      },
      medium: {
        name: "중 · 800점대",
        summary: "재귀대명사, that/those 대용",
        rules: [
          { title: "재귀대명사 (-self/-selves)", body: "주어와 목적어가 같은 대상일 때, 또는 강조할 때 사용.", example: "She trained <u>herself</u> to speak in public.", translation: "그녀는 대중 연설을 스스로 훈련했다." },
          { title: "by oneself / on one's own", body: "'혼자서, 스스로'의 의미. 재귀대명사의 관용적 쓰임.", example: "He completed the project <u>by himself</u>.", translation: "그는 그 프로젝트를 혼자 완수했다." },
          { title: "that/those 대용", body: "앞서 언급한 명사의 반복을 피해 that(단수), those(복수)를 써요. 주로 of와 함께 비교에 쓰여요.", example: "The profits of this year are higher than <u>those</u> of last year.", translation: "올해의 이익이 작년 이익보다 높다." }
        ],
        questions: [
          { q: "The new intern taught _____ how to use the software.", choices: [ {text:"himself",correct:true}, {text:"him",wrongReason:"주어(The new intern)와 동일 인물이므로 재귀대명사가 필요해요. him은 다른 사람을 가리켜요."}, {text:"his",wrongReason:"his는 소유격. 동사 taught의 목적어 자리엔 재귀/목적격이 필요해요."}, {text:"he",wrongReason:"he는 주격. 목적어 자리엔 올 수 없어요."} ], explanation: "주어와 목적어가 같은 인물 → 재귀 himself." },
          { q: "The sales this quarter are higher than _____ of the previous quarter.", choices: [ {text:"those",correct:true}, {text:"that",wrongReason:"비교 대상 sales가 복수이므로 those."}, {text:"them",wrongReason:"them은 목적격 대명사. of와 결합해 비교하는 자리엔 that/those."}, {text:"they",wrongReason:"they는 주격. 비교의 of 앞 자리에 올 수 없어요."} ], explanation: "복수 명사 sales 반복 대체 → those." },
          { q: "She completed the difficult report all by _____.", choices: [ {text:"herself",correct:true}, {text:"her",wrongReason:"by + 재귀대명사 = 혼자서. 관용 표현이에요."}, {text:"hers",wrongReason:"hers는 소유대명사. 관용 표현은 by herself."}, {text:"she",wrongReason:"by 뒤엔 목적격/재귀가 와요."} ], explanation: "by oneself(혼자서) 관용 표현 → herself." },
          { q: "The cost of living in Seoul is higher than _____ of Busan.", choices: [ {text:"that",correct:true}, {text:"those",wrongReason:"비교 대상 cost가 단수 불가산이므로 that."}, {text:"it",wrongReason:"it은 일반 대명사. 비교 구조의 반복 대체엔 that/those."}, {text:"one",wrongReason:"one은 가산 명사를 대체할 때 써요. cost는 여기선 불가산 단수."} ], explanation: "단수 명사 cost 반복 대체 → that." },
          { q: "Please make _____ comfortable while you wait.", choices: [ {text:"yourself",correct:true}, {text:"you",wrongReason:"you 단독은 주어/목적어. 'make + 재귀대명사 + 보어'가 '편하게 있어라'는 관용 표현이에요."}, {text:"your",wrongReason:"your는 소유격. 명사가 뒤에 와야 해요."}, {text:"yours",wrongReason:"yours는 소유대명사(너의 것). 의미가 맞지 않아요."} ], explanation: "make oneself comfortable = 편안히 있다. yourself." },
          { q: "The team members helped _____ to refreshments during the break.", choices: [ {text:"themselves",correct:true}, {text:"them",wrongReason:"주어 The team members와 목적어가 같은 사람이므로 재귀대명사."}, {text:"their",wrongReason:"their는 소유격. 동사의 목적어 자리엔 재귀/목적격."}, {text:"theirs",wrongReason:"theirs는 소유대명사. 동사 help 다음에 오기엔 어색해요."} ], explanation: "help oneself to ~ = 마음껏 먹다/쓰다. themselves." },
          { q: "The quality of our products is better than _____ of our competitors.", choices: [ {text:"that",correct:true}, {text:"those",wrongReason:"비교 대상 quality는 단수 불가산."}, {text:"them",wrongReason:"them은 일반 목적격. 비교 반복 대체엔 that."}, {text:"these",wrongReason:"these는 '이것들'. 비교 대체엔 that/those."} ], explanation:"quality(단수 불가산) 반복 대체 → that." },
          { q: "She prides _____ on her attention to detail.", choices: [ {text:"herself",correct:true}, {text:"her",wrongReason:"pride oneself on ~ = ~을 자랑스러워하다. 재귀가 필요해요."}, {text:"hers",wrongReason:"hers는 소유대명사. pride 동사 뒤엔 재귀."}, {text:"she",wrongReason:"she는 주격. 동사 목적어 자리엔 재귀/목적격."} ], explanation: "pride oneself on = ~을 자부하다. herself." },
          { q: "The files on this desk are _____ than the ones on the other desk.", choices: [ {text:"newer",correct:true}, {text:"new",wrongReason:"비교 구조(than)가 있으므로 비교급이 필요해요. 대명사 문제가 아닌 비교급."}, {text:"newest",wrongReason:"최상급은 than과 쓰이지 않아요."}, {text:"most new",wrongReason:"most new는 비문. new의 비교급은 newer."} ], explanation: "(혼합형 함정) than과 어울리는 건 비교급 newer." },
          { q: "The CEO addressed the audience _____, without a teleprompter.", choices: [ {text:"himself",correct:true}, {text:"him",wrongReason:"him은 목적격. 주어를 강조하는 동격 재귀가 필요해요."}, {text:"his",wrongReason:"his는 소유격."}, {text:"he",wrongReason:"he는 주격. 강조 재귀는 -self 형태."} ], explanation: "강조 재귀 용법. CEO 본인이 직접 → himself." }
        ]
      },
      hard: {
        name: "상 · 900 목표",
        summary: "one/another/other/others, it vs there",
        rules: [
          { title: "one / another / others / the others", body: "one(여럿 중 하나), another(또 다른 하나), others(여러 개), the others(나머지 전부).", example: "Some prefer coffee; <u>others</u> prefer tea.", translation: "어떤 사람은 커피를, 다른 사람들은 차를 선호한다." },
          { title: "it vs there (가주어/유도부사)", body: "it은 가주어(It is + 형용사 + to V), there는 '~이 있다' 존재 구문.", example: "<u>It</u> is important to meet deadlines.", translation: "마감을 지키는 것이 중요하다." },
          { title: "each other vs one another", body: "each other(둘 사이), one another(셋 이상) — 현대 영어에선 호환 사용되기도 해요.", example: "The team members support <u>one another</u>.", translation: "팀원들은 서로를 지지한다." }
        ],
        questions: [
          { q: "I have three pens — one is blue, another is red, and _____ is black.", choices: [ {text:"the other",correct:true}, {text:"another",wrongReason:"another는 '또 다른 하나'이지만 정해지지 않은 것. 3개 중 둘을 제외한 '나머지 하나'는 the other."}, {text:"others",wrongReason:"others는 복수. '나머지 하나'는 단수 the other."}, {text:"other",wrongReason:"other는 형용사로 단독 사용이 안 돼요. the other 또는 others."} ], explanation: "3개 중 마지막 하나 → the other." },
          { q: "_____ is necessary for us to review the contract before signing.", choices: [ {text:"It",correct:true}, {text:"There",wrongReason:"There는 '~이 있다' 구문에 써요. 가주어 역할엔 It을 사용해요."}, {text:"This",wrongReason:"This는 일반 지시대명사. It is + 형용사 + to V 구조가 관용적이에요."}, {text:"That",wrongReason:"That도 가능한 경우가 있지만 가주어 관용 구조엔 It이 일반적이에요."} ], explanation: "It is + 형용사 + to 부정사 → 가주어 It." },
          { q: "The two managers congratulated _____ on the successful project.", choices: [ {text:"each other",correct:true}, {text:"themselves",wrongReason:"themselves는 '각자 자신'. 서로를 축하한다면 each other/one another."}, {text:"one",wrongReason:"one 단독은 하나. 상호 축하는 each other."}, {text:"another",wrongReason:"another는 '또 다른 하나'. 상호 관계엔 each other."} ], explanation: "둘 사이의 상호 관계 → each other." },
          { q: "Some employees prefer working from home; _____ prefer the office.", choices: [ {text:"others",correct:true}, {text:"the others",wrongReason:"the others는 '나머지 전부'로 정해진 집단. 여기선 '또 다른 일부'라 others가 자연스러워요."}, {text:"another",wrongReason:"another는 단수. 주어가 복수 동사(prefer)와 호응하려면 복수."}, {text:"one",wrongReason:"one은 단수. 복수 동사와 맞지 않아요."} ], explanation: "Some ~; others ~ (어떤 사람은 ~; 다른 사람들은 ~)." },
          { q: "_____ has been a significant increase in sales this quarter.", choices: [ {text:"There",correct:true}, {text:"It",wrongReason:"It은 가주어. '~이 있다/생겼다'는 존재 구문은 There이에요."}, {text:"This",wrongReason:"This는 지시대명사. 존재 구문엔 There가 관용적이에요."}, {text:"That",wrongReason:"That도 존재 구문 관용 표현엔 맞지 않아요. There이에요."} ], explanation: "존재/발생 구문 → There has been." },
          { q: "I don't like this design. Could you show me _____?", choices: [ {text:"another",correct:true}, {text:"other",wrongReason:"other는 형용사 단독 불가. 'another one'이나 another가 필요해요."}, {text:"the other",wrongReason:"the other는 '나머지 정해진 하나'. 여기선 '또 다른 하나'의 불특정이라 another."}, {text:"others",wrongReason:"others는 복수. 'another one'을 원할 때는 another."} ], explanation: "불특정한 또 하나 → another." },
          { q: "Of the ten applicants, two were accepted and _____ were rejected.", choices: [ {text:"the others",correct:true}, {text:"others",wrongReason:"정해진 10명 중 2명을 제외한 '나머지 8명'은 the others. others는 불특정 '다른 사람들'."}, {text:"another",wrongReason:"another는 단수. 8명 전부이므로 복수."}, {text:"other",wrongReason:"other 단독은 사용 불가."} ], explanation: "정해진 집단의 나머지 전부 → the others." },
          { q: "All the team members respect _____.", choices: [ {text:"one another",correct:true}, {text:"themselves",wrongReason:"themselves는 '각자 자신'. 상호 존중이라면 one another/each other."}, {text:"the other",wrongReason:"the other는 '정해진 나머지 하나'. 상호 관계엔 맞지 않아요."}, {text:"another",wrongReason:"another는 '또 다른 하나'. 상호 관계엔 맞지 않아요."} ], explanation: "셋 이상의 상호 관계 → one another." },
          { q: "_____ seems to be a problem with the printer on the second floor.", choices: [ {text:"There",correct:true}, {text:"It",wrongReason:"It은 가주어. '~이 있다' 구문은 There."}, {text:"This",wrongReason:"특정 지시가 아니라 존재를 말하므로 There."}, {text:"That",wrongReason:"That은 특정 지시. 존재 구문엔 There."} ], explanation: "존재 구문 → There seems to be." },
          { q: "We have two offices: one is in Seoul, and _____ is in Busan.", choices: [ {text:"the other",correct:true}, {text:"another",wrongReason:"another는 불특정 '또 다른 하나'. 2개 중 '나머지 하나'는 정해졌으므로 the other."}, {text:"other",wrongReason:"other 단독 사용 불가."}, {text:"others",wrongReason:"others는 복수. 2개 중 나머지 하나는 단수."} ], explanation: "2개 중 나머지 하나 → the other." }
        ]
      }
    }
  },

  // ====================== 5. 관계대명사 ======================
  {
    id: "relative",
    icon: "🔗",
    title: "관계대명사",
    description: "who · which · that · whose · what",
    levels: {
      easy: {
        name: "하 · 기본",
        summary: "who/which/that 기본 구분",
        rules: [
          { title: "who (사람 주격)", body: "선행사가 사람이고 관계사절에서 주어 역할을 할 때.", example: "The candidate <u>who</u> applied yesterday is qualified.", translation: "어제 지원한 후보자는 자격이 있다." },
          { title: "which (사물 주격/목적격)", body: "선행사가 사물이고 주어 또는 목적어 역할.", example: "The report <u>which</u> we submitted was approved.", translation: "우리가 제출한 보고서가 승인되었다." },
          { title: "that (사람/사물 모두)", body: "who와 which를 대신해 사용 가능. 콤마 뒤 비제한적 용법엔 쓸 수 없어요.", example: "The employee <u>that</u> won the award is modest.", translation: "그 상을 받은 직원은 겸손하다." }
        ],
        questions: [
          { q: "The manager _____ hired me is very supportive.", choices: [ {text:"who",correct:true}, {text:"which",wrongReason:"which는 사물 선행사에만 써요. manager는 사람이에요."}, {text:"whose",wrongReason:"whose는 소유격 관계대명사로 뒤에 명사가 와요."}, {text:"whom",wrongReason:"whom은 목적격. 여기선 관계사절의 주어 자리예요."} ], explanation: "사람 선행사 + 주어 역할 → who." },
          { q: "The company _____ we work for has over 500 employees.", choices: [ {text:"that",correct:true}, {text:"who",wrongReason:"who는 사람 선행사. company는 사물/단체."}, {text:"whose",wrongReason:"whose는 소유격으로 뒤에 명사가 와요."}, {text:"whom",wrongReason:"whom은 사람 목적격. 사물 선행사엔 쓸 수 없어요."} ], explanation: "사물 선행사 + 목적어 역할 → that/which. 여기선 that." },
          { q: "The employees _____ attended the workshop received certificates.", choices: [ {text:"who",correct:true}, {text:"which",wrongReason:"which는 사물 선행사에만. employees는 사람."}, {text:"what",wrongReason:"what은 선행사가 없을 때 써요. 여기선 선행사 employees가 있어요."}, {text:"where",wrongReason:"where는 장소 관계부사예요."} ], explanation: "사람 선행사 + 주어 역할 → who." },
          { q: "The proposal _____ she presented was well-received.", choices: [ {text:"that",correct:true}, {text:"who",wrongReason:"who는 사람 선행사. proposal은 사물."}, {text:"whose",wrongReason:"whose는 소유격."}, {text:"what",wrongReason:"what은 선행사 포함. 선행사 proposal이 있어요."} ], explanation: "사물 선행사 + 목적어 → that/which." },
          { q: "I know a person _____ speaks five languages.", choices: [ {text:"who",correct:true}, {text:"which",wrongReason:"사람 선행사(person)엔 who."}, {text:"what",wrongReason:"what은 선행사를 포함. 여기선 선행사가 있어요."}, {text:"whose",wrongReason:"whose는 소유격 + 명사."} ], explanation: "사람 선행사 + 주어 역할 → who." },
          { q: "The documents _____ are on the desk need to be filed.", choices: [ {text:"that",correct:true}, {text:"who",wrongReason:"사물엔 that/which를 써요."}, {text:"whom",wrongReason:"whom은 사람 목적격."}, {text:"what",wrongReason:"what은 선행사 포함. documents가 이미 선행사예요."} ], explanation: "사물 선행사 + 주어 → that." },
          { q: "Our CEO, _____ has been with the company for 20 years, will retire next year.", choices: [ {text:"who",correct:true}, {text:"that",wrongReason:"콤마가 있는 비제한적 용법(계속적 용법)엔 that을 쓸 수 없어요."}, {text:"which",wrongReason:"CEO는 사람."}, {text:"what",wrongReason:"선행사(CEO)가 있으면 what은 쓸 수 없어요."} ], explanation: "콤마 뒤 사람 선행사 → who (that 불가)." },
          { q: "The new software, _____ was released last week, is easy to use.", choices: [ {text:"which",correct:true}, {text:"that",wrongReason:"콤마 뒤 비제한적 용법엔 that 불가."}, {text:"who",wrongReason:"software는 사물."}, {text:"whose",wrongReason:"whose는 소유격."} ], explanation: "콤마 뒤 사물 선행사 → which (that 불가)." },
          { q: "The assistant _____ works with me is very efficient.", choices: [ {text:"who",correct:true}, {text:"which",wrongReason:"사람에겐 who."}, {text:"whose",wrongReason:"whose는 소유격."}, {text:"what",wrongReason:"선행사가 있으면 what 불가."} ], explanation: "사람 + 주어 역할 → who." },
          { q: "The book _____ I borrowed from the library is excellent.", choices: [ {text:"that",correct:true}, {text:"who",wrongReason:"book은 사물. 사람 관계사 who는 맞지 않아요."}, {text:"whose",wrongReason:"whose는 소유격."}, {text:"whom",wrongReason:"whom은 사람 목적격."} ], explanation: "사물 + 목적어 → that/which." }
        ]
      },
      medium: {
        name: "중 · 800점대",
        summary: "whose, 전치사 + 관계대명사",
        rules: [
          { title: "whose (소유격)", body: "사람/사물 모두 가능. 뒤에 반드시 명사가 와요.", example: "The company <u>whose</u> profits increased received an award.", translation: "이익이 증가한 회사가 상을 받았다." },
          { title: "전치사 + whom / which", body: "격식체에서는 전치사가 whom/which 앞으로 이동. that은 이 구조에 쓸 수 없어요.", example: "The manager to <u>whom</u> I spoke was helpful.", translation: "내가 얘기한 매니저는 친절했다." },
          { title: "목적격 whom", body: "사람 선행사 + 관계사절의 목적어. 현대 영어에서는 who로도 많이 대체해요.", example: "The candidate <u>whom</u> we interviewed was qualified.", translation: "우리가 면접한 후보자는 자격이 있었다." }
        ],
        questions: [
          { q: "The author _____ book became a bestseller is visiting us.", choices: [ {text:"whose",correct:true}, {text:"who",wrongReason:"who는 주격. 뒤에 바로 명사(book)가 오면 소유격 whose가 맞아요."}, {text:"whom",wrongReason:"whom은 목적격. 뒤에 명사가 올 땐 whose."}, {text:"which",wrongReason:"author는 사람. 게다가 뒤에 명사가 있으므로 whose."} ], explanation: "whose + 명사 → '~의 ~' 소유 관계." },
          { q: "The manager to _____ I reported the issue was very understanding.", choices: [ {text:"whom",correct:true}, {text:"who",wrongReason:"전치사 to 바로 뒤엔 목적격 whom이 와요(격식체). who는 주격이에요."}, {text:"that",wrongReason:"'전치사 + that' 구조는 불가능해요. that은 문장 끝에 전치사를 두는 경우에만."}, {text:"which",wrongReason:"manager는 사람이에요. which는 사물."} ], explanation: "전치사 + 사람 목적격 → to whom." },
          { q: "We need a supplier _____ products meet our standards.", choices: [ {text:"whose",correct:true}, {text:"who",wrongReason:"who + 동사 구조가 오지만, 여기선 바로 명사 products가 오므로 소유격 whose."}, {text:"which",wrongReason:"뒤에 명사가 오면 소유격 whose가 필요해요."}, {text:"whom",wrongReason:"whom은 목적격. 뒤에 명사가 오면 whose."} ], explanation: "whose + 명사(products) 소유 관계." },
          { q: "The report for _____ I was waiting has finally arrived.", choices: [ {text:"which",correct:true}, {text:"that",wrongReason:"전치사 + that 구조는 불가. 전치사 뒤엔 which/whom."}, {text:"who",wrongReason:"report는 사물."}, {text:"whose",wrongReason:"whose는 소유격 + 명사."} ], explanation: "전치사 + 사물 → for which." },
          { q: "The colleague _____ I share an office is from France.", choices: [ {text:"with whom",correct:true}, {text:"whom",wrongReason:"share an office with someone. 전치사 with가 필요해요."}, {text:"who",wrongReason:"주격 who 단독은 맥락이 어색해요. share with someone 구조엔 전치사 필요."}, {text:"with that",wrongReason:"전치사 + that 구조는 문법상 불가능해요."} ], explanation: "share with someone → with whom." },
          { q: "The employee _____ promotion was announced today is very deserving.", choices: [ {text:"whose",correct:true}, {text:"who",wrongReason:"뒤에 바로 명사(promotion)가 오면 소유격 whose."}, {text:"which",wrongReason:"employee는 사람."}, {text:"whom",wrongReason:"whom은 목적격. 뒤에 명사가 있으므로 whose."} ], explanation: "whose + promotion 소유 관계." },
          { q: "The hotel in _____ we stayed was comfortable.", choices: [ {text:"which",correct:true}, {text:"that",wrongReason:"전치사 + that 불가. 전치사 뒤엔 which 또는 whom."}, {text:"where",wrongReason:"where는 관계부사로 전치사 없이 써요. 'where we stayed' 형태로."}, {text:"whose",wrongReason:"whose는 소유격."} ], explanation: "전치사 + 사물 → in which." },
          { q: "The candidate _____ we selected has excellent credentials.", choices: [ {text:"whom",correct:true}, {text:"who",wrongReason:"격식체에선 목적격 whom. 회화에선 who도 쓰지만 토익 Part5는 whom을 선호."}, {text:"which",wrongReason:"candidate는 사람."}, {text:"whose",wrongReason:"whose는 소유격 + 명사."} ], explanation: "사람 + 관계사절의 목적어 → whom." },
          { q: "The project _____ deadline was extended is going smoothly.", choices: [ {text:"whose",correct:true}, {text:"which",wrongReason:"뒤에 명사 deadline이 오므로 소유격 whose. whose는 사람/사물 모두 가능."}, {text:"that",wrongReason:"that은 소유격이 없어요. 소유는 whose."}, {text:"what",wrongReason:"what은 선행사 포함."} ], explanation: "whose는 사물 소유에도 사용 가능. whose deadline." },
          { q: "The CEO, _____ we met at the conference, agreed to partner with us.", choices: [ {text:"whom",correct:true}, {text:"that",wrongReason:"콤마 뒤 비제한 용법엔 that 불가."}, {text:"who",wrongReason:"격식체와 토익은 목적격 whom을 선호해요."}, {text:"which",wrongReason:"CEO는 사람."} ], explanation: "콤마 뒤 사람 목적격 → whom." }
        ]
      },
      hard: {
        name: "상 · 900 목표",
        summary: "what, 복합관계대명사, 수일치",
        rules: [
          { title: "what (선행사 포함)", body: "'~하는 것'. what = the thing(s) which. 선행사가 있으면 that/which를 써요.", example: "<u>What</u> she said made sense.", translation: "그녀가 말한 것은 일리가 있다." },
          { title: "복합관계대명사", body: "whatever(무엇이든), whoever(누구든), whichever(어느 것이든) — 명사절 또는 양보 부사절 역할.", example: "You can choose <u>whichever</u> option you prefer.", translation: "원하는 어느 옵션이든 선택할 수 있다." },
          { title: "관계사절 동사의 수일치", body: "관계사 뒤 동사는 선행사의 수에 맞춤. 'one of the 복수명사' 선행사 주의.", example: "The employees who <u>work</u> hard get promoted.", translation: "열심히 일하는 직원들은 승진한다." }
        ],
        questions: [
          { q: "_____ matters most is customer satisfaction.", choices: [ {text:"What",correct:true}, {text:"That",wrongReason:"that은 선행사가 있을 때만. 여기선 선행사 없이 '~하는 것'이 필요해요."}, {text:"Which",wrongReason:"which도 선행사가 필요해요. 선행사 없이 쓰는 것은 what."}, {text:"Who",wrongReason:"who는 사람 선행사에. 추상적 '것'은 what."} ], explanation: "선행사 없이 '~하는 것' → What (주어절)." },
          { q: "You may take _____ book you find most useful.", choices: [ {text:"whichever",correct:true}, {text:"whatever",wrongReason:"whatever는 뒤에 명사 없이 '무엇이든'. 뒤에 명사 book이 있고 정해진 범위 중 선택이면 whichever."}, {text:"whoever",wrongReason:"whoever는 사람에 써요."}, {text:"what",wrongReason:"what은 복합관계 아님. 정해진 범위 선택엔 whichever."} ], explanation: "정해진 범위에서 어느 것이든 + 명사 → whichever + 명사." },
          { q: "_____ wins the contract will benefit enormously.", choices: [ {text:"Whoever",correct:true}, {text:"Whomever",wrongReason:"whomever는 목적격. 뒤 동사 wins의 주어 역할이라 주격 whoever."}, {text:"Who",wrongReason:"who는 의문사/관계사. 명사절의 주어로 '누구든'은 whoever."}, {text:"Whose",wrongReason:"whose는 소유격."} ], explanation: "명사절 주어 '~하는 사람은 누구든' → whoever (주격)." },
          { q: "She is one of the managers who _____ the budget every quarter.", choices: [ {text:"review",correct:true}, {text:"reviews",wrongReason:"one of the managers의 who의 선행사는 managers(복수). 관계사절 동사는 복수."}, {text:"is reviewing",wrongReason:"is는 단수. 선행사가 복수예요."}, {text:"has reviewed",wrongReason:"has는 단수."} ], explanation: "one of the 복수 + who + 복수 동사." },
          { q: "_____ you need, our team will provide.", choices: [ {text:"Whatever",correct:true}, {text:"However",wrongReason:"however는 '아무리 ~해도'. 목적어 역할엔 whatever."}, {text:"Whenever",wrongReason:"whenever는 시간 부사절이에요."}, {text:"Wherever",wrongReason:"wherever는 장소 부사절."} ], explanation: "'필요한 것은 무엇이든' → Whatever (명사절 목적어)." },
          { q: "The benefits of the new policy are _____ we expected.", choices: [ {text:"what",correct:true}, {text:"that",wrongReason:"that은 선행사가 필요해요. 여기선 보어 자리에 선행사 없이 '~하는 것'이 필요."}, {text:"which",wrongReason:"which는 선행사가 필요해요."}, {text:"whom",wrongReason:"whom은 사람 목적격."} ], explanation: "보어 자리에 '우리가 기대한 것' → what." },
          { q: "The candidate _____ we are considering has strong qualifications.", choices: [ {text:"whom",correct:true}, {text:"which",wrongReason:"candidate는 사람."}, {text:"whose",wrongReason:"whose는 소유격 + 명사."}, {text:"what",wrongReason:"선행사(candidate)가 있어 what 불가."} ], explanation: "사람 + 목적어 → whom(격식)." },
          { q: "_____ the decision may be, we will support it.", choices: [ {text:"Whatever",correct:true}, {text:"Whoever",wrongReason:"whoever는 사람에 써요."}, {text:"However",wrongReason:"however는 '아무리 ~해도'. 명사 역할의 '무엇이든'은 whatever."}, {text:"Whichever",wrongReason:"whichever는 정해진 범위 선택. 포괄적 '무엇이든'은 whatever."} ], explanation: "'결정이 무엇이든지 간에' (양보 부사절) → Whatever." },
          { q: "The team _____ proposal was selected received a bonus.", choices: [ {text:"whose",correct:true}, {text:"which",wrongReason:"뒤에 명사 proposal이 오므로 소유격 whose. whose는 사물에도 써요."}, {text:"that",wrongReason:"that은 소유격 역할을 못 해요. 소유는 whose."}, {text:"what",wrongReason:"선행사(team)가 있어 what 불가."} ], explanation: "whose + 명사 (사물 선행사도 가능)." },
          { q: "Please send the package to _____ is in charge of receiving.", choices: [ {text:"whoever",correct:true}, {text:"whomever",wrongReason:"전치사 to 뒤에 whomever가 올 수 있지만, 여기선 뒤 동사 is의 주어 역할이라 주격 whoever."}, {text:"who",wrongReason:"who는 단순 관계사. 선행사 없는 명사절엔 whoever."}, {text:"whose",wrongReason:"whose는 소유격 + 명사."} ], explanation: "명사절 속 주어 역할 → whoever (주격이 격을 결정)." }
        ]
      }
    }
  },

  // ====================== 6. 접속사 vs 전치사 ======================
  {
    id: "conj_prep",
    icon: "🔀",
    title: "접속사 vs 전치사",
    description: "because/because of, although/despite 등",
    levels: {
      easy: {
        name: "하 · 기본",
        summary: "접속사(+절) / 전치사(+명사)",
        rules: [
          { title: "because (접속사) vs because of (전치사)", body: "because + 주어 + 동사 (절) / because of + 명사(구).", example: "The flight was delayed <u>because of</u> bad weather.", translation: "악천후 때문에 항공편이 지연되었다." },
          { title: "although (접속사) vs despite (전치사)", body: "although + 절 / despite(= in spite of) + 명사(구).", example: "<u>Despite</u> the rain, the event went on.", translation: "비에도 불구하고 행사는 진행되었다." },
          { title: "during (전치사) vs while (접속사)", body: "during + 명사 / while + 주어 + 동사.", example: "She took notes <u>during</u> the meeting.", translation: "그녀는 회의 중에 필기했다." }
        ],
        questions: [
          { q: "The meeting was canceled _____ the CEO's sudden illness.", choices: [ {text:"because of",correct:true}, {text:"because",wrongReason:"because 뒤엔 주어+동사(절)이 와야 해요. 뒤에 명사구(the CEO's sudden illness)가 있으므로 because of."}, {text:"although",wrongReason:"although는 양보 접속사로 '~에도 불구하고'. 이유엔 because(of)."}, {text:"despite",wrongReason:"despite는 양보 전치사. 의미상 이유가 필요해요."} ], explanation: "뒤에 명사구 → 전치사 because of." },
          { q: "_____ the bad weather, the outdoor event was canceled.", choices: [ {text:"Because of",correct:true}, {text:"Because",wrongReason:"because 뒤엔 절(S+V)이 필요해요. 뒤에 명사구라 because of."}, {text:"Although",wrongReason:"양보(~에도 불구하고)가 아닌 이유(~때문에)가 필요해요."}, {text:"While",wrongReason:"while은 접속사로 동시·대조. 이유가 아니에요."} ], explanation: "명사구 앞 이유 전치사 → Because of." },
          { q: "She continued working _____ she was tired.", choices: [ {text:"although",correct:true}, {text:"despite",wrongReason:"despite 뒤엔 명사(구)가 와야 해요. 뒤에 절이라 although."}, {text:"because",wrongReason:"이유가 아닌 양보 관계예요."}, {text:"during",wrongReason:"during은 기간 전치사."} ], explanation: "절(S+V) 앞 양보 접속사 → although." },
          { q: "The manager made several calls _____ the lunch break.", choices: [ {text:"during",correct:true}, {text:"while",wrongReason:"while 뒤엔 절이 와야 해요. 뒤에 명사구(the lunch break)라 during."}, {text:"because of",wrongReason:"이유 관계가 아닌 시간(기간) 관계예요."}, {text:"although",wrongReason:"양보가 아닌 시간 표현."} ], explanation: "명사구 앞 시간 전치사 → during." },
          { q: "_____ the long hours, she enjoys her job.", choices: [ {text:"Despite",correct:true}, {text:"Although",wrongReason:"although 뒤엔 절이 와야 해요. 뒤에 명사구라 Despite."}, {text:"Because",wrongReason:"이유가 아닌 양보."}, {text:"During",wrongReason:"during은 기간. 의미가 맞지 않아요."} ], explanation: "명사구 앞 양보 전치사 → Despite." },
          { q: "_____ she was preparing the report, I was answering calls.", choices: [ {text:"While",correct:true}, {text:"During",wrongReason:"during 뒤엔 명사구. 뒤에 절이라 while."}, {text:"Because of",wrongReason:"이유가 아닌 동시 동작."}, {text:"Despite",wrongReason:"양보가 아닌 동시 동작."} ], explanation: "절(S+V) 앞 동시 접속사 → While." },
          { q: "The project was delayed _____ unforeseen issues.", choices: [ {text:"due to",correct:true}, {text:"because",wrongReason:"because 뒤엔 절이 와야 해요. due to는 because of와 같은 전치사."}, {text:"although",wrongReason:"양보가 아닌 이유."}, {text:"while",wrongReason:"시간/대조 접속사. 이유 표현엔 due to."} ], explanation: "명사구 앞 이유 전치사 → due to (= because of)." },
          { q: "_____ the training program ended, employees were more skilled.", choices: [ {text:"After",correct:true}, {text:"During",wrongReason:"during 뒤엔 명사구. 뒤에 절이라 접속사 after."}, {text:"Because of",wrongReason:"이유가 아닌 시간 순서예요."}, {text:"Despite",wrongReason:"양보가 아닌 시간 순서."} ], explanation: "절 앞 시간 접속사 → After." },
          { q: "Sales increased _____ the new marketing strategy.", choices: [ {text:"because of",correct:true}, {text:"because",wrongReason:"뒤에 명사구(the new marketing strategy). because 뒤엔 절."}, {text:"although",wrongReason:"양보가 아닌 이유."}, {text:"while",wrongReason:"while 뒤엔 절."} ], explanation: "명사구 앞 이유 전치사 → because of." },
          { q: "The store closed early _____ it was a holiday.", choices: [ {text:"because",correct:true}, {text:"because of",wrongReason:"뒤에 절(it was a holiday)이 있으므로 접속사 because."}, {text:"due to",wrongReason:"due to는 전치사로 뒤에 명사구. 여기선 절이 있어요."}, {text:"despite",wrongReason:"양보가 아닌 이유."} ], explanation: "절 앞 이유 접속사 → because." }
        ]
      },
      medium: {
        name: "중 · 800점대",
        summary: "명사절 that/whether/if, 상관접속사",
        rules: [
          { title: "명사절 that", body: "that + 완전한 절. '~라는 것'이라는 명사 덩어리가 돼 주어/목적어/보어 역할.", example: "I think <u>that</u> the plan is feasible.", translation: "그 계획이 실현 가능하다고 생각한다." },
          { title: "whether vs if (명사절)", body: "둘 다 '~인지'. whether는 주어/보어/전치사 뒤/or not 앞에 사용 가능. if는 목적어 자리에 제한적.", example: "I'm not sure <u>whether</u> he will come.", translation: "그가 올지 확실하지 않다." },
          { title: "상관접속사", body: "both A and B, either A or B, neither A nor B, not only A but (also) B.", example: "The course is <u>both</u> informative <u>and</u> interesting.", translation: "그 강의는 유익하고 흥미롭다." }
        ],
        questions: [
          { q: "The manager confirmed _____ the deadline had been extended.", choices: [ {text:"that",correct:true}, {text:"what",wrongReason:"what은 뒤에 불완전한 절(빠진 성분이 있는)이 와요. 여기선 완전한 문장이에요."}, {text:"which",wrongReason:"which는 관계사/의문사. 명사절 '~라는 것'은 that."}, {text:"if",wrongReason:"if는 '~인지' 여부. 여기선 사실 전달이라 that."} ], explanation: "완전한 절 + 사실 전달 → 명사절 that." },
          { q: "We haven't decided _____ to accept the offer or not.", choices: [ {text:"whether",correct:true}, {text:"if",wrongReason:"or not이 바로 뒤에 붙는 구조엔 whether를 써요."}, {text:"that",wrongReason:"that은 사실 전달. '~인지 아닌지'는 whether."}, {text:"what",wrongReason:"what은 '무엇'. 여부 판단엔 whether."} ], explanation: "whether ~ or not 관용 구조. if or not은 쓰지 않아요." },
          { q: "The proposal includes _____ a discount _____ free shipping.", choices: [ {text:"both ... and",correct:true}, {text:"either ... or",wrongReason:"either~or는 '둘 중 하나'. 둘 다 포함이면 both~and."}, {text:"neither ... nor",wrongReason:"neither~nor는 '둘 다 아님'. 의미가 반대예요."}, {text:"not only ... but",wrongReason:"not only~but도 가능하지만 관용적 동등 강조는 both~and가 자연스러워요."} ], explanation: "둘 다 포함 → both A and B." },
          { q: "Please let me know _____ you can attend the meeting.", choices: [ {text:"whether",correct:true}, {text:"that",wrongReason:"that은 사실 전달. '참석할 수 있는지'는 여부라 whether/if."}, {text:"what",wrongReason:"what은 '무엇'. 여부 판단엔 whether/if."}, {text:"which",wrongReason:"which는 선택지를 암시. 여부 판단엔 whether."} ], explanation: "여부(~인지) 명사절 → whether." },
          { q: "_____ the manager _____ the assistant was able to solve the problem.", choices: [ {text:"Neither ... nor",correct:true}, {text:"Both ... and",wrongReason:"문장 뒤에 부정 의미(was able to solve… 즉 '해결 못함')면 둘 다 아님이 자연스러워요. was able to가 부정 맥락이면 neither~nor."}, {text:"Either ... or",wrongReason:"either~or는 '둘 중 하나'. 문맥상 둘 다 해결 못 했다는 의미가 필요해요."}, {text:"Not only ... but",wrongReason:"둘 다 긍정이 아닌 둘 다 부정의 맥락이에요."} ], explanation: "둘 다 해결 못 함 → neither A nor B." },
          { q: "The CEO announced _____ the company would expand overseas.", choices: [ {text:"that",correct:true}, {text:"what",wrongReason:"what 뒤엔 불완전한 절이 와요. 여기선 완전한 절이에요."}, {text:"whether",wrongReason:"whether는 '~인지'. 사실 발표는 that."}, {text:"if",wrongReason:"if는 '~인지'. 사실 발표는 that."} ], explanation: "완전한 절 사실 전달 → that." },
          { q: "I'm curious _____ the project will be completed on time.", choices: [ {text:"whether",correct:true}, {text:"that",wrongReason:"curious about 뒤엔 여부 판단이 자연스러워요. 사실 전달 that은 어색해요."}, {text:"what",wrongReason:"what은 '무엇'. 여부엔 whether."}, {text:"which",wrongReason:"which는 선택지. 여부 판단엔 whether."} ], explanation: "'~인지 궁금하다' → whether." },
          { q: "She is _____ intelligent _____ hardworking.", choices: [ {text:"not only ... but also",correct:true}, {text:"both ... or",wrongReason:"both와 or는 결합하지 않아요. both~and가 맞아요."}, {text:"either ... and",wrongReason:"either와 and는 결합하지 않아요. either~or가 맞아요."}, {text:"neither ... or",wrongReason:"neither와 or는 결합하지 않아요. neither~nor."} ], explanation: "강조 '뿐만 아니라 ~도' → not only ~ but also." },
          { q: "The report states _____ profits increased by 20%.", choices: [ {text:"that",correct:true}, {text:"what",wrongReason:"what 뒤엔 불완전한 절."}, {text:"whether",wrongReason:"여부가 아닌 사실."}, {text:"which",wrongReason:"관계사/의문사. 명사절 사실은 that."} ], explanation: "사실 보고 → that절." },
          { q: "Tell me _____ the flight is delayed or on time.", choices: [ {text:"whether",correct:true}, {text:"if",wrongReason:"'whether ~ or ~' 구조엔 whether를 쓰고, if는 어색해요."}, {text:"that",wrongReason:"that은 사실 전달."}, {text:"what",wrongReason:"what은 '무엇'. 여부 선택엔 whether."} ], explanation: "whether ~ or ~ 관용 구조." }
        ]
      },
      hard: {
        name: "상 · 900 목표",
        summary: "in case, provided, given 등 고급 연결어",
        rules: [
          { title: "in case (that)", body: "'~할 경우에 대비해'. + 현재 시제(미래 의미).", example: "Take an umbrella <u>in case</u> it rains.", translation: "비 올 경우를 대비해 우산을 챙겨라." },
          { title: "provided / providing that", body: "'~라는 조건 하에'. = if.", example: "You can leave early <u>provided</u> you finish your work.", translation: "일을 마치면 일찍 퇴근해도 된다." },
          { title: "given (that)", body: "'~을 고려할 때'. 전치사/접속사 모두 가능.", example: "<u>Given</u> the circumstances, the result is acceptable.", translation: "상황을 고려하면 결과는 수용할 만하다." }
        ],
        questions: [
          { q: "Please bring your ID _____ you need to access the building after hours.", choices: [ {text:"in case",correct:true}, {text:"in case of",wrongReason:"in case of + 명사. 뒤에 절이 있으므로 in case가 맞아요."}, {text:"because",wrongReason:"이유가 아닌 '대비'예요."}, {text:"despite",wrongReason:"양보가 아닌 '~할 경우에 대비'."} ], explanation: "절 앞 '~할 경우에 대비' → in case." },
          { q: "You can use the meeting room _____ you reserve it in advance.", choices: [ {text:"provided",correct:true}, {text:"providing",wrongReason:"providing that도 가능하지만 provided가 더 격식체로 자주 쓰여요. 둘 다 문법적으론 맞지만 여기선 provided 선호."}, {text:"despite",wrongReason:"양보가 아닌 조건."}, {text:"because",wrongReason:"이유가 아닌 조건."} ], explanation: "provided (that) = '~라는 조건 하에'." },
          { q: "_____ her limited experience, she performed exceptionally well.", choices: [ {text:"Given",correct:true}, {text:"Because",wrongReason:"because 뒤엔 절이 필요해요. 명사구 뒤엔 전치사."}, {text:"Despite",wrongReason:"despite도 가능해 보이지만 문맥이 '고려하면'이라 given이 자연스러워요."}, {text:"Although",wrongReason:"although 뒤엔 절이 필요해요."} ], explanation: "'~을 고려하면' → Given (+명사구)." },
          { q: "The event will proceed as scheduled _____ the weather remains favorable.", choices: [ {text:"as long as",correct:true}, {text:"as far as",wrongReason:"as far as는 '~하는 한'(정보/범위). 조건은 as long as."}, {text:"in case",wrongReason:"in case는 '~에 대비하여'. 여기선 조건이 성립해야 진행된다는 의미예요."}, {text:"even if",wrongReason:"even if는 '비록 ~일지라도'. 문맥과 반대예요."} ], explanation: "조건(~하는 한) → as long as." },
          { q: "_____ that the deadline is strict, we must work efficiently.", choices: [ {text:"Given",correct:true}, {text:"Because of",wrongReason:"because of 뒤엔 명사구. 여기선 that절이 와요."}, {text:"Despite",wrongReason:"despite는 양보."}, {text:"Provided",wrongReason:"provided는 조건. 문맥은 사실을 고려하는 것."} ], explanation: "Given that + 절 = '~을 감안하면'." },
          { q: "_____ of an emergency, call this number immediately.", choices: [ {text:"In case",correct:true}, {text:"In spite",wrongReason:"in spite of는 '~에도 불구하고'. 여기선 '~의 경우'예요."}, {text:"Because",wrongReason:"because 뒤엔 절이 와야 해요."}, {text:"Despite",wrongReason:"despite는 양보."} ], explanation: "In case of + 명사 = '~의 경우에'." },
          { q: "The contract is valid _____ both parties sign within 30 days.", choices: [ {text:"as long as",correct:true}, {text:"as if",wrongReason:"as if는 '마치 ~인 것처럼'. 조건이 아닌 비유."}, {text:"as though",wrongReason:"as though도 '마치 ~인 것처럼'. 조건과 다른 표현."}, {text:"so that",wrongReason:"so that은 '~하기 위해' (목적)."} ], explanation: "조건 '~하는 한'은 as long as." },
          { q: "We will postpone the outing _____ it rains tomorrow.", choices: [ {text:"in the event that",correct:true}, {text:"in the event of",wrongReason:"in the event of + 명사구. 뒤에 절이 있으므로 in the event that."}, {text:"in case of",wrongReason:"in case of + 명사구."}, {text:"because of",wrongReason:"because of + 명사구. 뒤에 절이에요."} ], explanation: "절 앞 '~할 경우에' → in the event that." },
          { q: "_____ all the evidence, the decision seems reasonable.", choices: [ {text:"Considering",correct:true}, {text:"Because",wrongReason:"because 뒤엔 절이 와야 해요. 명사구 앞엔 considering/given."}, {text:"Despite",wrongReason:"despite는 양보. 문맥은 '고려할 때'."}, {text:"Although",wrongReason:"although 뒤엔 절이 필요해요."} ], explanation: "'~을 고려하면' → Considering (+ 명사구)." },
          { q: "The meeting will go ahead _____ there are any last-minute changes.", choices: [ {text:"unless",correct:true}, {text:"if",wrongReason:"if는 '~하면'. 문맥상 '변경이 없으면'을 말하려면 unless(= if not)."}, {text:"because",wrongReason:"이유가 아닌 조건."}, {text:"although",wrongReason:"양보가 아닌 조건."} ], explanation: "unless = if not. '변경이 없으면 진행'." }
        ]
      }
    }
  },

  // ====================== 7. to부정사 vs 동명사 ======================
  {
    id: "toinf_gerund",
    icon: "🎯",
    title: "to부정사 vs 동명사",
    description: "want to V / enjoy V-ing 등",
    levels: {
      easy: {
        name: "하 · 기본",
        summary: "to부정사만 / 동명사만 취하는 동사",
        rules: [
          { title: "to V만 취하는 동사", body: "want, plan, decide, hope, expect, promise, agree, refuse, fail, manage.", example: "We decided <u>to postpone</u> the meeting.", translation: "우리는 회의를 연기하기로 결정했다." },
          { title: "V-ing만 취하는 동사", body: "enjoy, mind, avoid, finish, consider, suggest, recommend, keep, practice.", example: "Please avoid <u>using</u> your phone during the meeting.", translation: "회의 중 휴대폰 사용을 피해주세요." },
          { title: "전치사 뒤엔 항상 V-ing", body: "전치사(of, in, on, about, for) 뒤엔 동명사.", example: "She is interested in <u>learning</u> Chinese.", translation: "그녀는 중국어 배우기에 관심이 있다." }
        ],
        questions: [
          { q: "The company plans _____ a new office next year.", choices: [ {text:"to open",correct:true}, {text:"opening",wrongReason:"plan은 to부정사만 취해요. plan to V."}, {text:"to opening",wrongReason:"to + V-ing는 문법적으로 맞지 않아요. to + 원형 또는 동명사."}, {text:"open",wrongReason:"plan은 동사 원형을 직접 취하지 않아요. plan + to V."} ], explanation: "plan + to V 구조." },
          { q: "She enjoys _____ with her colleagues during lunch.", choices: [ {text:"chatting",correct:true}, {text:"to chat",wrongReason:"enjoy는 동명사만 취해요."}, {text:"chat",wrongReason:"enjoy + 동사원형은 불가."}, {text:"chatted",wrongReason:"enjoy + 과거분사는 불가. enjoy + V-ing."} ], explanation: "enjoy + V-ing 구조." },
          { q: "We recommend _____ the user manual before installation.", choices: [ {text:"reading",correct:true}, {text:"to read",wrongReason:"recommend는 동명사를 취해요."}, {text:"read",wrongReason:"recommend + 원형은 불가."}, {text:"read to",wrongReason:"문법적으로 맞지 않아요. recommend + V-ing."} ], explanation: "recommend + V-ing." },
          { q: "Thank you for _____ us to the party.", choices: [ {text:"inviting",correct:true}, {text:"invite",wrongReason:"전치사 for 뒤엔 동명사가 와야 해요."}, {text:"to invite",wrongReason:"전치사 뒤엔 to부정사가 아닌 동명사."}, {text:"invited",wrongReason:"전치사 뒤엔 동명사 (V-ing)."} ], explanation: "전치사 for + V-ing." },
          { q: "The manager refused _____ the proposal without review.", choices: [ {text:"to accept",correct:true}, {text:"accepting",wrongReason:"refuse는 to부정사만 취해요."}, {text:"accept",wrongReason:"refuse + 원형 불가."}, {text:"accepted",wrongReason:"refuse + 과거분사 불가."} ], explanation: "refuse + to V." },
          { q: "Have you finished _____ the report yet?", choices: [ {text:"writing",correct:true}, {text:"to write",wrongReason:"finish는 동명사만 취해요."}, {text:"write",wrongReason:"finish + 원형 불가."}, {text:"written",wrongReason:"finish + 과거분사 불가. V-ing."} ], explanation: "finish + V-ing." },
          { q: "She hopes _____ a promotion next quarter.", choices: [ {text:"to get",correct:true}, {text:"getting",wrongReason:"hope는 to부정사만."}, {text:"get",wrongReason:"hope + 원형 불가."}, {text:"gotten",wrongReason:"hope + 과거분사 불가."} ], explanation: "hope + to V." },
          { q: "They are considering _____ the product launch.", choices: [ {text:"delaying",correct:true}, {text:"to delay",wrongReason:"consider는 동명사만 취해요."}, {text:"delay",wrongReason:"consider + 원형 불가."}, {text:"delayed",wrongReason:"consider + 과거분사 불가."} ], explanation: "consider + V-ing." },
          { q: "We agreed _____ the contract next Monday.", choices: [ {text:"to sign",correct:true}, {text:"signing",wrongReason:"agree는 to부정사만."}, {text:"sign",wrongReason:"agree + 원형 불가."}, {text:"signed",wrongReason:"agree + 과거분사 불가."} ], explanation: "agree + to V." },
          { q: "Do you mind _____ the window?", choices: [ {text:"closing",correct:true}, {text:"to close",wrongReason:"mind는 동명사만 취해요."}, {text:"close",wrongReason:"mind + 원형 불가."}, {text:"closed",wrongReason:"mind + 과거분사 불가."} ], explanation: "mind + V-ing (~해도 괜찮을까요)." }
        ]
      },
      medium: {
        name: "중 · 800점대",
        summary: "의미 차이 동사 (remember, forget, stop, try)",
        rules: [
          { title: "remember/forget + to V vs V-ing", body: "to V = 앞으로 할 일을 기억/잊다 / V-ing = 이미 한 일을 기억/잊다.", example: "Please remember <u>to lock</u> the door. / I remember <u>locking</u> the door.", translation: "문 잠그는 것 잊지 마. / 문을 잠근 것을 기억한다." },
          { title: "try + to V vs V-ing", body: "try to V = ~하려고 노력하다 / try V-ing = 한번 ~해보다 (시도).", example: "<u>Try restarting</u> your computer.", translation: "컴퓨터를 한번 재시작해봐." },
          { title: "stop + to V vs V-ing", body: "stop to V = ~하기 위해 멈추다 / stop V-ing = ~하는 것을 멈추다.", example: "He stopped <u>smoking</u> last year.", translation: "그는 작년에 담배를 끊었다." }
        ],
        questions: [
          { q: "Please remember _____ the attached file with your application.", choices: [ {text:"to include",correct:true}, {text:"including",wrongReason:"remember + V-ing는 '이미 한 일을 기억'. 여기선 '앞으로 포함할 것을 잊지 말라'는 미래 의미라 to V."}, {text:"include",wrongReason:"remember는 원형을 직접 취하지 않아요."}, {text:"included",wrongReason:"과거분사는 취하지 않아요."} ], explanation: "앞으로 할 일을 기억 → remember to V." },
          { q: "She stopped _____ a break after working for five hours.", choices: [ {text:"to take",correct:true}, {text:"taking",wrongReason:"stop V-ing는 '~하는 것을 멈추다'. 여기선 '휴식을 취하기 위해 멈췄다'는 목적이라 stop to V."}, {text:"take",wrongReason:"stop은 원형을 직접 취하지 않아요."}, {text:"took",wrongReason:"stop + 과거형 불가."} ], explanation: "~하기 위해 멈추다 → stop to V." },
          { q: "If the problem persists, try _____ your computer.", choices: [ {text:"restarting",correct:true}, {text:"to restart",wrongReason:"try to V = 노력하다. 여기선 '한번 해봐'라는 시도의 의미라 V-ing."}, {text:"restart",wrongReason:"try는 원형을 직접 취하지 않아요."}, {text:"restarted",wrongReason:"try + 과거분사 불가."} ], explanation: "한번 ~해보다 (시도) → try V-ing." },
          { q: "I'll never forget _____ the Eiffel Tower for the first time.", choices: [ {text:"seeing",correct:true}, {text:"to see",wrongReason:"forget to V = 앞으로 할 일을 잊다. 여기선 과거 경험을 '잊지 않겠다'라 V-ing."}, {text:"see",wrongReason:"forget은 원형 직접 불가."}, {text:"saw",wrongReason:"forget + 과거 동사 불가. V-ing."} ], explanation: "과거 경험을 잊지 않다 → forget V-ing." },
          { q: "He tried _____ the manager but couldn't reach her.", choices: [ {text:"to call",correct:true}, {text:"calling",wrongReason:"try V-ing는 '시도해보다'. 여기선 '통화하려 노력했지만 실패'의 맥락이라 try to V."}, {text:"call",wrongReason:"try는 원형 직접 불가."}, {text:"called",wrongReason:"try + 과거형 불가."} ], explanation: "~하려고 노력하다 → try to V." },
          { q: "Did you remember _____ the door when you left?", choices: [ {text:"to lock",correct:true}, {text:"locking",wrongReason:"remember V-ing는 이미 한 일의 기억. 여기선 '잊지 않고 잠갔는지' 미래 의무를 확인하는 맥락이라 to V."}, {text:"lock",wrongReason:"remember + 원형 불가."}, {text:"locked",wrongReason:"remember + 과거 직접 불가."} ], explanation: "잊지 않고 했어요? → remember to V." },
          { q: "The doctor told him to stop _____ fatty foods.", choices: [ {text:"eating",correct:true}, {text:"to eat",wrongReason:"stop to V는 '~하기 위해 멈추다'. 여기선 '~을 그만두다'가 의미라 V-ing."}, {text:"eat",wrongReason:"stop + 원형 불가."}, {text:"ate",wrongReason:"stop + 과거형 불가."} ], explanation: "~을 그만두다 → stop V-ing." },
          { q: "Don't forget _____ me when you arrive.", choices: [ {text:"to call",correct:true}, {text:"calling",wrongReason:"forget V-ing = 이미 한 일을 잊다. 미래 행동은 to V."}, {text:"call",wrongReason:"forget 원형 직접 불가."}, {text:"called",wrongReason:"과거형 불가."} ], explanation: "미래 할 일을 잊지 마 → forget to V." },
          { q: "I regret _____ you that your application was not successful.", choices: [ {text:"to inform",correct:true}, {text:"informing",wrongReason:"regret V-ing는 '과거에 한 일을 후회하다'. 여기선 '알려드리게 되어 유감'이라는 현재/미래 상황이라 to V."}, {text:"inform",wrongReason:"regret + 원형 불가."}, {text:"informed",wrongReason:"regret + 과거 직접 불가."} ], explanation: "지금 알려드리게 되어 유감 → regret to V." },
          { q: "She regretted _____ the offer after seeing the benefits.", choices: [ {text:"declining",correct:true}, {text:"to decline",wrongReason:"regret to V는 지금/미래 유감. 여기선 이미 거절한 것을 후회하므로 V-ing."}, {text:"decline",wrongReason:"regret 원형 직접 불가."}, {text:"declined",wrongReason:"regret + 과거 직접 불가."} ], explanation: "과거에 한 일을 후회 → regret V-ing." }
        ]
      },
      hard: {
        name: "상 · 900 목표",
        summary: "be used to V-ing, look forward to V-ing 등",
        rules: [
          { title: "be used to V-ing / used to V", body: "be used to V-ing = ~에 익숙하다 / used to V = ~하곤 했다.", example: "She is used to <u>working</u> long hours. / She used to <u>work</u> in finance.", translation: "그녀는 장시간 근무에 익숙하다. / 그녀는 금융계에서 일하곤 했다." },
          { title: "전치사 to + V-ing", body: "look forward to, be committed to, be dedicated to, object to 뒤엔 동명사.", example: "I look forward to <u>hearing</u> from you.", translation: "답변 기다리고 있습니다." },
          { title: "목적어 + to V (5형식)", body: "want/expect/ask/tell/allow/enable/encourage + 목적어 + to V.", example: "The manager asked me <u>to prepare</u> the report.", translation: "매니저는 나에게 보고서를 준비하라고 요청했다." }
        ],
        questions: [
          { q: "I look forward to _____ from you soon.", choices: [ {text:"hearing",correct:true}, {text:"hear",wrongReason:"look forward to의 to는 전치사. 뒤엔 V-ing가 와요."}, {text:"to hear",wrongReason:"to 뒤에 to는 올 수 없어요. V-ing."}, {text:"heard",wrongReason:"전치사 뒤엔 동명사 V-ing."} ], explanation: "look forward to + V-ing. 'to'는 전치사." },
          { q: "She is used to _____ in front of large audiences.", choices: [ {text:"speaking",correct:true}, {text:"speak",wrongReason:"be used to의 to는 전치사. V-ing가 와요."}, {text:"to speak",wrongReason:"전치사 to 뒤엔 V-ing."}, {text:"spoken",wrongReason:"전치사 뒤엔 V-ing."} ], explanation: "be used to + V-ing = ~에 익숙하다." },
          { q: "He used to _____ at this company before starting his own business.", choices: [ {text:"work",correct:true}, {text:"working",wrongReason:"used to V = ~하곤 했다. 원형 동사."}, {text:"to work",wrongReason:"to가 두 번 올 수 없어요. used to + 원형."}, {text:"worked",wrongReason:"used to + 원형 동사."} ], explanation: "used to V = 과거의 습관 '~하곤 했다'." },
          { q: "The manager encouraged us _____ more creative solutions.", choices: [ {text:"to find",correct:true}, {text:"finding",wrongReason:"encourage + 목적어 + to V 구조."}, {text:"find",wrongReason:"encourage + to V."}, {text:"found",wrongReason:"과거 동사는 불가."} ], explanation: "encourage + 목적어 + to V." },
          { q: "The company is committed to _____ environmental standards.", choices: [ {text:"maintaining",correct:true}, {text:"maintain",wrongReason:"be committed to의 to는 전치사. V-ing."}, {text:"to maintain",wrongReason:"전치사 to 뒤엔 V-ing."}, {text:"maintained",wrongReason:"전치사 뒤엔 V-ing."} ], explanation: "be committed to + V-ing." },
          { q: "The new system enables employees _____ data more efficiently.", choices: [ {text:"to access",correct:true}, {text:"accessing",wrongReason:"enable + 목적어 + to V 구조."}, {text:"access",wrongReason:"enable + to V."}, {text:"accessed",wrongReason:"과거형 불가."} ], explanation: "enable + 목적어 + to V." },
          { q: "The residents object to _____ a factory in the neighborhood.", choices: [ {text:"building",correct:true}, {text:"build",wrongReason:"object to의 to는 전치사. V-ing."}, {text:"to build",wrongReason:"전치사 뒤엔 V-ing."}, {text:"built",wrongReason:"전치사 뒤엔 V-ing."} ], explanation: "object to + V-ing = ~에 반대하다." },
          { q: "We asked her _____ the conference in our place.", choices: [ {text:"to attend",correct:true}, {text:"attending",wrongReason:"ask + 목적어 + to V."}, {text:"attend",wrongReason:"ask + 목적어 + to V."}, {text:"attended",wrongReason:"과거형 불가."} ], explanation: "ask + 목적어 + to V." },
          { q: "She is dedicated to _____ the quality of education.", choices: [ {text:"improving",correct:true}, {text:"improve",wrongReason:"be dedicated to의 to는 전치사. V-ing."}, {text:"to improve",wrongReason:"전치사 뒤엔 V-ing."}, {text:"improved",wrongReason:"전치사 뒤엔 V-ing."} ], explanation: "be dedicated to + V-ing." },
          { q: "The policy allows customers _____ refunds within 30 days.", choices: [ {text:"to request",correct:true}, {text:"requesting",wrongReason:"allow + 목적어 + to V."}, {text:"request",wrongReason:"allow + 목적어 + to V."}, {text:"requested",wrongReason:"과거형 불가."} ], explanation: "allow + 목적어 + to V." }
        ]
      }
    }
  },

  // ====================== 8. 비교급/최상급 ======================
  {
    id: "comparison",
    icon: "📊",
    title: "비교급 · 최상급",
    description: "비교 구문과 강조 부사",
    levels: {
      easy: {
        name: "하 · 기본",
        summary: "-er/-est, more/most, than",
        rules: [
          { title: "비교급 + than", body: "1음절은 -er, 긴 단어는 more. than과 짝.", example: "This report is <u>longer than</u> the previous one.", translation: "이 보고서는 이전 것보다 더 길다." },
          { title: "최상급 the + -est/most", body: "3개 이상 비교의 '가장 ~한'. 앞에 the, 뒤에 in/of.", example: "She is <u>the most experienced</u> employee in the team.", translation: "그녀는 팀에서 가장 경험이 많은 직원이다." },
          { title: "as ... as (동등 비교)", body: "as + 형용사/부사 원형 + as. '~만큼 ~한'.", example: "This model is <u>as efficient as</u> the newer one.", translation: "이 모델은 신형만큼 효율적이다." }
        ],
        questions: [
          { q: "This year's profits are _____ than last year's.", choices: [ {text:"higher",correct:true}, {text:"high",wrongReason:"than과 짝을 이루는 자리는 비교급(-er). high의 비교급은 higher."}, {text:"highest",wrongReason:"최상급은 than과 쓰이지 않아요."}, {text:"more high",wrongReason:"high는 1음절이라 -er을 붙여요. more high는 어색해요."} ], explanation: "비교급 + than → higher." },
          { q: "She is _____ employee in the entire company.", choices: [ {text:"the best",correct:true}, {text:"better",wrongReason:"'가장'이라는 의미라 최상급. better는 비교급."}, {text:"good",wrongReason:"원급은 '가장'을 나타내지 못해요."}, {text:"more good",wrongReason:"good의 비교급은 better, 최상급은 the best (불규칙)."} ], explanation: "범위 내 최상 → the best." },
          { q: "This new software is _____ than the old one.", choices: [ {text:"more efficient",correct:true}, {text:"efficient",wrongReason:"than이 있으므로 비교급. efficient는 긴 단어라 more + 원급."}, {text:"most efficient",wrongReason:"최상급은 than과 쓰지 않아요."}, {text:"efficienter",wrongReason:"긴 단어는 -er을 붙이지 않아요. more efficient."} ], explanation: "긴 형용사 비교급 → more + 원급." },
          { q: "Seoul is one of _____ cities in Asia.", choices: [ {text:"the largest",correct:true}, {text:"larger",wrongReason:"one of + the 최상급 + 복수명사 구조."}, {text:"large",wrongReason:"one of + the 최상급 + 복수명사 구조."}, {text:"largest",wrongReason:"최상급 앞엔 the가 필요해요."} ], explanation: "one of the 최상급 + 복수명사." },
          { q: "The new office is _____ as the old one.", choices: [ {text:"as spacious",correct:true}, {text:"more spacious",wrongReason:"as가 두 번 쓰였으므로 동등 비교. 원급이 와요."}, {text:"most spacious",wrongReason:"최상급은 as~as와 결합하지 않아요."}, {text:"spaciouser",wrongReason:"spacious의 비교급은 more spacious. 동등 비교엔 원급."} ], explanation: "as + 원급 + as. spacious." },
          { q: "Our team finished the project _____ than expected.", choices: [ {text:"faster",correct:true}, {text:"fast",wrongReason:"than이 있으므로 비교급."}, {text:"fastest",wrongReason:"최상급은 than과 쓰지 않아요."}, {text:"more fast",wrongReason:"fast는 1음절이라 -er을 붙여요."} ], explanation: "비교급 + than. faster." },
          { q: "This is _____ important meeting of the year.", choices: [ {text:"the most",correct:true}, {text:"more",wrongReason:"'가장'이라는 의미엔 최상급. more는 비교급."}, {text:"most",wrongReason:"최상급 앞엔 보통 the를 붙여요."}, {text:"more important",wrongReason:"문맥상 '가장' 중요한. 비교급 불가."} ], explanation: "최상급 the most + 원급." },
          { q: "This model is _____ the previous one.", choices: [ {text:"better than",correct:true}, {text:"best than",wrongReason:"최상급은 than과 쓰지 않아요."}, {text:"more better than",wrongReason:"비교급 중복. better 단독."}, {text:"more good than",wrongReason:"good의 비교급은 better (불규칙)."} ], explanation: "good의 비교급 불규칙 → better." },
          { q: "Of all the candidates, she has _____ experience.", choices: [ {text:"the most",correct:true}, {text:"more",wrongReason:"'모든 후보 중 가장'이라는 범위 최상 비교."}, {text:"much",wrongReason:"much는 비교 의미가 없어요."}, {text:"most",wrongReason:"보통 최상급엔 the를 붙여요."} ], explanation: "Of all ~ → the most." },
          { q: "The new system is not _____ as the old one.", choices: [ {text:"as complicated",correct:true}, {text:"more complicated",wrongReason:"as~as 구조엔 원급."}, {text:"most complicated",wrongReason:"as~as 구조엔 원급."}, {text:"complicateder",wrongReason:"긴 단어는 more로. as~as 구조엔 원급."} ], explanation: "not as + 원급 + as (~만큼 ~하지 않다)." }
        ]
      },
      medium: {
        name: "중 · 800점대",
        summary: "비교급 강조, the + 비교급 ~ the + 비교급",
        rules: [
          { title: "비교급 강조 부사", body: "much/even/still/far/by far/a lot + 비교급. very는 비교급을 강조하지 못해요.", example: "This is <u>much</u> better than the other option.", translation: "이것이 다른 옵션보다 훨씬 낫다." },
          { title: "the + 비교급 ~ the + 비교급", body: "'~할수록 더 ~하다'.", example: "<u>The more</u> you practice, <u>the better</u> you become.", translation: "연습할수록 더 잘하게 된다." },
          { title: "not so much A as B", body: "'A라기보단 B'. 관용 표현.", example: "She is <u>not so much</u> a manager <u>as</u> a mentor.", translation: "그녀는 매니저라기보단 멘토다." }
        ],
        questions: [
          { q: "This year's sales are _____ higher than last year's.", choices: [ {text:"much",correct:true}, {text:"very",wrongReason:"very는 원급을 강조해요. 비교급을 강조할 땐 much, even, far 등."}, {text:"more",wrongReason:"more + higher는 비교급 중복이라 불가."}, {text:"so",wrongReason:"so는 강조할 때 'so 원급'. 비교급 강조에는 much 등."} ], explanation: "비교급 강조 → much higher." },
          { q: "_____ you save now, _____ you will have later.", choices: [ {text:"The more ... the more",correct:true}, {text:"More ... more",wrongReason:"'~할수록 더 ~' 구조엔 the가 필요해요."}, {text:"The most ... the most",wrongReason:"최상급 구조가 아닌 비교급 상관구조."}, {text:"Much ... much",wrongReason:"'~할수록' 구조엔 the + 비교급."} ], explanation: "the + 비교급 ~ the + 비교급." },
          { q: "The new model is _____ more efficient than the previous one.", choices: [ {text:"far",correct:true}, {text:"very",wrongReason:"very는 원급 강조. 비교급 강조는 far/much/even 등."}, {text:"so",wrongReason:"so는 원급 강조."}, {text:"too",wrongReason:"too도 원급(~하기에 너무)을 수식. 비교급 강조는 far."} ], explanation: "비교급 강조 부사 far." },
          { q: "This office is _____ bigger than my old one.", choices: [ {text:"even",correct:true}, {text:"very",wrongReason:"very는 원급 강조."}, {text:"more",wrongReason:"bigger 앞에 more 불가(비교급 중복)."}, {text:"so",wrongReason:"so는 원급."} ], explanation: "비교급 강조 even." },
          { q: "_____ we prepare, _____ we will perform in the test.", choices: [ {text:"The more ... the better",correct:true}, {text:"More ... better",wrongReason:"상관구조는 the + 비교급."}, {text:"The most ... the best",wrongReason:"최상급이 아니라 비교급 상관."}, {text:"Much ... much",wrongReason:"the + 비교급 구조가 필요해요."} ], explanation: "the more ~ the better." },
          { q: "The presentation was _____ impressive than I had expected.", choices: [ {text:"far more",correct:true}, {text:"very more",wrongReason:"very는 비교급을 강조하지 못해요."}, {text:"too more",wrongReason:"too도 비교급 강조 부사가 아니에요."}, {text:"so more",wrongReason:"so도 비교급 강조 부사가 아니에요."} ], explanation: "far/much/even + 비교급." },
          { q: "_____ the deadline approaches, _____ stressful the team feels.", choices: [ {text:"The closer ... the more",correct:true}, {text:"Closer ... more",wrongReason:"the + 비교급 구조 필요."}, {text:"The closest ... the most",wrongReason:"최상급이 아닌 비교급 상관."}, {text:"Much closer ... much more",wrongReason:"상관구조는 the 필수."} ], explanation: "the + 비교급 ~ the + 비교급." },
          { q: "The new assistant is _____ as efficient as Sarah.", choices: [ {text:"nearly",correct:true}, {text:"very",wrongReason:"very as ~ as는 불가. nearly/almost/just 등이 as 앞에 올 수 있어요."}, {text:"much",wrongReason:"much as는 쓰이지 않아요."}, {text:"far",wrongReason:"far as는 쓰이지 않아요."} ], explanation: "as~as 앞 강조 nearly/almost." },
          { q: "The problem is _____ complicated than we thought.", choices: [ {text:"much more",correct:true}, {text:"very more",wrongReason:"very는 비교급 강조 불가."}, {text:"more much",wrongReason:"어순이 잘못됐어요."}, {text:"too more",wrongReason:"too는 비교급 강조 불가."} ], explanation: "much more + 형용사 + than." },
          { q: "The more detailed the plan, _____ the chance of success.", choices: [ {text:"the higher",correct:true}, {text:"higher",wrongReason:"상관 구조 the more ~ the + 비교급."}, {text:"the highest",wrongReason:"최상급이 아닌 비교급 상관."}, {text:"more higher",wrongReason:"비교급 중복 불가."} ], explanation: "the more ~ the higher 구조." }
        ]
      },
      hard: {
        name: "상 · 900 목표",
        summary: "라틴계 비교 (superior to), no more than, 도치",
        rules: [
          { title: "라틴계 비교급", body: "superior/inferior/senior/junior/prior + to (than 아님).", example: "This method is <u>superior to</u> the previous one.", translation: "이 방법이 이전 것보다 우수하다." },
          { title: "no more than / not more than", body: "no more than = only (겨우). not more than = at most (많아야).", example: "She has <u>no more than</u> 10 dollars. (겨우 10달러)", translation: "그녀는 겨우 10달러밖에 없다." },
          { title: "the 최상급 = 부정 + 비교급", body: "'가장 ~하다'를 '어떤 것도 더 ~하지 않다'로 표현 가능.", example: "<u>Nothing is more important than</u> health.", translation: "건강보다 더 중요한 것은 없다." }
        ],
        questions: [
          { q: "The new product is _____ to the old version in every aspect.", choices: [ {text:"superior",correct:true}, {text:"superior than",wrongReason:"superior는 than이 아닌 to와 결합해요."}, {text:"more superior than",wrongReason:"superior 자체가 비교 의미를 담고 있어 more 불필요, 게다가 to와 결합."}, {text:"superiorer",wrongReason:"superior의 비교급 형태는 따로 없어요."} ], explanation: "superior + to (라틴 비교)." },
          { q: "There were _____ than 50 attendees at the seminar.", choices: [ {text:"no more",correct:true}, {text:"not more",wrongReason:"not more than = '많아야'. no more than = '겨우'. 여기선 문맥이 '겨우/많아야' 차이지만 토익은 no more than 관용 사용."}, {text:"no less",wrongReason:"no less than은 '~만큼이나'로 많음을 강조."}, {text:"any more",wrongReason:"'더 이상 ~아닌'은 부정문 끝 부사 구조."} ], explanation: "no more than = only (겨우 ~)." },
          { q: "She is two years _____ to her younger brother.", choices: [ {text:"senior",correct:true}, {text:"older",wrongReason:"older는 than과 짝. senior는 to와 짝을 이뤄요."}, {text:"elder",wrongReason:"elder는 한정적 용법으로 'elder brother' 형태. to와 결합하지 않아요."}, {text:"more older",wrongReason:"비교급 중복."} ], explanation: "senior + to (라틴 비교)." },
          { q: "_____ can replace the value of experience.", choices: [ {text:"Nothing",correct:true}, {text:"Anything",wrongReason:"긍정문에선 anything이 의미가 약해요. '아무것도 ~없다'는 부정어 주어."}, {text:"Everything",wrongReason:"'모든 것이 대체할 수 있다'는 의미가 반대."}, {text:"Something",wrongReason:"문맥에 맞지 않아요."} ], explanation: "Nothing ~ = '어떤 것도 ~하지 않다' (최상급 의미)." },
          { q: "This research is _____ to our previous findings.", choices: [ {text:"similar",correct:true}, {text:"similar than",wrongReason:"similar는 to와 결합. than은 비교급."}, {text:"more similar than",wrongReason:"similar to가 기본 구조."}, {text:"similarer",wrongReason:"similar의 비교급은 more similar. 또 similar은 to와 결합."} ], explanation: "similar + to." },
          { q: "The budget can cover _____ 100 participants.", choices: [ {text:"no more than",correct:true}, {text:"not more than",wrongReason:"no more than = 겨우 (only). 토익 관용 표현으로 자주 사용."}, {text:"no less than",wrongReason:"no less than = 무려/~만큼이나."}, {text:"any more than",wrongReason:"관용 표현이 아니에요."} ], explanation: "no more than = '겨우 ~'." },
          { q: "She is _____ of all the candidates we interviewed.", choices: [ {text:"the most qualified",correct:true}, {text:"more qualified",wrongReason:"all + of 맥락은 최상급."}, {text:"most qualified",wrongReason:"최상급 앞엔 the."}, {text:"the more qualified",wrongReason:"the more는 보통 특정 두 개 중 선택(the + 비교급 of the two)."} ], explanation: "of all + 복수 → the 최상급." },
          { q: "Our team's performance this quarter is _____ to last quarter's.", choices: [ {text:"inferior",correct:true}, {text:"worse than",wrongReason:"worse than도 가능하지만 문장 끝 구조가 to로 되어 있어 라틴 비교가 맞아요."}, {text:"more worse",wrongReason:"비교급 중복. worse는 bad의 비교급."}, {text:"inferior than",wrongReason:"inferior는 to와 결합."} ], explanation: "inferior + to." },
          { q: "_____ are more crucial to success than persistence and hard work.", choices: [ {text:"Few things",correct:true}, {text:"Many things",wrongReason:"최상급 의미 표현엔 부정어 주어가 필요해요."}, {text:"Some things",wrongReason:"부정어 맥락이 아니에요."}, {text:"Anything",wrongReason:"긍정문의 주어로 anything은 어색해요."} ], explanation: "Few things ~ = '거의 어떤 것도 ~하지 않다' (최상급 강조)." },
          { q: "The manuscript contains _____ errors than expected.", choices: [ {text:"far fewer",correct:true}, {text:"very fewer",wrongReason:"very는 원급 강조. 비교급 강조는 far/much."}, {text:"much less",wrongReason:"less는 불가산 명사에 써요. errors는 가산 복수라 fewer."}, {text:"fewer more",wrongReason:"비교 의미 중복."} ], explanation: "가산 명사엔 fewer. 강조는 far." }
        ]
      }
    }
  },

  // ====================== 9. 가정법 ======================
  {
    id: "subjunctive",
    icon: "💭",
    title: "가정법",
    description: "if 가정, 요구/제안 동사 that절",
    levels: {
      easy: {
        name: "하 · 기본",
        summary: "가정법 현재/과거",
        rules: [
          { title: "가정법 과거 (현재 사실의 반대)", body: "If + 주어 + 과거동사(were), 주어 + would/could/might + 원형.", example: "If I <u>had</u> more time, I would help you.", translation: "시간이 더 있다면 너를 도울 텐데." },
          { title: "단순 조건 (가정법 아님)", body: "실제 가능성 있는 조건은 현재 시제로. If + 현재, will + 원형.", example: "If it <u>rains</u>, we will cancel the event.", translation: "비가 오면 행사를 취소할 것이다." },
          { title: "be 동사의 가정법", body: "가정법에서는 주어와 상관없이 were를 쓰는 것이 격식체.", example: "If I <u>were</u> you, I would take the offer.", translation: "내가 너라면 그 제안을 받아들일 텐데." }
        ],
        questions: [
          { q: "If I _____ more money, I would invest in the stock market.", choices: [ {text:"had",correct:true}, {text:"have",wrongReason:"가정법 과거는 현재 사실의 반대. had + would 구조."}, {text:"will have",wrongReason:"가정법 과거는 현재 시제 불가."}, {text:"would have",wrongReason:"if절엔 과거형. 주절에 would가 와요."} ], explanation: "가정법 과거: If + 과거, would + 원형." },
          { q: "If she _____ harder, she could have passed the exam.", choices: [ {text:"had studied",correct:true}, {text:"studied",wrongReason:"could have + p.p.와 짝을 이루는 건 가정법 과거완료 had p.p."}, {text:"studies",wrongReason:"현재는 가정법 과거완료와 맞지 않아요."}, {text:"would study",wrongReason:"if절엔 had p.p., 주절에 would/could have p.p."} ], explanation: "가정법 과거완료: If had p.p., could have p.p." },
          { q: "If it _____ tomorrow, we will postpone the picnic.", choices: [ {text:"rains",correct:true}, {text:"rained",wrongReason:"will과 짝을 이루는 조건절은 현재 시제 (단순 조건)."}, {text:"will rain",wrongReason:"조건 부사절엔 미래 대신 현재."}, {text:"would rain",wrongReason:"단순 조건엔 would 불가. 현재 + will."} ], explanation: "단순 조건: If + 현재, will + 원형." },
          { q: "If I _____ you, I would accept the job offer.", choices: [ {text:"were",correct:true}, {text:"am",wrongReason:"가정법은 과거 동사. be동사는 were(격식)."}, {text:"was",wrongReason:"격식체 가정법에서는 주어와 상관없이 were."}, {text:"will be",wrongReason:"가정법 과거는 미래 시제 불가."} ], explanation: "가정법 과거 be동사 → were." },
          { q: "If we _____ earlier, we would not have missed the meeting.", choices: [ {text:"had left",correct:true}, {text:"left",wrongReason:"would not have missed는 가정법 과거완료와 짝. If절엔 had p.p."}, {text:"leave",wrongReason:"현재는 과거완료와 맞지 않아요."}, {text:"would leave",wrongReason:"if절에 would 직접 사용 불가."} ], explanation: "가정법 과거완료: If had p.p., would have p.p." },
          { q: "If the company _____ expanded, it would have more revenue.", choices: [ {text:"had",correct:true}, {text:"has",wrongReason:"would have + p.p.는 가정법 과거완료. 주절에 would + 원형이면 과거, would have + p.p.면 과거완료."}, {text:"will have",wrongReason:"가정법엔 미래 시제 불가."}, {text:"would have",wrongReason:"if절엔 had p.p."} ], explanation: "would have + p.p. 주절 → if had p.p." },
          { q: "If the manager _____ here, she would solve the problem.", choices: [ {text:"were",correct:true}, {text:"is",wrongReason:"가정법 과거 be동사 → were."}, {text:"will be",wrongReason:"가정법 과거는 현재 사실 반대."}, {text:"would be",wrongReason:"if절엔 과거, 주절에 would."} ], explanation: "가정법 과거 be → were." },
          { q: "I would tell you if I _____ the answer.", choices: [ {text:"knew",correct:true}, {text:"know",wrongReason:"가정법 과거는 과거 동사."}, {text:"will know",wrongReason:"미래 시제 불가."}, {text:"had known",wrongReason:"과거완료는 would have p.p.와 짝. 주절이 would tell이므로 과거."} ], explanation: "would + 원형 ↔ if 과거. knew." },
          { q: "If she _____ the offer, she would be the CEO now.", choices: [ {text:"had accepted",correct:true}, {text:"accepted",wrongReason:"would be now는 현재 결과. 과거 원인 + 현재 결과는 혼합 가정법: If had p.p., would + 원형."}, {text:"accepts",wrongReason:"혼합 가정법에선 if절이 과거완료."}, {text:"would accept",wrongReason:"if절에 would 직접 불가."} ], explanation: "혼합 가정법: If had p.p., would + 원형 (now)." },
          { q: "Unless you _____, you won't pass the exam.", choices: [ {text:"study",correct:true}, {text:"studied",wrongReason:"Unless는 if not과 같아요. 단순 조건엔 현재."}, {text:"will study",wrongReason:"조건 부사절엔 미래 대신 현재."}, {text:"would study",wrongReason:"단순 조건엔 would 불가."} ], explanation: "Unless(= if not) + 현재, will + 원형." }
        ]
      },
      medium: {
        name: "중 · 800점대",
        summary: "가정법 과거완료, 혼합 가정법",
        rules: [
          { title: "가정법 과거완료", body: "과거 사실의 반대. If + had + p.p., would/could/might + have + p.p.", example: "If we <u>had known</u>, we would have warned you.", translation: "알았더라면 경고했을 텐데." },
          { title: "혼합 가정법", body: "과거 원인 → 현재 결과. If + had p.p., would + 원형 (now).", example: "If I <u>had taken</u> that job, I would be rich now.", translation: "그 일을 맡았더라면 지금 부자일 텐데." },
          { title: "I wish / as if", body: "현재 사실과 다른 소망/상황: wish + 과거. 과거 사실과 다른 소망: wish + had p.p.", example: "I wish I <u>spoke</u> Spanish.", translation: "내가 스페인어를 할 수 있으면 좋겠다." }
        ],
        questions: [
          { q: "I wish I _____ more time to finish the project.", choices: [ {text:"had",correct:true}, {text:"have",wrongReason:"wish 뒤엔 과거 (가정법 과거)를 써서 현재 사실의 반대를 표현."}, {text:"will have",wrongReason:"wish 뒤엔 미래 시제 불가."}, {text:"would have",wrongReason:"wish 뒤에 would는 '~였으면'의 미래 의지 표현. 상태 동사엔 과거가 자연스러워요."} ], explanation: "wish + 과거 = 현재 사실 반대." },
          { q: "If I _____ to the meeting, I could have voted.", choices: [ {text:"had gone",correct:true}, {text:"went",wrongReason:"could have + p.p.는 가정법 과거완료. If절엔 had p.p."}, {text:"go",wrongReason:"현재는 과거완료와 맞지 않아요."}, {text:"would go",wrongReason:"if절에 would 직접 불가."} ], explanation: "가정법 과거완료 쌍." },
          { q: "He speaks as if he _____ the CEO of the company.", choices: [ {text:"were",correct:true}, {text:"is",wrongReason:"as if 뒤 가정법은 과거 (사실 반대). 그는 실제로 CEO가 아니에요."}, {text:"will be",wrongReason:"가정법 과거엔 미래 불가."}, {text:"has been",wrongReason:"현재완료는 가정법 과거와 맞지 않아요."} ], explanation: "as if + 과거 = 현재 사실 반대." },
          { q: "Had she _____ the email, she would have responded immediately.", choices: [ {text:"received",correct:true}, {text:"receive",wrongReason:"Had + 주어 + p.p.는 가정법 과거완료의 if 생략 도치형. p.p.가 필요해요."}, {text:"receiving",wrongReason:"had + V-ing는 불가. p.p."}, {text:"would receive",wrongReason:"도치 구조에선 과거분사."} ], explanation: "Had + 주어 + p.p. = If 생략 도치." },
          { q: "If the company had invested in R&D, it _____ more competitive now.", choices: [ {text:"would be",correct:true}, {text:"would have been",wrongReason:"'지금(now)'이라는 현재 결과를 말하는 혼합 가정법. 주절에 would + 원형."}, {text:"will be",wrongReason:"가정법엔 미래 불가."}, {text:"had been",wrongReason:"if절은 이미 had invested."} ], explanation: "혼합 가정법: had p.p. ↔ would + 원형 (now)." },
          { q: "She wishes she _____ a second language in school.", choices: [ {text:"had studied",correct:true}, {text:"studied",wrongReason:"학창 시절에 공부하지 않았던 것에 대한 후회 → 과거 사실 반대는 wish + had p.p."}, {text:"studies",wrongReason:"현재 습관은 wish와 맞지 않아요."}, {text:"would study",wrongReason:"would study는 미래 의지. 과거 후회는 had p.p."} ], explanation: "wish + had p.p. = 과거 사실 반대 후회." },
          { q: "I would help you if I _____ how.", choices: [ {text:"knew",correct:true}, {text:"know",wrongReason:"가정법 과거. knew."}, {text:"had known",wrongReason:"would help(현재)와 짝은 과거형. had known은 would have helped와 짝."}, {text:"will know",wrongReason:"가정법엔 미래 불가."} ], explanation: "가정법 과거 쌍." },
          { q: "If we had more resources, we _____ the project on time.", choices: [ {text:"could complete",correct:true}, {text:"could have completed",wrongReason:"if절이 had(과거)이므로 가정법 과거. 주절은 could + 원형."}, {text:"will complete",wrongReason:"가정법엔 미래 불가."}, {text:"completed",wrongReason:"주절엔 would/could/might + 원형."} ], explanation: "If + 과거, could + 원형." },
          { q: "The building looks as if it _____ for many years.", choices: [ {text:"had been abandoned",correct:true}, {text:"was abandoned",wrongReason:"for many years(기간)와 결합 + 현재 시점에서 과거 상태를 말하므로 과거완료 수동."}, {text:"is abandoned",wrongReason:"가정법 as if는 과거/과거완료."}, {text:"would be abandoned",wrongReason:"가정법 as if에 would 직접 불가."} ], explanation: "as if + 과거완료 = 더 이전 사실 반대." },
          { q: "_____ I known about the change, I would have prepared differently.", choices: [ {text:"Had",correct:true}, {text:"If",wrongReason:"If를 쓰면 If I had known. 단독 If만 쓰면 문법이 성립하지 않아요."}, {text:"Did",wrongReason:"가정법 과거완료 도치는 Had + 주어 + p.p."}, {text:"Have",wrongReason:"현재완료는 가정법 구조와 맞지 않아요."} ], explanation: "If 생략 도치: Had + 주어 + p.p." }
        ]
      },
      hard: {
        name: "상 · 900 목표",
        summary: "요구/제안 that + (should) + 원형, if 생략 도치",
        rules: [
          { title: "요구/제안 동사 + that + (should) + 원형", body: "suggest, recommend, request, demand, insist, propose, require + that + 주어 + (should) + 원형.", example: "She insisted that he <u>(should) be</u> promoted.", translation: "그녀는 그가 승진되어야 한다고 주장했다." },
          { title: "if 생략 도치", body: "Were/Had/Should가 문두로 나오면서 if 생략 가능.", example: "<u>Were</u> I in your position, I would accept.", translation: "내가 네 입장이라면 받아들일 텐데." },
          { title: "Should 가정법 (미래 불확실)", body: "Should + 주어 + 원형 = '혹시라도 ~하면'. 실현 가능성 낮은 미래.", example: "<u>Should</u> you need assistance, please call me.", translation: "혹시 도움이 필요하면 전화해 주세요." }
        ],
        questions: [
          { q: "The board recommended that the policy _____ revised immediately.", choices: [ {text:"be",correct:true}, {text:"is",wrongReason:"recommend + that + 주어 + (should) + 원형. 원형이 와요."}, {text:"was",wrongReason:"과거가 아닌 원형. 가정법 현재."}, {text:"will be",wrongReason:"요구/제안 동사 뒤엔 원형."} ], explanation: "recommend that + 주어 + (should) be." },
          { q: "_____ you have any questions, please contact HR.", choices: [ {text:"Should",correct:true}, {text:"If",wrongReason:"If를 쓰면 현재 시제가 필요해요. 도치 구조는 Should + 주어 + 원형."}, {text:"Were",wrongReason:"Were는 be 가정법. 일반 동사엔 Should."}, {text:"Had",wrongReason:"Had는 과거완료. 미래 가능성은 Should."} ], explanation: "Should + 주어 + 원형 = '혹시 ~하면'." },
          { q: "It is essential that the report _____ by tomorrow morning.", choices: [ {text:"be completed",correct:true}, {text:"is completed",wrongReason:"essential/important/necessary + that + 주어 + (should) + 원형. 수동은 be + p.p."}, {text:"completes",wrongReason:"원형 수동이 필요해요."}, {text:"will be completed",wrongReason:"요구/제안 구조엔 미래 시제 불가."} ], explanation: "It is essential that + 주어 + (should) be + p.p." },
          { q: "_____ I known the meeting was canceled, I wouldn't have come.", choices: [ {text:"Had",correct:true}, {text:"If",wrongReason:"If 단독은 안 되고 If I had known이 돼야 해요. 도치 구조는 Had."}, {text:"Were",wrongReason:"일반 동사 과거완료 도치는 Had."}, {text:"Did",wrongReason:"가정법 도치는 Had + p.p."} ], explanation: "Had + 주어 + p.p. 도치." },
          { q: "The manager insisted that all employees _____ the safety training.", choices: [ {text:"attend",correct:true}, {text:"attended",wrongReason:"insist + that + 주어 + (should) + 원형. 원형."}, {text:"attends",wrongReason:"요구 동사 뒤엔 원형 (단수 주어여도)."}, {text:"will attend",wrongReason:"요구/제안 뒤엔 원형."} ], explanation: "insist that + 원형." },
          { q: "_____ it not for your support, we could not have succeeded.", choices: [ {text:"Were",correct:true}, {text:"If",wrongReason:"If 단독은 성립하지 않아요. 도치는 Were."}, {text:"Had",wrongReason:"'Were it not for' 관용 표현(If it were not for)."}, {text:"Should",wrongReason:"Should는 미래 불확실. 관용은 Were it not for."} ], explanation: "Were it not for ~ = '~이 없다면'. 관용 도치." },
          { q: "The doctor suggested that he _____ smoking immediately.", choices: [ {text:"quit",correct:true}, {text:"quits",wrongReason:"suggest + that + 주어 + (should) + 원형. 원형."}, {text:"quitted",wrongReason:"과거가 아닌 원형."}, {text:"would quit",wrongReason:"요구/제안 뒤엔 원형."} ], explanation: "suggest that + 원형." },
          { q: "_____ more students attend the workshop, we would need a larger room.", choices: [ {text:"Should",correct:true}, {text:"If",wrongReason:"If 뒤엔 동사. 도치 구조는 Should."}, {text:"Were",wrongReason:"일반 동사엔 Should."}, {text:"Had",wrongReason:"Had는 과거완료. 미래 가능성엔 Should."} ], explanation: "Should + 주어 + 원형 = 미래 불확실 조건." },
          { q: "It is imperative that every member _____ present at the meeting.", choices: [ {text:"be",correct:true}, {text:"is",wrongReason:"imperative + that + (should) + 원형."}, {text:"was",wrongReason:"요구/제안 뒤엔 원형."}, {text:"will be",wrongReason:"요구/제안 뒤엔 원형."} ], explanation: "imperative that + (should) be." },
          { q: "The CEO demanded that the project _____ on time.", choices: [ {text:"be completed",correct:true}, {text:"is completed",wrongReason:"demand + that + (should) + 원형. 수동은 be p.p."}, {text:"was completed",wrongReason:"요구 동사 뒤엔 원형."}, {text:"completed",wrongReason:"수동이 필요한 맥락(프로젝트는 완료되는 대상)."} ], explanation: "demand that + (should) be + p.p." }
        ]
      }
    }
  },

  // ====================== 10. 분사 ======================
  {
    id: "participle",
    icon: "🎭",
    title: "분사",
    description: "현재분사 vs 과거분사",
    levels: {
      easy: {
        name: "하 · 기본",
        summary: "V-ing (능동) vs V-ed (수동)",
        rules: [
          { title: "현재분사 (V-ing) = 능동/진행", body: "수식하는 명사가 '~하는, ~하고 있는'.", example: "The <u>running</u> water sounds relaxing.", translation: "흐르는 물 소리가 편안하다." },
          { title: "과거분사 (V-ed) = 수동/완료", body: "수식하는 명사가 '~된, ~받은'.", example: "The <u>broken</u> window was repaired.", translation: "깨진 창문이 수리되었다." },
          { title: "분사 위치", body: "수식어가 짧으면 명사 앞, 길면 명사 뒤.", example: "The report <u>written by John</u> was excellent.", translation: "John이 쓴 보고서는 훌륭했다." }
        ],
        questions: [
          { q: "The _____ employees received a bonus for their hard work.", choices: [ {text:"dedicated",correct:true}, {text:"dedicating",wrongReason:"직원들은 '헌신된'이라는 수동/완료 의미. dedicating은 '헌신시키는'."}, {text:"dedicate",wrongReason:"dedicate는 동사 원형. 명사 수식엔 분사가 필요해요."}, {text:"dedication",wrongReason:"dedication은 명사. 명사 두 개 연속으로는 자연스럽지 않아요."} ], explanation: "직원이 '헌신된/헌신적인' 상태 → 과거분사 dedicated." },
          { q: "The report _____ by the analyst was very detailed.", choices: [ {text:"written",correct:true}, {text:"writing",wrongReason:"보고서는 '작성되는' 대상(수동). writing은 능동."}, {text:"write",wrongReason:"write는 동사 원형. 수식엔 분사."}, {text:"wrote",wrongReason:"wrote는 과거 동사. 수식엔 분사 written."} ], explanation: "The report (which was) written by ~. 수동 과거분사." },
          { q: "The _____ door needs to be fixed immediately.", choices: [ {text:"broken",correct:true}, {text:"breaking",wrongReason:"문은 '부서진' 상태(수동). breaking은 '부수는'."}, {text:"breaks",wrongReason:"breaks는 현재 동사. 분사가 필요해요."}, {text:"break",wrongReason:"break는 동사 원형. 분사가 필요해요."} ], explanation: "문이 '부서진' 상태 → broken." },
          { q: "We saw a man _____ in the park.", choices: [ {text:"running",correct:true}, {text:"run",wrongReason:"run은 원형. saw + 목적어 + V-ing 지각동사 구조는 V-ing가 자연스러워요."}, {text:"ran",wrongReason:"ran은 과거. 분사형이 필요해요."}, {text:"runs",wrongReason:"runs는 현재. 분사가 필요해요."} ], explanation: "지각동사 + 목적어 + V-ing (진행 중)." },
          { q: "The _____ package arrived this morning.", choices: [ {text:"ordered",correct:true}, {text:"ordering",wrongReason:"패키지는 '주문된' 대상. ordering은 '주문하는'."}, {text:"order",wrongReason:"order는 동사 원형/명사."}, {text:"orders",wrongReason:"orders는 복수 명사/현재 동사. 분사가 필요해요."} ], explanation: "패키지가 '주문된' 상태 → ordered." },
          { q: "The _____ employees left the building at 6 PM.", choices: [ {text:"remaining",correct:true}, {text:"remained",wrongReason:"'남은' 직원들은 능동 의미로 '남아 있는'. remaining이 맞아요."}, {text:"remain",wrongReason:"remain은 동사 원형."}, {text:"remains",wrongReason:"remains는 현재 동사/명사."} ], explanation: "'남아 있는' → 현재분사 remaining (자동사는 능동 V-ing)." },
          { q: "The manager gave a _____ speech at the conference.", choices: [ {text:"motivating",correct:true}, {text:"motivated",wrongReason:"연설이 청중을 '동기부여하는' 감정 주는 상황 → -ing. motivated는 '동기부여 받은'(사람)."}, {text:"motivate",wrongReason:"motivate는 원형."}, {text:"motivation",wrongReason:"motivation은 명사. 형용사 역할의 분사가 필요해요."} ], explanation: "감정 유발자 → V-ing (motivating)." },
          { q: "The _____ contract includes new clauses about remote work.", choices: [ {text:"revised",correct:true}, {text:"revising",wrongReason:"계약은 '수정된' 대상. revising은 '수정하는'."}, {text:"revise",wrongReason:"원형은 명사 수식 불가."}, {text:"revision",wrongReason:"명사. 분사가 명사를 수식해야 해요."} ], explanation: "계약이 '수정된' 상태 → revised." },
          { q: "The students _____ in the workshop learned valuable skills.", choices: [ {text:"participating",correct:true}, {text:"participated",wrongReason:"participate는 자동사라 수동 분사가 나오지 않아요. '참가하고 있는' 능동 V-ing."}, {text:"participate",wrongReason:"원형."}, {text:"participation",wrongReason:"명사."} ], explanation: "자동사 participate → 능동 V-ing." },
          { q: "The _____ customers appreciated the quick response.", choices: [ {text:"waiting",correct:true}, {text:"waited",wrongReason:"wait는 자동사. 수동 분사 불가. '기다리고 있는'은 V-ing."}, {text:"wait",wrongReason:"원형은 수식 불가."}, {text:"waits",wrongReason:"현재 동사 불가."} ], explanation: "자동사 wait → waiting (능동)." }
        ]
      },
      medium: {
        name: "중 · 800점대",
        summary: "감정 분사 (interesting vs interested)",
        rules: [
          { title: "감정 유발자 V-ing vs 감정 경험자 V-ed", body: "사물이 감정을 유발하면 -ing (interesting, exciting), 사람이 감정을 느끼면 -ed (interested, excited).", example: "The movie was <u>interesting</u>. (사물) / She was <u>interested</u>. (사람)", translation: "" },
          { title: "대표적 감정 분사", body: "bored/boring, confused/confusing, surprised/surprising, satisfied/satisfying, disappointed/disappointing.", example: "The results were <u>satisfying</u> to the team.", translation: "결과는 팀에게 만족스러웠다." },
          { title: "분사 수식 위치", body: "단독 분사는 명사 앞, 구를 이루면 명사 뒤에서 수식.", example: "The <u>excited</u> crowd / The crowd <u>excited by the news</u>.", translation: "" }
        ],
        questions: [
          { q: "The presentation was really _____ to the audience.", choices: [ {text:"interesting",correct:true}, {text:"interested",wrongReason:"프레젠테이션(사물)이 흥미를 유발 → V-ing. interested는 사람이 느끼는 감정."}, {text:"interest",wrongReason:"interest는 동사/명사. 보어엔 형용사(분사)."}, {text:"interests",wrongReason:"복수 명사. 보어엔 분사 형용사."} ], explanation: "사물 감정 유발 → -ing. interesting." },
          { q: "The employees were _____ with the new benefits.", choices: [ {text:"satisfied",correct:true}, {text:"satisfying",wrongReason:"직원(사람)이 만족을 느낌 → -ed."}, {text:"satisfy",wrongReason:"satisfy는 동사."}, {text:"satisfaction",wrongReason:"satisfaction은 명사. be + 형용사 구조."} ], explanation: "사람 감정 경험 → -ed. satisfied." },
          { q: "The results of the survey were _____.", choices: [ {text:"surprising",correct:true}, {text:"surprised",wrongReason:"결과(사물)가 놀라움을 유발 → -ing."}, {text:"surprise",wrongReason:"surprise는 동사/명사. 보어엔 형용사."}, {text:"surprises",wrongReason:"복수 명사/현재 동사."} ], explanation: "결과(사물) → -ing. surprising." },
          { q: "I find this project very _____.", choices: [ {text:"challenging",correct:true}, {text:"challenged",wrongReason:"프로젝트(사물)가 도전적으로 느껴짐 → -ing. challenged는 '도전받은'."}, {text:"challenge",wrongReason:"동사/명사. 보어엔 형용사."}, {text:"challenges",wrongReason:"복수 명사. 형용사가 필요."} ], explanation: "사물 감정 유발 → -ing. challenging." },
          { q: "The _____ customers complained about the delay.", choices: [ {text:"frustrated",correct:true}, {text:"frustrating",wrongReason:"고객(사람)이 좌절감을 느낌 → -ed. frustrating은 '좌절시키는'."}, {text:"frustrate",wrongReason:"동사."}, {text:"frustration",wrongReason:"명사."} ], explanation: "사람 감정 경험 → -ed. frustrated." },
          { q: "The training program was _____ and well-organized.", choices: [ {text:"exciting",correct:true}, {text:"excited",wrongReason:"프로그램(사물)이 흥미를 유발 → -ing."}, {text:"excite",wrongReason:"excite는 동사."}, {text:"excitement",wrongReason:"명사. 보어엔 형용사."} ], explanation: "사물 → -ing. exciting." },
          { q: "The staff felt _____ after the long meeting.", choices: [ {text:"exhausted",correct:true}, {text:"exhausting",wrongReason:"staff(사람)가 피곤함을 느낌 → -ed."}, {text:"exhaust",wrongReason:"동사."}, {text:"exhaustion",wrongReason:"명사."} ], explanation: "사람 감정 → -ed. exhausted." },
          { q: "The manager was _____ by the team's quick response.", choices: [ {text:"impressed",correct:true}, {text:"impressing",wrongReason:"매니저(사람)가 감명 받음 → -ed."}, {text:"impress",wrongReason:"동사."}, {text:"impression",wrongReason:"명사."} ], explanation: "사람 감정 → -ed. impressed." },
          { q: "The news about the merger was _____ for everyone.", choices: [ {text:"shocking",correct:true}, {text:"shocked",wrongReason:"뉴스(사물)가 충격 → -ing."}, {text:"shock",wrongReason:"동사/명사."}, {text:"shocks",wrongReason:"복수 명사/현재 동사."} ], explanation: "사물 → -ing. shocking." },
          { q: "We were all _____ with her outstanding performance.", choices: [ {text:"delighted",correct:true}, {text:"delighting",wrongReason:"우리(사람)가 기쁨을 느낌 → -ed."}, {text:"delight",wrongReason:"동사/명사."}, {text:"delightful",wrongReason:"delightful은 형용사(즐거운). 감정 분사의 고정 쌍은 delighted/delighting."} ], explanation: "사람 감정 → -ed. delighted." }
        ]
      },
      hard: {
        name: "상 · 900 목표",
        summary: "분사구문, 독립 분사구문",
        rules: [
          { title: "분사구문", body: "접속사 + 주어 + 동사 → (접속사 생략) + V-ing/V-ed. 동시동작, 이유, 조건, 시간 등.", example: "<u>Seeing the delay</u>, we called the client. (= As we saw the delay, ...)", translation: "지연을 보고 우리는 고객에게 전화했다." },
          { title: "완료 분사구문 (Having + p.p.)", body: "주절보다 더 이전의 일을 나타낼 때.", example: "<u>Having finished</u> the report, she left the office.", translation: "보고서를 끝낸 후, 그녀는 사무실을 나섰다." },
          { title: "독립 분사구문 / with + 목적어 + 분사", body: "분사구문의 의미상 주어가 주절 주어와 다를 때 명시. with는 부대 상황.", example: "<u>With the deadline approaching</u>, we worked overtime.", translation: "마감이 다가오는 가운데, 우리는 야근했다." }
        ],
        questions: [
          { q: "_____ the email, the manager decided to respond immediately.", choices: [ {text:"Having read",correct:true}, {text:"Reading",wrongReason:"Reading은 동시동작. '읽은 후 결정했다'는 시간 순서이므로 완료 분사가 더 정확해요."}, {text:"Read",wrongReason:"분사구문은 V-ing 또는 Having p.p."}, {text:"To read",wrongReason:"to 부정사는 목적. 분사구문이 필요해요."} ], explanation: "주절보다 이전 동작 → Having p.p." },
          { q: "_____ in 1995, the company has grown significantly.", choices: [ {text:"Founded",correct:true}, {text:"Founding",wrongReason:"회사는 '설립된' 수동. Founding은 능동."}, {text:"To found",wrongReason:"to 부정사는 목적. 분사구문이 필요."}, {text:"Having founded",wrongReason:"Having p.p.는 능동 완료. 수동은 (Having been) founded."} ], explanation: "수동 분사구문 → (Being) Founded." },
          { q: "_____ more time, we could have completed the project.", choices: [ {text:"Given",correct:true}, {text:"Giving",wrongReason:"우리가 시간을 '받았다면'이라는 수동 의미."}, {text:"To give",wrongReason:"to 부정사는 목적."}, {text:"Gave",wrongReason:"과거 동사는 분사구문이 아니에요."} ], explanation: "수동 Given = If we had been given." },
          { q: "_____ the situation, the manager called an emergency meeting.", choices: [ {text:"Considering",correct:true}, {text:"Considered",wrongReason:"매니저가 '고려하는' 능동. Considered는 수동."}, {text:"To consider",wrongReason:"목적이 아닌 이유/원인."}, {text:"Having been considered",wrongReason:"주어(매니저)가 고려되는 대상이 아니에요."} ], explanation: "능동 분사구문 → V-ing." },
          { q: "With the project _____, the team can focus on new tasks.", choices: [ {text:"completed",correct:true}, {text:"completing",wrongReason:"with + 목적어 + 분사. 프로젝트는 '완료된' 수동."}, {text:"to complete",wrongReason:"to 부정사는 쓰지 않아요."}, {text:"complete",wrongReason:"원형은 불가. 분사가 필요해요."} ], explanation: "with + 목적어 + p.p. (수동 부대 상황)." },
          { q: "_____ all the documents, she submitted them to the legal team.", choices: [ {text:"Having reviewed",correct:true}, {text:"Reviewing",wrongReason:"Reviewing은 동시동작. '검토한 후 제출했다'는 시간 순서라 완료 분사."}, {text:"Review",wrongReason:"원형 불가."}, {text:"Reviewed",wrongReason:"과거분사는 수동. 그녀가 '검토된' 것이 아니에요."} ], explanation: "시간 순서 완료 → Having reviewed." },
          { q: "_____ from the crowd, the speaker began his speech.", choices: [ {text:"Separated",correct:true}, {text:"Separating",wrongReason:"연사가 군중과 '분리된' 수동. Separating은 능동(분리하는)."}, {text:"To separate",wrongReason:"to 부정사 아님."}, {text:"Separates",wrongReason:"현재 동사 불가."} ], explanation: "수동 분사구문 → Separated." },
          { q: "With everyone _____ their seats, the ceremony started.", choices: [ {text:"taking",correct:true}, {text:"taken",wrongReason:"사람이 자리를 '잡는' 능동. taken은 수동."}, {text:"to take",wrongReason:"with + 목적어 + V-ing/p.p./형용사."}, {text:"take",wrongReason:"원형은 불가."} ], explanation: "with + 목적어 + V-ing (능동 부대 상황)." },
          { q: "_____ properly, this device can last for years.", choices: [ {text:"Used",correct:true}, {text:"Using",wrongReason:"기기는 '사용되는' 수동. Using은 능동."}, {text:"To use",wrongReason:"조건 분사구문은 분사로."}, {text:"Use",wrongReason:"원형 불가."} ], explanation: "수동 분사구문 → Used (= If used)." },
          { q: "_____ the weather, the outdoor event was postponed.", choices: [ {text:"Given",correct:true}, {text:"Giving",wrongReason:"'날씨를 고려할 때'라는 관용 분사. Given이 전치사/분사로 쓰여요."}, {text:"To give",wrongReason:"관용 표현은 Given."}, {text:"Gave",wrongReason:"과거 동사는 분사 구문이 아니에요."} ], explanation: "Given + 명사구 = '~을 고려할 때'." }
        ]
      }
    }
  }

];

