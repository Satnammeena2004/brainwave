import "./App.css";

import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Servises from "./components/Servises";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <ButtonGradient />
      <Collaboration />
      <Servises />

      <Pricing />
      <Roadmap />
      <Footer/>
    </>
  );
}

export default App;
