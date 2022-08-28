import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import { getUserInfo } from '../../api/request'

export default function WritingCenter() {
    const [userInfo, setUserInfo] = useState()
    useEffect(() => {
        const userId = Number(localStorage.getItem('userId'))
        getUserInfo(userId).then(res => {
            setUserInfo(res.data.data)
        })
    }, [])
    return userInfo ? (
        <div className={style['writingCenter_box']}>
            <div className={style['title']}>
                <img src="" alt="" />
                创作中心
            </div>
            <div className={style['user_box']}>
                <img src="" alt="" />
                <div className={style['userName']}>
                    {userInfo.user.username}
                </div>
            </div>
            <div className={style['userInfo_box']}>
                <div className={style['userInfo_item']}>
                    <div>总关注量</div>
                    <div>{userInfo.user.followCount}</div>
                </div>
                <div className={style['userInfo_item']}>
                    <div>总阅读量</div>
                    <div>{userInfo.user.readCount}</div>
                </div>
                <div className={style['userInfo_item']}>
                    <div>今日新增关注量</div>
                    <div>{userInfo.newFollow}</div>
                </div>
                <div className={style['userInfo_item']}>
                    <div>今日新增阅读量</div>
                    <div>{userInfo.newRead}</div>
                </div>
            </div>
            <div className={style['column_box']}>
                <img src="" alt="" />
                专栏
            </div>
            <div className={style['columnInfo_box']}></div>
            <div className={style['createNew']}>
                +创建一个新的专栏
            </div>
        </div>
    ) : <></>
}
