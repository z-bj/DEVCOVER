![banner](https://github.com/z-bj/DEVCOVER/blob/main/DEVCOVER_BANNER.jpg)

# 
![figma](https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=Figma&logoColor=white)![TS](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)![cssModules](https://img.shields.io/badge/CSS%20Modules-000000.svg?style=for-the-badge&logo=CSS-Modules&logoColor=white)![jest](https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white)![vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white)![vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)

## Introducing Devcover

Github user search app that allows recruiter to search for Developer by their username.

## Desktop

![desktop](https://github.com/z-bj/DEVCOVER/blob/main/Devcover.gif)

## Mobile

![mobile](https://github.com/z-bj/DEVCOVER/blob/main/devcover-mobile.gif)

## Features

-   View the optimal layout for the app depending on device screen size
-   See hover states for all interactive elements on the page
-   Search for GitHub users by their username
-   See relevant user information based on their search
-   Switch between light and dark themes

## API

The app utilizes the Github REST API to retrieve user information. The API provides access to a wide range of Github resources, including user profiles, repositories, organizations, and more. For more information about the Github REST API and its endpoints, please see the [GitHub REST API documentation](https://docs.github.com/en/rest?apiVersion=2022-11-28).

Note that for unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address and not the user making requests.

## Main.tsx


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

## Color theme

![color](https://github.com/z-bj/DEVCOVER/blob/main/Color.jpg)



## Font

![type](https://github.com/z-bj/DEVCOVER/blob/main/type.jpg)


## Installation

To run this app on your local machine:

1.  Clone the repository using `git clone https://github.com/z-bj/DEVCOVER.git`.
2.  Navigate to the project directory using `cd Make-it-blink.
3.  Install the dependencies using `npm install`.
4.  Start the development server using `npm start`.

## Contributing

Contributions are welcome! To contribute to this project:

1.  Fork the repository.
2.  Make your changes.
3.  Submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
