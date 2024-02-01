// import animals, {useanimals} from "./data";


//destructuring arrays
// const [cat,dog] = animals;
// console.log(useanimals(cat))
// const [animal , makesound] = useanimals(cat);
// console.log(animal)
// makesound()
// console.log(dog);
//destructuring objects
// const {name,sound:catSound} = cat;//in the concept of data.js if there is no name in the object we can add inthis like as well as =>name="fluppy"
// console.log(name);
// console.log(catSound);
// const {name,sound,foodRequirement:{food,water}} = cat;
// console.log(food);
























// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practise";

// const [model , coloursByPopularity ] = cars;
// console.log(model);
// console.log(coloursByPopularity);
const [honda,tesla] = cars;
 
const {speedStats: {topSpeed:hondaTopSpeed}} = honda;
const {speedStats: {topSpeed:teslaTopSpeed}} = tesla;
const {coloursByPopularity:[hondaTopColour]} = honda;
const {coloursByPopularity:[teslaTopColour]} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
