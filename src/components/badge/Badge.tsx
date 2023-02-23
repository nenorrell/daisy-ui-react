import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { Size } from "../../@types/Daisy";
import { BaselessVariant } from "../../@types/Colors";
import clsx from "clsx";

interface IBadge extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    size ?:Size
    variant ?:BaselessVariant
    isGhost ?:boolean
    isOutline ?:boolean
}
export const Badge = forwardRef<HTMLDivElement, IBadge>((
    {
        variant="neutral",
        size="md",
        className,
        isGhost,
        isOutline,
        children,
        ...props},
    ref
)=>{
    ;
    return (
        <div
            {...props}
            ref={ref}
            className={clsx(
                "badge",
                {
                    [`badge-${variant}`]: variant,
                    [`badge-${size}`]: size
                },
                className,
                isGhost && "badge-ghost",
                isOutline && "badge-outline",
            )}
        >
            {children}
        </div>
    );
});

Badge.displayName = "Badge";
