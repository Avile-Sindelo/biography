import "./toggle.css";
import Sun from "../../img/sun2.png";
import Moon from "../../img/moon3.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
    const theme = useContext(ThemeContext);

    const changeTheme = () => {
        theme.dispatch({type: "TOGGLE"});
    }

    return (
        <div className="toggle">
                <img src={Sun} alt="" className="toggle-icon" />
                <img src={Moon} alt="" className="toggle-icon" />
                <button className="toggle-btn" onClick={changeTheme} style={{left: theme.state.darkMode ? 0 : 25}}></button>
        </div>
    )
};

export default Toggle