import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Navbar/>
     <Profile/>
     <Skills />
     <About />
     <Work />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
