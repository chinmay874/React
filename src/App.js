import logo from './logo.svg';
import './App.css';
import { Button } from './button/button';
import { Benifit } from './benifits/benifit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Benifit />
        <Button />
      </header>
    </div>
  );
}

export default App;
