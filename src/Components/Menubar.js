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

          <Link to='/home'>
      <Menu.Item name="home" onClick={handleItemClick}>
            Home
      </Menu.Item>
            </Link>

      <Link to='/ipfs'>
      <Menu.Item name="ipfs" onClick={handleItemClick}>
        IPFS
      </Menu.Item>
        </Link>

      <Link to='/evident'>
      <Menu.Item name="evident" onClick={handleItemClick}>
        Evidently-AI
      </Menu.Item>
        </Link> 

      <Link to='/explorer'>
      <Menu.Item name="explorer" path='/ex' onClick={handleItemClick}>
          Block-Explorer
      </Menu.Item>
          </Link> 
    </Menu>
  );
};

export default Menubar;
