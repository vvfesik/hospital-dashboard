import SidebarMenuItem from './SidebarMenuItem';
import * as Icons from 'components/Icons';

interface ISidebarMenuProps {
  className?: string;
}

const SidebarMenu = (props: ISidebarMenuProps) => {
  const { className } = props;

  return (
    <ul className={className}>
      <SidebarMenuItem isActive={true} Icon={Icons.IconApps}>
        Dashboard
      </SidebarMenuItem>
      <SidebarMenuItem isActive={false} Icon={Icons.IconDoctor}>
        Dr. Profiles
      </SidebarMenuItem>
      <SidebarMenuItem isActive={false} Icon={Icons.IconShield}>
        Organization
      </SidebarMenuItem>
      <SidebarMenuItem isActive={false} Icon={Icons.IconSettings}>
        Settings
      </SidebarMenuItem>
    </ul>
  );
};

export default SidebarMenu;
