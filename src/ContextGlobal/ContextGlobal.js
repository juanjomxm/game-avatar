import React from "react";

const ProgressContext = React.createContext()

function ProgressProvider({children}){
    const [selectedPlayer, setSelectedPlayer] = React.useState('') // Estado que maneja la seleccion del jugador y renderiza su resultado
    const [selectedPc, setSelectedPc] = React.useState('') // Estado que maneja la seleccion del pc

    const imgSelectPlayer = [ // Array de objetos que contiene el nombre y la imagen de el jugador seleccionado segun corresponda
        { name: 'AANG', src: 'https://th.bing.com/th/id/R.27f08d59924bf6c3ea96b4588f88b501?rik=xGqSki4BXxDEUA&riu=http%3a%2f%2fwww.absoluteanime.com%2favatar_the_last_airbender%2faang%5b2%5d.jpg&ehk=wxPH2H8TgNuwzWsYOVAHxgnuNzPVtWni4lWKMCxkYHk%3d&risl=&pid=ImgRaw&r=0', attacks: [
            { name: 'Ataque Normal', damage: aleatory(10, 20), image: 'https://th.bing.com/th/id/R.3152f7ebdc79a886e712480e7279c794?rik=UurzZJlyF0FiVw&pid=ImgRaw&r=0' },
            { name: 'Ataque Fuerte', damage: aleatory(10, 20), image: 'https://i.pinimg.com/originals/d9/62/dd/d962ddc296d3bf035c31075c80b35b5e.gif' },
            { name: 'Ataque Especial', damage: aleatory(10, 20), image: 'https://media0.giphy.com/media/GbUrFXadBryQ8/giphy.gif' },
        ]},

        { name: 'KATARA', src: 'https://th.bing.com/th/id/OIP.kicYAu2gbuXN7R6HkS1yHAHaGq?pid=ImgDet&rs=1', attacks: [
            { name: 'Ataque Normal', damage: aleatory(10, 20), image: 'https://media.tumblr.com/tumblr_llidwxJZGY1qjyxcwo1_400.gif' },
            { name: 'Ataque Fuerte', damage: aleatory(10, 20), image: 'https://th.bing.com/th/id/R.39b86e8b4aced0696ba0db9969591dc5?rik=EaVUfZV6wuRqQw&riu=http%3a%2f%2fpa1.narvii.com%2f6379%2fa89bb304f6cb7b06cfceb9e53fd7248804aa0222_00.gif&ehk=c5MjDX491MKNeBnLjsxWMBdGvHJWLDoHRzimE7s%2bCL4%3d&risl=&pid=ImgRaw&r=0' },
            { name: 'Ataque Especial', damage: aleatory(10, 20), image: 'https://media.giphy.com/media/hIWJ5h3IOmGty/giphy.gif' },
        ] },

        { name: 'TOPH', src: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2020/01/Toph-Avatar-Featured.jpg', attacks: [
            { name: 'Ataque Normal', damage: aleatory(10, 20), image: 'https://media1.tenor.com/images/551e3c371bff2daac1ffdad814b9a08f/tenor.gif?itemid=11087020' },
            { name: 'Ataque Fuerte', damage: aleatory(10, 20), image: 'https://media.tenor.com/9qPAxbUSQSQAAAAd/toph-avatar.gif' },
            { name: 'Ataque Especial', damage: aleatory(10, 20), image: 'https://i.pinimg.com/originals/dd/b2/82/ddb282fbf268d850984d655121f1d0ee.gif' },
        ] },

        { name: 'ZUKO', src: 'https://i.pinimg.com/736x/ab/45/53/ab4553ea89f942cd93d402212d6502da--zuko-avatar.jpg', attacks: [
            { name: 'Ataque Normal', damage: aleatory(10, 20), image: 'https://gifs.eco.br/wp-content/uploads/2022/07/gifs-do-zuko-de-avatar-7.gif' },
            { name: 'Ataque Fuerte', damage: aleatory(10, 20), image: 'https://pa1.narvii.com/7602/ad8ac3b4396351b5ac0dcc88e2a91ca2958f0502r1-480-359_hq.gif' },
            { name: 'Ataque Especial', damage: aleatory(10, 20), image: 'https://media.giphy.com/media/a3BSVQ00oj2kU/giphy.gif' },
        ] }
    ]

    const selectPlayer = (playerName) => { // Funcion que ejecuta el click de los botones para escoger jugador
        const player = imgSelectPlayer.find(item => item.name.includes(playerName));
        if (player) {
          setSelectedPlayer(player);
        }
    }

    function aleatory(min, max){ // Funcion aleatoria que sirve para que la maquina escoja su jugador
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return(
        <ProgressContext.Provider value={{
            selectedPlayer, 
            setSelectedPlayer,
            selectedPc, 
            setSelectedPc,
            imgSelectPlayer,
            selectPlayer,
            aleatory
        }}>
            {children}
        </ProgressContext.Provider>
    )
}

export { ProgressContext }
export { ProgressProvider }