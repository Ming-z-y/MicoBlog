import React, { useState, useEffect } from 'react'
import style from './index.module.css'
import WritingCenter from '../../../components/WritingCenter'
import Article from '../../../components/ArticleItem'
import { recommendArticle } from '../../../api/request'

export default function Recommend() {
    const [reInfo, setReInfo] = useState()
    useEffect(() => {
        recommendArticle().then(res => {
            setReInfo(res.data.data)
            console.log('res',res);
        })
    }, [])
    return reInfo ? (
        <div className={style['follow_box']}>
            <div className={style['article_box']}>
                <Article info={reInfo} />
            </div>
            <WritingCenter />
        </div>
    ) : <></>
}
