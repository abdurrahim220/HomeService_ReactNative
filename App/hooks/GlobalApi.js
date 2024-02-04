import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://ap-south-1.cdn.hygraph.com/content/cls7a1tdm0w7a01w4jy7f9puo/master";

const getSlider = async () => {
  const query = gql`
    query Sliders {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);

  return result;
};


export default {
    getSlider
}