import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Resources } from "./components/Resources";
import { Que } from "./components/Que";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div className="App">
    <NavBar />
    <Banner />
    <Resources />
    <Que /> 
    <About />
    <Contact />
    <Footer />
   </div>
  );
}

export default App;
