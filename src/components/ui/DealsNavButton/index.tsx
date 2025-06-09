import React, { type FC } from 'react';
import { Button, type ButtonProps } from '@mui/material';
import {
  activeButtonSx,
  defaultButtonSx,
} from '@/components/layout/dealsNavPanel/dealsNavPanel.styles';

export interface IDealsNavButtonProps extends ButtonProps {
  isActive?: boolean;
}

export const DealsNavButton: FC<IDealsNavButtonProps> = ({
  children,
  isActive,
  ...props
}) => {
  return (
    <Button sx={isActive ? activeButtonSx : defaultButtonSx} {...props}>
      {children}
    </Button>
  );
};
