import React from 'react';
import AIDE from './data-analyst.jpg';
import TCS from './TCS.png'

function Experience() {
  // Define predefined values for professional experiences
  const experiences = [
    {
      role: "Software Engineer",
      employer: "ABC Company",
      startDate: "January 2018",
      endDate: "Present",
      image: AIDE,
      description: [
        "Developed web applications using React.js",
        "Implemented RESTful APIs using Node.js and Express",
        "Collaborated with cross-functional teams for project delivery"
      ]
    },
    {
      role: "Data Analyst",
      employer: "XYZ Corporation",
      startDate: "June 2015",
      endDate: "December 2017",
      image: AIDE,
      description: [
        "Analyzed large datasets to extract insights",
        "Created visualizations using Tableau",
        "Presented findings to stakeholders"
      ]
    }
    // Add more experiences as needed
  ];

  return (
    <section id="section3" className="py-5">
      <div className="container">
        <div className="row">
        <div className="col">
            <h2 className="ml-3">Professional Experience</h2>
        </div>
        </div>
        {experiences.map((experience, index) => (
          <div className="row mb-5" key={index}>
            <div className="col-md-6">
              <div className="left-part" 
            //   style={{ backgroundImage: `url(${experience.image})`, backgroundPosition: 'center' }}
              >
                <div className="content">
                  <h3>{experience.role}</h3>
                  <h4>{experience.employer}</h4>
                  <h5>{experience.startDate} - {experience.endDate}</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-part">
                <ul>
                  {experience.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
