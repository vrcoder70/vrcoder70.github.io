import React from 'react';
import Profile from './Profile-1.jpg';
import Resume from './Resume.pdf'

function Summary() {
  return (
    <section id="summary" className="py-5">
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src={Profile} alt="Your Image" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-8">
            <h2>Summary</h2>
            <p>
              Hello, I'm Vraj, a dedicated Master of Science student majoring in Computer Science at Arizona State University, slated to graduate in May 2024. With two years of professional experience as both a Data Analyst at AIDE Lab and a Systems Engineer at Tata Consultancy Services, I've cultivated a strong foundation in practical skills and industry insights. <br /> <br />
              As an international student, I bring a unique blend of perspectives, multilingual proficiency, cultural awareness, and a global network. My experiences have instilled in me a deep cultural sensitivity, a global mindset, and a robust capacity for adaptability and resilience in diverse environments. I am committed to leveraging my knowledge and skills to excel in the field of computer science, contributing meaningfully to innovative projects and collaborative teams.
            </p>
            <h2>Goals</h2>
            <p>My objective is to thrive in the realm of software and deep learning, leveraging my proficiency in development and machine learning to tackle complex problems and drive innovation. I am keenly drawn to roles that allow me the opportunity to engage with cutting-edge technologies and collaborate with skilled teams to craft impactful solutions. I am receptive to opportunities with professional growth, stimulating projects, and a collaborative workplace environment.</p>
            <a href={Resume} download className="btn btn-secondary">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
