import React from 'react';

import { useHistory } from "react-router-dom";
import { Menu } from 'antd';


const Header = () => {
  let history = useHistory();

  function handleClick(e) {
    console.log(e)
    history.push('/' + e.key)
  }

  return (
    <Menu onClick={handleClick} mode="horizontal">
        <Menu.Item key="home">
          Home
        </Menu.Item>
        <Menu.Item key="about">
          About Me
        </Menu.Item>
        <Menu.Item key="projects">
          Projects
        </Menu.Item>
          </Menu>
  )
}



export default Header
