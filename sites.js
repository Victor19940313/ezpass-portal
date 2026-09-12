// 入口網站的站台清單。status 是 live 才點得進去,soon 顯示「準備中」。
// 新站上線:把 status 改 live、url 填好,推上去就好。
// years:收錄的考題年份 (民國),來自 07_共用版/sites/<站>/site.json 的 years。
var SITES = [
  {
    id: "dental",
    name: "牙醫師",
    stage: "第二階段",
    years: "105～115 年",
    art: "tooth",
    status: "live",
    url: "https://ezpass-dental.com/",
  },
  {
    id: "nursing",
    name: "護理師",
    stage: "",
    years: "105～115 年",
    art: "nurseCap",
    status: "live",
    url: "/nursing/",
  },
  {
    id: "dental1",
    name: "牙醫師",
    stage: "第一階段",
    years: "105～115 年",
    art: "tooth",
    status: "soon",
    url: "/dental1/",
  },
  {
    id: "physician1",
    name: "醫師",
    stage: "第一階段",
    years: "105～115 年",
    art: "stethoscope",
    status: "live",
    url: "/physician1/",
  },
  {
    id: "physician2",
    name: "醫師",
    stage: "第二階段",
    years: "105～115 年",
    art: "stethoscope",
    status: "live",
    url: "/physician2/",
  },
  {
    id: "pharm1",
    name: "藥師",
    stage: "第一階段",
    years: "105～115 年",
    art: "pill",
    status: "soon",
    url: "",
  },
  {
    id: "pharm2",
    name: "藥師",
    stage: "第二階段",
    years: "105～115 年",
    art: "pill",
    status: "soon",
    url: "",
  },
];

// 吉祥物 (跟各站首頁同一套圖,可愛風配色)
var ART = {
  tooth:
    '<svg viewBox="0 0 120 120"><path d="M32 18c14-10 42-10 56 0 14 10 12 34 4 56-4 12-8 34-16 34s-8-22-16-22-8 22-16 22-12-22-16-34C20 52 18 28 32 18z" fill="#fff" stroke="#4a3b4b" stroke-width="3.5" stroke-linejoin="round"/><circle cx="46" cy="52" r="3.5" fill="#4a3b4b"/><circle cx="74" cy="52" r="3.5" fill="#4a3b4b"/><path d="M52 64q8 7 16 0" fill="none" stroke="#4a3b4b" stroke-width="3" stroke-linecap="round"/><circle cx="38" cy="62" r="5" fill="#ffb3c6" opacity=".9"/><circle cx="82" cy="62" r="5" fill="#ffb3c6" opacity=".9"/></svg>',
  nurseCap:
    '<svg viewBox="0 0 120 120"><path d="M27 88 L35 31 Q60 21 85 31 L93 88 Q60 95 27 88 Z" fill="#fff" stroke="#4a3b4b" stroke-width="3.5" stroke-linejoin="round"/><path d="M56.5 33 H63.5 V40.5 H71 V47.5 H63.5 V55 H56.5 V47.5 H49 V40.5 H56.5 Z" fill="#e2565f"/><circle cx="49" cy="68" r="3.5" fill="#4a3b4b"/><circle cx="71" cy="68" r="3.5" fill="#4a3b4b"/><path d="M54 77q6 6 12 0" fill="none" stroke="#4a3b4b" stroke-width="3" stroke-linecap="round"/><circle cx="39" cy="75" r="5" fill="#ffb3c6" opacity=".9"/><circle cx="81" cy="75" r="5" fill="#ffb3c6" opacity=".9"/></svg>',
  pill:
    '<svg viewBox="0 0 120 120"><rect x="14" y="36" width="92" height="48" rx="24" fill="#fff" stroke="#4a3b4b" stroke-width="3.5"/><path d="M38 36a24 24 0 0 0 0 48h0V36z" fill="#ffd9e3"/><path d="M38 36v48" stroke="#4a3b4b" stroke-width="3.5" stroke-linecap="round"/><circle cx="62" cy="55" r="3.4" fill="#4a3b4b"/><circle cx="84" cy="55" r="3.4" fill="#4a3b4b"/><path d="M67 66q6 6 12 0" fill="none" stroke="#4a3b4b" stroke-width="3" stroke-linecap="round"/><circle cx="55" cy="65" r="4.4" fill="#ffb3c6" opacity=".9"/><circle cx="92" cy="65" r="4.4" fill="#ffb3c6" opacity=".9"/></svg>',
  stethoscope:
    '<svg viewBox="0 0 120 120"><path d="M26 26 C22 54 30 68 44 70" fill="none" stroke="#4a3b4b" stroke-width="6.5" stroke-linecap="round"/><path d="M58 26 C62 54 54 68 44 70" fill="none" stroke="#4a3b4b" stroke-width="6.5" stroke-linecap="round"/><path d="M44 70 C44 86 56 94 68 90" fill="none" stroke="#4a3b4b" stroke-width="6.5" stroke-linecap="round"/><circle cx="26" cy="23" r="5.5" fill="#4a3b4b"/><circle cx="58" cy="23" r="5.5" fill="#4a3b4b"/><circle cx="80" cy="84" r="25" fill="#fff" stroke="#4a3b4b" stroke-width="3.5"/><circle cx="72" cy="80" r="3.4" fill="#4a3b4b"/><circle cx="88" cy="80" r="3.4" fill="#4a3b4b"/><path d="M74 90q6 6 12 0" fill="none" stroke="#4a3b4b" stroke-width="3" stroke-linecap="round"/><circle cx="65" cy="88" r="4.6" fill="#ffb3c6" opacity=".9"/><circle cx="95" cy="88" r="4.6" fill="#ffb3c6" opacity=".9"/></svg>',
};
