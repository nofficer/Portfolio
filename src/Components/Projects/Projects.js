import ProjectCarousel from './ProjectCarousel'
import React from 'react';

import { Row, Col } from 'antd';



const headerStyle = {
  fontSize: '50px',
  color: '#fa541c',
  fontFamily:'Tourney',
  marginTop:'4vh'
}


const Projects = () => {


  return(
    <div >
      <Row align='middle'>
        <Col style={{'marginLeft':'5vh'}} align='middle' span={1}></Col>
        <Col align='middle' span={9}><h1 style={headerStyle}>Projects</h1></Col>
        <Col align='middle' span={6}></Col>
        <Col align='middle' span={8}></Col>
      </Row>
      <ProjectCarousel/>

    </div>



  )
}



export default Projects
