import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './styles/skills.css';

function Skills() {
    const frontendSkills = [
        { name: 'React', icon: '⚛️', level: 90 },
        { name: 'Node.js', icon: '🟢', level: 85 },
        { name: 'JavaScript', icon: 'JS', level: 90 },
        { name: 'HTML/CSS', icon: '🌐', level: 95 }
    ];

    const backendSkills = [
        { name: 'Spring MVC', icon: '🍃', level: 90 },
        { name: 'Spring Boot', icon: '🍃', level: 85 },
        { name: 'OAuth 2.0', icon: '🛡️', level: 85 },
        { name: 'Java', icon: '☕', level: 90 },
        { name: 'Spring Batch', icon: '⚙️', level: 85 },
        { name: 'Express.js', icon: '⚡', level: 80 },
        { name: 'Python', icon: '🐍', level: 75 },
        { name: 'C', icon: '⚙️', level: 70 }
    ];

    const dataManagementSkills = [
        { name: 'Oracle', icon: '🏛️', level: 85 },
        { name: 'SQL', icon: '🗄️', level: 85 },
        { name: 'Database Design', icon: '📊', level: 80 }
    ];

    const toolsSkills = [
        { name: 'Git', icon: '📚', level: 90 },
        { name: 'CI/CD', icon: '🔄', level: 80 },
        { name: 'JUnit', icon: '✅', level: 85 },
        { name: 'Postman', icon: '📮', level: 88 },
        { name: 'Azure', icon: '☁️', level: 25 }
    ];

    const developmentSkills = [
        { name: 'Android Development', icon: '📱', level: 75 },
        { name: 'Agile Methodologies', icon: '🔁', level: 90 }
    ];

    const SkillSection = ({ title, skills, delay }) => (
        <Box className="skill-category" style={{'--delay': `${delay}s`}}>
            <Typography variant="h4" sx={{
                color: '#FFFFFF',
                fontWeight: '600',
                marginBottom: '1.5rem',
                fontSize: {xs: '1.5rem', sm: '2rem', md: '2.5rem'},
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
            }}>
                {title}
            </Typography>
            <Box className="skills-grid">
                {skills.map((skill, index) => (
                    <Box key={skill.name} className="skill-item" style={{'--delay': `${delay + index * 0.1}s`}}>
                        <Box className="skill-icon">{skill.icon}</Box>
                        <Typography className="skill-name">{skill.name}</Typography>
                        <Box className="skill-progress">
                            <Box 
                                className="skill-progress-bar" 
                                style={{'--progress': `${skill.level}%`}}
                            ></Box>
                        </Box>
                        <Typography className="skill-percentage">{skill.level}%</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );

    return (
        <Box component="main" className="skills-page">
            <Box className="skills-container">
                <Typography variant="h2" className="skills-title" sx={{
                    color: '#FFFFFF',
                    fontWeight: '700',
                    marginBottom: '3rem',
                    fontSize: {xs: '2rem', sm: '3rem', md: '4rem'},
                    textAlign: 'center',
                    textShadow: '3px 3px 6px rgba(0,0,0,0.8)'
                }}>
                    Skills & Technologies
                </Typography>

                <SkillSection title="🚀 Back-End Development" skills={backendSkills} delay={0.2} />
                <SkillSection title="🌐 Front-End Development" skills={frontendSkills} delay={0.4} />
                <SkillSection title="📊 Data Management" skills={dataManagementSkills} delay={0.6} />
                <SkillSection title="Tools & Testing" skills={toolsSkills} delay={0.8} />
                <SkillSection title="Development Practices" skills={developmentSkills} delay={1.0} />
            </Box>
        </Box>
    );
}

export default Skills;