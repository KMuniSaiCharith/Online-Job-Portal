import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import Salary from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";
import SignUp from "../components/SignUp";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,

      children: [
        {path: "/", element:<Home/>},
        {path: "post-job", element:<CreateJob/>},
        {path: "my-job", element:<MyJobs/>},
        {path: "salary", element:<Salary/>},
        {path: "edit-job/:id", element:<UpdateJob/>, loader: ({params}) => fetch(`http://54.211.233.3:3000/all-jobs/${params.id}`)},
        {path: "/login",element: <Login/>},
        {path: "/signup",element: <SignUp/>},
        {path: "/job/:id", element:<JobDetails/>}
      ],
    }
  ]);

export default router;