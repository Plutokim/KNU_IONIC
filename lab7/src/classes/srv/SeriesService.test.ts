import { ILog } from "../../interfaces/ILog";
import SeriesService from "./SeriesService";

class MockLogger implements ILog {
  logs: string[] = [];

  log(msg: string): void {
    this.logs.push(msg);
  }
}

describe("SeriesService", () => {
  let result: Map<number, number>;

  beforeEach(() => {
    const logger = new MockLogger();
    const sevice = new SeriesService(logger);
    result = sevice.tabulate(0.2, 3.14, 0.1);
  });

  it("compares for x = 0.2", () => {
    expect(result.get(0.2)).toBeCloseTo((Math.PI - 0.2) / 2, 1);
  });

  it("compares for x = 1.3", () => {
    expect(result.get(1.3)).toBeCloseTo((Math.PI - 1.3) / 2);
  });
});
