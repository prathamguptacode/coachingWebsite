import coachingOnline from "@/assets/coaching-online.jpg";
import coachingQualified from "@/assets/coaching-qualified.jpg";
import { Facebook, Twitter, Instagram } from "lucide-react";

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
                src={coachingOnline}
                alt="Personalized online coaching"
                className="w-full rounded-2xl object-cover aspect-[4/3] shadow-lg"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-orange mb-3">
                Customize With Your Schedule
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                Personalized Professional Online Coach on Your Schedule
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                Our scheduling system allows you to select based on your free time. Keep track of your progress and coaching schedules, and never miss your sessions. The best online coaching scheduling system with easy accessibility.
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
                Customize With Your Schedule
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                Talented and Qualified Coaches to Serve You for Help
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                Our coaching team allows you to select based on your free time. Keep track of your progress and coaching schedules, and never miss your sessions. The best online coaching system with easy accessibility.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange/10 rounded-full -z-10" />
              <img
                src={coachingQualified}
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
