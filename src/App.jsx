import "./App.css";

import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servises from "./components/Servises";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <ButtonGradient />
      <Collaboration />
      <Servises/>
    </>
  );
}

export default App;
