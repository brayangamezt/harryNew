import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Guias } from '../components/Guias';
import App from '../App';

const MainLazy = lazy( ()=> import('../pages/main/MainPage.jsx') );
const SinglePageLazy = lazy( ()=> import('../pages/singles/SinglePage.jsx') );
const TeamsPageLazy = lazy( ()=> import('../pages/teams/TeamsPage.jsx') );

export const router = createBrowserRouter([
    {
        path:'/harryNew',
        element:<App/>,
        children:[
            {
                path:'',
                element: <MainLazy/>
            },
            {
                path:'singles',
                element:<SinglePageLazy/>
            },
            {
                path:'teams',
                element:<TeamsPageLazy/>
            },
            {
                path:'guias',
                element:<Guias/>
            },
            {
                path:'*',
                element: <Navigate to = '/' />
            }
        ]
    },
    {
        path:'/',
        element:<Navigate to = '/harryNew' />
    },
    {
        path: '*',
        element: <Navigate to = '/harryNew' />
    }
    
])