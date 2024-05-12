class Enterprise {
  name: string;
  owner: string;
  employees_count: number;
  revenue: number;
  category: string;
  city_code: number;
  constructor(
    name: string,
    owner: string,
    employees_count: number,
    revenue: number,
    category: string,
    city_code: number
  ) {
    this.name = name;
    this.owner = owner;
    this.employees_count = employees_count;
    this.revenue = revenue;
    this.category = category;
    this.city_code = city_code;
  }
}

export default Enterprise;
