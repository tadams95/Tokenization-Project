import { EthProvider } from "./contexts/EthContext";
import Footer from "./components/Footer";
import Welcome from "./components/Intro/Welcome";
import InputWhitelist from "./components/Intro/InputWhitelist";

function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Welcome />
          <InputWhitelist />
          <Footer />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
