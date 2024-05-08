import Home from "./Pages/Home";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/about" element={<About />}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/projects" element={<Projects/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
