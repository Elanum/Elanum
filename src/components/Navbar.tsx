import { MenuIcon } from '@heroicons/react/solid';
import cn from 'classnames';
import Link from 'next/link';
import { FC, useState } from 'react';

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={cn('bg-white', 'shadow-lg', 'p-3')}>
      <nav className={cn('container', 'flex', 'flex-wrap', 'items-center')}>
        <Link href="/">
          <a className={cn('inline-flex')}>Elanum</a>
        </Link>

        <button
          type="button"
          className={cn('md:hidden', 'ml-auto')}
          onClick={toggleMenu}
        >
          <MenuIcon className={cn('h-6', 'w-6')} />
        </button>
        <div
          className={cn(
            { hidden: !menuOpen },
            'w-full',
            'md:inline-flex',
            'md:flex-grow',
            'md:w-auto'
          )}
        >
          <div
            className={cn(
              'md:inline-flex',
              'md:flex-row',
              'md:ml-auto',
              'md:w-auto',
              'w-full',
              'md:items-center',
              'items-start ',
              'flex',
              'flex-col',
              'md:h-auto'
            )}
          >
            <Link href="/posts">
              <a>Blog</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
