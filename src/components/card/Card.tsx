import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { Variant } from "../../@types/Colors";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { getTextColor } from "../../modules/colors";

interface ICard extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{
    variant ?:Variant
    isBordered ?:boolean
    imageFull ?:boolean
    size ?: "normal" | "compact"
    isSide ?:boolean
}
export const Card = forwardRef<HTMLDivElement, ICard>((
    {
        variant="neutral",
        size="normal",
        isBordered,
        imageFull,
        isSide,
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <div {...props} ref={ref} className={twMerge(clsx(
            "card",
            {
                [`bg-${variant}`]: variant,
                [`text-${getTextColor(variant)}-content`]: variant
            },
            size === "compact" ? "card-compact" : "card-normal",
            isSide && "card-side",
            imageFull && "image-full",
            className
        ))}>
            {children}
        </div>
    );
});

Card.displayName = "Card";
