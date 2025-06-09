'use client';

import React, { type FC } from 'react';
import { useStore } from '@tanstack/react-store';
import { DealsNavStore, tableViewStore } from '@/store/dealsPage.store';
import { Palette } from '@/components/widgets/palette';
import { DealsTable } from '@/components/widgets/DealsTable';
import { CardsStore_fbo } from '@/store/columns.store';
import { Paper } from '@mui/material';

export interface IPalettePaperProps {
  slug: string;
}
export const PalettePaper: FC<IPalettePaperProps> = ({ slug }) => {
  const tableTypeStore = useStore(tableViewStore, (state) => state.type);
  const navStore = useStore(DealsNavStore, (state) => state);
  const cardsStore = useStore(CardsStore_fbo, (state) => state);
  const paletteData =
    navStore.pages.find((page) => page.title?.toLowerCase() === slug) || null;
  console.log('paletteData', navStore.pages[1].title.toLowerCase(), slug);
  return (
    <Paper elevation={3} className={'h-full w-full'} sx={{ borderRadius: 4 }}>
      {tableTypeStore === 'palette' ? (
        <Palette data={paletteData} cards={cardsStore.cards} />
      ) : (
        <DealsTable data={paletteData} cards={cardsStore.cards} />
      )}
    </Paper>
  );
};
