import React, { type FC } from 'react';
import { IIconProps } from '@/types/icon.types';

export const BurgerIcon: FC<IIconProps> = ({
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
        d='M3.5 5.25H17.5M3.5 8.75H17.5M3.5 12.25H17.5M3.5 15.75H17.5'
        stroke={color || 'currentColor'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
