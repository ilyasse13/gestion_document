import { createBrowserRouter } from "react-router-dom";
import Start from "./views/Start";
import RHlogin from "./Forms/RHlogin";
import LoginLayout from "./Forms/LoginLayout";
import SupLogin from "./Forms/SupLogin";
import EmployeeLogin from "./Forms/EmployeeLogin";
import Error from "./views/Error";

const router= createBrowserRouter([

    {
        path:'/',
        element:<Start/>
    },
    {
        path:'/',
        element:<LoginLayout/>,
        children:[
            {
                path:'/RhLogin',
                element:<RHlogin/>
            },
            {
                path:'/SupLogin',
                element:<SupLogin/>
            },
            {
                path:'/EmployeeLogin',
                element:<EmployeeLogin/>
            }
        ]
    },
    {
        path:'*',
        element:<Error/>
    }
   
])
export default router