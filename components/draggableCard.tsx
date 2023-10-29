import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Button } from './ui/button';
import { Contact } from '@/types';
const CardDragType = 'CARD';

const DraggableCard: React.FC<
  Contact & {
    index: number;
    columnId: number;
    moveCard: (
      fromIndex: number,
      toIndex: number,
      fromColumnId: number,
      toColumnId: number
    ) => void;
  }
> = ({
  assignee,
  dueDate,
  nextAction,
  notes,
  index,
  columnId,
  moveCard,
}) => {
  const ref = useRef(null);

  const [, connectDrag] = useDrag({
    type: CardDragType,
    item: { index, columnId },
  });

  const [, connectDrop] = useDrop({
    accept: CardDragType,
    hover: (item: { index: number; columnId: number }) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const fromColumnId = item.columnId;
      const toColumnId = columnId;

      if (dragIndex === hoverIndex && fromColumnId === toColumnId) {
        return;
      }

      moveCard(dragIndex, hoverIndex, fromColumnId, toColumnId);
      item.index = hoverIndex;
      item.columnId = toColumnId;
    },
  });

  connectDrag(ref);
  connectDrop(ref);

  return (
    <div ref={ref}>
      <div>
        <div className='contact p-1 flex-1 rounded bg-white shadow-lg'>
          <div className='flex'>Assignee: {assignee}</div>
          <div>
            Due Date: {dueDate}
            <br />
            Next Action: {nextAction}
            <br />
            Notes: {notes}
          </div>
          <div className='flex justify-end mt-2'>
            <Button variant={'secondary'}>Edit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DraggableCard;
