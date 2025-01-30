import React,{createContext,useReducer} from "react";

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
export const GlobaoContext=createContext(initialState);
