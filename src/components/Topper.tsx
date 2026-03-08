import { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';

import topperAarav from '@/assets/image.png';
import topperSneha from '@/assets/image.png';
import topperRohan from '@/assets/image.png';
import topperAnanya from '@/assets/image.png';
import topperVikram from '@/assets/image.png';
import topperMeera from '@/assets/image.png';

const toppers = [
  {
    name: 'Pratham Gupta',
    class: 'Class 10',
    score: '98.6%',
    subject: 'Mathematics',
    year: '2025',
    photo: topperAarav,
  },
  {
    name: 'Sneha Verma',
    class: 'Class 12',
    score: '97.2%',
    subject: 'Science',
    year: '2025',
    photo: topperSneha,
  },
  {
    name: 'Rohan Patel',
    class: 'Class 10',
    score: '96.8%',
    subject: 'Overall',
    year: '2024',
    photo: topperRohan,
  },
  {
    name: 'Ananya Singh',
    class: 'Class 12',
    score: '95.4%',
    subject: 'Mathematics',
    year: '2024',
    photo: topperAnanya,
  },
  {
    name: 'Vikram Joshi',
    class: 'Class 10',
    score: '94.9%',
    subject: 'Science',
    year: '2023',
    photo: topperVikram,
  },
  {
    name: 'Meera Gupta',
    class: 'Class 12',
    score: '93.7%',
    subject: 'Overall',
    year: '2023',
    photo: topperMeera,
  },
];

const Topper = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [autoActive, setAutoActive] = useState(0);

  const active = hovered ?? autoActive;

  const nextAuto = useCallback(() => {
    setAutoActive((prev) => (prev + 1) % toppers.length);
  }, []);

  useEffect(() => {
    if (hovered !== null) return;
    const interval = setInterval(nextAuto, 3500);
    return () => clearInterval(interval);
  }, [hovered, nextAuto]);

  return (
    <section id='toppers' className="py-20 md:py-28 bg-background border-t border-border">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-3">
            Our Toppers
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground max-md:text-[1.8rem]">
            Results that speak.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Success stories that inspire the next generation.
          </p>
        </div>

        {/* List */}
        <div className="border-t border-border">
          {toppers.map((t, i) => (
            <div
              key={t.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setAutoActive(i)}
              className={`group flex items-center gap-4 md:gap-6 py-5 md:py-6 border-b border-border cursor-pointer transition-colors duration-200 ${
                i === active ? 'bg-muted/50' : 'hover:bg-muted/30'
              }`}
              style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
            >
              {/* Number */}
              <span
                className={`text-xs font-mono tabular-nums transition-colors duration-200 ${
                  i === active ? 'text-foreground' : 'text-muted-foreground/50'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Avatar */}
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 ring-2 transition-all duration-300 ${
                  i === active ? 'ring-foreground' : 'ring-border'
                }`}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <span
                className={`font-semibold text-sm md:text-base transition-colors duration-200 min-w-0 truncate ${
                  i === active ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {t.name}
              </span>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Meta — hidden on small */}
              <span className="hidden md:block text-xs text-muted-foreground">
                {t.class}
              </span>
              <span className="hidden md:block text-xs text-muted-foreground">
                {t.subject}
              </span>
              <span className="hidden md:block text-xs text-muted-foreground">
                {t.year}
              </span>

              {/* Score */}
              <span
                className={`text-sm font-bold tabular-nums transition-colors duration-200 ${
                  i === active ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {t.score}
              </span>

              {/* Arrow */}
              <ArrowUpRight
                className={`w-4 h-4 shrink-0 transition-all duration-200 ${
                  i === active
                    ? 'text-foreground opacity-100 translate-x-0'
                    : 'text-muted-foreground opacity-0 -translate-x-1'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topper;
