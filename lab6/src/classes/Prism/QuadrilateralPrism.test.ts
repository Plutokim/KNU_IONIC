import { QuadrilateralPrism } from "./QuadrilateralPrism";

describe("QuadrilateralPrism", () => {
  let prism: QuadrilateralPrism;
  beforeEach(() => {
    prism = new QuadrilateralPrism("Quad", 3, 5);
  });
  it("cheks QuadrilateralPrism creation", () => {
    expect(prism).toBeTruthy();
  });
  it("cheks QuadrilateralPrism naming", () => {
    expect(prism.name).toBe("Quad");
  });
  it("cheks QuadrilateralPrism calculation", () => {
    expect(prism.getVolume()).toBe(3 * 3 * 5);
  });
});
