import React from "react";

const themes = {
  light: {
    primary: "black",
    secondary: "red",
  },
  dark: {
    primary: "white",
    secondary: "yellow",
  },
};

const ThemeContext = React.createContext(themes.light);

const App = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Navbar />
    </ThemeContext.Provider>
  );
};

const Navbar = () => {
  return (
    <div>
      <Logo />
    </div>
  );
};

const Logo = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
};
