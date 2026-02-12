"use client";
import { useEffect, useState } from "react";

export default function Letter() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="letterScreen flex items-center justify-center min-h-screen bg-pink-100 overflow-hidden px-2">
            {/* Yazı kutusu */}
            <div
                className={`letterBox relative z-10 p-4 sm:p-6 bg-white rounded-lg shadow-lg text-center w-11/12 sm:max-w-md transform transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                    }`}
            >
                <h1 className="text-xl sm:text-2xl font-bold mb-4 animate-pulse">Mutlu 14 Şubat! 💌</h1>
                <p className="mb-4 text-gray-700 text-sm sm:text-base">
                    Henüz yeni tanışmış olsak da, bu kısa zamanda paylaştığımız gülümsemeler
                    ve sohbetler şimdiden özel bir yer edindi. 🌸
                </p>
                <p className="mb-6 text-gray-700 text-sm sm:text-base">
                    Bu 14 Şubat’ta sadece çikolatalar ve çiçekler değil,
                    birbirimizle paylaştığımız küçük anlar da değerli. Daha nice güzel anılar için… 💛
                </p>
                <button
                    onClick={() => window.open("https://wa.me/905XXXXXXXXX?text=Mutlu%2014%20Şubat!%20🌸", "_blank")}
                    className="px-4 py-2 sm:px-6 sm:py-2.5 bg-pink-500 text-white rounded hover:bg-pink-600 transform transition-transform duration-300 hover:scale-105 text-sm sm:text-base"
                >
                    Tebessüm Et 💖
                </button>
            </div>
        </div>
    );
}
