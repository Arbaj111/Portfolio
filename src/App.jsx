import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from "./components/Home";
import { About } from "./components/About";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path:"About",
      element: <About/>
    },
  ]);

  return (
    <>
       <RouterProvider router={router} />,
    </>
  )
}

export default App
