import "./sass/App.scss";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Wave from "./components/Wave";

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Wave inverted={false} stamp={"vzla"} left rotation={"positive"} />
      <Process />
      <Wave inverted={true} stamp={"wave"} rotation={"negative"} />
      <Gallery />
      <About />
      <Wave inverted={true} stamp={"post"} left rotation={"negative"} />
      <Team />
      <Wave inverted={false} stamp={"mail"} rotation={"positive"} />
      <Contact />
    </div>
  );
}

export default App;
