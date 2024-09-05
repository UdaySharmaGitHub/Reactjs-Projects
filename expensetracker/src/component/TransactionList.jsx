import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transcation } from './Transcation';
export const TransactionList = () => {
  const {transactions}  = useContext(GlobalContext);
  return (
    <div>
        <h3>History</h3>
        <ul  className="list">
          {transactions.map(transactions=>(
              <Transcation key={transactions.id} transactions={transactions}/>
          ))}
            
        </ul>
    </div>
  )
}
