import React, { type FC } from 'react';
import { Button, ButtonProps } from '@mui/material';

export const BaseButton: FC<ButtonProps> = ({ sx, ...props }) => {
  return (
    <Button
      variant='contained'
      {...props}
      sx={{
        textTransform: 'none',
        borderRadius: '2rem',
        px: '4rem',
        py: '0.2rem',
        width: 'max-content',
        maxWidth: '100%',
        fontSize: '1rem',
        fontWeight: '300',
        ...sx,
      }}
    />
  );
};
