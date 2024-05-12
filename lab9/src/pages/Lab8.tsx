import { IonContent, IonPage } from "@ionic/react";
import "./Tab1.css";
import { Header } from "../components/header";
import EmployeeForm, { Employee } from "../components/Form";
import { ReactElement, useState } from "react";
import EmployeeItem from "../components/Employee";

const Lab8 = (): ReactElement => {
  const [list, setList] = useState<Employee[]>([]);
  const updateEmployee = (e: Employee) => {
    setList((prev) => prev.map((el) => (el.id === e.id ? e : el)));
  };
  return (
    <IonPage id="main" style={{overflow:"scroll"}}>
      <Header indx={8} />
      <div>
        <EmployeeForm onSubmit={(e) => setList((prev) => [...prev, e])} />
      </div>
      <div>
        {list.map((e) => (
          <EmployeeItem key={e.id} onSubmit={() => updateEmployee(e)} e={e} />
        ))}
      </div>
    </IonPage>
  );
};

export default Lab8;
