import { useStaticQuery,graphql } from "gatsby";



interface EducationSectionQueryResult {
    allEducationJson: {
        
            allEducation: {
                university:String,
                degree:String,
                speciality:String,
                startDate:String,
                endDate:String
            }[];
       
    };
}

export const useLocalDataSource = (): EducationSectionQueryResult => {
    return useStaticQuery(graphql`
            query EducationSectionQuery {
                allEducationJson {
                    allEducation: nodes {
                        university
                        degree
                        speciality
                        startDate
                        endDate
                    }
                }
            }
    `);
};