import {forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

/** For responsivene direction, please leverage className */
export interface IButtonGroup extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{
    isVertical ?:boolean
}
export const ButtonGroup = forwardRef<HTMLDivElement, IButtonGroup>((
    {
        isVertical,
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <div {...props} ref={ref} className={clsx(
            "btn-group",
            isVertical && "btn-group-vertical",
            className
        )}>
            {children}
        </div>
    );
});

ButtonGroup.displayName = "ButtonGroup";
