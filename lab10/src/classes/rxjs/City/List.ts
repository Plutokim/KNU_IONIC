import City from ".";

class CityList {
  list: City[] = [];

  constructor() {
    this.add(new City(0, "Melitopol"));
    this.add(new City(1, "Kyiv"));
    this.add(new City(2, "Kharkiv"));
    this.add(new City(3, "Lviv"));
    this.add(new City(4, "Odessa"));
  }

  get first(): City {
    return this.list[0];
  }

  add(city: City) {
    this.list.push(city);
  }
}

export default CityList;
