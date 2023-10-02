"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

export const GET_VACATIONS = gql`
  query getVacations {
    vacations {
      name
    }
  }
`;

export const Vacations = () => {
  const { data } = useQuery(GET_VACATIONS);
  return <>vac {console.log(data)}</>;
};
