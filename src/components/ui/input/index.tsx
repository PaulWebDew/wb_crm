import React, { type FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

export const Input: FC<TextFieldProps> = ({ ...props }) => {
  return (
    <TextField
      size='small'
      {...props}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '0.75rem',
          // backgroundColor: '#f9f9f9',
          // borderColor: 'primary.main',
          // transition: 'all 0.2s ease',
          //
          // '& fieldset': {
          //   borderColor: 'primary.main',
          // },
          // '&:hover fieldset': {
          //   borderColor: 'secondary.main',
          // },
          // '&.Mui-focused fieldset': {
          //   borderColor: 'success.main',
          //   boxShadow: '0 0 0 3px rgba(0, 128, 0, 0.2)',
          // },
        },
      }}
    />
  );
};
