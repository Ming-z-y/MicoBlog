import { Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Recommend from '../pages/Home/Recommend'
import Follow from '../pages/Home/Follow'
import Article from '../pages/Article'
import Column from '../pages/Column'
import Create from '../pages/Create'
import Home from '../pages/Home'


export default [
    {
        path: '/',
        element: <Login />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: 'article',
        element: <Article />
    },
    {
        path: 'column',
        element: <Column />
    },
    {
        path: 'create',
        element: <Create />
    },
    {
        path: 'home',
        element: <Home />,
        children: [
            {
                path: 'recommend',
                element: <Recommend />
            },
            {
                path: 'follow',
                element: <Follow />
            },
            {
                path: '',
                element: <Navigate to='follow' />
            }
        ]
    }
]
