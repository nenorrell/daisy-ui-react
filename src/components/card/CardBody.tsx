import { FC, ForwardedRef, forwardRef, PropsWithChildren } from "react";
import clsx from "clsx";

interface ICardBody {
    id ?:string
    className ?:string
}
export const CardBody :FC<PropsWithChildren<ICardBody>> = forwardRef((
    {id, className, children},
    ref ?:ForwardedRef<HTMLDivElement>
)=>{
    return (
        <div ref={ref} id={id} className={clsx(
            "card-body",
            className
        )}>
            {children}
        </div>
    );
});

CardBody.displayName = "CardBody";
