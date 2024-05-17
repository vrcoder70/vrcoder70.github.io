import React from 'react';
import AIDE from './image/AIDE.jpg';
import TCS from './image/TCS-3.jpg'
import IT from './image/IT-Deskside.jpeg'

function Experience() {
  // Define predefined values for professional experiences
  const experiences = [
    {
      role: "AI Integration Engineer",
      employer: "Thunderbird school of global management, Arizona State University",
      startDate: "February 2024",
      endDate: "Present",
      name: '',
      address: '401 N 1st St, Phoenix, AZ 85004',
      image: IT,
      link: "",
      descriptionPoint: [
        'Developed an interactive AI-driven negotiation simulation tool for business students, enabling case study uploads and personalized scenario creation.',
        'Integrated performance feedback mechanisms and archival functionalities, enhancing educational outcomes and facilitating detailed reviews by professors.',
        'Built Conversational AI with Meta Human character, enabling communication with animated characters.',
        'Facilitated technology information sessions for students, outlining available resources and practical usage.',
        `Proficiently managed Linux and Windows operating systems, overseeing the installation and updates of both OS and applications.` 
      ]
      
    },
    {
      role: "Data Analyst",
      employer: "AIDE Lab, Arizona State University",
      startDate: "October 2022",
      endDate: "October 2023",
      doc: 'https://drive.google.com/file/d/1qiw0sP4TT2D3EybNkK9vJyfwda7zksP9/view?usp=sharing',
      name: 'Letter Of Recommendation',
      address: '951 S. Cady Mall , Suit 103, Tempe, AZ 85281',
      image: AIDE,
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0360132324004451?dgcid=author",
      descriptionPoint:[
        'Implemented a classroom air quality monitoring network, streamlining data collection, and processing, resulting in a 50% reduction in time spent on data management.',
        'Leveraged statistical analysis to evaluate the impact of HEPA filters, demonstrating a 40% decrease in air pollutants within classrooms.',
        'Developed data visualizations for poster presentation at AZPHA conference, as well as for reports, ensuring clear communication of research findings to a diverse audience.',
        'Authored a research paper on "Effectiveness of Do-it-Yourself Air Cleaners in Reducing Exposure to Respiratory Aerosols in US Classrooms: a Longitudinal Study of K-12 Schools", published in the Science & Education Journal.', 
      ]
    },
    {
      role: "Software Engineer",
      employer: "Tata Consultancy Services",
      startDate: "July 2021",
      endDate: "July 2022",
      doc: 'https://drive.google.com/file/d/131gMnLh8FF6BNWOIYhpJ-59L7IKbP4d7/view?usp=sharing',
      name: 'Service Certificate',
      address: 'TCS Main Building, DA IICT Rd, Infocity, Gandhinagar, GJ 382421, IND',
      image: TCS,
      link: "",
      descriptionPoint:[
        'Modernized a legacy monolithic application by migrating to microservices architecture and building RESTful APIs using Spring Boot.',
        'Designed and implemented Costing and Data Persistence APIs within an Agile Scrum framework, adhering to sprint deadlines and collaborating effectively with the team.',
        'Optimized system performance through advanced algorithms, data structures, asynchronous and parallel programming, achieving a 40% reduction in REST API response times.',
        'Troubleshooted and resolved critical business logic issues, implemented unit tests to ensure code quality and expedite deployment.'
      ]
    }
  ];

  return (
    <section id="experience" >
      <div className="container">
        <div className="row">
          <div className="col">
              <h2 className="ml-3">Professional Experience</h2>
          </div>
        </div>
        {experiences.map((experience, index) => (
          <div className="row mb-4" key={index}>
            <div className="col-md-4 d-flex">
              <div className="left-part" 
                  style={{ backgroundImage: `url(${experience.image})`, 
                  backgroundPosition: 'center', 
                  backgroundSize: 'cover', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-end', 
                  height: '250px', 
                  width: '400px' 
                  }}
              >
                <div className="content" style={{ color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <h3 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{experience.role}</h3>
                  <h4 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{experience.employer}</h4>
                  <h5 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{experience.startDate} - {experience.endDate}</h5>
                  {
                    experience.link !== "" && (
                        <a href={experience.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Publication</a>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="right-part">
                <ul>
                    {experience.descriptionPoint.map((points, index) => (<li style={{textAlign: 'left'}} key={index}>{points}</li>))}
                </ul>
                {
                    experience.name === '' ? null : (
                      <a href={experience.doc} target='_blank' download className="btn btn-secondary">{experience.name}</a>
                    )
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
