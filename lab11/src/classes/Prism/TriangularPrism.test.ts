import { TriangularPrism } from "./TriangularPrism";

describe("TriangularPrism", () => {
  describe("Valid data", () => {
    let prism: TriangularPrism;
    beforeEach(() => {
      prism = new TriangularPrism("Tri", 4, 6);
    });
    it("cheks TriangularPrism creation", () => {
      expect(prism).toBeTruthy();
    });
    it("cheks TriangularPrism naming", () => {
      expect(prism.name).toBe("Tri");
    });
    it("cheks TriangularPrism calculation", () => {
      expect(prism.getVolume()).toBe((4 * 6) / 2);
    });
  });

  describe("Invalid data", () => {
    it("cheks error (S must be greater than 0)", () => {
      expect(() => new TriangularPrism("Tri", 0, 6)).toThrow(
        new Error("S must be greater than 0")
      );
    });
    it("cheks error (h must be greater than 0)", () => {
      expect(() => new TriangularPrism("Tri", 4, -1)).toThrow(
        new Error("h must be greater than 0")
      );
    });
  });
});
