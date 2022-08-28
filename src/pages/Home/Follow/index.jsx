import React, { useState, useEffect } from 'react'
import style from './index.module.css'
import WritingCenter from '../../../components/WritingCenter'
import { recommendArticle } from '../../../api/request'

export default function Follow() {
    const [foInfo, setFoInfo] = useState()
    useEffect(() => {
        recommendArticle().then(res => {
            console.log(res.data);
            setFoInfo(res.data.data)
        })
    }, [])
    return foInfo ? (
        <div className={style['follow_box']}>
            <div className={style['article_box']}>
                {
                    foInfo.map((item, index) => {
                        return (
                            <div className={style['article_inner']} key={index}>
                                <div className={style['itemTop']}>
                                    <div className={style['user_box']}>
                                        <img src={item.user.headUrl} alt="userAvatar" />
                                        {item.user.username}
                                    </div>
                                    <div className={style['itemColumnTitle']}>
                                        《{item.article.columnTitle}》
                                    </div>
                                    <div className={style['itemArticleTitle']}>
                                        ——{item.article.articleTitle}
                                    </div>
                                </div>
                                <div className={style['itemMain']}>
                                    {item.article.content}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <WritingCenter />
        </div>
    ) : <></>
}
