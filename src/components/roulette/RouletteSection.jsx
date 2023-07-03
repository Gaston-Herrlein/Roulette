export const RouletteSection = ({section, rotation}) => {
    return (
      <div className="roulette-section" style={rotation}>
        <div className="roulette-section-container">
          <p>{section}</p>
        </div>
      </div>
    );
  };