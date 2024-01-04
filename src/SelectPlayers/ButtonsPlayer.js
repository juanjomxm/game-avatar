import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { useNavigate } from "react-router-dom";

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
    const buttonCombat = useNavigate()
    return(
        <div className="container-button-combat">
            <button onClick={()=>{
                buttonCombat('/combat/')
                console.log('navegacion a combate')
            }}>COMBATE</button>
        </div>
    )
}

export { ButtonsPlayer }
export { ButtonCombat }