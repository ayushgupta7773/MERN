import { useEffect, useState } from "react";

export const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("Yellooooo");
  };

  sayHello();

  useEffect(() => {
    // console.log({value});
    console.log("  Hello from useEffect");
  }, []);
  return (
    <div>
      <h1>Value : {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increase</button>
    </div>
  );
};
