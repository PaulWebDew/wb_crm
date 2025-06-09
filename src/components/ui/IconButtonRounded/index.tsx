import React, { FC, memo } from 'react';

import { Fab, FabProps } from '@mui/material';
import {
  activeButtonSx,
  defaultButtonSx,
} from '@/components/ui/IconButtonRounded/iconButton.styles';

export interface IconButtonRoundedProps extends FabProps {
  isActive?: boolean;
}

export const IconButtonRounded: FC<IconButtonRoundedProps> = memo(
  ({ children, isActive, ...props }) => {
    return (
      <Fab {...props} sx={isActive ? activeButtonSx : defaultButtonSx}>
        {children}
      </Fab>
    );
  },
);
IconButtonRounded.displayName = 'IconButtonRounded';
