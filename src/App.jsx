import "./sass/App.scss";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <About />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
