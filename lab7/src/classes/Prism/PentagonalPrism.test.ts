import { PentagonalPrism } from "./PentagonalPrism";

describe("PentagonalPrism", () => {
  let prism: PentagonalPrism;
  beforeEach(() => {
    prism = new PentagonalPrism("Pent", 2, 8);
  });
  it("cheks PentagonalPrism creation", () => {
    expect(prism).toBeTruthy();
  });
  it("cheks PentagonalPrism naming", () => {
    expect(prism.name).toBe("Pent");
  });
  it("cheks PentagonalPrism calculation", () => {
    expect(prism.getVolume()).toBe((5 / 2) * 2 * 8);
  });
});
