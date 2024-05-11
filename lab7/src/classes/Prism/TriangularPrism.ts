import { Prism } from ".";

export class TriangularPrism extends Prism {
  private S: number;
  private h: number;

  constructor(name: string, S: number, h: number) {
    super(name);
    if (S <= 0) {
      throw new Error("S must be greater than 0");
    }
    if (h <= 0) {
      throw new Error("h must be greater than 0");
    }
    this.S = S;
    this.h = h;
  }

  getVolume(): number {
    return (this.S * this.h) / 2;
  }
}
