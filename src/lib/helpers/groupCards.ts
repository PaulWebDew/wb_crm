import { IPaletteColumn } from '@/types/palette.types';
import { IDeal } from '@/types/deals.types';

export const groupCardsByColumn = (
  columns: IPaletteColumn[],
  cards: IDeal[],
): { cards: IDeal[]; id: number; title: string }[] => {
  const columnMap = new Map(columns.map((col) => [col.id, col]));
  const cardGroups = new Map<number, IDeal[]>();

  for (const card of cards) {
    const columnId = card.status.id;
    if (!cardGroups.has(columnId)) {
      cardGroups.set(columnId, []);
    }
    cardGroups.get(columnId)?.push(card);
  }

  return Array.from(columnMap.values()).map((col) => ({
    ...col,
    cards: cardGroups.get(col.id) || [],
  }));
};
