import { forwardRef, InputHTMLAttributes } from "react";
import { NoBaseOrNeutralVariant } from "../../@types/Colors";
import { Size } from "../../@types/Daisy";
import clsx from "clsx";

interface IRange extends Omit<InputHTMLAttributes<HTMLInputElement>, "type">{
    min :number
    max :number
    scale ?:Size
    variant ?:NoBaseOrNeutralVariant
}
export const Range = forwardRef<HTMLInputElement, IRange>((
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
            type="range"
            ref={ref}
            className={clsx(
                "range",
                className,
                {[`range-${scale}`]: scale},
                {[`range-${variant}`]: variant}
            )} />
    );
});

Range.displayName = "Range";
