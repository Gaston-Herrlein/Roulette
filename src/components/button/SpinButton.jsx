export const SpinButton = ({handleSpin}) =>{
    return (
        <button type="button" id="spin" onClick={()=> {handleSpin()}}>
         ¡Girar!
       </button>
    )
}