import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Calculator {
    bill: number;
    setBill: (newBill: number) => void

}

export const useCalculatorStore = create<Calculator>()(
    devtools(((set) => ({
        bill: 100,
        setBill: (newBill: number) => set(() => ({
            bill: newBill,
        }))
    })))
)