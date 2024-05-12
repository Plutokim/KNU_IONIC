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

  toModel() {
    return {
      name: this.name,
      owner: this.owner,
      employees_count: this.employees_count,
      revenue: this.revenue,
      category: this.category,
      city_code: this.city_code,
    };
  }
}

export default Enterprise;
