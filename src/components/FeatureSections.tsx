const FeatureSections = () => {
  return (
    <div className="space-y-0" id="teachers">
      {/* Feature 1 — Image left, text right */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-yellow-accent/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary/10 rounded-full -z-10" />
              <img
                src="./duck.jpeg"
                alt="Personalized online coaching"
                className="w-full rounded-2xl object-cover aspect-[4/3] shadow-lg"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-orange mb-3">
                Focused on Concept Clarity
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                Guiding Students Toward Academic Confidence
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                I focus on helping students truly understand the concepts rather
                than simply memorizing answers. With clear explanations,
                practical examples, and regular practice, students develop
                stronger problem-solving skills and confidence in their studies.
                My goal is to make learning structured, engaging, and supportive
                so that every student can steadily improve their academic
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 — Text left, image right */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-xs font-bold tracking-widest uppercase text-orange mb-3">
                Supportive and Structured Teaching
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                Helping Students Learn With Confidence
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                My teaching approach combines clear instruction with regular
                practice and feedback. I work closely with students to identify
                areas that need improvement and provide guidance to strengthen
                their understanding. By maintaining a positive and disciplined
                learning environment, I help students stay motivated and perform
                better in their exams.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange/10 rounded-full -z-10" />
              <img
                src="./duck.jpeg"
                alt="Qualified professional coaches"
                className="w-full rounded-2xl object-cover aspect-[4/3] shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSections;
