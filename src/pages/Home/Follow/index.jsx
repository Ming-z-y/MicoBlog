import React from 'react'
import style from './index.module.css'
import WritingCenter from '../../../components/WritingCenter'

export default function Follow() {
    return (
        <div className={style['follow_box']}>
            <div className={style['article_box']}>
                <div className={style['article_inner']}></div>
            </div>
            <WritingCenter />
        </div>
    )
}
