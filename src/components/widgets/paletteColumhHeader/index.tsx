import React, { type FC } from 'react';
import { Box, Typography } from '@mui/material';
import { colorsEnum } from '@/lib/configs/columColors.config';

export interface IPaletteColumnProps {
  index: number;
  title: string;
  dealsCount: number;
  sum: number;
}

export const PaletteColumnHeader: FC<IPaletteColumnProps> = ({
  index,
  title,
  dealsCount,
  sum,
}) => {
  const formattedSum = new Intl.NumberFormat('ru-RU').format(sum);
  return (
    <Box
      className={'border-b-[0.15rem]'}
      style={{ borderColor: colorsEnum[index + 1] }}
    >
      <Typography fontSize={'0.75rem'} fontWeight={'500'} textAlign={'center'}>
        {title}
      </Typography>
      <Typography
        fontSize={'0.63rem'}
        fontWeight={'300'}
        textAlign={'center'}
        color='textSecondary'
      >
        {dealsCount} сделок : {formattedSum}₽
      </Typography>
    </Box>
  );
};
