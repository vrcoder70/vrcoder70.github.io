import React from 'react';

const HonorsAndActivities = () => {
    // Define your honors and activities here
    const publications = [
        {
            title: "Effectiveness of Do-In-Yourself Portable Air Cleaners in Reducing Exposure to Respiratory Aerosols in US Classrooms:A Longitudinal Study of K-12 Schools",
            details: "Publication under review with Science & Education Journal",
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0360132324004451?dgcid=author"
        },
    ]

    const posters = [
        {
            title: 'Improving Indoor Air Quality in Arizona Schools: A Middle School Student-Led Initiative to Study, Design, and Build DIY Air Cleaners',
            conference : 'Arizona Public Health Association'
        },
        {
            title: "Community-based action to promote indoor air quality through localized air measurements: A case study at an elementary school in southern Arizona",
            conference: 'Department of Energy Integrated Field Laboratory meeting'
        }
    ]

    const certificates = [
        {
            title: "Quantium Data Analytics Job Simulation",
            details: [
                'Completed a job simulation focused on Data Analytics and Commercial Insights for the data science team.',
                'Developed expertise in data preparation and customer analytics, utilizing transaction datasets to extract valuable insights and deliver data-driven commercial recommendations.',
                'Extended analytical capabilities to identify benchmark stores for conducting uplift testing on trial store layouts, enabling evidence-based decision-making.',
                'Leveraged acquired data analytics and insights from previous tasks to create comprehensive reports for the Category Manager, facilitating informed strategic decisions and enhancing commercial applications.'
            ],
            name: "Certificate",
            doc: 'https://drive.google.com/file/d/1mjw6dl0gAPtUps-IhI1K8qLRt8litMtL/view?usp=sharing'
        },
        {
            title: "JPMorgan Chase & Co. Corporate Analyst Development Program (CADP) Virtual Experience",
            details: [ 
                'Completed a job simulation focused on understanding the Corporate Analyst Development Program at JPMorgan Chase & Co.',
                'Built a visualization dashboard using Tableau.',
                'Documented a business process and identified and communicated opportunities for improvement.',
                'Developed a PowerPoint presentation to communicate key ideas and talking points and tell a compelling story.'
            ],
            name: "Certificate",
            doc: 'https://drive.google.com/file/d/1_F6I7Cht3qZrzQLP0tZRRB59doqHHE1I/view?usp=sharing'
        },
        
        {
            title: "JPMorgan Chase & Co. Agile Job Simulation",
            details: [
                'Drafted eight user stories using Trello and prioritized them by estimating the relative level of effort required.',
                'Ran the Scrum team’s daily standup to effectively plan the day and energize the team members.',
                'Conducted a sprint review to gather feedback on the Scrum’s work and a sprint retrospective to align on opportunities for improvement in future sprints.'
            ],
            name: "Certificate",
            doc: 'https://drive.google.com/file/d/1wtesOrm00W8k8fPo3sZK0NCwBTNcYPpb/view?usp=sharing'
        },
    ]

    const activities = [
        {
            title: "Software Developers Association",
            details: "Active participant, frequently attending meetings."
        },
        {
            title: "Sun Devil Stock Exchange Club",
            details: "Joined during the third semester, gaining insights into the stock market and investment."
        },
        {
            title: "MMA Club at Arizona State University",
            details: "Joined during the second semester, learning Kickboxing and Brazilian Jiu-Jitsu."
        },
        {
            title: "First Jump Certification: Sky Dive",
            details: "Received on March 21, 2023, for completing group and aerial training and performing a Tandem Skydive according to USPA Safety Requirements."
        },
        {
            title: "FootPrintX8 Event Organizing Team Member",
            details: "Joined FootPrintX8 India 3rd largest technical event 18th edition as an organizing team member, developed technical competitions for students to participate."
        },
    ];
    

    // State to track whether project info is displayed
    // const [projectInfoVisible, setProjectInfoVisible] = useState(false);
    // const [selectedProject, setSelectedProject] = useState(null);

     // Function to toggle project info visibility
    // const toggleProjectInfo = (index) => {
    //     if (selectedProject === index) {
    //     setProjectInfoVisible(!projectInfoVisible);
    //     } else {
    //     setProjectInfoVisible(true);
    //     }
    //     setSelectedProject(index);
    // };

    return (
        <section id="honors-and-activities" className="py-2">
            
            <div className="container" id='Publication'>
                <h2>Publication</h2>
                <div className="row">
                    {publications.map((project, index) => (
                    <div key={index} className="col-md-12 mb-12 skill">
                        <h4>{project.title}</h4>
                        <h6>~{project.details}~</h6>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Publication</a>
                    </div>
                    ))}
                </div>
            </div>
            
            <div className="container" style={{marginTop: '20px'}} id='Poster'>
            <h2>Poster Presentation</h2>
            <div className="row">
                {posters.map((project, index) => (
                <div key={index} className="col-md-6 mb-6">
                    <div className='skill'>
                        <h4>{project.title}</h4>
                        <h6>~{project.conference}~</h6>
                    </div>
                </div>
                ))}
            </div>
            </div>
            
            <div className="container" style={{marginTop: '20px'}} id='Certification'>
            <h2>Certifications</h2>
                <div className="row">
                    {certificates.map((certificate, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className={`skill`} style={{minHeight: '520px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                <div>
                                    <h4>{certificate.title}</h4>
                                    <ul>
                                        {certificate.details.map((points, index) => (<li style={{textAlign: 'left'}} key={index}>{points}</li>))}
                                    </ul>
                                </div>
                                <div style={{marginTop: 'auto', textAlign: 'center'}}>
                                    <a href={certificate.doc} target='_blank' download className="btn btn-secondary">{certificate.name}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="container " style={{marginTop: '2px'}} id='Activity'>
                <h2>Extracurricular Activities</h2>
                <div className="row">
                    {activities.map((activity, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className={`skill`} style={{minHeight: '165px'}}>
                            <h4>{activity.title}</h4>
                            <h6>{activity.details}</h6>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HonorsAndActivities;
