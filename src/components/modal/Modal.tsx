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

            { !props.noActionButton &&
                <div className="modal-action">
                    <Button variant={props.closeButtonVariant} onClick={props.closeHandler}>
                        {props.closeButtonText || "Close"}
                    </Button>
                </div>
            }
        </ModalFrame>
    );
});
