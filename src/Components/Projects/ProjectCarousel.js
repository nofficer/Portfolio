import { Carousel } from 'antd';
import { Image } from 'antd';
import { Row, Col } from 'antd';

import ezcomp from './ezcomp-2.PNG'
import officerchess from './officerchess.PNG'




const contentStyle = {
  height: '100%',
  color: '#fff',
  margin:'5vh',
  textAlign: 'center',
  background: '#000000',
};

const textStyle = {
  color: '#fff'
}

const imageStyle = {
  margin:'5vh',
  borderRadius:'25px'
}

const headerStyle = {
  fontSize: '40px',
  color: '#fff'
}

const linkStyle = {
  color: '#52c41a',
  margin:'auto'
}

const linkStyle2 = {
  color: '#1890ff',
  margin:'auto'
}




const ProjectCarousel = () => {
  return(
    <Carousel effect='fade' autoplay>

      <div>
        <h3 style={contentStyle}>
        <Row>
          {/*First give ourselves a bit of space*/}
          <Col span={1}>
          </Col>
          {/*This is the image of the project*/}
          <Col span={9}>



          <Row>


              <Image
                style={imageStyle}
                width={'100%'}
                src={ezcomp}
              />

          </Row>

          </Col>
          <Col span={2}>
          </Col>
        {  /*This is where the image of the project ends
          Next is the project title and description*/}
          <Col span={12}>
            <Row>
              <br/>


            </Row>
            <h2 style={headerStyle}>
            EasyComp
            </h2>
            <Row>
              <br/>
              <p style={textStyle}>
              Easycomp bridges the gap between accounting and sales by automating the sales compensation process. Built with Flask, React, MySql and GCP this powerful tool provides automated calculation, sales reporting and user dashboards.
              </p>

            </Row>
            <Row >
              <br/>
              <a  href='https://fe-dot-easycomp-demo.uc.r.appspot.com' style={linkStyle}>

              Click here to check out the EasyComp demo

              </a>

            </Row>


          </Col>
        </Row>



        </h3>
      </div>
      <div>
      <h3 style={contentStyle}>
      <Row>
        {/*First give ourselves a bit of space*/}
        <Col span={1}>
        </Col>
        {/*This is the image of the project*/}
        <Col span={9}>



        <Row>


            <Image
              style={imageStyle}
              width={'100%'}
              src={officerchess}
            />

        </Row>

        </Col>
        <Col span={2}>
        </Col>
      {  /*This is where the image of the project ends
        Next is the project title and description*/}
        <Col span={12}>
          <Row>
            <br/>


          </Row>
          <h2 style={headerStyle}>
          Officerchess
          </h2>
          <Row>

          <p style={textStyle}>
          The ultimate chess grandmaster! A chess AI built with a convolutional neural network and minimax to predict the most effective move. Built with Flask and React. Deployed on heroku so the server takes a minute to spin up but once it does you can enjoy chess even if you're too good for your friends!
          </p>

          </Row>
          <Row >
            <br/>
            <a  href='https://officerchess.herokuapp.com' style={linkStyle2}>

            Click here to play against the Chess AI

            </a>

          </Row>

        </Col>
      </Row>



      </h3>
      </div>

    </Carousel>
  );
}

export default ProjectCarousel
