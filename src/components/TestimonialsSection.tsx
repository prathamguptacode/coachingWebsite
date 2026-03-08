import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Pratham Gupta',
    role: 'Student',
    text: 'The teachers explain concepts very clearly and make sure every student understands the topic before moving on. The regular tests helped me stay consistent with my studies and improve my exam performance.',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    role: 'Parent',
    text: 'The classes are very well organized and the teachers focus on making every concept easy to understand. The regular practice sessions helped me gain more confidence during exams.',
    rating: 5,
  },
  {
    name: 'Raj Patel',
    role: 'Parent',
    text: 'I appreciate the dedication of the teachers and the attention given to every student. The regular tests and progress updates help parents stay informed about their child’s improvement.',
    rating: 4,
  },
  {
    name: 'Shivansh Pratap Singh',
    role: 'Student',
    text: 'The study materials and practice questions provided in class are very helpful. They helped me prepare better for my school exams and understand the topics more clearly.',
    rating: 5,
  },
  {
    name: 'Harish Sharma',
    role: 'Parent',
    text: 'Teachers here are very dedicated and always encourage students to do their best. The regular assessments also help track progress and identify areas to improve.',
    rating: 4,
  },
  {
    name: 'Krish Patel',
    role: 'Parent',
    text: 'We have seen a noticeable improvement in our child’s understanding of difficult topics. The teachers explain concepts patiently and make sure students are comfortable asking questions.',
    rating: 5,
  },
  {
    name: 'Dikhsha Yadav',
    role: 'Parent',
    text: 'The regular communication and progress updates from teachers are very helpful for parents. It gives us confidence that our child is receiving proper academic support.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-muted/30 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-8 left-4 w-16 h-16 bg-yellow-accent/20 rounded-full" />
      <div className="absolute bottom-8 right-4 w-12 h-12 bg-primary/10 rounded-full" />

      <div className="container relative">
        <div className="text-center max-w-lg mx-auto mb-10">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-3">
            Our Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground max-md:text-[1.8rem]">
            What Our Clients Say About Us
          </h2>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-bold text-lg text-foreground">
            {testimonials[0].name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {testimonials[0].role}
          </p>
          <div className="flex justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
            ))}
          </div>
          <p className="mt-5 text-muted-foreground leading-relaxed text-sm md:text-base">
            "{testimonials[0].text}"
          </p>
        </div>

        {/* All testimonials on mobile */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {testimonials.map((t) =>
            t.name == 'Pratham Gupta' ? null : (
              <div
                key={t.name}
                className="bg-background rounded-2xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{t.text}"
                </p>
                <div className="mt-4 pt-3 border-t border-border">
                  <p className="font-bold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
