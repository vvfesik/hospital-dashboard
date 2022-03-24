import { IIconProps } from '.';

export const IconSearch = (props: IIconProps) => {
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={className}
    >
      <path d='M22.3 23.7a1 1 0 1 0 1.4-1.4l-1.4 1.4ZM18 16.3l-.7-.7-1.4 1.3.6.8 1.5-1.4Zm1.3-6c0 4.5-3.8 8.2-8.7 8.2v2c5.9 0 10.7-4.6 10.7-10.3h-2Zm-8.7 8.2A8.5 8.5 0 0 1 2 10.2H0C0 16 4.8 20.5 10.6 20.5v-2ZM2 10.2C2 5.7 5.8 2 10.6 2V0C4.8 0 0 4.5 0 10.2h2ZM10.6 2c4.9 0 8.7 3.7 8.7 8.2h2C21.3 4.5 16.5 0 10.6 0v2Zm13.1 20.3-5.7-6-1.5 1.4 5.8 6 1.4-1.4Z' />
    </svg>
  );
};

export default IconSearch;
