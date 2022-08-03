import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-picker-dialog',
  templateUrl: './file-picker-dialog.component.html',
  styleUrls: ['./file-picker-dialog.component.css']
})
export class FilePickerDialogComponent implements OnInit {

  constructor(private fileService: FileService, private router: Router) { }

  ngOnInit(): void {
  }

  pdfInputChange(event: any) {
    this.fileService.uploadFile(event.target.files[0]);
    this.router.navigate(["files"])
  }

}
