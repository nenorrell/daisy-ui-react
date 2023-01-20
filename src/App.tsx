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
import { Dropdown } from "./components/dropdown/Dropdown";
import { Menu } from "./components/menu/Menu";
import { MenuItem } from "./components/menu/MenuItem";

// eslint-disable-next-line valid-jsdoc
/**
 * For dev purposes only. App is not used in the build
*/
export const App = () => {
    const [isConfirmModalOpen, toggleConfirmModal] = useToggle(false);
    const [isModalOpen, toggleModal] = useToggle(false);

    return (
        <>
            <div className="mb-2 text-7xl">Dev sandbox</div>
            <div>
                <Collapse
                    className="w-1/2 m-5"
                    headerContent="Hello"
                    headerClasses="bg-base-200 rounded-t-md"
                    leftIcon={<FontAwesomeIcon icon={faGitlab} />}
                    rightIcon={ArrowDownIcon}
                >
                    <div className="bg-base-300">
                        <p className="p-4">Hey everyone</p>
                    </div>
                </Collapse>

                <SimpleCollapse headerContent="Testing" variant="info" className="w-1/2 m-5" rounded={true}>
                    <p className="p-4">Hey everyone</p>
                </SimpleCollapse>

                <Button variant="primary"
                    className="m-5"
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

                <Alert className="w-1/4 m-5" variant="error">
                    WARNING
                </Alert>

                <Button className="m-5" onClick={toggleConfirmModal}>Open Confirm Modal</Button>
                <Button variant="secondary" className="m-5" onClick={toggleModal}>Open Regular Modal</Button>

                <ConfirmModal
                    isOpen={isConfirmModalOpen}
                    variant="success"
                    closeHandler={toggleConfirmModal}
                    cornerClose={true}
                >
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </ConfirmModal>

                <Modal
                    isOpen={isModalOpen}
                    variant="base-200"
                    noActionButton={true}
                    closeHandler={toggleModal}
                >
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </Modal>

                <Dropdown
                    className="shadow w-52"
                    variant="primary"
                    button={<Button className="m-2">Test Dropdown</Button>}
                >
                    <MenuItem>Hello</MenuItem>
                    <MenuItem>Hello</MenuItem>
                    <MenuItem isDisabled>Border</MenuItem>
                    <MenuItem>Hello</MenuItem>
                </Dropdown>

                <Menu variant="primary" className="shadow w-52 mt-14 ml-5">
                    <MenuItem>Hello</MenuItem>
                    <MenuItem>Hello</MenuItem>
                    <MenuItem isDisabled>Border</MenuItem>
                    <MenuItem>Hello</MenuItem>
                </Menu>
            </div>
        </>
    );
};
