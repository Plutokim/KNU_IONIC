import { Prism } from ".";

export class PentagonalPrism extends Prism {
  private a: number;
  private h: number;

  constructor(name: string, a: number, h: number) {
    super(name);
    this.a = a;
    this.h = h;
  }

  getVolume(): number {
    return (5 / 2) * this.a * this.h;
  }
}
