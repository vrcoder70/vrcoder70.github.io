import React, { useState } from 'react';

const HonorsAndActivities = () => {
    // Define your honors and activities here
    const honorsAndActivities = [
        {
            title: "Effectiveness of Do-In-Yourself Portable Air Cleaners in Reducing Exposure to Respiratory Aerosols in US Classrooms",
            details: "Under Review with Science & Education Journal."
        },
        {
            title: "Data Analysis and Data Visualization for Posters at AIDE Lab",
            details: "Conducted for several posters presented at Arizona Public Health Association and Department of Energy Integrated Field Laboratory Meeting."
        },
        {
            title: "JPMorgan Chase & Co. Corporate Analyst Development Program (CADP) Virtual Experience",
            details: "Completed, focusing on data visualization, business process analysis, and presentation skills."
        },
        {
            title: "Quantium Data Analytics Job Simulation",
            details: "Completed, gaining expertise in data preparation, customer analytics, and data-driven commercial insights."
        },
        {
            title: "JPMorgan Chase & Co. Agile Job Simulation",
            details: "Completed, gaining experience in agile methodologies and project management."
        },
        {
            title: "MMA Club at Arizona State University",
            details: "Joined during the second semester, learning Kickboxing and Brazilian Jiu-Jitsu."
        },
        {
            title: "Sun Devil Stock Exchange Club",
            details: "Joined during the third semester, gaining insights into the stock market and investment."
        },
        {
            title: "Software Developers Association",
            details: "Active participant, frequently attending meetings."
        }
    ];

    // State to track whether project info is displayed
    const [projectInfoVisible, setProjectInfoVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

     // Function to toggle project info visibility
    const toggleProjectInfo = (index) => {
        if (selectedProject === index) {
        setProjectInfoVisible(!projectInfoVisible);
        } else {
        setProjectInfoVisible(true);
        }
        setSelectedProject(index);
    };

    return (
        <section id="honors-and-activities" className="py-2">
            <div className="container">
            <h2>Honors And Activities</h2>
            <div className="row">
                {honorsAndActivities.map((project, index) => (
                <div key={index} className="col-md-4 mb-4">
                    <div className={`project-card ${project.status === 'finished' ? 'finished' : 'in-progress'}`} onClick={() => toggleProjectInfo(index)}>
                    <div className="project-info" style={{ display: projectInfoVisible && selectedProject === index ? 'block' : 'none' }}>
                        <p>{project.details}</p>
                    </div>
                    <div className="project-content" style={{ display: projectInfoVisible && selectedProject === index ? 'none' : 'block' }}>
                        <h6>{project.title}</h6>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    );
}

export default HonorsAndActivities;
