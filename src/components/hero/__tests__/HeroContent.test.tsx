import { render } from "@testing-library/react";
import { getTextColor } from "../../../modules/colors";
import { VariantOptions } from "../../../modules/testUtils";
import { HeroContent } from "../HeroContent";

describe("HeroContent component", () => {
    describe("Variants", ()=>{
        VariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(
                    <HeroContent variant={variant}>
                        Hero {variant}
                    </HeroContent>
                );
                const container = component.container.querySelector("div.hero-content");
                expect(container).toHaveClass(`bg-${variant}`, `text-${getTextColor(variant)}-content`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("renders with hero content class", () => {
        const { container } = render(
            <HeroContent>Testing</HeroContent>
        );
        const hero = container.firstChild;
        expect(hero).toBeInTheDocument();
        expect(hero).toHaveClass("hero-content");
    });

    it("renders with custom className", () => {
        const { container } = render(
            <HeroContent className="find-me">Testing</HeroContent>
        );
        const hero = container.firstChild;
        expect(hero).toBeInTheDocument();
        expect(hero).toHaveClass("find-me");
    });

    it("renders children", () => {
        const { container } = render(
            <HeroContent><div className="find-me">testing</div></HeroContent>
        );
        const child = container.querySelector("div.find-me");
        expect(child).toBeInTheDocument();
        expect(child).toHaveClass("find-me");
    });
});
