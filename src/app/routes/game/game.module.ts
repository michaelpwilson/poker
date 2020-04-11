// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// app stuff
import { GameComponent } from './game.component';
import { GameService } from './game.service';
// component modules
import { TableModule } from '../../components/table/table.module';
import { PlayerModule } from '../../components/player/player.module';
import { ChatModule } from '../../components/chat/chat.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GameComponent
  }
];

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    PlayerModule,
    ChatModule,
    RouterModule.forChild(routes)
  ],
  providers: [GameService]
})
export class GameModule { }
