import type { Metadata } from 'next';
import React from 'react';
import { Stack } from '@mui/material';
import { DealsNavPanel } from '@/components/layout/dealsNavPanel';

export const metadata: Metadata = {
  title: 'Deals page',
  description: 'test description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        height: '100%',
        flex: 1,
      }}
    >
      <DealsNavPanel />
      {children}
    </Stack>
  );
}
