import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/style.css';

function Footer() {
  return (
    <section id='footer' className='footer mt-5'>
        <Container>
            <div className='footer-info py-4'>
                <div className='name'>
                    <h3>Sachini Wijekoon</h3>
                </div>
                <div className='social-links d-flex justify-content-center pt-2'>
                    <a href='https://github.com/sachini1234' className='rounded-circle p-2 lh-1'>
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href='https://www.facebook.com/home.php' className='rounded-circle p-2 mx-3 lh-1'>
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/sachini-thilakshika-b489571a4/' className='rounded-circle p-2 me-3 lh-1'>
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href='https://join.skype.com/invite/tEfGC8RT08Yn' className='rounded-circle p-2 lh-1'>
                        <i class="fa-brands fa-skype"></i>
                    </a>
                </div>
                <div className='copyright pt-xl-5 pt-3'>
                    <p>© <strong>Copyright Theja.</strong> All Rights Reserved</p>
                </div>
            </div>
        </Container>
    </section>
  );
}

export default Footer;