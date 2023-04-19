import { Header } from "./common/components/header/Header";
import { Footer } from "./common/components/footer/Footer";
import { Navbar } from "./common/components/navbar/Navbar";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./App.css";
import { ProductCard } from "./common/components/productCard/ProductCard";

function App() {
  return (
    <div className="App flex flex-col">
      <Header />
      <Navbar />

      <div className="border-2 bg-slate-400 flex flex-col max-w-6xl mx-auto px-5">
        <div className="border-2">Filtros</div>
        <div className="border">
          <h1 className="border text-center">Lista</h1>
          <div>Barra de busqueda con dropdown</div>
          <div>Lista de productos</div>
          <ProductCard />
        </div>
      </div>

      <div className="border-2 bg-red-300 w-full max-w-6xl mx-auto">
        CTA Banner slider
      </div>

      <div className="border-2 bg-red-300 w-full max-w-6xl mx-auto">
        Best Seller Products
      </div>

      <Footer />
    </div>
  );
}

export default App;
