import React from "react";
import { TitleGame } from "./TitleGame";
import { ButtonsPlayer } from "./ButtonsPlayer";
import { SelectPlayerImage } from "./SelectPlayerImage";
import { SelectPcImage } from "./SelectPcImage";
import { ButtonCombat } from "./ButtonsPlayer";
import { ProgressContext } from "./ContextGlobal";

function App() {
  const{
    selectedPlayer
  } = React.useContext(ProgressContext)
  return (
    <React.Fragment>
      <TitleGame/>
      <ButtonsPlayer/>
      <div className="container-wrapper">
        <SelectPlayerImage/>
        {selectedPlayer && (
          <SelectPcImage/>
        )}
      </div>
      <ButtonCombat/>
    </React.Fragment>
  );
}

export { App };
