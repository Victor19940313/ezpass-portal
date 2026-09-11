// 由 build.py 從 sites/pharm1/site.json 生成,不要手改
window.SITE = {
  "id": "pharm1",
  "name": "藥師一階國考互動筆記",
  "shortName": "藥師一階國考",
  "homeLabel": "藥師一階主頁",
  "description": "藥師一階國考互動筆記與歷屆試題練習",
  "brand": "ezpass",
  "examName": "藥師一階國考",
  "examShort": "藥一國考",
  "examMinutes": 60,
  "eyebrow": "EZPASS PHARM I",
  "practiceName": "藥師一階國考練習本",
  "practiceIcon": "💊",
  "heroArt": "pill",
  "practiceDesc": "105~115 年歷屆 5,280 題 · 分科分年 · 狀態追蹤 (詳解陸續補上)",
  "domain": "ezpass-exam.com",
  "base": "/pharm1/",
  "dataPath": "x/pharm1",
  "themeColor": "#f8f7f0",
  "aiRole": "藥師",
  "pdfHint": "(04_考選部PDF/藥師一階)",
  "nextExam": {
    "date": "2027-02-15",
    "note": "※ 粗估 (2027 年 2 月中) · 精確日期以考選部公告為準"
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
      "code": "ph1",
      "name": "藥一",
      "full": "藥學（一）",
      "emoji": "💊",
      "color": "#b45309",
      "accent": "#d97706",
      "bg": "#fef3c7",
      "fg": "#92400e",
      "desc": "藥理學・藥物化學",
      "topics": [
        "藥理學",
        "藥物化學",
        "其他"
      ]
    },
    {
      "code": "ph2",
      "name": "藥二",
      "full": "藥學（二）",
      "emoji": "🔬",
      "color": "#7c3aed",
      "accent": "#8b5cf6",
      "bg": "#ede9fe",
      "fg": "#5b21b6",
      "desc": "藥物分析・生藥學（含中藥學）",
      "topics": [
        "藥物分析",
        "生藥學",
        "中藥學",
        "其他"
      ]
    },
    {
      "code": "ph3",
      "name": "藥三",
      "full": "藥學（三）",
      "emoji": "🧪",
      "color": "#0e7490",
      "accent": "#0891b2",
      "bg": "#cffafe",
      "fg": "#155e75",
      "desc": "藥劑學・生物藥劑學",
      "topics": [
        "藥劑學",
        "生物藥劑學",
        "其他"
      ]
    }
  ],
  "defaultSubject": "ph1",
  "primarySubject": "ph1",
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
  "defaultYear": "115-2",
  "domains": [
    {
      "name": "藥學（一） 藥理學・藥物化學",
      "emoji": "💊",
      "color": "#b45309",
      "subjects": [
        "ph1"
      ]
    },
    {
      "name": "藥學（二） 藥物分析・生藥學（含中藥學）",
      "emoji": "🔬",
      "color": "#7c3aed",
      "subjects": [
        "ph2"
      ]
    },
    {
      "name": "藥學（三） 藥劑學・生物藥劑學",
      "emoji": "🧪",
      "color": "#0e7490",
      "subjects": [
        "ph3"
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
    "ph1": "藥學（一） 藥理學・藥物化學",
    "ph2": "藥學（二） 藥物分析・生藥學（含中藥學）",
    "ph3": "藥學（三） 藥劑學・生物藥劑學"
  },
  "domainAliases": {},
  "topicCats": [],
  "ai": {
    "termsRule": "【用語守則(必須遵守，生成詳解也要)】\n            - 一律用繁體中文，絕對不要簡體字\n            - 用台灣藥學臨床與教科書慣用語;若原文是簡體或大陸用語，自動換成台灣用語，不可保留原詞。\n            ",
    "termsRuleTag": "【用語守則",
    "termReplacements": [
      [
        "药物",
        "藥物"
      ],
      [
        "剂量",
        "劑量"
      ],
      [
        "给药",
        "給藥"
      ],
      [
        "静脉",
        "靜脈"
      ],
      [
        "处方",
        "處方"
      ],
      [
        "药品",
        "藥品"
      ],
      [
        "制剂",
        "製劑"
      ],
      [
        "吸收",
        "吸收"
      ],
      [
        "代谢",
        "代謝"
      ],
      [
        "不良反应",
        "不良反應"
      ]
    ],
    "termsFixSummary": "- 簡體字 → 繁體字\n- 大陸用語 → 台灣藥學慣用語",
    "noRefTopics": [],
    "noRefNote": "",
    "explExamples": "      【找對題】範例:\n      - **(A) Warfarin 的作用是抑制維生素 K 環氧化物還原酶** ✓ 阻斷 VKORC1，使 II、VII、IX、X 因子無法羧化 → **這就是答案**\n      - **(B) Warfarin 直接抑制凝血酶** ✗ 直接抑制凝血酶的是 dabigatran\n\n      【找錯題】範例:\n      - **(A) Aminoglycoside 有腎毒性與耳毒性** ✓ 這是它最典型的兩個毒性\n      - **(B) Aminoglycoside 口服吸收良好** ✗ 極性高、口服幾乎不吸收，要注射給藥 → **這就是答案**",
    "triggerExamples": "「紅人症候群 → Vancomycin 輸注太快」「乾咳 → ACEI」"
  },
  "sw": {
    "precache": [],
    "dataFiles": []
  },
  "exampleQid": "ph1-115-1-3",
  "sessionLabels": {
    "1": "①",
    "2": "②"
  }
};
