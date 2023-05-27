import styles from "./page.module.css";
import { GitHubFetcher } from "./_components/github-fetcher";
import { initMocks } from "@/src/mocks";

if (process.env.NODE_ENV === "development") {
  (async () => await initMocks())();
}

export default function Home() {
  return (
    <main className={styles.main}>
      {/* @ts-expect-error Async Server Component */}
      <GitHubFetcher />
    </main>
  );
}
