import React, { Component } from "react";

import { Input, Button, Card } from "antd";
import Icon from "@ant-design/icons";

import "./sign.css";

class Signin extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            fontFamily: "Satisfy",
            fontSize: 70,
            marginTop: 30,
            marginLeft: 500,
            color: "#002266",
            fontWeight: "bold",
          }}
        >
          Dent Guide
        </h1>

        <Card
          className="card"
          title={
            <h2 style={{ color: "#002266", marginTop: 20, fontWeight: "bold" }}>
              signing Up as Docoter
            </h2>
          }
          style={{
            width: 500,
            height: 650,
            marginTop: 30,
            marginLeft: 370,
            marginBottom: 50,
          }}
        >
          <div>
            <h4 style={{ marginTop: 20, fontWeight: "bold", color: "#002266" }}>
              Full name{" "}
            </h4>
            <Input
              prefix={<Icon type="user" style={{ color: "#4d4dff" }} />}
              style={{ height: 35 }}
            />

            <h4 style={{ marginTop: 20, fontWeight: "bold", color: "#002266" }}>
              {" "}
              User Name{" "}
            </h4>
            <Input
              prefix={<Icon type="user" style={{ color: "#4d4dff" }} />}
              style={{ height: 35 }}
            />

            <h4 style={{ marginTop: 20, fontWeight: "bold", color: "#002266" }}>
              {" "}
              Your Email
            </h4>
            <Input
              style={{ height: 35 }}
              prefix={<Icon type="mail" style={{ color: "#4d4dff" }} />}
            />

            <h4 style={{ marginTop: 20, fontWeight: "bold", color: "#002266" }}>
              {" "}
              Password{" "}
            </h4>
            <Input.Password
              prefix={<Icon type="lock" style={{ color: "#4d4dff" }} />}
              style={{ height: 35 }}
            />

            <h4 style={{ marginTop: 20, fontWeight: "bold", color: "#002266" }}>
              Your Phone Number
            </h4>
            <Input
              style={{ height: 35 }}
              prefix={<Icon type="phone" style={{ color: "#4d4dff" }} />}
            />
          </div>
          <div style={{ marginTop: 30 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: 450, height: 40 }}
            >
              sign up
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Signin;
