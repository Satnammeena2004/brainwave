import "./App.css";

import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <ButtonGradient />
      <Collaboration />
    </>
  );
}

export default App;
