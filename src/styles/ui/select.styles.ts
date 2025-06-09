import { SxProps } from '@mui/system';

export const selectSX: SxProps = {
  backgroundColor: '#f0f0f0', // Цвет фона
  borderRadius: '0.4rem',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none', // Убрать бордер
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none', // Убрать бордер при ховере
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none', // Убрать фокусный бордер
  },
  '& .MuiSelect-select': {},
  '& .MuiInputLabel-root': {
    fontSize: '0.875rem', // одинаковый размер
    transform: 'translate(14px, 10px) scale(1)', // выставляем по центру
    transformOrigin: 'top left',
    pointerEvents: 'auto',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)', // поведение при фокусе/заполнении
    },
  },
  // Стрелочка (icon)
  '& .MuiSvgIcon-root': {
    color: '#000', // Цвет стрелочки
  },
};
