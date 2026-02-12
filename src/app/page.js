"use client"
import { useState } from "react"
import HeartGame from "./components/HeartGame"
import Letter from "./components/Letter"

export default function Home() {
  const [win, setWin] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200">
      {!win && <HeartGame onWin={() => setWin(true)} />}
      {win && <Letter />}
    </div>
  )
}
