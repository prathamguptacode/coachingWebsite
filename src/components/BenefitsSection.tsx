import { Users, Clock, MessageSquare, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Industry Leaders',
    description:
      'Our Teachers comprises experienced educators with proven track records of student success.',
    color: 'bg-blue-light text-primary',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'Our coaches are always available to support you as quickly and conveniently as possible.',
    color: 'bg-orange-light text-orange',
  },
  {
    icon: MessageSquare,
    title: 'Personalized Approach',
    description:
      'Small batches and individual attention to ensure each student reaches their full potential',
    color: 'bg-pink-light text-pink',
  },
  {
    icon: DollarSign,
    title: 'Affordable Prices',
    description: 'Choose an expert coach based on your budget and preferences.',
    color: 'bg-green-light text-green',
  },
];
const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24" id='about'>
      <div className="container">
        <div className="text-center max-w-lg mx-auto mb-12">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight max-md:text-[1.8rem]">
            25+ Years of Excellence
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-background rounded-2xl p-5 md:p-6 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div
                className={`w-12 h-12 rounded-xl ${b.color} flex items-center justify-center mx-auto mb-4`}
              >
                <b.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-center">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
