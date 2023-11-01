'use client';
import Sidebar from '@/components/sidebar';
import { Switch } from '@/components/ui/switch';

import { useIsEditing } from '@/hooks/isEditingContext';
import KanbanBoard from '@/components/kanban';
export default function Opportunities() {
  const [isEditing, toggleEditing] = useIsEditing();

  const handleToggle = () => {
    toggleEditing();
  };

  return (
    <main className='flex min-h-screen min-w-screen'>
      <Sidebar />
      <KanbanBoard />
      <div className='flex flex-col'>
        Edit
        <Switch onCheckedChange={handleToggle} />
      </div>
    </main>
  );
}
