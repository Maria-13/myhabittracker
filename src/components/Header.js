import React from "react";

const LightTheme = {
className: ":root"
};

const DarkTheme = {
  className: ":root.dark"
};
const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function Header(props) {
  function changeTheme() {
    if (props.theme === "light") {
        props.setTheme("dark");
    } else {
        props.setTheme("light");
    }
};
    return (
      <section
      className="theme-container">
        <button 
        className="theme" 
        id="theme"
        onClick={changeTheme}>
        </button>
        </section>
    );
  };

export default Header;