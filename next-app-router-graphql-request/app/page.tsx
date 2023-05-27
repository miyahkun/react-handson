import Image from "next/image";
import styles from "./page.module.css";
import { GitHubFetcher } from "./_components/github-fetcher";

export default function Home() {
  return (
    <main className={styles.main}>
      <GitHubFetcher />
    </main>
  );
}
