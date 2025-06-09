'use client';
import { FC, memo, useEffect, useState } from 'react';
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { groupCardsByColumn } from '@/lib/helpers/groupCards';
import { IDeal } from '@/types/deals.types';
import { IPaletteColumn } from '@/types/palette.types';
import { PaletteColumn } from '@/components/widgets/palette/PaletteColumn';
import { PaletteCardPreview } from '@/components/widgets/palette/PaletteCardPreview';
import { IPaletteData } from '@/mokData/dealsNavData';
import { BidColumn } from '@/components/widgets/bidColumn';

export interface IColumnWithCards extends IPaletteColumn {
  cards: IDeal[];
}

export interface IPaletteProps {
  data: IPaletteData | null;
  cards: IDeal[];
}

export const Palette: FC<IPaletteProps> = memo(({ data, cards }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [columns, setColumns] = useState<IColumnWithCards[]>([]);

  const [activeColumnId, setActiveColumnId] = useState<number | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
  );

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const activeColIndex = columns.findIndex((col) =>
      col.cards.some((card) => card.general.id === activeId),
    );
    const overColIndex = columns.findIndex(
      (col) =>
        col.cards.some((card) => card.general.id === overId) ||
        col.id === overId,
    );

    if (activeColIndex === -1 || overColIndex === -1) return;

    const activeCardIndex = columns[activeColIndex].cards.findIndex(
      (card) => card.general.id === activeId,
    );

    const overCardIndex = columns[overColIndex].cards.findIndex(
      (card) => card.general.id === overId,
    );

    // если карточка уже в колонке — ничего не делаем
    if (columns[activeColIndex].id === columns[overColIndex].id) return;

    const newColumns = [...columns];
    const [movedCard] = newColumns[activeColIndex].cards.splice(
      activeCardIndex,
      1,
    );

    // 👉 Если колонка пуста или мышка над самой колонкой — вставляем в конец
    if (overCardIndex === -1) {
      newColumns[overColIndex].cards.push(movedCard);
    } else {
      newColumns[overColIndex].cards.splice(overCardIndex, 0, movedCard);
    }

    setColumns(newColumns);
    setActiveColumnId(columns[overColIndex].id);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveColumnId(null);

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const activeColIndex = columns.findIndex((col) =>
      col.cards.some((card) => card.general.id === activeId),
    );
    const overColIndex = columns.findIndex(
      (col) =>
        col.cards.some((card) => card.general.id === overId) ||
        col.id === overId,
    );

    if (activeColIndex === -1 || overColIndex === -1) return;

    const activeCardIndex = columns[activeColIndex].cards.findIndex(
      (card) => card.general.id === activeId,
    );

    const overCardIndex = columns[overColIndex].cards.findIndex(
      (card) => card.general.id === overId,
    );

    // Получаем индекс из sortable.data
    const overIndex = over.data.current?.sortable?.index;

    const newColumns = [...columns];

    if (overIndex === undefined) {
      // Если индекс не определён, возможно, мы бросили в пустую колонку
      newColumns[overColIndex].cards.push(
        newColumns[activeColIndex].cards.splice(activeCardIndex, 1)[0],
      );
      console.log(
        'Целевая колонка ПОСЛЕ (через fallback):',
        newColumns[overColIndex],
      );
      setColumns(newColumns);
      setActiveId(null);
      return;
    }

    if (columns[activeColIndex].id === columns[overColIndex].id) {
      // Сортировка внутри одной колонки
      newColumns[activeColIndex].cards = arrayMove(
        newColumns[activeColIndex].cards,
        activeCardIndex,
        overIndex,
      );
    } else {
      // Перемещение между колонками
      const [movedCard] = newColumns[activeColIndex].cards.splice(
        activeCardIndex,
        1,
      );
      newColumns[overColIndex].cards.splice(overIndex, 0, movedCard);
    }

    console.log('Целевая колонка ПОСЛЕ обновления:', newColumns[overColIndex]);

    setColumns(newColumns);
    setActiveId(null);
  }

  useEffect(() => {
    if (!data) return;
    const groupData = groupCardsByColumn(data.columns, cards);
    setColumns(groupData);
  }, [data?.columns]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  console.log(columns);
  return (
    <main className='h-full p-2'>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className='flex h-full w-full gap-2 overflow-x-auto pb-4'>
          <BidColumn />
          {columns?.map((column, index) => (
            <PaletteColumn
              key={column.id}
              index={index}
              column={column}
              isActiveDrop={activeColumnId === column.id}
            />
          ))}
        </div>
        <DragOverlay>
          {activeId ? (
            <PaletteCardPreview
              data={
                columns
                  .flatMap((col) => col.cards)
                  .find((c) => c.general.id === +activeId) || null
              }
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </main>
  );
});

Palette.displayName = 'Palette';
