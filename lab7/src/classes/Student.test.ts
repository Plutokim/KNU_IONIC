import { Student } from "./Student";

describe("Student", () => {
  let student: Student;
  beforeEach(() => {
    student = new Student("John", 20);
  });
  it("cheks Student creation", () => {
    expect(student).toBeTruthy();
  });
  it("cheks Student naming", () => {
    expect(student.name).toBe("John");
  });
  it("cheks Student introduction", () => {
    expect(student.introduction()).toBe("Hello, I'm John and I'm a student.");
  });
  it("cheks Student action", () => {
    expect(student.action()).toBe("Student is studying.");
  });
});
