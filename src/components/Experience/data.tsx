import { useStaticQuery,graphql } from "gatsby";

interface Position{
    title:String,
    description:String,
    startDate:String,
    endDate:String
}

interface ExperienceSectionQueryResult {
    allExperienceJson: {
        
            allExperience: {
                company:String,
                positions:Position[],
                startDate:String,
                endDate:String,
                commitment:String,
                location:String
            }[];
       
    };
}

export const useLocalDataSource = (): ExperienceSectionQueryResult => {
    return useStaticQuery(graphql`
            query ExperienceSectionQuery {
                allExperienceJson {
                    allExperience: nodes {
                        company
                        positions {
                            title
                            description
                            startDate
                            endDate
                        }
                        startDate
                        endDate
                        commitment
                        location

                    }
                }
            }
    `);
};