import React, { useRef } from 'react'
import style from './index.module.css'
import { register } from '../../api/request'

export default function Register() {
    const userRef = useRef();
    const passwordRef = useRef();
    const passwordAgainRef = useRef()

    const registerHandler = () => {
        const { current: { value: username } } = userRef
        const { current: { value: password } } = passwordRef
        const { current: { value: passwordAgain } } = passwordAgainRef
        if (username != '' && password != '' && passwordAgain === password) {
            register(username, password).then(res => {
                if (!alert(res.data.status_msg)) {
                    window.location.href = 'login'
                }
            })
        } else {
            alert('填写不完整或者两次密码不相同！');
        }
    }
    return (
        <div className={style['login_box']}>
            <div className={style['title']}>
                注册
            </div>
            <div className={style['phonePassword_box']}>
                昵称
                <div className={style['input_box']}>
                    <input type="text" ref={userRef} />
                </div>
            </div>
            <div className={style['phonePassword_box']}>
                密码
                <div className={style['input_box']}>
                    <input type="password" ref={passwordRef} />
                </div>
            </div>
            <div className={style['phonePassword_box']}>
                再次输入密码
                <div className={style['input_box']}>
                    <input type="password" ref={passwordAgainRef} />
                </div>
            </div>
            <div className={style['register_box']} onClick={registerHandler}>注册</div>
        </div>
    )
}
