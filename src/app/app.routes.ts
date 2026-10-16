import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ConsultActiviteComponent } from './consult-activite/consult-activite';

export const routes: Routes = [
  { path: '', component: Home },
  {path: 'index.html', component: Home},
  { path: 'about', component: About },
  { path: 'consultAct/:id', component: ConsultActiviteComponent },
  { path: 'consultAct/:id/:id2', component: ConsultActiviteComponent } // Route avec 2 paramètres
];