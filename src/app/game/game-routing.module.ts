import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameFieldComponent} from './game-field/game-field.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'game', component: GameFieldComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
