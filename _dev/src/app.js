import "./index.html";
import "./app.css";
import Tab from "./modules/tab";
import Menu from "./modules/menu";

const tabs = document.querySelectorAll(".tabs-link");
if (tabs.length > 0) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      Tab.OpenTab(e, tab.textContent.replace(/\s+/g, ""));
    });
  });

  document.querySelector("#defaultOpen").click();
}

const pages = document.querySelectorAll(".menu__link[data-goto]");
if (pages.length > 0) {
  pages.forEach((menuLink) => {
    menuLink.addEventListener("click", Menu.OnMenuLinkClick);
  });
}

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", (e) => {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
