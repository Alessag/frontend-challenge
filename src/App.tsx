import { Header } from "./common/components/header/Header";
import { Footer } from "./common/components/footer/Footer";
import { Navbar } from "./common/components/navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App flex flex-col">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
