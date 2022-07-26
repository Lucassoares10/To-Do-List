import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Pages da aplicação
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  { path: "",component: HomeComponent} //adicionando as rotas dos componentes a aplicação.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
