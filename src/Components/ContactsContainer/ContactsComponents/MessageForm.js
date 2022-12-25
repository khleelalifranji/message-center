import React from 'react'
import { Form, Input, Select, Button } from 'antd';
import './MessageForm.scss'

const MessageForm = ({handleOk}) => {
    const { TextArea } = Input;

    return (
        <Form className='MessageForm'
            labelCol={{ span: 24 }}
            wrapperCol={{span: 24}}>

            <Form.Item label="Send to">
                <Select placeholder="Select persons">
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="User group">
                <Select placeholder="Select user group">
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Users">
                <Select placeholder="Select users">
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Trainer">
                <Select placeholder="Learner">
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Subject">
                <Input placeholder="Enter the subject" />
            </Form.Item>

            <Form.Item label="TextArea">
                <TextArea rows={4} placeholder="Enter your message" />
            </Form.Item>

            <Form.Item>
                <Button onClick={handleOk}>Send Message</Button>
            </Form.Item>

        </Form>
    )
}

export default MessageForm
