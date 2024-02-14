import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreatePost from "../Pages/CreatePost";
import ErrorPPage from "../Pages/errorPPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post-job", element: <CreatePost /> },
    ],
  },
]);
export default router;
