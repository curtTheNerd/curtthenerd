import { useState } from "react";

export default function StateButtons({cLow, cHigh, setPrice}) {
    const[isActive, setIsActive] = useState(false); 
    const handleToggleLow = () => {
        if (isActive) return;
        else {
            setIsActive(!isActive);
            setPrice(cLow);
            console.log(cLow);
        }
    }

    const handleToggleHigh = () => {
        if (!isActive) return;
        else {
            setIsActive(!isActive);
            setPrice(cHigh);
            console.log(cHigh);
        }
    }

    return( 
        <>
        <button 
            className={`w-2/5 max-w-xs m-1 text-center text-stone-200 border-1 rounded-md cursor-pointer transition-colors duration-200 ${isActive ? 'border-stone-300' : 'border-amber-500/60'}` } onClick={handleToggleHigh}>
            {cHigh}
        </button>
        <button 
            className={`w-2/5 max-w-xs m-1 text-center text-stone-200 border-1 rounded-md cursor-pointer transition-colors duration-200 ${isActive ? 'border-amber-500/60' : 'border-stone-300'}` } onClick={handleToggleLow}>
            {cLow}
        </button>
        </>
    )
}