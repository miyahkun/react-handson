import { graphql, rest, type GraphQLRequest, type GraphQLVariables } from "msw";

const logReq = (req: GraphQLRequest<GraphQLVariables>) => {
  const { url, variables } = req;
  console.info("\x1b[32mURL: ", url.toString(), "\x1b[39m");
  console.info("\x1b[32mVariables: ", variables, "\x1b[39m");
};

export const handlers = [
  graphql.query("userQuery", (req, res, ctx) => {
    logReq(req);

    return res(
      ctx.data({
        user: {
          company: "Hoge",
        },
      })
    );
  }),
];
