import { fireEvent, render } from "@testing-library/react";
import ColorMap from "../../../modules/ColorMap";
import SizeMap from "../../../modules/SizeMap";
import { BaselessVariantOptions, ComponentSizes } from "../../../modules/testUtils";
import { Badge } from "../Badge";

describe("Badge", ()=>{
    describe("Variants", ()=>{
        BaselessVariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<Badge variant={variant}><span>testing {variant} variant</span></Badge>);
                const container = component.container.querySelector("div.badge");
                const colors = ColorMap.get(variant);

                expect(container).toHaveClass(colors.badge as any);
                expect(container).toMatchSnapshot();
            });
        });
    });

    describe("Sizes", ()=>{
        ComponentSizes.forEach(size=>{
            it(`Respects ${size} size`, ()=>{
                const component = render(
                    <Badge size={size}><span>testing {size} button size</span></Badge>
                );
                const container = component.container.querySelector("div.badge");
                const sizing = SizeMap.get(size);

                expect(container).toHaveClass(sizing.badge as any);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("Respects onClick when passed in", ()=>{
        const stub = jest.fn();
        const component = render(
            <Badge onClick={stub}><span>Testing</span></Badge>
        );
        const container = component.container.querySelector("div.badge");
        fireEvent.click(container as HTMLDivElement);
        expect(stub).toHaveBeenCalled();
    });

    it("Renders children", ()=>{
        const component = render(
            <Badge><span className="find-me">Testing</span></Badge>
        );
        const container = component.container.querySelector("span.find-me");
        expect(container).toBeInTheDocument();
    });

    it("applies ghost class", () => {
        const { container } = render(<Badge isGhost><span>Testing</span></Badge>);
        const badge = container.firstChild;

        expect(badge).toHaveClass("badge-ghost");
    });

    it("applies outline class", () => {
        const { container } = render(<Badge isOutline><span>Testing</span></Badge>);
        const badge = container.firstChild;

        expect(badge).toHaveClass("badge-outline");
    });
});
