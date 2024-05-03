import { ILog } from "../interfaces/ILog";
import { DepartmentHead } from "./DepartmentHead";

class MockLogger implements ILog {
  logs: string[] = [];

  log(msg: string): void {
    this.logs.push(msg);
  }
}

describe("DepartmentHead", () => {
  let head: DepartmentHead;
  let mockLogger = new MockLogger();
  beforeEach(() => {
    head = new DepartmentHead("John", 35, "IT", mockLogger);
  });
  it("cheks DepartmentHead creation", () => {
    expect(head).toBeTruthy();
  });
  it("cheks DepartmentHead naming", () => {
    expect(head.name).toBe("John");
  });
  it("cheks DepartmentHead introduction", () => {
    expect(head.introduction()).toBe(
      "Hello, I'm John, the department head of IT."
    );
  });
  it("cheks DepartmentHead job performance", () => {
    head.performJob();
    expect(mockLogger.logs).toContain(
      "Department head is managing the department."
    );
  });
});
