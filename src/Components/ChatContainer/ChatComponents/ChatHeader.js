import React from 'react'
import { useSelector } from 'react-redux';
import { Avatar, List } from 'antd';
import { UserOutlined, InboxOutlined, MessageOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Col, Row, Divider} from 'antd';
import './ChatHeader.scss';

const ChatHeader = () => {
  const state = useSelector((state) => state.ContantReducer.person);

  
  return (
    <div className='HeaderChat'>

      <Row>
        <Col className='ButtonColume' span={18} push={6}>
          <Button className='Replay' type="primary" shape="round" icon={<MessageOutlined />}>
            Replay
          </Button>

          <Button className='Archive' type="primary" shape="round" icon={<InboxOutlined />}>
            Archive
          </Button>
        </Col>

        <Col className='UserColume' span={6} pull={18}>
          {state !== null ? (
            <Row className='HeaderRow'>
              <Col className='avatar'>
                <Avatar src={state.avatar} />
              </Col>
              <Col className='listcol'>
                <List>
                  <h3>{state.first_name} {state.last_name}</h3>
                  <h5>{state.id}</h5>
                </List>
              </Col>
            </Row>
          ):(
            <Row className='HeaderRow'>
              <Col className='avatar'>
                <Avatar icon={<UserOutlined />} />
              </Col>
              <Col className='listcol'>
                <List>
                  <h3> Person Name </h3>
                  <h5> ID </h5>
                </List>
              </Col>
            </Row>
          )
        }
        </Col>
      </Row>

      <Divider className='Divider'></Divider>

    </div>
  )
}

export default ChatHeader
