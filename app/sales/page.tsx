import Sidebar from '@/components/sidebar';

import * as React from 'react';


import KanbanBoard from '@/components/kanban';
export default function Home() {
  return (
    <main className='flex min-h-screen min-w-screen'>
      <Sidebar />
      <KanbanBoard />
    </main>
  );
}
