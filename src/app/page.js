"use client"
import { useState } from "react"
import HeartGame from "./components/HeartGame"
import Letter from "./components/Letter"

export default function Home() {
  const [win, setWin] = useState(false)
  const [showLetter, setShowLetter] = useState(false) // mektubu göster

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200 relative">
      {/* Oyun */}
      {(!win || !showLetter) && <HeartGame onWin={() => { setWin(true); setShowLetter(true) }} />}

      {/* Mektup */}
      {win && showLetter && (
        <Letter onClose={() => setShowLetter(false)} />
      )}
    </div>
  )
}
