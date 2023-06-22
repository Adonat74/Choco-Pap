import Header from "./Components/Header-Footer/Header/Header";
import Footer from "./Components/Header-Footer/Footer/Footer";
import Accueil from "./Components/Accueil/Accueil";
import Boutique from "./Components/Boutique/Boutique";
import PageProduit from "./Components/PageProduit/PageProduit"
import { Routes, Route } from "react-router-dom";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/pageProduit/:productId" element={<PageProduit />} />
        
      </Routes>
      <div className="space"></div>
      <Footer />
    </div>
  );
}


