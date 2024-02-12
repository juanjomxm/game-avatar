import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

function SelectPcImage(){
    const {
      imgSelectPlayer, 
      aleatory,
      selectedPc, 
      setSelectedPc,
      selectedPlayer 
    } = React.useContext(ProgressContext)
  
    React.useEffect(() => {
      const selectPcPlayer = aleatory(1, 4)
  
        const updateSelectedPlayer = (name, attacks) => {
          const pc = imgSelectPlayer.find(item => item.name.includes(name))
          if (pc) {
            setSelectedPc({ ...pc, attacks })
          }
        } // Con esta funcion estoy manipulando el mismo array para ejegir jugador pero implementando un condicional switch para tambien poder acceder a los otros atributos en el combate
    
        switch (selectPcPlayer) {
          case 1:
            updateSelectedPlayer('AANG', [
              { name: 'Ataque Normal', damage: aleatory(10, 20), image: 'https://th.bing.com/th/id/R.3152f7ebdc79a886e712480e7279c794?rik=UurzZJlyF0FiVw&pid=ImgRaw&r=0' },
              { name: 'Ataque Fuerte', damage: aleatory(10, 20), image: 'https://i.pinimg.com/originals/d9/62/dd/d962ddc296d3bf035c31075c80b35b5e.gif' },
              { name: 'Ataque Especial', damage: aleatory(10, 20), image: 'https://media0.giphy.com/media/GbUrFXadBryQ8/giphy.gif' },
            ]);
            break;
  
          case 2:
            updateSelectedPlayer('KATARA', [
              { name: 'Ataque Normal', damage: aleatory(10, 20), image: 'https://media.tumblr.com/tumblr_llidwxJZGY1qjyxcwo1_400.gif' },
              { name: 'Ataque Fuerte', damage: aleatory(10, 20), image: 'https://th.bing.com/th/id/R.39b86e8b4aced0696ba0db9969591dc5?rik=EaVUfZV6wuRqQw&riu=http%3a%2f%2fpa1.narvii.com%2f6379%2fa89bb304f6cb7b06cfceb9e53fd7248804aa0222_00.gif&ehk=c5MjDX491MKNeBnLjsxWMBdGvHJWLDoHRzimE7s%2bCL4%3d&risl=&pid=ImgRaw&r=0' },
              { name: 'Ataque Especial', damage: aleatory(10, 20), image: 'https://media.giphy.com/media/hIWJ5h3IOmGty/giphy.gif' },
            ]);
            break;
  
          case 3:
            updateSelectedPlayer('TOPH', [
              { name: 'Ataque Normal', damage: aleatory(10, 20), image: 'https://media1.tenor.com/images/551e3c371bff2daac1ffdad814b9a08f/tenor.gif?itemid=11087020' },
              { name: 'Ataque Fuerte', damage: aleatory(10, 20), image: 'https://media.tenor.com/9qPAxbUSQSQAAAAd/toph-avatar.gif' },
              { name: 'Ataque Especial', damage: aleatory(10, 20), image: 'https://i.pinimg.com/originals/dd/b2/82/ddb282fbf268d850984d655121f1d0ee.gif' },
            ]);
            break;
          case 4:
            updateSelectedPlayer('ZUKO', [
              { name: 'Ataque Normal', damage: aleatory(10, 20), image: 'https://gifs.eco.br/wp-content/uploads/2022/07/gifs-do-zuko-de-avatar-7.gif' },
              { name: 'Ataque Fuerte', damage: aleatory(10, 20), image: 'https://pa1.narvii.com/7602/ad8ac3b4396351b5ac0dcc88e2a91ca2958f0502r1-480-359_hq.gif' },
              { name: 'Ataque Especial', damage: aleatory(10, 20), image: 'https://media.giphy.com/media/a3BSVQ00oj2kU/giphy.gif' },
            ]);
            break;
  
          default:
            break;
        }
    }, [selectedPlayer]) // Con esta actualizacion del useEfect lo que estoy haciendo es que cada que yo le de a un boton para escoger un jugador diferente la maquina tambien haga lo mismo y no se quede con el que ha seleccionado antes
  
    return (
      <div className="container-images-pc">

          <div className="render-images-pc">
            <p>{selectedPc.name}</p>
            <img
              src={selectedPc.src}
              alt={selectedPc.name}
              width={300}
              height={300}
              style={{ border: 'none' }}
            />
          </div>
      </div>
    )
}

export { SelectPcImage }