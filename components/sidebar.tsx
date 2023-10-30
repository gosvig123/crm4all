'use client';

import Link from 'next/link';
import {
  FaHome,
  FaDollarSign,
  FaAddressBook,
  FaUsers,
  FaPuzzlePiece,
  FaEnvelope,
} from 'react-icons/fa';

const ICON_SIZE = 18;
const TEXT_SIZE_CLASSES = 'text-md';
const GAP_SIZE_CLASSES = 'gap-2 md:gap-3';
const SIDEBAR_WIDTH_CLASSES = 'max-w-fit';

export default function Sidebar() {
  return (
    <div
      className={`min-h-full  px-4 py-6 hidden md:flex  flex-col justify-between flex-1 ${SIDEBAR_WIDTH_CLASSES} border border-dashed border-gray-300 bg-white`}
    >
      <div className='flex flex-col gap-10'>
        <div>this is a logo</div>
        <h1 className={`${TEXT_SIZE_CLASSES}`}>This is the</h1>

        <nav className='flex flex-col gap-3'>
          <Link
            href={'/'}
            className={`flex items-center ${GAP_SIZE_CLASSES} ${TEXT_SIZE_CLASSES} text-gray-700`}
          >
            <FaHome size={ICON_SIZE} />
            Home
          </Link>

          <Link
            href={'/opportunities'}
            className={`flex items-center ${GAP_SIZE_CLASSES} ${TEXT_SIZE_CLASSES} text-gray-700`}
          >
            <FaDollarSign size={ICON_SIZE} />
            Opportunities
          </Link>

          <Link
            href={'/contacts'}
            className={`flex items-center ${GAP_SIZE_CLASSES} ${TEXT_SIZE_CLASSES} text-gray-700`}
          >
            <FaAddressBook size={ICON_SIZE} />
            Contacts
          </Link>

          <a
            href='/team'
            className={`flex items-center ${GAP_SIZE_CLASSES} ${TEXT_SIZE_CLASSES} text-gray-700 hover:text-black`}
          >
            <FaUsers size={ICON_SIZE} />
            Team
          </a>
          <a
            href='/integrations'
            className={`flex items-center ${GAP_SIZE_CLASSES} ${TEXT_SIZE_CLASSES} text-gray-700 hover:text-black`}
          >
            <FaPuzzlePiece size={ICON_SIZE} />
            Integrations
          </a>
        </nav>
      </div>
      <div
        className={`flex items-center ${GAP_SIZE_CLASSES} ${TEXT_SIZE_CLASSES} text-gray-700`}
      >
        <FaEnvelope size={ICON_SIZE} />
        <div>
          <div>User Name</div>
        </div>
      </div>
    </div>
  );
}
