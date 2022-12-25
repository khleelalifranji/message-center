import React, { useState } from 'react'
import MessageForm from './MessageForm'
import { FormOutlined } from '@ant-design/icons';
import { Modal, Divider } from 'antd';

const CreateMessage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
        <FormOutlined type="primary" onClick={showModal}>
            Open Modal
        </FormOutlined>

        <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
            <h3>Create Message</h3>
            <h5>Messages</h5>
            <Divider className='Divider'></Divider>
            <MessageForm handleOk={handleOk}/>
        </Modal>
        </div>
    )
}

export default CreateMessage
