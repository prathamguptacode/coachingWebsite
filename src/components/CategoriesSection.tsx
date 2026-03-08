import { FlaskConical, LibraryBig, Pi, BookA, Cpu, Landmark, WalletCards  } from "lucide-react";
import { FaChessKing } from "react-icons/fa";

const categories = [
  { icon: LibraryBig, label: "Physics", color: "bg-blue-light text-primary" },
  { icon: FlaskConical, label: "Chemistry", color: "bg-orange-light text-orange" },
  { icon: Pi, label: "Maths", color: "bg-pink-light text-pink" },
  { icon: BookA, label: "English", color: "bg-green-light text-green" },
  { icon: FaChessKing, label: "Chess", color: "bg-green-light text-green" },
  { icon: Cpu, label: "Computers", color: "bg-blue-light text-primary" },
  { icon: Landmark, label: "Commerce", color: "bg-orange-light text-orange" },
  { icon: WalletCards, label: "Accounts", color: "bg-pink-light text-pink" },
];

const CategoriesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-lg mx-auto mb-10">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-3">
            Comprehensive coaching across all major subjects
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground max-md:text-[1.8rem]">
            Our Coaching Areas
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className="flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3.5 hover:shadow-md hover:border-primary/30 transition-all duration-200 group"
            >
              <div className={`w-9 h-9 rounded-lg ${cat.color} flex items-center justify-center flex-shrink-0`}>
                <cat.icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
