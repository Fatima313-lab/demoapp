import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';

const StatsSection = () => {
  // ✅ Wrap stats in useMemo to keep it stable across renders
  const stats = useMemo(
    () => [
      { label: 'Years Experience', value: 10, suffix: '+' },
      { label: 'Projects Completed', value: 50, suffix: '+' },
      { label: 'Happy Clients', value: 50, suffix: '+' },
      { label: 'On-time delivery', value: 100, suffix: '%' }, // static
    ],
    []
  );

  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasAnimated = useRef(false);
  const sectionRef = useRef(null);

  // ✅ Animate counts function
  const animateCounts = useCallback(() => {
    const duration = 3000; // animation duration in ms
    const start = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setCounts(
        stats.map((stat) => Math.ceil(stat.value * progress))
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCounts(stats.map((stat) => stat.value));
      }
    };

    requestAnimationFrame(step);
  }, [stats]); // ✅ stats is now stable

  useEffect(() => {
    const section = sectionRef.current; // copy ref to avoid warning
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          animateCounts();
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [animateCounts]);

  return (
    <section className="section stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-number">
                {stat.label === 'Support Available'
                  ? '24/7'
                  : counts[i] + stat.suffix}
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
