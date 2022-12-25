import { ADD_PERSON_LIST,
   GET_PERSON, GET_MESSAGE,
   ADD_NEW_MESSAGE
  } from '../Constants/ContactConstant'
import  axios  from 'axios';
 
export const personSuccess = (persons) => {
  return {
    type: ADD_PERSON_LIST,
    payload: persons
  };
}

export const ChatHeaderData =(ChatPerson) => {
  return {
    type: GET_PERSON,
    payload: ChatPerson
  };
}

export const MessageData =(Messages) => {
  return {
    type: GET_MESSAGE,
    payload: Messages
  };
}

export const getNewMessage =(NewMessage) => {
  return {
    type: ADD_NEW_MESSAGE,
    payload: NewMessage
  };
}


  export const getData = () => {
    return(dispatch) => {
      axios.get('https://reqres.in/api/users?page=1')
      .then(
        (res) => {
          dispatch(personSuccess(res.data.data))
        }
      )
    }
  }

  export const getMessage = () => {
    return(dispatch) => {
      axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(
        (res) => {
          dispatch(MessageData(res.data))
        }
      )
    }
  }

    
  
