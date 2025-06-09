'use client';
import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import {
  closestCenter,
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  rectIntersection,
  TouchSensor,
  useDroppable,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Типы
interface Column {
  id: string;
  title: string;
}

interface Card {
  id: string;
  content: string;
}

interface ColumnWithCards extends Column {
  cards: Card[];
}

// Начальные данные
const initialData: ColumnWithCards[] = [
  {
    id: 'todo',
    title: 'To Do',
    cards: [
      { id: 'card-1', content: 'Task 1' },
      { id: 'card-2', content: 'Task 2' },
      { id: 'card-3', content: 'Task 3' },
      { id: 'card-4', content: 'Task 4' },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    cards: [
      { id: 'card-5', content: 'Dev Task 1' },
      { id: 'card-6', content: 'Dev Task 2' },
      { id: 'card-7', content: 'Dev Task 3' },
      { id: 'card-8', content: 'Dev Task 4' },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    cards: [
      { id: 'card-9', content: 'Review Task 1' },
      { id: 'card-10', content: 'Review Task 2' },
      { id: 'card-11', content: 'Review Task 3' },
      { id: 'card-12', content: 'Review Task 4' },
    ],
  },
  {
    id: 'blocked',
    title: 'Blocked',
    cards: [
      { id: 'card-13', content: 'Blocked Task 1' },
      { id: 'card-14', content: 'Blocked Task 2' },
      { id: 'card-15', content: 'Blocked Task 3' },
      { id: 'card-16', content: 'Blocked Task 4' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    cards: [
      { id: 'card-17', content: 'Done Task 1' },
      { id: 'card-18', content: 'Done Task 2' },
      { id: 'card-19', content: 'Done Task 3' },
      { id: 'card-20', content: 'Done Task 4' },
    ],
  },
];

export const DealsPalette = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [columns, setColumns] = useState<ColumnWithCards[]>(initialData);
  const [activeColumnId, setActiveColumnId] = useState<string | null>(null);

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
      col.cards.some((card) => card.id === activeId),
    );
    const overColIndex = columns.findIndex(
      (col) =>
        col.cards.some((card) => card.id === overId) || col.id === overId,
    );

    if (activeColIndex === -1 || overColIndex === -1) return;

    const activeCardIndex = columns[activeColIndex].cards.findIndex(
      (card) => card.id === activeId,
    );

    const overCardIndex = columns[overColIndex].cards.findIndex(
      (card) => card.id === overId,
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
      col.cards.some((card) => card.id === activeId),
    );
    const overColIndex = columns.findIndex(
      (col) =>
        col.cards.some((card) => card.id === overId) || col.id === overId,
    );

    if (activeColIndex === -1 || overColIndex === -1) return;

    const activeCardIndex = columns[activeColIndex].cards.findIndex(
      (card) => card.id === activeId,
    );
    const overCardIndex = columns[overColIndex].cards.findIndex(
      (card) => card.id === overId,
    );

    const newColumns = [...columns];

    if (columns[activeColIndex].id === columns[overColIndex].id) {
      // Внутри одной колонки — сортировка
      newColumns[activeColIndex].cards = arrayMove(
        newColumns[activeColIndex].cards,
        activeCardIndex,
        overCardIndex === -1
          ? newColumns[activeColIndex].cards.length - 1
          : overCardIndex,
      );
    } else {
      const [movedCard] = newColumns[activeColIndex].cards.splice(
        activeCardIndex,
        1,
      );
      if (overCardIndex === -1) {
        newColumns[overColIndex].cards.push(movedCard); // 👉 В конец, если пусто
      } else {
        newColumns[overColIndex].cards.splice(overCardIndex + 1, 0, movedCard);
      }
    }

    setColumns(newColumns);
    setActiveId(null);
  }

  if (!isMounted) return null;

  return (
    <main className='p-6'>
      <h1 className='mb-6 text-3xl font-bold'>
        Kanban Board with Drag and Drop
      </h1>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className='flex gap-4 overflow-x-auto pb-4'>
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              isActiveDrop={activeColumnId === column.id}
            />
          ))}
        </div>
        <DragOverlay>
          {activeId ? (
            <Card id={activeId}>
              {columns
                .flatMap((col) => col.cards)
                .find((c) => c.id === activeId)?.content ?? ''}
            </Card>
          ) : null}
        </DragOverlay>
      </DndContext>
    </main>
  );
};

// Компонент колонки
function Column({
  column,
  isActiveDrop,
}: {
  column: ColumnWithCards;
  isActiveDrop: boolean;
}) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`min-w-[250px] flex-shrink-0 rounded-lg p-3 shadow transition-colors duration-200 ${
        isActiveDrop ? 'bg-red-200' : 'bg-gray-100'
      }`}
    >
      <h2 className='mb-3 text-center text-lg font-semibold'>{column.title}</h2>
      <SortableContext
        items={column.cards.map((card) => card.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className='min-h-[32px] space-y-2'>
          {' '}
          {/* для видимости даже при пустоте */}
          {column.cards.map((card, index) => (
            <Card key={card.id} id={card.id}>
              {card.content}
            </Card>
          ))}
        </div>
      </SortableContext>
    </div>
  );
}

// Компонент карточки
function Card({ id, children }: { id: string; children: ReactNode }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    animateLayoutChanges: () => true, // <--- добавьте это
  });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? undefined : 'transform 200ms ease',
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab',
    zIndex: isDragging ? 1000 : 'auto',
    boxShadow: isDragging ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className='touch-none rounded bg-white p-2 shadow hover:bg-gray-50'
    >
      {children}
    </div>
  );
}
