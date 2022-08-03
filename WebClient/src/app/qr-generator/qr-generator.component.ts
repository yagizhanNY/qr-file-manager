import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.css']
})
export class QrGeneratorComponent implements OnInit {

  public qrData: string = "";
  public fileUrl = "";

  constructor() { }

  ngOnInit(): void {
  }

  generateQrCode(fileUrl: string) {
    this.qrData = environment.storageUrl + environment.bucketName + "/" + fileUrl;
  }
}
