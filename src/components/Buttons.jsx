import { SpinButton } from "./button/SpinButton";
import { ResetButton } from "./button/ResetButton";

export const ButtonsContainer = () => {
  return (
    <div class="button-container">
      <SpinButton />
      <ResetButton />
    </div>
  );
};
