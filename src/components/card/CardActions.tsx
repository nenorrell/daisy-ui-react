import { FC, ForwardedRef, forwardRef, PropsWithChildren } from "react";
import clsx from "clsx";

interface ICardActions {
    id ?:string
    className ?:string
}
export const CardActions :FC<PropsWithChildren<ICardActions>> = forwardRef((
    {id, className, children},
    ref ?:ForwardedRef<HTMLDivElement>
)=>{
    return (
        <div ref={ref} id={id} className={clsx(
            "card-actions",
            className
        )}>
            {children}
        </div>
    );
});

CardActions.displayName = "CardActions";
