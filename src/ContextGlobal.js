import React from "react";
const ProgressContext = React.createContext()

function ProgressProvider({children}){
    return(
        <ProgressContext.Provider value={{
            
        }}>
            {children}
        </ProgressContext.Provider>
    )
}

export { ProgressContext, ProgressProvider }