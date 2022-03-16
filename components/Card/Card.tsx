import { PropsWithChildren } from 'react';
import styles from './Card.module.scss';

interface CardProps extends PropsWithChildren<any> {
  title: string;
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
