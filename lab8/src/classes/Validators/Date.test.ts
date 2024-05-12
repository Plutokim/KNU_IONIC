import Validator from "./Date";

describe("Student", () => {
  const validator = new Validator();
  it("cheks valid data", () => {
    expect(validator.validate(new Date("2000-01-01"))).toBe(true);
  });
  it("cheks invalid data", () => {
    expect(validator.validate(new Date("2023-01-01"))).toBe(false);
  });
});
