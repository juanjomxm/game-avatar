import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { TitleGame } from "../TitleGame/TitleGame";
import { TitleCombat  } from "../TitleGame/TitleGame";
import { ButtonsPlayer } from "../SelectPlayers/ButtonsPlayer";
import { SelectPlayerImage } from "../SelectPlayers/SelectPlayerImage";
import { SelectPcImage } from "../SelectPlayers/SelectPcImage";
import { ButtonCombat } from "../SelectPlayers/ButtonsPlayer";
import { Combat } from "../Combat/Combat";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

function App() {
  const{
    selectedPlayer
  } = React.useContext(ProgressContext)
  return (
    <React.Fragment>
      <HashRouter>
      <Routes>

        <Route path="/" element={
          <React.Fragment>
            <TitleGame/>
            <ButtonsPlayer/>
            <div className="container-wrapper">
              <SelectPlayerImage/>
              {selectedPlayer && (
                <SelectPcImage/>
              )}
            </div>
            {selectedPlayer && (
                <ButtonCombat/>
              )}
          </React.Fragment>
        } 
        />
          
        <Route path="/combat/" element={
            <React.Fragment>
              <TitleCombat/>
              <Combat/>
            </React.Fragment>
        }
        />
      </Routes>
      </HashRouter>
    </React.Fragment>
  );
}

export { App };
