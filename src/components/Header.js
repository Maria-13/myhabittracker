import React, { useState } from "react";


function Header(props) {
    return (
        <div>
        <section className="theme-container">
          <button className="theme" id="theme" />
        </section>
        <h1>My Habit Tracker</h1>
      </div>
    );
  };

export default Header;