import { useEffect, useState } from "react";

export const MultipleReturnFetch = () => {
  const [isLoading,  setIsLoading] = useState(true);
  const [isError,setIsError]=useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/devilthekiller');
        const user = await response.json();

        if (!response.ok) {
          setIsError(true);
          throw new Error("Network response was not ok");
        }
 
        setUser(user); // Update the state with the fetched user data
        console.log(user); // Log the data on the initial render
      } catch (error) {
        setIsError(true)
        console.error("Error fetching data:", error);
      }
      setIsLoading(false)
    };

    console.log(user);  
    fetchData();
  }, []);

  if (isLoading){
    return (<h2>Loading...</h2>)
  }
  if(isError){
    return (<h2>An Error Occured</h2>);
  }

  return (
    <div>  
      {user && (
        <div key={user.id}>
          {/* You can render any component-specific JSX here if needed */}
          <img src={user.avatar_url} alt=""/>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      )}
    </div>
  );
};
