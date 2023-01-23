import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render } from "@testing-library/react";
import ColorMap from "../../../modules/ColorMap";
import { VariantOptions } from "../../../modules/testUtils";
import { SimpleCollapse } from "../SimpleCollapse";

describe("SimpleCollapse", ()=>{
    it("Should render as expected", ()=>{
        const {container} = render(<SimpleCollapse headerContent="test" />);
        expect(container).toMatchSnapshot();
    });

    describe("Variants", ()=>{
        VariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(
                    <SimpleCollapse headerContent={`testing ${variant} variant`} variant={variant} />
                );
                const headerContainer = component.container.querySelector("div.collapse-title");
                const bodyContainer = component.container.querySelector("div.collapse-body") as HTMLElement;
                const colors = ColorMap.get(variant);

                expect(headerContainer).toHaveClass(colors.bg, colors.text);
                expect(bodyContainer).toHaveClass(colors.bg, colors.text);

                expect(headerContainer).toMatchSnapshot();
                expect(bodyContainer).toMatchSnapshot();
            });
        });
    });

    it("Respects the LeftIcon prop", ()=>{
        const {container} = render(
            <SimpleCollapse
                LeftIcon={<FontAwesomeIcon icon={faGithub} className="my-icon h-5 w-5" />}
                headerContent="Testing"
            >
                <p>Hey everyone</p>
            </SimpleCollapse>
        );

        expect(container.querySelector("svg.my-icon")).toBeInTheDocument();
    });

    it("Respects the className prop", ()=>{
        const {container} = render(
            <SimpleCollapse
                headerContent="Testing"
                className="find-me"
            >
                <p>Hey everyone</p>
            </SimpleCollapse>
        );

        expect(container.querySelector("div.find-me")).toBeInTheDocument();
    });

    it("Respects the rounded prop on collapsed state", ()=>{
        const {container} = render(
            <SimpleCollapse
                headerContent="Testing"
                rounded={true}
            >
                <p>Hey everyone</p>
            </SimpleCollapse>
        );
        expect(container.querySelector("div.collapse-title")).toHaveClass("rounded-md", "transition-all", "duration-[1s]");
        expect(container.querySelector("div.collapse-body")).toHaveClass("rounded-b-md");
    });

    it("Respects the rounded prop on expanded state", ()=>{
        const {container} = render(
            <SimpleCollapse
                headerContent="Testing"
                rounded={true}
                defaultExpand
            >
                <p>Hey everyone</p>
            </SimpleCollapse>
        );
        expect(container.querySelector("div.collapse-title")).toHaveClass("rounded-t-md");
        expect(container.querySelector("div.collapse-body")).toHaveClass("rounded-b-md");
    });
});
