import React, {forwardRef, HTMLAttributes, MouseEventHandler, PropsWithChildren } from "react";
import clsx from "clsx";
import { Variant } from "../../@types/Colors";
import { Button } from "../buttons/Button";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { getTextColor } from "../../modules/colors";

export interface IModalFrame extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    variant ?:Variant
    isOpen :boolean
    /** @default "middle" */
    position ?: "bottom" | "middle"
    closeHandler :MouseEventHandler
    /** @default false */
    cornerClose ?:boolean
    /** @default true */
    overlayClose ?:boolean
}
export const ModalFrame = forwardRef<HTMLDivElement, PropsWithChildren<IModalFrame>>((
    {
        variant="neutral",
        overlayClose=true,
        isOpen,
        position,
        closeHandler,
        cornerClose,
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <div onClick={overlayClose ? closeHandler : undefined} className={clsx(
            "modal",
            isOpen && "modal-open",
            position &&
                position === "bottom" && "modal-bottom" ||
                position === "middle" && "modal-middle"
        )}>
            <div
                {...props}
                ref={ref}
                onClick={(e)=>{
                    overlayClose && e.stopPropagation();
                }}
                className={clsx(
                    className,
                    "modal-box",
                    `bg-${variant}`,
                    `text-${getTextColor(variant)}-content`
                )}
            >
                {
                    cornerClose && <Button
                        className="absolute right-1 top-1"
                        size="sm"
                        shape="circle"
                        isGhost
                        onClick={closeHandler}
                    >
                        <XMarkIcon className="h-5 w-5"/>
                    </Button>
                }
                {children}
            </div>
        </div>
    );
});

ModalFrame.displayName = "ModalFrame";
