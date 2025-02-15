import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home";
import Contact from "../page/contact";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/contact',
        element: <Contact/>
    }
])
export default AppRoutes;