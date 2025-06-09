import { ReactNode } from 'react';

export interface INavItem {
  id: number;
  title: string;
  path: string;
  icon: ReactNode;
}
