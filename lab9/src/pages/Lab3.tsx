import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  useIonLoading,
} from "@ionic/react";
import "./Tab1.css";
import { Header } from "../components/header";
import { useState } from "react";
import { loadTasks as load } from "../api/loadTasks";

type Task = {
  name: string;
  time: string;
  difficulty: number;
  done: boolean;
}

const filterTasks = (tasks: Task[]) => {
  return tasks.filter(task => task.difficulty > 5);
};

const renderTask = (task: Task) => (<IonItem key={task.name}>
  <IonLabel>{task.name}</IonLabel>
  <IonLabel>{task.time}</IonLabel>
  <IonLabel>{task.difficulty}</IonLabel>
  <IonLabel style={{"color": task.done ? "green": "red"}}>{task.done ? "Done" : "Not done"}</IonLabel>
</IonItem>);

const Lab3: React.FC = () => {
const [tasks, setTasks] = useState<Task[]>([]);
const [present, dismiss] = useIonLoading();
const loadTasks = async () => { 
  present("Завантаження списку завдань");
  const tasks = await load();
  setTasks(tasks);
  dismiss();
};

  return (
    <IonPage id="main">
      <Header indx={3}/>
      <IonContent fullscreen>
        <p>
          15.Список завдань на день<br/>
          • Назва завдання. <br/>
          • Час виконання. <br/>
          • Складність у шкалі від 1 до 10. <br/>
          • Позначка про виконання.<br/>
        Запит. Вивести на екран завдання чия складність більше за 5, позначити усі
        виконанні завдання зеленим, а не виконані червоним
        </p>
        <IonButton
          expand="full"
          onClick={loadTasks}
        > Завантажити
        </IonButton>
        {tasks.length > 0 && <IonList>
          {filterTasks(tasks).map(renderTask)}
        </IonList>}
      </IonContent>
    </IonPage>
  );
};

export default Lab3;
