import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import styled from "./App.module.scss";
import { getCharacter } from "./service";
import { characterType } from "./types";

function App() {
  const [character, setCharacter] = useState<characterType>();

  useEffect(() => {
    getCharacter("1")
      .then((data) => {
        setCharacter(data);
      })
      .catch((err) => {
        console.log("ошибка ", err);
      });
  }, []);

  return (
    <div className={styled.App}>
      <header className={styled.AppHeader}>
        {character?.name ? character.name : "загрузка"}
        <img src={logo} className={styled.Applogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styled.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
