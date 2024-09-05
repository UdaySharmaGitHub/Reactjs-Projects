import { createContext } from "react";
// import AppReducer from "./AppReducer";
export const initialState = {
  transactions: [
    // // Make Transactions a Empty Array
    // { id: 1, text: "Flower", amount: -20 },
    // { id: 2, text: "Salary", amount: 300 },
    // { id: 3, text: "Book", amount: -40 },
    // { id: 4, text: "camera", amount: 300 },
  ],
};
export const GlobalContext = createContext(initialState);


// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   return (
//     <GlobalContext.Provider 
//     value={{ transactions: state.transactions }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };
