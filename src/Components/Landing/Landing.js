import React from 'react';

import { Row, Col } from 'antd';

import '../../App.css'







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
        <Col align='middle' span={8}><h1 style={headerStyle}>Welcome to the Nathan Officer Portfolio!</h1></Col>
        <Col align='middle' span={8}></Col>
        <Col align='middle' span={8}></Col>

      </Row>


    </div>



  )
}



export default Landing
