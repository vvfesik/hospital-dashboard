import * as Icons from 'components/Icons';
import styles from './index.module.scss';

type IHeaderProps = {}

const Header = (props: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <form action="">
        <span className={styles.searchInput}>
          <input type='text' placeholder='Search for query' />
          <i><Icons.IconSearch /></i>
        </span>
      </form>
      <div className={styles.actionIcons}>
        <i><Icons.IconEnvelope /></i>
        <i><Icons.IconBell /></i>
        <i><Icons.IconUser /></i>
      </div>
    </header>
  )
}

export default Header;
