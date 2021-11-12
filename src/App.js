import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Player from './components/Music/Music'
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div>
       <Player/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
    
  );
}

export default App;
