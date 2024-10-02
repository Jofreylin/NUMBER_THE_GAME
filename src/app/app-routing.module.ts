import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuestionComponent } from './pages/question/question.component';
import { SelectNumberComponent } from './pages/select-number/select-number.component';
import { CountdownComponent } from './pages/countdown/countdown.component';
import { TimeoutComponent } from './pages/timeout/timeout.component';
import { CorrectAnswerComponent } from './pages/correct-answer/correct-answer.component';
import { WrongAnswerComponent } from './pages/wrong-answer/wrong-answer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'question',
    component: QuestionComponent
  },
  {
    path: 'select',
    component: SelectNumberComponent
  },
  {
    path: 'countdown',
    component: CountdownComponent
  },
  {
    path: 'timeout',
    component: TimeoutComponent
  },
  {
    path: 'correct-answer',
    component: CorrectAnswerComponent
  },
  {
    path: 'wrong-answer',
    component: WrongAnswerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
