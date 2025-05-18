import React, { useState, useEffect } from "react";

function JamDigital() {
    const [waktu, setWaktu] = useState(new Date())

    useEffect(handleInterval, [waktu])

    function handleInterval() {
        const intervalId = setInterval(() => {
            setWaktu(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }

    function handleJam() {
        let jam = waktu.getHours()
        const menit = waktu.getMinutes()
        const detik = waktu.getSeconds()
        const meridian = jam <= 12 ? "AM" : "PM"

        jam = jam % 12


        return (
            `${handlePadd(jam)}:${handlePadd(menit)}:${handlePadd(detik)}:${meridian}`
        )
    }

    function handlePadd(number) {
        return (number < 10 ? "0" : "") + number
    }

    return (
        <>
            <div className="jam-container">
                <div>
                    <span>{handleJam()}</span>
                </div>
            </div>
        </>
    )
}

export default JamDigital
