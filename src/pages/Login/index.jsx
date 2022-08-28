import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'
import { login } from '../../api/request'

export default function Login() {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const loginHandler = () => {
        const { current: { value: username } } = usernameRef
        const { current: { value: password } } = passwordRef
        if (username != '' && password != '') {
            login(username, password).then(res => {
                if (res.data.status_code === 0) {
                    localStorage.setItem('userId', res.data.data)
                    if (!alert(res.data.status_msg)) {
                        window.location.href = '/home'
                    }
                } else {
                    alert(res.data.status_msg)
                }
            })
        } else {
            alert('请填写完整信息！');
        }
    }
    return (
        <div className={style['login_box']}>
            <div className={style['phonePassword_box']}>
                用户名
                <div className={style['input_box']} >
                    <input type="text" ref={usernameRef} />
                </div>
            </div>
            <div className={style['phonePassword_box']} >
                密码
                <div className={style['input_box']} >
                    <input type="password" ref={passwordRef} />
                </div>
            </div>
            <div className={style['register_box']} onClick={() => loginHandler()}>登录</div>
            <div className={style['tips']}>
                <p style={{ color: '#8c8c8c' }}>您还没有账户?</p>
                <Link to='register' style={{ color: '#3d88f7' }}>注册</Link>
            </div>
        </div>
    )
}
