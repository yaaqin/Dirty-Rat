import { createBrowserRouter } from "react-router-dom";
// import Home from "../page/home";
import Contact from "../page/contact";
import Home2 from "../page/home2";

export const AppRoutes = createBrowserRouter([
    // {
    //     path: '/home2',
    //     element: <Home/>
    // },
    {
        path: '/',
        element: <Home2/>
    },
    {
        path: '/contact',
        element: <Contact/>
    }
])
export default AppRoutes;