import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed: boolean;
  constructor(private toastr: ToastrService) {
    
  }
  receiveMessage($event) {
    this.isCollapsed = $event
    console.log(this.isCollapsed);
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  title = 'motorMannagement';
}
