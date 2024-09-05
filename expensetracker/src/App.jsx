import "./App.css";
import { AddTransaction } from "./component/AddTransaction";
import { Balance } from "./component/Balance";
import Header from "./component/Header";
import { IncomExpense } from "./component/IncomExpense";
import { TransactionList } from "./component/TransactionList";
import { GlobalProvider } from "./context/GlobalProvider";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
