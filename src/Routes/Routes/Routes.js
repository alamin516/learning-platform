import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Course from "../../Pages/Course/Course/Course";
import CourseDeails from "../../Pages/CourseDeails/CourseDeails/CourseDeails";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndCondition from "../../Pages/Others/TermsAndCondition/TermsAndCondition";
import Register from "../../Pages/Register/Register/Register";
import PrivateRoute from "../PrivateRouter/PrivateRouter";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },
    // {
    //     path: '/courses',
    //     element: <Main></Main>,
    //     loader: () => fetch('http://localhost:5000/courses'),
    //     children: [
    //         {
    //             path: "/course/:id",
    //             element: <CourseDeails></CourseDeails>,
    //             loader: ({ params }) => {
    //                 fetch(`http://localhost:5000/course/${params.id}`)
    //             }
    //         }
    //     ]
       

    // }
])