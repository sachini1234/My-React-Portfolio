import React, { useEffect, useState } from 'react';
import profile from "./assets/img2.png";
import { Container, ProgressBar, Button } from 'react-bootstrap';
import './styles/style.css';

const About = () => {

    const initialProgress = [
        { id: 'HTML', percentage: 0 },
        { id: 'CSS', percentage: 0 },
        { id: 'JavaScript', percentage: 0 },
        { id: 'React JS', percentage: 0 },
        { id: 'Angular JS', percentage: 0 },
    ];
    
    const [progressBars, setProgressBars] = useState(initialProgress);

    useEffect(() => {
        const timers = progressBars.map((bar, index) => {
        const targetPercentage = [95, 90, 75, 75, 75][index]; // Set target percentages here
        return setInterval(() => {
            if (bar.percentage < targetPercentage) {
            setProgressBars((prevBars) =>
                prevBars.map((prevBar) =>
                prevBar.id === bar.id
                    ? { ...prevBar, percentage: prevBar.percentage + 3 }
                    : prevBar
                )
            );
            }
        }, 50);
        });

        return () => {
            timers.forEach((timer) => clearInterval(timer));
        };
    }, [progressBars]);

    const handleDownload = () => {
        const pdfPath = '/Sachini%20Wijekoon.pdf'; 
    
        // Create a temporary anchor element to trigger the download
        const a = document.createElement('a');
        a.href = pdfPath;
        a.download = 'Sachini Wijekoon.pdf'; // Specify the file name
        a.style.display = 'none';
           
        // Append the anchor to the document and trigger the download
        document.body.appendChild(a);
        a.click();
    };

    return (
        <section className='about pt-5' id='about'>
            <Container>
                <p className='sub-topic fw-bolder mb-0'>WHO AM I</p>
                <h1 className='topic fw-bolder'>About me</h1>
                <div className='about-info d-md-flex mt-5 pt-4'>
                    <div className='about-image me-xl-5 me-4 pe-3'>
                        <img src={profile} alt="Italian Trulli" />
                    </div>
                    <div className='text-start'>
                        <div className='d-md-flex justify-content-between'>
                            <div className='me-lg-0 me-md-1'>
                                <p><i className="fa-solid fa-angles-right me-2"></i><span className='me-3 fw-bold'>Name -</span>Sachini Wijekoon</p>
                                <p><i className="fa-solid fa-angles-right me-2"></i><span className='me-3 fw-bold'>Contact No -</span>+94 76 4612347</p>
                                <p><i className="fa-solid fa-angles-right me-2"></i><span className='me-3 fw-bold'>City -</span>Gokarella, Sr Lanka</p>
                            </div>
                            <div>
                                <p><i className="fa-solid fa-angles-right me-2"></i><span className='me-3 fw-bold'>Degree -</span>BSc(Hons) Computing & Information Systems</p>
                                <p className='text-break'><i className="fa-solid fa-angles-right me-2"></i><span className='me-3 fw-bold'>E-mail -</span>sachinithilakshika1996@gmail.com</p>
                            </div>
                        </div>
                        <div className='about-para mt-4'>
                            <p>I recently graduated from the Department of Computing and Information Systems at the Faculty of Computing, Sabaragamuwa University with a BSc (Hons) degree in Computing and Information Systems. I have done an internship as a trainee Front-end Developer in the second semester of third year. There I used Angular, Bootstrap. I am quite enthusiastic about learning new and emerging technologies, and always looks for something new to try out.</p>
                        </div>
                        <div className="multiple-animated-progress-bars">
                            {progressBars.map((bar) => (
                                <div key={bar.id} className="animated-progress-bar">
                                    <p className='mb-2 mt-3'>{bar.id}</p>
                                    <ProgressBar now={bar.percentage} variant="warning" label={`${bar.percentage}%`} />
                                </div>
                            ))}
                        </div>
                        <div className='mt-4'>
                            <Button variant="warning" onClick={handleDownload}>Download CV</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About
