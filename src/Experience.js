import React from 'react';
import AIDE from './AIDE.jpg';
import TCS from './TCS-3.jpg'
import IT from './IT-Deskside.jpeg'
import LOR from './Vraj Rana Letter Of Recommendation.pdf';
import Service from './Vraj Rana Service Certificate.pdf';

function Experience() {
  // Define predefined values for professional experiences
  const experiences = [
    {
      role: "AI Integration Specialist",
      employer: "Thunderbird school of global management, Arizona State University",
      startDate: "February 2024",
      endDate: "Present",
      name: '',
      address: '401 N 1st St, Phoenix, AZ 85004',
      image: IT,
      description: `In my current role as an IT Deskside Support specialist at Thunderbird School, I am responsible for a range of duties aimed at integrating Artificial Intelligence into our technology stack. This includes programming solutions to record questions, generate AI-powered answers via GPT API, convert responses into audio files, and utilize Nvidia's Audio2Face module for dynamic model generation. Operating across Linux, Windows, and macOS environments, I remotely install software and diligently resolve IT tickets. Additionally, I provide invaluable support to faculty and students in navigating our challenging technology landscape. Leveraging my expertise in technology, teamwork, and strong interpersonal skills, I efficiently tackle daily tasks and contribute to a seamless technology experience for our community.`,
      descriptionPoint: [
        'Developed Animated Conversational AI, enabling seamless interaction with users through AI-generated characters.',
        'Generated virtual reality space with animated characters and facilitated interactive engagement.',
        'Facilitated technology information sessions for students, outlining available resources and practical usage.',
        `Proficiently managed Linux and Windows operating systems, overseeing the installation and updates of both OS and applications.` 
      ]
      
    },
    {
      role: "Data Analyst",
      employer: "AIDE Lab, Arizona State University",
      startDate: "October 2022",
      endDate: "October 2023",
      doc: LOR,
      name: 'Letter Of Recommendation',
      address: '951 S. Cady Mall , Suit 103, Tempe, AZ 85281',
      image: AIDE,
      description: `As a Data Analyst at the Applied Infectious Disease and Epidemiology Lab at Arizona State University, I was instrumental in managing and analyzing indoor air quality data. Utilizing predictive modeling and statistical techniques, I ensured the precise processing of extensive datasets, yielding actionable insights. I also conducted rigorous field tests to validate data collection instruments, preserving data integrity. Through visually engaging visualizations using D3.JS, I effectively communicate complex data trends, enhancing project understanding. Coordinating data collection efforts and overseeing project alignment facilitated informed decision-making among team members and partners. Notably, my contributions resulted in a significant 30-40% reduction in indoor air pollutants, demonstrating the efficacy of the Corsi-Rosenthal box. Additionally, my development of protocols for humidifier experiments and automation of data management processes showcased my analytical prowess. As a published author involved in the study "Effectiveness of Do-In-Yourself Portable Air Cleaners in Reducing Exposure to Respiratory Aerosols in US Classrooms," under review with Science & Education Journal, my expertise in data analysis and interpretation is evident.`,  
      descriptionPoint:[
        `Developed a classroom air quality monitoring network, streamlining data collection, and reducing time by 50%.`,
        `Conducted statistical analysis and programmed data visualization on pre- and post-intervention air quality data of HEPA filter, resulting in a 30-40% decrease in air pollutants.`,
        `Published author of the paper "Effectiveness of Do-It-Yourself Portable Air Cleaners in Reducing Exposure to Respiratory Aerosols in US Classrooms", currently under review with the Science & Education Journal.`,
        `Created data visualizations for Poster Presentation at Arizona Public Health Association and Department of Energy Integrated Field Laboratory meetings.`
      ]
    },
    {
      role: "Software Engineer",
      employer: "Tata Consultancy Services",
      startDate: "July 2021",
      endDate: "July 2022",
      doc: Service,
      name: 'Service Certificate',
      address: 'TCS Main Building, DA IICT Rd, Infocity, Gandhinagar, GJ 382421, IND',
      image: TCS,
      description: `In my role as a Software Engineer at Tata Consultancy Services, I played a pivotal role in delivering IT solutions to Verizon, focusing on API and Microservices development using Spring Boot. I led the design and implementation of REST APIs, achieving a 40% improvement in response times through code optimization techniques. Additionally, I provided leadership by guiding a team of three developers, fostering collaboration, and resolving critical bugs within REST APIs. My expertise in DevOps practices facilitated seamless deployment using GitLab and Jenkins, ensuring robust CI/CD processes. Notable achievements include my contributions to the Cameo Upgrade Project, where I enhanced system capabilities, and my successful reduction of response times within the costing module. Through my adeptness in troubleshooting, data security, and project management tools like JIRA and Git, I consistently delivered impactful solutions, showcasing my technical proficiency and leadership skills.`,
      descriptionPoint:[
        `Developed REST APIs and microservices and upgraded legacy code, resulting in better performance and data security.`,
        `Enhanced system performance by implementing advanced algorithms, data structures, asynchronous and parallel programming, and batch processing, reducing REST API response times by 40%. `,
        `Achieved timely release of new products by employing Scrum methodology across two sprints, complemented by the utilization of GitLab, Sonar Lint, JIRA, and Confluence to streamline development processes. `
      ]
    }
    // Add more experiences as needed
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
                  {/* {
                    experience.name === '' ? null : (
                      <a href={experience.doc} download className="btn btn-secondary">{experience.name}</a>
                    )
                  } */}
                </div>
              </div>
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="right-part">
                <ul>
                    {experience.descriptionPoint.map((points, index) => (<li style={{textAlign: 'left'}} key={index}>{points}</li>))}
                </ul>
                {/* <p>{experience.description}</p> */}
                {
                    experience.name === '' ? null : (
                      <a href={experience.doc} download className="btn btn-secondary">{experience.name}</a>
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
