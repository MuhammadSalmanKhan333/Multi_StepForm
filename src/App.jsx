import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import QuoteProject from "./components/QuoteProject/QuoteProject";

function App() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center">
      <Header />
      <QuoteProject />
      <Footer />
    </div>
  );
}

export default App;
