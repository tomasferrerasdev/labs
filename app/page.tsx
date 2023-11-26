import Link from "next/link";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Link href={`/nissan`}>Nissan</Link>
      <Link href={`/interactive-map`}>Nuclear plant</Link>
    </main>
  );
}
