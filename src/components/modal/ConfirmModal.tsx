import { forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { BaselessVariant } from "../../@types/Colors";
import { Button } from "../buttons/Button";
import { IModalFrame, ModalFrame } from "./ModalFrame";

interface IConfirmModal extends IModalFrame{
    confirmButtonVariant ?:BaselessVariant
    confirmHandler ?:MouseEventHandler
    confirmButtonText ?:string
    closeButtonVariant ?:BaselessVariant
    closeButtonText ?:string
}
export const ConfirmModal = forwardRef<HTMLDivElement, PropsWithChildren<IConfirmModal>>((
    {
        closeButtonText,
        closeButtonVariant,
        confirmButtonText,
        confirmButtonVariant,
        confirmHandler,
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

            <div className="modal-action">
                <Button variant={closeButtonVariant} onClick={props.closeHandler}>
                    {closeButtonText || "Close"}
                </Button>

                <Button variant={confirmButtonVariant} onClick={confirmHandler}>
                    {confirmButtonText || "Confirm"}
                </Button>
            </div>
        </ModalFrame>
    );
});

ConfirmModal.displayName = "ConfirmModal";
