import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuestionComponent } from './pages/question/question.component';
import { SelectNumberComponent } from './pages/select-number/select-number.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
