import { Prism } from ".";

export class QuadrilateralPrism extends Prism {
  private a: number;
  private h: number;

  constructor(name: string, a: number, h: number) {
    super(name);
    this.a = a;
    this.h = h;
  }

  getVolume(): number {
    return this.a * this.a * this.h;
  }
}
