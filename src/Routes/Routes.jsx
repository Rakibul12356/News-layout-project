import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import NewsPage from "../pages/Home/NewsPage";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('news.json')
            },
            {
              path:'/news/:id',
              element:<NewsPage></NewsPage>  
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
]);
export default routes;