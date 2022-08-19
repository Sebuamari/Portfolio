import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from './pages/Landing'
import About from './components/About'
import Navigations from './components/Navigations'
import Skills from './components/Skills'
import Projects from './pages/Projects'
import Project  from './components/Project'
import Contacts from './components/Contacts'
import Contactsmini from "./components/Contactsmini"

function App() {
  return (
    <div className="App">
      <Router>
        <Navigations/>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/Portfolio" element={<Landing/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Skills" element={<Skills/>}/>
          <Route exact path="/Projects" element={<Projects/>}/>
          <Route exact path="/Contacts" element={<Contacts/>}/>
          <Route exact path="/Project" element={<Project/>}/>
        </Routes>
        <Contactsmini/>
      </Router>
    </div>
  );
}

export default App;
