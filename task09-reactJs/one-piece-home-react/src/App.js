import Menu from './Components/Menu/Menu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Characters from './Components/Menu/Routes/Characters';
import Islands from './Components/Menu/Routes/Islands';
import MistObject from './Components/Menu/Routes/MistObjects';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Menu/>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/islands" element={<Islands/>}/>
          <Route path="/mistObject" element={<MistObject/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>  
  );
}

export default App;
