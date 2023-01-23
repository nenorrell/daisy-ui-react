import React, {forwardRef, MouseEventHandler, PropsWithChildren, ReactNode } from "react";
import { useToggle } from "../../modules/hooks";
import clsx from "clsx";

export interface ISwap {
    id ?:string
    className ?:string
    isActive ?:boolean
    transition ?: "rotate" | "flip"
    onClick ?:MouseEventHandler
    children :[ReactNode, ReactNode]
}
export const Swap = forwardRef<HTMLLabelElement, PropsWithChildren<ISwap>>((
    props,
    ref
)=>{
    if(props.children.length !== 2) {
        throw Error("Swap expects exactly two root children");
    }

    const [active, toggle] = useToggle(props.isActive || false);

    const formattedChildren = React.Children.map<ReactNode, ReactNode>(props.children, (child, i) => {
        if(React.isValidElement(child)) {
            const swapClass = i ? "swap-on" : "swap-off";
            return React.cloneElement(child, {
                ...(child.props),
                className: clsx(swapClass, child.props.className)
            });
        }
    });

    return (
        <label
            id={props.id}
            ref={ref}
            className={clsx(
                "swap",
                props.className,
                active && "swap-active",
                props.transition === "rotate" && "swap-rotate",
                props.transition === "flip" && "swap-flip"
            )}
            onClick={e =>{
                toggle();
                props.onClick && props.onClick(e);
            }}
        >
            {formattedChildren}
        </label>
    );
});
Swap.displayName = "Swap";
