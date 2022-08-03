import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-qr-code-modal',
  templateUrl: './qr-code-modal.component.html',
  styleUrls: ['./qr-code-modal.component.css']
})
export class QrCodeModalComponent implements OnInit {

  qrData: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.qrData = environment.storageUrl + environment.bucketName + "/" + this.data.fileName;
  }

  saveAsImage() {
    var canvas = document.getElementsByClassName("qrcode")[0].firstChild as any;
    var anchor = document.createElement("a");
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "qrcode.png";
    anchor.click();
  }

}
