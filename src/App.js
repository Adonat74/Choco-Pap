import Header from "./Components/Header-Footer/Header/Header";
import Footer from "./Components/Header-Footer/Footer/Footer";
import Accueil from "./Components/Accueil/Accueil";
import { Routes, Route } from "react-router-dom";
import './App.css';;


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/accueil" element={<Accueil />} />

        
      </Routes>
        {/*<Accueil />*/}
      <div className="space"></div>
      <Footer />
    </div>
  );
}


