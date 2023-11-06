'use client';
import Sidebar from '@/components/sidebar';
import { Switch } from '@/components/ui/switch';

import { editKanban } from '@/signals/signals';
import KanbanBoard from '@/components/kanban';
import { Suspense } from 'react';
export default function Opportunities() {
  const handleToggle = () => {
    editKanban.value = !editKanban.value;
  };

  return (
    <main className='flex min-h-screen min-w-screen'>
      <Sidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <KanbanBoard />
        <div className='flex flex-col'>
          Edit
          <Switch onCheckedChange={handleToggle} />
        </div>
      </Suspense>
    </main>
  );
}
