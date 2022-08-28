import React from 'react'
import style from './index.module.css'

export default function Register() {
    return (
        <div className={style['login_box']}>
            <div className={style['title']}>
                注册
            </div>
            <div className={style['phonePassword_box']}>
                昵称
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
            <div className={style['phonePassword_box']}>
                再次输入密码
                <div className={style['input_box']}>
                    <input type="text" />
                </div>
            </div>
            <div className={style['register_box']}>注册</div>
        </div>
    )
}
