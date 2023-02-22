import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

interface ICardActions extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{}
export const CardActions = forwardRef<HTMLDivElement, ICardActions>((
    {
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <div {...props} ref={ref} className={clsx(
            "card-actions",
            className
        )}>
            {children}
        </div>
    );
});

CardActions.displayName = "CardActions";
