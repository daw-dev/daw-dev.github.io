const mediaQuerylist = window.matchMedia("(prefers-color-scheme: dark)");
mediaQuerylist.addEventListener("change", (evt) => {
  const storedTheme = getStoredTheme();
  if (storedTheme === null) {
    setThemeNoSave(evt.matches ? "dark" : "light");
  }
});

function init() {
  setThemeNoSave(getPreferredTheme());
}

function getPreferredTheme() {
  const storedTheme = getStoredTheme();
  if (storedTheme === null) return getMediaTheme();
  return storedTheme;
}

function getMediaTheme() {
  return mediaQuerylist.matches ? "dark" : "light";
}

function getStoredTheme() {
  return localStorage.getItem("theme");
}

function setThemeNoSave(theme: string) {
  document.documentElement.setAttribute("data-bs-theme", theme);
}

function setTheme(theme: string) {
  if (theme === "auto") {
    setTheme(getMediaTheme());
    localStorage.removeItem("theme");
  } else {
    setThemeNoSave(theme);
    localStorage.setItem("theme", theme);
  }
}

export { setTheme, getPreferredTheme, init };
