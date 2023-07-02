import { SpinButton } from "./button/SpinButton";
import { ResetButton } from "./button/ResetButton";

export const ButtonsContainer = ({handleSpin, handleReset}) => {
  return (
    <div className="button-container">
      <SpinButton handleSpin={handleSpin}/>
      <ResetButton handleReset={handleReset}/>
    </div>
  );
};
