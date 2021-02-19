import logo from './logo.svg';
import './App.css';

import
{
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Social from './components/Social';
import Home  from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import TestSpace from './contents/TestSpace';

function App() {
  return (
    <Router>
    	<div className="App">
    		<Navbar />
        <Route exact path="/">
          <Home />
          <Social />
      </Route>
      <Route exact path="/About">
          <Social />
          <About />
      </Route>
      <Route exact path="/Education">
          <Social />
          <Education />
      </Route>
      <Route exact path="/Skills">
          <Social />
          <Skills />
      </Route>  
      <Route exact path="/Contact">
          <Social />
          <Contact />
      </Route>    
      <Route exact path="/TestSpace">
          <Social />
          <TestSpace />
      </Route>  

    	</div>
    </Router>
  )
}

export default App;
