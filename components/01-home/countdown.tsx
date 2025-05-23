"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeProgress {
  daysProgress: number;
  hoursProgress: number;
  minutesProgress: number;
  secondsProgress: number;
  totalDays: number;
}

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [progress, setProgress] = useState<TimeProgress>({
    daysProgress: 0,
    hoursProgress: 0,
    minutesProgress: 0,
    secondsProgress: 0,
    totalDays: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-08-06T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = +targetDate - +now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        // Para el caso de 'Días', progreso desde 100
        const totalDays = 100;
        let daysElapsed = totalDays - days;
        if (daysElapsed < 0) daysElapsed = 0;
        if (daysElapsed > totalDays) daysElapsed = totalDays;
        const daysProgress = (daysElapsed / totalDays) * 100;
        const secondsProgress = (seconds / 60) * 100;
        const minutesProgress = (minutes / 60) * 100;
        const hoursProgress = (hours / 24) * 100;

        setTimeLeft({ days, hours, minutes, seconds });
        setProgress({
          daysProgress,
          hoursProgress,
          minutesProgress,
          secondsProgress,
          totalDays,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 100); // Update more frequently for smoother animation

    return () => clearInterval(timer);
  }, []);
  const t = useTranslations("countdown");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial="hidden"
        whileInView="visible"
        variants={list}
      >
        <motion.div variants={item}>
          <CountdownItem
            value={timeLeft.days}
            label={t("dias")}
            progress={progress.daysProgress}
          />
        </motion.div>
        <motion.div variants={item}>
          <CountdownItem
            value={timeLeft.hours}
            label={t("horas")}
            progress={progress.hoursProgress}
          />
        </motion.div>
        <motion.div variants={item}>
          <CountdownItem
            value={timeLeft.minutes}
            label={t("minutos")}
            progress={progress.minutesProgress}
          />
        </motion.div>
        <motion.div variants={item}>
          <CountdownItem
            value={timeLeft.seconds}
            label={t("segundos")}
            progress={progress.secondsProgress}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

function CountdownItem({
  value,
  label,
  progress,
}: {
  value: number;
  label: string;
  progress: number;
}) {
  // The SVG path for the hexagon with rounded corners
  const hexPath =
    "M0 66.6727V141.197C0 151.701 5.625 161.417 14.7708 166.669L79.5417 203.931C88.6875 209.183 99.9375 209.183 109.062 203.931L173.833 166.669C182.979 161.417 188.604 151.701 188.604 141.197V66.6727C188.604 56.1687 182.979 46.4535 173.833 41.2015L109.062 3.93925C99.9167 -1.31276 88.6667 -1.31276 79.5417 3.93925L14.7708 41.2015C5.625 46.4535 0 56.1687 0 66.6727Z";

  // Ángulo del gradiente (0 a 360)
  const angle =
    label === "Días" || label === "Days"
      ? ((100 - progress) / 100) * 360
      : (progress / 100) * 360;

  return (
    <div className="relative h-28 w-28 md:h-[207px] md:w-[207px]">
      {/* SVG blanco detrás con borde animado */}
      <svg
        className="absolute inset-0 mx-auto h-full w-auto"
        viewBox="0 0 189 208"
        preserveAspectRatio="none"
        style={{
          zIndex: 1,
          maskImage: `conic-gradient(from 80deg at 50% 50%, transparent ${angle}deg, white 0deg)`,
          WebkitMaskImage: `conic-gradient(from 80deg at 50% 50%,transparent ${angle}deg, white 0deg)`,
          transition: "mask-image 0.2s linear, -webkit-mask-image 0.2s linear",
          transform: "scale(-1.03, 1.03)",
        }}
      >
        <path d={hexPath} fill="#fff" />
      </svg>
      {/* SVG verde al frente */}
      <div className="relative h-full w-full">
        <svg
          className="absolute inset-0 mx-auto h-full w-auto"
          viewBox="0 0 189 208"
          preserveAspectRatio="none"
          style={{ zIndex: 2 }}
        >
          <path d={hexPath} fill="#64B33D" />
        </svg>
        {/* Content */}
        <div
          className="absolute inset-0 flex w-full flex-col items-center justify-center md:gap-4"
          style={{ zIndex: 3 }}
        >
          <span className="relative md:top-2 text-4xl font-bold text-white md:text-[80px]">
            {String(value).padStart(2, "0")}
          </span>
          <span className="relative md:top-2 text-center text-sm text-white md:text-2xl">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
