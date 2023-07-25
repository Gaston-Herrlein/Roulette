// const generationRotationContainerStyle = (list) => {
//   return (list.length - 4);
// };


export const RouletteSection = ({ section, rotation, list }) => {
  const name = "roulette-section-container" + (list.length - 4)
  return (
    <div className="roulette-section" style={rotation}>
      <div className={name}>
        <p>{section}</p>
      </div>
    </div>
  );
};


/*
  Transformacion de estilos que deberia hacer

  #roulette .roulette-section .roulette-section-container 
  {
    MozTransform: skewY(50deg) rotate(15deg);
  }
*/