import * as React from 'react';
import styles from './index.module.css';

interface IPlaceholderProps {
  height?: string;
  children?: React.ReactNode;
}

const Placeholder = (props: IPlaceholderProps) => {
  const { children, height = '100px' } = props;

  return (
    <div className={styles.placeholder} style={{ height }}>
      {children}
    </div>
  );
};

export default Placeholder;
