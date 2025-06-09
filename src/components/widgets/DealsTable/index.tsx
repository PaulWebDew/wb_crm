'use client';

import React, { type FC, memo, useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import { IPaletteProps } from '@/components/widgets/palette';
import { IDeal } from '@/types/deals.types';
import dayjs from 'dayjs';
import { PencilOutlinedIcon, WbIcon } from '@/assets/icons';
import { IconButtonRounded } from '@/components/ui/IconButtonRounded';
import { Chip } from '@mui/material';
import { ruLocalization } from '@/lib/helpers/localization';
import { tableStyles } from '@/styles/ui/table.styles';

export const DealsTable: FC<IPaletteProps> = memo(({ data, cards }) => {
  const [currentDeals, setCurrentDeals] = useState<IDeal[] | null>(null);
  useEffect(() => {
    setCurrentDeals(
      cards.filter(
        (card) => card.general.palette === data?.title.toLowerCase(),
      ),
    );
  }, [data, cards]);

  const columns = useMemo<MRT_ColumnDef<IDeal>[]>(
    () => [
      {
        header: 'Действия',
        Cell: ({ cell }) => (
          <IconButtonRounded isActive>
            <PencilOutlinedIcon className={'h-4 w-4 text-white'} />
          </IconButtonRounded>
        ),
      },
      {
        header: 'Статус',
        Cell: ({ cell }) => (
          <Chip label='упаковка' sx={{ bgcolor: 'success.light' }} />
        ),
      },
      {
        accessorKey: 'general.id',
        header: 'Номер',
      },
      {
        header: 'Маркетплейс',
        Cell: ({ cell }) => <WbIcon className={'h-6 w-6 rounded-full'} />,
      },
      {
        accessorFn: (deal) =>
          dayjs(deal.general.deliveryDate).format('DD.MM.YYYY, hh:mm:ss'),
        header: 'Дата создания',
      },
      {
        accessorKey: 'general.dealName',
        header: 'Название',
      },
      {
        accessorKey: 'client.companyName',
        header: 'Кллиент',
      },
      {
        accessorFn: (deal) =>
          `${new Intl.NumberFormat('ru-RU').format(deal.general.sum)} ₽`,
        header: 'Общая стоимость',
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: currentDeals || [],
    localization: ruLocalization,
    ...tableStyles,
  });
  return (
    <section>
      <MaterialReactTable table={table} />
    </section>
  );
});

DealsTable.displayName = 'DealsTable';
