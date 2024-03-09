import { Prism } from ".";

export class TriangularPrism extends Prism {
  private S: number;
  private h: number;

  constructor(name: string, S: number, h: number) {
    super(name);
    this.S = S;
    this.h = h;
  }

  getVolume(): number {
    return (this.S * this.h) / 2;
  }
}
