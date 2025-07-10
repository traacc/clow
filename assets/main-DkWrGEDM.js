(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function initFaq() {
  const faqItems = document.querySelectorAll(".faq__item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq__question");
    question.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
}
function initHeaderButtons() {
  const headerServicesBtn = document.querySelector(".header__services--btn");
  const headerInfoBtn = document.querySelector(".header__info--btn");
  headerServicesBtn.addEventListener("click", () => {
    const servicesMenu = document.querySelector(".header__services-window");
    servicesMenu.classList.toggle("open");
  });
  headerInfoBtn.addEventListener("click", () => {
    const infoMenu = document.querySelector(".header__info-window");
    infoMenu.classList.toggle("open");
  });
}
function initCommon() {
  initFaq();
  initHeaderButtons();
}
function setPriceSwitcher() {
  const priceSwitcherItems = document.querySelectorAll(".tariffs__price-item");
  const tariffItems = document.querySelectorAll(".taffif__item");
  priceSwitcherItems.forEach((item) => {
    item.addEventListener("click", () => {
      const priceType = item.getAttribute("data-price-item");
      priceSwitcherItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      tariffItems.forEach((tariff) => {
        const priceValue = tariff.getAttribute(`data-${priceType}-price`);
        const priceElement = tariff.querySelector(".taffif__price .value");
        if (priceElement) {
          priceElement.textContent = priceValue;
        }
      });
    });
  });
}
function setTariffsSection() {
  const tariffSwitcherItems = document.querySelectorAll(".tarrifs__service-switcher-item");
  const tariffBlocks = document.querySelectorAll(".tariffs__list");
  tariffSwitcherItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetBlock = item.getAttribute("data-tariff-block");
      tariffSwitcherItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      tariffBlocks.forEach((block) => {
        if (block.getAttribute("data-tariff-block") === targetBlock) {
          block.classList.add("active");
        } else {
          block.classList.remove("active");
        }
      });
    });
  });
  setPriceSwitcher();
}
function initFrontPage() {
  setTariffsSection();
}
document.addEventListener("DOMContentLoaded", () => {
  initFrontPage();
  initCommon();
});
//# sourceMappingURL=main-DkWrGEDM.js.map
