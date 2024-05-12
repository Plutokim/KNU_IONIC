class City {
  code: number;
  name: string;
  constructor(code: number, name: string) {
    this.code = code;
    this.name = name;
  }

  toModel() {
    return {
      code: this.code,
      name: this.name,
    };
  }
}

export default City;
