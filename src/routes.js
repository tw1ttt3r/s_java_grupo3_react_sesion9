import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Some from "./Some";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/some", element: <Some /> }
    ]
  }
])

export default routes