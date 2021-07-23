import React from 'react';

import { useHistory } from "react-router-dom";
import { Menu } from 'antd';

const headerStyle ={
  backgroundColor: 'transparent',

}

const textStyle = {
  color:'#262626'
}


const Header = () => {
  let history = useHistory();

  function handleClick(e) {

    history.push('/' + e.key)
  }

  return (
    <Menu theme='dark' style={headerStyle} onClick={handleClick} mode="horizontal">
        <Menu.Item className='changeSelectedColor' style={textStyle} key="home">
          Home
        </Menu.Item>
        <Menu.Item className='changeSelectedColor' style={textStyle} key="about">
          About Me
        </Menu.Item>
        <Menu.Item className='changeSelectedColor' style={textStyle} key="projects">
          Projects
        </Menu.Item>
          </Menu>
  )
}



export default Header
