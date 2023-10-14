import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateWorkerComponent } from './pages/create-worker/create-worker.component';
import { ListWorkersComponent } from './pages/list-workers/list-workers.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"create-worker",component:CreateWorkerComponent},
  {path:"list-workers",component:ListWorkersComponent},
  {path:"user",loadChildren:()=>import("./user/user.module").then(u=>u.UserModule)},
  {path:"admin",loadChildren:()=>import("./admin/admin.module").then(a=>a.AdminModule)},
  {path:"**",component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
