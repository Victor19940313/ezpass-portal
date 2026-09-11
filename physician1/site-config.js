// 由 build.py 從 sites/physician1/site.json 生成,不要手改
window.SITE = {
  "id": "physician1",
  "name": "醫師一階國考互動筆記",
  "shortName": "醫師一階國考",
  "homeLabel": "醫師一階主頁",
  "description": "醫師一階國考互動筆記與歷屆試題練習",
  "brand": "ezpass",
  "examName": "醫師一階國考",
  "examShort": "醫師一階國考",
  "examMinutes": 120,
  "eyebrow": "EZPASS PHYSICIAN I",
  "practiceName": "醫師一階國考練習本",
  "practiceIcon": "🧬",
  "heroArt": "stethoscope",
  "practiceDesc": "105~115 年歷屆試題 · 分科分年 · 狀態追蹤 (詳解陸續補上)",
  "domain": "ezpass-exam.com",
  "themeColor": "#f8f7f0",
  "aiRole": "醫師",
  "pdfHint": "(04_考選部PDF/醫師一階)",
  "nextExam": {
    "date": "2027-02-01",
    "note": "※ 暫填 · 精確日期以考選部公告為準"
  },
  "firebase": {
    "apiKey": "AIzaSyACFnTGWEuhUp0htnMWe8i7XbHiAWjgoAc",
    "authDomain": "ezpass-exam.com",
    "databaseURL": "https://dental-exam-sync-default-rtdb.asia-southeast1.firebasedatabase.app",
    "projectId": "dental-exam-sync",
    "storageBucket": "dental-exam-sync.firebasestorage.app",
    "messagingSenderId": "136556858599",
    "appId": "1:136556858599:web:de382cbbef5099d63e2642"
  },
  "subjects": [
    {
      "code": "md1",
      "name": "醫一",
      "full": "醫學（一）",
      "emoji": "🧬",
      "color": "#0e7490",
      "accent": "#3b82f6",
      "bg": "#dbeafe",
      "fg": "#1d4ed8",
      "desc": "生化・解剖・胚胎・組織・生理",
      "topics": [
        "生物化學",
        "解剖學",
        "胚胎學",
        "組織學",
        "生理學",
        "其他"
      ]
    },
    {
      "code": "md2",
      "name": "醫二",
      "full": "醫學（二）",
      "emoji": "🦠",
      "color": "#7c3aed",
      "accent": "#7c3aed",
      "bg": "#ede9fe",
      "fg": "#5b21b6",
      "desc": "微免・寄生蟲・藥理・病理・公衛",
      "topics": [
        "微生物學",
        "免疫學",
        "寄生蟲學",
        "藥理學",
        "病理學",
        "公共衛生學",
        "其他"
      ]
    }
  ],
  "defaultSubject": "md1",
  "primarySubject": "md1",
  "years": [
    "105-1",
    "105-2",
    "106-1",
    "106-2",
    "107-1",
    "107-2",
    "108-1",
    "108-2",
    "109-1",
    "109-2",
    "110-1",
    "110-2",
    "111-1",
    "111-2",
    "112-1",
    "112-2",
    "113-1",
    "113-2",
    "114-1",
    "114-2",
    "115-1",
    "115-2"
  ],
  "defaultYear": "115-1",
  "domains": [
    {
      "name": "生物化學 Biochemistry",
      "emoji": "🧪",
      "color": "#0891b2",
      "subjects": [
        "md1"
      ]
    },
    {
      "name": "解剖學 Anatomy",
      "emoji": "🦴",
      "color": "#a855f7",
      "subjects": [
        "md1"
      ]
    },
    {
      "name": "胚胎與組織 Embryology & Histology",
      "emoji": "🔬",
      "color": "#9333ea",
      "subjects": [
        "md1"
      ]
    },
    {
      "name": "生理學 Physiology",
      "emoji": "❤️",
      "color": "#dc2626",
      "subjects": [
        "md1"
      ]
    },
    {
      "name": "微生物免疫 Microbiology & Immunology",
      "emoji": "🦠",
      "color": "#16a34a",
      "subjects": [
        "md2"
      ]
    },
    {
      "name": "寄生蟲學 Parasitology",
      "emoji": "🪱",
      "color": "#65a30d",
      "subjects": [
        "md2"
      ]
    },
    {
      "name": "藥理學 Pharmacology",
      "emoji": "💊",
      "color": "#0369a1",
      "subjects": [
        "md2"
      ]
    },
    {
      "name": "病理學 Pathology",
      "emoji": "🩸",
      "color": "#b91c1c",
      "subjects": [
        "md2"
      ]
    },
    {
      "name": "公共衛生 Public Health",
      "emoji": "📊",
      "color": "#6b7280",
      "subjects": [
        "md2"
      ]
    },
    {
      "name": "其他 Other",
      "emoji": "📁",
      "color": "#9ca3af",
      "subjects": []
    }
  ],
  "domainBySubject": {
    "md1": "生理學 Physiology",
    "md2": "病理學 Pathology"
  },
  "domainAliases": {},
  "topicCats": [],
  "ai": {
    "termsRule": "【用語守則(必須遵守，生成詳解也要)】\n            - 一律用繁體中文，絕對不要簡體字\n            - 用台灣醫學院與臨床教科書慣用語 (專有名詞可附英文);若原文是簡體或大陸用語，自動換成台灣用語，不可保留原詞。\n            ",
    "termsRuleTag": "【用語守則",
    "termReplacements": [
      [
        "修复",
        "修復"
      ],
      [
        "关节",
        "關節"
      ],
      [
        "韧带",
        "韌帶"
      ],
      [
        "静脉",
        "靜脈"
      ],
      [
        "动脉",
        "動脈"
      ],
      [
        "药物",
        "藥物"
      ],
      [
        "剂量",
        "劑量"
      ],
      [
        "综合征",
        "症候群"
      ],
      [
        "综合症",
        "症候群"
      ],
      [
        "症候群",
        "症候群"
      ],
      [
        "心肌梗死",
        "心肌梗塞"
      ],
      [
        "脑梗死",
        "腦梗塞"
      ],
      [
        "血氧饱和度",
        "血氧飽和度"
      ],
      [
        "超声",
        "超音波"
      ],
      [
        "磁共振",
        "核磁共振"
      ],
      [
        "计算机断层",
        "電腦斷層"
      ],
      [
        "肿瘤",
        "腫瘤"
      ],
      [
        "细胞",
        "細胞"
      ],
      [
        "抗生素",
        "抗生素"
      ]
    ],
    "termsFixSummary": "- 簡體字 → 繁體字\n- 大陸用語 → 台灣醫學慣用語 (梗死→梗塞、綜合徵→症候群、超聲→超音波)",
    "noRefTopics": [],
    "noRefNote": "",
    "explExamples": "      【找對題】範例:\n      - **(A) 肝醣分解受升糖素活化** ✓ 升糖素經 cAMP-PKA 活化 phosphorylase kinase，促進肝醣分解 → **這就是答案**\n      - **(B) 胰島素促進肝醣分解** ✗ 胰島素活化 glycogen synthase，是促進合成不是分解\n\n      【找錯題】範例:\n      - **(A) 迷走神經刺激使心跳變慢** ✓ 副交感經 M2 受體降低竇房結自動性\n      - **(B) 交感神經刺激使心肌收縮力下降** ✗ β1 受體活化提高 cAMP，收縮力上升 → **這就是答案**",
    "triggerExamples": "「升糖素 → cAMP ↑ → 肝醣分解」「Gram(+) → teichoic acid」"
  },
  "sw": {
    "precache": [],
    "dataFiles": []
  },
  "exampleQid": "md1-115-1-3",
  "base": "/physician1/",
  "dataPath": "x/physician1"
};
