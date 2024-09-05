import { useState,useContext,useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount,setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext);
  
    const formSubmit = (e)=>{
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      setText('');
      setAmount(0);
      addTransaction(newTransaction);
    }

  return (
    <>
      <h3>Add Transaction</h3>
        <form onSubmit={formSubmit}>
          <div className="form-control">
            <label htmlFor="textInput">Text</label>
            <input
              type="text"
              name=""
              id="textInput"
              placeholder="Enter Text..."
              onChange={e=>setText(e.target.value)}
              value={text}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="amountInput">
            Amount <br />
            (negative - expense, positive - income)
            </label>
            <input
              type="number"
              name=""
              id="amountInput"
              placeholder="Enter Amount..."
              onChange={e=>setAmount(e.target.value)}
              required
              value={amount}
            />
          </div>
          <button className="btn">Add transaction</button>
        </form>
    </>
  );
};
