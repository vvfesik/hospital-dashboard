import * as React from 'react';
import { IIconProps } from 'components/Icons';
import styles from './index.module.scss';

interface ISidebarMenuItemProps {
  Icon?: React.ComponentType<IIconProps>;
  url?: string;
  isActive?: boolean;
  children: React.ReactNode;
}

const SidebarMenuItem = (props: ISidebarMenuItemProps) => {
  const { Icon = () => null, url, isActive, children } = props;

  return (
    <li className={isActive ? styles.menuItemActive : styles.menuItem}>
      <a href={url}>
        <Icon />
        {children}
      </a>
    </li>
  );
};

export default SidebarMenuItem;
