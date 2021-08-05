import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: ""
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";
    var format = /^[!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;


    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (this.state.email.includes(" ")) {
      emailError = "invalid email";
    }
    if (this.state.email.match(format)) {
      emailError = "invalid email";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    //   <Form
    //   name="basic"
    //   labelCol={{
    //     span: 8,
    //   }}
    //   wrapperCol={{
    //     span: 16,
    //   }}
    //   initialValues={{
    //     remember: true,
    //   }}
    //   onSubmitCapture={this.handleSubmit}
    // >
    //   <Form.Item 
    //     label="Email"
    //     name="email"
    //     valuePropName={this.state.email}
        
    //   >
    //     <Input 
    //     placeholder="email"
    //     onChange={this.handleChange}
    //     rules={[
    //       {
    //         required: true,
    //         message: 'Please input your username!',
    //       },
    //     ]}
    //      />
    //      <div style={{ fontSize: 12, color: "red" }}>
    //         {this.state.emailError}
    //        </div>
    //   </Form.Item>

    //   <Form.Item
    //     label="Password"
    //     name="password"
    //     valuePropName={this.state.password}
    //     onChange={this.handleChange}
    //     rules={[
    //       {
    //         required: true,
    //         message: 'Please input your password!',
    //       },
    //     ]}

    //   >
        
    //     <Input.Password 
    //     placeholder="password"
    //      />
    //      <div style={{ fontSize: 12, color: "red" }}>
    //          {this.state.passwordError}
    //       </div>
    //   </Form.Item>


    //   <Form.Item
    //     wrapperCol={{
    //       offset: 8,
    //       span: 16,
    //     }}
    //   >
    //     <Button type="primary" htmlType="submit">
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>
    );
  }
}