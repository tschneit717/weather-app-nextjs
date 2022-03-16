import { PropsWithChildren } from 'react';
import styles from './Grid.module.scss';

export const Grid: React.FC = ({ children }: PropsWithChildren<any>) => {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>{children}</div>
    </main>
  );
};
