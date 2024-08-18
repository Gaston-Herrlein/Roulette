import PropTypes from 'prop-types'

export const ResetButton = ({handleReset}) => {
    return (
      <button type="button" id="reset" onClick={()=> {handleReset()}}>
        Resetear
      </button>
    );
};

ResetButton.propTypes = {
  handleReset: PropTypes.func
}