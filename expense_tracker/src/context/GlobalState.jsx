import React,{Children, createContext,useReducer} from "react";
import AppReducer from './AppReducer';

//Initial state
const initialState={
    transactions:[
        {id:1, text:'Flower', amount:-20},
        {id:2, text:'Salary', amount:300},
        {id:3, text:'Book', amount:-29},
        {id:4, text:'Camera', amount:250},
    ]
}

//create context
export const GlobalContext=createContext(initialState);

//provider component
export const GlobalProvider=({Children}) => {
    const [state,dispatch]=useReducer(AppReducer, initialState);
 
    return(
        <GlobalContext.Provider value={{transactions: state.transactions}}>
            {Children}
        </GlobalContext.Provider>
    )
}
