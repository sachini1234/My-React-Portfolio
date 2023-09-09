import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './styles/style.css';

function Contact() {
  return (
    <section id='cont' className='contact pt-5'>
      <Container>
        <p className='sub-topic fw-bolder mb-0'>GET IN TOUCH</p>
        <h1 className='topic fw-bolder'>Contact Me</h1>
        <div className='row contact-det mt-5 pt-4'>
            <div className='col-lg-6'>
                <div className='row'>
                    <div col-md-12>
                        <div className='info-box text-center py-4'>
                            <i class="icon fa-solid fa-share-nodes"></i>
                            <h3 className='my-4'>Social Profiles</h3>
                            <div className='social-links d-flex justify-content-center'>
                                <a href='https://github.com/sachini1234' className='rounded-circle p-3 lh-1'>
                                    <i class="fa-brands fa-github"></i>
                                </a>
                                <a href='https://www.facebook.com/home.php' className='rounded-circle p-3 mx-3 lh-1'>
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                                <a href='https://www.linkedin.com/in/sachini-thilakshika-b489571a4/' className='rounded-circle p-3 me-3 lh-1'>
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                                <a href='https://join.skype.com/invite/tEfGC8RT08Yn' className='rounded-circle p-3 lh-1'>
                                    <i class="fa-brands fa-skype"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='info-box text-center py-4 mt-4'>
                            <i class="icon fa-regular fa-envelope"></i>
                            <h3 className='mt-4 mb-3'>E-mail Me</h3>
                            <a href='mailto:sachinithilakshika1996@gmail.com' className='email'>sachinithilakshika1996@gmail.com</a>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='info-box text-center py-4 mt-4'>
                            <i class="icon fa-regular fa-envelope"></i>
                            <h3 className='mt-4 mb-3'>Call Me</h3>
                            <p className='phone'>+94 76 4612347</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6'>
                <Form className='p-4'>
                    <Row className="mb-3">
                        <Col>
                            <Form.Control placeholder="First name" required />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" required />
                        </Col>
                    </Row>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Control placeholder="Subject" className='my-3' required />
                    <Form.Control as="textarea" rows={7} placeholder="Enter Your Message" required />
                    <Button variant="warning" type="submit" className='mt-4'>Submit</Button>
                </Form>
            </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;