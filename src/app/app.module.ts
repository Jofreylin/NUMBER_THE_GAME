import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionComponent } from './pages/question/question.component';
import { SelectNumberComponent } from './pages/select-number/select-number.component';
import { CountdownComponent } from './pages/countdown/countdown.component';
import { TimeoutComponent } from './pages/timeout/timeout.component';
import { CorrectAnswerComponent } from './pages/correct-answer/correct-answer.component';
import { WrongAnswerComponent } from './pages/wrong-answer/wrong-answer.component';
import { FinishedGameComponent } from './pages/finished-game/finished-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    SelectNumberComponent,
    CountdownComponent,
    TimeoutComponent,
    CorrectAnswerComponent,
    WrongAnswerComponent,
    FinishedGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
