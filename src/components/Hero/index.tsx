import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { useCalendlyWidget } from 'gatsby-theme-portfolio-minimal/src/hooks/useCalendlyWidget';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { SocialProfiles } from 'gatsby-theme-portfolio-minimal/src/components/SocialProfiles';
import { useLocalDataSource } from './data';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import * as classes from './style.module.css';
import MyBlob from '../Blob';

export function HeroSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allHeroJson.sections[0];

    const CalendlyWidget = useCalendlyWidget(data.calendly);

    return (
        <Animation type="fadeUp" delay={400}>
            {CalendlyWidget}
            <Section anchor={props.sectionId} additionalClasses={[classes.HeroContainer]}>
                
                    <div className={classes.blobContainer}>
                        <MyBlob/>
                    </div>
                
                <div className={classes.Hero}>
                    <div className={classes.Intro}>
                        {data.intro && <span className={classes.ImagePrefix}>{data.intro}</span>}
                        {data.image?.src && (
                            <Animation className={classes.Image} type="waving-hand" duration={2500} iterationCount={3}>
                                <GatsbyImage
                                    image={data.image.src.childImageSharp.gatsbyImageData}
                                    alt={data.image.alt || `Intro Image`}
                                    loading="eager"
                                />
                            </Animation>
                        )}
                    </div>
                    <h1 className={classes.Title}>{data.title}</h1>
                    <h2 className={classes.Subtitle}>
                        {data.subtitle.prefix}
                        <u>{data.subtitle.highlight}</u>
                        {data.subtitle.suffix}
                    </h2>
                    <p>{data.description}</p>
                    <Animation type="fadeLeft" delay={600}>
                        {data.socialProfiles && (
                            <SocialProfiles from={data.socialProfiles.from} showIcon={data.socialProfiles.showIcons} />
                        )}
                    </Animation>
                </div>
            </Section>
        </Animation>
    );
}
