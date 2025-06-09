import { SxProps } from '@mui/system';

export const logoSubtitleSx: SxProps = {
  fontWeight: 400,
  fontSize: '0.4rem',
  lineHeight: '140%',
  letterSpacing: '0.03em',
  textAlign: 'center',
  // Градиентный текст
  backgroundImage: 'linear-gradient(180deg, #4aaac7 0%, #4085b5 100%)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block', // важно для некоторых случаев
};

export const sidebarWrapperSx: SxProps = {
  position: 'absolute',
  width: '4.8rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: 'calc(100% - 1.5rem)',
  boxSizing: 'border-box',
};
export const navWrapperSx: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '0.63rem',
  marginTop: '0.8rem',
  width: '100%',
  flex: 1,
};
