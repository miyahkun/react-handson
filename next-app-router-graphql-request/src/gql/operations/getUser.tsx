import { graphql } from "@/src/gql/generated";

export const userQueryDocument = graphql(`
  query userQuery {
    user(login: "miyahkun") {
      twitterUsername
      avatarUrl
      company
    }
  }
`);
