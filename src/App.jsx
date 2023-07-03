import { ButtonsContainer } from "./components/Buttons";
import { RouletteSectionContainer } from "./components/RouletteServiceContainer";

import "./App.css";
import "./style/roulette-colors.css";
import "./style/roulette-rotations.css";
import "./style/roulette.css";

function App() {
  const minSpins = 1;
  const maxSpins = 5;
  const minDegrees = 0;
  const maxDegrees = 360;

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleSpin = () => {
    const spins = getRandomNumber(minSpins, maxSpins);
    const degrees = getRandomNumber(minDegrees, maxDegrees);

    const fullSpins = (spins - 1) * 360;
    const spin = fullSpins + degrees;

    const animationTime = spins;

    const roulette = document.getElementById("roulette");
    roulette.style.transform = `rotate(${spin}deg)`;
    roulette.style.transitionDuration = `${animationTime}s`;
  };

  const handleReset = () => {
    const roulette = document.getElementById("roulette");
    roulette.style.transform = "rotate(0deg)";
    roulette.style.transitionDuration = "1.5s";
  };

  return (
    <>
      <main>
        <section className="roulette-container">
          <div id="selector"></div>
          <RouletteSectionContainer />
          <ButtonsContainer handleSpin={handleSpin} handleReset={handleReset} />
        </section>
      </main>
    </>
  );
}

export default App;
