import { SxProps } from '@mui/system';

export const baseModalSX: SxProps = {
  width: 600,
  maxWidth: 'calc(100vw - 2rem)',
  position: 'fixed',
  top: '5rem',
  left: '50%',
  transform: 'translate(-50%, 0)',
  bgcolor: 'background.paper',
  boxShadow: 12,
  borderRadius: '1.5rem',
  px: '2rem',
  pt: '1.5rem',
  pb: '2.5rem',
};
