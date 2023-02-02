import { FC, ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { Size } from "../../@types/Daisy";
import { BaselessVariant } from "../../@types/Colors";
import clsx from "clsx";

interface IBadge {
    size ?:Size
    className ?:string
    variant ?:BaselessVariant
    onClick ?:MouseEventHandler
    isGhost ?:boolean
    isOutline ?:boolean
}
export const Badge :FC<PropsWithChildren<IBadge>> = forwardRef((
    {variant="neutral", size="md", ...props},
    ref ?:ForwardedRef<HTMLDivElement>
)=>{
    ;
    return (
        <div
            ref={ref}
            onClick={props.onClick}
            className={clsx(
                "badge",
                {
                    [`badge-${variant}`]: variant,
                    [`badge-${size}`]: size
                },
                props.className,
                props.isGhost && "badge-ghost",
                props.isOutline && "badge-outline",
            )}
        >
            {props.children}
        </div>
    );
});

Badge.displayName = "Badge";
