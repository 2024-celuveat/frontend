import Link from 'next/link';

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 flex h-60 w-full max-w-[495px] justify-around border-t bg-white px-24 py-8">
      <Link href="/" className="flex flex-col items-center gap-6">
        <div className="h-24 w-24 rounded-full bg-gray-100"></div>
        <span>아이콘</span>
      </Link>
      <Link href="" className="flex flex-col items-center gap-6">
        <div className="h-24 w-24 rounded-full bg-gray-100"></div>
        <span>아이콘</span>
      </Link>
      <Link href="" className="flex flex-col items-center gap-6">
        <div className="h-24 w-24 rounded-full bg-gray-100"></div>
        <span>아이콘</span>
      </Link>
      <Link href="" className="flex flex-col items-center gap-6">
        <div className="h-24 w-24 rounded-full bg-gray-100"></div>
        <span>아이콘</span>
      </Link>
    </nav>
  );
};

export default BottomNavbar;
