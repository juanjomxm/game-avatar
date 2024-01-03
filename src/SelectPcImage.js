import React from "react";
import { ProgressContext } from "./ContextGlobal";

function SelectPcImage(){
    const { 
        imgSelectPlayer, 
        aleatory 
    } = React.useContext(ProgressContext);
    const [selectedPc, setSelectedPc] = React.useState('');
  
    React.useEffect(() => {
      const selectPcPlayer = aleatory(1, 4);
  
      const updateSelectedPlayer = (name) => {
        const pc = imgSelectPlayer.find(item => item.name.includes(name));
        if (pc) {
          setSelectedPc(pc);
        }
      };
  
      switch (selectPcPlayer) {
        case 1:
          updateSelectedPlayer('AANG');
          break;
        case 2:
          updateSelectedPlayer('KATARA');
          break;
        case 3:
          updateSelectedPlayer('TOPH');
          break;
        case 4:
          updateSelectedPlayer('ZUKO');
          break;
        default:
          break;
      }
    }, [imgSelectPlayer, aleatory]);
  
    return (
      <div className="container-images-pc">

          <div className="render-images-pc">
            <p>{`${selectedPc.name}`}</p>
            <img
              src={selectedPc.src}
              alt={selectedPc.name}
              width={300}
              height={300}
              style={{ border: 'none' }}
            />
            <p>PC</p>
          </div>
      </div>
    )
}

export { SelectPcImage }