import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Books from "./components/Books";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import Music from "./components/Music";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AboutUs/>}/>
        <Route path="/Music" element={<Music/>}/>
        <Route path="/Books" element={<Books/>}/>
        <Route path="/Movies" element={<Movies/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
