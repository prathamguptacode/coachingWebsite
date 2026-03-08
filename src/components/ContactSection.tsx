import { Mail, Phone, Instagram, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-bold tracking-widest uppercase text-primary mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground max-md:text-[1.8rem]">
              Ready to Begin Your Journey?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book a free 30-minute discovery call and let's explore how
              coaching can transform your life.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="https://api.whatsapp.com/send?phone=917985236926&text=Hello%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20about%20tuition%20classes"
              className="flex items-center justify-between rounded-xl border p-4 hover:bg-muted transition"
              target='_blank'
            >
              <div className="flex items-center gap-3">
                <FaWhatsapp size={20} className="text-primary" />
                <span className="font-medium">Chat on WhatsApp</span>
              </div>
              <span className="text-muted-foreground text-sm">→</span>
            </a>

            <a
              href="https://maps.app.goo.gl/zRMeoGxiAsxMHXKQ9"
              target="_blank"
              className="flex items-center justify-between rounded-xl border p-4 hover:bg-muted transition"
            >
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-primary" />
                <span className="font-medium">View on Maps</span>
              </div>
              <span className="text-muted-foreground text-sm">→</span>
            </a>

            <a
              href="#"
              className="flex items-center justify-between rounded-xl border p-4 hover:bg-muted transition"
            >
              <div className="flex items-center gap-3">
                <FaInstagram size={20} className="text-primary" />
                <span className="font-medium">Follow on Instagram</span>
              </div>
              <span className="text-muted-foreground text-sm">→</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="mailto:dakhsclasses@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" /> dakhsclasses@gmail.com
            </a>
            <a
              href="tel:+91 79852 36926"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" /> +91 79852 36926
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" /> @dakshclasses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
