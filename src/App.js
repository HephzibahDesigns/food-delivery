import "./App.css";
import { Navbar, Header, Login } from "./component/export.js";
import { Varieties, Checkout, Download, Footer } from "./container/export2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Login />
      <Varieties />
      <Checkout />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
