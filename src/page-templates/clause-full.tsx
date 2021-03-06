import React, { PureComponent } from "react";
import { graphql } from "gatsby";
import { ClauseFullQuery } from "types/graphql-types";
import ClauseFullPage from "src/templates/ClauseFullPage";
import Meta from "src/components/Meta";
import Layout from "src/components/Layout";

interface ClauseFullProps {
  data: ClauseFullQuery;
  location: Location;
  pageContext: {
    partRegex: string;
    year: string;
    clauseId: number;
  };
}

class ClauseFull extends PureComponent<ClauseFullProps> {
  render(): React.ReactNode {
    const { data, pageContext } = this.props;

    return (
      <Layout>
        <Meta site={data.site?.meta} />
        <ClauseFullPage
          year={parseInt(pageContext.year)}
          clauseNumber={pageContext.clauseId}
          partsCount={data.parts.edges.length}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query ClauseFull($partRegex: String!, $year: String!) {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
      }
    }
    parts: allApiServerData(
      filter: { part: { regex: $partRegex }, year: { eq: $year } }
    ) {
      edges {
        node {
          part
        }
      }
    }
  }
`;

export default ClauseFull;
