import { ADD_PERSON_LIST,
   GET_PERSON,
   GET_MESSAGE,
   ADD_NEW_MESSAGE
  } from "../Constants/ContactConstant";

const initialState = {
    data: [],
    person: [],
    messages: [],
  }

const ContantReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON_LIST:
          return { 
            ...state,
            data: action.payload,
            person: action.payload[0],
        }

        case GET_PERSON:
          return { 
            ...state,
            person: action.payload,
        }

        case GET_MESSAGE:
          return { 
            ...state,
            messages: action.payload,
        }

        case ADD_NEW_MESSAGE:
          return { 
            ...state,
            messages: [...state.messages, action.payload]
        }
  
        default:
          return state;
      }
}

export default ContantReducer