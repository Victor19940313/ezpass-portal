// 許願區 (2026-09-11)
// HUA:「首頁能不能擺一個地方放:我要考別的證照沒有在上面,我要許願」
//      「一個登入的帳號只能投一個證照」「我只做選擇題的」
//
// 資料存在 users/<uid>/wish —— 一個帳號一格,天生就只能投一個;要改就是覆蓋。
// 因為存在自己的節點底下,**不用改資料庫規則**(現有規則本來就允許每個人寫自己的)。
// 統計不在前台顯示:要顯示就得讓大家讀得到別人的節點,沒必要;HUA 在後台看就好。
(function () {
  // 候選清單:台灣專技高考裡以選擇題為主的醫事類。
  // 已經有站或建置中的 (牙醫、護理、醫師、藥師) 不列。
  var OPTIONS = [
    "物理治療師",
    "職能治療師",
    "醫事檢驗師",
    "醫事放射師",
    "呼吸治療師",
    "營養師",
    "驗光師",
    "牙體技術師",
    "語言治療師",
    "聽力師",
    "助產師",
    "獸醫師",
  ];

  var box = document.getElementById("wish-body");
  if (!box) return;
  var chosen = null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c];
    });
  }

  function db() {
    try {
      return firebase.database();
    } catch (e) {
      return null;
    }
  }

  function renderLoggedOut() {
    box.innerHTML =
      '<div class="wish-done">許願要先<b>登入</b>一下，這樣我才分得出是不同的人在許願。<br />' +
      '<span class="wish-msg">不會因此多寄任何信給你。</span></div>' +
      '<div class="wish-row" style="margin-top:.7rem">' +
      '<button class="btn primary" id="wish-login">登入，然後許願</button></div>';
    var b = document.getElementById("wish-login");
    if (b) {
      b.onclick = function () {
        if (typeof window.openLogin === "function") window.openLogin();
        else location.href = "./?login=1";
      };
    }
  }

  function renderDone(w) {
    var name = w.other ? w.other : w.exam;
    box.innerHTML =
      '<div class="wish-done">你許願的是：<b>' +
      esc(name) +
      "</b><br />" +
      '<span class="wish-msg">收到了，謝謝你告訴我。之後想改的話，隨時可以回來改。</span></div>' +
      '<div class="wish-row" style="margin-top:.7rem">' +
      '<button class="btn" id="wish-edit">改成別的</button></div>';
    var e = document.getElementById("wish-edit");
    if (e) {
      e.onclick = function () {
        renderForm(w);
      };
    }
  }

  function markSelected() {
    var labels = box.querySelectorAll(".wish-opt");
    for (var i = 0; i < labels.length; i++) {
      var ri = labels[i].querySelector("input");
      if (ri && ri.checked) labels[i].classList.add("on");
      else labels[i].classList.remove("on");
    }
  }

  function renderForm(w) {
    var cur = w ? w.exam : null;
    var curOther = w && w.other ? w.other : "";
    chosen = cur;
    var html = '<div class="wish-opts">';
    for (var i = 0; i < OPTIONS.length; i++) {
      var o = OPTIONS[i];
      html +=
        '<label class="wish-opt' +
        (o === cur ? " on" : "") +
        '"><input type="radio" name="wish" value="' +
        esc(o) +
        '"' +
        (o === cur ? " checked" : "") +
        " /><span>" +
        esc(o) +
        "</span></label>";
    }
    html +=
      '<label class="wish-opt' +
      (cur === "__other" ? " on" : "") +
      '"><input type="radio" name="wish" value="__other"' +
      (cur === "__other" ? " checked" : "") +
      " /><span>其他（自己填）</span></label></div>";
    html +=
      '<input class="wish-other" id="wish-other" maxlength="30" placeholder="其他：請輸入考試名稱" value="' +
      esc(curOther) +
      '" style="display:' +
      (cur === "__other" ? "block" : "none") +
      '" />';
    html +=
      '<div class="wish-row"><button class="btn primary" id="wish-send">就是這個，送出</button>' +
      '<span class="wish-msg" id="wish-msg"></span></div>';
    box.innerHTML = html;

    var radios = box.querySelectorAll('input[name="wish"]');
    for (var j = 0; j < radios.length; j++) {
      radios[j].onchange = function () {
        chosen = this.value;
        markSelected();
        var oth = document.getElementById("wish-other");
        if (oth)
          oth.style.display = this.value === "__other" ? "block" : "none";
      };
    }
    document.getElementById("wish-send").onclick = send;
  }

  function send() {
    var msg = document.getElementById("wish-msg");
    var u = window.Auth && Auth.getUser && Auth.getUser();
    if (!u) {
      renderLoggedOut();
      return;
    }
    if (!chosen) {
      msg.textContent = "先選一個吧";
      return;
    }
    var other = "";
    if (chosen === "__other") {
      var oth = document.getElementById("wish-other");
      other = ((oth && oth.value) || "").trim();
      if (!other) {
        msg.textContent = "「其他」請填考試名稱";
        return;
      }
    }
    var d = db();
    if (!d) {
      msg.textContent = "連不上，等一下再試";
      return;
    }
    msg.textContent = "送出中…";
    var payload = { exam: chosen, other: other, ts: Date.now() };
    d.ref("users/" + u.uid + "/wish")
      .set(payload)
      .then(function () {
        renderDone(payload);
      })
      .catch(function (e) {
        msg.textContent = "送不出去：" + (e && e.message ? e.message : "");
      });
  }

  function load(user) {
    if (!user) {
      renderLoggedOut();
      return;
    }
    var d = db();
    if (!d) {
      renderForm(null);
      return;
    }
    d.ref("users/" + user.uid + "/wish")
      .once("value")
      .then(function (s) {
        var w = s.val();
        if (w && (w.exam || w.other)) renderDone(w);
        else renderForm(null);
      })
      .catch(function () {
        renderForm(null);
      });
  }

  // 按鈕展開/收合 (HUA:「做成一個鈕,按進去後再勾選」)
  (function initToggle() {
    var btn = document.getElementById("wish-toggle");
    var panel = document.getElementById("wish-panel");
    if (!btn || !panel) return;
    btn.addEventListener("click", function () {
      var open = panel.hidden;
      panel.hidden = !open;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        try {
          panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } catch (e) {}
      }
    });
  })();

  var tries = 0;
  (function wait() {
    if (!window.Auth || !Auth.onChange) {
      if (++tries < 60) {
        setTimeout(wait, 250);
        return;
      }
      renderLoggedOut();
      return;
    }
    Auth.onChange(load);
    load(Auth.getUser && Auth.getUser());
  })();
})();
