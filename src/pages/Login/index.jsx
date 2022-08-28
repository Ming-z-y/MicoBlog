import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'

export default function Login() {
    return (
        <div className={style['login_box']}>
            <div className={style['phonePassword_box']}>
                手机
                <div className={style['input_box']}>
                    <input type="text" />
                </div>
            </div>
            <div className={style['phonePassword_box']}>
                密码
                <div className={style['input_box']}>
                    <input type="text" />
                </div>
            </div>
            <div className={style['register_box']}>登录</div>
            <div className={style['tips']}>
                <p style={{ color: '#8c8c8c' }}>您还没有账户?</p>
                <Link to='register' style={{ color: '#3d88f7' }}>注册</Link>
            </div>
        </div>
    )
}
