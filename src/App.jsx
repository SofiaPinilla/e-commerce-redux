import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
