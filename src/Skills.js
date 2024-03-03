import React from 'react';
import './Skills.css';

const Skills = () => {
    // Define your skills here
    const skills = [
        "Python", "Java", "JavaScript", "C++", "SQL", "NoSQL", "MongoDB", "PostgreSQL", "Pytorch", "Computer Vision", "Convolutional Neural Network", "Data Visualization", "Data Analysis",
        "Cloud Computing", "Kubernetes", "AWS", "Docker",  "Terraform", "Jenkins", "Spring Boot", "JPA", "JPQL", "Rest APIs", "Agile", "Scrum",
        "Node.Js", "React.JS", "D3.JS", "Git", "Junit", "Mockito", "JIRA"
    ];

    return (
        <section id="skills" className="py-2">
            <div className="container">
                <h2>Skills</h2>
                <div className="skills d-flex" style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {skills.map((skill, index) => (
                    <div key={index} className="skill">{skill}</div>
                ))}
                </div>
            </div>
        </section>
        
    );
}

export default Skills;
