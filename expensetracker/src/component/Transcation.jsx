import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
export const Transcation = ({transactions}) => {
    const sign =( transactions.amount<0)?'-':'+';
    const {deleteTransaction} = useContext(GlobalContext)
  return (
    <li className={(transactions.amount <0)?'minus':'plus'}>
                {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span>
                <button className='delete-btn' onClick={()=>deleteTransaction(transactions.id)}>X</button>
    </li>
  )
}
