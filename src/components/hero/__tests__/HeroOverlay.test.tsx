import { render } from "@testing-library/react";
import { HeroOverlay } from "../HeroOverlay";

describe("HeroOverlay component", () => {
    it("renders with hero content class", () => {
        const { container } = render(
            <HeroOverlay>Testing</HeroOverlay>
        );
        const hero = container.firstChild;
        expect(hero).toBeInTheDocument();
        expect(hero).toHaveClass("hero-overlay");
    });

    it("renders with custom className", () => {
        const { container } = render(
            <HeroOverlay className="find-me">Testing</HeroOverlay>
        );
        const hero = container.firstChild;
        expect(hero).toBeInTheDocument();
        expect(hero).toHaveClass("find-me");
    });

    it("renders children", () => {
        const { container } = render(
            <HeroOverlay><div className="find-me">testing</div></HeroOverlay>
        );
        const child = container.querySelector("div.find-me");
        expect(child).toBeInTheDocument();
        expect(child).toHaveClass("find-me");
    });
});
