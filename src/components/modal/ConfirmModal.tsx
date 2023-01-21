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
    props,
    ref
)=>{
    return (
        <ModalFrame
            ref={ref}
            id={props.id}
            variant={props.variant}
            isOpen={props.isOpen}
            position={props.position}
            className={props.className}
            closeHandler={props.closeHandler}
            cornerClose={props.cornerClose}
            overlayClose={props.overlayClose}
        >
            {props.children}

            <div className="modal-action">
                <Button variant={props.closeButtonVariant} onClick={props.closeHandler}>
                    {props.closeButtonText || "Close"}
                </Button>

                <Button variant={props.confirmButtonVariant} onClick={props.confirmHandler}>
                    {props.confirmButtonText || "Confirm"}
                </Button>
            </div>
        </ModalFrame>
    );
});
