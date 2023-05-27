import { graphql } from "@/src/gql";

export const userQueryDocument = graphql(`
  query userQuery {
    user(login: "miyahkun") {
      company
    }
  }
`);
