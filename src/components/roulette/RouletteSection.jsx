const stylesRotation = [
  {
    transform: "skewY(0deg) rotate (52deg)",
    WebkitTransform: "skewY(0deg) rotate (52deg)",
    MozTransform: "skewY(0deg) rotate (52deg)",
    msTransform: "skewY(0deg) rotate (52deg)",
    OTransform: "skewY(0deg) rotate (52deg)",
  },
  {
    transform: "skewY(15deg) rotate (40deg)",
    WebkitTransform: "skewY(15deg) rotate (40deg)",
    MozTransform: "skewY(15deg) rotate (40deg)",
    msTransform: "skewY(15deg) rotate (40deg)",
    OTransform: "skewY(15deg) rotate (40deg)",
  },
  {
    transform: "skewY(30deg) rotate (30deg)",
    WebkitTransform: "skewY(30deg) rotate (30deg)",
    MozTransform: "skewY(30deg) rotate (30deg)",
    msTransform: "skewY(30deg) rotate (30deg)",
    OTransform: "skewY(30deg) rotate (30deg)",
  },
  {
    transform: "transform: skewY(39deg) rotate (27deg)",
    WebkitTransform: "transform: skewY(39deg) rotate (27deg)",
    MozTransform: "transform: skewY(39deg) rotate (27deg)",
    msTransform: "transform: skewY(39deg) rotate (27deg)",
    OTransform: "transform: skewY(39deg) rotate (27deg)",
  },
  {
    transform: "transform: skewY(39deg) rotate (27deg)",
    WebkitTransform: "transform: skewY(39deg) rotate (27deg)",
    MozTransform: "transform: skewY(39deg) rotate (27deg)",
    msTransform: "transform: skewY(39deg) rotate (27deg)",
    OTransform: "transform: skewY(39deg) rotate (27deg)",
  },
  {
    transform: "skewY(50deg) rotate (22deg)",
    WebkitTransform: "skewY(50deg) rotate (22deg)",
    MozTransform: "skewY(50deg) rotate (22deg)",
    msTransform: "skewY(50deg) rotate (22deg)",
    OTransform: "skewY(50deg) rotate (22deg)",
  },
  {
    transform: "skewY(54deg) rotate (20deg)",
    WebkitTransform: "skewY(54deg) rotate (20deg)",
    MozTransform: "skewY(54deg) rotate (20deg)",
    msTransform: "skewY(54deg) rotate (20deg)",
    OTransform: "skewY(54deg) rotate (20deg)",
  },
  {
    transform: "skewY(50deg) rotate (17deg)",
    WebkitTransform: "skewY(50deg) rotate (17deg)",
    MozTransform: "skewY(50deg) rotate (17deg)",
    msTransform: "skewY(50deg) rotate (17deg)",
    OTransform: "skewY(50deg) rotate (17deg)",
  },
];

const generationRotationContainerStyle = (stylesRotation, list) => {
  return stylesRotation[list.length - 4];
};


export const RouletteSection = ({ section, rotation, list }) => {
  return (
    <div className="roulette-section" style={rotation}>
      <div className="roulette-section-container" style={generationRotationContainerStyle (stylesRotation, list)}>
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