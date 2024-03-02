import React from 'react';
import './Skills.css';

const Skills = () => {
    // Define your skills here
    const skills = [
        "Python", "Java", "JavaScript", "C++", "SQL", "NoSQL", "Pytorch", "Computer Vision", "CNN", "Data Visualization", "Data Analysis",
        "Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "Spring Boot", "JPA", "JPQL", "Rest APIs", "Agile", 
        "Node.Js", "React.JS", "D3.JS", "Git", "Junit", "Mockito","MongoDB", "PostgreSQL"
    ];

    return (
        <section id="skills" className="py-2">
            <div className="container">
                <h2>Skills</h2>
                <div className="skills">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">{skill}</div>
                ))}
                </div>
            </div>
        </section>
        
    );
}

export default Skills;
