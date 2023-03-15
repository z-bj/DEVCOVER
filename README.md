![banner]()

<!-- BADGEs -->

# DEVCOVER
![figma](https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=Figma&logoColor=white)![TS](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)![cssModules](https://img.shields.io/badge/CSS%20Modules-000000.svg?style=for-the-badge&logo=CSS-Modules&logoColor=white)![jest](https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white)![vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white)![vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)


DEVCOVER is a Github user search app that allows users to search for Github users by their username and see relevant user information based on their search. The app is built using React, Typescript, and the Github REST API.


## DEMO

![gif]()

## Features

-   View the optimal layout for the app depending on device screen size
-   See hover states for all interactive elements on the page
-   Search for GitHub users by their username
-   See relevant user information based on their search
-   Switch between light and dark themes

## API

The app utilizes the Github REST API to retrieve user information. The API provides access to a wide range of Github resources, including user profiles, repositories, organizations, and more. For more information about the Github REST API and its endpoints, please see the [GitHub REST API documentation](https://docs.github.com/en/rest?apiVersion=2022-11-28).

Note that for unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address and not the user making requests.


## Built with

The app is built with the following tools and technologies:

-   [Vite](https://vitejs.dev/): Next Generation Fronted Tooling
-   Typescript
-   React - JS library
-   [Ky](https://github.com/sindresorhus/ky): Delightful HTTP Requests
-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Grid
-   Mobile-first workflow

## System

### Color theme

![color](![image](https://user-images.githubusercontent.com/60877601/225261105-4a4eb208-c91e-42df-8db6-b49af07ac04a.png)
)

### Ty



## Core

``` javascript

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

```


## License
