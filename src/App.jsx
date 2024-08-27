import { Routes, Route } from "react-router-dom";
import Header from "./view/components/Header";
import Home from "./view/screens/Home";
import HomeDetails from "./view/screens/HomeDetails";
import Login from "./view/screens/Login";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:id" element={<HomeDetails/>} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
};

export default App;