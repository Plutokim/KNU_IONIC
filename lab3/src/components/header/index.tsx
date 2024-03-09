import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

type Props = {
  indx?: number;
}

export const Header = ({indx = 1}:Props) => (
  <IonHeader>
    <IonToolbar style={{ padding: "10px" }}>
      <IonTitle>Лабораторна робота #{indx}</IonTitle>
      <IonTitle>
        Виконав студент групи КН-32 Козачек Олександр Олексійович
      </IonTitle>
      <IonTitle>Варіант 15</IonTitle>
    </IonToolbar>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton>cddccdcd</IonMenuButton>
      </IonButtons>
      <IonTitle>Лабораторні роботи</IonTitle>
    </IonToolbar>
  </IonHeader>
);
