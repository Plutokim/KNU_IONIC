import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle,
} from "@ionic/react";

export const Menu = () => (
  <>
    <IonHeader>
      <IonToolbar style={{ padding: "10px" }}>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonMenuToggle>
        <IonList>
          <IonItem routerLink="/task1">Tab1</IonItem>
          <IonItem routerLink="/task2">Tab2</IonItem>
        </IonList>
      </IonMenuToggle>
    </IonContent>
  </>
);
