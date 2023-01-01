import { ArrowDownIcon, HomeIcon } from "@heroicons/react/24/solid";
import { Avatar } from "../avatar/Avatar";
import { Button } from "../buttons/Button";
import { Collapse } from "../collapses/Collapse";
import { SimpleCollapse } from "../collapses/SimpleCollapse";

export const App = () => {
    return (
        <>
            <div className="mb-2 text-7xl">Dev sandbox</div>
            <div>
                <Collapse
                    className="w-1/2"
                    headerContent="Hello"
                    headerClasses="bg-base-200 rounded-t-md"
                    LeftIcon={HomeIcon}
                    RightIcon={ArrowDownIcon}
                >
                    <div className="bg-base-300">
                        <p className="p-4">Hey everyone</p>
                    </div>
                </Collapse>

                <SimpleCollapse headerContent="Testing" variant="info" className="w-1/2" rounded={true}>
                    <p className="p-4">Hey everyone</p>
                </SimpleCollapse>
                <Button variant="primary" buttonText="Hello" onClick={(e)=>{
                    console.log(e);
                }}/>

                <Avatar
                    className="m-5"
                    contentClasses="w-24 rounded-full text-3xl"
                    variant="base-300"
                    status="offline"
                >
                    <span>NN</span>
                </Avatar>
            </div>
        </>
    );
};
