import { useState } from "react";

export const ShortCircuitOverview = () => {
  const [text, setText] = useState("");

  const [name, setName] = useState("Ayush");

  

  return (
    <>
      <h2>Short Ciruit Overview</h2>
      <h2>{text || "no text||"}</h2>
      <h2>{text && "no text&&"}</h2>
      <h2>{name || "no name||"}</h2>
      <h2>{name && "no name&&"}</h2>




    </>
  );
};
