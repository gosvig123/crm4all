import Sidebar from '@/components/sidebar';

import * as React from 'react';

import { DataTableDemo } from '@/components/salesTable';

export default function Home() {
  return (
    <main className='flex min-h-screen min-w-screen'>
      <Sidebar />
      <div className='flex flex-auto p-10'>
        <DataTableDemo />
      </div>
    </main>
  );
}
