import { useState } from "react";

export const IncreaseDelay = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    console.log("Click");
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <div>
        <h1>Hii!!!</h1>
        <h1>{value}</h1>

        <button onClick={handleClick}>Increase</button>
      </div>
    </> 
  );
};
