import { SpinButton } from "./button/SpinButton";
import { ResetButton } from "./button/ResetButton";
import PropTypes from 'prop-types'

export const ButtonsContainer = ({handleSpin, handleReset}) => {
  return (
    <div className="button-container">
      <SpinButton handleSpin={handleSpin}/>
      <ResetButton handleReset={handleReset}/>
    </div>
  );
};

ButtonsContainer.propTypes = {
  handleSpin: PropTypes.node,
  handleReset: PropTypes.node
}
