import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Graph.css";
import { Header } from "../components/header";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import img1 from "/lab2.1.png";
import img2 from "/lab2.2.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Результати",
    },
  },
};

//y=x^5ctg(2x^3)
const fisrtFunction = (x: number) => {
  return Math.pow(x, 5) * Math.atan(2 * Math.pow(x, 3));
};

//y=5/(tg(2x+3)+1)
const secondFunction = (x: number) => {
  return 5 / (Math.atan(2 * x + 3) + 1);
};

//y=tg(x^2+1)e^-x
const thirdFunction = (x: number) => {
  return Math.atan(Math.pow(x, 2) + 1) * Math.exp(-x);
};

const calculate = (xn: number, xk: number, xh: number, a: number) => {
  const xx: number[] = [];
  const yy: number[] = [];
  for (let i = xn; i <= xk; i += xh) {
    xx.push(+i.toFixed(3));
    if (i <= 0) {
      yy.push(fisrtFunction(i));
    } else if (i > 0 && i <= a) {
      yy.push(secondFunction(i));
    } else {
      yy.push(thirdFunction(i));
    }
  }
  return { xx, yy };
};

const transformIntoText = (x: number, y: number) => `x=${x}, y=${y}`;

const Graph: React.FC = () => {
  const [xN, setxN] = useState<number>(3.75);
  const [xK, setxK] = useState<number>(17.7);
  const [xH, setxH] = useState<number>(0.4);
  const [a, setA] = useState<number>();
  const [result, setResult] = useState<{ xx: number[]; yy: number[] }>();
  const isBtnDisabled = () => {
    return !xN || !xK || !xH || !a;
  };
  const handleSubmit = () => {
    setResult(calculate(xN!, xK!, xH!, a!));
  };
  const data = {
    labels: result?.xx,
    datasets: [
      {
        label: "Графік функції",
        data: result?.yy,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <IonPage id="main">
      <Header indx={2} />
      <IonContent fullscreen>
        <p>
          Створити додаток для табулювання і виведення на екран значення
          функції, також побудувати графік функції:
        </p>
        <img alt="task-info-1" src={img1} />
        <p>
          Вирази для функції f1 (x), f2 (x) і f3 (x) вибрати з таблиці. У формі
          передбачити поля для введення значення параметра а і змінної х,
          виведення результату обчислення y, а також кнопки для здійснення
          розрахунку. Вирази для функції f1 (x), f2 (x) і f3 (x) вибрати з
          таблиці.
        </p>
        <img alt="task-info-2" src={img2} />
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Xn</IonLabel>
            <IonInput
              type="number"
              aria-label="Xn"
              value={xN}
              onIonChange={(e) => setxN(parseFloat(e.detail.value!))}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Xk</IonLabel>
            <IonInput
              type="number"
              aria-label="Xk"
              value={xK}
              onIonChange={(e) => setxK(parseFloat(e.detail.value!))}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Xh</IonLabel>
            <IonInput
              type="number"
              aria-label="Xh"
              value={xH}
              onIonChange={(e) => setxH(parseFloat(e.detail.value!))}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">A</IonLabel>
            <IonInput
              type="number"
              aria-label="a"
              value={a}
              onIonChange={(e) => setA(parseFloat(e.detail.value!))}
            ></IonInput>
          </IonItem>
        </IonList>

        <IonButton
          expand="full"
          onClick={handleSubmit}
          disabled={isBtnDisabled()}
        >
          Розрахувати
        </IonButton>

        {result && (
          <IonItem>
            <div style={{ padding: "25px 0" }}>
              {result.xx.map((x, i) => (
                <IonLabel position="stacked" key={i}>
                  {transformIntoText(x, result.yy[i])}
                </IonLabel>
              ))}
            </div>
            <Line data={data} />
          </IonItem>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Graph;
