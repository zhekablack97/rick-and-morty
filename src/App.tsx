import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import styled from "./App.module.scss";
import { getCharacter } from "./service";
import { characterType } from "./types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";

const App: React.FC = () => {
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
      {character?.name ? character.name : "загрузка"}
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
