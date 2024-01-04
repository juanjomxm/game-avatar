import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

const Combat = () => {
    const{
        aleatory,
        selectedPlayer,
        selectedPc
    } = React.useContext(ProgressContext)

    const [healtPlayer, setHealtPlayer] = React.useState(100) // Estado para salud jugador
    const [healtPc, setHealtPc] = React.useState(100) // Estado para salud pc
    const [combatFinish, setCombatFinish] = React.useState(false)
    const [youTurn, setyouTurn] = React.useState(true)
  
    const atackPLayer = [
        { name: 'Ataque Normal', damage: aleatory(10,20), image: 'ataque_normal.png' },
        { name: 'Ataque Fuerte', damage: aleatory(10,20), image: 'ataque_fuerte.png' },
        { name: 'Ataque Especial', damage: aleatory(10,20), image: 'ataque_especial.png' },
      ];
    
      const atackPc = [
        { damage: aleatory(10,20), image: 'llamarada.png' },
        { damage: aleatory(10,20), image: 'corte_fuego.png' },
        { damage: aleatory(10,20), image: 'asalto_lava.png' },
      ];
    
      const youAtack = (damage) => {
        if (!combatFinish && youTurn) {
          const nuevaSaludZuko = Math.max(healtPc - damage, 0)
          setHealtPc(nuevaSaludZuko)
          if (nuevaSaludZuko === 0) {
            setCombatFinish(true)
          } else {
            setyouTurn(false)
          }
        }
      };
    
      const pcAtack = () => {
        if (!combatFinish && !youTurn) {
          const ataqueAleatorio = atackPc[Math.floor(Math.random() * atackPc.length)]
          const nuevaSaludAang = Math.max(healtPlayer - ataqueAleatorio.damage, 0)
          setHealtPlayer(nuevaSaludAang)
          if (nuevaSaludAang === 0) {
            setCombatFinish(true)
          } else {
            setyouTurn(true)
          }
        }
      };
    
      React.useEffect(() => {
        if (!combatFinish && !youTurn) {
          // Si el turno es de la máquina y el combate no ha terminado, la máquina realiza un ataque después de un breve retraso
          const timeoutId = setTimeout(() => {
            pcAtack()
          }, 1000)
          return () => clearTimeout(timeoutId)
        }
      }, [youTurn, combatFinish])
    
      const reiniciarCombate = () => {
        setHealtPlayer(100)
        setHealtPc(100)
        setCombatFinish(false)
        setyouTurn(true)
      };
    
    return (
        <div className="container-combat">
   
            <div className="atack-player">
              <h3>{selectedPlayer.name}</h3>
              <img 
              src={selectedPlayer.src} 
              alt="Aang" 
              width={400}
              height={300}
              />
              <div className="health-bar" style={{ width: `${healtPlayer}%` }} />

              <div className="ataques-container">
                {atackPLayer.map((ataque, index) => (
                  <button key={index} onClick={() => youAtack(ataque.damage)} disabled={combatFinish || !youTurn}>
                    {ataque.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="atack-pc">
              <h3>{selectedPc.name}</h3>
              <img 
              src={selectedPc.src} 
              alt="Zuko" 
              width={400}
              height={300}
              />
              <div className="health-bar" style={{ width: `${healtPc}%` }} />
            </div>
          
            {combatFinish && (
            <div>
              <h3>¡Combate Terminado!</h3>
              {healtPlayer === 0 ? <p>{selectedPc.name}</p> : <p>{selectedPlayer.name}</p>}
              <button onClick={reiniciarCombate}>Reiniciar Combate</button>
            </div>
            )}

        </div>
    )
}

export { Combat}
// image Aang: https://th.bing.com/th/id/R.3152f7ebdc79a886e712480e7279c794?rik=UurzZJlyF0FiVw&pid=ImgRaw&r=0
// image Zuko: https://th.bing.com/th/id/R.f9162560cb9c50219fca0937e2c35633?rik=%2bXoSJ3OboHT9KQ&pid=ImgRaw&r=0