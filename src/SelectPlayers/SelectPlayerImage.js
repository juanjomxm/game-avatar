import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";


function SelectPlayerImage(){
  const { 
    selectedPlayer,
  } = React.useContext(ProgressContext)

  return (
    <div className="container-images-player">

      {selectedPlayer && (
        <div className="render-images-player">
          <p>{`${selectedPlayer.name}`}</p>
          <img
            src={selectedPlayer.src}
            alt={selectedPlayer.name}
            width={300}
            height={300}
          />
          <p>PLAYER</p>
        </div>
        
      )}
    </div>
  )
}

export {SelectPlayerImage}