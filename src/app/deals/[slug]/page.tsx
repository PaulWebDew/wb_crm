import React from 'react';
import { PalettePaper } from '@/components/widgets/PallettePaper';

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function PalettePage({ params }: PageProps) {
  return <PalettePaper slug={decodeURIComponent((await params).slug)} />;
}

export default PalettePage;
