import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { HomeComponent } from './home/home.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';

const routes: Routes = [
  {
    path: "",
    component: FileManagerComponent
  },
  {
    path: "files",
    component: FileManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
