import {
  FaHome,
  FaDollarSign,
  FaAddressBook,
  FaUsers,
  FaPuzzlePiece,
  FaEnvelope,
} from 'react-icons/fa';

// Constants for easy adjustments
const ICON_SIZE = 18;
const TEXT_SIZE_CLASSES = 'text-lg md:text-xl'; // Adjust text size classes here
const GAP_SIZE_CLASSES = 'gap-2 md:gap-3'; // Adjust gap size classes here
const SIDEBAR_WIDTH_CLASSES = 'max-w-fit'; // Adjust sidebar width classes here

export default function Sidebar() {
  return (
    <div
      className={`min-h-full p-3 md:p-4 lg:p-6 flex flex-col justify-between flex-1 ${SIDEBAR_WIDTH_CLASSES} border border-dashed border-gray-300 bg-white`}
    >
      <div className='flex flex-col gap-10'>
        <div>this is a logo</div>
        <h1 className={`${TEXT_SIZE_CLASSES}`}>
          This is the primary header
        </h1>

        <nav className='flex flex-col gap-3'>
          <a
            href='/home'
            className={`flex items-center ${GAP_SIZE_CLASSES} ${TEXT_SIZE_CLASSES} text-gray-700 hover:text-black`}
          >
            <FaHome size={ICON_SIZE} />
            Home
          </a>
          <a
            href='/sales'
            className={`flex items-center ${GAP_SIZE_CLASSES} ${TEXT_SIZE_CLASSES} text-gray-700 hover:text-black`}
          >
            <FaDollarSign size={ICON_SIZE} />
            Sales
          </a>
          <a
            href='/contacts'
            className={`flex items-center ${GAP_SIZE_CLASSES} ${TEXT_SIZE_CLASSES} text-gray-700 hover:text-black`}
          >
            <FaAddressBook size={ICON_SIZE} />
            Contacts
          </a>
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
          <div>user@example.com</div>
        </div>
      </div>
    </div>
  );
}
