import React, { type FC } from 'react';
import { IIconProps } from '@/types/icon.types';

export const PlusIcon: FC<IIconProps> = ({
  width = 14,
  height = 14,
  color,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 14 14'
      fill='none'
      {...props}
    >
      <path
        d='M7 0C7.51284 0 7.9354 0.38645 7.99316 0.883789L8 1V6H13C13.5523 6 14 6.44772 14 7C14 7.51284 13.6135 7.9354 13.1162 7.99316L13 8H8V13C8 13.5523 7.55228 14 7 14C6.48716 14 6.0646 13.6135 6.00684 13.1162L6 13V8H1C0.447715 8 0 7.55228 0 7C0 6.48716 0.38645 6.0646 0.883789 6.00684L1 6H6V1C6 0.447715 6.44772 0 7 0Z'
        fill={color || 'currentColor'}
      />
    </svg>
  );
};
