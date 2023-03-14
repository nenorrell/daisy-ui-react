import { render } from "@testing-library/react";
import { getTextColor } from "../../../modules/colors";
import { VariantOptions } from "../../../modules/testUtils";
import { Hero } from "../Hero";

describe("Hero component", () => {
    describe("Variants", ()=>{
        VariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(
                    <Hero variant={variant}>
                        Hero {variant}
                    </Hero>
                );
                const container = component.container.querySelector("div.hero");
                expect(container).toHaveClass(`bg-${variant}`, `text-${getTextColor(variant)}-content`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("renders with hero class", () => {
        const { container } = render(
            <Hero>Testing</Hero>
        );
        const hero = container.firstChild;
        expect(hero).toBeInTheDocument();
        expect(hero).toHaveClass("hero");
    });

    it("renders with custom className", () => {
        const { container } = render(
            <Hero className="find-me">Testing</Hero>
        );
        const hero = container.firstChild;
        expect(hero).toBeInTheDocument();
        expect(hero).toHaveClass("find-me");
    });

    it("renders children", () => {
        const { container } = render(
            <Hero><div className="find-me">testing</div></Hero>
        );
        const child = container.querySelector("div.find-me");
        expect(child).toBeInTheDocument();
        expect(child).toHaveClass("find-me");
    });
});
