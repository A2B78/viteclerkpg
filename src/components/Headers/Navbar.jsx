import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const role = user?.publicMetadata?.role;
  const isAdmin = role === 'admin';

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Recherche', href: '/search' },
    { label: 'Nouveau', href: '/new' },
    { label: 'Occasion', href: '/preowned' },
  ];

  const NavLinks = ({ onClick }) => (
    <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-4 lg:space-y-0 text-lg">
      {navItems.map((item) => (
        <li key={item.label} onClick={onClick}>
          <a
            href={item.href}
            className="hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        </li>
      ))}
      {isAdmin && (
        <li>
          <a
            href="/admin"
            className="text-red-600 font-semibold hover:text-red-700 transition-colors"
          >
            Admin Panel
          </a>
        </li>
      )}
    </ul>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="text-3xl font-semibold">
          DevopsHub
        </a>

        {/* Liens navigation desktop */}
        <div className="hidden lg:block">
          <NavLinks />
        </div>

        {/* Actions utilisateur + menu mobile */}
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <>
              <UserButton />
              <Button variant="outline" className="hidden lg:inline-block">
                Dashboard
              </Button>
              {isAdmin && (
                <Button
                  variant="destructive"
                  className="hidden lg:inline-block"
                  asChild
                >
                  <a href="/admin">Admin</a>
                </Button>
              )}
            </>
          ) : (
            <SignInButton mode="modal" />
          )}

          {/* Menu mobile avec Popover */}
          <div className="lg:hidden flex items-center space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className={"hover:shadow-lg hover:shadow-blue-500/50 text-2xl"}>
                  <Menu className="h-8 w-8" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-4 space-y-4 text-center hover:shadow-lg">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-sm font-medium hover:text-primary transition-colors hover:shadow-md"
                  >
                    {item.label}
                  </a>
                ))}

                {isAdmin && (
                  <a
                    href="/admin"
                    className="block text-sm font-semibold text-red-600 hover:text-red-700"
                  >
                    Admin Panel
                  </a>
                )}

                {isSignedIn && (
                  <Button variant="outline" className="w-full">
                    Dashboard
                  </Button>
                )}
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
