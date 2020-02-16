import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launch(flight_number: 1) {
      mission_name
    }
  }
`;

const Launches = () => {
  return (
    <div>
      <h1>Lounches</h1>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h2>Loading...</h2>;
          if (error) console.log(error);
          console.log(data);
          return <p>test</p>;
        }}
      </Query>
    </div>
  );
};

export default Launches;
