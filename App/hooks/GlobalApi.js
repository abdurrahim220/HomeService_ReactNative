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

const getCategory = async () => {
  const query = gql`
    query getCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);

  return result;
};

const getBusinessList = async () => {
  const query = gql`
    query getBusinessList {
      businessLists {
        id
        name
        email
        contactPerson
        address
        about
        category {
          name
        }
        images {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);

  return result;
};
const getBusinessListByCategory = async (category) => {
  const query =
    gql`
    query getBusinessList {
      businessLists(where: { category: { name: "` +
    category +
    `" } }) {
        id
        name
        email
        contactPerson
        category {
          name
        }
        address
        about
        images {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);

  return result;
};

export default {
  getSlider,
  getCategory,
  getBusinessList,
  getBusinessListByCategory,
};
