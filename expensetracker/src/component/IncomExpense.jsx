import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
export const IncomExpense = () => {
  const {transactions}  = useContext(GlobalContext);
  const income = transactions.map(transactions=>transactions.amount)
                .filter(item=>item>0)
                .reduce((acc,items)=> (acc+=items),0).toFixed(2);
  const expense = ((transactions.map(transactions=>transactions.amount)
                  .filter(item=> (item<0))
                  .reduce((acc,items)=> (acc+=items),0))*-1).toFixed(2);
  return (
    <div className="inc-expense">
      <div>
        <h4>income</h4>
        <h1 id="money-plus" className="money plus">+${income}</h1>
    </div>
    <div>
        <h4>expense</h4>
        <h1 id="money-minus" className="money minus">-${expense}</h1>
    </div>
    </div>
  )
}
