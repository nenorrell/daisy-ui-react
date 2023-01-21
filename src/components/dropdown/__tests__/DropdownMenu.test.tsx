import { fireEvent, render } from "@testing-library/react";
import { MenuItem } from "../../menu/MenuItem";
import { DropdownMenu } from "../DropdownMenu";

describe("DropdownMenu", () => {
    it("calls the onClick prop when the element is clicked", () => {
        const onClick = jest.fn();
        const { container } = render(
            <DropdownMenu className="find-me" onClick={onClick}>
                <MenuItem>Test1</MenuItem>
                <MenuItem>Test2</MenuItem>
            </DropdownMenu>
        );
        const el = container.querySelector("ul.find-me");

        fireEvent.click(el as any);
        expect(onClick).toHaveBeenCalled();
    });
});
