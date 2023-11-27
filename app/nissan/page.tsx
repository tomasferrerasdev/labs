import { CarShow } from './components/CarShow/CarShow';
import styles from './page.module.scss';

export default function NissanPage() {
  return (
    <main className={styles.main}>
      <CarShow />
      <nav></nav>
    </main>
  );
}
