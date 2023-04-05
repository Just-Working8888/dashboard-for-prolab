import { Route, Routes } from "react-router-dom";
import "./App.css";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

import Contracts from "./pages/Contracts";
import Document from "./pages/Document";
import Invoices from "./pages/Invoices";
import Transactions from "./pages/Transactions";
import Insured from "./pages/Insured";
import Card from "./pages/Card";

import WithdrawalMethods from "./pages/Setting/WithdrawalMethods";
import Setting from "./pages/Setting/Setting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/documents" element={<Document />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path='/transactions' element={<Transactions/>}/>
        <Route path='/Insurance' element={<Insured/>}/>
        <Route path='/cards' element={<Card/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/withdrawal' element={<WithdrawalMethods/>}/>
      </Route>
    </Routes>
  );
}

export default App;
