import { ILog } from "../../interfaces/ILog";

class TabulationService {
  constructor(private logger: ILog) {}
  tabulate(
    xn: number = 0.1,
    xk: number = 3.14,
    h: number = 0.1
  ): Map<number, number> {
    const xy = new Map();
    let x = xn;
    let y = 0.0;
    this.logger.log(
      `Табулювання значень функції від ${xn} до ${xk} з кроком ${h}:`
    );
    while (x <= xk) {
      y = (Math.PI - x) / 2;
      xy.set(x, y);
      this.logger.log("x=" + x.toFixed(2) + " y=" + y.toFixed(4));
      x = x + h;
    }
    return xy;
  }
}

export default TabulationService;
