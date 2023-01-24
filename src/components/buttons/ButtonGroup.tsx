import {forwardRef, PropsWithChildren } from "react";
import clsx from "clsx";

export interface IButtonGroup {
    id ?:string
    className ?:string
    /** For responsivene direction, please leverage className */
    isVertical ?:boolean
}
export const ButtonGroup = forwardRef<HTMLDivElement, PropsWithChildren<IButtonGroup>>((
    props,
    ref
)=>{
    return (
        <div id={props.id} ref={ref} className={clsx(
            "btn-group",
            props.isVertical && "btn-group-vertical",
            props.className
        )}>
            {props.children}
        </div>
    );
});

ButtonGroup.displayName = "ButtonGroup";
