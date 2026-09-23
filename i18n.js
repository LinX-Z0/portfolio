(function () {
  var STORAGE_KEY = "portfolio-lang";

  function dictFor(lang) {
    var root = window.PORTFOLIO_I18N || {};
    return root[lang] || {};
  }

  function getLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "zh") return stored;
    return "en";
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "zh") lang = "en";
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    document.documentElement.setAttribute("data-lang", lang);
    apply(lang);
  }

  function t(lang, key) {
    var table = dictFor(lang);
    if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    if (lang !== "en") {
      var en = dictFor("en");
      if (Object.prototype.hasOwnProperty.call(en, key)) return en[key];
    }
    return null;
  }

  function apply(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = t(lang, key);
      if (val == null) return;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var val = t(lang, key);
      if (val != null) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      var val = t(lang, key);
      if (val != null) el.setAttribute("aria-label", val);
    });

    document.querySelectorAll("[data-i18n-value]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-value");
      var val = t(lang, key);
      if (val != null) el.value = val;
    });

    var titleKey = document.body.getAttribute("data-i18n-title") || "meta.title";
    var title = t(lang, titleKey);
    if (title) document.title = title;

    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      var label = t(lang, "nav.lang");
      var aria = t(lang, "nav.langAria");
      if (label != null) btn.textContent = label;
      if (aria != null) btn.setAttribute("aria-label", aria);
    });
  }

  function bindToggles() {
    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(getLang() === "zh" ? "en" : "zh");
      });
    });
  }

  window.PortfolioI18nMerge = function (pack) {
    if (!window.PORTFOLIO_I18N) window.PORTFOLIO_I18N = { en: {}, zh: {} };
    if (!window.PORTFOLIO_I18N.en) window.PORTFOLIO_I18N.en = {};
    if (!window.PORTFOLIO_I18N.zh) window.PORTFOLIO_I18N.zh = {};
    if (pack.en) Object.assign(window.PORTFOLIO_I18N.en, pack.en);
    if (pack.zh) Object.assign(window.PORTFOLIO_I18N.zh, pack.zh);
  };

  document.addEventListener("DOMContentLoaded", function () {
    bindToggles();
    setLang(getLang());
  });

  window.PortfolioLang = { get: getLang, set: setLang, apply: apply };
})();
