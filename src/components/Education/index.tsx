import { Animation, Section } from 'gatsby-theme-portfolio-minimal';
import React from 'react'
import { useLocalDataSource } from './data';

const EducationSection:React.FC=()=>{
    const respone=useLocalDataSource();
    return(
        <>
        <Animation type='fadeUp'>
            <Section heading='Education 🎓' anchor='education'>
                {
                    respone.allEducationJson.allEducation.map(education=>(
                        <ul> 
                            <li> {education.university} | {education.degree} | {education.speciality} | {education.startDate} - {education.endDate}</li>
                        
                        </ul>
                    ))
                }
            </Section>
        </Animation>
        </>
    )
}

export default EducationSection;