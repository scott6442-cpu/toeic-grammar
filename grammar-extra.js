// grammar-extra.js
// 기출 토익 RC Part 5 어법 출제 경향 기반 오리지널 추가 문제 (총 150문항)
// 10개 주제 × (하/중/상) × 5문항. grammar.js의 각 레벨 questions 풀에 병합되어
// 매 테스트마다 더 다양한 문제 조합이 출제되도록 함. (GRAMMAR_TEST_SIZE=10)
const GRAMMAR_EXTRA = {
  "pos": {
    "easy": [
      {
        "q": "The marketing team submitted a detailed _____ to the board before the quarterly meeting.",
        "choices": [
          {
            "text": "proposal",
            "correct": true
          },
          {
            "text": "propose",
            "wrongReason": "동사 원형이라 관사 a/형용사 detailed 뒤 명사 자리에 올 수 없음."
          },
          {
            "text": "proposed",
            "wrongReason": "동사 과거형/과거분사라 형용사 detailed 뒤 명사 자리에 부적합."
          },
          {
            "text": "proposingly",
            "wrongReason": "부사 형태(실재하지 않는 단어이자 부사)는 관사+형용사 뒤 명사 자리에 올 수 없음."
          }
        ],
        "explanation": "관사 a와 형용사 detailed 뒤에는 명사가 와야 하므로 명사 proposal이 정답."
      },
      {
        "q": "Our new supervisor is very _____ to all employees in the department.",
        "choices": [
          {
            "text": "helpful",
            "correct": true
          },
          {
            "text": "help",
            "wrongReason": "명사/동사라 be동사+very 뒤 보어 자리(형용사)에 부적합."
          },
          {
            "text": "helpfully",
            "wrongReason": "부사라 be동사의 보어 자리에 올 수 없음(보어는 형용사)."
          },
          {
            "text": "helping",
            "wrongReason": "동명사/현재분사로 의미상 어색하며 very 뒤 상태 보어로는 형용사가 자연스러움."
          }
        ],
        "explanation": "be동사 is의 보어 자리이므로 형용사 helpful이 정답(very는 형용사 수식)."
      },
      {
        "q": "The technician carefully _____ the malfunctioning equipment before the inspection.",
        "choices": [
          {
            "text": "examined",
            "correct": true
          },
          {
            "text": "examination",
            "wrongReason": "명사라 주어 뒤 서술어(동사) 자리에 올 수 없음."
          },
          {
            "text": "examiner",
            "wrongReason": "사람 명사라 동사 자리에 부적합."
          },
          {
            "text": "examining",
            "wrongReason": "동명사/분사 단독으로는 본동사 역할을 못 해 문장의 술어가 될 수 없음."
          }
        ],
        "explanation": "주어 The technician 뒤에 술어 동사가 필요하므로 과거동사 examined가 정답(부사 carefully가 수식)."
      },
      {
        "q": "All visitors must wear a _____ badge while inside the factory building.",
        "choices": [
          {
            "text": "safety",
            "correct": true
          },
          {
            "text": "safely",
            "wrongReason": "부사라 관사 a와 명사 badge 사이 수식 자리에 올 수 없음."
          },
          {
            "text": "safe",
            "wrongReason": "형용사지만 여기서는 명사+명사 복합명사 'safety badge'가 자연스러우며 의미상 '안전 배지'가 적절."
          },
          {
            "text": "saved",
            "wrongReason": "동사 과거형/분사라 명사 앞 수식어로 의미가 통하지 않음."
          }
        ],
        "explanation": "관사 a와 명사 badge 앞에서 '안전 배지(safety badge)'를 이루는 명사 수식어 safety가 정답."
      },
      {
        "q": "The shipment arrived _____ despite the heavy snowstorm last week.",
        "choices": [
          {
            "text": "promptly",
            "correct": true
          },
          {
            "text": "prompt",
            "wrongReason": "형용사/명사라 완전한 자동사 arrived를 수식하는 자리에 올 수 없음."
          },
          {
            "text": "prompted",
            "wrongReason": "동사 과거형/분사라 이미 술어 arrived가 있는 문장에서 부사 자리에 부적합."
          },
          {
            "text": "promptness",
            "wrongReason": "명사라 동사 arrived를 수식할 수 없음."
          }
        ],
        "explanation": "완전한 동사 arrived를 수식하는 자리이므로 부사 promptly가 정답."
      }
    ],
    "medium": [
      {
        "q": "_____ the annual budget on time requires close cooperation between all departments.",
        "choices": [
          {
            "text": "Submitting",
            "correct": true
          },
          {
            "text": "Submit",
            "wrongReason": "동사 원형이라 문장 맨 앞 주어 자리에 올 수 없음."
          },
          {
            "text": "Submission",
            "wrongReason": "명사지만 뒤에 목적어 the annual budget를 직접 취할 수 없어 동명사가 필요(명사라면 of가 있어야 함)."
          },
          {
            "text": "Submitted",
            "wrongReason": "동사 과거형/분사라 단독으로 주어 자리에 올 수 없음."
          }
        ],
        "explanation": "목적어 the annual budget를 취하면서 주어 역할을 하려면 동명사가 필요하므로 Submitting이 정답(술어는 requires)."
      },
      {
        "q": "The supplier promised a _____ delivery so that the store could restock before the holiday rush.",
        "choices": [
          {
            "text": "timely",
            "correct": true
          },
          {
            "text": "time",
            "wrongReason": "명사라 관사 a와 명사 delivery 사이 수식어 자리(형용사)에 부적합."
          },
          {
            "text": "timed",
            "wrongReason": "분사로 '시간이 맞춰진'의 의미가 어색하며, '시기적절한'을 뜻하는 형용사가 문맥에 맞음."
          },
          {
            "text": "timing",
            "wrongReason": "동명사/명사라 관사와 명사 사이 형용사 자리에 올 수 없음."
          }
        ],
        "explanation": "-ly로 끝나지만 형용사인 timely(시기적절한)가 관사 a와 명사 delivery 사이 수식 자리에 와야 함."
      },
      {
        "q": "Please direct any complaints to the _____ desk located near the main entrance.",
        "choices": [
          {
            "text": "customer service",
            "correct": true
          },
          {
            "text": "customarily service",
            "wrongReason": "부사 customarily는 명사 service를 수식해 desk를 꾸밀 수 없고 복합명사를 이루지 못함."
          },
          {
            "text": "customer serving",
            "wrongReason": "serving은 동명사/분사라 '고객 서비스 데스크'라는 정착된 복합명사를 만들지 못함."
          },
          {
            "text": "customary service",
            "wrongReason": "형용사 customary(관례적인)는 의미상 어색하며, 정착된 복합명사 'customer service'가 정답."
          }
        ],
        "explanation": "명사+명사 복합명사 'customer service'가 명사 desk를 수식하는 자리이므로 customer service가 정답."
      },
      {
        "q": "The HR department posted a new _____ for an experienced accountant on the company website.",
        "choices": [
          {
            "text": "job opening",
            "correct": true
          },
          {
            "text": "job open",
            "wrongReason": "open은 형용사/동사라 명사 자리를 채우는 복합명사를 이루지 못함(a new ___ 뒤 명사 필요)."
          },
          {
            "text": "jobs opening",
            "wrongReason": "복합명사의 앞 명사는 보통 단수형(job)을 쓰므로 jobs는 부적절."
          },
          {
            "text": "job openly",
            "wrongReason": "부사 openly는 관사 a new 뒤 명사 자리에 올 수 없음."
          }
        ],
        "explanation": "관사 a new 뒤 명사 자리이자 '채용 공고'를 뜻하는 복합명사 'job opening'이 정답."
      },
      {
        "q": "Repairing the outdated servers _____ more time than the IT team had originally estimated.",
        "choices": [
          {
            "text": "requires",
            "correct": true
          },
          {
            "text": "require",
            "wrongReason": "동명사 주어 Repairing은 단수 취급이므로 복수 동사 require는 수일치에 맞지 않음."
          },
          {
            "text": "requiring",
            "wrongReason": "분사/동명사라 문장의 본동사 역할을 할 수 없음."
          },
          {
            "text": "requirement",
            "wrongReason": "명사라 술어 동사 자리에 올 수 없음."
          }
        ],
        "explanation": "동명사 주어 Repairing...은 단수 취급하므로 단수 동사 requires가 정답."
      }
    ],
    "hard": [
      {
        "q": "Although the new intern works _____, she still produces accurate and well-organized reports.",
        "choices": [
          {
            "text": "fast",
            "correct": true
          },
          {
            "text": "fastly",
            "wrongReason": "fastly는 존재하지 않는 단어이며 fast 자체가 부사로 쓰임."
          },
          {
            "text": "faster",
            "wrongReason": "비교급이라 비교 대상이 없는 이 문장에서는 부적절하며 단순히 '빠르게'의 부사가 필요."
          },
          {
            "text": "fastness",
            "wrongReason": "명사라 동사 works를 수식하는 부사 자리에 올 수 없음."
          }
        ],
        "explanation": "fast는 형태가 같은 형용사 겸 부사로, 동사 works를 수식하는 부사 자리에 fast가 정답."
      },
      {
        "q": "The CEO was _____ impressed by the startup's innovative approach to renewable energy.",
        "choices": [
          {
            "text": "highly",
            "correct": true
          },
          {
            "text": "high",
            "wrongReason": "high는 '높이/높은'의 물리적 의미라 '매우'의 정도를 나타내지 못해 impressed 수식에 부적합."
          },
          {
            "text": "height",
            "wrongReason": "명사라 과거분사 impressed를 수식하는 부사 자리에 올 수 없음."
          },
          {
            "text": "heighten",
            "wrongReason": "동사라 형용사화된 분사 impressed 앞 부사 자리에 올 수 없음."
          }
        ],
        "explanation": "'매우 ~한'의 정도를 나타내며 impressed를 수식해야 하므로 highly가 정답(high는 물리적 높이 의미)."
      },
      {
        "q": "The board considered the merger a _____ risk given the company's limited cash reserves.",
        "choices": [
          {
            "text": "considerable",
            "correct": true
          },
          {
            "text": "considerate",
            "wrongReason": "'사려 깊은'의 뜻이라 risk(위험)를 수식하기에 의미가 맞지 않음."
          },
          {
            "text": "considerably",
            "wrongReason": "부사라 관사 a와 명사 risk 사이 형용사 자리에 올 수 없음."
          },
          {
            "text": "consideration",
            "wrongReason": "명사라 관사 a와 명사 risk 사이 수식어(형용사) 자리에 부적합."
          }
        ],
        "explanation": "관사 a와 명사 risk 사이 형용사 자리이며 '상당한'을 뜻하는 considerable이 정답(considerate은 '사려 깊은')."
      },
      {
        "q": "The factory has _____ received any complaints about product quality since the upgrade.",
        "choices": [
          {
            "text": "hardly",
            "correct": true
          },
          {
            "text": "hard",
            "wrongReason": "'열심히/단단한'의 뜻이라 '거의 ~않다'라는 부정 의미를 전달하지 못해 문맥에 맞지 않음."
          },
          {
            "text": "harder",
            "wrongReason": "비교급으로 '거의 ~않다'의 의미가 없고 비교 대상도 없어 부적합."
          },
          {
            "text": "hardness",
            "wrongReason": "명사라 has와 received 사이 부사 자리에 올 수 없음."
          }
        ],
        "explanation": "'거의 ~않다'라는 준부정의 의미가 필요하므로 hardly가 정답(hard는 '열심히/단단한')."
      },
      {
        "q": "All three branch managers presented their _____ sales figures at the regional conference.",
        "choices": [
          {
            "text": "respective",
            "correct": true
          },
          {
            "text": "respectful",
            "wrongReason": "'공손한, 존중하는'의 뜻이라 sales figures를 수식하기에 의미가 어색함."
          },
          {
            "text": "respectable",
            "wrongReason": "'존경할 만한, 상당한'의 뜻이라 '각자의'라는 문맥에 맞지 않음."
          },
          {
            "text": "respectfully",
            "wrongReason": "부사라 명사 sales figures를 수식하는 형용사 자리에 올 수 없음."
          }
        ],
        "explanation": "'각자의'를 뜻하며 복수 주체의 각각을 가리키는 respective가 명사 앞 형용사 자리에 와야 함."
      }
    ]
  },
  "tense": {
    "easy": [
      {
        "q": "Our marketing team _____ a weekly report every Monday to keep all departments informed.",
        "choices": [
          {
            "text": "submits",
            "correct": true
          },
          {
            "text": "submitted",
            "wrongReason": "과거시제는 'every Monday'(매주 반복되는 현재 습관)와 충돌하며 과거 한 시점만을 가리킵니다."
          },
          {
            "text": "will submit",
            "wrongReason": "미래시제는 반복적 현재 습관을 나타내는 'every Monday'와 어울리지 않습니다."
          },
          {
            "text": "has submitted",
            "wrongReason": "현재완료는 과거부터 현재까지의 경험·결과를 나타내며, 매주 반복되는 현재 습관 표현과 맞지 않습니다."
          }
        ],
        "explanation": "'every Monday'(매주 월요일)는 반복되는 현재 습관을 나타내는 단서이므로 현재시제 submits가 정답입니다."
      },
      {
        "q": "The CEO _____ the new branch office in Singapore last week during her business trip.",
        "choices": [
          {
            "text": "visited",
            "correct": true
          },
          {
            "text": "visits",
            "wrongReason": "현재시제는 'last week'(지난주)라는 명확한 과거 시점과 충돌합니다."
          },
          {
            "text": "will visit",
            "wrongReason": "미래시제는 이미 끝난 과거 시점 'last week'와 어울리지 않습니다."
          },
          {
            "text": "is visiting",
            "wrongReason": "현재진행형은 지금 진행 중인 동작을 나타내며 과거 시점 'last week'와 맞지 않습니다."
          }
        ],
        "explanation": "'last week'(지난주)는 명확한 과거 시점 부사구이므로 과거시제 visited가 정답입니다."
      },
      {
        "q": "The factory manager _____ the safety inspection results to the board tomorrow morning.",
        "choices": [
          {
            "text": "will present",
            "correct": true
          },
          {
            "text": "presented",
            "wrongReason": "과거시제는 미래 시점인 'tomorrow morning'(내일 아침)과 충돌합니다."
          },
          {
            "text": "presents",
            "wrongReason": "현재시제는 반복 습관이나 일반적 사실에 쓰이며 특정 미래 시점 'tomorrow morning'과 맞지 않습니다."
          },
          {
            "text": "has presented",
            "wrongReason": "현재완료는 과거부터 현재까지를 나타내며 미래 시점 'tomorrow morning'과 어울리지 않습니다."
          }
        ],
        "explanation": "'tomorrow morning'(내일 아침)은 미래 시점 단서이므로 미래시제 will present가 정답입니다."
      },
      {
        "q": "Our company _____ its annual charity fundraiser in 2020, and it has grown larger every year since.",
        "choices": [
          {
            "text": "launched",
            "correct": true
          },
          {
            "text": "launches",
            "wrongReason": "현재시제는 'in 2020'이라는 특정 과거 연도와 충돌합니다."
          },
          {
            "text": "will launch",
            "wrongReason": "미래시제는 이미 일어난 'in 2020' 사건과 맞지 않습니다."
          },
          {
            "text": "is launching",
            "wrongReason": "현재진행형은 지금 진행 중인 일을 나타내며 과거 연도 'in 2020'과 어울리지 않습니다."
          }
        ],
        "explanation": "'in 2020'은 명확한 과거 연도 시점이므로 과거시제 launched가 정답입니다."
      },
      {
        "q": "The IT department usually _____ the office computers during the holiday break to install updates.",
        "choices": [
          {
            "text": "upgrades",
            "correct": true
          },
          {
            "text": "upgraded",
            "wrongReason": "과거시제는 반복적 습관을 나타내는 부사 'usually'(보통)와 충돌합니다."
          },
          {
            "text": "will upgrade",
            "wrongReason": "미래시제는 일반적 반복 습관을 나타내는 'usually'와 어울리지 않습니다."
          },
          {
            "text": "has upgraded",
            "wrongReason": "현재완료는 과거부터 현재까지의 결과를 나타내며 반복 습관 부사 'usually'와 맞지 않습니다."
          }
        ],
        "explanation": "'usually'(보통)는 반복되는 현재 습관을 나타내는 빈도부사이므로 현재시제 upgrades가 정답입니다."
      }
    ],
    "medium": [
      {
        "q": "Ms. Tanaka _____ for our overseas sales division since she joined the company in March.",
        "choices": [
          {
            "text": "has worked",
            "correct": true
          },
          {
            "text": "worked",
            "wrongReason": "단순 과거시제는 'since'(~이래로 지금까지 계속)가 나타내는 현재까지의 지속을 표현하지 못합니다."
          },
          {
            "text": "works",
            "wrongReason": "현재시제는 과거 시작점부터 현재까지의 계속을 나타내는 'since'와 결합할 수 없습니다."
          },
          {
            "text": "will work",
            "wrongReason": "미래시제는 과거부터 현재까지 지속을 나타내는 'since'와 충돌합니다."
          }
        ],
        "explanation": "'since + 과거 시점'(March 이래로)은 과거에 시작해 현재까지 계속됨을 나타내므로 현재완료 has worked가 정답입니다."
      },
      {
        "q": "The supplier _____ the defective parts last Thursday, so we received a full refund afterward.",
        "choices": [
          {
            "text": "replaced",
            "correct": true
          },
          {
            "text": "has replaced",
            "wrongReason": "현재완료는 'last Thursday'처럼 명확한 과거 시점 부사구와 함께 쓸 수 없습니다."
          },
          {
            "text": "replaces",
            "wrongReason": "현재시제는 과거 시점 'last Thursday'와 충돌합니다."
          },
          {
            "text": "has been replacing",
            "wrongReason": "현재완료진행형은 명확한 과거 시점 'last Thursday'와 함께 쓰일 수 없습니다."
          }
        ],
        "explanation": "'last Thursday'는 명확한 과거 시점 부사구이므로 현재완료가 아닌 과거시제 replaced가 정답입니다."
      },
      {
        "q": "The accounting team _____ the quarterly budget review right now, so please do not interrupt them.",
        "choices": [
          {
            "text": "is conducting",
            "correct": true
          },
          {
            "text": "conducts",
            "wrongReason": "단순 현재시제는 지금 진행 중인 동작을 강조하는 'right now'와 어울리지 않습니다."
          },
          {
            "text": "conducted",
            "wrongReason": "과거시제는 현재 진행을 나타내는 'right now'(지금)와 충돌합니다."
          },
          {
            "text": "will conduct",
            "wrongReason": "미래시제는 지금 진행 중임을 나타내는 'right now'와 맞지 않습니다."
          }
        ],
        "explanation": "'right now'(지금)는 현재 진행 중인 동작의 단서이므로 현재진행형 is conducting이 정답입니다."
      },
      {
        "q": "The logistics company _____ its delivery times significantly over the past three years.",
        "choices": [
          {
            "text": "has improved",
            "correct": true
          },
          {
            "text": "improved",
            "wrongReason": "단순 과거시제는 과거부터 현재까지의 기간을 나타내는 'over the past three years'와 어울리지 않습니다."
          },
          {
            "text": "improves",
            "wrongReason": "현재시제는 과거부터 현재까지 누적된 변화를 나타내는 'over the past three years'와 맞지 않습니다."
          },
          {
            "text": "will improve",
            "wrongReason": "미래시제는 이미 지나온 기간 'over the past three years'와 충돌합니다."
          }
        ],
        "explanation": "'over the past three years'(지난 3년에 걸쳐)는 과거부터 현재까지의 기간을 나타내므로 현재완료 has improved가 정답입니다."
      },
      {
        "q": "Our overseas client has already _____ the signed contract, so we can begin production immediately.",
        "choices": [
          {
            "text": "sent",
            "correct": true
          },
          {
            "text": "send",
            "wrongReason": "has 뒤에는 과거분사가 와야 하는데 send는 동사원형이라 현재완료 형태를 이루지 못합니다."
          },
          {
            "text": "sending",
            "wrongReason": "has 뒤에 현재분사만으로는 현재완료가 되지 않으며 'already'와 맞는 완료 의미를 만들지 못합니다."
          },
          {
            "text": "will send",
            "wrongReason": "이미 완료된 상태를 나타내는 'already'(이미)와 미래시제가 충돌합니다."
          }
        ],
        "explanation": "'has already _____' 구조에서 'already'는 완료를 나타내므로 과거분사 sent로 현재완료를 완성합니다."
      }
    ],
    "hard": [
      {
        "q": "By the time the manager arrived at the conference room, the staff _____ already finished the presentation.",
        "choices": [
          {
            "text": "had",
            "correct": true
          },
          {
            "text": "has",
            "wrongReason": "현재완료는 과거의 기준 시점(arrived)보다 더 이전에 완료된 일을 나타내지 못합니다."
          },
          {
            "text": "will have",
            "wrongReason": "미래완료는 미래 기준 시점을 필요로 하나, 기준이 과거(arrived)이므로 맞지 않습니다."
          },
          {
            "text": "would have",
            "wrongReason": "가정법 표현으로, 단순히 과거의 과거 사실을 서술하는 이 문맥과 맞지 않습니다."
          }
        ],
        "explanation": "'By the time + 과거(arrived)' 절보다 더 앞선 과거(대과거)를 나타내야 하므로 과거완료 had finished가 정답입니다."
      },
      {
        "q": "By next December, our firm _____ all of its regional offices to the new cloud-based system.",
        "choices": [
          {
            "text": "will have migrated",
            "correct": true
          },
          {
            "text": "migrated",
            "wrongReason": "과거시제는 미래 완료 시점 'by next December'와 충돌합니다."
          },
          {
            "text": "has migrated",
            "wrongReason": "현재완료는 현재까지의 완료를 나타내며 미래 시점 'by next December'와 맞지 않습니다."
          },
          {
            "text": "migrates",
            "wrongReason": "현재시제는 미래의 특정 완료 시점 'by next December'를 표현하지 못합니다."
          }
        ],
        "explanation": "'by + 미래시점(next December)'은 미래의 특정 시점까지 완료를 나타내므로 미래완료 will have migrated가 정답입니다."
      },
      {
        "q": "As soon as the shipment _____ at the warehouse next Monday, we will notify the purchasing department.",
        "choices": [
          {
            "text": "arrives",
            "correct": true
          },
          {
            "text": "will arrive",
            "wrongReason": "시간 부사절(as soon as)에서는 미래의 의미라도 will을 쓰지 않고 현재시제로 대신합니다."
          },
          {
            "text": "arrived",
            "wrongReason": "과거시제는 미래 상황(next Monday)을 나타내는 이 시간 부사절과 충돌합니다."
          },
          {
            "text": "will have arrived",
            "wrongReason": "시간 부사절에서는 미래완료 대신 현재시제(또는 현재완료)를 쓰며, 단순 미래 의미이므로 현재시제가 적절합니다."
          }
        ],
        "explanation": "시간 부사절(as soon as 절)에서는 미래를 현재시제로 표현하므로 arrives가 정답입니다(주절은 will notify)."
      },
      {
        "q": "The new employee realized that he _____ his ID badge at home before he reached the security gate.",
        "choices": [
          {
            "text": "had left",
            "correct": true
          },
          {
            "text": "left",
            "wrongReason": "단순 과거는 두 과거 사건의 선후를 명확히 못하며, 깨달은 시점(realized)보다 앞선 일임을 나타내지 못합니다."
          },
          {
            "text": "has left",
            "wrongReason": "현재완료는 과거의 기준 시점(realized)보다 더 이전을 나타내야 하는 대과거 문맥과 맞지 않습니다."
          },
          {
            "text": "leaves",
            "wrongReason": "현재시제는 과거 서술 문맥 전체와 충돌합니다."
          }
        ],
        "explanation": "깨달은 과거 시점(realized)보다 더 앞서 일어난 일(배지를 두고 옴)을 나타내므로 과거완료 had left가 정답입니다."
      },
      {
        "q": "If the client _____ the revised proposal before Friday, we will schedule the signing ceremony next week.",
        "choices": [
          {
            "text": "approves",
            "correct": true
          },
          {
            "text": "will approve",
            "wrongReason": "조건 부사절(if 절)에서는 미래의 의미라도 will을 쓰지 않고 현재시제를 씁니다."
          },
          {
            "text": "approved",
            "wrongReason": "과거시제는 미래의 조건(before Friday)을 나타내는 이 조건절과 충돌합니다."
          },
          {
            "text": "would approve",
            "wrongReason": "would는 가정법이나 정중한 표현에 쓰이며, 단순 미래 조건을 나타내는 이 if절에는 적절하지 않습니다."
          }
        ],
        "explanation": "조건 부사절(if 절)에서는 미래 의미를 현재시제로 표현하므로 approves가 정답입니다(주절은 will schedule)."
      }
    ]
  },
  "agreement": {
    "easy": [
      {
        "q": "The marketing director _____ a detailed report to the board every quarter.",
        "choices": [
          {
            "text": "submits",
            "correct": true
          },
          {
            "text": "submit",
            "wrongReason": "단수 주어 director에는 3인칭 단수 동사 -s가 필요한데 동사원형이라 수가 안 맞음"
          },
          {
            "text": "are submitting",
            "wrongReason": "are는 복수 동사라서 단수 주어 director와 충돌"
          },
          {
            "text": "have submitted",
            "wrongReason": "have는 복수형으로 단수 주어 director와 수가 안 맞음(has가 맞음)"
          }
        ],
        "explanation": "진짜 주어는 단수 The marketing director → 3인칭 단수 동사 submits."
      },
      {
        "q": "The new employees _____ orientation training during their first week.",
        "choices": [
          {
            "text": "receive",
            "correct": true
          },
          {
            "text": "receives",
            "wrongReason": "receives는 3인칭 단수형이라 복수 주어 employees와 수가 안 맞음"
          },
          {
            "text": "is receiving",
            "wrongReason": "is는 단수 동사라서 복수 주어 employees와 충돌"
          },
          {
            "text": "has received",
            "wrongReason": "has는 단수형으로 복수 주어 employees와 수가 안 맞음"
          }
        ],
        "explanation": "진짜 주어는 복수 The new employees → 복수 동사 receive."
      },
      {
        "q": "There _____ several openings in the accounting department this month.",
        "choices": [
          {
            "text": "are",
            "correct": true
          },
          {
            "text": "is",
            "wrongReason": "뒤 명사 openings가 복수인데 is는 단수 동사라 수가 안 맞음"
          },
          {
            "text": "was",
            "wrongReason": "was는 단수 동사라서 복수 명사 openings와 충돌"
          },
          {
            "text": "has been",
            "wrongReason": "has been은 단수형으로 복수 명사 openings와 수가 안 맞음"
          }
        ],
        "explanation": "There + 동사 구문은 뒤 명사에 일치 → 복수 openings이므로 are."
      },
      {
        "q": "There _____ a parking permit available for each full-time staff member.",
        "choices": [
          {
            "text": "is",
            "correct": true
          },
          {
            "text": "are",
            "wrongReason": "뒤 명사 permit이 단수인데 are는 복수 동사라 수가 안 맞음"
          },
          {
            "text": "were",
            "wrongReason": "were는 복수 동사라서 단수 명사 permit과 충돌"
          },
          {
            "text": "have been",
            "wrongReason": "have been은 복수형으로 단수 명사 permit과 수가 안 맞음"
          }
        ],
        "explanation": "There + 동사 구문은 뒤 명사에 일치 → 단수 a permit이므로 is."
      },
      {
        "q": "Our company _____ a generous reimbursement policy for business travel.",
        "choices": [
          {
            "text": "offers",
            "correct": true
          },
          {
            "text": "offer",
            "wrongReason": "단수 주어 company에는 -s가 붙은 offers가 필요한데 동사원형이라 수가 안 맞음"
          },
          {
            "text": "are offering",
            "wrongReason": "are는 복수 동사라서 단수 주어 company와 충돌"
          },
          {
            "text": "have offered",
            "wrongReason": "have는 복수형으로 단수 주어 company와 수가 안 맞음(has가 맞음)"
          }
        ],
        "explanation": "진짜 주어는 단수 Our company → 3인칭 단수 동사 offers."
      }
    ],
    "medium": [
      {
        "q": "The list of approved vendors _____ updated at the beginning of every fiscal year.",
        "choices": [
          {
            "text": "is",
            "correct": true
          },
          {
            "text": "are",
            "wrongReason": "수식어 of approved vendors의 복수 vendors에 현혹된 것으로, 진짜 주어 list는 단수라 are와 충돌"
          },
          {
            "text": "were",
            "wrongReason": "were는 복수 동사로 단수 주어 list와 수가 안 맞음"
          },
          {
            "text": "have been",
            "wrongReason": "have been은 복수형으로 단수 주어 list와 충돌"
          }
        ],
        "explanation": "전치사구 of approved vendors는 수식어일 뿐, 진짜 주어는 단수 The list → is."
      },
      {
        "q": "The managers who oversee the regional branches _____ scheduled to meet on Friday.",
        "choices": [
          {
            "text": "are",
            "correct": true
          },
          {
            "text": "is",
            "wrongReason": "관계사절 안의 단수 branches가 아닌, 진짜 주어 managers는 복수라 단수 is와 충돌"
          },
          {
            "text": "was",
            "wrongReason": "was는 단수 동사로 복수 주어 managers와 수가 안 맞음"
          },
          {
            "text": "has been",
            "wrongReason": "has been은 단수형으로 복수 주어 managers와 충돌"
          }
        ],
        "explanation": "관계사절 who oversee the regional branches는 수식어, 진짜 주어는 복수 The managers → are."
      },
      {
        "q": "Either the supervisor or the team leaders _____ responsible for closing the store.",
        "choices": [
          {
            "text": "are",
            "correct": true
          },
          {
            "text": "is",
            "wrongReason": "either A or B는 가까운 쪽에 일치하는데 가까운 the team leaders가 복수라 단수 is와 충돌"
          },
          {
            "text": "was",
            "wrongReason": "was는 단수 동사로 가까운 복수 주어 team leaders와 수가 안 맞음"
          },
          {
            "text": "has been",
            "wrongReason": "has been은 단수형으로 가까운 복수 주어 team leaders와 충돌"
          }
        ],
        "explanation": "either A or B는 가까운 쪽에 일치 → 가까운 the team leaders가 복수이므로 are."
      },
      {
        "q": "Neither the printers nor the scanner _____ functioning properly this morning.",
        "choices": [
          {
            "text": "is",
            "correct": true
          },
          {
            "text": "are",
            "wrongReason": "neither A nor B는 가까운 쪽에 일치하는데 가까운 the scanner가 단수라 복수 are와 충돌"
          },
          {
            "text": "were",
            "wrongReason": "were는 복수 동사로 가까운 단수 주어 scanner와 수가 안 맞음"
          },
          {
            "text": "have been",
            "wrongReason": "have been은 복수형으로 가까운 단수 주어 scanner와 충돌"
          }
        ],
        "explanation": "neither A nor B는 가까운 쪽에 일치 → 가까운 the scanner가 단수이므로 is."
      },
      {
        "q": "Most of the inventory in the warehouses _____ been counted before the audit.",
        "choices": [
          {
            "text": "has",
            "correct": true
          },
          {
            "text": "have",
            "wrongReason": "부분표현 most of 뒤 명사 inventory가 불가산 단수인데, 복수 warehouses에 현혹돼 have를 쓰면 충돌"
          },
          {
            "text": "are",
            "wrongReason": "이 자리에는 been을 받는 has/have가 필요하고, are는 단수 inventory와도 수가 안 맞음"
          },
          {
            "text": "were",
            "wrongReason": "were는 복수 동사로 단수 inventory와 수가 안 맞고 been과도 어색"
          }
        ],
        "explanation": "most/some/all of + 명사는 of 뒤 명사에 일치 → inventory가 단수이므로 has(been)."
      }
    ],
    "hard": [
      {
        "q": "Forty thousand dollars _____ a reasonable budget for the upcoming advertising campaign.",
        "choices": [
          {
            "text": "is",
            "correct": true
          },
          {
            "text": "are",
            "wrongReason": "금액을 단일 개념으로 보면 단수 취급인데 dollars의 복수 형태에 현혹돼 are를 쓰면 충돌"
          },
          {
            "text": "were",
            "wrongReason": "were는 복수 동사로 단일 금액(단수 취급)과 수가 안 맞음"
          },
          {
            "text": "have been",
            "wrongReason": "have been은 복수형으로 단일 금액(단수 취급)과 충돌"
          }
        ],
        "explanation": "금액이 하나의 단일 개념일 때는 단수 취급 → Forty thousand dollars is."
      },
      {
        "q": "The consultant who advises our overseas subsidiaries _____ visiting headquarters next week.",
        "choices": [
          {
            "text": "is",
            "correct": true
          },
          {
            "text": "are",
            "wrongReason": "관계사절 동사는 선행사에 일치하지만 주절 주어 The consultant는 단수라 복수 are와 충돌"
          },
          {
            "text": "were",
            "wrongReason": "were는 복수 동사로 단수 주어 consultant와 수가 안 맞음"
          },
          {
            "text": "have been",
            "wrongReason": "have been은 복수형으로 단수 주어 consultant와 충돌"
          }
        ],
        "explanation": "관계사절 who advises의 복수 subsidiaries는 수식어, 주절 진짜 주어는 단수 The consultant → is."
      },
      {
        "q": "The proposals that the committee approved last month _____ now being implemented.",
        "choices": [
          {
            "text": "are",
            "correct": true
          },
          {
            "text": "is",
            "wrongReason": "관계사절 안 단수 committee에 현혹된 것으로, 진짜 주어 The proposals는 복수라 단수 is와 충돌"
          },
          {
            "text": "was",
            "wrongReason": "was는 단수 동사로 복수 주어 proposals와 수가 안 맞음"
          },
          {
            "text": "has been",
            "wrongReason": "has been은 단수형으로 복수 주어 proposals와 충돌"
          }
        ],
        "explanation": "관계사절 that the committee approved는 수식어, 진짜 주어는 복수 The proposals → are."
      },
      {
        "q": "The unemployed in this region _____ eligible for the new job-training subsidy.",
        "choices": [
          {
            "text": "are",
            "correct": true
          },
          {
            "text": "is",
            "wrongReason": "the+형용사(the unemployed)는 복수 취급인데 is는 단수 동사라 충돌"
          },
          {
            "text": "was",
            "wrongReason": "was는 단수 동사로 복수 취급되는 the unemployed와 수가 안 맞음"
          },
          {
            "text": "has been",
            "wrongReason": "has been은 단수형으로 복수 취급되는 the unemployed와 충돌"
          }
        ],
        "explanation": "the+형용사 the unemployed는 복수 사람들을 뜻해 복수 취급 → are."
      },
      {
        "q": "Each of the regional offices _____ required to submit its own expense report.",
        "choices": [
          {
            "text": "is",
            "correct": true
          },
          {
            "text": "are",
            "wrongReason": "each는 단수 취급인데 of 뒤 복수 offices에 현혹돼 are를 쓰면 충돌"
          },
          {
            "text": "were",
            "wrongReason": "were는 복수 동사로 단수 취급되는 each와 수가 안 맞음"
          },
          {
            "text": "have been",
            "wrongReason": "have been은 복수형으로 단수 취급되는 each와 충돌"
          }
        ],
        "explanation": "each/every는 단수 취급 → Each of the regional offices is."
      }
    ]
  },
  "pronoun": {
    "easy": [
      {
        "q": "The marketing director asked _____ to prepare the quarterly sales report before Friday.",
        "choices": [
          {
            "text": "me",
            "correct": true
          },
          {
            "text": "I",
            "wrongReason": "I는 주격이라 동사 asked의 목적어 자리에 올 수 없습니다."
          },
          {
            "text": "my",
            "wrongReason": "my는 소유격이라 뒤에 명사가 와야 하며 단독으로 목적어가 될 수 없습니다."
          },
          {
            "text": "mine",
            "wrongReason": "mine은 소유대명사로 '나의 것'을 뜻해 사람 목적어 자리에 맞지 않습니다."
          }
        ],
        "explanation": "동사 asked의 목적어 자리이므로 목적격 대명사 me가 정답입니다."
      },
      {
        "q": "After the meeting ended, _____ submitted the revised budget proposal to the finance team.",
        "choices": [
          {
            "text": "she",
            "correct": true
          },
          {
            "text": "her",
            "wrongReason": "her는 목적격/소유격이라 동사 submitted 앞 주어 자리에 올 수 없습니다."
          },
          {
            "text": "hers",
            "wrongReason": "hers는 소유대명사 '그녀의 것'이라 주어 자리에 의미가 맞지 않습니다."
          },
          {
            "text": "herself",
            "wrongReason": "herself는 재귀대명사라 주어를 대신할 수 없습니다."
          }
        ],
        "explanation": "동사 submitted 앞 주어 자리이므로 주격 대명사 she가 정답입니다."
      },
      {
        "q": "All employees must update _____ contact information in the company database by the end of the month.",
        "choices": [
          {
            "text": "their",
            "correct": true
          },
          {
            "text": "them",
            "wrongReason": "them은 목적격이라 명사 information을 수식할 수 없습니다."
          },
          {
            "text": "they",
            "wrongReason": "they는 주격이라 명사 앞 소유격 자리에 올 수 없습니다."
          },
          {
            "text": "theirs",
            "wrongReason": "theirs는 소유대명사라 뒤에 명사를 둘 수 없습니다."
          }
        ],
        "explanation": "명사 contact information을 수식하는 소유격 자리이므로 their가 정답입니다."
      },
      {
        "q": "The corner office on the third floor is _____, since I was promoted to senior manager last week.",
        "choices": [
          {
            "text": "mine",
            "correct": true
          },
          {
            "text": "my",
            "wrongReason": "my는 소유격이라 단독으로 보어가 될 수 없고 뒤에 명사가 필요합니다."
          },
          {
            "text": "me",
            "wrongReason": "me는 목적격이라 '나의 것'이라는 소유의 의미를 나타낼 수 없습니다."
          },
          {
            "text": "I",
            "wrongReason": "I는 주격이라 be동사 보어로 소유 의미를 표현할 수 없습니다."
          }
        ],
        "explanation": "be동사 뒤 보어 자리에서 '나의 것'을 뜻하므로 소유대명사 mine이 정답입니다."
      },
      {
        "q": "The new interns thanked _____ for explaining the filing system so clearly during orientation.",
        "choices": [
          {
            "text": "him",
            "correct": true
          },
          {
            "text": "he",
            "wrongReason": "he는 주격이라 동사 thanked의 목적어 자리에 올 수 없습니다."
          },
          {
            "text": "his",
            "wrongReason": "his는 소유격이라 뒤에 명사가 와야 하며 단독 목적어가 될 수 없습니다."
          },
          {
            "text": "himself",
            "wrongReason": "himself는 재귀대명사인데 주어(interns)와 목적어가 같지 않으므로 쓸 수 없습니다."
          }
        ],
        "explanation": "동사 thanked의 목적어 자리이므로 목적격 대명사 him이 정답입니다."
      }
    ],
    "medium": [
      {
        "q": "The CEO prefers to write all of the important announcements _____ rather than delegating them to an assistant.",
        "choices": [
          {
            "text": "herself",
            "correct": true
          },
          {
            "text": "her",
            "wrongReason": "her는 목적격이라 '직접'이라는 강조 의미를 나타낼 수 없습니다."
          },
          {
            "text": "hers",
            "wrongReason": "hers는 소유대명사라 '그녀가 직접'이라는 강조 용법에 맞지 않습니다."
          },
          {
            "text": "she",
            "wrongReason": "she는 주격이라 이미 주어가 있는 문장에서 강조 부가어로 올 수 없습니다."
          }
        ],
        "explanation": "주어 CEO가 '직접' 작성함을 강조하는 강조 재귀대명사 자리이므로 herself가 정답입니다."
      },
      {
        "q": "Because the technician finished the entire installation _____, the team awarded him a bonus.",
        "choices": [
          {
            "text": "by himself",
            "correct": true
          },
          {
            "text": "by him",
            "wrongReason": "by him은 '그에 의해'라는 수동 행위자 의미라 '혼자서'라는 뜻이 되지 않습니다."
          },
          {
            "text": "by his",
            "wrongReason": "by his는 소유격이 전치사 뒤 단독으로 와 문법적으로 어색하고 '혼자서' 의미도 없습니다."
          },
          {
            "text": "himself by",
            "wrongReason": "어순이 틀려 by oneself 표현을 이루지 못합니다."
          }
        ],
        "explanation": "'혼자서'를 뜻하는 by oneself 표현이 필요하므로 by himself가 정답입니다."
      },
      {
        "q": "The operating costs of the Seoul branch are significantly lower than _____ of the Tokyo branch.",
        "choices": [
          {
            "text": "those",
            "correct": true
          },
          {
            "text": "that",
            "wrongReason": "앞의 명사 costs가 복수이므로 단수 대용 대명사 that은 수가 일치하지 않습니다."
          },
          {
            "text": "them",
            "wrongReason": "them은 목적격 인칭대명사라 비교 구문에서 명사 반복 회피 대용으로 쓸 수 없습니다."
          },
          {
            "text": "these",
            "wrongReason": "these는 of 수식을 받는 비교 대용 대명사로 쓰지 않으며, 일반적으로 that/those를 사용합니다."
          }
        ],
        "explanation": "복수명사 costs의 반복을 피하는 대용 자리이므로 복수형 those가 정답입니다."
      },
      {
        "q": "During the audit, the accountants reminded _____ to double-check every transaction record carefully.",
        "choices": [
          {
            "text": "themselves",
            "correct": true
          },
          {
            "text": "them",
            "wrongReason": "them은 주어(accountants)와 다른 대상을 가리키므로, 동일 대상일 때 쓰는 재귀대명사가 필요합니다."
          },
          {
            "text": "they",
            "wrongReason": "they는 주격이라 동사 reminded의 목적어 자리에 올 수 없습니다."
          },
          {
            "text": "theirs",
            "wrongReason": "theirs는 소유대명사라 목적어 자리에서 '그들 자신'을 나타낼 수 없습니다."
          }
        ],
        "explanation": "주어와 목적어가 같은 accountants이므로 재귀대명사 themselves가 정답입니다."
      },
      {
        "q": "The response time of our new server is much faster than _____ of the previous model.",
        "choices": [
          {
            "text": "that",
            "correct": true
          },
          {
            "text": "those",
            "wrongReason": "앞 명사 response time이 단수이므로 복수 대용 those는 수가 일치하지 않습니다."
          },
          {
            "text": "it",
            "wrongReason": "it은 of의 수식을 받는 비교 대용 대명사로 쓰지 않습니다."
          },
          {
            "text": "this",
            "wrongReason": "this는 of 수식을 받는 비교 대용 대명사로 쓰지 않으며, 관용적으로 that을 사용합니다."
          }
        ],
        "explanation": "단수명사 response time의 반복을 피하는 대용 자리이므로 단수형 that이 정답입니다."
      }
    ],
    "hard": [
      {
        "q": "Of the two finalists for the position, one accepted the offer immediately, while _____ requested more time to decide.",
        "choices": [
          {
            "text": "the other",
            "correct": true
          },
          {
            "text": "another",
            "wrongReason": "another는 '또 다른 하나'로 셋 이상 중 막연한 추가를 뜻해, 둘 중 나머지 하나를 가리키지 못합니다."
          },
          {
            "text": "other",
            "wrongReason": "other는 한정사로 단독 대명사로 쓸 수 없고 뒤에 명사가 필요합니다."
          },
          {
            "text": "others",
            "wrongReason": "others는 '다른 여러 명'을 뜻해, 둘 중 정해진 나머지 하나를 가리킬 수 없습니다."
          }
        ],
        "explanation": "둘 중 하나(one)에 대한 정해진 나머지 하나를 가리키므로 the other가 정답입니다."
      },
      {
        "q": "_____ is essential for managers to provide clear feedback during annual performance reviews.",
        "choices": [
          {
            "text": "It",
            "correct": true
          },
          {
            "text": "There",
            "wrongReason": "There 존재구문은 'There is + 명사' 형태라 뒤의 'to provide' 부정사 진주어 구조와 맞지 않습니다."
          },
          {
            "text": "That",
            "wrongReason": "That은 가주어로 to부정사 진주어를 받는 'It is ~ to V' 구문을 만들 수 없습니다."
          },
          {
            "text": "This",
            "wrongReason": "This는 가주어 역할을 하지 못하며 to부정사 진주어 구문에 쓰이지 않습니다."
          }
        ],
        "explanation": "뒤의 to부정사(to provide)가 진주어인 'It is ~ to V' 가주어 구문이므로 It이 정답입니다."
      },
      {
        "q": "During the team-building workshop, the two new hires introduced themselves to _____ before the activities began.",
        "choices": [
          {
            "text": "each other",
            "correct": true
          },
          {
            "text": "one another",
            "wrongReason": "one another는 보통 셋 이상의 상호 관계에 쓰이며, 여기서는 둘(two new hires)이므로 each other가 더 적절합니다."
          },
          {
            "text": "the others",
            "wrongReason": "the others는 '나머지 사람들'을 뜻해 둘 사이의 상호 행위를 나타내지 못합니다."
          },
          {
            "text": "themselves",
            "wrongReason": "themselves는 '그들 자신'으로 상호(서로) 의미가 아니라 재귀 의미라 문맥에 맞지 않습니다."
          }
        ],
        "explanation": "둘(two new hires)이 서로에게 소개하는 상호 관계이므로 each other가 정답입니다."
      },
      {
        "q": "Some of the applicants submitted their portfolios online, but _____ chose to mail printed copies instead.",
        "choices": [
          {
            "text": "others",
            "correct": true
          },
          {
            "text": "the others",
            "wrongReason": "the others는 '나머지 전부'라는 한정된 의미인데, 전체가 정해지지 않은 막연한 일부를 가리키므로 맞지 않습니다."
          },
          {
            "text": "another",
            "wrongReason": "another는 단수 '또 다른 하나'라 복수 동사 chose와 수가 일치하지 않습니다."
          },
          {
            "text": "the other",
            "wrongReason": "the other는 정해진 나머지 하나(단수)를 뜻해 복수 주어로 쓸 수 없습니다."
          }
        ],
        "explanation": "some(일부)에 대응하는 막연한 다른 일부를 가리키므로 others가 정답입니다."
      },
      {
        "q": "_____ are several reasons why the board postponed the merger announcement until next quarter.",
        "choices": [
          {
            "text": "There",
            "correct": true
          },
          {
            "text": "It",
            "wrongReason": "It은 가주어로 'It is + 형용사 + to V' 구문에 쓰이며, 'several reasons'라는 복수 명사의 존재를 나타내는 구문에는 맞지 않습니다."
          },
          {
            "text": "They",
            "wrongReason": "They는 인칭대명사라 존재구문 'be동사 + 명사' 구조를 만들 수 없습니다."
          },
          {
            "text": "Those",
            "wrongReason": "Those는 지시대명사라 'several reasons가 존재한다'는 존재구문을 이끌 수 없습니다."
          }
        ],
        "explanation": "'~가 있다'는 존재를 나타내는 'There are + 복수명사' 존재구문이므로 There가 정답입니다."
      }
    ]
  },
  "relative": {
    "easy": [
      {
        "q": "The marketing director _____ joined our company last spring has already doubled the regional sales figures.",
        "choices": [
          {
            "text": "who",
            "correct": true
          },
          {
            "text": "which",
            "wrongReason": "which는 사물 선행사에만 쓰이는데 선행사가 사람(director)이라 불가."
          },
          {
            "text": "whose",
            "wrongReason": "whose는 소유격으로 뒤에 명사가 와야 하는데 동사 joined가 바로 와서 불가."
          },
          {
            "text": "whom",
            "wrongReason": "whom은 목적격인데 빈칸이 관계사절의 주어 자리(joined의 주어)라 주격이 필요해 불가."
          }
        ],
        "explanation": "선행사가 사람(director)이고 관계사절 안에서 동사 joined의 주어 역할 → 사람 주격 who."
      },
      {
        "q": "The quarterly report _____ outlines our budget projections must be submitted by Friday.",
        "choices": [
          {
            "text": "which",
            "correct": true
          },
          {
            "text": "who",
            "wrongReason": "who는 사람 선행사에만 쓰이는데 선행사가 사물(report)이라 불가."
          },
          {
            "text": "whom",
            "wrongReason": "whom은 사람 목적격인데 선행사가 사물이고 주어 자리라 불가."
          },
          {
            "text": "whose",
            "wrongReason": "whose는 소유격으로 뒤에 명사가 필요한데 동사 outlines가 바로 와서 불가."
          }
        ],
        "explanation": "선행사가 사물(report)이고 관계사절 안에서 동사 outlines의 주어 역할 → 사물 주격 which."
      },
      {
        "q": "The new software _____ the IT team installed last week has improved our processing speed.",
        "choices": [
          {
            "text": "that",
            "correct": true
          },
          {
            "text": "who",
            "wrongReason": "who는 사람 선행사에만 쓰이는데 선행사가 사물(software)이라 불가."
          },
          {
            "text": "whom",
            "wrongReason": "whom은 사람 목적격인데 선행사가 사물(software)이라 불가."
          },
          {
            "text": "whose",
            "wrongReason": "whose는 소유격으로 뒤에 명사가 와야 하는데 명사구 the IT team(절의 주어)이 와서 소유 관계가 성립하지 않아 불가."
          }
        ],
        "explanation": "선행사가 사물(software)이고 관계사절 안에서 installed의 목적어 역할 → 사물 목적격으로 that(또는 which) 가능, 보기 중엔 that."
      },
      {
        "q": "We are looking for candidates _____ can communicate effectively with overseas clients.",
        "choices": [
          {
            "text": "who",
            "correct": true
          },
          {
            "text": "which",
            "wrongReason": "which는 사물 선행사에만 쓰이는데 선행사가 사람(candidates)이라 불가."
          },
          {
            "text": "what",
            "wrongReason": "what은 선행사를 포함하는 관계대명사라 앞에 선행사(candidates)가 이미 있으면 불가."
          },
          {
            "text": "whose",
            "wrongReason": "whose는 소유격으로 뒤에 명사가 필요한데 조동사 can이 바로 와서 불가."
          }
        ],
        "explanation": "선행사가 사람(candidates)이고 관계사절 안에서 can communicate의 주어 역할 → 사람 주격 who."
      },
      {
        "q": "The conference room _____ is located on the third floor has been reserved for the board meeting.",
        "choices": [
          {
            "text": "which",
            "correct": true
          },
          {
            "text": "who",
            "wrongReason": "who는 사람 선행사에만 쓰이는데 선행사가 사물(conference room)이라 불가."
          },
          {
            "text": "what",
            "wrongReason": "what은 선행사를 포함하므로 앞에 선행사(conference room)가 있으면 불가."
          },
          {
            "text": "whom",
            "wrongReason": "whom은 사람 목적격인데 선행사가 사물이고 주어 자리라 불가."
          }
        ],
        "explanation": "선행사가 사물(conference room)이고 관계사절 안에서 동사 is located의 주어 역할 → 사물 주격 which."
      }
    ],
    "medium": [
      {
        "q": "The supplier _____ delivery schedule was delayed has agreed to offer us a discount.",
        "choices": [
          {
            "text": "whose",
            "correct": true
          },
          {
            "text": "who",
            "wrongReason": "who는 주격이라 뒤에 동사가 와야 하는데 명사 delivery schedule이 와서 소유격이 필요하므로 불가."
          },
          {
            "text": "which",
            "wrongReason": "which는 주격/목적격이라 뒤에 바로 명사를 동반한 소유 관계를 만들 수 없어 불가."
          },
          {
            "text": "whom",
            "wrongReason": "whom은 목적격이라 뒤에 명사 delivery schedule을 수식하는 소유 관계를 만들 수 없어 불가."
          }
        ],
        "explanation": "선행사(supplier)와 뒤 명사 delivery schedule 사이가 소유 관계('공급업체의 배송 일정')이고 뒤에 명사가 옴 → 소유격 whose."
      },
      {
        "q": "The colleague to _____ I forwarded the contract is reviewing it now.",
        "choices": [
          {
            "text": "whom",
            "correct": true
          },
          {
            "text": "who",
            "wrongReason": "전치사(to) 바로 뒤에는 주격 who를 쓸 수 없고 목적격이 와야 해서 불가."
          },
          {
            "text": "that",
            "wrongReason": "전치사 바로 뒤(전치사+관계사 격식체)에는 that을 쓸 수 없어 불가."
          },
          {
            "text": "which",
            "wrongReason": "which는 사물용인데 선행사가 사람(colleague)이라 불가."
          }
        ],
        "explanation": "선행사가 사람(colleague)이고 전치사 to의 목적어 → 전치사+목적격, 사람이므로 to whom."
      },
      {
        "q": "The market analysis on _____ the proposal is based was conducted by an external firm.",
        "choices": [
          {
            "text": "which",
            "correct": true
          },
          {
            "text": "that",
            "wrongReason": "전치사(on) 바로 뒤에는 that을 쓸 수 없어 불가."
          },
          {
            "text": "whom",
            "wrongReason": "whom은 사람용 목적격인데 선행사가 사물(analysis)이라 불가."
          },
          {
            "text": "what",
            "wrongReason": "what은 선행사를 포함하므로 앞에 선행사(analysis)가 있으면 불가."
          }
        ],
        "explanation": "선행사가 사물(analysis)이고 전치사 on의 목적어 → 전치사+사물 목적격 on which."
      },
      {
        "q": "The applicant _____ we interviewed yesterday accepted the position this morning.",
        "choices": [
          {
            "text": "whom",
            "correct": true
          },
          {
            "text": "who",
            "wrongReason": "격식 기준 빈칸이 interviewed의 목적어 자리라 주격 who보다 목적격 whom이 정확함."
          },
          {
            "text": "which",
            "wrongReason": "which는 사물용인데 선행사가 사람(applicant)이라 불가."
          },
          {
            "text": "whose",
            "wrongReason": "whose는 소유격으로 뒤에 명사가 필요한데 명사구 we(절의 주어)가 와서 소유 관계가 성립하지 않아 불가."
          }
        ],
        "explanation": "선행사가 사람(applicant)이고 관계사절 안에서 interviewed의 목적어 역할 → 사람 목적격 whom."
      },
      {
        "q": "The startup _____ founder previously worked at our firm secured a major investment.",
        "choices": [
          {
            "text": "whose",
            "correct": true
          },
          {
            "text": "which",
            "wrongReason": "which 뒤에는 동사가 와야 하는데 명사 founder가 와서 소유 관계를 못 만들어 불가."
          },
          {
            "text": "who",
            "wrongReason": "who는 사람 주격이라 사물 선행사(startup)에도 안 맞고 뒤 명사와 소유 관계도 못 만들어 불가."
          },
          {
            "text": "that",
            "wrongReason": "that은 소유격으로 쓸 수 없어 뒤 명사 founder와의 소유 관계를 표현할 수 없어 불가."
          }
        ],
        "explanation": "선행사(startup)와 뒤 명사 founder가 소유 관계('그 스타트업의 창업자')이고 뒤에 명사가 옴 → 사물에도 쓰는 소유격 whose."
      }
    ],
    "hard": [
      {
        "q": "_____ the committee decides at tomorrow's session will be announced to all departments immediately.",
        "choices": [
          {
            "text": "What",
            "correct": true
          },
          {
            "text": "Which",
            "wrongReason": "which는 선행사를 포함하지 않아 앞이나 뒤에 선행사가 필요한데 여기엔 선행사가 없어 불가."
          },
          {
            "text": "That",
            "wrongReason": "that은 선행사를 포함하지 못하므로 선행사 없이 문장 주어절을 이끌 수 없어 불가."
          },
          {
            "text": "Who",
            "wrongReason": "who는 사람 선행사를 받는 관계사라 '~하는 것'이라는 사물 개념을 선행사 없이 표현할 수 없어 불가."
          }
        ],
        "explanation": "선행사 없이 '위원회가 결정하는 것'이라는 명사절(decides의 목적어 포함)을 이끌어야 함 → 선행사 포함 관계대명사 What."
      },
      {
        "q": "The manager will approve _____ proposal demonstrates the highest return on investment.",
        "choices": [
          {
            "text": "whichever",
            "correct": true
          },
          {
            "text": "whoever",
            "wrongReason": "whoever는 사람을 가리키는데 뒤 명사 proposal(사물)을 수식하므로 의미상 불가."
          },
          {
            "text": "whatever",
            "wrongReason": "whatever는 '한정된 선택지 중 어느 것이든'의 의미가 약해, 정해진 제안서들 중 선택하는 맥락에는 whichever가 더 적절."
          },
          {
            "text": "which",
            "wrongReason": "which는 선행사가 필요한 관계사라 선행사 없이 approve의 목적어절을 이끌 수 없어 불가."
          }
        ],
        "explanation": "approve의 목적어절을 이끌고 뒤 명사(proposal)를 수식하며 '여러 제안서 중 어느 것이든'을 뜻함 → 복합관계형용사 whichever."
      },
      {
        "q": "One of the employees who _____ consistently exceeded their targets was promoted to team lead.",
        "choices": [
          {
            "text": "have",
            "correct": true
          },
          {
            "text": "has",
            "wrongReason": "관계사 who의 선행사가 복수명사 employees(one of the 복수명사)라 단수 동사 has는 수일치가 안 맞아 불가."
          },
          {
            "text": "is",
            "wrongReason": "선행사 employees가 복수이고 exceeded와 호응하는 완료가 필요해 단수 is는 불가."
          },
          {
            "text": "was",
            "wrongReason": "who절의 선행사는 복수 employees라 단수 was는 수일치가 안 맞아 불가."
          }
        ],
        "explanation": "who의 선행사는 'one'이 아니라 복수명사 employees(one of the 복수명사 구조)라 관계사절 동사는 복수 → have."
      },
      {
        "q": "Our headquarters relocated to Singapore last year, _____ significantly reduced our operating costs.",
        "choices": [
          {
            "text": "which",
            "correct": true
          },
          {
            "text": "that",
            "wrongReason": "that은 콤마 뒤 비제한적 용법에 쓸 수 없어 불가."
          },
          {
            "text": "what",
            "wrongReason": "what은 선행사를 포함하므로 앞 문장 전체를 받는 비제한적 용법에 쓸 수 없어 불가."
          },
          {
            "text": "it",
            "wrongReason": "it은 관계대명사가 아니라 접속 기능이 없어 콤마 뒤 두 절을 연결할 수 없어 불가."
          }
        ],
        "explanation": "콤마 뒤에서 앞 문장 전체('본사를 싱가포르로 이전한 것')를 선행사로 받는 비제한적 용법 → which."
      },
      {
        "q": "The award will be given to _____ submits the most innovative cost-saving idea by the deadline.",
        "choices": [
          {
            "text": "whoever",
            "correct": true
          },
          {
            "text": "whomever",
            "wrongReason": "빈칸이 뒤 동사 submits의 주어 자리라 목적격 whomever가 아니라 주격이 필요해 불가."
          },
          {
            "text": "whom",
            "wrongReason": "whom은 목적격이고 선행사가 필요한데, 여기선 주어 역할의 선행사 포함 관계사가 필요해 불가."
          },
          {
            "text": "who",
            "wrongReason": "who는 선행사를 포함하지 못해 전치사 to의 목적어절을 단독으로 이끌 수 없어 불가."
          }
        ],
        "explanation": "전치사 to의 목적어절을 이끌면서 절 안에서 submits의 주어 역할('~하는 사람은 누구든') → 주격 복합관계대명사 whoever."
      }
    ]
  },
  "conj_prep": {
    "easy": [
      {
        "q": "The quarterly report was delayed _____ several key figures were missing from the finance department's submission.",
        "choices": [
          {
            "text": "because",
            "correct": true
          },
          {
            "text": "because of",
            "wrongReason": "because of는 전치사구로 뒤에 명사(구)만 와야 하는데, 뒤에 주어+동사를 갖춘 완전한 절이 옴"
          },
          {
            "text": "due to",
            "wrongReason": "due to도 전치사 역할로 명사구를 취하며 뒤의 절과 결합할 수 없음"
          },
          {
            "text": "owing to",
            "wrongReason": "owing to 역시 전치사로 명사(구)를 동반하므로 절 앞에 쓸 수 없음"
          }
        ],
        "explanation": "빈칸 뒤가 주어(several key figures)+동사(were)를 갖춘 절이므로 접속사 because가 정답. because of/due to/owing to는 모두 명사구를 취하는 전치사구라 절과 결합 불가."
      },
      {
        "q": "_____ the heavy rainfall during the convention, attendance at the keynote session exceeded the organizers' expectations.",
        "choices": [
          {
            "text": "Despite",
            "correct": true
          },
          {
            "text": "Although",
            "wrongReason": "Although은 접속사라 뒤에 절이 와야 하는데, 뒤가 명사구(the heavy rainfall)임"
          },
          {
            "text": "Even though",
            "wrongReason": "Even though도 접속사로 절을 동반해야 하며 명사구를 직접 받을 수 없음"
          },
          {
            "text": "While",
            "wrongReason": "While은 접속사이고 의미상 양보로 쓰더라도 뒤에 절이 필요함"
          }
        ],
        "explanation": "빈칸 뒤가 명사구(the heavy rainfall)이고 의미가 양보(~에도 불구하고)이므로 전치사 Despite가 정답. Although/Even though/While은 모두 절을 받는 접속사."
      },
      {
        "q": "All visitors are required to wear identification badges _____ they remain inside the manufacturing facility.",
        "choices": [
          {
            "text": "while",
            "correct": true
          },
          {
            "text": "during",
            "wrongReason": "during은 전치사로 뒤에 명사구만 오는데, 뒤가 주어(they)+동사(remain)의 절임"
          },
          {
            "text": "for",
            "wrongReason": "for는 전치사로 절을 직접 이끌 수 없고 명사구가 필요함"
          },
          {
            "text": "throughout",
            "wrongReason": "throughout도 전치사로 명사구를 취하므로 절 앞에 올 수 없음"
          }
        ],
        "explanation": "빈칸 뒤가 절(they remain)이고 '~하는 동안'의 의미이므로 접속사 while이 정답. during/for/throughout은 모두 명사구를 받는 전치사."
      },
      {
        "q": "The new accounting software significantly reduced processing errors _____ its initial three-month trial period.",
        "choices": [
          {
            "text": "during",
            "correct": true
          },
          {
            "text": "while",
            "wrongReason": "while은 접속사라 뒤에 절이 필요한데, 뒤가 명사구(its initial three-month trial period)임"
          },
          {
            "text": "because",
            "wrongReason": "because는 접속사이며 의미(이유)도 맞지 않고 절을 동반해야 함"
          },
          {
            "text": "although",
            "wrongReason": "although은 양보의 접속사로 절을 받아야 하므로 명사구와 결합 불가"
          }
        ],
        "explanation": "빈칸 뒤가 명사구(its initial three-month trial period)이고 '~동안'의 의미이므로 전치사 during이 정답. while/because/although은 모두 절을 받는 접속사."
      },
      {
        "q": "The shipment to the overseas distributor was rescheduled _____ a sudden change in customs regulations.",
        "choices": [
          {
            "text": "because of",
            "correct": true
          },
          {
            "text": "because",
            "wrongReason": "because는 접속사로 뒤에 절이 와야 하는데, 뒤가 명사구(a sudden change)임"
          },
          {
            "text": "since",
            "wrongReason": "since도 이유의 접속사로 절을 동반해야 하므로 명사구 앞에 쓸 수 없음"
          },
          {
            "text": "so that",
            "wrongReason": "so that은 목적의 접속사로 절을 이끌며 의미와 구조 모두 맞지 않음"
          }
        ],
        "explanation": "빈칸 뒤가 명사구(a sudden change in customs regulations)이고 이유를 나타내므로 전치사구 because of가 정답. because/since/so that은 모두 절을 받는 접속사."
      }
    ],
    "medium": [
      {
        "q": "The board of directors announced _____ the proposed merger would be finalized before the end of the fiscal year.",
        "choices": [
          {
            "text": "that",
            "correct": true
          },
          {
            "text": "what",
            "wrongReason": "what은 불완전한 절을 이끄는데, 뒤가 주어+동사를 갖춘 완전한 절이라 빠진 성분이 없음"
          },
          {
            "text": "which",
            "wrongReason": "which는 관계대명사/의문사로 뒤에 불완전한 절이 필요하며 announce의 목적어 명사절을 이끌기에 부적절"
          },
          {
            "text": "about",
            "wrongReason": "about은 전치사로 명사(구)를 취하며 동사 announced의 목적어가 되는 절을 직접 이끌 수 없음"
          }
        ],
        "explanation": "빈칸 뒤가 완전한 절(the proposed merger would be finalized)이고 announced의 목적어 명사절을 이끌므로 명사절 접속사 that이 정답."
      },
      {
        "q": "The hiring committee has not yet determined _____ the candidate possesses the required certifications for the senior position.",
        "choices": [
          {
            "text": "whether",
            "correct": true
          },
          {
            "text": "if",
            "wrongReason": "if는 동사 목적어 명사절에 쓰일 수 있으나, 격식 있는 '~인지 여부'로 whether가 더 적절하며 if는 or not·전치사 뒤·주어 자리 등에서 제약이 큼"
          },
          {
            "text": "that",
            "wrongReason": "that은 단정적인 사실(~라는 것)을 이끌어 '~인지 아닌지'의 불확실 의미를 나타내지 못함"
          },
          {
            "text": "despite",
            "wrongReason": "despite는 전치사로 명사구를 취하며 절을 이끄는 명사절 접속사가 될 수 없음"
          }
        ],
        "explanation": "'~인지 여부'를 나타내는 명사절이 필요하므로 whether가 정답. that은 사실 단정이라 의미가 안 맞고, despite는 전치사."
      },
      {
        "q": "The training program was designed to develop _____ leadership skills _____ technical expertise among new managers.",
        "choices": [
          {
            "text": "both ... and",
            "correct": true
          },
          {
            "text": "either ... or",
            "wrongReason": "either A or B는 '둘 중 하나'의 선택을 뜻해 '둘 다 기르도록 설계'라는 의미와 맞지 않음"
          },
          {
            "text": "neither ... nor",
            "wrongReason": "neither A nor B는 '둘 다 아니다'의 부정이라 양쪽을 모두 기른다는 긍정 의미와 모순됨"
          },
          {
            "text": "not ... but",
            "wrongReason": "not A but B는 'A가 아니라 B'의 대조라 두 가지를 모두 포함한다는 의미와 어긋남"
          }
        ],
        "explanation": "두 항목(leadership skills, technical expertise)을 모두 기른다는 의미이므로 상관접속사 both ... and가 정답."
      },
      {
        "q": "Applicants should indicate _____ they prefer to receive interview notifications by email or by phone.",
        "choices": [
          {
            "text": "whether",
            "correct": true
          },
          {
            "text": "that",
            "wrongReason": "that은 사실을 단정하는 명사절을 이끌어 'A인지 B인지'의 선택 의미와 or 구조를 나타내지 못함"
          },
          {
            "text": "either",
            "wrongReason": "either는 상관접속사로 either A or B 형태여야 하며 단독으로 명사절을 이끌 수 없음"
          },
          {
            "text": "during",
            "wrongReason": "during은 전치사로 명사구를 취하며 indicate의 목적어 명사절을 이끌 수 없음"
          }
        ],
        "explanation": "'by email or by phone' 즉 둘 중 어느 쪽인지를 묻는 명사절이므로 whether(... or)가 정답."
      },
      {
        "q": "_____ the marketing director _____ the sales manager was available to attend the emergency conference call on Friday afternoon.",
        "choices": [
          {
            "text": "Neither ... nor",
            "correct": true
          },
          {
            "text": "Both ... and",
            "wrongReason": "Both A and B는 복수 취급이라 단수 동사 was와 일치하지 않고, '둘 다 참석 가능'이라는 긍정 의미가 됨"
          },
          {
            "text": "Either ... or",
            "wrongReason": "either A or B는 '둘 중 하나는 가능'이라는 의미라 아무도 참석 못 했다는 부정 문맥과 맞지 않음"
          },
          {
            "text": "Not only ... but also",
            "wrongReason": "not only A but also B는 'A뿐 아니라 B도'라는 추가·긍정 의미라 부정 문맥과 모순됨"
          }
        ],
        "explanation": "단수 동사 was와 '아무도 참석할 수 없었다'는 부정 의미로 보아 neither ... nor가 정답."
      }
    ],
    "hard": [
      {
        "q": "Please keep the emergency contact list near the front desk _____ the building's main alarm system fails during off-hours.",
        "choices": [
          {
            "text": "in case",
            "correct": true
          },
          {
            "text": "in case of",
            "wrongReason": "in case of는 전치사구로 뒤에 명사(구)만 오는데, 뒤가 주어(the building's main alarm system)+동사(fails)의 절임"
          },
          {
            "text": "because of",
            "wrongReason": "because of는 전치사구로 명사구를 취하며 절을 이끌 수 없고 의미상 '대비'가 아니라 '이유'임"
          },
          {
            "text": "in spite of",
            "wrongReason": "in spite of는 전치사구로 명사구를 받으며 의미도 양보(~에도 불구하고)라 '~할 경우 대비'와 맞지 않음"
          }
        ],
        "explanation": "빈칸 뒤가 절(the system fails)이고 '~할 경우에 대비하여'의 의미이므로 접속사 in case가 정답."
      },
      {
        "q": "The vendor agreed to extend the payment deadline by two weeks, _____ the client submits a formal written request in advance.",
        "choices": [
          {
            "text": "provided that",
            "correct": true
          },
          {
            "text": "in spite of",
            "wrongReason": "in spite of는 전치사구로 명사구를 취하며 절을 받을 수 없고 의미도 양보라 '~라는 조건이면'과 맞지 않음"
          },
          {
            "text": "because of",
            "wrongReason": "because of는 전치사구로 명사구만 받고, 의미도 이유라 조건의 뜻을 나타내지 못함"
          },
          {
            "text": "regardless of",
            "wrongReason": "regardless of는 전치사구로 명사구를 취하며 '~와 상관없이'라는 의미라 조건(if)과 반대됨"
          }
        ],
        "explanation": "빈칸 뒤가 절(the client submits)이고 '~라는 조건이면(=if)'의 의미이므로 접속사 provided that이 정답."
      },
      {
        "q": "_____ the company has expanded into three new overseas markets this year, additional bilingual staff will need to be recruited.",
        "choices": [
          {
            "text": "Now that",
            "correct": true
          },
          {
            "text": "In case",
            "wrongReason": "In case는 '~할 경우 대비'라는 미래 대비의 의미라 이미 일어난 사실(확장했으므로)을 근거로 한 문맥과 맞지 않음"
          },
          {
            "text": "Despite",
            "wrongReason": "Despite는 전치사로 명사구를 취하며 뒤의 절을 받을 수 없고 의미도 양보임"
          },
          {
            "text": "Unless",
            "wrongReason": "Unless는 '~하지 않는 한'의 부정 조건이라 '확장했기 때문에'라는 이유·근거 문맥과 의미가 반대됨"
          }
        ],
        "explanation": "빈칸 뒤가 절이고 '이제 ~했으므로'라는 이유·근거를 나타내므로 접속사 Now that이 정답."
      },
      {
        "q": "_____ the significant increase in raw material costs, the production team managed to keep the final retail price unchanged.",
        "choices": [
          {
            "text": "Given",
            "correct": true
          },
          {
            "text": "Given that",
            "wrongReason": "Given that은 접속사로 뒤에 절이 와야 하는데, 뒤가 명사구(the significant increase)임"
          },
          {
            "text": "As long as",
            "wrongReason": "As long as는 접속사로 절을 받아야 하고 의미도 '~하는 한'이라 '~을 고려하면'과 맞지 않음"
          },
          {
            "text": "Provided that",
            "wrongReason": "Provided that은 조건의 접속사로 절을 받아야 하며 명사구를 직접 이끌 수 없음"
          }
        ],
        "explanation": "빈칸 뒤가 명사구(the significant increase in raw material costs)이고 '~을 고려하면'의 의미이므로 전치사 Given이 정답."
      },
      {
        "q": "Employees may access the secure server remotely _____ they connect through the company's approved virtual private network.",
        "choices": [
          {
            "text": "as long as",
            "correct": true
          },
          {
            "text": "in case of",
            "wrongReason": "in case of는 전치사구로 명사구를 취하며 절을 받을 수 없고 의미도 조건이 아니라 '~의 경우 대비'임"
          },
          {
            "text": "because of",
            "wrongReason": "because of는 전치사구로 명사구만 받고, 의미도 이유라 '~하기만 하면'이라는 조건을 나타내지 못함"
          },
          {
            "text": "despite",
            "wrongReason": "despite는 전치사로 명사구를 취하며 절을 받을 수 없고 의미도 양보라 조건과 맞지 않음"
          }
        ],
        "explanation": "빈칸 뒤가 절(they connect)이고 '~하기만 하면(조건=if)'의 의미이므로 접속사 as long as가 정답."
      }
    ]
  },
  "toinf_gerund": {
    "easy": [
      {
        "q": "The marketing team has decided _____ the product launch until the third quarter of next year.",
        "choices": [
          {
            "text": "to postpone",
            "correct": true
          },
          {
            "text": "postponing",
            "wrongReason": "decide는 동명사를 목적어로 취하지 않고 to부정사만 취합니다."
          },
          {
            "text": "postpone",
            "wrongReason": "decide 뒤에는 동사원형이 바로 올 수 없습니다."
          },
          {
            "text": "postponed",
            "wrongReason": "과거분사 형태로는 decide의 목적어가 될 수 없습니다."
          }
        ],
        "explanation": "decide는 to부정사만 목적어로 취하는 동사이므로 to postpone이 정답입니다."
      },
      {
        "q": "Most employees enjoy _____ in the renovated break room during their lunch hour.",
        "choices": [
          {
            "text": "relaxing",
            "correct": true
          },
          {
            "text": "to relax",
            "wrongReason": "enjoy는 to부정사를 목적어로 취하지 않고 동명사만 취합니다."
          },
          {
            "text": "relax",
            "wrongReason": "enjoy 뒤에는 동사원형이 바로 올 수 없습니다."
          },
          {
            "text": "relaxed",
            "wrongReason": "과거분사 형태로는 enjoy의 목적어가 될 수 없습니다."
          }
        ],
        "explanation": "enjoy는 동명사만 목적어로 취하는 동사이므로 relaxing이 정답입니다."
      },
      {
        "q": "Before submitting the report, the analyst is responsible for _____ all the figures carefully.",
        "choices": [
          {
            "text": "checking",
            "correct": true
          },
          {
            "text": "to check",
            "wrongReason": "전치사 for 뒤에는 to부정사가 올 수 없습니다."
          },
          {
            "text": "check",
            "wrongReason": "전치사 뒤에는 동사원형이 올 수 없습니다."
          },
          {
            "text": "checked",
            "wrongReason": "전치사 뒤에 과거분사 단독으로는 올 수 없습니다."
          }
        ],
        "explanation": "전치사 for 뒤에는 항상 동명사가 와야 하므로 checking이 정답입니다."
      },
      {
        "q": "The supplier promised _____ the missing components by the end of this week.",
        "choices": [
          {
            "text": "to deliver",
            "correct": true
          },
          {
            "text": "delivering",
            "wrongReason": "promise는 동명사를 목적어로 취하지 않고 to부정사만 취합니다."
          },
          {
            "text": "deliver",
            "wrongReason": "promise 뒤에는 동사원형이 바로 올 수 없습니다."
          },
          {
            "text": "delivered",
            "wrongReason": "과거분사 형태로는 promise의 목적어가 될 수 없습니다."
          }
        ],
        "explanation": "promise는 to부정사만 목적어로 취하는 동사이므로 to deliver가 정답입니다."
      },
      {
        "q": "The board members recommended _____ the budget proposal before the next fiscal year begins.",
        "choices": [
          {
            "text": "revising",
            "correct": true
          },
          {
            "text": "to revise",
            "wrongReason": "recommend는 to부정사를 목적어로 취하지 않고 동명사만 취합니다."
          },
          {
            "text": "revise",
            "wrongReason": "recommend 뒤에는 동사원형이 바로 올 수 없습니다."
          },
          {
            "text": "revised",
            "wrongReason": "과거분사 형태로는 recommend의 목적어가 될 수 없습니다."
          }
        ],
        "explanation": "recommend는 동명사만 목적어로 취하는 동사이므로 revising이 정답입니다."
      }
    ],
    "medium": [
      {
        "q": "Please remember _____ the confidential files before you leave the office tonight.",
        "choices": [
          {
            "text": "to lock",
            "correct": true
          },
          {
            "text": "locking",
            "wrongReason": "remember + V-ing는 이미 한 일을 기억한다는 뜻이라 '앞으로 할 일'을 지시하는 이 문맥과 맞지 않습니다."
          },
          {
            "text": "lock",
            "wrongReason": "remember 뒤에 동사원형이 바로 올 수 없습니다."
          },
          {
            "text": "locked",
            "wrongReason": "과거분사 형태로는 remember의 목적어가 될 수 없습니다."
          }
        ],
        "explanation": "remember + to V는 '앞으로 할 일을 기억하다'의 뜻으로, 퇴근 전에 해야 할 일을 지시하는 문맥이므로 to lock이 정답입니다."
      },
      {
        "q": "During the meeting, the manager stopped _____ a phone call from an important client.",
        "choices": [
          {
            "text": "to take",
            "correct": true
          },
          {
            "text": "taking",
            "wrongReason": "stop + V-ing는 '~을 그만두다'라는 뜻이라 전화를 받기 위해 멈췄다는 이 문맥과 맞지 않습니다."
          },
          {
            "text": "take",
            "wrongReason": "stop 뒤에 동사원형이 바로 올 수 없습니다."
          },
          {
            "text": "taken",
            "wrongReason": "과거분사 형태로는 이 자리에 올 수 없습니다."
          }
        ],
        "explanation": "stop + to V는 '~하려고 (하던 일을) 멈추다'의 뜻으로, 전화를 받으려고 멈춘 문맥이므로 to take가 정답입니다."
      },
      {
        "q": "The technician forgot _____ the server settings, so the system crashed again the next morning.",
        "choices": [
          {
            "text": "to update",
            "correct": true
          },
          {
            "text": "updating",
            "wrongReason": "forget + V-ing는 '이미 한 일을 잊다'라는 뜻이라, 업데이트를 안 해서 문제가 생긴 이 문맥과 맞지 않습니다."
          },
          {
            "text": "update",
            "wrongReason": "forget 뒤에 동사원형이 바로 올 수 없습니다."
          },
          {
            "text": "updated",
            "wrongReason": "과거분사 형태로는 forget의 목적어가 될 수 없습니다."
          }
        ],
        "explanation": "forget + to V는 '해야 할 일을 잊다'의 뜻으로, 업데이트하는 것을 잊어 시스템이 멈춘 문맥이므로 to update가 정답입니다."
      },
      {
        "q": "To reduce printing costs, the office tried _____ all documents on both sides of the paper.",
        "choices": [
          {
            "text": "printing",
            "correct": true
          },
          {
            "text": "to print",
            "wrongReason": "try + to V는 '~하려고 노력하다(애쓰다)'의 뜻이라, 비용 절감을 위해 시험삼아 시도해 본 이 문맥과 맞지 않습니다."
          },
          {
            "text": "print",
            "wrongReason": "try 뒤에 동사원형이 바로 올 수 없습니다."
          },
          {
            "text": "printed",
            "wrongReason": "과거분사 형태로는 try의 목적어가 될 수 없습니다."
          }
        ],
        "explanation": "try + V-ing는 '시험삼아 ~해보다'의 뜻으로, 비용 절감 방법으로 양면 인쇄를 시도해 본 문맥이므로 printing이 정답입니다."
      },
      {
        "q": "The new intern will never forget _____ the CEO for the first time during the orientation week.",
        "choices": [
          {
            "text": "meeting",
            "correct": true
          },
          {
            "text": "to meet",
            "wrongReason": "forget + to V는 '앞으로 할 일을 잊다'라는 뜻이라, 이미 경험한 일을 평생 기억한다는 이 문맥과 맞지 않습니다."
          },
          {
            "text": "meet",
            "wrongReason": "forget 뒤에 동사원형이 바로 올 수 없습니다."
          },
          {
            "text": "met",
            "wrongReason": "과거분사 형태로는 forget의 목적어가 될 수 없습니다."
          }
        ],
        "explanation": "forget + V-ing는 '이미 한 일을 잊다(잊지 못하다)'의 뜻으로, 과거의 첫 만남을 평생 기억한다는 문맥이므로 meeting이 정답입니다."
      }
    ],
    "hard": [
      {
        "q": "The entire department is looking forward to _____ the annual sales conference in Singapore next month.",
        "choices": [
          {
            "text": "attending",
            "correct": true
          },
          {
            "text": "attend",
            "wrongReason": "look forward to의 to는 전치사이므로 뒤에 동사원형이 올 수 없습니다."
          },
          {
            "text": "to attend",
            "wrongReason": "look forward to의 to는 전치사라 뒤에 to부정사가 올 수 없습니다."
          },
          {
            "text": "attended",
            "wrongReason": "과거분사 형태로는 전치사 to의 목적어가 될 수 없습니다."
          }
        ],
        "explanation": "look forward to에서 to는 전치사이므로 뒤에는 동명사가 와야 하며 attending이 정답입니다."
      },
      {
        "q": "Having worked night shifts for years, the security guard is used to _____ awake until dawn.",
        "choices": [
          {
            "text": "staying",
            "correct": true
          },
          {
            "text": "stay",
            "wrongReason": "be used to V-ing(~에 익숙하다) 구문에서 to는 전치사이므로 동사원형이 올 수 없습니다."
          },
          {
            "text": "to stay",
            "wrongReason": "be used to의 to는 전치사라 to부정사가 올 수 없으며, used to V(~하곤 했다)와 혼동한 함정입니다."
          },
          {
            "text": "stayed",
            "wrongReason": "과거분사 형태로는 전치사 to의 목적어가 될 수 없습니다."
          }
        ],
        "explanation": "be used to V-ing는 '~에 익숙하다'의 뜻으로 to가 전치사이므로 동명사 staying이 정답입니다. used to V(~하곤 했다)와 구별해야 합니다."
      },
      {
        "q": "Company policy requires all visitors _____ a security badge while inside the research facility.",
        "choices": [
          {
            "text": "to wear",
            "correct": true
          },
          {
            "text": "wearing",
            "wrongReason": "require + 목적어 + to V 구조이므로 목적격보어 자리에 동명사가 올 수 없습니다."
          },
          {
            "text": "wear",
            "wrongReason": "require는 목적어 뒤에 to부정사를 취하므로 동사원형이 올 수 없습니다."
          },
          {
            "text": "worn",
            "wrongReason": "과거분사 형태로는 이 목적격보어 자리에 올 수 없습니다."
          }
        ],
        "explanation": "require는 5형식에서 '목적어 + to V'를 취하므로 visitors 뒤에 to wear가 정답입니다."
      },
      {
        "q": "The nonprofit organization is committed to _____ clean drinking water to remote rural communities.",
        "choices": [
          {
            "text": "providing",
            "correct": true
          },
          {
            "text": "provide",
            "wrongReason": "be committed to의 to는 전치사이므로 동사원형이 올 수 없습니다."
          },
          {
            "text": "to provide",
            "wrongReason": "be committed to의 to는 전치사라 뒤에 to부정사가 올 수 없습니다."
          },
          {
            "text": "provided",
            "wrongReason": "과거분사 형태로는 전치사 to의 목적어가 될 수 없습니다."
          }
        ],
        "explanation": "be committed to에서 to는 전치사이므로 뒤에는 동명사가 와야 하며 providing이 정답입니다."
      },
      {
        "q": "The supervisor encouraged her team members _____ creative solutions during the brainstorming session.",
        "choices": [
          {
            "text": "to propose",
            "correct": true
          },
          {
            "text": "proposing",
            "wrongReason": "encourage + 목적어 + to V 구조이므로 목적격보어 자리에 동명사가 올 수 없습니다."
          },
          {
            "text": "propose",
            "wrongReason": "encourage는 목적어 뒤에 to부정사를 취하므로 동사원형이 올 수 없습니다."
          },
          {
            "text": "proposed",
            "wrongReason": "과거분사 형태로는 이 목적격보어 자리에 올 수 없습니다."
          }
        ],
        "explanation": "encourage는 5형식에서 '목적어 + to V'를 취하므로 team members 뒤에 to propose가 정답입니다."
      }
    ]
  },
  "comparison": {
    "easy": [
      {
        "q": "The new accounting software is _____ than the previous version, so the staff finished the report quickly.",
        "choices": [
          {
            "text": "faster",
            "correct": true
          },
          {
            "text": "fast",
            "wrongReason": "than이 있으므로 비교급이 필요한데 fast는 원급이다."
          },
          {
            "text": "fastest",
            "wrongReason": "최상급 형태로 the+est 구조에 쓰이며 than과 함께 쓸 수 없다."
          },
          {
            "text": "more fast",
            "wrongReason": "fast는 짧은 단어이므로 -er을 붙이며 more를 쓰지 않는다."
          }
        ],
        "explanation": "단서 than → 비교급. 짧은 단어 fast는 -er을 붙여 faster."
      },
      {
        "q": "Among all the candidates, Ms. Lee submitted the _____ proposal to the board.",
        "choices": [
          {
            "text": "most impressive",
            "correct": true
          },
          {
            "text": "more impressive",
            "wrongReason": "the와 함께 셋 이상 중 최고를 나타내는 최상급이 필요한데 more는 비교급이다."
          },
          {
            "text": "impressive",
            "wrongReason": "the가 있고 '가장'의 의미이므로 최상급이 필요한데 원급이다."
          },
          {
            "text": "impressively",
            "wrongReason": "proposal을 수식하는 형용사 자리인데 부사 형태다."
          }
        ],
        "explanation": "단서 the + among(범위) → 최상급. 긴 단어 impressive는 most를 붙인다."
      },
      {
        "q": "Our delivery service is as _____ as that of our main competitor in this region.",
        "choices": [
          {
            "text": "reliable",
            "correct": true
          },
          {
            "text": "more reliable",
            "wrongReason": "as ~ as 동등 비교 사이에는 원급이 와야 하는데 비교급이다."
          },
          {
            "text": "most reliable",
            "wrongReason": "as ~ as 사이에는 원급이 와야 하는데 최상급이다."
          },
          {
            "text": "reliably",
            "wrongReason": "보어 자리로 형용사가 필요한데 부사 형태다."
          }
        ],
        "explanation": "단서 as ~ as → 원급. 형용사 reliable이 정답."
      },
      {
        "q": "This year's annual conference attracted _____ participants than last year's event.",
        "choices": [
          {
            "text": "more",
            "correct": true
          },
          {
            "text": "many",
            "wrongReason": "than이 있으므로 비교급이 필요한데 many는 원급이다."
          },
          {
            "text": "most",
            "wrongReason": "the와 함께 최상급에 쓰이며 than과 함께 쓸 수 없다."
          },
          {
            "text": "much",
            "wrongReason": "participants는 셀 수 있는 복수명사라 much가 아닌 many의 비교급 more를 써야 한다."
          }
        ],
        "explanation": "단서 than → 비교급. many의 비교급 more가 정답."
      },
      {
        "q": "The downtown branch is the _____ office in the entire company, employing over 500 people.",
        "choices": [
          {
            "text": "largest",
            "correct": true
          },
          {
            "text": "larger",
            "wrongReason": "the와 in(범위)이 있어 최상급이 필요한데 larger는 비교급이다."
          },
          {
            "text": "large",
            "wrongReason": "the가 있고 '가장'의 의미이므로 최상급이 필요한데 원급이다."
          },
          {
            "text": "more large",
            "wrongReason": "large는 짧은 단어이므로 -est를 붙이며 more/most를 쓰지 않는다."
          }
        ],
        "explanation": "단서 the + in the company(범위) → 최상급. 짧은 단어 large는 largest."
      }
    ],
    "medium": [
      {
        "q": "The upgraded server processes data _____ faster than the old model, dramatically reducing wait times.",
        "choices": [
          {
            "text": "much",
            "correct": true
          },
          {
            "text": "very",
            "wrongReason": "very는 원급만 강조하며 비교급(faster)을 강조할 수 없다."
          },
          {
            "text": "more",
            "wrongReason": "faster가 이미 비교급이라 more를 또 붙일 수 없다."
          },
          {
            "text": "so",
            "wrongReason": "so는 비교급 강조 부사가 아니며 형용사 원급을 강조한다."
          }
        ],
        "explanation": "비교급 강조 부사 much/even/far/a lot은 가능하지만 very는 불가. 단서 faster → much."
      },
      {
        "q": "_____ the team practices the presentation, the more confident they become before the client meeting.",
        "choices": [
          {
            "text": "The more",
            "correct": true
          },
          {
            "text": "More",
            "wrongReason": "'~할수록 더 ~하다' 구문은 the+비교급 ~ the+비교급이라 the가 빠지면 안 된다."
          },
          {
            "text": "The most",
            "wrongReason": "the+비교급 구문에는 최상급이 아닌 비교급을 써야 한다."
          },
          {
            "text": "As more",
            "wrongReason": "뒤에 the more가 있는 상관 구문이라 as가 아닌 the가 와야 한다."
          }
        ],
        "explanation": "단서 뒤의 the more confident → the+비교급 ~ the+비교급 구문. The more가 정답."
      },
      {
        "q": "Please complete the quarterly budget review as _____ as possible, since the deadline is tomorrow morning.",
        "choices": [
          {
            "text": "quickly",
            "correct": true
          },
          {
            "text": "quicker",
            "wrongReason": "as ~ as possible 구문 사이에는 원급이 와야 하는데 비교급이다."
          },
          {
            "text": "quickest",
            "wrongReason": "as ~ as 사이에는 원급이 와야 하는데 최상급이다."
          },
          {
            "text": "more quickly",
            "wrongReason": "as ~ as 사이에는 원급이 와야 하는데 비교급이다."
          }
        ],
        "explanation": "단서 as ~ as possible → 원급. complete를 수식하는 부사 quickly가 정답."
      },
      {
        "q": "This vendor is _____ the most efficient supplier we have ever worked with, consistently delivering ahead of schedule.",
        "choices": [
          {
            "text": "by far",
            "correct": true
          },
          {
            "text": "very",
            "wrongReason": "very는 the+최상급 강조에 쓰지 않으며, by far/much가 최상급을 강조한다."
          },
          {
            "text": "more",
            "wrongReason": "more는 비교급을 만들며 the most(최상급)를 강조하는 부사가 아니다."
          },
          {
            "text": "too",
            "wrongReason": "too는 '지나치게'의 의미로 최상급 강조 부사가 아니다."
          }
        ],
        "explanation": "the+최상급 강조는 by far/much. 단서 the most efficient → by far."
      },
      {
        "q": "The revised marketing strategy generated _____ better results than the management had anticipated this quarter.",
        "choices": [
          {
            "text": "even",
            "correct": true
          },
          {
            "text": "very",
            "wrongReason": "very는 원급만 강조하며 비교급(better)을 강조할 수 없다."
          },
          {
            "text": "much more",
            "wrongReason": "better가 이미 비교급이라 more를 추가할 수 없다."
          },
          {
            "text": "so",
            "wrongReason": "so는 비교급 강조 부사가 아니라 원급을 강조한다."
          }
        ],
        "explanation": "비교급 강조는 even/much/far/a lot 등. 단서 better → even better."
      }
    ],
    "hard": [
      {
        "q": "The new model's processing capacity is far _____ to that of any competing product on the market today.",
        "choices": [
          {
            "text": "superior",
            "correct": true
          },
          {
            "text": "superior than",
            "wrongReason": "superior는 라틴계 비교어로 than이 아닌 to와 결합하므로 than은 함정이다."
          },
          {
            "text": "more superior",
            "wrongReason": "superior 자체가 비교의 의미를 포함해 more를 붙이지 않는다."
          },
          {
            "text": "superiority",
            "wrongReason": "be동사 보어로 형용사가 필요한데 명사 형태다."
          }
        ],
        "explanation": "단서 to → 라틴계 비교어 superior/inferior는 than이 아닌 to와 결합."
      },
      {
        "q": "The internship program lasted _____ three weeks, far too short for trainees to master the complex system.",
        "choices": [
          {
            "text": "no more than",
            "correct": true
          },
          {
            "text": "no less than",
            "wrongReason": "no less than은 '무려'의 강조인데 문맥은 '너무 짧다'이므로 '겨우'의 의미가 맞지 않는다."
          },
          {
            "text": "not less than",
            "wrongReason": "not less than은 '적어도'의 의미로 too short 문맥과 반대된다."
          },
          {
            "text": "more than",
            "wrongReason": "more than은 '~ 이상'인데 too short 문맥상 '겨우(only)'의 의미가 필요하다."
          }
        ],
        "explanation": "단서 far too short → '겨우'의 의미인 no more than(=only)이 정답."
      },
      {
        "q": "_____ is more crucial to long-term success than maintaining strong relationships with loyal clients.",
        "choices": [
          {
            "text": "Nothing",
            "correct": true
          },
          {
            "text": "Everything",
            "wrongReason": "부정주어+비교급으로 최상급 의미를 만들어야 하므로 긍정 주어는 의미가 맞지 않는다."
          },
          {
            "text": "Anything",
            "wrongReason": "긍정문 주어로 '무엇이든'의 의미라 '가장 ~한 것은 없다'는 최상급 의미를 만들지 못한다."
          },
          {
            "text": "Something",
            "wrongReason": "'어떤 것'이라는 긍정 주어로 부정주어 비교급 최상급 구문을 이루지 못한다."
          }
        ],
        "explanation": "부정주어+비교급(more~than)=최상급. Nothing is more A than B = B가 가장 A하다."
      },
      {
        "q": "The flagship store generates _____ as much revenue as the smaller suburban location each month.",
        "choices": [
          {
            "text": "twice",
            "correct": true
          },
          {
            "text": "two times more",
            "wrongReason": "배수 비교는 '배수+as 원급 as' 구조이므로 as ~ as와 함께 more를 쓸 수 없다."
          },
          {
            "text": "double",
            "wrongReason": "double은 동사/명사로 주로 쓰이며 as ~ as 앞 배수 표현으로는 twice가 적절하다."
          },
          {
            "text": "twice more",
            "wrongReason": "as much as 구문에는 more를 붙이지 않으며 twice만으로 배수를 나타낸다."
          }
        ],
        "explanation": "배수 비교는 '배수+as+원급+as'. 단서 as much as → twice as much as."
      },
      {
        "q": "Although Mr. Tanaka joined the firm recently, he is actually _____ to several long-tenured managers in rank.",
        "choices": [
          {
            "text": "senior",
            "correct": true
          },
          {
            "text": "senior than",
            "wrongReason": "senior는 라틴계 비교어로 than이 아닌 to와 결합하므로 than은 오답이다."
          },
          {
            "text": "more senior than",
            "wrongReason": "senior는 자체가 비교 의미를 가져 more를 붙이지 않고 to와 결합한다."
          },
          {
            "text": "seniority",
            "wrongReason": "be동사 보어 자리에 형용사가 필요한데 명사 형태다."
          }
        ],
        "explanation": "단서 to + in rank → 라틴계 비교어 senior/junior는 than이 아닌 to와 결합."
      }
    ]
  },
  "subjunctive": {
    "easy": [
      {
        "q": "If the marketing team _____ more time, they could finalize the campaign proposal before the deadline.",
        "choices": [
          {
            "text": "had",
            "correct": true
          },
          {
            "text": "has",
            "wrongReason": "가정법 과거에서는 if절에 과거동사가 와야 하는데 현재형 has는 단순 현재 사실을 나타내 주절의 could와 짝이 맞지 않음"
          },
          {
            "text": "will have",
            "wrongReason": "가정법 과거 if절에는 미래 will이 올 수 없고, will have는 could와 호응하지 않음"
          },
          {
            "text": "would have",
            "wrongReason": "would have는 주절에 쓰이는 형태로 if절(종속절)에는 사용할 수 없음"
          }
        ],
        "explanation": "가정법 과거(현재 사실의 반대)는 'If+주어+과거동사, 주어+would/could/might+원형' 공식. 주절이 could finalize이므로 if절은 과거형 had가 정답."
      },
      {
        "q": "If I _____ in your position, I would accept the overseas branch transfer immediately.",
        "choices": [
          {
            "text": "were",
            "correct": true
          },
          {
            "text": "am",
            "wrongReason": "가정법 과거가 아닌 현재 사실을 나타내며, 주절 would accept와 시제가 맞지 않음"
          },
          {
            "text": "will be",
            "wrongReason": "미래 will be는 가정법 과거 if절에 쓰일 수 없음"
          },
          {
            "text": "would be",
            "wrongReason": "would be는 주절 형태로 if절에는 올 수 없음"
          }
        ],
        "explanation": "가정법 과거에서 be동사는 인칭과 무관하게 were를 사용. 주절이 would accept이므로 if절은 were가 정답."
      },
      {
        "q": "If the supplier _____ the shipment on time, we will start production next Monday.",
        "choices": [
          {
            "text": "delivers",
            "correct": true
          },
          {
            "text": "would deliver",
            "wrongReason": "주절이 will start인 단순 조건문(실제 가능)이므로 if절에는 현재형이 와야 하며 would deliver는 가정법 형태라 부적합"
          },
          {
            "text": "delivered",
            "wrongReason": "주절이 will이므로 가정법 과거가 아닌 단순 조건문이며, 과거형 delivered는 will과 호응하지 않음"
          },
          {
            "text": "will deliver",
            "wrongReason": "단순 조건문의 if절(조건 부사절)에는 미래 will을 쓰지 않고 현재형으로 미래를 표현해야 함"
          }
        ],
        "explanation": "단순 조건(실제 가능)은 'If+현재동사, 주어+will+원형' 공식. 주절이 will start이므로 if절은 현재형 delivers가 정답."
      },
      {
        "q": "If our company _____ a larger budget, we might hire two additional accountants this quarter.",
        "choices": [
          {
            "text": "had",
            "correct": true
          },
          {
            "text": "has",
            "wrongReason": "주절이 might hire인 가정법 과거이므로 현재형 has는 호응하지 않음"
          },
          {
            "text": "would have",
            "wrongReason": "would have는 주절 형태로 if절에 쓸 수 없음"
          },
          {
            "text": "having",
            "wrongReason": "동명사/분사 형태 having은 if절의 정동사 자리에 올 수 없음"
          }
        ],
        "explanation": "가정법 과거(현재 사실 반대)는 'If+과거동사, 주어+might+원형' 공식. 주절이 might hire이므로 if절은 과거형 had가 정답."
      },
      {
        "q": "If the client _____ satisfied with the sample, he would place a bulk order right away.",
        "choices": [
          {
            "text": "were",
            "correct": true
          },
          {
            "text": "is",
            "wrongReason": "주절이 would place인 가정법 과거이므로 현재형 is는 시제가 맞지 않음"
          },
          {
            "text": "was",
            "wrongReason": "가정법 과거에서 be동사는 인칭과 무관하게 were를 쓰는 것이 표준이므로 was는 부적합"
          },
          {
            "text": "would be",
            "wrongReason": "would be는 주절 형태로 if절에는 올 수 없음"
          }
        ],
        "explanation": "가정법 과거에서 be동사는 인칭 무관하게 were를 사용. 주절이 would place이므로 if절은 were가 정답."
      }
    ],
    "medium": [
      {
        "q": "If the manager had reviewed the contract more carefully, she _____ the pricing error before signing.",
        "choices": [
          {
            "text": "would have noticed",
            "correct": true
          },
          {
            "text": "would notice",
            "wrongReason": "if절이 had reviewed(가정법 과거완료)이므로 주절은 would have p.p. 형태여야 하며 would notice는 가정법 과거 주절 형태라 시제가 맞지 않음"
          },
          {
            "text": "noticed",
            "wrongReason": "단순 과거 noticed는 가정법 주절에 쓰일 수 없으며 would 등 조동사가 필요함"
          },
          {
            "text": "will have noticed",
            "wrongReason": "미래완료 will have noticed는 과거 사실 반대의 가정법 과거완료 주절로 부적합"
          }
        ],
        "explanation": "가정법 과거완료(과거 사실 반대)는 'If+had p.p., 주어+would/could/might+have p.p.' 공식. if절이 had reviewed이므로 주절은 would have noticed가 정답."
      },
      {
        "q": "If the board _____ the merger last year, the company would be far more profitable now.",
        "choices": [
          {
            "text": "had approved",
            "correct": true
          },
          {
            "text": "approved",
            "wrongReason": "혼합 가정법의 if절은 과거 사실 반대이므로 had p.p.가 필요하며 단순 과거 approved는 주절의 현재(now)와 호응하지 않음"
          },
          {
            "text": "would approve",
            "wrongReason": "would approve는 주절 형태로 if절에 쓸 수 없음"
          },
          {
            "text": "has approved",
            "wrongReason": "현재완료 has approved는 가정법 if절 형태가 아니며 과거 사실 반대를 나타내지 못함"
          }
        ],
        "explanation": "혼합 가정법(과거 일이 현재에 영향)은 'If+had p.p. → 주어+would+원형 now' 공식. 주절이 would be ~ now이고 if절은 과거(last year)이므로 had approved가 정답."
      },
      {
        "q": "The intern speaks so confidently in meetings as if she _____ the senior consultant on the project.",
        "choices": [
          {
            "text": "were",
            "correct": true
          },
          {
            "text": "is",
            "wrongReason": "as if는 현재 사실 반대를 나타낼 때 과거형을 쓰므로 현재형 is는 부적합"
          },
          {
            "text": "has been",
            "wrongReason": "현재완료 has been은 as if 가정법(현재 사실 반대)의 과거형 형태가 아님"
          },
          {
            "text": "would be",
            "wrongReason": "as if절에는 would be가 아닌 단순 과거(were)를 써서 현재 사실의 반대를 표현함"
          }
        ],
        "explanation": "'as if+과거형'은 현재 사실의 반대를 의미하며 be동사는 were를 사용. 인턴이 실제로는 선임이 아니므로 were가 정답."
      },
      {
        "q": "I wish the quarterly report _____ submitted before the auditors arrived yesterday.",
        "choices": [
          {
            "text": "had been",
            "correct": true
          },
          {
            "text": "was",
            "wrongReason": "과거(yesterday)에 대한 후회이므로 I wish 다음에는 had p.p.(과거완료)가 와야 하며 단순 과거 was는 현재 반대만 나타냄"
          },
          {
            "text": "were",
            "wrongReason": "were는 I wish+과거형으로 현재 사실 반대를 나타내므로 과거 사건에 대한 후회에는 부적합"
          },
          {
            "text": "has been",
            "wrongReason": "현재완료 has been은 I wish 가정법 구조에 쓰이지 않음"
          }
        ],
        "explanation": "'I wish+had p.p.'는 과거 사실의 반대(과거에 대한 후회). 어제 일에 대한 후회이므로 had been submitted가 정답."
      },
      {
        "q": "If our department had upgraded the software earlier, the system _____ smoothly during today's presentation.",
        "choices": [
          {
            "text": "would run",
            "correct": true
          },
          {
            "text": "would have run",
            "wrongReason": "주절이 today(현재)를 가리키는 혼합 가정법이므로 would 원형이 와야 하며 would have run은 과거 결과를 나타내 부적합"
          },
          {
            "text": "ran",
            "wrongReason": "단순 과거 ran은 가정법 주절에 쓰일 수 없으며 조동사 would가 필요함"
          },
          {
            "text": "runs",
            "wrongReason": "현재형 runs는 가정법 주절 형태가 아님"
          }
        ],
        "explanation": "혼합 가정법(과거 원인→현재 결과)은 'If+had p.p. → 주어+would+원형 now'. if절은 과거(earlier), 주절은 현재(today)이므로 would run이 정답."
      }
    ],
    "hard": [
      {
        "q": "The compliance officer requires that every employee _____ the confidentiality agreement before accessing the database.",
        "choices": [
          {
            "text": "sign",
            "correct": true
          },
          {
            "text": "signs",
            "wrongReason": "요구 동사 require+that절에서는 주어가 3인칭 단수라도 (should 생략) 동사원형을 쓰므로 3인칭 단수 현재형 signs는 부적합"
          },
          {
            "text": "signed",
            "wrongReason": "제안/요구 동사의 that절은 시제와 무관하게 동사원형이므로 과거형 signed는 부적합"
          },
          {
            "text": "will sign",
            "wrongReason": "require that절에는 미래 will이 아닌 동사원형이 와야 함"
          }
        ],
        "explanation": "요구/제안/주장 동사(require)+that+주어+(should)+동사원형 공식. should가 생략되어 주어 every employee가 3인칭 단수여도 원형 sign이 정답."
      },
      {
        "q": "_____ the negotiations fail, the legal team is prepared to pursue alternative arrangements immediately.",
        "choices": [
          {
            "text": "Should",
            "correct": true
          },
          {
            "text": "If",
            "wrongReason": "if 생략 도치 구문이 아니라면 동사 형태가 달라져야 하며, 도치된 문두 자리에는 조동사 Should가 와야 함"
          },
          {
            "text": "Were",
            "wrongReason": "Were 도치는 be동사/가정법 과거 구문에 쓰이며 뒤의 일반동사 fail과 호응하지 않음"
          },
          {
            "text": "Had",
            "wrongReason": "Had 도치는 가정법 과거완료(had p.p.)에 쓰이므로 뒤의 동사원형 fail과 맞지 않음"
          }
        ],
        "explanation": "'Should+주어+원형'은 if 생략 도치로 '혹시라도 ~한다면'의 의미. 'If the negotiations should fail'에서 if를 생략하고 Should를 문두에 둔 형태이므로 Should가 정답."
      },
      {
        "q": "The committee proposed that the annual conference _____ postponed until the new venue is secured.",
        "choices": [
          {
            "text": "be",
            "correct": true
          },
          {
            "text": "is",
            "wrongReason": "제안 동사 propose+that절에서는 (should 생략) 동사원형 be를 쓰므로 현재형 is는 부적합"
          },
          {
            "text": "was",
            "wrongReason": "propose that절은 시제와 무관하게 원형이므로 과거형 was는 부적합"
          },
          {
            "text": "being",
            "wrongReason": "분사/동명사 being은 that절의 정동사 자리에 올 수 없으며 원형 be가 필요함"
          }
        ],
        "explanation": "제안 동사(propose)+that+주어+(should)+동사원형 공식. 수동태이므로 should be가 되고 should 생략 시 be postponed, 정답은 be."
      },
      {
        "q": "_____ the executives anticipated the regulatory change, they would have adjusted the investment strategy in advance.",
        "choices": [
          {
            "text": "Had",
            "correct": true
          },
          {
            "text": "If",
            "wrongReason": "도치 구문이 아니라면 had가 필요하며, 도치 문두에는 조동사 Had가 와야 함"
          },
          {
            "text": "Were",
            "wrongReason": "Were 도치는 가정법 과거(be동사)에 쓰이며 주절 would have adjusted(과거완료)와 시제가 맞지 않음"
          },
          {
            "text": "Should",
            "wrongReason": "Should 도치는 미래 가정(혹시라도)에 쓰이며 주절 would have adjusted(과거 사실 반대)와 호응하지 않음"
          }
        ],
        "explanation": "가정법 과거완료의 if 생략 도치는 'Had+주어+p.p.' 형태. 'If the executives had anticipated'에서 if 생략 후 Had를 문두에 두며, 주절이 would have adjusted이므로 Had가 정답."
      },
      {
        "q": "The CEO insisted that the spokesperson _____ no further comments to the press until the investigation concludes.",
        "choices": [
          {
            "text": "make",
            "correct": true
          },
          {
            "text": "makes",
            "wrongReason": "주장 동사 insist+that절에서는 주어가 3인칭 단수라도 (should 생략) 동사원형을 쓰므로 makes는 부적합"
          },
          {
            "text": "made",
            "wrongReason": "insist that(요구/주장)절은 시제와 무관하게 원형이므로 과거형 made는 부적합"
          },
          {
            "text": "making",
            "wrongReason": "분사/동명사 making은 that절의 정동사 자리에 올 수 없으며 원형 make가 필요함"
          }
        ],
        "explanation": "주장 동사(insist)+that+주어+(should)+동사원형 공식. should 생략으로 주어 the spokesperson가 3인칭 단수여도 원형 make가 정답."
      }
    ]
  },
  "participle": {
    "easy": [
      {
        "q": "The _____ products in our new catalog have received excellent reviews from corporate clients.",
        "choices": [
          {
            "text": "featured",
            "correct": true
          },
          {
            "text": "featuring",
            "wrongReason": "현재분사는 능동(제품이 무언가를 특징짓는)이라 의미가 어색하다. 제품은 '특집으로 다뤄지는' 대상이다."
          },
          {
            "text": "feature",
            "wrongReason": "동사 원형은 명사를 수식할 수 없다."
          },
          {
            "text": "features",
            "wrongReason": "명사 복수형은 the와 products 사이에서 수식어 역할을 할 수 없다."
          }
        ],
        "explanation": "수식받는 명사 products가 '특집으로 다뤄지는' 대상(수동)이므로 과거분사 featured가 정답이다."
      },
      {
        "q": "All employees _____ in the leadership program must submit their applications by Friday.",
        "choices": [
          {
            "text": "enrolled",
            "correct": true
          },
          {
            "text": "enrolling",
            "wrongReason": "현재분사는 능동인데, 직원은 프로그램에 '등록되는' 대상이므로 수동이어야 한다."
          },
          {
            "text": "enroll",
            "wrongReason": "동사 원형은 명사를 뒤에서 수식할 수 없다."
          },
          {
            "text": "enrollment",
            "wrongReason": "명사형은 employees를 수식할 수 없다."
          }
        ],
        "explanation": "employees가 프로그램에 '등록된' 대상(수동·완료)이므로 과거분사 enrolled가 뒤에서 수식한다."
      },
      {
        "q": "The manager presented a detailed report describing the _____ sales figures for the quarter.",
        "choices": [
          {
            "text": "increasing",
            "correct": true
          },
          {
            "text": "increased",
            "wrongReason": "여기서는 수치가 '증가하고 있는' 능동·진행의 의미라 현재분사가 자연스럽다."
          },
          {
            "text": "increase",
            "wrongReason": "동사 원형은 명사 figures를 앞에서 수식할 수 없다."
          },
          {
            "text": "increases",
            "wrongReason": "명사형은 figures를 수식하는 형용사 역할을 할 수 없다."
          }
        ],
        "explanation": "sales figures가 스스로 '증가하는' 능동·진행 관계이므로 현재분사 increasing이 명사 앞에서 수식한다."
      },
      {
        "q": "Please review the document _____ to your email and sign it before the meeting.",
        "choices": [
          {
            "text": "attached",
            "correct": true
          },
          {
            "text": "attaching",
            "wrongReason": "현재분사는 능동이지만, 문서는 이메일에 '첨부된' 대상이므로 수동이어야 한다."
          },
          {
            "text": "attach",
            "wrongReason": "동사 원형은 명사를 뒤에서 수식할 수 없다."
          },
          {
            "text": "attachment",
            "wrongReason": "명사형은 document를 수식하는 분사 자리에 올 수 없다."
          }
        ],
        "explanation": "document가 이메일에 '첨부된' 대상(수동)이므로 과거분사 attached가 뒤에서 수식한다."
      },
      {
        "q": "The company hired a consultant _____ extensive experience in international marketing.",
        "choices": [
          {
            "text": "having",
            "correct": true
          },
          {
            "text": "had",
            "wrongReason": "과거분사 had는 수동인데, 컨설턴트가 경험을 '가진' 능동 관계라 어색하다."
          },
          {
            "text": "have",
            "wrongReason": "동사 원형은 명사 consultant를 뒤에서 수식할 수 없다."
          },
          {
            "text": "to have",
            "wrongReason": "to부정사는 '가질' 미래·목적 의미가 되어 이미 가진 경험을 나타내기 어색하다."
          }
        ],
        "explanation": "consultant가 경험을 '가지고 있는' 능동 관계이므로 현재분사 having이 뒤에서 수식한다."
      }
    ],
    "medium": [
      {
        "q": "The quarterly earnings report was quite _____, as profits exceeded all of our projections.",
        "choices": [
          {
            "text": "satisfying",
            "correct": true
          },
          {
            "text": "satisfied",
            "wrongReason": "과거분사는 사람이 만족을 '느끼는' 경우에 쓴다. 보고서는 감정을 유발하는 사물이다."
          },
          {
            "text": "satisfaction",
            "wrongReason": "명사형은 be동사 뒤 주격보어로 와도 주어 report를 설명하는 형용사 역할이 어색하다."
          },
          {
            "text": "satisfy",
            "wrongReason": "동사 원형은 보어 자리에서 주어의 상태를 나타낼 수 없다."
          }
        ],
        "explanation": "주어 report가 만족감을 '유발하는' 사물이므로 감정 유발의 현재분사 satisfying이 정답이다."
      },
      {
        "q": "Many participants felt _____ by the unclear instructions provided during the training session.",
        "choices": [
          {
            "text": "confused",
            "correct": true
          },
          {
            "text": "confusing",
            "wrongReason": "현재분사는 혼란을 '유발하는' 사물/원인에 쓴다. 참가자는 혼란을 느끼는 사람이다."
          },
          {
            "text": "confuse",
            "wrongReason": "동사 원형은 felt의 보어 자리에 올 수 없다."
          },
          {
            "text": "confusion",
            "wrongReason": "명사형은 '혼란스러움을 느끼는' 사람의 상태를 형용사처럼 나타낼 수 없다."
          }
        ],
        "explanation": "사람인 participants가 혼란을 '느끼는' 입장이므로 감정을 받는 과거분사 confused가 정답이다."
      },
      {
        "q": "The keynote speaker delivered an _____ presentation that captivated the entire audience.",
        "choices": [
          {
            "text": "inspiring",
            "correct": true
          },
          {
            "text": "inspired",
            "wrongReason": "과거분사는 사람이 영감을 '받은' 경우에 쓴다. presentation은 영감을 주는 사물이다."
          },
          {
            "text": "inspire",
            "wrongReason": "동사 원형은 명사 presentation을 수식할 수 없다."
          },
          {
            "text": "inspiration",
            "wrongReason": "명사형은 an과 presentation 사이에서 형용사처럼 수식할 수 없다."
          }
        ],
        "explanation": "수식받는 presentation이 영감을 '주는' 사물이므로 감정 유발의 현재분사 inspiring이 정답이다."
      },
      {
        "q": "The investors were deeply _____ when the merger negotiations collapsed without warning.",
        "choices": [
          {
            "text": "disappointed",
            "correct": true
          },
          {
            "text": "disappointing",
            "wrongReason": "현재분사는 실망을 '유발하는' 사물/사건에 쓴다. 투자자는 실망을 느끼는 사람이다."
          },
          {
            "text": "disappoint",
            "wrongReason": "동사 원형은 were의 보어 자리에 올 수 없다."
          },
          {
            "text": "disappointment",
            "wrongReason": "명사형은 주어 investors의 감정 상태를 형용사처럼 설명할 수 없다."
          }
        ],
        "explanation": "사람인 investors가 실망을 '느끼는' 입장이므로 감정을 받는 과거분사 disappointed가 정답이다."
      },
      {
        "q": "The board found the new market expansion strategy genuinely _____ and approved it immediately.",
        "choices": [
          {
            "text": "exciting",
            "correct": true
          },
          {
            "text": "excited",
            "wrongReason": "과거분사는 사람이 흥분/설렘을 '느끼는' 경우에 쓴다. strategy는 그 감정을 유발하는 사물이다."
          },
          {
            "text": "excite",
            "wrongReason": "동사 원형은 found의 목적격보어 자리에 올 수 없다."
          },
          {
            "text": "excitement",
            "wrongReason": "명사형은 strategy를 설명하는 보어 형용사 역할이 어색하다."
          }
        ],
        "explanation": "목적어 strategy가 설렘을 '유발하는' 사물이므로 감정 유발의 현재분사 exciting이 정답이다."
      }
    ],
    "hard": [
      {
        "q": "_____ the budget proposal carefully, the finance director identified several unnecessary expenditures.",
        "choices": [
          {
            "text": "Reviewing",
            "correct": true
          },
          {
            "text": "Reviewed",
            "wrongReason": "과거분사 분사구문은 수동인데, 생략된 주어 director가 직접 '검토하는' 능동 주체라 어색하다."
          },
          {
            "text": "Review",
            "wrongReason": "동사 원형은 분사구문을 이끌 수 없으며 접속사 없이 두 절을 연결할 수 없다."
          },
          {
            "text": "To review",
            "wrongReason": "to부정사는 '검토하기 위해'라는 목적이 되어, 검토한 결과 문제를 발견한 문맥과 맞지 않는다."
          }
        ],
        "explanation": "분사구문의 생략된 주어가 director이고 그가 예산안을 '검토하는' 능동 관계이므로 현재분사 Reviewing이 정답이다."
      },
      {
        "q": "_____ in three different languages, the user manual is accessible to a wide range of customers.",
        "choices": [
          {
            "text": "Written",
            "correct": true
          },
          {
            "text": "Writing",
            "wrongReason": "현재분사는 능동인데, 매뉴얼은 사람에 의해 '쓰여진' 대상이므로 수동이어야 한다."
          },
          {
            "text": "Having written",
            "wrongReason": "능동 완료형이라 매뉴얼이 무언가를 '쓴' 주체가 되어 의미가 맞지 않는다."
          },
          {
            "text": "To write",
            "wrongReason": "to부정사는 목적/미래 의미라 이미 작성된 상태를 나타낼 수 없다."
          }
        ],
        "explanation": "분사구문의 주어 manual이 '쓰여진' 대상(수동)이므로 과거분사 Written으로 시작하는 수동 분사구문이 정답이다."
      },
      {
        "q": "_____ all the required documents in advance, the applicant completed the registration in just a few minutes.",
        "choices": [
          {
            "text": "Having prepared",
            "correct": true
          },
          {
            "text": "Preparing",
            "wrongReason": "단순 현재분사는 동시 동작을 나타내는데, 서류 준비가 등록보다 '먼저' 일어난 일이라 완료형이 필요하다."
          },
          {
            "text": "Prepared",
            "wrongReason": "과거분사 분사구문은 수동인데, 지원자가 서류를 직접 '준비한' 능동 주체라 맞지 않는다."
          },
          {
            "text": "Having been prepared",
            "wrongReason": "수동 완료형이라 지원자가 서류를 준비한 능동 관계와 어긋난다."
          }
        ],
        "explanation": "서류 준비가 등록 완료보다 이전에 일어난 능동 동작이므로 완료 분사구문 Having prepared가 정답이다."
      },
      {
        "q": "_____ by the sudden surge in demand, the warehouse team requested additional temporary staff.",
        "choices": [
          {
            "text": "Overwhelmed",
            "correct": true
          },
          {
            "text": "Overwhelming",
            "wrongReason": "현재분사는 능동인데, 팀은 수요 급증에 의해 '압도당하는' 대상이므로 수동이어야 한다."
          },
          {
            "text": "Overwhelm",
            "wrongReason": "동사 원형은 분사구문을 이끌 수 없다."
          },
          {
            "text": "Having overwhelmed",
            "wrongReason": "능동 완료형이라 팀이 무언가를 '압도한' 주체가 되어 의미가 반대다."
          }
        ],
        "explanation": "분사구문의 주어 team이 수요 급증에 의해 '압도당하는' 대상(수동)이므로 과거분사 Overwhelmed가 정답이다."
      },
      {
        "q": "The CEO concluded her speech with the audience _____ enthusiastically at every key point.",
        "choices": [
          {
            "text": "nodding",
            "correct": true
          },
          {
            "text": "nodded",
            "wrongReason": "과거분사는 수동인데, 청중이 스스로 '고개를 끄덕이는' 능동 동작이므로 맞지 않는다."
          },
          {
            "text": "nod",
            "wrongReason": "with 부대상황 구문에서 목적어 뒤에는 분사가 와야 하며 동사 원형은 올 수 없다."
          },
          {
            "text": "to nod",
            "wrongReason": "with+목적어 구문에서 to부정사는 부대상황을 나타낼 수 없다."
          }
        ],
        "explanation": "with+목적어+분사 부대상황 구문에서 audience가 스스로 '끄덕이는' 능동 동작이므로 현재분사 nodding이 정답이다."
      }
    ]
  }
};

(function mergeGrammarExtra() {
  if (typeof GRAMMAR_TOPICS === "undefined" || !Array.isArray(GRAMMAR_TOPICS)) return;
  GRAMMAR_TOPICS.forEach(function (t) {
    var ex = GRAMMAR_EXTRA[t.id];
    if (!ex) return;
    ["easy", "medium", "hard"].forEach(function (lv) {
      if (ex[lv] && t.levels[lv] && Array.isArray(t.levels[lv].questions)) {
        t.levels[lv].questions.push.apply(t.levels[lv].questions, ex[lv]);
      }
    });
  });
})();
