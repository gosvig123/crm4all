import Sidebar from '@/components/sidebar';
import TeamTable from '@/components/teamtable';
const teamPage = () => {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <TeamTable />
    </div>
  );
};

export default teamPage;
