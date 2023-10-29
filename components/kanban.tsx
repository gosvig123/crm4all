'use client';
import React, { useState } from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from './ui/button';

type Contact = {
  id: number;
  name: string;
  assignee: string;
  dueDate: string;
  nextAction: string;
  notes: string;
};

type ColumnData = {
  id: number;
  title: string;
  contacts: Contact[];
};

const Column: React.FC<
  ColumnData & {
    className?: string;
    onRemove: () => void;
    onMoveContact: (
      contact: Contact,
      direction: 'left' | 'right'
    ) => void;
  }
> = ({ title, contacts, className, onRemove, onMoveContact }) => (
  <div className={`column ${className} flex-grow`}>
    <div className='flex justify-between items-center mb-4'>
      <h2 className='text-xl font-semibold text-gray-700'>{title}</h2>
      <button
        onClick={onRemove}
        className='text-red-500 text-xl font-bold'
      >
        ×
      </button>
    </div>
    <div className='space-y-3'>
      {contacts.map((contact) => (
        <div
          className='flex justify-between items-center'
          key={contact.id}
        >
          <Card
            title={contact.name}
            style={{ width: 240 }}
            className='contact p-1 flex-1 rounded bg-white shadow-lg'
          >
            <CardHeader className='flex'>
              Assignee: {contact.assignee}
            </CardHeader>
            <CardDescription>
              Due Date: {contact.dueDate}
              <br />
              Next Action: {contact.nextAction}
              <br />
              Notes: {contact.notes}
            </CardDescription>

            <div>
              <button
                onClick={() => onMoveContact(contact, 'left')}
                className='text-blue-500 mx-1'
              >
                ←
              </button>
              <button
                onClick={() => onMoveContact(contact, 'right')}
                className='text-blue-500 mx-1'
              >
                →
              </button>
            </div>
            <CardFooter className='flex justify-end'>
              <Button size={'sm'}>Edit</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  </div>
);
const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<ColumnData[]>([
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
  ]);

  const removeColumn = (id: number) => {
    setColumns(columns.filter((column) => column.id !== id));
  };

  const addColumn = () => {
    const newColumn: ColumnData = {
      id: Date.now(),
      title: `New Column ${columns.length + 1}`,
      contacts: [],
    };
    setColumns([...columns, newColumn]);
  };

  const moveContact = (
    contact: Contact,
    fromColumnId: number,
    direction: 'left' | 'right'
  ) => {
    const columnIndex = columns.findIndex(
      (column) => column.id === fromColumnId
    );
    const targetIndex =
      direction === 'left' ? columnIndex - 1 : columnIndex + 1;

    if (targetIndex < 0 || targetIndex >= columns.length) {
      return; // No column to move to
    }

    const fromColumn = columns[columnIndex];
    const updatedFromColumn = {
      ...fromColumn,
      contacts: fromColumn.contacts.filter(
        (c) => c.id !== contact.id
      ),
    };

    const targetColumn = columns[targetIndex];
    const updatedTargetColumn = {
      ...targetColumn,
      contacts: [...targetColumn.contacts, contact],
    };

    const updatedColumns = [...columns];
    updatedColumns[columnIndex] = updatedFromColumn;
    updatedColumns[targetIndex] = updatedTargetColumn;

    setColumns(updatedColumns);
  };

  return (
    <div className='kanban-board flex flex-1 space-x-4 p-4 items-start'>
      {columns.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          contacts={column.contacts}
          className='bg-gray-100 p-2 rounded'
          onRemove={() => removeColumn(column.id)}
          onMoveContact={(contact, direction) =>
            moveContact(contact, column.id, direction)
          }
        />
      ))}
      <button
        onClick={addColumn}
        className='bg-blue-500 text-white p-2 rounded self-start'
      >
        Add Column
      </button>
    </div>
  );
};

export default KanbanBoard;
