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
import { ReactElement, useState } from "react";
import imgSrc from "../../public/lab4.png";
import { Prism } from "../classes/Prism";
import { TriangularPrism } from "../classes/Prism/TriangularPrism";
import { QuadrilateralPrism } from "../classes/Prism/QuadrilateralPrism";

const findPrismIndxWithMinVolume = (prisms: Prism[]): number => {
  if (prisms.length === 0) return -1;
  let min = prisms[0].getVolume();
  let indx = 0;
  for (let i = 1; i < prisms.length; i++) {
    if (prisms[i].getVolume() < min) {
      min = prisms[i].getVolume();
      indx = i;
    }
  }
  return indx;
};

const randInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const generatePrisms = (amount: number): Prism[] => {
  const prisms: Prism[] = [];
  for (let i = 0; i < amount; i++) {
    const rnd = randInt(2);
    if (rnd === 0) {
      prisms.push(
        new TriangularPrism(`TriangularPrism${i}`, randInt(100), randInt(100))
      );
    } else {
      prisms.push(
        new QuadrilateralPrism(
          `QuadrilateralPrism${i}`,
          randInt(100),
          randInt(100)
        )
      );
    }
  }
  return prisms;
};

const renderFunc = (p: Prism, i: number, minIndx: number): ReactElement => {
  return (
    <IonItem key={i}>
      <IonLabel style={{ color: i === minIndx ? "green" : "#666666" }}>
        <h2>Prism: {p.name}</h2>
        <p>Volume: {p.getVolume()}</p>
      </IonLabel>
    </IonItem>
  );
};

const Lab4: React.FC = () => {
  const [amount, setAmount] = useState<number>(5);
  const [prisms, setPrisms] = useState<Prism[]>([]);
  const [minIndx, setMinIndx] = useState<number>(-1);
  const handleGenerate = () => {
    const prisms = generatePrisms(amount);
    const minIndx = findPrismIndxWithMinVolume(prisms);
    setPrisms(prisms);
    setMinIndx(minIndx);
  };
  return (
    <IonPage id="main">
      <Header indx={4} />
      <IonContent fullscreen>
        <p>
          Скласти програму з абстрактним батьківським класом і двома обʼєктами –
          нащадками.
          Реалізувати циклічне виведення параметрів обʼєктів, використовуючи 
          поліморфний контейнер -  масив обʼєктів базового класу
        </p>
        <img src={imgSrc} alt="task-img" />
        <p>Завдання 2: 15. Знайти фігуру з мінімальним обʼємом.</p>
        <IonItem>
          <IonLabel position="stacked">Кількість обʼєктів</IonLabel>
          <IonInput
            aria-label="amount"
            type="number"
            value={amount}
            onIonChange={(e) => setAmount(parseInt(e.detail.value!))}
          ></IonInput>
        </IonItem>
        <IonButton expand="full" onClick={handleGenerate} disabled={amount < 5}>
          Згенерувати
        </IonButton>
        {prisms.length > 0 && (
          <IonList>{prisms.map((p, i) => renderFunc(p, i, minIndx))}</IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Lab4;
