import clsx from "clsx";
import { FC, ForwardedRef, forwardRef, PropsWithChildren } from "react";

interface ICardTitle {
    id ?:string
    className ?:string
}
export const CardTitle :FC<PropsWithChildren<ICardTitle>> = forwardRef((
    {id, className, children},
    ref ?:ForwardedRef<HTMLDivElement>
)=>{
    return (
        <div id={id} ref={ref} className={clsx(
            "card-title",
            className
        )}>
            {children}
        </div>
    );
});
