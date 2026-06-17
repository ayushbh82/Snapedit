import { useEffect, useState } from 'react';
import { Calendar, Users, CheckCircle, Zap } from 'lucide-react';

export default function Stats() {
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [delivery, setDelivery] = useState(0);

  useEffect(() => {
    // Elegant incremental ticker
    const duration = 2000; // 2 seconds animation
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      
      // Calculate eased progress
      const progress = currentStep / steps;
      const easeOutQuad = (t: number) => t * (2 - t);
      const easeProgress = easeOutQuad(progress);

      setYears(Math.min(2, Math.floor(easeProgress * 2)));
      setClients(Math.min(25, Math.floor(easeProgress * 25)));
      setProjects(Math.min(100, Math.floor(easeProgress * 100)));
      setDelivery(Math.min(24, Math.floor(easeProgress * 24)));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      id: 'years',
      value: years,
      suffix: '+ Years',
      label: 'Professional Experience',
      icon: Calendar,
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 'clients',
      value: clients,
      suffix: '+ Creators',
      label: 'Happy Global Clients',
      icon: Users,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 'projects',
      value: projects,
      suffix: '+',
      label: 'Completed Projects',
      icon: CheckCircle,
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 'delivery',
      value: delivery,
      suffix: '-Hour',
      label: 'Fast Delivery Rate Available',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section id="stats" className="py-16 bg-[#0A0A0A] relative overflow-hidden text-white">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-brand-orange/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id}
                className="group flex flex-col items-center text-center p-6 bg-[#141414] border border-white/5 rounded-3xl transition-all duration-300 relative hover:border-white/10 shadow-lg"
              >
                {/* Styled icon badge */}
                <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-white/5 flex items-center justify-center text-brand-orange group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-brand-orange" />
                </div>

                {/* Animated value text */}
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-brand-orange">
                    {stat.id === 'delivery' ? `${stat.value}` : stat.value}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-white/90 ml-0.5">
                    {stat.id === 'years' ? '+' : stat.id === 'clients' ? '+' : stat.id === 'projects' ? '+' : 'h'}
                  </span>
                </div>

                {/* Stat label styled specifically like Bento markup */}
                <p className="mt-2 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                  {stat.id === 'years' ? 'Years Exp' : stat.id === 'clients' ? 'Happy Clients' : stat.id === 'projects' ? 'Completed Projects' : 'Fast Turnaround'}
                </p>
                
                {/* Descriptive sublabel */}
                <p className="mt-1 text-[11px] text-white/30 hidden sm:block">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
