import React, { useState } from 'react'
import {
    PictureOutlined,
    BoldOutlined,
    ItalicOutlined,
    SmileOutlined,
    UnderlineOutlined,
} from '@ant-design/icons';
import { Upload, Modal,Row,Col,Input,message } from 'antd';
import { createArticle } from '../../api/request';
import { useRef } from 'react';
import './index.css'
export default function Create() {
    const { TextArea } = Input;
    const emojiList=[
        {id:1,emoji:'😀'},
        {id:2,emoji:'😆'},
        {id:3,emoji:'😇'},
        {id:4,emoji:'😘'},
        {id:5,emoji:'😍'},
        {id:6,emoji:'😜'},
        {id:7,emoji:'🤗'},
        {id:8,emoji:'😪'},
        {id:9,emoji:'🤤'},
    ]
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isBold,setIsBold] = useState(false)
    const [isItalic,setIsItalic] = useState(false)
    const [isUnderline,setIsUnderline] = useState(false)
    const [textValue,setTextValue] = useState('')
    const title = useRef()
    const content = useRef()
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = (item) => {
        setTextValue(textValue + item)
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    function onChange(e){
        // if(e.nativeEvent.data!==null){
        //     setTextValue(textValue + e.nativeEvent.data)
        // }
        setTextValue(e.target.value)
    }
    const changeBold=()=>{
        const newState = !isBold
        setIsBold(newState)
    }
    const changeItalic=()=>{
        const newState = !isItalic
        setIsItalic(newState)
    }
    const changeUnderline=()=>{
        const newState = !isUnderline
        setIsUnderline(newState)
    }
    const sendMsg=()=>{
        const {current:{value:titleData}} = title
        const {current:{resizableTextArea:{props:{value:contentData}}}} = content
       createArticle(titleData,contentData,1,1).then((res)=>{
        message.success(res.data.status_msg)
        setTimeout(() => {
            window.location.href='/column'
        }, 1000);
       })
    }
    return (
        <div id='createBox'>
            <input type="text" id="createTitle" placeholder='标题' ref={title}/>
            <div id="createNav">
                {/* 地址还有问题 */}
                <Upload action="api/weiboke/static/Image/article" method='post' showUploadList={false} url>
                    <PictureOutlined className='createIcon' />
                </Upload>
                <SmileOutlined className='createIcon' onClick={showModal} />
                <Modal title="表情符号" visible={isModalVisible} onOk={()=>{handleOk("")}} onCancel={handleCancel}>
                  <Row gutter={0}>
                    {
                        emojiList.map((item)=>{
                            return(
                                <Col span={2} onClick={()=>{
                                    handleOk(item.emoji);
                                }} key={item.id}>
                                    <div>{item.emoji}</div>
                                </Col>
                            )
                        })
                    }
                  </Row>
                </Modal>
                <BoldOutlined className='createIcon' onClick={changeBold}/>
                <ItalicOutlined className='createIcon' onClick={changeItalic}/>
                <UnderlineOutlined className='createIcon' onClick={changeUnderline}/>
            </div>
            <div id="createContent">
                {/* <textarea name="" id="content" cols="120" rows="15" value={textValue} onChange={onChange} ></textarea> */}
                <TextArea id='content' ref={content} value={textValue} onChange={onChange} allowClear='true' cols="120" rows="15" style={{fontWeight:(isBold?'bold':'normal'),fontStyle:(isItalic?'italic':'normal'),textDecoration:(isUnderline?'underline':'none')}} />
                <button id='createBtn' onClick={sendMsg}>发布</button>
            </div>
        </div>
    )
}











