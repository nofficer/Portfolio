import React from 'react';
import '../App.css'
import { useHistory,useLocation } from "react-router-dom";
import { Menu } from 'antd';

const headerStyle ={
  backgroundColor: 'transparent',

}

const textStyle = {
  color:'white',
  fontFamily: 'Tourney'
}

const routeMap = {
  '/':'home',
  '/about':'about',
  '/projects':'projects',
  '/home':'home',
  '/resume':'resume'
}

const Header = () => {
  let history = useHistory();
  const location = useLocation()
  const pathLocation = location.pathname

  function handleClick(e) {

    history.push('/' + e.key)
  }

  return (
    <Menu  theme='light' defaultSelectedKeys={[routeMap[pathLocation]]} style={headerStyle} onClick={handleClick} mode="horizontal">
        <Menu.Item className='changeSelectedColor' style={textStyle} key="home">
          Home
        </Menu.Item>
        <Menu.Item className='changeSelectedColor' style={textStyle} key="about">
          About Me
        </Menu.Item>
        <Menu.Item className='changeSelectedColor' style={textStyle} key="projects">
          Projects
        </Menu.Item>
        <Menu.Item className='changeSelectedColor' style={textStyle} key="resume">
          Resume
        </Menu.Item>

          </Menu>
  )
}



export default Header
