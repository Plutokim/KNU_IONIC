import { Teacher } from "./Teacher";
import { ILog } from "../interfaces/ILog";

class MockLogger implements ILog {
  logs: string[] = [];

  log(msg: string): void {
    this.logs.push(msg);
  }
}

describe("Teacher", () => {
  let teacher: Teacher;
  let mockLogger = new MockLogger();
  beforeEach(() => {
    teacher = new Teacher("John", 35, "IT", mockLogger);
  });
  it("cheks Teacher creation", () => {
    expect(teacher).toBeTruthy();
  });
  it("cheks Teacher naming", () => {
    expect(teacher.name).toBe("John");
  });
  it("cheks Teacher introduction", () => {
    expect(teacher.introduction()).toBe(
      "Hello, I'm John and I'm a teacher of IT."
    );
  });
  it("cheks Teacher job performance", () => {
    teacher.performJob();
    expect(mockLogger.logs).toContain("Teacher is teaching.");
  });
});
