import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { NoBaseOrNeutralVariant } from "../../@types/Colors";
import { ButtonSize } from "../../@types/Daisy";
import clsx from "clsx";

interface ICheckbox extends PropsWithChildren<HTMLAttributes<HTMLInputElement>>{
    size ?:ButtonSize
    variant ?:NoBaseOrNeutralVariant
}
export const Checkbox = forwardRef<HTMLInputElement, ICheckbox>((
    {size="md", variant, className, ...props},
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
                {[`checkbox-${size}`]: size},
                variant && {[`checkbox-${variant}`]: variant}
            )} />
    );
});

Checkbox.displayName = "Checkbox";
