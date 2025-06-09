'use client';
import { useDroppable } from '@dnd-kit/core';
import { IColumnWithCards } from '@/components/widgets/palette/index';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { PaletteCard } from '@/components/widgets/palette/PaletteCard';
import { FC } from 'react';
import { PaletteColumnHeader } from '@/components/widgets/paletteColumhHeader';

export interface IPaletteColumnProps {
  column: IColumnWithCards;
  isActiveDrop?: boolean;
  index: number;
}

export const PaletteColumn: FC<IPaletteColumnProps> = ({
  column,
  isActiveDrop,
  index,
}) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div
      className={`w-[10rem] min-w-[5rem] flex-shrink-0 rounded-lg transition-colors duration-200`}
    >
      <PaletteColumnHeader
        title={column.title}
        index={index}
        dealsCount={10}
        sum={25000}
      />
      <div
        className={`h-[calc(100%_-_2rem)] ${isActiveDrop ? 'bg-primary/[.1]' : 'bg-transparent'} mt-3`}
      >
        <SortableContext
          items={column.cards.map((card) => card.general.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className={`min-h-[32px] space-y-2`} ref={setNodeRef}>
            {/* для видимости даже при пустоте */}
            {column.cards.map((card) => (
              <PaletteCard
                key={card.general.id}
                id={card.general.id}
                data={card}
              />
            ))}
          </div>
        </SortableContext>
      </div>
    </div>
  );
};
