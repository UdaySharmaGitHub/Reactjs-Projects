import { useReducer } from "react";
import { initialState,GlobalContext } from "./GlobalState";
import AppReducer from "./AppReducer";
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    // Actions
    // Delete Transactions
    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        });
    }
    // Add Transaction
    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        });
    }
    return (
      <GlobalContext.Provider 
      value={{ 
        transactions: state.transactions,
        deleteTransaction ,
        addTransaction,
        }}>
        {children}
      </GlobalContext.Provider>
    );
  };