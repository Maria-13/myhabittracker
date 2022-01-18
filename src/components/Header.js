import React from "react";


function Header(props) {
  function changeTheme() {
    if (props.theme === "theme") {
        props.setTheme("theme.dark");
    } else {
        props.setTheme("theme");
    }
};
    return (
      <section
      className="theme-container">
        <button 
        class="theme" 
        id="theme"
        onClick={changeTheme}>
        </button>
        <h1>My Habit Tracker</h1>
        </section>
    );
  };

export default Header;