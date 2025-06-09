import {
  BarcodeIcon,
  CartIcon,
  ControlPanelIcon,
  CubeIcon,
  QrcodeIcon,
  UserIcon,
  WalletIcon,
  WarehouseIcon,
  WarehouseRestIcon,
} from '@/assets/icons';
import type { INavItem } from '@/types/navigation.types';

export const sidebarConfig: INavItem[] = [
  {
    id: 1,
    title: 'Сделки',
    path: '/deals',
    icon: <WalletIcon className={'h-auto w-5'} />,
  },
  {
    id: 2,
    title: 'Клинты',
    path: '/clients',
    icon: <UserIcon className={'h-auto w-5'} />,
  },
  {
    id: 3,
    title: 'Услуги',
    path: '/services',
    icon: <CubeIcon className={'h-auto w-5'} />,
  },
  {
    id: 4,
    title: 'Товары',
    path: '/products',
    icon: <BarcodeIcon className={'h-auto w-5'} />,
  },
  {
    id: 5,
    title: 'Штрихкоды',
    path: '/barcode',
    icon: <QrcodeIcon className={'h-auto w-5'} />,
  },
  {
    id: 6,
    title: 'Склады отгрузки',
    path: '/warehouse',
    icon: <WarehouseIcon className={'h-auto w-5'} />,
  },
  {
    id: 7,
    title: 'Маркетплейсы',
    path: '/marketplaces',
    icon: <CartIcon className={'h-auto w-5'} />,
  },
  {
    id: 8,
    title: 'Остатки',
    path: '/remaining',
    icon: <WarehouseRestIcon className={'h-auto w-5'} />,
  },
];

export const navConfig: INavItem[] = [
  {
    id: 9,
    title: 'Панель администратора',
    path: '/admin',
    icon: <ControlPanelIcon className={'h-auto w-5'} />,
  },
];
