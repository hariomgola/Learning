import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssFloatComponent } from './css-float/css-float.component';

const routes: Routes = [
  {
    path: '',
    component: CssFloatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const ApplicationRoutingModule = [CssFloatComponent];
