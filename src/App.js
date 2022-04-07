import './App.css';
import Coin from './components/Coin';
import Counter from './components/Counter';
import { Theme } from './components/Theme';

function App() {
  return (
    <div className="App">
     <Counter />
      <Coin />
      <Theme />
    </div>
  );
}

export default App;
