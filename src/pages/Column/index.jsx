import React from 'react'
import 'antd/dist/antd.css';
import { Descriptions, List } from 'antd';
import { columnInfo } from '../../api/request';
import { follow } from '../../api/request';
import { Link } from 'react-router-dom';
import './index.css'
export default function Column() {
  const[newData,setNewData] = React.useState(null)
  const[isFollow,setIsFollow] = React.useState(true)
  React.useEffect(()=>{

      columnInfo(1).then((res)=>{
       const newData = res.data.data
       setNewData(newData)
      })
  },[])
  const changeFollow =()=>{
    setIsFollow(!isFollow)
    const type = isFollow ? 1 : 0
    //参数3个
  //  follow().then(()=>{

  //  })
  }
  console.log(isFollow);
  return newData ? (
    <div id='wrap'>
      <div id="top">
        <div id="top-left">
          <div id="img-box">
            <img src={newData.column.coverUrl} alt="" />
          </div>
        </div>
        <div id="top-right">
          <Descriptions title={newData.column.title} style={{ fontSize: '20px' }}>
            <Descriptions.Item>
            {newData.column.introduction}
            </Descriptions.Item>
          </Descriptions>
          <div id="msgbox">
            <div id="imgbox">
              <img src={newData.column.coverUrl} alt="" />
              <div id="name">ply</div>
            </div>
            <div id="state" onClick={changeFollow}>{isFollow ? '已关注' : '未关注'}</div>
          </div>
        </div>
      </div>
      <div id="body">
        <h3>目录</h3>
        <List
          itemLayout="horizontal"
          dataSource={newData.articleList}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<Link to={`/article/${item.id}`}>{item.articleTitle}</Link>}
                description={item.content}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  ) : <></>
}



