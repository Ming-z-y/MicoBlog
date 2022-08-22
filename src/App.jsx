import React from 'react'
import { useRoutes } from 'react-router-dom'
import router from './router'

export default function App() {
    const element = useRoutes(router)
    return (
        <div>
            {element}
        </div>
    )
}
