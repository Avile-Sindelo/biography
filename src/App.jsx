import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
import Technology from "./components/technology/Technology";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "honeydew", color: darkMode ? "#BC8F8F" : "#708090"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <Technology/>
      <Contact/>
    </div>
  )
};

export default App;