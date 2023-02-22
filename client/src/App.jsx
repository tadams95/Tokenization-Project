import { EthProvider } from "./contexts/EthContext";
import Footer from "./components/Footer";
import Welcome from "./components/Intro/Welcome";
import InputWhitelist from "./components/Intro/InputWhitelist";
import TokenSale from "./components/Demo/TokenSale";

function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Welcome />
          <InputWhitelist />
          <TokenSale />
          <Footer />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
