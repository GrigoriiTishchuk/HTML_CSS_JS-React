import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./pages/Header"
import School from "./pages/School"
import Test from "./pages/Test"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/About" element={<About/> }/>
          <Route path="/School" element={<School/> }/>
          <Route path="/Test" element={<Test/> }/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
