import clsx from "clsx";
import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";

export interface ICollapseBody extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{
    isExpanded ?:boolean,
}
export const CollapseBody = forwardRef<HTMLDivElement, ICollapseBody>((
    {
        className,
        isExpanded,
        children,
        ...props
    },
    ref
) => {
    return (
        <div
            {...props}
            ref={ref}
            className={clsx(
                "collapse-body",
                "ease-linear",
                "duration-[.25s]",
                "transition-[height]",
                "overflow-hidden",
                !isExpanded && "h-0",
                className
            )}
        >
            {children}
        </div>
    );
});

CollapseBody.displayName = "CollapseBody";
