import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Col, Row } from 'antd';
import { getMessage } from '../../../Redux/Actions/ContactAction';

const Message = () => {

  const MessageState = useSelector((state) => state.ContantReducer.messages);
  const state = useSelector((state) => state.ContantReducer.person);
  const dispatch = useDispatch();
  const LastMessageRef = useRef(null);
  let date = new Date();
  let options = { hour: 'numeric', minute: 'numeric' };
  let time = date.toLocaleTimeString('en-US', options);
  
  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);

  useEffect(() => {
    LastMessageRef.current.scrollIntoView();
  }, [MessageState]);


  return (
    <div>

      {MessageState.map(message => (

        <Row className={message.name ==='' ? 'MsgRowNew' : 'MsgRow'} key={message.id} justify="start">
          
          {message.name === '' ? (
            <>
              <Col className='MsgTextFormInput' >
                <p>{message.body}</p>
              </Col>
            
              <Col span={24} className="TimeNew" >
                {time}
              </Col>

            </>

          ) : (

            <>
              <Col span={1} >
                <Avatar src={state.avatar} />
              </Col>

              <Col span={22} >
                <h4>{state.first_name}{state.last_name}</h4>
              </Col>

              <Col className='MsgText'>
                <p>{message.body}</p>
              </Col>
              
              <Col span={24} className="Time">
                {time}
              </Col>
              
            </>
          )}
        </Row>
      )
    )
  }
    <div ref={LastMessageRef}/>
    </div>
  )
}

export default Message
