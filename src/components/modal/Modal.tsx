import { forwardRef, PropsWithChildren } from "react";
import { BaselessVariant } from "../../@types/Colors";
import { Button } from "../buttons/Button";
import { IModalFrame, ModalFrame } from "./ModalFrame";

interface IModal extends IModalFrame{
    closeButtonVariant ?:BaselessVariant
    closeButtonText ?:string
    noActionButton ?:boolean
}
export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<IModal>>((
    {
        closeButtonText,
        closeButtonVariant,
        noActionButton,
        children,
        ...props
    },
    ref
)=>{
    return (
        <ModalFrame
            ref={ref}
            {...props}
        >
            {children}

            { !noActionButton &&
                <div className="modal-action">
                    <Button variant={closeButtonVariant} onClick={props.closeHandler}>
                        {closeButtonText || "Close"}
                    </Button>
                </div>
            }
        </ModalFrame>
    );
});

Modal.displayName = "Modal";
