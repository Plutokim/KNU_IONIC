import { ILog } from "../../interfaces/ILog";
import TabulationService from "./TabulationService";

class MockLogger implements ILog {
  logs: string[] = [];

  log(msg: string): void {
    this.logs.push(msg);
  }
}

describe("TabulationService", () => {
  let result: Map<number, number>;

  beforeEach(() => {
    const logger = new MockLogger();
    const sevice = new TabulationService(logger);
    result = sevice.tabulate(0.2, 3.14, 0.1);
  });

  it("compares for x = 0.2", () => {
    expect(result.get(0.2)).toBeCloseTo((Math.PI - 0.2) / 2);
  });

  it("compares for x = 1.3", () => {
    expect(result.get(1.3)).toBeCloseTo((Math.PI - 1.3) / 2);
  });
});
