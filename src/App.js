
import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Introduction } from './components/intro/Introduction';

function App() {
  return (
    <div className="App">
    <Introduction/>
    <About/>
    <Contact/>
    </div>
  );
}

export default App;
