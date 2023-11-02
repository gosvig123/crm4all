'use client';
import Sidebar from '@/components/sidebar';
import { Switch } from '@/components/ui/switch';

import { editKanban } from '@/signals/signals';
import KanbanBoard from '@/components/kanban';
export default function Opportunities() {
  const handleToggle = () => {
    editKanban.value = !editKanban.value;
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
