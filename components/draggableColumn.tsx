import { ColumnData } from '@/types';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import DraggableCard from './draggableCard';
const CardDragType = 'CARD';
const ColumnDragType = 'COLUMN';

const DraggableColumn: React.FC<
  ColumnData & {
    index: number;
    moveColumn: (fromIndex: number, toIndex: number) => void;
    moveCard: (
      fromIndex: number,
      toIndex: number,
      fromColumnId: number,
      toColumnId: number
    ) => void;
  }
> = ({ id, title, contacts, index, moveColumn, moveCard }) => {
  const columnRef = useRef(null);

  const cardContainerRef = useRef(null);

  const [, connectDrag] = useDrag({
    type: ColumnDragType,
    item: { index },
  });

  const [, connectColumnDrop] = useDrop({
    accept: ColumnDragType,
    hover: (item: { index: number }) => {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveColumn(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [, connectCardDrop] = useDrop({
    accept: CardDragType,
    drop: (item: { index: number; columnId: number }, monitor) => {
      if (monitor.didDrop()) {
        return;
      }

      if (item.columnId !== id) {
        moveCard(item.index, contacts.length, item.columnId, id);
        item.index = contacts.length;
        item.columnId = id;
      }
    },
  });

  connectDrag(columnRef);
  connectColumnDrop(columnRef);
  connectCardDrop(cardContainerRef);

  return (
    <div ref={columnRef} className='bg-gray-100 p-2 rounded'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-semibold text-gray-700'>
          {title}
        </h2>
        <button className='text-red-500 text-xl font-bold'>×</button>
      </div>
      <div
        ref={cardContainerRef}
        className='space-y-3'
        style={{ minHeight: '50px' }}
      >
        {contacts.map((contact, index) => (
          <DraggableCard
            key={contact.id}
            {...contact}
            index={index}
            columnId={id}
            moveCard={moveCard}
          />
        ))}
      </div>
    </div>
  );
};

export default DraggableColumn;
