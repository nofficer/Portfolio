import React, { useState } from 'react';
import resumePdf from './resume_pdf.pdf'

import resume from './Resume_v2.PNG'
import { Row, Col, Image } from 'antd';
import '../../App.css'


const linkStyle = {
  fontFamily:'Tourney',
  fontSize:'30px'
}


const Resume = () => {
  return (
    <div>
    <Row align='middle'>
      <Col align='middle' span={2}>

      </Col>
      <Col align='middle' span={20}>
      <a style={linkStyle} href={resumePdf}>
        Download PDF
      </a>

      </Col>
      <Col align='middle' span={2}></Col>

      </Row>
      <Row align='middle'>
        <Col align='middle' span={2}>

        </Col>
        <Col align='middle' span={20}>

          <Image

              width={'50%'}
              src={resume}
              preview={false}
            />
        </Col>
        <Col align='middle' span={2}></Col>

        </Row>

      </div>

     )

}

export default Resume
