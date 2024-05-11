export abstract class Prism {
  constructor(public name: string) {
    this.name = name;
  }

  abstract getVolume(): number;
}
