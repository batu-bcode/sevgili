"use client";

export default function Letter({ onClose }) {
    return (
        <div className="letterScreen flex items-center justify-center min-h-screen bg-pink-100 px-2">
            <div className="letterBox relative z-10 p-4 sm:p-6 bg-white rounded-lg shadow-lg text-center w-11/12 sm:max-w-md transform transition-all duration-700">

                {/* Çarpı butonu sağ üst */}
                <button
                    onClick={onClose}
                    className=" exit-btn absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-lg sm:text-xl font-bold"
                >
                    ×
                </button>

                <h1 className="text-xl sm:text-2xl font-bold mb-4 animate-pulse">Merhaba Elif ! 💌</h1>
                <p className="mb-4 text-gray-700 text-sm sm:text-base">
                    Seni tanımak gerçekten çok keyifli. 🌸
                    Her sohbetimiz, paylaştığımız küçük anlar ve birbirimize attığımız mesajlar bana özel bir his veriyor. 💛
                    Bu mesajı sadece gülümsemeni saklaman ve kendini iyi hissetmen için göndermek istedim.
                </p>
                <p className="mb-6 text-gray-700 text-sm sm:text-base">
                    Umarım okurken içini küçük bir mutluluk kaplar ve gününe biraz renk katar. 💖
                    Belki bir gün bu keyifli sohbetleri yüz yüze de devam ettiririz ve o anlar daha da özel olur. ☕
                </p>

                <button
                    onClick={() => window.open("https://wa.me/905XXXXXXXXX?text=Mutlu%2014%20Şubat!%20🌸", "_blank")}
                    className=" btn-heart  px-4 py-2 sm:px-6 sm:py-2.5 bg-pink-500 text-white rounded hover:bg-pink-600 transform transition-transform duration-300 hover:scale-105 text-sm sm:text-base"
                >
                   Seni seviyorum 💖
                </button>
            </div>
        </div>
    );
}
