import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren, ReactNode } from "react";

export interface ICollapseTitle {
    className ?:string;
    isExpanded ?:boolean
    RightIcon ?:ReactNode
    onClick ?:MouseEventHandler<HTMLDivElement>
}
export const CollapseTitle = forwardRef((
    props :PropsWithChildren<ICollapseTitle>,
    ref ?:ForwardedRef<HTMLDivElement>
) => {
    return (
        <div
            ref={ref}
            className={clsx(
                "collapse-title",
                "cursor-pointer",
                "flex",
                "items-center",
                "justify-center",
                "px-4",
                props.className
            )}
            onClick={props.onClick}
        >
            {props.children}
            <div className={clsx(
                "items-end",
                "transition",
                "ease-in-out",
                !props.isExpanded && "-rotate-90",
            )}>
                {
                    props.RightIcon ?
                        props.RightIcon :
                        <ChevronDownIcon className={"w-4 h-4"} />
                }
            </div>
        </div>
    );
});

CollapseTitle.displayName = "CollapseTitle";
