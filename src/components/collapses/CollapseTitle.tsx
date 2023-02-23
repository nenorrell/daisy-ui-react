import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from "react";

export interface ICollapseTitle extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{
    isExpanded ?:boolean
    RightIcon ?:ReactNode
}
export const CollapseTitle = forwardRef<HTMLDivElement, ICollapseTitle>((
    {
        isExpanded,
        RightIcon,
        className,
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
                "collapse-title",
                "cursor-pointer",
                "flex",
                "items-center",
                "justify-center",
                "px-4",
                className
            )}
        >
            {children}
            <div className={clsx(
                "items-end",
                "transition",
                "ease-in-out",
                !isExpanded && "-rotate-90",
            )}>
                {
                    RightIcon ?
                        RightIcon :
                        <ChevronDownIcon className={"w-4 h-4"} />
                }
            </div>
        </div>
    );
});

CollapseTitle.displayName = "CollapseTitle";
