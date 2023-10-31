import React, { useState } from 'react';
import { useIsEditing } from '@/hooks/isEditingContext';
import { Button } from './ui/button';
interface ColumnHeaderProps {
  title: string;
  onDelete: () => void;
  onEdit: (newTitle: string) => void;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({
  title,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    onEdit(newTitle);
    setIsEditing(false);
  };

  const [editing, setEditing] = useIsEditing();

  return (
    <div className='flex justify-between items-center mb-4'>
      {editing ? (
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <h2 className='text-xl font-semibold text-gray-700'>
          {title}
        </h2>
      )}
      <div>
        {editing && (
          <div className='flex gap-2'>
            <Button size={'sm'}>Update</Button>
            <Button
              onClick={onDelete}
              className='text-red-500 text-xl font-bold bg-transparent '
            >
              ×
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColumnHeader;
