import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentSizes, NoBaseOrNeutralVariantOptions } from "../../../modules/testUtils";
import { TextInput } from "../TextInput";

describe("TextInput", () => {
    describe("Variants", ()=>{
        NoBaseOrNeutralVariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<TextInput variant={variant} />);
                const container = component.container.querySelector("input.input");
                expect(container).toHaveClass(`input-${variant}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    describe("Sizes", ()=>{
        ComponentSizes.forEach(size=>{
            it(`Respects ${size} size`, ()=>{
                const component = render(
                    <TextInput scale={size} />
                );
                const container = component.container.querySelector("input.input");

                expect(container).toHaveClass(`input-${size}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("renders without crashing", () => {
        render(<TextInput />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("renders with className", () => {
        const { container } = render(<TextInput className="test-class" />);
        expect(container.firstChild).toHaveClass("input");
        expect(container.firstChild).toHaveClass("test-class");
    });

    it("renders with isBordered", () => {
        const { container } = render(<TextInput isBordered />);
        expect(container.firstChild).toHaveClass("input");
        expect(container.firstChild).toHaveClass("input-bordered");
    });

    it("renders with isGhost", () => {
        const { container } = render(<TextInput isGhost />);
        expect(container.firstChild).toHaveClass("input");
        expect(container.firstChild).toHaveClass("input-ghost");
    });

    it("handles onChange event", () => {
        const handleChange = jest.fn();
        render(<TextInput onChange={handleChange} />);
        const input = screen.getByRole("textbox");
        userEvent.type(input, "test");
        expect(handleChange).toHaveBeenCalledTimes(4); // four times since "test" has 4 characters
    });
});
