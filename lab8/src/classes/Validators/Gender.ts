class GenderValidator {
  constructor() {}

  public validate(value: string): boolean {
    return (
      value.toLowerCase() === "чоловіча" || value.toLowerCase() === "жіноча"
    );
  }
}

export default GenderValidator;