import { ILog } from "../../interfaces/ILog";

export class RecursionService {
  constructor(private logger: ILog) {}
  calculate(x: number, precision: number = 10e-6, j: number = 1): number {
    const term = Math.sin(j * x) / j;

    if (Math.abs(term) < precision) {
      return term;
    }

    return term + this.calculate(x, precision, j + 1);
  }

  tabulate(
    startX: number,
    endX: number,
    stepSize: number,
    precision: number = 10e-6
  ): Map<number, number> {
    const xy = new Map();
    this.logger.log(
      `Табулювання значень функції від ${startX} до ${endX} з кроком ${stepSize}:`
    );
    for (let x = startX; x <= endX; x += stepSize) {
      const result = ((Math.PI - x) / 2 + this.calculate(x, precision)) / 2;
      this.logger.log(`x: ${x.toFixed(2)}, Значення: ${result.toFixed(5)}`);
      xy.set(x, result);
    }
    return xy;
  }
}

export default RecursionService;
