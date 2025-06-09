import { SxProps } from '@mui/system';

export const formInputSX: SxProps = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '0.75rem',
    backgroundColor: 'background.default',
    borderColor: 'transparent',
    outline: 'none',
    transition: 'all 0.2s ease',

    '& fieldset': {
      borderColor: 'transparent',
      outline: 'none',
    },
    '&:hover fieldset': {
      borderColor: 'primary.light',
      // outline: 'none',
    },
    '&.Mui-focused fieldset': {
      // borderColor: 'transparent',
    },
  },
  '& input': {
    height: '1rem',
    fontSize: '0.75rem',
  },
  '& textarea': {
    height: '1rem',
    fontSize: '0.75rem',
  },
  '& textarea::placeholder': {
    fontSize: '0.75rem',
    color: 'text.disabled',
    opacity: 0.75,
  },
  '& input::placeholder': {
    fontSize: '0.75rem',
    color: 'text.disabled',
    opacity: 0.75,
  },
};
