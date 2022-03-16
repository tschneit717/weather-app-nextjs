import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header>
      <h1 className={styles.title}>I made a weather app</h1>

      <p className={styles.description}>Using Next.JS</p>
    </header>
  );
};
