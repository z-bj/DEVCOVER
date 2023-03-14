import React, { useCallback, useEffect, useState } from "react";

import ky from "ky"; // Import the ky HTTP library
import Input from "./Input";
import Card from "./Card";

const Main = () => {
  const [user, setUser] = useState("z-bj");
  const [choice, setChoice] = useState("z-bj");
  const [error, setError] = useState("");

  const changeUser = (newUser) => {
    setChoice(newUser);
  };

  // Define the fetchUserHandler function with useCallback to memoize the function
  const fetchUserHandler = useCallback(async () => {
    setError("");

    try {
    
      const response = await ky(`https://api.github.com/users/${choice}`);

      if (!response.ok) {
        throw new Error();
      }

      const newUser = await response.json();

      setUser(newUser);
    } catch (err) {
      console.log(err.message);
      setError("No results");
    }
  }, [choice]);

  // Call fetchUserHandler on component mount
  useEffect(() => {
    fetchUserHandler();
  }, [fetchUserHandler]);

  return (
    <main>
          <Input changeUser={changeUser} error={error} />
          <Card user={user} />
    </main>
  );
};

export default Main;
