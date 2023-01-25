import { passPropToChildren } from "../utility";

describe("passPropToChildren()", ()=>{
    it("Should pass prop to children", ()=>{
        const components = passPropToChildren([<div>test</div>, <div>test2</div>], {
            testProp: "some-value"
        });
        components.forEach(child =>
            expect((child as any).props).toHaveProperty("testProp", "some-value")
        );
    });

    it("Should pass prop to single child", ()=>{
        const components = passPropToChildren(<div>test</div>, {
            testProp: "some-value"
        });
        components.forEach(child =>
            expect((child as any).props).toHaveProperty("testProp", "some-value")
        );
    });

    it("Should pass multiple props", ()=>{
        const components = passPropToChildren(<div>test</div>, {
            testProp: "some-value",
            anotherProp: true
        });
        components.forEach(child =>{
            expect((child as any).props).toHaveProperty("testProp", "some-value");
            expect((child as any).props).toHaveProperty("anotherProp", true);
        });
    });
});
