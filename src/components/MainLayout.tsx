'use client';

import { routes } from '@/constants/routes';
import { useWindowSize } from '@/hooks/useWindowSize';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';
import { NavbarItem } from './NavbarItem';
import { Mali } from 'next/font/google';

const maliFont = Mali({ subsets: ['latin'], weight: ['500'] });

export const MainLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useWindowSize().isMobile;

  const toggleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Fragment>
      <main className={`${isMobile ? 'pt-4' : 'pt-6'}`}>
        {isMobile ? (
          <Fragment>
            <div className="flex items-center justify-between mx-4">
              <span
                className={`cursor-pointer font-semibold text-gray-900 text-2xl hover:text-blue-500 ${maliFont.className}`}
              >
                Annibuliful
              </span>
              <span>
                {isMobileMenuOpen ? (
                  <XMarkIcon
                    className="h-6 w-6"
                    onClick={toggleMobileMenuOpen}
                  />
                ) : (
                  <Bars3Icon
                    className="h-6 w-6"
                    onClick={toggleMobileMenuOpen}
                  />
                )}
              </span>
            </div>

            <div className="flex flex-col mt-2 absolute">
              {isMobileMenuOpen
                ? routes.map((route) => (
                    <div key={route.title} className="my-1">
                      <NavbarItem
                        title={route.title}
                        href={route.href}
                      />
                    </div>
                  ))
                : null}
            </div>
          </Fragment>
        ) : (
          <div className="flex items-end mx-6">
            <span
              className={`mx-6 cursor-pointer font-semibold text-gray-900 text-2xl hover:text-blue-500 ${maliFont.className}`}
            >
              Annibuliful
            </span>
            {routes.map((route) => (
              <NavbarItem
                key={route.title}
                title={route.title}
                href={route.href}
              />
            ))}
          </div>
        )}
      </main>
      {children}
    </Fragment>
  );
};
