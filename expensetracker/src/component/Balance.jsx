import { GlobalContext } from "../context/GlobalState"
import { useContext } from "react";
export const Balance = () => {
  const {transactions}  = useContext(GlobalContext);
  
  const amounts = transactions.map(transactions=>transactions.amount);
  const total = amounts.reduce((acc,items)=> (acc+=items),0).toFixed(2);
  return (
    <>
    <h4>Your Balance</h4>
    <h1 id=''>{total}</h1>
    </>
  )
}
