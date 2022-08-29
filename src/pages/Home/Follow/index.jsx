import React, { useState, useEffect } from 'react'
import style from './index.module.css'
import WritingCenter from '../../../components/WritingCenter'
import Article from '../../../components/ArticleItem'
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
                <Article info={foInfo} />
            </div>
            <WritingCenter />
        </div>
    ) : <></>
}
