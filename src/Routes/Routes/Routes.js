import { createBrowserRouter } from "react-router-dom";
import CourseOutlet from "../../layouts/CourseOutlet";
import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import CourseDeails from "../../Pages/CourseDeails/CourseDeails/CourseDeails";
import Courses from "../../Pages/Courses/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
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
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
        ]
    },
    {
        path: '/',
        element: <CourseOutlet></CourseOutlet>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch("https://tech-learning-mate-server.vercel.app/courses")
            },
            {
                path: "/course/:id",
                element: <PrivateRoute><CourseDeails></CourseDeails></PrivateRoute>,
                loader: ({params}) => fetch(`https://tech-learning-mate-server.vercel.app/course/${params.id}`)
                
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
    
])