
import React from 'react';
import {Form, Input, Button } from "antd";
import "antd/dist/antd.css";




const LoginForm = () => {
  const [form] = Form.useForm();
  const onFinish = () => {};
  return (
    <Form form={form} name="login" onFinish={onFinish}>
      <Form.Item name="email" label="E-mail" valuePropName="email" style={{ width:"400px" }}
      rules={[
        {
          
        type: "email",
        message:"The input is not valid E-mail",
        
        },
        {
          required: true,
          message:"Please input your E-mail",
        }
      ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" style={{ width:"400px" }}
      rules={[
      {
        required: true,
        message:"Please input your password",
      }]}>
      
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;