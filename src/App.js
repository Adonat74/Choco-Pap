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
  const [cartProducts, setCartProducts] = React.useState(JSON.parse(localStorage.getItem("cart")) || []);


  function handleAddToCart (newItem, quantityAdded) {

    if (cartProducts.some(item => item.id === newItem.id)) {
      setCartProducts(prevState => prevState.map(item => item.id === newItem.id 
        ? {...item, quantity: item.quantity + quantityAdded}
        : item
      ));
    } else {
      setCartProducts(prevState => [...prevState, {...newItem, quantity: quantityAdded}]);
    }
  console.log(cartProducts);
  }



  function handleDeleteCartProduct (id) {
    setCartProducts(prevState => prevState.filter(product => {
      return product.id !== id
    }));
  }

  function handleDeleteAllCart () {
    setCartProducts([]);
  }

  function handleCartQuantityChange (event, id) {
    setCartProducts(prevState => prevState.map(product => {
      return product.id === id ? {...product, quantity: parseInt(event.target.value)} : product
    }));
  }

  localStorage.setItem("cart", JSON.stringify(cartProducts));
    





  function toggleMenu () {
    setMenuToggle(prevState => !prevState);
  }

  function handleCartToggle () {
    setCartToggle(prevState => !prevState);
  }

  function closeCart () {
    setCartToggle(false);
  }

  return (
    <div className="App">
      <Header cartToggle={cartToggle} 
              toggleMenu={toggleMenu} 
              handleCartToggle={handleCartToggle} 
              cartQuantity={cartProducts}/>

      {menuToggle && !cartToggle ? <MenuDeroulant handleCartToggle={handleCartToggle} cartQuantity={cartProducts}/> : null}

      <div className={cartToggle ? "spaceTop" : ""}></div>

      <Cart cartToggle={cartToggle}
            closeCart={closeCart}
            cartProducts={cartProducts}
            handleDeleteCartProduct={handleDeleteCartProduct}
            handleDeleteAllCart={handleDeleteAllCart}
            handleCartQuantityChange={handleCartQuantityChange}/>
            
            

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/boutique-bonbons-chocolats" element={<Boutique handleAddToCart={handleAddToCart} />} />
        <Route path="/page-chocolat/:productTitle" element={<PageProduit handleAddToCart={handleAddToCart} />} />
        
      </Routes>
      <div className="space"></div>
      <Footer />
    </div>
  );
}


