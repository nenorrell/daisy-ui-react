import clsx from "clsx";
import { ForwardedRef, forwardRef, PropsWithChildren } from "react";

export interface ICollapseBody {
    isExpanded ?:boolean,
    className ?:string
}
export const CollapseBody = forwardRef((
    props :PropsWithChildren<ICollapseBody>,
    ref ?:ForwardedRef<HTMLDivElement>
) => {
    return (
        <div
            ref={ref}
            className={clsx(
                "collapse-body",
                "ease-linear",
                "duration-[.25s]",
                "transition-[height]",
                "overflow-hidden",
                !props.isExpanded && "h-0",
                props.className
            )}
        >
            {props.children}
        </div>
    );
});

CollapseBody.displayName = "CollapseBody";
