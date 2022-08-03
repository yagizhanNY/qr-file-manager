import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { FileService } from '../services/file.service';
import { DeleteValidationModalComponent } from '../shared/delete-validation-modal/delete-validation-modal.component';
import { FilePickerDialogComponent } from '../shared/file-picker-dialog/file-picker-dialog.component';
import { QrCodeModalComponent } from '../shared/qr-code-modal/qr-code-modal.component';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  constructor(private fileService: FileService, private dialog: MatDialog, private _snackBar: MatSnackBar, private eventService: EventService) { }

  files: any = [];
  displayedColumns: string[] = ['name', 'size', 'type', 'createdDate', 'qrCode', 'deleteButton'];

  ngOnInit(): void {
    this.getFiles();

    this.eventService.getDeletedEvent().subscribe(value => {
      if(value === true) {
        this.getFiles();
        this.eventService.setDeletedEventValue(false);
      }
    })
  }

  pdfInputChange(event: any) {
    this.fileService.uploadFile(event.target.files[0])
    .then(() => {
      this.getFiles();
      this._snackBar.open("File uploaded!", "Success", {
        duration: 3000
      })
    })
    
  }

  private getFiles() {
    this.fileService.getFiles()
    .then(files => {
      const fileArray: any[] = files.body;
      this.files = fileArray.filter(f => f.contentType !== "text/plain").map(f => {
        f.size = this.formatBytes(f.size);
        return f;
      });
    })
  }

  createQrCode(element: any) {
    this.dialog.open(QrCodeModalComponent, {
      width: '500px',
      data: {
        fileName: element.name 
      }
    });
  }

  openDeleteDialog(element: any): void {
    console.log(element);
    this.dialog.open(DeleteValidationModalComponent, {
      width: '500px',
      data: {
        element: element
      }
    });
  }

  private formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
