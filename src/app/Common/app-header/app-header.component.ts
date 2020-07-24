import { Component, OnInit, Input, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from '../login/login.component';
import { MenuListComponent } from '../menu-list/menu-list.component';

import { DataServiceService } from '../data-service.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  
  isCollapsed = false;
  searchText: string;
  name: string;
  bsModalRef: BsModalRef;
  @Input() title: string;
  @Output() messageEvent = new EventEmitter<boolean>();
  constructor(public modalService: BsModalService, private toastr: ToastrService, private apiservice: ApiService, private dataService: DataServiceService) { }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    
  }

  isMenuOpen() {
    
    this.isCollapsed = !this.isCollapsed;
    this.messageEvent.emit(this.isCollapsed);
  }
  confirm(): void {
    this.message = 'Confirmed!';
    this.toastr.success('Motor Management!', 'Logoutsucessfull');
    this.apiservice.setCustId(null);
    this.apiservice.loginClick(false);
    this.modalRef.hide();
  }
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
    this.toastr.error('Motor Management!', 'Logoutsucessfull');
  }

  async openModalWithComponent() {
    this.apiservice.openModalWithComponent(LoginComponent);
  }
  receiveMessage($event) {
    this.isCollapsed = $event
    this.messageEvent.emit(this.isCollapsed);
  }
  ngOnInit() {
   
  }
  ngAfterViewChecked() {
    this.name = this.apiservice.getName();
  }
}
