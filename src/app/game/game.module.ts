import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameFieldComponent } from './game-field/game-field.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [GameFieldComponent, MainComponent]
})
export class GameModule { }
