// 由 build.py 從 sites/dental1/site.json 生成,不要手改
window.SITE = {
  "id": "dental1",
  "name": "牙醫師一階國考互動筆記",
  "shortName": "牙醫一階國考",
  "homeLabel": "牙醫一階主頁",
  "description": "牙醫師第一階段國家考試互動筆記與歷屆試題練習",
  "brand": "ezpass",
  "examName": "牙醫師一階國考",
  "examShort": "牙一國考",
  "examMinutes": 60,
  "eyebrow": "EZPASS DENTAL I",
  "practiceName": "牙醫一階國考練習本",
  "practiceIcon": "🦷",
  "heroArt": "tooth",
  "practiceDesc": "105~115 年歷屆 3,520 題 · 分科分年 · 狀態追蹤 (詳解陸續補上)",
  "domain": "ezpass-exam.com",
  "base": "/dental1/",
  "dataPath": "x/dental1",
  "themeColor": "#f8f7f0",
  "aiRole": "牙醫師",
  "pdfHint": "(04_考選部PDF/牙醫一階)",
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
      "code": "ya1",
      "name": "牙一",
      "full": "牙醫學（一）",
      "emoji": "🦷",
      "color": "#0e7490",
      "accent": "#0891b2",
      "bg": "#cffafe",
      "fg": "#155e75",
      "desc": "口腔解剖・牙體形態・口腔組織胚胎・生物化學",
      "topics": [
        "口腔解剖",
        "牙體形態",
        "口腔組織胚胎",
        "生物化學",
        "其他"
      ]
    },
    {
      "code": "ya2",
      "name": "牙二",
      "full": "牙醫學（二）",
      "emoji": "🔬",
      "color": "#7c3aed",
      "accent": "#8b5cf6",
      "bg": "#ede9fe",
      "fg": "#5b21b6",
      "desc": "口腔病理・牙科材料・口腔微生物・牙科藥理",
      "topics": [
        "口腔病理",
        "牙科材料",
        "口腔微生物",
        "牙科藥理",
        "其他"
      ]
    }
  ],
  "defaultSubject": "ya1",
  "primarySubject": "ya1",
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
      "name": "口腔解剖學 Oral Anatomy",
      "emoji": "🦴",
      "color": "#0e7490",
      "subjects": [
        "ya1"
      ]
    },
    {
      "name": "牙體形態學 Dental Morphology",
      "emoji": "🦷",
      "color": "#0891b2",
      "subjects": [
        "ya1"
      ]
    },
    {
      "name": "口腔組織與胚胎學 Oral Histology & Embryology",
      "emoji": "🧬",
      "color": "#0284c7",
      "subjects": [
        "ya1"
      ]
    },
    {
      "name": "生物化學 Biochemistry",
      "emoji": "⚗️",
      "color": "#2563eb",
      "subjects": [
        "ya1"
      ]
    },
    {
      "name": "口腔病理學 Oral Pathology",
      "emoji": "🔬",
      "color": "#7c3aed",
      "subjects": [
        "ya2"
      ]
    },
    {
      "name": "牙科材料學 Dental Materials",
      "emoji": "🧪",
      "color": "#9333ea",
      "subjects": [
        "ya2"
      ]
    },
    {
      "name": "口腔微生物學 Oral Microbiology",
      "emoji": "🦠",
      "color": "#a21caf",
      "subjects": [
        "ya2"
      ]
    },
    {
      "name": "牙科藥理學 Dental Pharmacology",
      "emoji": "💊",
      "color": "#c026d3",
      "subjects": [
        "ya2"
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
    "ya1": "口腔解剖學 Oral Anatomy",
    "ya2": "口腔病理學 Oral Pathology"
  },
  "domainAliases": {},
  "topicCats": [],
  "ai": {
    "termsRule": "【用語守則(必須遵守，生成詳解也要)】\n            - 一律用繁體中文，絕對不要簡體字\n            - 用台灣牙醫臨床與教科書慣用語;若原文是簡體或大陸用語，自動換成台灣用語，不可保留原詞。\n            ",
    "termsRuleTag": "【用語守則",
    "termReplacements": [
      [
        "牙齿",
        "牙齒"
      ],
      [
        "龋齿",
        "齲齒"
      ],
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
        "粘膜",
        "黏膜"
      ]
    ],
    "termsFixSummary": "- 簡體字 → 繁體字\n- 大陸用語 → 台灣牙醫慣用語",
    "noRefTopics": [],
    "noRefNote": "",
    "explExamples": "      【找對題】範例:\n      - **(A) 琺瑯質由成釉細胞分泌** ✓ 成釉細胞(ameloblast)分泌琺瑯質基質，是外胚層來源 → **這就是答案**\n      - **(B) 琺瑯質由造牙本質細胞分泌** ✗ 造牙本質細胞(odontoblast)分泌的是牙本質，不是琺瑯質\n\n      【找錯題】範例:\n      - **(A) 上顎第一大臼齒近心舌側常有 Carabelli 結節** ✓ 這是上顎第一大臼齒的典型特徵\n      - **(B) 下顎第一小臼齒的舌側咬頭比頰側大** ✗ 下顎第一小臼齒舌側咬頭明顯較小，常退化 → **這就是答案**",
    "triggerExamples": "「Carabelli 結節 → 上顎第一大臼齒」「Tomes process → 成釉細胞分泌琺瑯質」"
  },
  "sw": {
    "precache": [],
    "dataFiles": []
  },
  "exampleQid": "ya1-115-1-3",
  "sessionLabels": {
    "1": "①",
    "2": "②"
  }
};
