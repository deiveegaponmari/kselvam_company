import React,{createContext,useState,useContext} from 'react';

//create context
export const countContext=createContext();

//provider to component
export function CountContextProvider ({children}){
    const [count,setCount]=useState(0);
    return( <countContext.Provider value={{
        count,
        setCount
        }}>
        {children}
    </countContext.Provider>
    )
}

//custom hook
export function useCount(){
    return useContext(countContext)
}