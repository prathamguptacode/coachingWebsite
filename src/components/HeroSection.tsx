import heroImage from '@/assets/hero-coach.jpg';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 bg-hero-bg relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-24 left-4 w-12 h-12 bg-yellow-accent/30 rounded-full animate-float" />
      <div className="absolute bottom-20 right-8 w-8 h-8 bg-primary/20 rounded-full animate-float animation-delay-400" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-orange/20 rounded-full animate-float animation-delay-200" />

      <div className="container py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-up">
            <div className="inline-block bg-orange-light text-orange text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
              Quality Learning Guaranteed
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.15] text-foreground max-md:text-[1.8rem]">
              Find Your{' '}
              <span className=" relative">
                Perfect Coach
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M1 5.5C40 2 80 1 100 3C120 5 160 6 199 2.5"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md max-md:text-[14px]">
              Join hundreds of successful students at Daksh Classes. Expert
              guidance, proven results, and personalized learning for classes VI
              to XII.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=917985236926&text=Hello%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20about%20tuition%20classes"
                className="bg-secondary text-secondary-foreground font-bold px-7 py-3.5 rounded-lg hover:bg-secondary/90 transition-colors text-sm shadow-lg shadow-secondary/30 "
                target='_blank'
              >
                Get started
              </a>
            </div>
          </div>

          {/* Images grid */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden bg-blue-light aspect-square">
                  <img
                    src={heroImage}
                    alt="Professional life coach"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden bg-orange-light aspect-[4/3]">
                  <img
                    src={heroImage}
                    alt="Coaching session"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="rounded-2xl overflow-hidden bg-pink-light aspect-[4/3]">
                  <img
                    src={heroImage}
                    alt="Coach portrait"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden bg-blue-light aspect-square">
                  <img
                    src={heroImage}
                    alt="Group coaching"
                    className="w-full h-full object-cover scale-110"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
