import { graphql } from "gatsby";
import React from "react";
import { IndexQueryQuery } from "../../types/graphql-types";
import Meta from "src/components/Meta";
import Layout from "src/components/Layout";

interface Props {
  data: IndexQueryQuery;
  location: Location;
}

const Index: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta;
  return (
    <Layout location={location}>
      <Meta site={meta} />
      <img
        src="https://nizrp.narod.ru/pics/dost5.jpg"
        style={{
          display: "inline-block",
          width: "100%",
        }}
      />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
