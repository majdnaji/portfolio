import React from "react";
import {
  
  ArticlesSection,
  
  InterestsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { HeroSection } from "../components/Hero";
import EducationSection from "../components/Education";
import ExperienceSection from "../components/Experience";
import {ContactSection} from "../components/Contact";

export default function IndexPage() {
  return (
    <>
      <Seo title="Majd Naji | Full Stack Web Developer" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        
        <EducationSection/>
        <InterestsSection sectionId="details" heading="Skills 🤹🏻‍♂️" />
        <ExperienceSection/>
        <ArticlesSection sectionId="articles" heading="Projects" sources={['Medium']} />
        
        <ContactSection sectionId="github" heading="Wanna Talk?" />
      </Page>
    </>
  );
}
