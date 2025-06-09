import { Store } from '@tanstack/react-store';
import { INavItem } from '@/types/navigation.types';
import { initialDealsNavPages, IPaletteData } from '@/mokData/dealsNavData';

export type tableType = 'table' | 'palette';

export interface ITableViewStore {
  type: tableType;
  setType: (type: tableType) => void;
}

export interface IDealsNavStore {
  pages: IPaletteData[];
  addPalette: (title: string) => void;
  addColumn: (paletteTitle: string, newColumnTitle: string) => void;
}
export const tableViewStore = new Store<ITableViewStore>({
  type: 'palette',
  setType: (type) => {
    tableViewStore.setState((state) => {
      return {
        ...state,
        type,
      };
    });
  },
});

export const DealsNavStore = new Store<IDealsNavStore>({
  pages: [...initialDealsNavPages],
  addPalette: (title: string) => {
    DealsNavStore.setState((state) => {
      return {
        ...state,
        pages: [...state.pages, { title: title, columns: [] }],
      };
    });
  },
  addColumn: (paletteTitle: string, newColumn: string) => {
    DealsNavStore.setState((state) => {
      const updatedPages = state.pages.map((page) => {
        if (page.title === paletteTitle) {
          return {
            ...page,
            columns: [
              ...page.columns,
              { title: newColumn, id: Math.floor(100 + Math.random() * 900) },
            ],
          };
        }
        return page;
      });

      return {
        ...state,
        pages: updatedPages,
      };
    });
  },
});
