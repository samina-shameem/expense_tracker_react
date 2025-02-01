import React, {Children, createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

//intial state

const intialState = {
    transactions:[],
};

//create context
export const GlobalContext = createContext(intialState);

//provider component

export const GlobalProvider = ({ Children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    //actions
    const deleteTransaction =(id) => {
        dispatch({ type: "DELETE_TRANSACTION", payload: id});
    };

    const addTransaction= (transaction) => {
        dispatch({ type:"ADD_TRANSACTION", payload: transaction });

    };

    return(
        <GlobalContext.Provider
        value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction,
        }}
        >
            {Children}
        </GlobalContext.Provider>
    );
};