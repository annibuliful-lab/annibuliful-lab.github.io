import Link from 'next/link';

export type NavbarItemProps = {
  title: string;
  isActive?: boolean;
  href: string;
};

export const NavbarItem = ({
  title,
  isActive = false,
  href,
}: NavbarItemProps) => {
  return (
    <Link href={href}>
      <span
        className={`mx-6 cursor-pointer font-semibold text-gray-600 hover:text-blue-500 ${
          isActive ? 'text-blue-500' : 'text-gray-600'
        }`}
      >
        {title}
      </span>
    </Link>
  );
};
