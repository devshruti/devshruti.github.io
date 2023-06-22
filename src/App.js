import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { AllRoutes } from './component/AllRoutes';
import { Contact } from './component/Contact';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Skill } from './routes/Skills';
import { Project } from './routes/Projects';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <br/>
     <br/>
     <Home/>
     <br/>
     <br/>
     <br/>
     <About/>
     <br/>
     <br/>
     <Skill/>
     <br/>
     <br/>
     <Project/>
     {/* <AllRoutes/> */}
     <br/>
     <br/>
     <div style={{margin:"auto 0"}}>
     <Contact/>
     </div>
    </div>
  );
}

export default App;
