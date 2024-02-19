import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";
import "./Tab1.css";
import { Header } from "../components/header";
import { useState } from "react";

const Tab1: React.FC = () => {
  const [number1, setNumber1] = useState<number>();
  const [number2, setNumber2] = useState<number>();
  const [number3, setNumber3] = useState<number>();
  const [result, setResult] = useState<number | undefined>();

  const findAverageOrSum = () => {
    if (number1 && number2 && number3) {
      if (number1 < 15 || number2 < 15 || number3 < 15) {
        setResult((number1 + number2 + number3) / 3);
      } else {
        setResult(number1 + number2 + number3);
      }
    } else {
      setResult(undefined);
    }
  };
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <p>
          Задано три числа. Якщо хоч одне з них менше 15, то знайти середнє
          арифметичне всіх. В іншому випадку – суму .
        </p>
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Число 1</IonLabel>
            <IonInput
              type="number"
              value={number1}
              onIonChange={(e) => setNumber1(parseFloat(e.detail.value!))}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Число 2</IonLabel>
            <IonInput
              type="number"
              value={number2}
              onIonChange={(e) => setNumber2(parseFloat(e.detail.value!))}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Число 3</IonLabel>
            <IonInput
              type="number"
              value={number3}
              onIonChange={(e) => setNumber3(parseFloat(e.detail.value!))}
            ></IonInput>
          </IonItem>
        </IonList>

        <IonButton
          expand="full"
          onClick={findAverageOrSum}
          disabled={!number1 || !number2 || !number3}
        >
          Розрахувати
        </IonButton>

        {result !== undefined && (
          <IonItem>
            <IonLabel position="stacked">Результат: {result}</IonLabel>
          </IonItem>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
