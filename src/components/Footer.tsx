import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { PiBooksFill } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="flex justify-between gap-8 mb-10 flex-col">
          <div> 
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span>
                  <PiBooksFill color="white" size={18} />
                </span>
              </div>
              <span className="text-lg font-bold text-background">
                Daksh Classes
              </span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed ">
              Professional coaching to help you unlock your potential and
              transform your life.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm text-background mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3 ">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4 text-background" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Daksh Classes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
