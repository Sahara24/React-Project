import "./App.css";
import { List } from "./Components/List";
import RespAppBar from "./Components/RespAppBar";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SelectCard from "./Components/SelectCard";
import { InfoCard } from "./Components/InfoCard";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <RespAppBar />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:id' element={<SelectCard />} />
        <Route path='/signup' element={<SignUp />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>

    </>

  );
}

export default App;
