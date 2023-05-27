import { useCallback, useMemo, type FC } from "react";
import { GraphQLClient } from "graphql-request";
import { GRAPHQL_ENDPOINT } from "@/src/constants";
import { userQueryDocument } from "@/src/getUser";
import { defu } from "defu";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const createClient = (init?: RequestInit) => {
  return new GraphQLClient(GRAPHQL_ENDPOINT, {
    fetch: (...args) => {
      return fetch(args[0], defu(init, args[1]));
    },
    headers: {
      authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  });
};

export const GitHubFetcher = async () => {
  const client = useMemo(() => createClient({ next: { revalidate: 5 } }), []);

  const data = await client.request(userQueryDocument);

  let datetime = "";

  try {
    const res = await fetch("http://localhost:3000/datetime", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      next: { revalidate: 5 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch datetime");
    }
    const json = await res.json();

    datetime = json.data.datetime;
  } catch (err) {
    console.error("Fetch error:", err);
  }

  return (
    <>
      <h1>GitHubFetcher</h1>

      <div>Company: {data.user?.company}</div>
      <div>DateTime: {datetime}</div>
    </>
  );
};
