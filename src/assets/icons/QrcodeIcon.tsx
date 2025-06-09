import React, { type FC } from 'react';
import { IIconProps } from '@/types/icon.types';

export const QrcodeIcon: FC<IIconProps> = ({
  width = 19,
  height = 19,
  color,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 19 19'
      fill='none'
      {...props}
    >
      <path
        d='M4.64286 10.7143V14.3571M7.07143 10.7143V14.3571H9.5V9.5H14.3571M14.3571 7.07143H10.7143V4.64286H14.3571M4.64286 1H2.21429C1.89224 1 1.58338 1.12793 1.35566 1.35566C1.12793 1.58338 1 1.89224 1 2.21429V4.64286M14.3571 1H16.7857C17.1078 1 17.4166 1.12793 17.6443 1.35566C17.8721 1.58338 18 1.89224 18 2.21429V4.64286M18 14.3571V16.7857C18 17.1078 17.8721 17.4166 17.6443 17.6443C17.4166 17.8721 17.1078 18 16.7857 18H14.3571M4.64286 18H2.21429C1.89224 18 1.58338 17.8721 1.35566 17.6443C1.12793 17.4166 1 17.1078 1 16.7857V14.3571M4.64286 4.64286H8.28571V8.28571H4.64286V4.64286ZM11.9286 11.9286H14.3571V14.3571H11.9286V11.9286Z'
        stroke={color || 'currentColor'}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
