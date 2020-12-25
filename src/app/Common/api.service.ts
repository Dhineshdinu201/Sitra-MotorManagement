import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isLogin: boolean = false;
  public bsModalRef: BsModalRef;
  editMasterData: any;
  motorId: any;
  name: string;
  machineId: any;
  masterData: any;
  id: any;
  isMenuClick: boolean = false;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: true,
    class: 'gray modal-lg'
  };
  loginConfig = {
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: true,
    class: 'gray modal-sm'
  };
  constructor(public modalService: BsModalService) { }
  loginClick(login: boolean) {
    this.isLogin = login;
  }
  getLoginClick() {
    return this.isLogin;
  }
  setName(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  openModalWithComponent(LoginComponent: any) {
    this.bsModalRef = this.modalService.show(LoginComponent, this.config);
  }
  openModalWithComponentData(LoginComponent: any, data: object) {
    let dataConfig = {
      backdrop: true,
      ignoreBackdropClick: true,
      keyboard: true,
      class: 'gray modal-sm',
      initialState:data,
    };
    this.bsModalRef = this.modalService.show(LoginComponent, dataConfig);
  }

  openModalWithLoginComponent(LoginComponent: any) {
    this.bsModalRef = this.modalService.show(LoginComponent, this.loginConfig);
  }

  openLogin() {

    this.bsModalRef.content.closeBtnName = 'Close';
  }
  closeModal() {
    this.bsModalRef.hide();

  }
  setEditMasterData(data: any) {
    this.editMasterData = data;
  }
  getEditMasterData() {
    return this.editMasterData;
  }
  setCustId(id: any) {
    this.id = id;
  }
  getCusId() {
    return this.id;
  }
  getMOtorId() {
    return this.motorId
  }
  setMotorId(motorId: any) {
    this.motorId = motorId;
  }
  getMachineId() {
    return this.machineId
  }
  setMachineId(machineId: any) {
    this.machineId = machineId;
  }
  getCriData() {
    return this.masterData;
  }
  setCriData(masterData: any) {
    this.masterData = masterData;
  }
}
