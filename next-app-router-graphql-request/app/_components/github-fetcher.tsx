import { GRAPHQL_ENDPOINT } from "@/src/constants";
import { userQueryDocument } from "@/src/getUser";
import { GraphQLClient } from "graphql-request";
import { type FC } from "react";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export const GitHubFetcher = async () => {
  const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
    headers: {
      authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  });

  const data = await client.request(userQueryDocument);

  return (
    <>
      <h1>GitHubFetcher</h1>

      <div>Company: {data.user?.company}</div>
    </>
  );
};
