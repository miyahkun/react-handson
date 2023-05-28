import Image from "next/image";
import { userQueryDocument } from "@/src/gql/operations/getUser";
import { useGraphQLClient } from "@/src/gql/client";

export const GitHubFetcher = async () => {
  const client = useGraphQLClient({ next: { revalidate: 5 } });
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

      <div>
        Twitter: <pre>{data.user?.twitterUsername}</pre>
      </div>
      <div>
        Avatar:{" "}
        <div>
          <Image
            width={200}
            height={200}
            src={data.user?.avatarUrl}
            alt="avatar image"
            unoptimized
          />
        </div>
      </div>
      <div>Company: {data.user?.company}</div>
      <div>DateTime: {datetime}</div>
    </>
  );
};
