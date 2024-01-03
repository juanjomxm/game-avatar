import React from "react";
import { ProgressContext } from "./ContextGlobal";

function ButtonsPlayer(){
    const{
        selectPlayer
    } = React.useContext(ProgressContext)
    return(
        <div className="buttons-select-player">
            <button onClick={() => selectPlayer('AANG')}>AANG</button>
            <button onClick={() => selectPlayer('KATARA')}>KATARA</button>
            <button onClick={() => selectPlayer('TOPH')}>TOPH</button>
            <button onClick={() => selectPlayer('ZUKO')}>ZUKO</button>
      </div>
    )
}

function ButtonCombat(){
    return(
        <div className="container-button-combat">
            <button onClick={()=>{
                console.log('navegacion a combate')
            }}>COMBATE</button>
        </div>
    )
}

export { ButtonsPlayer }
export { ButtonCombat }