// 由 build.py 從 sites/pharm2/site.json 生成,不要手改
window.SITE = {
  "id": "pharm2",
  "name": "藥師二階國考互動筆記",
  "shortName": "藥師二階國考",
  "homeLabel": "藥師二階主頁",
  "description": "藥師二階國考互動筆記與歷屆試題練習",
  "brand": "ezpass",
  "examName": "藥師二階國考",
  "examShort": "藥二國考",
  "examMinutes": 60,
  "eyebrow": "EZPASS PHARM II",
  "practiceName": "藥師二階國考練習本",
  "practiceIcon": "⚗️",
  "heroArt": "pill",
  "practiceDesc": "105~115 年歷屆 4,620 題 · 分科分年 · 狀態追蹤 (詳解陸續補上)",
  "domain": "ezpass-exam.com",
  "base": "/pharm2/",
  "dataPath": "x/pharm2",
  "themeColor": "#f8f7f0",
  "aiRole": "藥師",
  "pdfHint": "(04_考選部PDF/藥師二階)",
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
      "code": "ph4",
      "name": "藥四",
      "full": "藥學（四）",
      "emoji": "⚗️",
      "color": "#15803d",
      "accent": "#16a34a",
      "bg": "#dcfce7",
      "fg": "#14532d",
      "desc": "調劑學・臨床藥學",
      "topics": [
        "調劑學",
        "臨床藥學",
        "其他"
      ]
    },
    {
      "code": "ph5",
      "name": "藥五",
      "full": "藥學（五）",
      "emoji": "🩺",
      "color": "#b91c1c",
      "accent": "#ef4444",
      "bg": "#fee2e2",
      "fg": "#991b1b",
      "desc": "藥物治療學",
      "topics": [
        "心血管",
        "感染症",
        "內分泌",
        "神經精神",
        "腫瘤",
        "其他"
      ]
    },
    {
      "code": "ph6",
      "name": "藥六",
      "full": "藥學（六）",
      "emoji": "📋",
      "color": "#4b5563",
      "accent": "#6b7280",
      "bg": "#f3f4f6",
      "fg": "#374151",
      "desc": "藥事行政・法規",
      "topics": [
        "藥事法規",
        "藥政管理",
        "健保給付",
        "其他"
      ]
    }
  ],
  "defaultSubject": "ph4",
  "primarySubject": "ph4",
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
      "name": "藥學（四） 調劑學・臨床藥學",
      "emoji": "⚗️",
      "color": "#15803d",
      "subjects": [
        "ph4"
      ]
    },
    {
      "name": "藥學（五） 藥物治療學",
      "emoji": "🩺",
      "color": "#b91c1c",
      "subjects": [
        "ph5"
      ]
    },
    {
      "name": "藥學（六） 藥事行政・法規",
      "emoji": "📋",
      "color": "#4b5563",
      "subjects": [
        "ph6"
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
    "ph4": "藥學（四） 調劑學・臨床藥學",
    "ph5": "藥學（五） 藥物治療學",
    "ph6": "藥學（六） 藥事行政・法規"
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
  "exampleQid": "ph4-115-1-3",
  "sessionLabels": {
    "1": "①",
    "2": "②"
  }
};
