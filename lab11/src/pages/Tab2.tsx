import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";
import "./Tab2.css";
import { Header } from "../components/header";
import { useState } from "react";

const Tab2: React.FC = () => {
  const [startNumber, setStartNumber] = useState<number>();
  const [endNumber, setEndNumber] = useState<number>();
  const [result, setResult] = useState<number | undefined>();

  const calculateProduct = () => {
    if (startNumber && endNumber && startNumber < endNumber) {
      let result = 1;
      for (let i = startNumber; i <= endNumber; i++) {
        if (i % 2 === 0 && i % 7 === 0) {
          result *= i;
        }
      }
      if (result === 1) {
        setResult(0);
      } else {
        setResult(result);
      }
    } else {
      setResult(undefined);
    }
  };
  return (
    <IonPage id="main">
      <Header indx={2} />
      <IonContent fullscreen>
        <p>
          На заданому проміжку чисел [a,b] підрахуйте добуток цілих чисел парних
          і кратних 7.
        </p>
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Початок проміжку</IonLabel>
            <IonInput
              type="number"
              value={startNumber}
              onIonChange={(e) => setStartNumber(parseInt(e.detail.value!))}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Кінець проміжку</IonLabel>
            <IonInput
              type="number"
              value={endNumber}
              onIonChange={(e) => setEndNumber(parseInt(e.detail.value!))}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonButton
          expand="full"
          onClick={calculateProduct}
          disabled={!startNumber || !endNumber}
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

export default Tab2;
