import { Routes, Route } from "react-router-dom";
import Header from "./view/components/Header";
import Home from "./view/screens/Home";
import HomeDetails from "./view/screens/HomeDetails";
import Login from "./view/screens/Login";
import Register from "./view/screens/Register";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:id" element={<HomeDetails/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>

    </div>
  );
};

export default App;