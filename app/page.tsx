import Sidebar from '../components/sidebar';

import * as React from 'react';

import { DataTableDemo } from '@/components/teamtable';

export default function Home() {
  return (
    <main className='flex min-h-screen min-w-screen'>
      <Sidebar />
    </main>
  );
}
