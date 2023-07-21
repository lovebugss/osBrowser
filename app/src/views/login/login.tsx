import React from 'react'
import {shell} from 'electron'
import {Col, Row} from 'antd';
import {Button, Checkbox, Form, Input, Select, message} from 'antd';

const {Option} = Select;


import './login.less'

const Login: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
        //登录, 初始化 sdk
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Row className={"login"}>
            <Col span={12} style={{
                backgroundImage: `url(${$tools.LOGIN_BACKGROUND_IMAGE})`,
                backgroundSize: "100%",
            }}/>
            <Col span={12} style={{margin: "180px auto"}}>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 12}}
                    labelWrap={true}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="select"
                        label="云厂商"
                        hasFeedback
                        rules={[{required: true, message: '请选择云厂商'}]}
                    >
                        <Select placeholder="请选择云厂商">
                            <Option value="Amazon">亚马逊</Option>
                            <Option value="Aliyun">阿里云</Option>
                            <Option value="Huawei">华为云</Option>
                            <Option value="Tencent">腾讯云</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Access Key ID"
                        name="accessKey"
                        rules={[{required: true, message: '请输入Access Key ID!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Secret Access Key"
                        name="secretAccessKey"
                        rules={[{required: true, message: '请输入Secret Access Key'}]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item
                        label="存储桶/访问路径"
                        name="bucket"
                        rules={[{required: false, message: '请输入存储桶或访问路径'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default Login
