import { useState, useEffect } from "react";

import { RouletteSection } from "./roulette/RouletteSection";

import axios from "axios";

const url = "3001/projects";

const projectList = (url) => {
  return axios.get("http://localhost:" + url);
};

const radioCalc = (list) => {
  let radio = Math.round(360 / list.length);
  return radio * list.length <= 360 ? radio : radio - 1;
};

const generationRotationStyle = (radio, index) => {
  let rotation = radio * index;
  let deformation = -(90 - radio);
  let rotatinStyle =
    "rotate(" + rotation + "deg) skewY(" + deformation + "deg)";
  return {
    transform: rotatinStyle,
    WebkitTransform: rotatinStyle,
    MozTransform: rotatinStyle,
    msTransform: rotatinStyle,
    OTransform: rotatinStyle,
  };
};

export const RouletteSectionContainer = () => {
  const [list, setList] = useState([]);
  const [radio, setRadio] = useState(360);

  useEffect(() => {
    projectList(url)
      .then((response) => {
        setList(response.data);
        setRadio(radioCalc(response.data));
      })
      .catch((error) => console.error());
  }, []);

  return (
    <div id="roulette">
      {list.map((project, index) => {
        return (
          <RouletteSection
            key={index}
            section={project}
            rotation={generationRotationStyle(radio, index)}
            list={list}
          />
        );
      })}
    </div>
  );
};
