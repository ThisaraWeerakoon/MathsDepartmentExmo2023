import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aparatus from "./pages/Aparatus";
import Simulation from "./pages/Simulation";
import Competition from "./pages/Competition";
import Robotics from "./pages/Robotics";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/aparatus" element = {<Aparatus/>} />
          <Route path="/simulation" element = {<Simulation/>} />
          <Route path="/competition" element = {<Competition/>} />
          <Route path="/robotics" element = {<Robotics/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
