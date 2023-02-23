import clsx from "clsx";
import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";

interface ICardTitle extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{}
export const CardTitle = forwardRef<HTMLDivElement, ICardTitle>((
    {
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <div {...props} ref={ref} className={clsx(
            "card-title",
            className
        )}>
            {children}
        </div>
    );
});

CardTitle.displayName = "CardTitle";
