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

        // Calculate progress percentages - inverted logic
        const secondsProgress = (((60 - seconds) % 60) / 60) * 100
        const minutesProgress = (((60 - minutes) % 60) / 60) * 100
        const hoursProgress = (((24 - hours) % 24) / 24) * 100
        const daysProgress = totalDays > 0 ? (days / totalDays) * 100 : 0

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
  // Create a conic gradient that grows clockwise - inverted logic
  const conicGradient = `conic-gradient(transparent ${100 - progress}%, white ${100 - progress}%)`

  return (
    <div className="relative w-28 h-28 md:w-36 md:h-36">
      {/* Background hexagon */}
      <div
        className="absolute inset-0 bg-[#64B33D] rounded-[10px]"
        style={{ clipPath: "polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%)" }}
      ></div>

      {/* Progress border */}
      <div
        className="absolute inset-0 rounded-[10px] transition-all duration-300"
        style={{
          background: conicGradient,
          clipPath: "polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%)",
          padding: "2px",
        }}
      >
        <div
          className="w-full h-full bg-[#64B33D] rounded-[8px]"
          style={{ clipPath: "polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%)" }}
        ></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl md:text-5xl font-bold text-white">{value}</span>
        <span className="text-sm md:text-base text-white">{label}</span>
      </div>
    </div>
  )
}
