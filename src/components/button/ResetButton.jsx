export const ResetButton = ({handleReset}) => {
    return (
      <button type="button" id="reset" onClick={()=> {handleReset()}}>
        Resetear
      </button>
    );
  };
  