import ProjectCarousel from './ProjectCarousel'
import React from 'react';

import { Row, Col } from 'antd';



const headerStyle = {
  fontSize: '50px',
  color: '#fff'
}


const Projects = () => {


  return(
    <div >
      <Row align='middle'>
        <Col align='middle' span={8}></Col>
        <Col align='middle' span={8}><h1 style={headerStyle}>Projects</h1></Col>
        <Col align='middle' span={8}></Col>
      </Row>
      <ProjectCarousel/>

    </div>



  )
}



export default Projects
