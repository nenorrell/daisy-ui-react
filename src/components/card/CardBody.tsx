import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

interface ICardBody extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{}
export const CardBody = forwardRef<HTMLDivElement, ICardBody>((
    {
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <div ref={ref} {...props} className={clsx(
            "card-body",
            className
        )}>
            {children}
        </div>
    );
});

CardBody.displayName = "CardBody";
