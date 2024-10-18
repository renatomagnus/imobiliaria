import Home from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ListPage from "./routes/listPage";
import {Layout, RequireAuth} from "./layout/index.jsx"
import SinglePage from "./routes/singlePage"
import ProfilePage from "./routes/profilePage";
import Register from "./routes/register";
import Login from "./routes/login";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout /> ,
      children: [
        {
          path: "/",
          element:<Home />
        },
        {
          path: "/list",
          element:<ListPage />
        },
        {
          path: "/:id",
          element:<SinglePage />
        },
        {
          path: "/register",
          element:<Register />
        },
        {
          path: "/login",
          element:<Login />
        },
       
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children: [
        {
          path: "/profile",
          element:<ProfilePage />
        },
      ]
    },
    {
      path: "list",
      element: <ListPage />
    },
  ]);


  return (
  
    <RouterProvider router = { router }/>
  );
}

export default App;
