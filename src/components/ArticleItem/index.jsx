import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'

export default function Article(props) {
    const { info } = props
    return (
        <div className={style['article_box']}>
            {
                info.map((item, index) => {
                    return (
                        <div className={style['article_inner']} key={index} >
                            <Link to='/article'>
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
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
