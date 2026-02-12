"use client";
import { useState } from "react";
import Letter from "./Letter";

export default function Envelope({ unlocked }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="envelope-wrap">
            <div
                className="envelope"
                onClick={() => unlocked && setOpen(true)}
            >
                💌
            </div>

            {!unlocked && <p>Önce 3 kalbi bul 🙂</p>}
            {open && <Letter />}
        </div>
    );
}
