import React, { useRef, useState, useEffect } from 'react'
import style from './index.module.css'
import { createColumn } from '../../../api/request'

export default function AddColumn({ show, setShow }) {
    const inputRef = useRef();
    const textAreaRef = useRef();
    const createColumnHandler = () => {
        const { current: { value: title } } = inputRef;
        const { current: { value: content } } = textAreaRef;
        const userId = localStorage.getItem('userId')
        if (title != '' && content != '') {
            createColumn(title, content, userId).then(res => {
                console.log(res);
                alert(res.data.status_msg)
                window.location.reload()
            })
        } else {
            alert('请输入完整后在创建')
        }
    }
    return (
        <div className={style['addColumn_div']} style={{ display: show ? 'block' : 'none' }}>
            <div className={style['title_content']}>
                <div>专栏标题</div>
                <div className={style['titleText_div']}>
                    <input type="text" ref={inputRef} />
                </div>
            </div>
            <div className={style['title_content']}>
                <div>简介</div>
                <div className={style['contentText_div']}>
                    <textarea cols="39" rows="7" ref={textAreaRef}></textarea>
                </div>
            </div>
            <div className={style['create_div']} onClick={createColumnHandler}>创建</div>
        </div>
    )
}
