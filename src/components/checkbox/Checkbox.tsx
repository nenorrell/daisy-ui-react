import { forwardRef, InputHTMLAttributes } from "react";
import { NoBaseOrNeutralVariant } from "../../@types/Colors";
import { Size } from "../../@types/Daisy";
import clsx from "clsx";

interface ICheckbox extends Omit<InputHTMLAttributes<HTMLInputElement>, "type">{
    scale ?:Size
    variant ?:NoBaseOrNeutralVariant
}
export const Checkbox = forwardRef<HTMLInputElement, ICheckbox>((
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
            type="checkbox"
            ref={ref}
            className={clsx(
                "checkbox",
                className,
                {[`checkbox-${scale}`]: scale},
                {[`checkbox-${variant}`]: variant}
            )} />
    );
});

Checkbox.displayName = "Checkbox";
