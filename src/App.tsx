import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { Alert } from "./components/alert/Alert";
import { Avatar } from "./components/avatar/Avatar";
import { Button } from "./components/buttons/Button";
import { Collapse } from "./components/collapses/Collapse";
import { SimpleCollapse } from "./components/collapses/SimpleCollapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { ConfirmModal } from "./components/modal/ConfirmModal";
import { useToggle } from "./modules/hooks";
import { Modal } from "./components/modal/Modal";

// eslint-disable-next-line valid-jsdoc
/**
 * For dev purposes only. App is not used in the build
*/
export const App = () => {
    const [isModalOpen, toggleModal] = useToggle(false);

    return (
        <>
            <div className="mb-2 text-7xl">Dev sandbox</div>
            <div>
                <Collapse
                    className="w-1/2"
                    headerContent="Hello"
                    headerClasses="bg-base-200 rounded-t-md"
                    leftIcon={<FontAwesomeIcon icon={faGitlab} />}
                    rightIcon={ArrowDownIcon}
                >
                    <div className="bg-base-300">
                        <p className="p-4">Hey everyone</p>
                    </div>
                </Collapse>

                <SimpleCollapse headerContent="Testing" variant="info" className="w-1/2" rounded={true}>
                    <p className="p-4">Hey everyone</p>
                </SimpleCollapse>

                <Button variant="primary"
                    onClick={(e)=>{
                        console.log(e);
                    }}
                >Hello</Button>

                <Avatar
                    className="m-5"
                    contentClasses="w-24 rounded-full text-3xl"
                    variant="base-300"
                    status="offline"
                >
                    <span>NN</span>
                </Avatar>

                <Alert className="w-1/4" variant="error">
                    WARNING
                </Alert>

                <Button className="mt-5" onClick={()=>toggleModal()}>Open Modal</Button>

                <ConfirmModal
                    // isOpen={isModalOpen}
                    variant="success"
                    closeHandler={()=>toggleModal()}
                    cornerClose={true}
                >
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </ConfirmModal>

                <Modal
                    isOpen={isModalOpen}
                    variant="base-200"
                    noActionButton={true}
                    closeHandler={()=>toggleModal()}
                >
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </Modal>
            </div>
        </>
    );
};
