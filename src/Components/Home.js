import React from 'react';
import profile from "./assets/img1.png";
import { Container, Button } from 'react-bootstrap';
import './styles/style.css';

const Home = () => {
  return (
    <section className='home' id='home'>
      <Container>
        <div className='d-sm-flex justify-content-between'>
            <div className='home-image d-flex justify-content-sm-end justify-content-center mt-5 pt-sm-4 pt-sm-5 order-sm-2'>
              <svg viewBox="0 0 500 500" width="100%" id="blobSvg">
                <path id="blob" d="M460,280.5Q427,311,418,342.5Q409,374,393,409.5Q377,445,335,433.5Q293,422,263,437.5Q233,453,204,437Q175,421,130.5,425Q86,429,84,385Q82,341,64,312.5Q46,284,61.5,252.5Q77,221,63.5,181.5Q50,142,82.5,123Q115,104,140.5,81Q166,58,200,57.5Q234,57,270,43.5Q306,30,337,50Q368,70,397,91.5Q426,113,428,150.5Q430,188,461.5,219Q493,250,460,280.5Z" fill="#ffc107"></path>
              </svg>
              <img src={profile} className='pt-5 mt-5' alt="Italian Trulli" />
            </div>

            <div className='home-content d-flex align-items-center mt-sm-0 mt-2 order-sm-1'>
                <div className='social-icons d-flex flex-column me-5 pe-5'>
                  <a href='https://www.linkedin.com/in/sachini-thilakshika-b489571a4/'><i className="fa-brands fa-linkedin"></i></a>
                  <a href='https://github.com/sachini1234' className='my-2'><i className="fa-brands fa-square-github"></i></a>
                  <a href='https://www.facebook.com/home.php' className='mb-2'><i className="fa-brands fa-square-facebook"></i></a>
                  <a href='https://dribbble.com/Thilakshika'><i className="fa-brands fa-square-dribbble"></i></a>
                </div>
                <div className='home-detail justify-content-start text-start'>
                  <h1>Hello,</h1>
                  <h1 className='name'>I'm <span>Sachini Wijekoon</span></h1>
                  <h4>Front-end Developer</h4>
                  <Button variant="warning" id='contact' className='mt-3'>Connect<i className="fa-solid fa-location-arrow ms-2"></i></Button>
                </div>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default Home
