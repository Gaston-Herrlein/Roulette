import { ButtonsContainer } from "./components/Buttons";
import { RouletteSectionContainer } from "./components/RouletteServiceContainer";

import "./App.css"
import "./style/roulette-colors.css";
import "./style/roulette-rotations.css";
import "./style/roulette.css"; 

function App() {
  return (
    <>
      <main>
        <section class="roulette-container">
          <div id="selector"></div>
          <RouletteSectionContainer />
          <ButtonsContainer />
        </section>
      </main>
    </>
  );
}

export default App;
