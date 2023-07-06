const mediaQuerylist = window.matchMedia("(prefers-color-scheme: dark)");
mediaQuerylist.addEventListener("change", (evt) => {
  const storedTheme = getStoredTheme();
  if (storedTheme === null) {
    setThemeNoSave(evt.matches ? "dark" : "light");
  }
});

const themeChangeListeners = [] as ThemeChangeCallBack[];

type ThemeChangeCallBack = (theme: ColorTheme) => void;

function addThemeChangeEventListener(callBack: ThemeChangeCallBack){
  themeChangeListeners.push(callBack);
}

function removeThemeChangeEventListener(callBack: ThemeChangeCallBack){
  const callBackIndex = themeChangeListeners.indexOf(callBack);
  if(callBackIndex === -1) return;

  themeChangeListeners.splice(callBackIndex, 1);
}

function invokeThemeChanged(theme: ColorTheme){
  themeChangeListeners.forEach(callBack => callBack(theme));
}

function init() {
  setThemeNoSave(getPreferredTheme());
}

function getPreferredTheme() {
  const storedTheme = getStoredTheme();
  if (storedTheme === null) return getMediaTheme();
  return storedTheme as ColorTheme;
}

function getMediaTheme() {
  return (mediaQuerylist.matches ? "dark" : "light") as ColorTheme;
}

function getStoredTheme() {
  return localStorage.getItem("theme") as ColorTheme | null;
}

function setThemeNoSave(theme: ColorTheme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  invokeThemeChanged(theme);
}

function setTheme(theme: ColorTheme | "auto") {
  if (theme === "auto") {
    const mediaTheme = getMediaTheme();
    setThemeNoSave(mediaTheme);
    localStorage.removeItem("theme");
  } else {
    setThemeNoSave(theme);
    localStorage.setItem("theme", theme);
  }
}

export type ColorTheme = "light" | "dark";
export { setTheme, getPreferredTheme, init, addThemeChangeEventListener, removeThemeChangeEventListener };
