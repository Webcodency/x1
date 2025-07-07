'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown,
  Code2,
  ExternalLink
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'UI/UX Design', href: '/services/design' },
        { name: 'Web Development', href: '/services/development' },
        { name: 'E-Commerce', href: '/services/ecommerce' },
        { name: 'SEO Optimization', href: '/services/seo' },
        { name: 'CMS Solutions', href: '/services/cms' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setIsOpen(!isOpen);
  const closeMobile = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container-width section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            onClick={closeMobile}
          >
            <div className="relative">
              <Code2 className="h-8 w-8 text-primary-600 group-hover:text-primary-700 transition-colors" />
              <div className="absolute inset-0 bg-primary-600 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Web<span className="text-primary-600">Codency</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                      pathname.startsWith(item.href)
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}>
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2"
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link
              href="/contact"
              className="btn-primary flex items-center space-x-2"
            >
              <span>Get Quote</span>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMobile}
              className="p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className={`block px-4 py-3 text-base font-medium transition-colors ${
                        pathname === item.href
                          ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={closeMobile}
                            className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="block mx-4 btn-primary text-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navigation;