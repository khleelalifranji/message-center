import React from 'react';
import CreateMessage from './CreateMessage';
import ArchiveBox from './ArchiveBox';
import Filter from './Filter';
import './ContactsHeader.scss';
import { Col, Row } from 'antd';


const ContactsHeader = () => {
  return (
    <div>
        <Row>
          <Col span={10} >
            <h2>Messages</h2>
          </Col>

          <Col span={14} >
            <div className='icons'>
              <Col span={8}> <CreateMessage /> </Col>
              <Col span={8}> <ArchiveBox /> </Col>
              <Col span={8}> <Filter /> </Col>
            </div>
          </Col>

          <Col span={24}>
            <h5>Show Messages</h5>
          </Col>
      </Row>
    </div>
  )
}

export default ContactsHeader
