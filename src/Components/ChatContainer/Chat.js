import React from 'react';
import ChatHeader from './ChatComponents/ChatHeader';
import Messages from './ChatComponents/Messages';
import InputMessage from './ChatComponents/InputMessage';
import { Divider } from 'antd';


const Chat = () => {
  return (
    <div className='Chat'>
      <ChatHeader/>
      <Messages />
      <Divider className='InputDivider' />
      <InputMessage />
    </div>
  )
}

export default Chat
