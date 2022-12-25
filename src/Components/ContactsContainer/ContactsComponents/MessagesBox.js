import React from 'react';
import './Inbox.scss';
import { Tabs } from 'antd';
import Inbox from './Inbox';
import Sent from './Sent';


const MessagesBox = () => {
  return (
      <Tabs 
        defaultActiveKey="1"
        items={
          [
            {
            label: 'Inbox',
            key: '1',
            children: <Inbox />,
            },
            {
            label: 'sent',
            key: '3',
            children: <Sent />,
            },
          ] 
        }/>
      )
    }

export default MessagesBox
