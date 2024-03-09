import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import "./Tab3.css";
import { Header } from "../components/header";
import { useState } from "react";

const Tab3: React.FC = () => {
  const [matrixSize, setMatrixSize] = useState<number>(3); // Розмір матриці
  const [matrix, setMatrix] = useState<number[][]>([]);

  const generateMatrix = () => {
    const newMatrix: number[][] = [];
    for (let i = 0; i < matrixSize; i++) {
      const row: number[] = [];
      for (let j = 0; j < matrixSize; j++) {
        row.push(Math.floor(Math.random() * 10));
      }
      newMatrix.push(row);
    }
    setMatrix(newMatrix);
  };

  const sumOfEvenRows = (rowIndex: number): number => {
    let sum = 0;
    for (let j = 0; j < matrixSize; j++) {
      sum += matrix[rowIndex][j];
    }
    return sum;
  };

  const getRowStyle = (rowIndex: number): React.CSSProperties => {
    return {
      backgroundColor: (rowIndex + 1) % 2 === 0 ? "blue" : "",
    };
  };

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <p>
          Згенерувати матрицю розміром NxN. Знайти суму кожного парного рядка
          матриці. Виокремити ці рядки за допомогою кольору
        </p>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Розмір матриці</IonLabel>
                <IonInput
                  type="number"
                  value={matrixSize}
                  onIonChange={(e) => setMatrixSize(parseInt(e.detail.value!))}
                ></IonInput>
              </IonItem>

              <IonButton
                expand="full"
                onClick={generateMatrix}
                disabled={!matrixSize}
              >
                Згенерувати Матрицю
              </IonButton>
            </IonCol>
          </IonRow>
          {matrix.map((row, rowIndex) => (
            <IonRow key={rowIndex} style={getRowStyle(rowIndex)}>
              {row.map((cell, cellIndex) => (
                <IonCol key={cellIndex}>{cell}</IonCol>
              ))}
              {(rowIndex + 1) % 2 === 0 ? (
                <IonCol>Сумма: {sumOfEvenRows(rowIndex)}</IonCol>
              ): <IonCol/>}
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
