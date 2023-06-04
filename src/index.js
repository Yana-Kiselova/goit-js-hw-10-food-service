const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputSwitchThemeEl = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('.light-theme');
populateBody();
inputSwitchThemeEl.addEventListener('change', switchTheme);

function switchTheme() {
  if (bodyEl.classList.contains(Theme.LIGHT)) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);

    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);

    localStorage.setItem('theme', Theme.LIGHT);
  }
}
function populateBody() {
  const themeBody = localStorage.getItem('theme');
  if (themeBody && themeBody === Theme.DARK) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
    // изменить класс боди на темный
    inputSwitchThemeEl.checked = true;
    console.log(themeBody);
  }
}
