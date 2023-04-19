import { Header } from "./common/components/header/Header";
import { Footer } from "./common/components/footer/Footer";
import { Navbar } from "./common/components/navbar/Navbar";
import { ProductCard } from "./common/components/productCard/ProductCard";

import "./App.css";

function App() {
  return (
    <div className="App flex flex-col">
      <Header />
      <Navbar />

      <div className="flex flex-col lg:flex-row  mx-auto px-5">
        <div>Filtros</div>
        <div>
          <div>Barra de búsqueda con dropdown</div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[51px] ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
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
