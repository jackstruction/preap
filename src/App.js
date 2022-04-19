import './App.css';
import WalletBar from './components/WalletBar';
import Header from './components/Header';
import Mint from './Mint';
import Market from './Market';
import Admin from './Admin';
import Scan from './Scan';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WalletBar />
        <Header />
      </header>
      <main className="App-main">
      <Mint />
      <Market />
      <Scan />
      <Admin />
        </main>
    </div>
  );
}

export default App;
