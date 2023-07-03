import { useState, useEffect } from "react";

import { RouletteSection } from "./roulette/RouletteSection";

import axios from "axios";

const url = "3001/projects";

const projectList = (url) => {
  return axios.get("http://localhost:" + url);
};

const radioCalc = (list) =>{
  let radio = Math.round(360/list.length)
  return (radio*list.length <= 360) ? radio : (radio-1)
}

const generationRotationStyle = (radio, index) => {
  
  let rotation = radio*index
  let deformation = -(90-radio)
  let rotatinStyle = 'rotate(' + rotation + 'deg) skewY(' + deformation + 'deg)'
  return {
    "transform": rotatinStyle,
    "WebkitTransform": rotatinStyle,
    "MozTransform": rotatinStyle,
    "msTransform": rotatinStyle, 
    "OTransform": rotatinStyle
  }
}


export const RouletteSectionContainer = () => {
  const [list, setList] = useState([]);
  const [radio, setRadio] = useState (360);

  useEffect(() => {
    projectList(url)
      .then((response) => {
        setList(response.data)
        setRadio (radioCalc(response.data))  
      })
      .catch((error) => console.error());
  }, []);

  return (
    <div id="roulette">
      {list.map ((project, index) => {
        return (
         <RouletteSection key={index} section={project} rotation={generationRotationStyle(radio, index)}/>
        )
      })}
      {/* <RouletteSection section={"Borrar tu codigo"} />
      <RouletteSection section={"Apagar la computadora"} />
      <RouletteSection section={"Formatear computadora"} />
      <RouletteSection section={"Compra helado"} />
      <RouletteSection section={"Toma descanso"} />
      <RouletteSection section={"Huevo en tu cabeza"} />
      <RouletteSection section={"Tira la laptop"} />
      <RouletteSection section={"$1,00USD a tus subs"} />
      <RouletteSection section={"Comer snack"} />
      <RouletteSection section={"Jugar un rato"} />
      <RouletteSection section={"!Terminar tu tarea¡"} />
      <RouletteSection section={"Vuelve a grabar"} /> */}
    </div>
  );
};
