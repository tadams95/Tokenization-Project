import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Footer from "./components/Footer";

function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Intro />

          <Footer />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
