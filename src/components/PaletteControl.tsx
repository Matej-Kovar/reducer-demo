import React, { useState } from "react";
import { useStyleContext } from "../providers/StyleProvider";

const PaletteControl: React.FC = () => {
    const [, dispatch] = useStyleContext();
    const [fontStr, setFontStr] = useState<string>("serif");

    const setRandomColor = () => {
        dispatch({ type: "SET_RANDOM_COLOR" });
    };

    const clearPalette = () => {
        dispatch({ type: "CLEAR_PALETTE" });
    };

    const setFont = (font: string) => {
        dispatch({ type: "SET_FONT", value: font});
    };

    const loadPalette = (name: string) => {
        dispatch({ type: "SET_PALETTE_BY_NAME", value: name });
    };

    const shiftPalette = (value: number) => {
        dispatch({ type: "ROTATE_PALETTE", value });
    }

    const increaseSpacing = (value: number) => {
        dispatch({ type: "INCREASE_SPACING", value });
    }

    const decreaseSpacing = (value: number) => {
        dispatch({ type: "DECREASE_SPACING", value });  
    }

    return (
        <div className="palette-control">
            <div>
                <button onClick={clearPalette}>Clear Palette</button>
                <button onClick={() => shiftPalette(1)}>Shift</button>
                <button onClick={() => loadPalette("Default")}>Default Palette</button>
                <button onClick={() => loadPalette("Grayscale")}>Grayscale Palette</button>
                <button onClick={() => loadPalette("Rainbow")}>Rainbow Palette</button>
                <button onClick={() => loadPalette("Ocean")}>Ocean Palette</button>
            </div>
            <div>
                <button onClick={() => increaseSpacing(1)}>Increase Spacing</button>
                <button onClick={() => decreaseSpacing(1)}>Decrease Spacing</button>
            </div>
            <div>
                <input type="text" onChange={(e) => setFontStr(e.currentTarget.value)} value={fontStr}/>
                <button onClick={() => setFont(fontStr)}>Toggle Font</button>
            </div>
            <button onClick={setRandomColor}>Random Color</button>

        </div>
    );
}

export default PaletteControl;