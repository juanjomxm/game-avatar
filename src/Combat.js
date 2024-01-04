import React from "react";

const Combat = () => {
    const [aangSalud, setAangSalud] = React.useState(50);
    const [zukoSalud, setZukoSalud] = React.useState(50);
    const [combateTerminado, setCombateTerminado] = React.useState(false);
  
    const ataqueAang = () => {
      if (!combateTerminado) {
        const damage = Math.floor(Math.random() * 10) + 1;
        setZukoSalud(zukoSalud - damage);
        if (zukoSalud - damage <= 0) {
          setCombateTerminado(true);
        }
      }
    };
  
    const ataqueZuko = () => {
      if (!combateTerminado) {
        const damage = Math.floor(Math.random() * 8) + 1;
        setAangSalud(aangSalud - damage);
        if (aangSalud - damage <= 0) {
          setCombateTerminado(true);
        }
      }
    };
  
    return (
      <div className="container-combat">
        {combateTerminado && <p>¡El combate ha terminado!</p>}
        <div>
          <h3>Aang</h3>
          <img 
          src={'https://th.bing.com/th/id/R.3152f7ebdc79a886e712480e7279c794?rik=UurzZJlyF0FiVw&pid=ImgRaw&r=0'} 
          alt="Aang"
          width={200}
          height={200}  
          />
          <p>Salud: {aangSalud}</p>
          <button onClick={ataqueAang} disabled={combateTerminado}>
            Atacar
          </button>
        </div>

        <div>
          <h3>Zuko</h3>
          <img 
          src={'https://th.bing.com/th/id/R.f9162560cb9c50219fca0937e2c35633?rik=%2bXoSJ3OboHT9KQ&pid=ImgRaw&r=0'} 
          alt="Zuko"
          width={200}
          height={200}  
          />
          <p>Salud: {zukoSalud}</p>
          <button onClick={ataqueZuko} disabled={combateTerminado}>
            Atacar
          </button>
        </div>
      </div>
    )
}

// Imagen aang: https://th.bing.com/th/id/R.3152f7ebdc79a886e712480e7279c794?rik=UurzZJlyF0FiVw&pid=ImgRaw&r=0

// Imagen zuko: https://th.bing.com/th/id/R.f9162560cb9c50219fca0937e2c35633?rik=%2bXoSJ3OboHT9KQ&pid=ImgRaw&r=0

export { Combat}