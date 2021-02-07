const { expect } = require("chai");
const { plus } = require("./plus");

describe("plus", () => {
    it("should add 2 numbers", () => {
        expect(plus(2, 3)).to.equal(5);
    });
});
