import "./styles/index.scss";

import { Link } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";

import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Navbar />
      <AppRouter />
    </div>
  );
};
