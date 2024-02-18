'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';

const MobileNav = () => {
  <header className='header'>
    <Link href='/' className='flex items-center gap-2 md:py-2'>
      <Image
        src='/assets/images/logo-text.svg'
        alt='logo'
        width={180}
        height={28}
        className='header-logo'
      />
    </Link>
    mobile nav
  </header>;
};

export default MobileNav;
