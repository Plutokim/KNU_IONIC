import { IonButton, IonCard, IonContent, IonPage } from "@ionic/react";
import "./Tab1.css";
import { Header } from "../components/header";
import CityList from "../classes/rxjs/City/List";
import Controller from "../classes/rxjs/Controller";
import City from "../classes/rxjs/City";
import EnterpriseList from "../classes/rxjs/Enterprise/List";
import Enterprise from "../classes/rxjs/Enterprise";
import { useEffect, useMemo, useState } from "react";

const Lab10: React.FC = () => {
  const cityList = useMemo(() => new CityList(), []);
  const controller = useMemo(() => new Controller(cityList.first), [cityList]);
  const enterpriseList = useMemo(
    () => new EnterpriseList(controller),
    [controller]
  );
  const [city, setCity] = useState(cityList.first);
  useEffect(() => {
    const sub = controller.city$.subscribe(setCity);
    return () => sub.unsubscribe();
  }, []);
  const addCity = (name: string) => {
    cityList.add(new City(cityList.list.length, name));
  };
  const [data, setData] = useState(enterpriseList.dataList);
  const addEnterprise = (
    name: string,
    owner: string,
    employees_count: number,
    revenue: number,
    category: string
  ) => {
    enterpriseList.add(
      new Enterprise(name, owner, employees_count, revenue, category, city.code)
    );
  };
  const nextCity = () => {
    const indx = cityList.list.findIndex((c) => c.code === city.code);
    const nextCity = cityList.list[(indx + 1) % cityList.list.length];
    controller.select(nextCity);
    setData(enterpriseList.dataList);
  };

  return (
    <IonPage id="main">
      <Header indx={10} />
      <IonContent fullscreen>
        <p>Довідник міст та список підприємств різних міст</p>
        <hr />
        <p>Місто: {city.name}</p>
        <div>
          <p>Підприємництва</p>
          {data.map((enterprise, indx) => (
            <IonCard key={indx}>
              {enterprise.map((line, indx) => (
                <p key={indx}>{line}</p>
              ))}
            </IonCard>
          ))}
        </div>
        <IonButton expand="full" onClick={nextCity}>
          Наступне місто
        </IonButton>
        <div>
          <h3>Додати нове місто</h3>
          <form
            onSubmit={(e: any) => {
              e.preventDefault();
              const city = e.target.elements.name.value;
              addCity(city);
            }}
          >
            <label>
              Назва міста:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Додати місто" />
          </form>
        </div>
        <div>
          <h3>Додати нове підприємство</h3>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            onSubmit={(e: any) => {
              e.preventDefault();
              const name = e.target.elements.name.value;
              const owner = e.target.elements.owner.value;
              const employees_count = e.target.elements.employees_count.value;
              const revenue = e.target.elements.revenue.value;
              const category = e.target.elements.category.value;
              addEnterprise(
                name,
                owner,
                parseInt(employees_count),
                parseInt(revenue),
                category
              );
              setData(enterpriseList.dataList);
            }}
          >
            <label>
              Назва підприємства:
              <input type="text" name="name" required />
            </label>
            <label>
              Власник:
              <input type="text" name="owner" required />
            </label>
            <label>
              Кількість працівників:
              <input type="number" name="employees_count" required />
            </label>
            <label>
              Дохід:
              <input type="number" name="revenue" required />
            </label>
            <label>
              Ніша:
              <input type="text" name="category" required />
            </label>
            <input type="submit" value="Додати Підприєництво" />
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Lab10;
