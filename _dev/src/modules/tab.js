const Tab = {
  OpenTab: openTab,
};

/**
 * @param {Event} e
 * @param {string} city
 */
function openTab(e, city) {
  const tabsContent = document.querySelectorAll(".tabs-content");
  if (tabsContent.length > 0) {
    tabsContent.forEach((tab) => {
      tab.style.display = "none";
    });
  }
  const tabLinks = document.querySelectorAll(".tabs-link");
  if (tabLinks.length > 0) {
    tabLinks.forEach((tabLink) => {
      tabLink.className = tabLink.className.replace(" active", "");
    });
  }
  const cityElem = document.getElementById(city);
  if (cityElem) {
    cityElem.style.display = "block";
  }
  e.currentTarget.className += " active";
}

export default Tab;
