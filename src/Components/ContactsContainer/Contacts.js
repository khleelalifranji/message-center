import React from 'react'
import './Contacts.scss'
import MessagesBox from './ContactsComponents/MessagesBox'
import ContactsHeader from './ContactsComponents/ContactsHeader';
import { Input, Divider } from 'antd';

const { Search } = Input;

const Contacts = () => {
  return (
    <div className='Chat'>

      <ContactsHeader className='ContactsHeader' />

      <Divider className='Divider'></Divider>
      
      <Search className='search' placeholder="input search text" />

      <MessagesBox />
      
    </div>
  )
}

export default Contacts
