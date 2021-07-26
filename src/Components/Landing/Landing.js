import React, { useEffect } from 'react';

import { Row, Col, Image } from 'antd';
import officer from '../AboutMe/officer2.jpg'
import '../../App.css'
import SkillsMatrix from '../AboutMe/SkillsMatrix'







const headerStyle = {
  fontSize: '50px',
  color: '#fa541c',
  fontFamily:'Tourney',
  width: '100vh',
  marginTop:'4vh'
}


const Landing = () => {


  return(
    <div>
      <Row align='middle'>
        <Col align='middle' span={8}><h1 style={headerStyle}>Hi, I'm Nathan Officer</h1></Col>
        <Col align='middle' span={8}></Col>
        <Col align='middle' span={8}></Col>

      </Row>
      <Row align='middle'>
        <Col align='middle' span={8}></Col>

        <Col align='middle' span={16}>
            <SkillsMatrix/>
        </Col>

      </Row>


    </div>



  )
}



export default Landing
