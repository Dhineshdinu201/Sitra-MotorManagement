import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  spresp: any[]=[];
  getSmartPhone:any=[];
  headers:any;
  uname: string;
  psw: string;
  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };
   body:string;
  constructor(private dataservice: DataServiceService,private apiservice: ApiService,private toastr: ToastrService) {
   }
  onSubmit() {
    this.body = 'username='+this.uname
    +'&password='+this.psw;
    this.login();
  }
  ngOnInit() {
  }
  login() {
    debugger;
    this.spresp=[];
    
    this.dataservice
      .login(this.body)
      .subscribe(resp => {
        console.log(resp);
        if(resp!=null){
          this.apiservice.loginClick(true);
          this.apiservice.setName(this.uname);
          this.toastr.success('MOTOR MANAGEMENT!', 'Login Sucessfull');
          this.apiservice.setCustId(resp);
          this.apiservice.closeModal();
        }
        else {
          this.toastr.warning('MOTOR MANAGEMENT!', 'Login Failure');
        }
        return this.spresp.push(resp);
      });
  }
}
