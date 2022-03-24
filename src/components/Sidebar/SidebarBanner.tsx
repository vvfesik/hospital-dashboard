import overviewImg from 'assets/overview.png';
import styles from './index.module.scss';

interface ISidebarBannerProps {
  className?: string;
}

const SidebarBanner = (props: ISidebarBannerProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <p className={styles.tag}>new</p>
      <p className={styles.text}>
        Northwester
        <br />
        Mem-Hospital
      </p>
      <img src={overviewImg} alt='Norhwester Mem-Hospital overview' />
    </div>
  );
};

export default SidebarBanner;
