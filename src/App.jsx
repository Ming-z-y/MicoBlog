import React from 'react'
import { useRoutes } from 'react-router-dom'
import router from './router'
import './App.css'

export default function App() {
    const element = useRoutes(router)
    return (
        <div className='app'>
            {element}
        </div>
    )
}
