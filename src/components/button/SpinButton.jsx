import PropTypes from 'prop-types'

export const SpinButton = ({ handleSpin }) => {
    return (
        <button type="button" id="spin" onClick={() => { handleSpin() } }>
            ¡Girar!
        </button>
    )
}

SpinButton.propTypes = {
    handleSpin: PropTypes.func
}