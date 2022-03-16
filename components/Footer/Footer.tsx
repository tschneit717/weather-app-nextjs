import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href='https://www.github.com/tschneit717'
        target='_blank'
        rel='noreferrer'>
        Created by Tom Schneider
      </a>
    </footer>
  );
};
