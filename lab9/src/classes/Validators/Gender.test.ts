import Validator from "./Gender";

describe("Gender", () => {
  const validator = new Validator();
  it("cheks valid data", () => {
    expect(validator.validate("чоловіча")).toBe(true);
    expect(validator.validate("жіноча")).toBe(true);
  });
  it("cheks invalid data", () => {
    expect(validator.validate("інший")).toBe(false);
  });
  it("checks mixedCase data", () => {
    expect(validator.validate("Чоловіча")).toBe(true);
    expect(validator.validate("Жіноча")).toBe(true);
  });
});
