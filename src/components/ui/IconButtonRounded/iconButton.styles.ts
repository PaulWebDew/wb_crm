import { SxProps } from '@mui/system';

export const defaultButtonSx: SxProps = {
  backgroundColor: 'background.paper',
  borderRadius: '100%',
  boxShadow: 'none',
  zIndex: 5,
  height: '2rem',
  width: '2rem',
  minWidth: '2rem',
  minHeight: '2rem',
  color: 'text.primary',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: 'text.secondary',
    color: 'secondary.contrastText',
    cursor: 'pointer',
  },
};
export const activeButtonSx: SxProps = {
  backgroundColor: 'primary.main',
  borderRadius: '100%',
  boxShadow: 'none',
  zIndex: 5,
  height: '2rem',
  width: '2rem',
  minWidth: '2rem',
  minHeight: '2rem',
  color: 'secondary.contrastText',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: 'primary.light',
    color: 'secondary.contrastText',
    cursor: 'pointer',
  },
};
