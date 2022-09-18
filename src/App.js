import "./App.css";
import { List } from "./Components/List";
import RespAppBar from "./Components/RespAppBar";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SelectCard from "./Components/SelectCard";
import Cart from "./Components/Cart";
import { PageNotFound } from "./Components/PageNotFound";
import { Home } from "./Components/Home";

function App() {
  return (
    <>
      <RespAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<List />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<SelectCard />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </>

  );
}

export default App;
