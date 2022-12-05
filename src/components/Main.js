import mainStyles from "./Main.module.css";
import { useEffect, useState } from "react";
import Search from "./Search";
import Card from "./Card";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import axios from "axios";

function Main() {
  const [getTag, setGetTag] = useState();
  const [login, setLogin] = useState();

  const [onBtn, setOnBtn] = useState(null);
  const handleOnClick = (e) => {
    e.preventDefault();
    setOnBtn(getTag);
  };

  const [data, setData] = useState();

  useEffect(() => {
    const requestUser = async () => {
      const result = await axios.get(
        `https://api.github.com/users/${onBtn === null ? "octocat" : onBtn}`
      );
      setData(result.data);
      setLogin(result.data.login);

      console.log(data);
    };

    requestUser();
  }, [onBtn]);

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
  };

  return (
    <div
      className={mainStyles.app}
      id={`${theme === "light" ? mainStyles.appLight : mainStyles.appDark}`}
    >
      <div className={mainStyles.container}>
        <div className={mainStyles.header}>
          <h1 className={mainStyles.appTitle}>devfinder</h1>
          <button
            style={{
              color: theme === "dark" ? "#FFFFFF" : "#697C9A",
            }}
            className={mainStyles.themeBtn}
            onClick={toggleTheme}
          >
            {theme === "dark" ? "L I G H T" : "D A R K"}{" "}
            <img
              className={mainStyles.btnImg}
              src={theme === "dark" ? sun : moon}
            />
          </button>
        </div>
        <Search
          handleOnClick={handleOnClick}
          setGetTag={setGetTag}
          getTag={getTag}
          theme={theme}
          login={login}
        />
        <Card
          onBtn={onBtn}
          getTag={getTag}
          theme={theme}
          data={data}
          login={login}
        />
      </div>
    </div>
  );
}

export default Main;
