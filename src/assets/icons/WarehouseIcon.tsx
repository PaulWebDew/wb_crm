import React, { type FC } from 'react';
import { IIconProps } from '@/types/icon.types';

export const WarehouseIcon: FC<IIconProps> = ({
  width = 18,
  height = 19,
  color,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 19'
      fill='none'
      {...props}
    >
      <path
        d='M8.99926 0L0 4.25865V7.00689H1.22422V17.6645H1.97423V7.00689H16.0255V17.6645H16.7756V7.00689H18V4.22295L8.99926 0ZM17.25 6.25687H0.750012V4.73363L9.00073 0.829102L17.25 4.6994V6.25687H17.25Z'
        fill={color || 'currentColor'}
      />
      <path
        d='M8.58269 15H5.15131V18.3847H8.58269V15ZM7.83268 17.6347H5.90128V15.75H7.83268V17.6347Z'
        fill={color || 'currentColor'}
      />
      <path
        d='M12.8485 15H9.41713V18.3847H12.8485V15ZM12.0985 17.6347H10.1671V15.75H12.0985V17.6347Z'
        fill={color || 'currentColor'}
      />
      <path
        d='M3.05788 18.3849H6.48945V15H3.05788V18.3849ZM3.80785 15.75H5.73944V17.6349H3.80785V15.75Z'
        fill={color || 'currentColor'}
      />
      <path
        d='M7.28412 18.3849H10.7157V15H7.28412V18.3849ZM8.03409 15.75H9.96568V17.6349H8.03409V15.75Z'
        fill={color || 'currentColor'}
      />
      <path
        d='M11.5106 18.3849H14.9419V15H11.5106V18.3849ZM12.2605 15.75H14.1919V17.6349H12.2605V15.75Z'
        fill={color || 'currentColor'}
      />
      <path
        d='M5.10623 5.8287H3.31894V6.57872H5.10623V5.8287Z'
        fill={color || 'currentColor'}
      />
      <path
        d='M9.89354 4H8.10625V4.75001H9.89354V4Z'
        fill={color || 'currentColor'}
      />
      <path
        d='M14.6808 2H12.8936V2.75001H14.6808V2Z'
        fill={color || 'currentColor'}
      />
    </svg>
  );
};
