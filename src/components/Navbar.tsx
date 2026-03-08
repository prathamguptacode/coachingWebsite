import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LibraryBig } from 'lucide-react';
import { PiBooksFill } from 'react-icons/pi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Teachers', href: '#teachers' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a
          href="#home"
          className="flex items-center gap-2 font-body text-xl font-bold text-primary"
        >
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span>
              <PiBooksFill color="white" size={28} />
            </span>
          </div>
          Daksh Classes
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://api.whatsapp.com/send?phone=917985236926&text=Hello%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20about%20tuition%20classes"
            className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            target="_blank"
          >
            Start Chat
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-foreground py-2.5 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-border">
              <a
                href="https://api.whatsapp.com/send?phone=917985236926&text=Hello%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20about%20tuition%20classes"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-3 rounded-lg text-center hover:bg-primary/90 transition-colors"
              >
                Start Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
