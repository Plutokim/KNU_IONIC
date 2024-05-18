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
import { useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import img from "/lab7.png";
import { LogInternal } from "../classes/LogInternal";
import TabulationService from "../classes/srv/TabulationService";
import RecursionService from "../classes/srv/RecursionService";
import SeriesService from "../classes/srv/SeriesService";

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

const transformIntoText = (x: number, y: number) => `x=${x}, y=${y}`;
const formaToData = (data: Map<number, number>) => {
  const xx = Array.from(data.keys());
  const yy = Array.from(data.values());
  return { xx, yy };
};

const Graph: React.FC = () => {
  const [xN, setxN] = useState<number>(0.1);
  const [xK, setxK] = useState<number>(3.14);
  const [xH, setxH] = useState<number>(0.1);
  const [result, setResult] = useState<{ xx: number[]; yy: number[] }>();
  const [result2, setResult2] = useState<{ xx: number[]; yy: number[] }>();
  const [result3, setResult3] = useState<{ xx: number[]; yy: number[] }>();
  const internalInstance = useMemo(() => new LogInternal(), []);
  const tabulation = useMemo(() => new TabulationService(internalInstance), []);
  const series = useMemo(() => new SeriesService(internalInstance), []);
  const recursion = useMemo(() => new RecursionService(internalInstance), []);

  const data = {
    labels: result?.xx,
    datasets: [
      {
        label: "Графік 1",
        data: result?.yy,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const data2 = {
    labels: result2?.xx,
    datasets: [
      {
        label: "Графік 1",
        data: result2?.yy,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const data3 = {
    labels: result3?.xx,
    datasets: [
      {
        label: "Графік 1",
        data: result3?.yy,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const handleSubmit = () => {
    setResult(formaToData(tabulation.tabulate(xN, xK, xH)));
    setResult2(formaToData(series.tabulate(xN, xK, xH)));
    setResult3(formaToData(recursion.tabulate(xN, xK, xH)));
  };

  return (
    <IonPage id="main">
      <Header indx={7} />
      <IonContent fullscreen>
        <p>Розробити сервіс для табулювання функції відповідно до варіанту</p>
        <p>
          Розробити сервіс для розрахунку значень функції за допомогою ряду
          відповідно до варіанту
        </p>
        <p>
          Розробити сервіс для розрахунку значень функції за допомогою рекурсії
          відповідно до варіанту
        </p>
        <p>Розробити сервіс для табулювання функції відповідно до варіанту</p>
        <p>Розробити сервіс для табулювання функції відповідно до варіанту</p>
        <p>Розробити сервіс для табулювання функції відповідно до варіанту</p>
        <p>
          Розробити сервіс для логування обчислених значень у консоль та
          використати його у попередніх трьох сервісах
        </p>
        <p>
          У основному застосунку підключити сервіси, вивести результати усіх
          розрахунків та побудувати графіки для усіх обрахунків.
        </p>
        <img alt="task-info-1" src={img} />
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
        </IonList>

        <IonButton expand="full" onClick={handleSubmit}>
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

        {result2 && (
          <IonItem>
            <div style={{ padding: "25px 0" }}>
              {result2.xx.map((x, i) => (
                <IonLabel position="stacked" key={i}>
                  {transformIntoText(x, result2.yy[i])}
                </IonLabel>
              ))}
            </div>
            <Line data={data2} />
          </IonItem>
        )}

        {result3 && (
          <IonItem>
            <div style={{ padding: "25px 0" }}>
              {result3.xx.map((x, i) => (
                <IonLabel position="stacked" key={i}>
                  {transformIntoText(x, result3.yy[i])}
                </IonLabel>
              ))}
            </div>
            <Line data={data3} />
          </IonItem>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Graph;
