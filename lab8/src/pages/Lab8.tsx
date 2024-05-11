import { IonContent, IonPage } from "@ionic/react";
import "./Tab1.css";
import { Header } from "../components/header";
import EmployeeForm from "../components/Form";
import { ReactElement } from "react";

const Lab8 = (): ReactElement => {
  return (
    <IonPage id="main">
      <Header indx={8} />
      <IonContent>
        <EmployeeForm onSubmit={(e) => console.log(e)} />
      </IonContent>
    </IonPage>
  );
};

export default Lab8;
