import React from 'react';
import Profile from './Profile-2.jpg';
import Resume from './Vraj Rana Resume.pdf';

function Summary() {
  return (
    <section id="summary" className="py-5">
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src={Profile} alt="Your Image" className="img-fluid rounded-circle square-image" />
          </div>
          <div className="col-md-8">
            <h2>Summary</h2>
            <p>
              Hello, I'm Vraj, a dedicated Master of Science student majoring in Computer Science at Arizona State University, slated to graduate in May 2024. With two years of professional experience as both a Data Analyst at AIDE Lab and a Systems Engineer at Tata Consultancy Services, I've cultivated a strong foundation in practical skills and industry insights. As I approach graduation, I am actively seeking full-time opportunities to apply my expertise and contribute to innovative projects in the field. <br /> <br />
              As an international student, I bring a unique blend of perspectives, multilingual proficiency, cultural awareness, and a global network. My experiences have instilled in me a deep cultural sensitivity, a global mindset, and a robust capacity for adaptability and resilience in diverse environments. I am committed to leveraging my knowledge and skills to excel in the field of computer science, contributing meaningfully to innovative projects and collaborative teams.
            </p>
            <h2>Goals</h2>
            <p>My objective is to excel in the dynamic field of computer science. I am passionate about leveraging my skills to address intricate challenges and foster innovation. Eager to immerse myself in roles that offer exposure to leading-edge technologies and foster collaborative environments, I am committed to continuous learning and professional development. As the saying goes, 'Jack of all trades is a master of none, but oftentimes better than a master of one,' I aspire to maintain a diverse skill set and contribute effectively to any team or project.</p>
            <a href={Resume} download className="btn btn-secondary">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
