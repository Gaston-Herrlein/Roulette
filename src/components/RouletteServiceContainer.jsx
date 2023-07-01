import { RouletteSection } from "./roulette/RouletteSection";

export const RouletteSectionContainer = () => {
  return (
    <div id="roulette">
      <RouletteSection section={"Borrar tu codigo"} />
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
      <RouletteSection section={"Vuelve a grabar"} />
    </div>
  );
};