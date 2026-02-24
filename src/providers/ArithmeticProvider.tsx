import React, { createContext, useReducer } from "react";


type ArithmeticAction = { type: "ADD"; value: number } | { type: "SUBTRACT"; value: number } | { type: "MULTIPLY"; value: number } | { type: "DIVIDE"; value: number };

const reducer = (state: number, action: ArithmeticAction): number => {
    switch (action.type) {
        case "ADD":
            return state + action.value;
        case "SUBTRACT":
            return state - action.value;
        case "MULTIPLY":
            return state * action.value;
        case "DIVIDE":
            return state / action.value;
        default:
            return state;
    }
}

export const ArithmeticContext = createContext<[number, React.Dispatch<ArithmeticAction>]>([0, () => { }]);

export const ArithmeticProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const state = useReducer(reducer, 0);

    return (
        <ArithmeticContext.Provider value={state}>
            {children}
        </ArithmeticContext.Provider>
    );
}
