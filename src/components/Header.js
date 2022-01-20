import { useState } from "react";

    
      function Header(props) {
        const [theme, setTheme] = useState("root");

        const themeToggler = () => {
          theme === "root" ? setTheme("root.dark") : setTheme("root");
        };
        return (
      <div
        className="theme">
        <button onClick={() => themeToggler()}
        className="root" 
        id="root"
        value={theme}>
        </button>
        </div>
        );
}

export default Header;