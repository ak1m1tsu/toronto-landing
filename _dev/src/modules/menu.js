const Menu = {
  OnMenuLinkClick: onMenuLinkClick,
};

/**
 * @param {Event} e
 */
function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      scrollY -
      document.querySelector("#header").scrollHeight;

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}

export default Menu;
