import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

const result = dotenv.config({ path: ".env.local" });

if (result.error) {
  throw result.error;
}

const GITHUB_TOKEN = result.parsed?.GITHUB_TOKEN as string;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://api.github.com/graphql": {
        headers: {
          "user-agent": "graphql-code-generator",
          Authorization: `bearer ${GITHUB_TOKEN}`,
        },
      },
    },
  ],
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
