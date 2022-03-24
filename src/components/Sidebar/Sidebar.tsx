import SidebarLogo from './SidebarLogo';
import SidebarMenu from './SidebarMenu';
import SidebarBanner from './SidebarBanner';
import styles from './index.module.scss';

interface ISidebarProps {
  className?: string;
}

const Sidebar = (props: ISidebarProps) => {
  const { className } = props;

  return (
    <nav className={className}>
      <SidebarLogo className={styles.logo} />
      <SidebarMenu className={styles.menu} />
      <SidebarBanner className={styles.banner} />
    </nav>
  );
};

export default Sidebar;
