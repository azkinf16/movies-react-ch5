import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { Modal, Input, Form } from "antd";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";

import GoogleLogin from "react-google-login";

import "antd/dist/antd.css";
import axios from "axios";

function Navigation() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // const [dataLogin, setDatalogin] = useState([])
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisOpen, setIsModalRegisOpen] = useState(false);
  // const [userLogin, setUserLogin] = useState("")

  const [form] = Form.useForm();

  //modal login
  const showModalLogin = () => {
    setIsModalLoginOpen(true);
  };

  const handleOkLogin = () => {
    setIsModalLoginOpen(false);
  };

  const handleCancelLogin = () => {
    setIsModalLoginOpen(false);
  };

  //modal register
  const showModalRegis = () => {
    setIsModalRegisOpen(true);
  };

  const handleOkRegis = () => {
    setIsModalRegisOpen(false);
  };

  const handleCancelRegis = () => {
    setIsModalRegisOpen(false);
  };

  const handleChangeSearch = (e) => {
    setData(e.target.value);
  };

  const onSubmitSearch = () => {
    navigate(`/search/${data}`);
  };

  const onFinishLogin = async (values) => {
    const dataLoad = {
      email: values.email,
      password: values.password,
    };

    try {
      const res = await axios.post(
        "https://notflixtv.herokuapp.com/api/v1/users/login",
        dataLoad
      );
      localStorage.setItem("token", JSON.stringify(res.data.data.token));
      localStorage.setItem("name", JSON.stringify(res.data.data.first_name));
      localStorage.setItem("image", JSON.stringify(res.data.data.image));
    } catch (error) {
      console.log(error);
    }

    setIsModalLoginOpen(false);
    form.resetFields();
  };

  const onFinishRegis = async (values) => {
    const dataLoad = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      password_confirmation: values.confirm_password,
    };

    try {
      await axios.post(
        "https://notflixtv.herokuapp.com/api/v1/users",
        dataLoad
      );
    } catch (error) {
      console.log(error);
    }

    setIsModalRegisOpen(false);
    form.resetFields();
  };

  const isUserLogin = JSON.parse(localStorage.getItem("token"));
  const name = JSON.parse(localStorage.getItem("name"));
  const image = JSON.parse(localStorage.getItem("image"));

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const responseGoogle = (res) => {
    localStorage.setItem("token", JSON.stringify(res.accessToken));
    localStorage.setItem("name", JSON.stringify(res.profileObj.givenName));
    localStorage.setItem("image", JSON.stringify(res.profileObj.imageUrl));
    setIsModalLoginOpen(false);
  };

  return (
    <div className="flex items-center justify-between pt-7 px-10 z-10 absolute w-full">
      <img
        src="https://movielist-react-app.netlify.app/static/media/Logo.eeba5c17ddf85f2145e83dd963662921.svg"
        alt="logo"
        onClick={() => navigate("/")}
        className="cursor-pointer"
      />
      <div className="bg-transparent border-solid border-2 border-white rounded-full hover:border-red-300 hover:ring-1 flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <input
          className="bg-transparent p-2 w-full focus:outline-none placeholder:text-white text-white"
          type="text"
          placeholder="What do you want to watch?"
          onChange={(e) => handleChangeSearch(e)}
        />
        <AiOutlineSearch
          onClick={() => onSubmitSearch()}
          size={25}
          className="text-white hover:text-red-400 cursor-pointer"
        />
      </div>
      <div className="flex items-center">
        {isUserLogin === null ? (
          <>
            <button
              onClick={showModalLogin}
              className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2"
            >
              Login
            </button>
            <Modal
              title="Log In To Your Account"
              open={isModalLoginOpen}
              onOk={handleOkLogin}
              onCancel={handleCancelLogin}
              footer={null}
            >
              <Form
                name="login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinishLogin}
                form={form}
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Email Address"
                    suffix={<AiOutlineMail />}
                    style={{
                      borderRadius: "25px",
                      marginBottom: "0.3rem",
                      padding: "0.5rem 1rem",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Password"
                    style={{
                      borderRadius: "25px",
                      margin: "0.3rem 0",
                      padding: "0.5rem 1rem",
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <div className="flex items-center justify-between">
                    <button
                      className="login-form-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                      type="submit"
                    >
                      Login
                    </button>
                    <GoogleLogin
                      className="mt-3"
                      clientId="104682645216-tb3e262c9t89kr536spqedig8142rssa.apps.googleusercontent.com"
                      buttonText="Login with Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                </Form.Item>
              </Form>
            </Modal>
            <button
              onClick={showModalRegis}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Register
            </button>
            <Modal
              title="Create Account"
              open={isModalRegisOpen}
              onOk={handleOkRegis}
              onCancel={handleCancelRegis}
              footer={null}
            >
              <Form
                className="regis-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinishRegis}
              >
                <Form.Item
                  name="first_name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First Name!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="First Name"
                    suffix={<AiOutlineUser />}
                    style={{
                      borderRadius: "25px",
                      marginBottom: "0.3rem",
                      padding: "0.5rem 1rem",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Last Name!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Last Name"
                    suffix={<AiOutlineUser />}
                    style={{
                      borderRadius: "25px",
                      margin: "0.3rem 0",
                      padding: "0.5rem 1rem",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Email Address"
                    suffix={<AiOutlineMail />}
                    style={{
                      borderRadius: "25px",
                      margin: "0.3rem 0",
                      padding: "0.5rem 1rem",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Password"
                    style={{
                      borderRadius: "25px",
                      margin: "0.3rem 0",
                      padding: "0.5rem 1rem",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="confirm_password"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password again!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Password Confirmation"
                    style={{
                      borderRadius: "25px",
                      margin: "0.3rem 0",
                      padding: "0.5rem 1rem",
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <button
                    type="submit"
                    className="regis-form-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                  >
                    Register
                  </button>
                </Form.Item>
              </Form>
            </Modal>
          </>
        ) : (
          <>
            <div className="bg-transparent  w-full mr-3">
              <div className="flex items-center py-1 px-3">
                <img
                  className="w-6 h-6 rounded-full mx-auto"
                  src={ image === null ? "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" : image}
                  alt="avatar"
                />
                <h1 className="text-white pt-1 ml-3">{name}</h1>
              </div>
            </div>
            <button
              onClick={logOut}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navigation;
