import { forwardRef, InputHTMLAttributes } from "react";
import { NoBaseOrNeutralVariant } from "../../@types/Colors";
import { Size } from "../../@types/Daisy";
import clsx from "clsx";

interface ITextInput extends Omit<InputHTMLAttributes<HTMLInputElement>, "type">{
    isBordered ?:boolean
    isGhost ?:boolean
    scale ?:Size
    variant ?:NoBaseOrNeutralVariant
}
export const TextInput = forwardRef<HTMLInputElement, ITextInput>((
    {
        isBordered,
        isGhost,
        scale="md",
        variant,
        className,
        ...props
    },
    ref
)=>{
    return (
        <input
            {...props}
            type="text"
            ref={ref}
            className={clsx(
                "input",
                className,
                isBordered && "input-bordered",
                isGhost && "input-ghost",
                {[`input-${scale}`]: scale},
                {[`input-${variant}`]: variant}
            )} />
    );
});

TextInput.displayName = "TextInput";
