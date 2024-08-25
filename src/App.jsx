import { Routes, Route } from "react-router-dom";
import Header from "./view/components/Header";
import Home from "./view/screens/Home";
import HomeDetails from "./view/screens/HomeDetails";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:id" element={<HomeDetails/>} />
      </Routes>

    </div>
  );
};

export default App;
