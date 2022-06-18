
import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Introduction } from './components/intro/Introduction';
import { Projects } from './components/projects/Projects';

function App() {
  return (
    <div className="App">
    <Introduction/>
    <About/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
