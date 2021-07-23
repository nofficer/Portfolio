import { Carousel } from 'antd';
import { Image } from 'antd';
import { Row, Col } from 'antd';

import ezcomp from './ezcomp-2.PNG'
import officerchess from './officerchess.PNG'
import portfolioPlaceholder from './portfolioPlaceholder.PNG'




const contentStyle = {
  height: '100%',
  color: '#fff',
  margin:'5vh',
  textAlign: 'center',
  background: '#000000',
  backgroundColor: 'transparent',
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

const linkStyleGreen = {
  color: '#52c41a',
  margin:'auto'
}

const linkStyleBlue = {
  color: '#1890ff',
  margin:'auto'
}

const linkStyleGold = {
  color: '#faad14',
  margin:'auto'
}

const linkStyleRed = {
  color: '#f5222d',
  margin:'auto'
}


const ProjectCarousel = () => {
  return(
    <Carousel effect='slide' >

      <div className='AboutMeDiv' >
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
              <a  href='https://fe-dot-easycomp-demo.uc.r.appspot.com' style={linkStyleGreen}>

              EasyComp Demo

              </a>
              <a  href='https://github.com/nofficer/EasyComp_BE' style={linkStyleBlue}>

              EasyComp Backend Repo

              </a>
              <a  href='https://github.com/nofficer/EasyComp_FrontEnd' style={linkStyleRed}>

              EasyComp Front-End Repo

              </a>

            </Row>


          </Col>
        </Row>



        </h3>
      </div>
      <div className='AboutMeDiv'>
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
            <a  href='https://officerchess.herokuapp.com' style={linkStyleGreen}>

            Chess AI

            </a>
            <a  href='https://github.com/nofficer/chessbackend' style={linkStyleBlue}>

            Chess Engine Repo

            </a>
            <a  href='https://github.com/nofficer/ChessFrontEnd' style={linkStyleRed}>

            Chess Front-End Repo

            </a>


          </Row>

        </Col>
      </Row>



      </h3>
      </div>
      <div className='AboutMeDiv'>
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
              height={'100%'}
              src={portfolioPlaceholder}
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
          This Portfolio
          </h2>
          <Row>

          <p style={textStyle}>
          The website you're currently browsing! Built with react and deployed on the Google Cloud Platform App Engine.
          </p>

          </Row>
          <Row >
            <br/>

            <a  href='https://github.com/nofficer/portfolio' style={linkStyleBlue}>

            Portfolio Repo

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
