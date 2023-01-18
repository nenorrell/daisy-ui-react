import React, {forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import clsx from "clsx";
import { Variant } from "../../@types/Daisy";
import ColorMap from "../../modules/ColorMap";
import { Button } from "../buttons/Button";
import { XMarkIcon } from "@heroicons/react/24/solid";

export interface IModalFrame {
    id ?:string
    className ?:string
    /** @default neutral */
    variant ?:Variant
    isOpen ?:boolean
    /** @default "middle" */
    position ?: "bottom" | "middle"
    ActionSection ?:React.ReactNode
    closeHandler ?:MouseEventHandler
    /** @default false */
    cornerClose ?:boolean
    /** @default true */
    overlayClose ?:boolean
}
export const ModalFrame = forwardRef<HTMLDivElement, PropsWithChildren<IModalFrame>>((
    props,
    ref
)=>{
    const variantColors = ColorMap.get(props.variant || "neutral");
    const overlayClose = props.overlayClose ?? true;

    return (
        <div ref={ref} id={props.id} onClick={overlayClose ? props.closeHandler : undefined} className={clsx(
            "modal",
            props.isOpen && "modal-open",
            props.position &&
                props.position === "bottom" && "modal-bottom" ||
                props.position === "middle" && "modal-middle"
        )}>
            <div onClick={(e)=>{
                overlayClose && e.stopPropagation();
            }} className={clsx(
                "modal-box",
                props.className,
                variantColors.bg,
                variantColors.text
            )}>
                {
                    props.cornerClose && <Button
                        className="absolute right-1 top-1"
                        size="sm"
                        shape="circle"
                        isGhost
                        onClick={props.closeHandler}
                    >
                        <XMarkIcon className="h-5 w-5"/>
                    </Button>
                }
                {props.children}

                {
                    props.ActionSection && <div className="modal-action">
                        {props.ActionSection}
                    </div>
                }
            </div>
        </div>
    );
});
