/* nav.js — 入口網站共用導覽列的行為 (v675)
 *
 * 為什麼要有這一支:
 *   以前每一頁的標題列長得不一樣 (首頁有「網站重要功能預覽」、方案頁有「第一次使用看這邊」、
 *   獎勵頁兩個都沒有),而且訂閱狀態的小藥丸只有首頁會畫、獎勵頁根本沒載 subscription.js。
 *   使用者點進第二層就不知道自己在哪、也不知道怎麼回去。
 *   現在四頁共用同一份導覽列,行為集中在這裡,以後只要改一個地方。
 *
 * 這支負責三件事:
 *   1. 把「目前這一頁」的選單項目標出來 (白底 + aria-current)
 *   2. 畫訂閱狀態小藥丸 (#sub-pill)
 *   3. 登入鈕:已登入就藏起來;沒登入的頁面沒有登入視窗時,導回首頁自動打開
 */
(function () {
  "use strict";

  // ── 1. 標出目前這一頁 ────────────────────────────────
  function currentFile() {
    var p = location.pathname;
    var f = p.substring(p.lastIndexOf("/") + 1);
    return f === "" ? "index.html" : f;
  }
  function markCurrent() {
    var here = currentFile();
    var links = document.querySelectorAll(".topnav .nav-l");
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href") || "";
      var target = href.split("#")[0].split("?")[0];
      if (target === "./" || target === "") target = "index.html";
      if (target === here) {
        links[i].setAttribute("aria-current", "page");
      } else {
        links[i].removeAttribute("aria-current");
      }
    }
  }

  // ── 2. 訂閱狀態小藥丸 ────────────────────────────────
  function renderPill(st) {
    var el = document.getElementById("sub-pill");
    if (!el) return;
    if (!st || st.reason === "not_logged_in" || st.reason === "error") {
      el.innerHTML = "";
      return;
    }
    var cls = "sub-pill";
    var txt = "";
    if (st.reason === "paid") {
      txt =
        st.plan === "lifetime"
          ? "✨ 終身會員"
          : "✨ 會員 · 剩 " + st.days_left + " 天";
      if (st.days_left <= 5) cls += " warn";
    } else if (st.reason === "trial") {
      txt = "🎁 試用中 · 剩 " + st.days_left + " 天";
      if (st.days_left <= 2) cls += " warn";
    } else if (st.reason === "trial_expired") {
      txt = "試用結束 · 選方案開通";
      cls += " expired";
    } else if (st.reason === "subscription_expired") {
      txt = "已過期 · 續訂";
      cls += " expired";
    }
    if (!txt) {
      el.innerHTML = "";
      return;
    }
    el.innerHTML =
      '<a class="' + cls + '" href="subscribe.html">' + txt + "</a>";
    showBar();
  }
  // 會員列預設藏起來,有東西可顯示才出現 (不然沒登入會多一條空白帶)
  function showBar() {
    var bar = document.querySelector(".memberbar");
    var el = document.getElementById("sub-pill");
    if (bar) bar.hidden = !(el && el.innerHTML);
  }

  // ── 3. 登入鈕 ────────────────────────────────────────
  //   首頁 / 方案頁自己有登入視窗 (data-login="modal");
  //   其他頁沒有,就帶去首頁並自動打開 (?login=1)
  function wireLogin() {
    var b = document.getElementById("btn-login");
    if (!b) return;
    if (b.getAttribute("data-login") === "modal") return; // 頁面自己處理
    b.addEventListener("click", function () {
      location.href = "./?login=1";
    });
  }

  function hookAuth() {
    var tries = 0;
    (function wait() {
      if (!window.Auth || !Auth.onChange) {
        if (++tries < 40) setTimeout(wait, 250);
        return;
      }
      Auth.onChange(function (user) {
        var b = document.getElementById("btn-login");
        if (b) b.hidden = !!user;
        if (window.Subscription && Subscription.refresh) Subscription.refresh();
      });
      if (window.Subscription && Subscription.onChange)
        Subscription.onChange(renderPill);
    })();
  }

  function init() {
    markCurrent();
    wireLogin();
    hookAuth();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.PortalNav = { renderPill: renderPill, markCurrent: markCurrent };
})();
