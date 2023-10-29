'use client';
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Button } from './ui/button';
import { ColumnData } from '@/types';
import DraggableColumn from './draggableColumn';

const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<ColumnData[]>(testData);
  const addColumn = () => {
    const newColumnId = columns.length
      ? Math.max(...columns.map((c) => c.id)) + 1
      : 1;
    const newColumn: ColumnData = {
      id: newColumnId,
      title: `New Column ${newColumnId}`,
      contacts: [],
    };

    setColumns([...columns, newColumn]);
  };

  const moveCard = (
    fromIndex: number,
    toIndex: number,
    fromColumnId: number,
    toColumnId: number
  ) => {
    const newColumns = [...columns];
    const fromColumn = newColumns.find((c) => c.id === fromColumnId);
    const toColumn = newColumns.find((c) => c.id === toColumnId);

    if (fromColumn && toColumn) {
      const [removed] = fromColumn.contacts.splice(fromIndex, 1);
      toColumn.contacts.splice(toIndex, 0, removed);
    }

    setColumns(newColumns);
  };

  const moveColumn = (fromIndex: number, toIndex: number) => {
    const newColumns = [...columns];
    const [movedColumn] = newColumns.splice(fromIndex, 1);
    newColumns.splice(toIndex, 0, movedColumn);

    setColumns(newColumns);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='kanban-board flex flex-1 space-x-4 p-4 items-start'>
        {columns.map((column, index) => (
          <DraggableColumn
            key={column.id}
            {...column}
            index={index}
            moveColumn={moveColumn}
            moveCard={moveCard}
          />
        ))}
        <Button
          className=' text-white p-2 rounded self-start'
          onClick={addColumn}
        >
          Add Column
        </Button>
      </div>
    </DndProvider>
  );
};

const testData = [
  {
    id: 1,
    title: 'Friends',
    contacts: [
      {
        id: 1,
        name: 'Alice',
        assignee: 'Bob',
        dueDate: 'Nov 30, 2023',
        nextAction: 'Call to check in',
        notes: 'Met at the park, likes dogs.',
      },
      {
        id: 2,
        name: 'Bob',
        assignee: 'Alice',
        dueDate: 'Dec 5, 2023',
        nextAction: 'Send birthday card',
        notes: 'Loves hiking and biking.',
      },
    ],
  },
  {
    id: 2,
    title: 'Family',
    contacts: [
      {
        id: 3,
        name: 'Mom',
        assignee: 'Dad',
        dueDate: 'Nov 25, 2023',
        nextAction: 'Book dinner reservation',
        notes: 'Prefers Italian cuisine.',
      },
    ],
  },
  {
    id: 3,
    title: 'Work',
    contacts: [
      {
        id: 4,
        name: 'Boss',
        assignee: 'Self',
        dueDate: 'Nov 15, 2023',
        nextAction: 'Prepare presentation',
        notes: 'Review quarterly goals beforehand.',
      },
    ],
  },
];
export default KanbanBoard;
