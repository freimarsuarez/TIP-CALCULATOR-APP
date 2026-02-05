import React, { useState } from "react";

interface Props {
    label: string;
    value: number;
    iconUrl: string;
    variant: "bill" | "people";
    setValue: (value: number) => void;
}

export const Input = ({ label, value, iconUrl, variant, setValue }: Props) => {

    const [localValue, setLocalValue] = useState(value.toString());
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userInput = e.target.value;

        const numbersRegExp = /^\d+$/;
        const decimalRegExp = /^\d+(\.\d+)?$/;

        const regExp = variant === "bill" ? decimalRegExp : numbersRegExp;

        const isValid = regExp.test(userInput)

        if (!isValid) return;
        //UI
        setLocalValue(userInput)
        //store
        setValue(Number(userInput))
    }

    return (
        <div className="flex flex-col mb-8">
            <div className="flex justify-between">
                <label
                    className="font-bold text-Grey-500 mb-2"
                    htmlFor="bill"
                >
                    {label}
                </label>
                <p className="text-Orange-400 font-bold hidden ">Can´t be zero </p>
            </div>

            <div className=" relative">
                <input
                    id="bill"
                    type="text"
                    onChange={handleChange}
                    value={localValue}
                    className='bg-Grey-50 rounded-[5px] focus:outline-2 focus:outline-Green-400 cursor-pointer h-12 text-right pr-4 text-2xl font-bold text-Green-900 w-full'
                />
                <img src={iconUrl} alt="icon" className="absolute top-4 left-2" />
            </div>
        </div>
    )
}
