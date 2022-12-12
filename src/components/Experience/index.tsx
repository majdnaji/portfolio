import React from "react";
import { useLocalDataSource } from "./data";
import { Animation, Section } from "gatsby-theme-portfolio-minimal";
import * as classes from "./style.module.css";

const ExperienceSection: React.FC = () => {
  const response = useLocalDataSource();
  
  return (
    <Animation type="fadeUp">
      <Section heading="Experience " anchor="experience">
        
        {response.allExperienceJson.allExperience.map((experience) => (
          <Animation type="fadeUp">
            <div>
                <h4>{experience.company} | 📆 {experience.startDate} - {experience.endDate}</h4>
                <div className={classes.SubText}></div>

                <Tag text={`📍 ${experience.location}`}/>
                <Tag text={`💼 ${experience.commitment}`}/>
                
                {experience.positions.map(position=>(
                  <Animation type="fadeLeft">
                    <div className={classes.PositionContainer}>
                      
                        <div className={classes.PositionTitle}>{position.title}</div>
                        <div className={classes.SubText}>{position.startDate} - {position.endDate}</div>
                        <span className={classes.PositionDescription}>{position.description}</span>
                    </div>
                    </Animation>
                ))}
            </div>
            </Animation>
          
        ))}
        
      </Section>
    </Animation>
  );
};

const Tag=({text})=>{
  return(
    <div className={classes.TagContainer}>
      {text}
    </div>
  )
}

export default ExperienceSection;
