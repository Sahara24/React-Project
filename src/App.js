import "./App.css";
import { List } from "./Components/List";
import RespAppBar from "./Components/RespAppBar";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SelectCard from "./Components/SelectCard";
import Cart from "./Components/Cart";
import { PageNotFound } from "./Components/PageNotFound";

function App() {
  return (
    <>
      <RespAppBar />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:id' element={<SelectCard />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>

    </>

  );
}

export default App;
