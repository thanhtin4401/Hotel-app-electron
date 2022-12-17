import React from "react";
import "./LoginPage.scss";
import { Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    // dispatch(loginUser(values));
    // dispatch(on_loading(12));
    navigate("Manager");
  };
  const onFinishFailed = (errorInfo) => {};
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://res.cloudinary.com/dvzingci9/image/upload/v1670851976/airBnB/logo/Novaland-Logo-PNG-1_jewehw.png"
          alt=""
          className="w-[40%]"
        />
        <h1 className="font-[700] text-[1rem] mb-2">Đăng nhập</h1>
        <Form
          name="basic"
          className="form-login"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="TaiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              className="input border px-[14px] py-[14px] rounded-[0.5rem] w-[320px] input-user"
              placeholder="Input your email/phone number"
            />
          </Form.Item>
          <Form.Item
            name="MatKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              className="border password px-[14px] py-[14px] rounded-[0.5rem] w-[320px] "
              placeholder="Input your password"
            />
          </Form.Item>

          <Button
            className="hover:blacks w-full rounded-[0.5rem] bg-slate-500 btn-login text-white"
            type="primary"
            size="large"
            htmlType="submit"
          >
            login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
