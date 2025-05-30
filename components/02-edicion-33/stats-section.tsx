"use client";

import { useEffect, useState, useRef } from "react";

interface StatItemProps {
  title: string;
  value: number;
  suffix?: string;
  duration?: number;
  prefix?: string;
}

function StatItem({
  title,
  value,
  suffix = "",
  prefix,
  duration = 2000,
}: StatItemProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const increment = end / 40;
    const stepTime = Math.floor(duration / 40);

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isVisible]);

  return (
    <div
      className="relative flex flex-col items-center justify-center"
      ref={countRef}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="233"
        height="253"
        viewBox="0 0 235 255"
        fill="none"
        className="min-[320px]:h-auto min-[320px]:w-[90%] sm:h-[253px] sm:w-[233px]"
      >
        <path
          opacity="0.48"
          d="M0.62793 83.3417V171.626C0.62793 185.411 8.1166 198.169 20.2287 205.062L97.8829 249.204C110.028 256.096 124.972 256.096 137.084 249.204L214.739 205.062C226.883 198.169 234.339 185.411 234.339 171.626V83.3417C234.339 69.5572 226.851 56.7986 214.739 49.9063L137.084 5.76402C124.94 -1.12821 109.995 -1.12821 97.8829 5.76402L20.2287 49.9063C8.08404 56.7986 0.62793 69.5572 0.62793 83.3417Z"
          fill="#82B34A"
          stroke="#4B683A"
          strokeMiterlimit="10"
        />
      </svg>
      <div className="absolute flex h-[115px] w-full flex-col items-center justify-between">
        <h3 className="mb-2 max-w-[160px] text-center text-[18px] font-medium leading-none text-primary">
          {title}
        </h3>
        <div className="flex items-center text-[60px] font-medium leading-none text-primary">
          {prefix && <span>{prefix}</span>}
          {count}
          {suffix && (
            <span className="relative top-2 ml-2 text-3xl">{suffix}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export function StatsSection() {
  const stats = [
    {
      title: "Conferencias en simultáneo",
      value: 50,
    },
    {
      title: "Días",
      value: 2,
    },
    {
      title: "Disertantes",
      value: 3,
    },
    {
      title: "Asistentes",
      value: 12,
      suffix: " mil",
      prefix: "+",
    },
  ];

  return (
    <section className="bg-white px-4 pt-12 pb-7 md:px-8">
      <div className="mx-auto max-w-[1415px]">
        <div className="flex flex-wrap justify-center gap-[33px]">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              title={stat.title}
              value={stat.value}
              suffix={stat.suffix}
              duration={2000}
              prefix={stat.prefix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
