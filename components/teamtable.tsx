// TeamTable.tsx
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from '@/components/ui/table';
import { Button } from './ui/button';

type TeamMember = {
  id: string;
  name: string;
  role: string;
  email: string;
};

const teamData: TeamMember[] = [
  {
    id: '1',
    name: 'Alice',
    role: 'Developer',
    email: 'alice@example.com',
  },
  {
    id: '2',
    name: 'Bob',
    role: 'Designer',
    email: 'bob@example.com',
  },
];

const TeamTable: React.FC = () => {
  return (
    <div className=' w-full p-4'>
      <div className='flex justify-end items-center'>
        <Button>Add Member</Button>
      </div>
      <Table className='mt-5'>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teamData.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.id}</TableCell>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>
                <Button
                  variant={'outline'}
                  className='border border-b-2 border-black bg-transparent text-black'
                >
                  Edit Member
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeamTable;
