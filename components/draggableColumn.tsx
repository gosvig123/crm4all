import { ColumnData } from '@/types';
import { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import DraggableCard from './draggableCard';
import ColumnHeader from './comlumnHeader';
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
    deleteColumn: (columnId: number) => void;
  }
> = ({
  id,
  title,
  contacts,
  index,
  moveColumn,
  moveCard,
  deleteColumn,
}) => {
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
  const [editableTitle, setEditableTitle] = useState(title);

  connectDrag(columnRef);
  connectColumnDrop(columnRef);
  connectCardDrop(cardContainerRef);

  const handleDeleteColumn = () => {
    deleteColumn(id);
  };

  const handleEditTitle = (newTitle: string) => {
    setEditableTitle(newTitle);
  };

  return (
    <div ref={columnRef} className='bg-gray-100 p-2 rounded'>
      <ColumnHeader
        title={title}
        onDelete={handleDeleteColumn} // <-- update this
        onEdit={handleEditTitle}
      />
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
