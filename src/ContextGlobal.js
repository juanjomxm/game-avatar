import React from "react";
const ProgressContext = React.createContext()

function ProgressProvider({children}){

    const imgSelectPlayer = [
        { name: 'AANG', src: 'https://th.bing.com/th/id/R.27f08d59924bf6c3ea96b4588f88b501?rik=xGqSki4BXxDEUA&riu=http%3a%2f%2fwww.absoluteanime.com%2favatar_the_last_airbender%2faang%5b2%5d.jpg&ehk=wxPH2H8TgNuwzWsYOVAHxgnuNzPVtWni4lWKMCxkYHk%3d&risl=&pid=ImgRaw&r=0' },
        { name: 'KATARA', src: 'https://th.bing.com/th/id/OIP.kicYAu2gbuXN7R6HkS1yHAHaGq?pid=ImgDet&rs=1' },
        { name: 'TOPH', src: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2020/01/Toph-Avatar-Featured.jpg' },
        { name: 'ZUKO', src: 'https://i.pinimg.com/736x/ab/45/53/ab4553ea89f942cd93d402212d6502da--zuko-avatar.jpg' }
    ]

    const [selectedPlayer, setSelectedPlayer] = React.useState('')

    const selectPlayer = (playerName) => {
        const player = imgSelectPlayer.find(item => item.name.includes(playerName));
        if (player) {
          setSelectedPlayer(player);
        }
    }

    function aleatory(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return(
        <ProgressContext.Provider value={{
            imgSelectPlayer,
            selectPlayer,
            selectedPlayer, 
            setSelectedPlayer,
            aleatory
        }}>
            {children}
        </ProgressContext.Provider>
    )
}

export { ProgressContext, ProgressProvider }