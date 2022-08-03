import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';
import { HomeComponent } from './home/home.component';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClientModule } from '@angular/common/http';
import { FileManagerComponent } from './file-manager/file-manager.component';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FilePickerDialogComponent } from './shared/file-picker-dialog/file-picker-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { QrCodeModalComponent } from './shared/qr-code-modal/qr-code-modal.component';
import { DeleteValidationModalComponent } from './shared/delete-validation-modal/delete-validation-modal.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';

import { ShareMenuComponent } from './shared/share-menu/share-menu.component';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QrGeneratorComponent,
    HomeComponent,
    FileManagerComponent,
    FilePickerDialogComponent,
    QrCodeModalComponent,
    DeleteValidationModalComponent,
    ShareMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QRCodeModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatMenuModule,
    ShareButtonsModule,
    ShareIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
