import React, { type FC } from 'react';
import { IIconProps } from '@/types/icon.types';

export const ControlPanelIcon: FC<IIconProps> = ({
  width = 21,
  height = 21,
  color,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 21'
      fill='none'
      {...props}
    >
      <path
        d='M20.25 20.45C20.3 20.45 20.4 20.4 20.4 20.3V1.15C20.4 1.1 20.35 1 20.25 1H1.15C1.1 1 1 1.05 1 1.15V20.3C1 20.35 1.05 20.45 1.15 20.45H20.25Z'
        stroke={color || 'currentColor'}
        strokeMiterlimit='10'
      />
      <path
        d='M1 4.44995H20.4'
        stroke={color || 'currentColor'}
        strokeMiterlimit='10'
      />
      <path
        d='M2.84961 2.6001H4.04961'
        stroke={color || 'currentColor'}
        strokeMiterlimit='10'
      />
      <path
        d='M4.7998 2.6001H5.9998'
        stroke={color || 'currentColor'}
        strokeMiterlimit='10'
      />
      <path
        d='M6.7998 2.6001H7.9998'
        stroke={color || 'currentColor'}
        strokeMiterlimit='10'
      />
      <path
        d='M5.70039 10.4501C6.28029 10.4501 6.75039 9.98 6.75039 9.4001C6.75039 8.8202 6.28029 8.3501 5.70039 8.3501C5.12049 8.3501 4.65039 8.8202 4.65039 9.4001C4.65039 9.98 5.12049 10.4501 5.70039 10.4501Z'
        stroke={color || 'currentColor'}
        strokeMiterlimit='10'
      />
      <path
        d='M10.7004 17.5499C11.2803 17.5499 11.7504 17.0798 11.7504 16.5C11.7504 15.9201 11.2803 15.45 10.7004 15.45C10.1205 15.45 9.65039 15.9201 9.65039 16.5C9.65039 17.0798 10.1205 17.5499 10.7004 17.5499Z'
        stroke={color || 'currentColor'}
        strokeMiterlimit='10'
      />
      <path
        d='M15.7502 13.2999C16.3301 13.2999 16.8002 12.8298 16.8002 12.25C16.8002 11.6701 16.3301 11.2 15.7502 11.2C15.1703 11.2 14.7002 11.6701 14.7002 12.25C14.7002 12.8298 15.1703 13.2999 15.7502 13.2999Z'
        stroke={color || 'currentColor'}
        strokeMiterlimit='10'
      />
      <path
        d='M5.7002 11.7V17.5499'
        stroke={color || 'currentColor'}
        strokeMiterlimit='10'
      />
      <path
        d='M10.5498 8.3999V14.5999'
        stroke={color || 'currentColor'}
        strokeMiterlimit='10'
      />
      <path
        d='M15.75 14.3V17.55'
        stroke={color || 'currentColor'}
        strokeMiterlimit='10'
      />
      <path
        d='M15.75 8.3999V10.4499'
        stroke={color || 'currentColor'}
        strokeMiterlimit='10'
      />
    </svg>
  );
};
