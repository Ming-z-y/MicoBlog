import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <NavLink to='follow'>关注</NavLink>
            <NavLink to='recommend'>推荐</NavLink>
            <Outlet />
        </>
    )
}
