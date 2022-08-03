import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from 'src/app/services/event.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-delete-validation-modal',
  templateUrl: './delete-validation-modal.component.html',
  styleUrls: ['./delete-validation-modal.component.css']
})
export class DeleteValidationModalComponent implements OnInit {

  constructor(private fileService: FileService, 
    private dialog: MatDialogRef<DeleteValidationModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eventService: EventService,
    private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    console.log(this.data.element);
  }

  deleteFile() {
    this.fileService.deleteFile(this.data.element.name)
    .then(() => {
      this.dialog.close();
      this.eventService.setDeletedEventValue(true);
      this._snackBar.open("File deleted!", "Success", {
        duration: 2000
      })
    })
  }

}
