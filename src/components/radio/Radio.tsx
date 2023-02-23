import { forwardRef, InputHTMLAttributes } from "react";
import { NoBaseOrNeutralVariant } from "../../@types/Colors";
import { Size } from "../../@types/Daisy";
import clsx from "clsx";

interface IRadio extends InputHTMLAttributes<HTMLInputElement>{
    scale ?:Size
    variant ?:NoBaseOrNeutralVariant
}
export const Radio = forwardRef<HTMLInputElement, IRadio>((
    {
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
            type="radio"
            ref={ref}
            className={clsx(
                "radio",
                className,
                {[`radio-${scale}`]: scale},
                {[`radio-${variant}`]: variant}
            )} />
    );
});

Radio.displayName = "Radio";
