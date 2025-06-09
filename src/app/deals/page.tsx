'use client';
import React, { useEffect } from 'react';
import { Paper } from '@mui/material';
import { useStore } from '@tanstack/react-store';
import { DealsNavStore, tableViewStore } from '@/store/dealsPage.store';
import { DealsPalette } from '@/components/widgets/DealsPallete';
import { DealsTable } from '@/components/widgets/DealsTable';
import { useRouter } from 'next/navigation';
import { getSlug } from '@/lib/helpers/getSlug';

function DealsPage() {
  const pagesStore = useStore(DealsNavStore, (state) => state.pages);
  const router = useRouter();
  useEffect(() => {
    if (!!pagesStore.length)
      router.replace(`/deals/${getSlug(pagesStore[0].title)}`);
  });
  return (
    <Paper
      elevation={3}
      sx={{ width: '100%', flex: 1, borderRadius: '0.63rem' }}
    >
      free page
    </Paper>
  );
}

export default DealsPage;
