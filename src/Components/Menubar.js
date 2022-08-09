import React from "react";
import { Menu } from "semantic-ui-react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Menubar = () => {
  function handleItemClick() {
    return "null";
  }

  return (
    <Menu style={{"fontSize":"15px"  ,color: '#296d98' }}  stackable>
      <Menu.Item  >
        <img alt="logo" src={logo} />
      </Menu.Item >

          <Link  to='/home'>
      <Menu.Item style={{"fontSize":"15px"  ,color: '#296d98' }}  name="home" onClick={handleItemClick}>
            Home
      </Menu.Item>
            </Link>

      <Link to='/trainDataset'>
        <Menu.Item style={{"fontSize":"15px"  ,color: '#296d98' }}  name="trainDataset" onClick={handleItemClick}>
              Train Dataset
        </Menu.Item>
      </Link>

      <Link to='/testDataset'>
        <Menu.Item style={{"fontSize":"15px"  ,color: '#296d98' }}   name="testDataset" onClick={handleItemClick}>
              Test Dataset
        </Menu.Item>
      </Link>

      <Link to='/models'>
        <Menu.Item style={{"fontSize":"15px"  ,color: '#296d98' }}  name="model" onClick={handleItemClick}>
              Models
        </Menu.Item>
      </Link>

      <Link to='/favModel'>
        <Menu.Item style={{"fontSize":"15px"  ,color: '#296d98' }}  name="favModel" onClick={handleItemClick}>
              Favourite Models
        </Menu.Item>
      </Link>

      <Link to='/ipfs'>
      <Menu.Item style={{"fontSize":"15px"  ,color: '#296d98' }}  name="ipfs" onClick={handleItemClick}>
        IPFS
      </Menu.Item>
        </Link>

      <Link to='/evident'>
      <Menu.Item style={{"fontSize":"15px"  ,color: '#296d98' }}  name="evident" onClick={handleItemClick}>
        Evidently-AI
      </Menu.Item>
        </Link> 

      <Link to='/explorer'>
      <Menu.Item style={{"fontSize":"15px"  ,color: '#296d98' }}  name="explorer" path='/ex' onClick={handleItemClick}>
          Block-Explorer
      </Menu.Item>
          </Link> 
          
      <Link to='/wallet'>
      <Menu.Item style={{"fontSize":"15px"  ,color: '#296d98' }}  name="wallet" path='/wallet' onClick={handleItemClick}>
          My Wallet
      </Menu.Item>
          </Link> 

      <Link to='/smartcontract'>
        <Menu.Item style={{"fontSize":"15px"  ,color: '#296d98' }}  name="smartcontract" path='/smartcontract' onClick={handleItemClick}>
            Smart Contracts 
        </Menu.Item>
      </Link> 
      <Link to='/auction'>
        <Menu.Item style={{"fontSize":"15px"  ,color: '#296d98' }}  name="auction" path='/auction' onClick={handleItemClick}>
            Auction
        </Menu.Item>
      </Link> 
      <Link to='/analysis'>
        <Menu.Item style={{"fontSize":"15px"  ,color: '#296d98' }}  name="analysis" path='/analysis' onClick={handleItemClick}>
            Analysis 
        </Menu.Item>
      </Link> 
    </Menu>
  );
};

export default Menubar;
