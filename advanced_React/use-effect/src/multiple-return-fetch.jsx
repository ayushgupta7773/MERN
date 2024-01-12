// import { useState, useEffect } from "react";

// const url ="https://open.spotify.com/track/1NPEUdteVjbCK9Z9fljNaz?si=a29b78ae895c471a";
// const resp = fetch(url);
// useState;
// useEffect;

// export const MultipleReturnFetch = () => {
//   const jjson = resp.json();
//   console.log(url);
//   console.log(jjson);

// };


// ---------------------------------------------------------
// import { useEffect } from "react";

// export const MultipleReturnFetch = () => {
//   useEffect(() => {
    //     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.github.com/users/devilthekiller');

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const jsonData = await response.json();
//         console.log(jsonData);
//       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       }
//     };

//     fetchData();
//   }, []);

//   return (
    //     <div>
    //       {/* You can render any component-specific JSX here if needed */}
    //     </div>
//   );
// };

// ---------------------------------------------------------


import { useEffect } from 'react';

export const MultipleReturnFetch = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/spotifyData');
        const jsonData = await response.json();
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* You can render any component-specific JSX here if needed */}
    </div>
  );
};
