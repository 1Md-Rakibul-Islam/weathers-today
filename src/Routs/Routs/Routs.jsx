import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import City from "../../Pages/City/City";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/city/:cityName",
        loader: async ({params}) => {
          return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&appid=298d65b8e5ff4847e140284022f83f76&units=metric`)
        },
        element: <City></City>,
      }
    ],
  },
]);