import './App.css';
import Header from "./Components/Header-Footer/Header/Header"
import Footer from "./Components/Header-Footer/Footer/Footer"
import Accueil from "./Components/Accueil/Accueil"

export default function App() {
  return (
    <div className="App">
      <Header />
      <Accueil />
      <div className="space"></div>
      <Footer />
    </div>
  );
}


