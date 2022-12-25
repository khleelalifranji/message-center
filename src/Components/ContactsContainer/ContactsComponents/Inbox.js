import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, List } from 'antd';
import VirtualList from 'rc-virtual-list';
import {getData, ChatHeaderData} from '../../../Redux/Actions/ContactAction';

const ContainerHeight = 422;

const ContantsList =  () => {

  const PersonState = useSelector((state) => state.ContantReducer.data);
  const state = useSelector((state) => state.ContantReducer.person);
  let date = new Date();
  let options = { hour: 'numeric', minute: 'numeric' };
  let time = date.toLocaleTimeString('en-US', options);
  const dispatch = useDispatch();

  const SelectPerson = (item) => {
    dispatch(ChatHeaderData(item));
  };

  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      dispatch(getData());
    }
  };

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]); 

  return (
    <List>
    <VirtualList
      height={ContainerHeight}
      itemHeight={47}
      itemKey="id"
      onScroll={onScroll}
      data={PersonState}    
    >
      {(item) => (
        <List.Item key={item.id} onClick={() => SelectPerson(item)} 
        className={item === state ? 'ant-tabs-content-holder-selected' : 'ant-tabs-content-holder'}>
          <List.Item.Meta
            avatar={<Avatar src={item.avatar}/>}
            title={<h4 style={item === state ? {color: '#fff'} : {color: '#000'}}>{item.first_name}</h4>}
            description={<span style={item === state ? {color: '#fff'} : {color: '#000'}}>{item.email}</span>}
          />
          <div className='Timer'>{time}</div>
        </List.Item>
      )}
    </VirtualList>
  </List>
  )
};
export default React.memo(ContantsList);