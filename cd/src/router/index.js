import About from "../components/pages/About";
import Login from "../components/pages/Login";
import PostIdPages from "../components/pages/PostIdPages";
import Posts from "../components/pages/Posts";

export const privateRoutes = [
    { path: '/about', element: <About/>, exact: true },
    { path: '/posts', element: <Posts/>, exact: true },
    { path: '/posts/:id', element: <PostIdPages/>, exact: true }
];

export const publicRoutes = [
{path: 'login', element: <Login/>, exact:true}
];