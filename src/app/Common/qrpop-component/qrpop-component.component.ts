import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-qrpop-component',
  templateUrl: './qrpop-component.component.html',
  styleUrls: ['./qrpop-component.component.css']
})
export class QRPopComponentComponent implements OnInit {
  @ViewChild('screen', { static: false }) screen: any;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('downloadLink', { static: false }) downloadLink: ElementRef;
  value:any;
  title = 'app';
  elementType = 'url';
  values = [];
  data: string;
  constructor() { }

  ngOnInit() {
    this.values.push(this.value)
    this.data = JSON.stringify(this.values);
  }
  downloadQRCode() {
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = this.value.Motor_Name;
      this.downloadLink.nativeElement.click();
    });
  }
}
