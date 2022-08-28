import React from 'react'
import 'antd/dist/antd.css';
import { Descriptions, List } from 'antd';
import { Link } from 'react-router-dom';
import './index.css'
export default function Column() {
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  return (
    <div id='wrap'>
      <div id="top">
        <div id="top-left">
          <div id="img-box">
          </div>
        </div>
        <div id="top-right">
          <Descriptions title="大学生就该这样" style={{ fontSize: '20px' }}>
            <Descriptions.Item>
              简介：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
            </Descriptions.Item>
          </Descriptions>
          <div id="msgbox">
            <div id="imgbox">
              <img src="../../assets/react.svg" alt="" />
              <div id="name">ply</div>
            </div>
            <div id="state">已关注</div>
          </div>
        </div>
      </div>
      <div id="body">
        <h3>目录</h3>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<Link to='/article'>{item.title}</Link>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}



