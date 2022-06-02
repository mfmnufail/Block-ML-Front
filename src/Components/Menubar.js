import React from "react";
import { Menu } from "semantic-ui-react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Menubar = () => {
  function handleItemClick() {
    return "null";
  }

  return (
    <Menu stackable>
      <Menu.Item>
        <img alt="logo" src={logo} />
      </Menu.Item>

      <Menu.Item name="home" onClick={handleItemClick}>
          <Link to='/home'>Home</Link>
      </Menu.Item>

      <Menu.Item name="ipfs" onClick={handleItemClick}>
      <Link to='/ipfs'>IPFS</Link>
      </Menu.Item>

      <Menu.Item name="evident" onClick={handleItemClick}>
      <Link to='/evident'>Evidently-AI</Link> 
      </Menu.Item>
      <Menu.Item name="explorer" path='/ex' onClick={handleItemClick}>
      <Link to='/explorer'>
          Block-Explorer</Link> 
      </Menu.Item>
    </Menu>
  );
};

export default Menubar;
