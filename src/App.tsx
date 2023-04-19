import { Header } from "./common/components/header/Header";
import { Footer } from "./common/components/footer/Footer";
import { Navbar } from "./common/components/navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <div className="border-2 bg-slate-400 h-36 flex max-w-6xl mx-auto">
        <div>Filtros</div>
        <div>Lista de productos</div>
      </div>

      <div className="border-2 bg-red-300 h-24 max-w-6xl mx-auto">
        CTA Banner slider
      </div>

      <div className="border-2 bg-red-300 h-24 max-w-6xl mx-auto">
        Best Seller Products
      </div>

      <Footer />
    </div>
  );
}

export default App;
