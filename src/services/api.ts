import { gql } from "@apollo/client";

export const getArticles = (additionalArticles: number) => gql`
  query articles {
    contents(
      project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", 
      lang: "ru", 
      skip: ${additionalArticles}, 
      take: 10
    ) {
      id,
      url,
      lang,
      title {
        short
      }
      description {
        intro
      }
      thumbnail
    }
  }
`;

export const getArticle = (url: string | undefined) => gql`
  query article {
    content(
      id:"",
      project_id:"5107de83-f208-4ca4-87ed-9b69d58d16e1",
      full_url:"${url}"
    ) {
        title {
          short
        }
        description {
          intro
        }
        thumbnail
      }
  }
`;