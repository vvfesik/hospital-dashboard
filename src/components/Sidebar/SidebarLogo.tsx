import { IconLogo } from 'components/Icons';

interface ISidebarLogoProps {
  className?: string;
}

const SidebarLogo = (props: ISidebarLogoProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <IconLogo />
    </div>
  );
};

export default SidebarLogo;
