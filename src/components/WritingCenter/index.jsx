import React from 'react'
import style from './index.module.css'

export default function WritingCenter() {
    return (
        <div className={style['writingCenter_box']}>
            <div className={style['title']}>
                <img src="" alt="" />
                创作中心
            </div>
            <div className={style['user_box']}>
                <img src="" alt="" />
                <div className={style['userName']}>
                    MING
                </div>
            </div>
            <div className={style['userInfo_box']}>
                <div className={style['userInfo_item']}>
                    <div>总关注量</div>
                    <div>200</div>
                </div>
                <div className={style['userInfo_item']}>
                    <div>总阅读量</div>
                    <div>2000</div>
                </div>
                <div className={style['userInfo_item']}>
                    <div>今日新增关注量</div>
                    <div>20</div>
                </div>
                <div className={style['userInfo_item']}>
                    <div>今日新增阅读量</div>
                    <div>20</div>
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
    )
}
