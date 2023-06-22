import Header from "./Components/Header-Footer/Header/Header";
import MenuDeroulant from "./Components/Header-Footer/Header/MenuDeroulant";
import Footer from "./Components/Header-Footer/Footer/Footer";
import Accueil from "./Components/Accueil/Accueil";
import Boutique from "./Components/Boutique/Boutique";
import PageProduit from "./Components/PageProduit/PageProduit"
import Cart from "./Components/Cart/Cart"
import React from "react"
import { Routes, Route } from "react-router-dom";
import './App.css';


export default function App() {

  const [menuToggle, setMenuToggle] = React.useState(false);
  const [cartToggle, setCartToggle] = React.useState(false);
  const [cartQuantity, setCartQuantity] = React.useState(0);

  function toggleMenu () {
    setMenuToggle(prevState => !prevState);
  }

  function handleCartToggle () {
    setCartToggle(prevSTate => !prevSTate);
  }

  function closeCart () {
    setCartToggle(false);
  }

  return (
    <div className="App">
      <Header cartToggle={cartToggle} toggleMenu={toggleMenu} handleCartToggle={handleCartToggle} cartQuantity={cartQuantity}/>

      {menuToggle && !cartToggle ? <MenuDeroulant handleCartToggle={handleCartToggle} cartQuantity={cartQuantity}/> : null}

      <div className={cartToggle ? "spaceTop" : ""}></div>

      <Cart cartToggle={cartToggle}
            closeCart={closeCart}/>

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


