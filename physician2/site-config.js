// 由 build.py 從 sites/physician2/site.json 生成,不要手改
window.SITE = {
  "id": "physician2",
  "name": "醫師二階國考互動筆記",
  "shortName": "醫師二階國考",
  "homeLabel": "醫師二階主頁",
  "description": "醫師二階國考互動筆記與歷屆試題練習",
  "brand": "ezpass",
  "examName": "醫師二階國考",
  "examShort": "醫師二階國考",
  "examMinutes": 120,
  "eyebrow": "EZPASS PHYSICIAN II",
  "practiceName": "醫師二階國考練習本",
  "practiceIcon": "🩺",
  "heroArt": "stethoscope",
  "practiceDesc": "105~115 年歷屆試題 · 分科分年 · 狀態追蹤 (詳解陸續補上)",
  "domain": "ezpass-exam.com",
  "themeColor": "#f8f7f0",
  "aiRole": "醫師",
  "pdfHint": "(04_考選部PDF/醫師二階)",
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
      "code": "md3",
      "name": "醫三",
      "full": "醫學（三）",
      "emoji": "🩺",
      "color": "#0e7490",
      "accent": "#3b82f6",
      "bg": "#dbeafe",
      "fg": "#1d4ed8",
      "desc": "內科・家醫",
      "topics": [
        "心臟血管",
        "消化肝膽",
        "腎臟",
        "風濕免疫",
        "血液腫瘤",
        "胸腔",
        "內分泌",
        "感染",
        "家庭醫學",
        "其他"
      ]
    },
    {
      "code": "md4",
      "name": "醫四",
      "full": "醫學（四）",
      "emoji": "👶",
      "color": "#7c3aed",
      "accent": "#7c3aed",
      "bg": "#ede9fe",
      "fg": "#5b21b6",
      "desc": "兒科・皮膚・神經・精神",
      "topics": [
        "小兒科",
        "皮膚科",
        "神經科",
        "精神科",
        "其他"
      ]
    },
    {
      "code": "md5",
      "name": "醫五",
      "full": "醫學（五）",
      "emoji": "🔪",
      "color": "#b91c1c",
      "accent": "#ef4444",
      "bg": "#fee2e2",
      "fg": "#991b1b",
      "desc": "外科・骨科・泌尿",
      "topics": [
        "一般外科",
        "神經外科",
        "心胸外科",
        "消化外科",
        "骨科",
        "泌尿科",
        "其他"
      ]
    },
    {
      "code": "md6",
      "name": "醫六",
      "full": "醫學（六）",
      "emoji": "👁️",
      "color": "#166534",
      "accent": "#16a34a",
      "bg": "#dcfce7",
      "fg": "#14532d",
      "desc": "麻醉・眼・耳鼻喉・婦產・復健",
      "topics": [
        "麻醉科",
        "眼科",
        "耳鼻喉科",
        "產科",
        "婦科",
        "復健科",
        "其他"
      ]
    }
  ],
  "defaultSubject": "md3",
  "primarySubject": "md3",
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
      "name": "內科學 Internal Medicine",
      "emoji": "🩺",
      "color": "#0e7490",
      "subjects": [
        "md3"
      ]
    },
    {
      "name": "家庭醫學 Family Medicine",
      "emoji": "🏠",
      "color": "#0891b2",
      "subjects": [
        "md3"
      ]
    },
    {
      "name": "小兒科 Pediatrics",
      "emoji": "👶",
      "color": "#f59e0b",
      "subjects": [
        "md4"
      ]
    },
    {
      "name": "皮膚科 Dermatology",
      "emoji": "🧴",
      "color": "#d97706",
      "subjects": [
        "md4"
      ]
    },
    {
      "name": "神經科 Neurology",
      "emoji": "🧠",
      "color": "#7c3aed",
      "subjects": [
        "md4"
      ]
    },
    {
      "name": "精神科 Psychiatry",
      "emoji": "💭",
      "color": "#9333ea",
      "subjects": [
        "md4"
      ]
    },
    {
      "name": "外科學 Surgery",
      "emoji": "🔪",
      "color": "#b91c1c",
      "subjects": [
        "md5"
      ]
    },
    {
      "name": "骨科 Orthopedics",
      "emoji": "🦴",
      "color": "#dc2626",
      "subjects": [
        "md5"
      ]
    },
    {
      "name": "泌尿科 Urology",
      "emoji": "🫘",
      "color": "#ea580c",
      "subjects": [
        "md5"
      ]
    },
    {
      "name": "麻醉科 Anesthesiology",
      "emoji": "💉",
      "color": "#16a34a",
      "subjects": [
        "md6"
      ]
    },
    {
      "name": "眼科 Ophthalmology",
      "emoji": "👁️",
      "color": "#0369a1",
      "subjects": [
        "md6"
      ]
    },
    {
      "name": "耳鼻喉科 ENT",
      "emoji": "👂",
      "color": "#0284c7",
      "subjects": [
        "md6"
      ]
    },
    {
      "name": "婦產科 OB/GYN",
      "emoji": "🤰",
      "color": "#ec4899",
      "subjects": [
        "md6"
      ]
    },
    {
      "name": "復健科 Rehabilitation",
      "emoji": "🦽",
      "color": "#65a30d",
      "subjects": [
        "md6"
      ]
    },
    {
      "name": "影像與急診 Radiology & Emergency",
      "emoji": "🩻",
      "color": "#6b7280",
      "subjects": [
        "md3",
        "md4",
        "md5",
        "md6"
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
    "md3": "內科學 Internal Medicine",
    "md4": "小兒科 Pediatrics",
    "md5": "外科學 Surgery",
    "md6": "婦產科 OB/GYN"
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
    "explExamples": "      【找對題】範例:\n      - **(A) 先給予靜脈輸液再評估反應** ✓ 低血容性休克第一步是快速輸液復甦，再依反應決定輸血或手術 → **這就是答案**\n      - **(B) 立即給升壓劑** ✗ 未補足容積就用升壓劑會惡化組織灌流\n\n      【找錯題】範例:\n      - **(A) 急性心肌梗塞應盡早再灌流** ✓ STEMI 首選 90 分鐘內 PCI\n      - **(B) 心因性休克首選大量輸液** ✗ 心因性休克是幫浦衰竭，大量輸液會惡化肺水腫 → **這就是答案**",
    "triggerExamples": "「STEMI → 90 分鐘內 PCI」「高血鉀 → 先給鈣劑保護心臟」"
  },
  "sw": {
    "precache": [],
    "dataFiles": []
  },
  "exampleQid": "md3-115-1-3",
  "base": "/physician2/",
  "dataPath": "x/physician2"
};
