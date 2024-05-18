import { ILog } from "../../interfaces/ILog";

export class SeriesService {
  constructor(private logger: ILog) {}
  calculate(x: number, precision: number = 10e-6): number {
    let sum = 0;
    let i = 1;
    let term = Math.sin(i * x) / i;

    while (Math.abs(term) >= precision) {
      sum += term;
      i++;
      term = Math.sin(i * x) / i;
    }

    return sum;
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
      xy.set(x, result);
      this.logger.log("x=" + x.toFixed(2) + " y=" + result.toFixed(4));
    }
    return xy;
  }
}

export default SeriesService;
