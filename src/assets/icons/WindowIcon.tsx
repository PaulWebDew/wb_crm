import React, { type FC } from 'react';
import { IIconProps } from '@/types/icon.types';

export const WindowIcon: FC<IIconProps> = ({
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
        d='M3.5 5.25C3.5 4.2835 4.2835 3.5 5.25 3.5H7C7.9665 3.5 8.75 4.2835 8.75 5.25V7C8.75 7.9665 7.9665 8.75 7 8.75H5.25C4.2835 8.75 3.5 7.9665 3.5 7V5.25Z'
        stroke={color || 'currentColor'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.25 5.25C12.25 4.2835 13.0335 3.5 14 3.5H15.75C16.7165 3.5 17.5 4.2835 17.5 5.25V7C17.5 7.9665 16.7165 8.75 15.75 8.75H14C13.0335 8.75 12.25 7.9665 12.25 7V5.25Z'
        stroke={color || 'currentColor'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.5 14C3.5 13.0335 4.2835 12.25 5.25 12.25H7C7.9665 12.25 8.75 13.0335 8.75 14V15.75C8.75 16.7165 7.9665 17.5 7 17.5H5.25C4.2835 17.5 3.5 16.7165 3.5 15.75V14Z'
        stroke={color || 'currentColor'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.25 14C12.25 13.0335 13.0335 12.25 14 12.25H15.75C16.7165 12.25 17.5 13.0335 17.5 14V15.75C17.5 16.7165 16.7165 17.5 15.75 17.5H14C13.0335 17.5 12.25 16.7165 12.25 15.75V14Z'
        stroke={color || 'currentColor'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
