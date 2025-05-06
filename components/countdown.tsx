"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface TimeProgress {
  daysProgress: number
  hoursProgress: number
  minutesProgress: number
  secondsProgress: number
  totalDays: number
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [progress, setProgress] = useState<TimeProgress>({
    daysProgress: 0,
    hoursProgress: 0,
    minutesProgress: 0,
    secondsProgress: 0,
    totalDays: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-08-06T00:00:00")
    const totalDays = Math.floor((+targetDate - +new Date()) / (1000 * 60 * 60 * 24))

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = +targetDate - +now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        // Calculate progress percentages - direct calculation for growing border
        const secondsProgress = (seconds / 60) * 100
        const minutesProgress = (minutes / 60) * 100
        const hoursProgress = (hours / 24) * 100
        const daysProgress = totalDays > 0 ? ((totalDays - days) / totalDays) * 100 : 0

        setTimeLeft({ days, hours, minutes, seconds })
        setProgress({
          daysProgress,
          hoursProgress,
          minutesProgress,
          secondsProgress,
          totalDays,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 100) // Update more frequently for smoother animation

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="flex flex-wrap justify-center md:justify-start gap-6">
        <CountdownItem value={timeLeft.days} label="Días" progress={progress.daysProgress} />
        <CountdownItem value={timeLeft.hours} label="Horas" progress={progress.hoursProgress} />
        <CountdownItem value={timeLeft.minutes} label="Minutos" progress={progress.minutesProgress} />
        <CountdownItem value={timeLeft.seconds} label="Segundos" progress={progress.secondsProgress} />
      </div>
    </div>
  )
}

function CountdownItem({ value, label, progress }: { value: number; label: string; progress: number }) {
  // The SVG path for the hexagon with rounded corners
  const hexPath =
    "M0 66.6727V141.197C0 151.701 5.625 161.417 14.7708 166.669L79.5417 203.931C88.6875 209.183 99.9375 209.183 109.062 203.931L173.833 166.669C182.979 161.417 188.604 151.701 188.604 141.197V66.6727C188.604 56.1687 182.979 46.4535 173.833 41.2015L109.062 3.93925C99.9167 -1.31276 88.6667 -1.31276 79.5417 3.93925L14.7708 41.2015C5.625 46.4535 0 56.1687 0 66.6727Z"

  // Calculate the perimeter of the path (approximate)
  const pathLength = 600

  return (
    <div className="relative w-28 h-28 md:w-36 md:h-36">
      {/* SVG container */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 189 208" preserveAspectRatio="none">
        {/* Green background */}
        <path d={hexPath} fill="#64B33D" />

        {/* Animated white border that grows clockwise */}
        <path
          d={hexPath}
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength - (pathLength * progress) / 100}
          className="transition-all duration-300"
        />
      </svg>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl md:text-5xl font-bold text-white">{value}</span>
        <span className="text-sm md:text-base text-white">{label}</span>
      </div>
    </div>
  )
}
