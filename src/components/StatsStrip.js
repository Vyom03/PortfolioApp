import React, { useRef, useState, useEffect } from 'react';
import './StatsStrip.css';

const STATS = [
  { value: 4,  suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Projects Built'   },
  { value: 40, suffix: '+', label: 'Technologies'     },
  { value: 3,  suffix: '',  label: 'Companies'        },
];

function animateCount(from, to, duration, onUpdate, onDone) {
  const start = performance.now();
  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    onUpdate(Math.round(from + (to - from) * eased));
    if (progress < 1) requestAnimationFrame(tick);
    else onDone();
  }
  requestAnimationFrame(tick);
}

function StatsStrip() {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const [triggered, setTriggered] = useState(false);
  const stripRef = useRef(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
          STATS.forEach((stat, i) => {
            animateCount(0, stat.value, 1200, (val) => {
              setCounts((prev) => {
                const next = [...prev];
                next[i] = val;
                return next;
              });
            }, () => {});
          });
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [triggered]);

  return (
    <div ref={stripRef} className="stats-strip">
      {STATS.map((stat, i) => (
        <React.Fragment key={stat.label}>
          <div className="stat-item">
            <span className="stat-number">{counts[i]}{stat.suffix}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
          {i < STATS.length - 1 && <div className="stat-divider" />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default StatsStrip;
