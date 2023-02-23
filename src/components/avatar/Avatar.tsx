import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { Variant } from "../../@types/Colors";
import clsx from "clsx";
import { getTextColor } from "../../modules/colors";

interface IAvatar extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    isPlaceholder ?:boolean
    status ?:"online"|"offline"
    contentClasses ?:string
    variant ?:Variant
}
export const Avatar = forwardRef<HTMLDivElement, IAvatar>((
    {
        variant="neutral",
        isPlaceholder,
        status,
        contentClasses,
        className,
        children,
        ...props
    },
    ref
) =>{
    return (
        <div
            {...props}
            ref={ref}
            className={`avatar ${clsx(
                className,
                !isPlaceholder && "placeholder",
                status
            )}`}
        >
            <div className={clsx(
                {
                    [`bg-${variant}`]: variant,
                    [`text-${getTextColor(variant)}-content`]: variant
                },
                contentClasses || "w-12"
            )}>
                {children}
            </div>
        </div>
    );
});

Avatar.displayName = "Avatar";
