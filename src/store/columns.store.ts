import { Store } from '@tanstack/react-store';
import { IPaletteColumn } from '@/types/palette.types';
import { initialColumnsData } from '@/mokData/paletteColums.data';
import { DealsCardsData_FBO } from '@/mokData/dealsCards.data';
import { IDeal } from '@/types/deals.types';

export interface ICardsStore {
  cards: IDeal[];
}

export const CardsStore_fbo = new Store<ICardsStore>({
  cards: [...DealsCardsData_FBO],
});
