import { data } from "./data";
import { useState } from "react";

export const List = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id != id);
    setPeople(newPeople);
  };

  const clearItem = () => {
    setPeople([]);
  };
  const bringBack = () =>{
    setPeople(data);
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={()=> removeItem(id)}>Die</button>
          </div>
        );
      })}
      <button onClick={clearItem} style={{margin:"2rem"}}>Die ALL</button> 
      <button onClick={bringBack}>Bring em back to life</button>
    </div>
  );
};
