import React, { type FC } from 'react';
import { IIconProps } from '@/types/icon.types';

export const BarcodeIcon: FC<IIconProps> = ({
  width = 20,
  height = 17,
  color,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 17'
      fill='none'
      {...props}
    >
      <path
        d='M1 5.49013C1 2.4019 2.8 1.07837 5.5 1.07837H14.5C17.2 1.07837 19 2.4019 19 5.49013V11.6666C19 14.7548 17.2 16.0784 14.5 16.0784H5.5C2.8 16.0784 1 14.7548 1 11.6666V9.09896M4.6 5.04896V12.1078M7.3 5.04896V8.57837M7.3 11.2254V12.1078M12.7 5.04896V5.93131M10 5.04896V12.1078M12.7 8.57837V12.1078M15.4 5.04896V12.1078'
        stroke={color || 'currentColor'}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
