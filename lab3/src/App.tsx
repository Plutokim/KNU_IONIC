import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonMenu,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import { Menu } from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Header } from './components/header';
import Graph from './pages/Graph';
import Lab3 from './pages/Lab3';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/task1">
            <Tab1 />
          </Route>
          <Route exact path="/task2">
            <Tab2 />
          </Route>
          <Route path="/task3">
            <Tab3 />
          </Route>
          <Route path="/lab2/graph">
          <Graph />
          </Route>
          <Route path="/lab3">
          <Lab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/task1" />
          </Route>
        </IonRouterOutlet>
        <IonMenu side="start" menuId="first" contentId="main">
           <Menu/>
        </IonMenu>
          
        <IonTabBar slot="bottom">
          <IonTabButton tab="task1" href="/task1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Task 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="task2" href="/task2">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Task 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="task3" href="/task3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Task 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
