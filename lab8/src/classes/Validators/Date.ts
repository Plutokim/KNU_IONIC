class DateValidator {
  constructor() {}

  public validate(date: Date): boolean {
    return (
      date instanceof Date &&
      !isNaN(date.getTime()) &&
      date < new Date(new Date().setFullYear(new Date().getFullYear() - 18))
    );
  }
}

export default DateValidator;
