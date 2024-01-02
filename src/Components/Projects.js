import React from 'react';
import recruit from "./assets/img3.jpg";
import blog from "./assets/img4.jpg";
import news from "./assets/img5.jpeg";
import school from "./assets/img6.jpg";
import { Container} from 'react-bootstrap';
import './styles/style.css';

function Projects() {
  return (
    <section id='projects' className='projects pt-5'>
      <Container>
        <p className='sub-topic fw-bolder mb-0'>WHAT I CAN</p>
        <h1 className='topic fw-bolder'>Projects</h1>
        <div className='project-det d-flex justify-content-center align-items-center flex-wrap mt-5 pt-4'>
          <div className='col-md-3 col-sm-6 col-12'>
            <div className='card me-md-3 me-sm-1'>
              <div className='imgBx col-11 d-flex justify-content-center align-items-center'>
                <img src={news} alt="Italian Trulli" />
              </div>
              <div className='content'>
                  <h2>News Application</h2>
                  <p className='mx-3'>It fetches news from the News API. News is grouped under different categories. React & Bootstrap technologies were used to create this.</p>
                  <a href="https://github.com/sachini1234/News_Web_Application" className='py-2 px-3'>Read more</a>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 col-12'>
            <div className='card me-md-3 ms-sm-1 mt-sm-0 mt-3'>
              <div className='imgBx col-11 d-flex justify-content-center align-items-center'>
                <img src={school} alt="Italian Trulli" />
              </div>
              <div className='content'>
                  <h2>School Management System</h2>
                  <p className='mx-3'>This is a responsive school management system. React & Bootstrap technologies were used to create this.</p>
                  <a href="https://github.com/sachini1234/React_School_Management_System" className='py-2 px-3'>Read more</a>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 col-12'>
            <div className='card me-md-3 me-sm-1 mt-md-0 mt-3'>
              <div className='imgBx col-11 d-flex justify-content-center align-items-center'>
                <img src={recruit} alt="Italian Trulli" />
              </div>
              <div className='content'>
                <h2>HireZone</h2>
                <p className='mx-3'>This is a responsive recruitment agency website. React JS & Bootstrap technologies were used to create this.</p>
                <a href='https://github.com/sachini1234/recruitementagency' className='py-2 px-3'>Read more</a>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 col-12'>
            <div className='card me-md-3 ms-sm-1 mt-md-0 mt-3'>
              <div className='imgBx col-11 d-flex justify-content-center align-items-center'>
                <img src={blog} alt="Italian Trulli" />
              </div>
              <div className='content'>
                  <h2>Blog Application</h2>
                  <p className='mx-3'>This is a responsive website and it can create, read, delete & update each posts. Laravel JS & Bootstrap technologies were used to create this.</p>
                  <a href='https://github.com/sachini1234/Laravel_Blog_Application' className='py-2 px-3'>Read more</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;