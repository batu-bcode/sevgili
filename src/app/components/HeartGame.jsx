"use client"
import { useState, useEffect } from "react"

export default function HeartGame({ onWin }) {
    const [boxes, setBoxes] = useState([])
    const [found, setFound] = useState(0)
    const [tries, setTries] = useState(5)

    // Oyun başlatma
    const initGame = () => {
        const arr = Array(9).fill(null).map(() => ({ type: "gift", open: false }))
        let heartIndexes = []
        while (heartIndexes.length < 3) {
            const r = Math.floor(Math.random() * 9)
            if (!heartIndexes.includes(r)) heartIndexes.push(r)
        }
        heartIndexes.forEach(i => arr[i].type = "heart")
        setBoxes(arr)
        setFound(0)
        setTries(5)
    }

    useEffect(() => {
        initGame()
    }, [])

    function clickBox(i) {
        if (tries === 0 || boxes[i].open) return

        const newBoxes = [...boxes]
        newBoxes[i] = { ...newBoxes[i], open: true }
        setBoxes(newBoxes)

        if (newBoxes[i].type === "heart") {
            setFound(f => f + 1)
        } else {
            setTries(t => t - 1)
        }
    }

    useEffect(() => {
        if (found === 3) onWin()
    }, [found, onWin])

    return (
        <div className="game-card p-6 bg-white rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold mb-2">💖 Kalbimi Bul</div>
            <div className="mb-2">{found}/3 kalp bulundu</div>
            <div className="mb-4">❤️ Hak: {tries}</div>

            <div className="game-grid grid grid-cols-3 gap-4">
                {boxes.map((b, i) => (
                    <button
                        key={i}
                        className="game-box w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center text-2xl cursor-pointer"
                        onClick={() => clickBox(i)}
                    >
                        {!b.open && "❓"}
                        {b.open && b.type === "heart" && <span className="text-pink-500 animate-ping">💖</span>}
                        {b.open && b.type === "gift" && "🎁"}
                    </button>
                ))}
            </div>

{tries === 0 && (
    <button

)}
        </div>
    )
}
