import React from "react";
import Home from "./components/Home";
import Landing from "./components/Landing";
import About from "./components/About";
import Landing22 from "./components/Landing22";
import About22 from "./components/About22";
import { AppContextProvider } from "./contexts/App";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/oad2021",
      element: <Landing />,
    },
    {
      path: "/oad2021/about-oad21",
      element: <About />,
    },
    {
      path: "/oad2022",
      element: <Landing22 />,
    }, 
    {
      path: "/oad2022/about-oad22",
      element: <About22 />,
    },
          <ScrollRestoration />
   
  ]);



  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;
