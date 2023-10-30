import React, { useState } from 'react';

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

  return (
    <div className='flex justify-between items-center mb-4'>
      {isEditing ? (
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
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button
          onClick={onDelete}
          className='text-red-500 text-xl font-bold'
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ColumnHeader;
