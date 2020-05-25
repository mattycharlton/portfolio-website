import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './skills.scss';
import Button from '../button/button';


const Skills = () => {
    const skillsData = [{
        Area: 'Front End',
        Skills: ['HTML5', 'CSS3 / SASS', 'JavaScript', 'React', 'Razor View Engine']
    }, {
        Area: 'Server Side',
        Skills: ['ASP.NET MVC', 'Node.js', 'PHP', 'SQL']
    }, {
        Area: 'Tools',
        Skills: ['Git', 'Visual Studio / Code', 'Bitbucket / Jira', 'SQL Server Management Studio', 'Adobe Creative Cloud']
    }];

    const skills = skillsData.map((type, i) => {
        return <div key={i}>
            <h2>{type.Area}</h2>
            {type.Skills.map((skill, i) => <p key={i}>{skill}</p>)}
        </div>
    });

    return <section className={styles.section} id="scroll-too">
        <h2>Skills</h2>
        <div className={styles.focusItems}>
            {skills}
        </div>
        <Button type='light' label='View LinkedIn'/>
    </section>
};

export default Skills;