import React from "react";
import Person from "./Person";

function ListRendering() {
  // const names = ["rudransh", "batman", "superman"];
  const person = [
    {
      id: 1,
      name: "rudransh",
      skill: "react",
    },
    {
      id: 2,
      name: "pav-bhaaji",
      skill: "vue",
    },
    {
      id: 3,
      name: "chole-bhature",
      skill: "angular",
    },
  ];
  const personList = person.map((person) => <Person  person={person}/>);
  return (
    <div>
      {/* {names.map((namey) => (
        <h2>{namey}</h2>
      ))} */}
      {personList}
    </div>
  );
}

export default ListRendering;
