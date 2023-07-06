import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Image from "react-bootstrap/Image";
import sun from "../resources/sun.svg";
import moon from "../resources/moon.svg";
import { useEffect, useState } from "react";
import { ColorTheme, addThemeChangeEventListener, getPreferredTheme, removeThemeChangeEventListener, setTheme } from "../utils/theme";
import classNames from "classnames";

export default function ThemeChooser() {
  const [currentTheme, setCurrentTheme] = useState(getPreferredTheme());
  const sunClassName = classNames(
    currentTheme === "light" && "active",
    "theme-icon",
    "sun"
  );
  const moonClassName = classNames(
    currentTheme === "dark" && "active",
    "theme-icon",
    "moon"
  );

  useEffect(() => {
    addThemeChangeEventListener(themeChangeEventListener);
    return () => removeThemeChangeEventListener(themeChangeEventListener);
  }, []);

  function themeChangeEventListener(newTheme: ColorTheme) {
    setCurrentTheme(newTheme);
  }

  function switchTheme() {
    const newTheme = currentTheme == "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  function resetTheme() {
    setTheme("auto");
  }

  return (
    <ButtonGroup vertical>
      <Button className="theme-chooser d-lg-flex" onClick={switchTheme}>
        <Image src={sun} alt="sun" className={sunClassName} width="25rem" />
        <Image src={moon} alt="moon" className={moonClassName} width="25rem" />
      </Button>
      <Button size="sm" className="py-0" onClick={resetTheme} style={{fontSize: ".6rem"}} variant="outline-secondary">
        reset theme
      </Button>
    </ButtonGroup>
  );
}
