import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'
import { getUserInfo } from '../../api/request'
import AddColumn from './AddColumn'

export default function WritingCenter() {
    const [userInfo, setUserInfo] = useState()
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        const userId = Number(localStorage.getItem('userId'))
        getUserInfo(userId).then(res => {
            setUserInfo(res.data.data)
            console.log(res.data.data);
        })
    }, [])

    const createColumnHandler = () => {
        setIsShow(true)
    }
    const createHandler = (e) => {
        e.preventDefault();
        window.location.href = '/create'
    }
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
            {
                userInfo.columnList.map((item, index) => {
                    return (
                        <div className={style['columnInfo_box']} key={index}>
                            <div className="coverImg_div">
                                <img src={item.coverUrl} alt="coverImg" />
                            </div>
                            <Link to={`/column?id=${item.id}`} className={style['coverContent']}>
                                <div className={style['coverTitle_div']}>
                                    <div className={style['coverTitle']}>{item.title}</div>
                                    <div className={style['create_div']} onClick={createHandler}>+创作</div>
                                </div>
                                <div className={style['count_div']}>
                                    <div>作品：{item.articleCount}</div>
                                    <div style={{ marginRight: 20 + 'px' }}>阅读量：{item.readCount}</div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
            <div className={style['createNew']} onClick={createColumnHandler}>
                +创建一个新的专栏
            </div>
            {isShow && <AddColumn show={isShow} setShow={setIsShow} />}
        </div>
    ) : <></>
}
