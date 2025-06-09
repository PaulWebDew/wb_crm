import { IPaletteColumn } from '@/types/palette.types';

export interface IGeneralDeal {
  id: number;
  dealName: string;
  createdAt: string;
  project: string;
  palette: string;
  comment: string;
  deliveryDate: string;
  shippingWarehouse: string;
  manager: string;
  sum: number;
  productsAmount: number;
}

export interface IClientDeal {
  companyName: string;
}

export interface IDeal {
  general: IGeneralDeal;
  status: IPaletteColumn;
  client: IClientDeal;
}
