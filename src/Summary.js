import React from 'react';
import Resume from './Resume.pdf'
import Profile from './vrana7@asu.edu-3.jpg'

function Summary() {
  return (
    <section id="summary" className="py-5">
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src={Profile} alt="Profile Picture" className="img-fluid rounded-circle square-image" />
          </div>
          <div className="col-md-8">
            <h2>Summary</h2>
            <p>
            Hello, I'm Vraj, a committed Master of Science student majoring in Computer Science at Arizona State University, set to graduate in May 2024. With over two years of professional experience as a Data Analyst at AIDE Lab, a Software Engineer at Tata Consultancy Services, and in AI Integration Specialist at Thunderbird School of Global Management, I've built a robust foundation in practical skills and gained valuable industry insights. My varied work experiences demonstrate adaptability and a strong desire to learn. As I near graduation, I am eager to pursue full-time opportunities where I can leverage my expertise to contribute to innovative projects in the field of Computer Science. <br /> <br />
            As an international student, I bring a unique blend of perspectives, multilingual proficiency, cultural awareness, and a global network. My experiences have instilled in me a deep cultural sensitivity, a global mindset, and a robust capacity for adaptability and resilience in diverse environments. I am committed to leveraging my knowledge and skills to excel in the field of computer science, contributing meaningfully to innovative projects and collaborative teams.
            </p>
            <h2>Goals</h2>
            <p>My objective is to excel in the dynamic field of computer science. I am passionate about leveraging my skills to address intricate challenges and foster innovation. Eager to immerse myself in roles that offer exposure to leading-edge technologies and foster collaborative environments, I am committed to continuous learning and professional development. As the saying goes, 'Jack of all trades is a master of none, but oftentimes better than a master of one,' I aspire to maintain a diverse skill set and contribute effectively to your project.</p>
            <a href={Resume} download className="btn btn-secondary">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
