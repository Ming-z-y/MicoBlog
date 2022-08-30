import React from 'react'
import { Link } from 'react-router-dom';
import { articleInfo } from '../../api/request';
import 'antd/dist/antd.css';
import './index.css'
export default function Article(props) {
    const[data,setData] = React.useState(null)
    React.useEffect(()=>{
            articleInfo(2).then((res)=>{
                const {data} = res.data
                setData(data)
            })
    },[])
    return data ?(
        <div id='wrap'>
            <div id="title"><Link to='/column'>{data.article.columnTitle}</Link></div>
            <div id="content">
                <h1>{data.article.articleTitle}</h1>
                <div className="msgbox">
                    <img src={data.user.headUrl} alt="userAvater" />
                    <div className="name">{data.user.username}</div>
                    <div className="time">{data.article.createDate}</div>
                </div>
               <div className="wordbox">
                 <p>
                    {/* <span> 首先学生自己要明白，上大学的意义，端正学习态度。其次，这个时候辅导员的重要性就更加明显了。</span>
                    <span>进入大学，肯定会鼓励学生积极参加社团活动丰富大学生活，但是也要告诉学生不要被五光十色的大学生活迷乱了眼。</span> */}
                    {data.article.content}
                </p>
               </div>
            </div>
        </div>
    ) : <></>
}
