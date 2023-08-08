import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/Projects';
import Fotter from './components/fotter';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <Projects />
     <Fotter />
    </div>
  );
}

export default App;
