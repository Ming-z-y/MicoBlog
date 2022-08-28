import React from 'react'
import style from './index.module.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className={style['nav_box']}>
                <div className={style['navLink_box']}>
                    <NavLink to='follow'>关注</NavLink>
                    <NavLink to='recommend'>推荐</NavLink>
                </div>
            </div>
            <Outlet />
        </>
    )
}
