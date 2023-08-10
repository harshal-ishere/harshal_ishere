import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/Projects';
import About from './components/about';
import Fotter from './components/fotter';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <Projects />
     <About />
     <Fotter />
    </div>
  );
}

export default App;
