import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { Modal, Input } from "antd";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";

import "antd/dist/antd.css";

function Navigation() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisOpen, setIsModalRegisOpen] = useState(false);

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

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const onSubmit = () => {
    navigate(`/search/${data}`);
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
          onChange={(e) => handleChange(e)}
        />
        <AiOutlineSearch
          onClick={() => onSubmit()}
          size={25}
          className="text-white hover:text-red-400 cursor-pointer"
        />
      </div>
      <div>
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
          <Input
            size="large"
            placeholder="Email Address"
            suffix={<AiOutlineMail />}
            style={{borderRadius: '25px', marginBottom: '1.5rem', padding: '0.5rem 1rem'}}
          />
          <Input.Password
            size="large"
            placeholder="Password"
            style={{borderRadius: '25px', marginBottom: '1.5rem', padding: '0.5rem 1rem'}}
          />
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            Login
          </button>
        </Modal>
        <button onClick={showModalRegis} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Register
        </button>
        <Modal
          title="Create Account"
          open={isModalRegisOpen}
          onOk={handleOkRegis}
          onCancel={handleCancelRegis}
          footer={null}
        >
          <Input
            size="large"
            placeholder="First Name"
            suffix={<AiOutlineUser />}
            style={{borderRadius: '25px', marginBottom: '1.5rem', padding: '0.5rem 1rem'}}
          />
          <Input
            size="large"
            placeholder="Last Name"
            suffix={<AiOutlineUser />}
            style={{borderRadius: '25px', marginBottom: '1.5rem', padding: '0.5rem 1rem'}}
          />
          <Input
            size="large"
            placeholder="Email Address"
            suffix={<AiOutlineMail />}
            style={{borderRadius: '25px', marginBottom: '1.5rem', padding: '0.5rem 1rem'}}
          />
          <Input.Password
            size="large"
            placeholder="Password"
            style={{borderRadius: '25px', marginBottom: '1.5rem', padding: '0.5rem 1rem'}}
          />
          <Input.Password
            size="large"
            placeholder="Password Confirmation"
            style={{borderRadius: '25px', marginBottom: '1.5rem', padding: '0.5rem 1rem'}}
          />
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            Register
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default Navigation;
