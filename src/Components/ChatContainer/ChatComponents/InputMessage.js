import React, { useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from 'antd';
import { getNewMessage } from '../../../Redux/Actions/ContactAction';

const InputMessage = () => {
  const MessageState = useSelector((state) => state.ContantReducer.messages);
  const [NewMessage, setNewMessage] = useState(
    {
      postId:"",
      id: MessageState.length ,
      name:"",
      email:"",
      body:"",
    }
  );
  
  const dispatch = useDispatch();

  const HandleChange = (event) => {
    setNewMessage({
      ...NewMessage,
      [event.target.name]: event.target.value,
      id: (MessageState.length) +1
    });
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch(getNewMessage(NewMessage));
    setNewMessage({
      ...NewMessage,
      body:""
    });
  };

  return (

      <Input.Group compact>
          <Input className='ReplayInput' type="text" name="body" onChange={HandleChange} value={NewMessage.body} />
          <Button className='SubmitRepaly' onClick={submit}>Submit</Button>
      </Input.Group>
      
  )
}

export default InputMessage
