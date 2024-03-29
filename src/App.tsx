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
import { Card } from "./components/card/Card";
import { DropdownMenu } from "./components/dropdown/DropdownMenu";
import { CardBody } from "./components/card/CardBody";
import { CardTitle } from "./components/card/CardTitle";
import { CardActions } from "./components/card/CardActions";
import { Swap } from "./components/swap/Swap";
import { CollapseTitle } from "./components/collapses/CollapseTitle";
import { CollapseBody } from "./components/collapses/CollapseBody";
import { ArrowDownIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { ButtonGroup } from "./components/buttons/ButtonGroup";
import { Drawer } from "./components/drawer/Drawer";
import { DrawerSide } from "./components/drawer/DrawerSide";
import { DrawerContent } from "./components/drawer/DrawerContent";
import { DrawerToggle } from "./components/drawer/DrawerToggle";
import { Checkbox } from "./components/checkbox/Checkbox";
import { FormControl } from "./components/form/FormControl";
import { FormLabel } from "./components/form/FormLabel";
import { FileInput } from "./components/file-input/FileInput";
import { Range } from "./components/range/Range";
import { Select } from "./components/select/Select";
import { Progress } from "./components/progress/Progress";
import { RadialProgress } from "./components/progress/RadialProgress";
import { HeroContent } from "./components/hero/HeroContent";
import { Hero } from "./components/hero/Hero";
import { HeroOverlay } from "./components/hero/HeroOverlay";

// eslint-disable-next-line valid-jsdoc
/**
 * For dev purposes only. App is not used in the build
*/
export const App = () => {
    const [isConfirmModalOpen, toggleConfirmModal] = useToggle(false);
    const [isModalOpen, toggleModal] = useToggle(false);

    return (
        <>
            <div className="m-2 w-1/2 relative overflow-x-auto">
                <Drawer id="test-drawer" className="h-52">
                    <DrawerContent>
                        <DrawerToggle>Toggle me</DrawerToggle>
                        <p>Test things</p>
                    </DrawerContent>
                    <DrawerSide>
                        <Menu variant="base-200" className="shadow w-52">
                            <MenuItem>Hello</MenuItem>
                            <MenuItem>Hello</MenuItem>
                            <MenuItem isDisabled>Border</MenuItem>
                            <MenuItem>Hello</MenuItem>
                        </Menu>
                    </DrawerSide>
                </Drawer>
            </div>

            <div className="mb-2 text-7xl">Dev sandbox</div>
            <div>
                <Collapse className="w-1/2 m-5" defaultExpand>
                    <CollapseTitle
                        className="bg-base-300 rounded-t-md"
                        RightIcon={<ArrowDownIcon className="h-5 w-5"/>}
                    >
                        <div className="mr-4">
                            <Cog6ToothIcon className="h-5 w-5" />
                        </div>
                        <h2 className="w-full text-2xl">This is a Collapse</h2>
                    </CollapseTitle>

                    <CollapseBody className="bg-base-200">
                        <p className="p-4">Hey everyone</p>
                    </CollapseBody>
                </Collapse>

                <SimpleCollapse LeftIcon={<FontAwesomeIcon icon={faGitlab} className="h-5 w-5" />} headerContent="Testing" variant="info" className="w-1/2 m-5" rounded={true}>
                    <p className="p-4">Hey everyone</p>
                </SimpleCollapse>

                <Button variant="primary"
                    className="m-5"
                    onClick={(e)=>{
                        console.log(e);
                    }}
                >Hello</Button>

                <ButtonGroup>
                    <Button>Button 1</Button>
                    <Button isActive>Button 2</Button>
                    <Button>Button 3</Button>
                </ButtonGroup>

                <Avatar
                    className="m-5"
                    contentClasses="w-24 rounded-full text-3xl"
                    variant="base-300"
                    status="offline"
                >
                    <span>NN</span>
                </Avatar>

                <Alert className="w-1/4 m-5" variant="warning">
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

                <Dropdown>
                    <Button className="m-2">Test Dropdown</Button>
                    <DropdownMenu className="shadow w-52" variant="base-200">
                        <MenuItem isTitle>Test Title</MenuItem>
                        <MenuItem isActive><a href="#">Selected item</a></MenuItem>
                        <MenuItem isDisabled>Disabled item</MenuItem>
                        <MenuItem isBordered>Bordered item</MenuItem>
                        <MenuItem hover>hover me</MenuItem>
                    </DropdownMenu>
                </Dropdown>

                <div className="p-5">
                    <div className="grid grid-cols-12">
                        <div className="col-span-2">
                            <Menu variant="base-300" className="shadow w-52">
                                <MenuItem>Hello</MenuItem>
                                <MenuItem>Hello</MenuItem>
                                <MenuItem isDisabled>Border</MenuItem>
                                <MenuItem>Hello</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>

                <div className="p-5">
                    <div className="grid grid-cols-12">
                        <div className="col-span-2 m-2">
                            <Card>
                                <CardBody>
                                    <CardTitle><h2>Something about a dog</h2></CardTitle>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="col-span-2 m-2">
                            <Card imageFull>
                                <figure><img src="https://placeimg.com/400/225/arch"/></figure>
                                <CardBody>
                                    <CardTitle><h2>Full image card</h2></CardTitle>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="col-span-2 m-2">
                            <Card variant="primary">
                                <CardBody>
                                    <CardTitle><h2>Card with actions</h2></CardTitle>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <CardActions className="justify-end mt-3">
                                        <Button variant="secondary">Decline</Button>
                                        <Button variant="secondary">Confirm</Button>
                                    </CardActions>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="col-span-2 m-2">
                            <Card variant="base-300">
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                <CardBody>
                                    <CardTitle><h2>Card with actions</h2></CardTitle>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <CardActions className="justify-end mt-3">
                                        <Button variant="secondary">Decline</Button>
                                        <Button variant="secondary">Confirm</Button>
                                    </CardActions>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="p-5">
                    <Swap className="text-5xl">
                        <div>🥵</div>
                        <div>🥶</div>
                    </Swap>
                </div>

                <div className="p-5">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3 m-2 text-center">
                            <FormControl>
                                <FormLabel title="Hi Mom!!">
                                    <Checkbox id="some" variant="secondary" defaultChecked/>
                                </FormLabel>
                            </FormControl>
                            <FormControl>
                                <FormLabel title="Hi Mom!!">
                                    <Checkbox id="some" variant="secondary"/>
                                </FormLabel>
                            </FormControl>
                            <FormControl>
                                <FormLabel title="Hi Mom!!">
                                    <Checkbox id="some" variant="accent"/>
                                </FormLabel>
                            </FormControl>
                            <FormControl>
                                <FormLabel title="Hi Mom!!">
                                    <Checkbox id="some" variant="info"/>
                                </FormLabel>
                            </FormControl>
                        </div>

                        <div className="col-span-3 m-2 text-center">
                            <FileInput variant="primary" />
                            <FileInput variant="accent" />
                            <FileInput variant="secondary" />
                            <FileInput variant="info" />
                        </div>

                        <div className="col-span-3 m-2 text-center">
                            <Range min={25} max={100} step={25}/>
                            <Range min={25} max={100} variant="primary"/>
                            <Range min={25} max={100} variant="secondary"/>
                            <Range min={25} max={100} variant="accent"/>
                            <Range min={25} max={100} defaultValue={75} variant="info"/>
                            <Range min={25} max={100} defaultValue={75} variant="warning"/>
                            <Range min={25} max={100} defaultValue={75} variant="success"/>
                            <Range min={25} max={100} defaultValue={75} variant="error"/>
                        </div>

                        <div className="col-span-3 m-2 text-center">
                            <Select defaultValue="" variant="primary">
                                <option value="" disabled>Please Choose Something</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </Select>
                            <Select defaultValue="" variant="secondary">
                                <option value="" disabled>Please Choose Something</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </Select>
                        </div>

                        <div className="col-span-3 m-2 text-center">
                            <Progress value={40} max={100} />
                            <Progress variant="accent" value={40} max={100} />
                            <RadialProgress value={40} variant={"primary"} fill>
                            </RadialProgress>
                        </div>

                        <div className="col-span-3 m-2 text-center">
                            <div className="hero min-h-screen bg-base-300">
                                <div className="hero-content text-center">
                                    <div className="max-w-md">
                                        <h1 className="text-5xl font-bold">Hello there</h1>
                                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                        <button className="btn btn-primary">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 m-2 text-center">
                            <Hero className="min-h-screen bg-[url(https://www.celebritycruises.com/blog/content/uploads/2022/01/most-beautiful-mountains-in-the-world-kirkjufell-iceland-1024x580.jpg)]">
                                <HeroOverlay className="bg-opacity-60" ></HeroOverlay>
                                <HeroContent>
                                    <div className="max-w-md">
                                        <h1 className="text-5xl font-bold">Hello there</h1>
                                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    </div>
                                </HeroContent>
                            </Hero>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
