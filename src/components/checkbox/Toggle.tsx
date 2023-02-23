import { forwardRef, InputHTMLAttributes } from "react";
import { NoBaseOrNeutralVariant } from "../../@types/Colors";
import { Size } from "../../@types/Daisy";
import clsx from "clsx";

interface IToggle extends Omit<InputHTMLAttributes<HTMLInputElement>, "type">{
    scale ?:Size
    variant ?:NoBaseOrNeutralVariant
}
export const Toggle = forwardRef<HTMLInputElement, IToggle>((
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
                "toggle",
                className,
                {[`toggle-${scale}`]: scale},
                {[`toggle-${variant}`]: variant}
            )} />
    );
});

Toggle.displayName = "Toggle";
