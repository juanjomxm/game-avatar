import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { useNavigate } from "react-router-dom";

function Combat(){
  const {
    selectedPlayer,
    selectedPc,
  } = React.useContext(ProgressContext)

  const [healtPlayer, setHealtPlayer] = React.useState(100)
  const [healtPc, setHealtPc] = React.useState(100)
  const [combatFinish, setCombatFinish] = React.useState(false)
  const [youTurn, setyouTurn] = React.useState(true)
  const [currentPlayerAttackImage, setCurrentPlayerAttackImage] = React.useState('') // Estado para la imagen de ataque del jugador
  const [currentPcAttackImage, setCurrentPcAttackImage] = React.useState('') // Estado para la imagen de ataque de la maquina

  const youAtack = (damage, image) => {
    if (!combatFinish && youTurn) {
      const newHealthPc = Math.max(healtPc - damage, 0)
      setHealtPc(newHealthPc)
      setCurrentPlayerAttackImage(image)
      if (newHealthPc === 0) {
        setCombatFinish(true)
      } else {
        setyouTurn(false)
      }
    }
  }

  const pcAtack = () => {
    if (!combatFinish && !youTurn) {
      const selectedPcAttacks = selectedPc.attacks
      const atackRandom = selectedPcAttacks[Math.floor(Math.random() * selectedPcAttacks.length)]
      const newHealthPlayer = Math.max(healtPlayer - atackRandom.damage, 0)
      setHealtPlayer(newHealthPlayer)
      setCurrentPcAttackImage(atackRandom.image)
      if (newHealthPlayer === 0) {
        setCombatFinish(true)
      } else {
        setyouTurn(true)
      }
    }
  }

  React.useEffect(() => {
    if (!combatFinish && !youTurn) {
      const timeoutId = setTimeout(() => {
        pcAtack()
      }, 1000)
      return () => clearTimeout(timeoutId)
    }
  }, [youTurn, combatFinish])

  const rebootCombat = () => {
    setHealtPlayer(100)
    setHealtPc(100)
    setCombatFinish(false)
    setyouTurn(true)
    setCurrentPlayerAttackImage('')
    setCurrentPcAttackImage('')
  }

  const navigate = useNavigate()
  React.useEffect(() => {
    const handleKeyPress = (event) => {
      // Verificar si la tecla presionada es 'r' y la tecla Ctrl está presionada
      if (event.key === 'r' && event.ctrlKey) {
        navigate('/');
      }
    };

    // Agregar el evento keydown al objeto window
    window.addEventListener('keydown', handleKeyPress);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [])

  return (
    <div className="container-combat">

      <div className="section-title-combat">
        <h1>COMBATE</h1>
        <button
        onClick={rebootCombat}
        >Reiniciar combate</button>
      </div>
        
      <div className="atack-player">
        {/* Seccion de ataques del jugador */}
        <h3>{selectedPlayer?.name}</h3>
        <img 
        src={selectedPlayer.src} 
        width={100} 
        height={100} 
        />

        <div 
        className="health-bar" 
        style={{ width: `${healtPlayer}%` }} // De esta manera se puede hacer la barra de salud
        />

        {/* Imagenes de ataques del jugador */}
        <div className="container-images-atack">
          {currentPlayerAttackImage && (
            <img 
            src={currentPlayerAttackImage} 
            width={300} 
            height={200} 
            />
          )}
        </div>

        <div className="container-buttons-atacks">
          {selectedPlayer?.attacks && selectedPlayer.attacks.map((attack, index) => (
          <button
            key={index}
            onClick={() => youAtack(attack.damage, attack.image)}
            disabled={combatFinish || !youTurn}
          >
          {attack.name}
          </button>
          ))}
        </div>
      </div>


        {/* Seccion de ataques de la maquina */}
      <div className="atack-pc">
          <h3>{selectedPc?.name}</h3>
          <img 
          src={selectedPc.src} 
          width={100} 
          height={100} 
          />
          <div 
          className="health-bar" 
          style={{ width: `${healtPc}%` }} // De esta manera se puede hacer la barra de salud
          />

          {/* Imagenes de ataques pc */}
          <div className="container-images-atack">
            {currentPcAttackImage && (
              <img 
              src={currentPcAttackImage} 
              width={300} 
              height={200} 
              />
            )}
          </div>
      </div>

      {/* Seccion del mensaje ganador */}
      {/* Con el signo de interrogacion en js tambien se hace una condicion, seria lo mismo que utilizar if o else */}
      {combatFinish && (
        <div className="container-message-final">
          <h3>GAME OVER</h3>

          {healtPlayer === 0 ? (
            <p>{selectedPc.name}: PC ha ganado </p>
          ) : (
            <p>{selectedPlayer.name}: Ganaste</p>
          )}
        </div>
      )}
    </div>
  )
}

export { Combat }