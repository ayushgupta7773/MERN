import { useState } from "react";
export const ShowObjects = () => {
  const [person, setPerson] = useState({
    name: "Ayush",
    age: 19,
    hobby: "Binge Watching Friends",
  });
  const changeVasu = () => {
    setPerson({
      name: "Vasu",
      age: 20,
      hobby: "Playing Tennis",
    });
  };
  const changeAyush = () => {
    setPerson({
        name: "Ayush",
        age: 19,
        hobby: "Binge Watching Friends",
    });
  }; 
  
  return (
    <>
    <h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Hobby: {person.hobby}</p>

    </h2>
    <button onClick={changeVasu}>Show Vasu</button>
    <button style={{margin:'1rem 2rem'}} onClick={changeAyush}>Show Ayush</button>
    </>
  );
};