const root = document.querySelector(":root");
const changeThemeIcon = document.querySelector("#change-theme-btn i");
const navbarToggler = document.querySelector(".navbar-toggler");
const filtersList = document.querySelector(".categories--mob");
let darkTheme = false;

function changeTheme() {
  if (darkTheme) {
    changeThemeIcon.classList.remove("changed-icon");
    root.style.setProperty("--body-bg", "#ffffff");
    root.style.setProperty("--shadow-color", "#00000020");
    root.style.setProperty("--text-color", "#2b2b2b");
    root.style.setProperty("--navbar-bg", "#ffffff");
    root.style.setProperty("--logo-bg", "#f3f3f3");
    navbarToggler.style = "filter: invert(0%);";
    setTimeout(() => {
      changeThemeIcon.classList.add("bi-moon");
      changeThemeIcon.classList.remove("bi-sun");
    }, 100);
    darkTheme = false;
    return;
  }
  if (!darkTheme) {
    changeThemeIcon.classList.add("changed-icon");
    root.style.setProperty("--body-bg", "#121212");
    root.style.setProperty("--shadow-color", "transparent");
    root.style.setProperty("--text-color", "#ffffff");
    root.style.setProperty("--navbar-bg", "#212121");
    root.style.setProperty("--logo-bg", "#303030");
    navbarToggler.style = "filter: invert(100%);";
    setTimeout(() => {
      changeThemeIcon.classList.add("bi-sun");
      changeThemeIcon.classList.remove("bi-moon");
    }, 100);
    darkTheme = true;
    return;
  }
}

function showFilters() {
  filtersList.classList.toggle("show-filters");
}