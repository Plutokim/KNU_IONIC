import { IonButton, IonContent, IonPage } from "@ionic/react";
import "./Tab1.css";
import { Header } from "../components/header";
import { useMemo } from "react";
import { LogExternal } from "../classes/LogExternal";
import { LogInternal } from "../classes/LogInternal";
import { Student } from "../classes/Student";
import { Teacher } from "../classes/Teacher";
import { DepartmentHead } from "../classes/DepartmentHead";

const Lab6: React.FC = () => {
  const externalInstance = useMemo(() => new LogExternal(), []);
  const internalInstance = useMemo(() => new LogInternal(), []);
  const studentInstance = useMemo(() => new Student("Alex", 20), []);
  console.log(studentInstance.introduction());
  const teacherInstance = useMemo(
    () => new Teacher("John", 30, "CS", externalInstance),
    []
  );
  console.log(teacherInstance.introduction());
  const depatmentHeadInstance = useMemo(
    () => new DepartmentHead("Jane", 40, "History", internalInstance),
    []
  );
  console.log(depatmentHeadInstance.introduction());
  return (
    <IonPage id="main">
      <Header indx={6} />
      <IonContent fullscreen>
        <p>Студент, викладач, персона, завідувач кафедрою</p>
        <hr />
        <IonButton expand="full" onClick={() => teacherInstance.performJob()}>
          Отримати Інформацію про викладача
        </IonButton>
        <IonButton
          expand="full"
          onClick={() => depatmentHeadInstance.performJob()}
        >
          Отримати Інформацію про голови відділу
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Lab6;
