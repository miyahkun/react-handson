import { GraphQLClient } from "graphql-request";
import { GRAPHQL_ENDPOINT } from "@/src/constants";
import { defu } from "defu";
import { useMemo } from "react";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export const createClient = (init?: RequestInit) => {
  return new GraphQLClient(GRAPHQL_ENDPOINT, {
    fetch: (...args) => {
      return fetch(args[0], defu(init, args[1]));
    },
    headers: {
      authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  });
};

/**
 * React-specific function
 */
export const useGraphQLClient = (init?: RequestInit) =>
  useMemo(() => createClient(init), [init]);
