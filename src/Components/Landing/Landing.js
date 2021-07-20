import React from 'react';

import { Row, Col } from 'antd';



const headerStyle = {
  fontSize: '50px',
  color: '#fff'
}


const Landing = () => {


  return(
    <div >
      <Row align='middle'>
        <Col align='middle' span={8}></Col>
        <Col align='middle' span={8}><h1 style={headerStyle}>Home</h1></Col>
        <Col align='middle' span={8}></Col>
      </Row>


    </div>



  )
}



export default Landing
