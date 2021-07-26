import React, { useEffect } from 'react';

import { Row, Col, Image } from 'antd';
import officer from '../AboutMe/officer2.jpg'
import '../../App.css'
import SkillsMatrix from '../AboutMe/SkillsMatrix'


import WindowSize from '../Util/WindowSize'




const headerStyle = {
  fontSize: '50px',
  color: '#fa541c',
  fontFamily:'Tourney',
  width: '100vh',
  marginTop:'4vh'
}

const mobileHeaderStyle ={
  fontSize: '30px',
  color: '#fa541c',
  fontFamily:'Tourney',
  width: '100%',
  marginTop:'4vh'
}


const Landing = () => {
  var size = WindowSize()

  var width = size.width

  if(width>600){
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
  else{
    return(
      <div>
        <Row align='middle'>
          <Col align='middle' span={24}><h1 style={mobileHeaderStyle}>Hi, I'm Nathan Officer</h1></Col>


        </Row>
        <Row align='middle'>


          <Col align='middle' span={24}>
          <br/>
          <br/>
              <SkillsMatrix/>
          </Col>

        </Row>


      </div>



    )
  }


}



export default Landing
