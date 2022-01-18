import React, { useState } from "react";


function Header(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    return (
        <div>
        <section className="theme-container">
          <button className="theme" id="theme" />
        </section>
        <h1>My Habit Tracker</h1>
      </div>
    );
  }
});

export default Header;