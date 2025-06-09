import { IPaletteColumn } from '@/types/palette.types';
import { initialColumnsData } from '@/mokData/paletteColums.data';

export interface IPaletteData {
  title: string;
  columns: IPaletteColumn[];
}

export const initialDealsNavPages: IPaletteData[] = [
  { title: 'FBO', columns: [...initialColumnsData] },
  { title: 'Хранение', columns: [] },
  { title: 'Отгрузка', columns: [] },
  { title: 'Клиенты', columns: [] },
  { title: 'Приемка', columns: [] },
];
