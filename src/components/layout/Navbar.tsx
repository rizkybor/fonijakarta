"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Map, Users, Calendar, Info, Phone, Home, Newspaper } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pages with dark hero sections where navbar text should be white initially
  const isDarkHeroPage = false; // pathname?.startsWith('/maps');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isTextWhite = isDarkHeroPage && !isScrolled && !isMobileMenuOpen;

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Profil', href: '/profil', icon: Info },
    { name: 'Berita', href: '/berita', icon: Newspaper },
    { name: 'Event', href: '/events', icon: Calendar },
    { name: 'Galeri Peta', href: '/maps', icon: Map },
    { name: 'Keanggotaan', href: '/keanggotaan', icon: Users },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_4px_30px_rgb(0,0,0,0.03)] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50 relative">
            <div className="relative w-32 h-10 md:w-36 md:h-12 flex items-center transition-transform hover:scale-105 duration-300">
              <Image
                src="/logo/logo-foni.png"
                alt="FONI DKI Jakarta Logo"
                width={220}
                height={64}
                priority
                className={`w-full h-full object-contain object-left ${
                  isTextWhite
                    ? 'drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]'
                    : 'drop-shadow-[0_8px_18px_rgba(15,23,42,0.12)]'
                }`}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2.5 text-sm font-bold transition-all duration-300 rounded-full group overflow-hidden ${
                    isActive 
                      ? (isTextWhite ? 'text-white' : 'text-[var(--color-foni-navy)]')
                      : (isTextWhite ? 'text-white/70 hover:text-white' : 'text-slate-500 hover:text-slate-900')
                  }`}
                >
                  {/* Hover background effect */}
                  <span className={`absolute inset-0 w-full h-full rounded-full transition-transform duration-300 origin-center scale-0 group-hover:scale-100 ${
                    isTextWhite ? 'bg-white/10' : 'bg-slate-100'
                  } -z-10`}></span>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                      isTextWhite ? 'bg-[var(--color-foni-orange)]' : 'bg-[var(--color-foni-orange)]'
                    }`}></span>
                  )}
                  
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50 relative">
            <Link
              href="/contact"
              className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg ${
                isTextWhite
                  ? "bg-white text-[var(--color-foni-navy)] hover:bg-slate-50 shadow-white/20"
                  : "bg-[var(--color-foni-navy)] text-white hover:bg-slate-800 shadow-[var(--color-foni-navy)]/20"
              }`}
            >
              Hubungi Kami
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2.5 rounded-full transition-colors ${
                isMobileMenuOpen 
                  ? 'bg-slate-100 text-slate-900' 
                  : (isTextWhite ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-50 text-slate-600 hover:bg-slate-100')
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[calc(100vh-72px)] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col p-6 gap-2 bg-white h-[calc(100vh-72px)] overflow-y-auto">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">Menu Navigasi</p>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-4 p-4 rounded-2xl font-bold transition-all duration-300 ${
                    isActive 
                      ? "bg-[var(--color-foni-navy)]/5 text-[var(--color-foni-navy)]" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? "bg-[var(--color-foni-navy)]/10 text-[var(--color-foni-navy)]" : "bg-slate-100 text-slate-400"
                  }`}>
                    <link.icon className="w-5 h-5" />
                  </div>
                  {link.name}
                </Link>
              );
            })}

            <div className="mt-8 pt-8 border-t border-slate-100">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl font-bold bg-[var(--color-foni-navy)] text-white hover:bg-slate-800 transition-colors shadow-lg shadow-[var(--color-foni-navy)]/20"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-500"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
