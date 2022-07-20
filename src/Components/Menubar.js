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

      <Link to='/trainDataset'>
        <Menu.Item name="trainDataset" onClick={handleItemClick}>
              Train Dataset
        </Menu.Item>
      </Link>

      <Link to='/testDataset'>
        <Menu.Item name="testDataset" onClick={handleItemClick}>
              Test Dataset
        </Menu.Item>
      </Link>

      <Link to='/models'>
        <Menu.Item name="model" onClick={handleItemClick}>
              Models
        </Menu.Item>
      </Link>

      <Link to='/favModel'>
        <Menu.Item name="favModel" onClick={handleItemClick}>
              Favourite Models
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
          
      <Link to='/wallet'>
      <Menu.Item name="wallet" path='/wallet' onClick={handleItemClick}>
          My Wallet
      </Menu.Item>
          </Link> 

      <Link to='/analysis'>
      <Menu.Item name="analysis" path='/analysis' onClick={handleItemClick}>
          Analysis 
      </Menu.Item>
          </Link> 
    </Menu>
  );
};

export default Menubar;
