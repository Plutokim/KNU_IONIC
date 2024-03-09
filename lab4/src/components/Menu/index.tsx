import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle,
  IonMenu,
} from "@ionic/react";

export const Menu = () => (
  <IonMenu side="start" menuId="first" contentId="main">
    <IonHeader>
      <IonToolbar style={{ padding: "10px" }}>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonMenuToggle>
        <IonList>
          <IonItem routerLink="/lab1/task1">Лабораторна робота номер 1</IonItem>
          <IonItem routerLink="/lab2">Лабораторна робота номер 2</IonItem>
          <IonItem routerLink="/lab3">Лабораторна робота номер 3</IonItem>
          <IonItem routerLink="/lab4">Лабораторна робота номер 4</IonItem>
        </IonList>
      </IonMenuToggle>
    </IonContent>
  </IonMenu>
);
