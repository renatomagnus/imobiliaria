import Home from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ListPage from "./routes/listPage";
import Layout from "./layout/index.jsx"
import SinglePage from "./routes/singlePage"
import ProfilePage from "./routes/profilePage";
import Register from "./routes/register";

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
          path: "/profile",
          element:<ProfilePage />
        },
        {
          path: "/register",
          element:<Register />
        }
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
