import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { NoBaseOrNeutralVariant } from "../../@types/Colors";
import { Size } from "../../@types/Daisy";
import clsx from "clsx";

interface ISelect extends PropsWithChildren<HTMLAttributes<HTMLSelectElement>>{
    isBordered ?:boolean
    isGhost ?:boolean
    scale ?:Size
    variant ?:NoBaseOrNeutralVariant
}
export const Select = forwardRef<HTMLSelectElement, ISelect>((
    {
        isBordered,
        isGhost,
        scale="md",
        variant,
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <select
            {...props}
            ref={ref}
            className={clsx(
                "select",
                className,
                isBordered && "select-bordered",
                isGhost && "select-ghost",
                {[`select-${scale}`]: scale},
                {[`select-${variant}`]: variant}
            )}
        >
            {children}
        </select>
    );
});

Select.displayName = "Select";
