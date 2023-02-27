import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./screen/About";
import Home from "./screen/Home";
import NotFound from "./screen/NotFound";
import Followers from "./screen/users/Followers";
import User from "./screen/users/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "users/:userId",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers />,
                    },
                ],
            },
        ],
        errorElement: <NotFound />,
    },
]);

export default router;
