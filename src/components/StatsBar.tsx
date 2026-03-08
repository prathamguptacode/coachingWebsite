const stats = [
  { number: '500', label: 'Students Taught' },
  { number: '95%', label: 'Student Success Rate' },
  { number: '25', label: 'Years of Teaching' },
  { number: '20', label: 'Batches Running' },
];

const StatsBar = () => {
  return (
    <section className="bg-stats-bg py-8 md:py-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-stats-foreground">
                <div className=" flex items-center justify-center gap-0.5">
                  <div>{stat.number}</div>
                  {i != 1 ? <div className="h-[50%]  text-[24px] ">+</div> : null}
                </div>
              </div>
              <div className="text-sm text-stats-foreground/70 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
