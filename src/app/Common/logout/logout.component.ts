import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public toastr: ToastrService, public apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.setName("");
    this.showSuccess();

  }
  showSuccess() {
    this.toastr.success('Motor Management!', 'Logout Success!');
  }

}
