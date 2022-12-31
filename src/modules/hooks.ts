import { useState, Dispatch, SetStateAction } from "react";

export function useToggle(initialValue: boolean = false): [boolean, Dispatch<SetStateAction<boolean>>] {
    const [value, setValue] = useState<boolean>(initialValue);
    const toggleValue = () => setValue(!value);
    return [value, toggleValue];
}