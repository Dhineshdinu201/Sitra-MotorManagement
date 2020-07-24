import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';
import { HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/xml',
    'Authorization': 'jwt-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  BaseUrl:string= 'http://lab.sitraonline.org/motor_management/index.php/api/';
  masterData:any;
  constructor(private http: HttpClient, private toastr: ToastrService) { }
  
//LOGIN
  login(body:string): Observable<any> {
    return this.http.post<any>(this.BaseUrl+'user_authentication', body, httpOptions)
      .pipe(
        catchError(this.handleError('addSmartphone', body))
      );
  }

//************************************************************************************************************************************** */
//Department MASTER

//SELECT ALL
  getAllDepartmentMasterData() {
    
   return this.http.get(this.BaseUrl+"selectActiveDepartmentData");
  
  }
 
  addAllDepartmentMasterData(masterData: any): Observable<any> {
    this.getAllDepartmentMasterData()
  return this.http.post<any>(this.BaseUrl+"insertDepartmentData", masterData, httpOptions)
    .pipe(
      catchError(this.handleError('insertDepartmentData', masterData))
    );
}

  updateDepartmentMasterData(masterData: any): Observable<any> {
    this.getAllDepartmentMasterData()
    return this.http.post<any>(this.BaseUrl + 'updateDepartmentData', masterData, httpOptions)
    .pipe(
      catchError(this.handleError('updateDepartmentData', masterData))
  );
  

}
  DeleteDepartmentMasterData(masterData: any): Observable<any> {
    this.getAllDepartmentMasterData()
    return this.http.post<any>(this.BaseUrl + 'deleteDepartmentData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteDepartmentData', masterData))
      );

  }
//************************************************************************************************************************************** */
  //Make MAster

  getAllMakeMasterData() {

    return this.http.get(this.BaseUrl + "selectActiveMakeData");

  }
  selectActiveMakeData() {
    return this.http.get(this.BaseUrl + "selectActiveMakeData");
  }


  addAllMakeMasterData(masterData: any): Observable<any> {
    this.getAllMakeMasterData()
    return this.http.post<any>(this.BaseUrl + "insertMakeData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertMakeData', masterData))
      );
  }
  

  updateMakeMasterData(masterData: any): Observable<any> {
    this.getAllMakeMasterData()
    return this.http.post<any>(this.BaseUrl + 'updateMakeData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('updateMakeData', masterData))
      );
  } 

  DeleteMakeMasterData(masterData: any): Observable<any> {
    this.getAllMakeMasterData()
    return this.http.post<any>(this.BaseUrl + 'deleteMakeData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteMakeData', masterData))
      );

  }
  //************************************************************************************************************************************** */

  //Machinery MAster Data
  getAllMachineryMasterData() {
    
    return this.http.get(this.BaseUrl + "selectAllMachineryData");

  }
  getActiveMachineryMasterData() {
    return this.http.get(this.BaseUrl + "selectActiveMachineryData");
  }
  addAllMachineryMasterData(masterData: any): Observable<any> {
    this.getAllMachineryMasterData();
    return this.http.post<any>(this.BaseUrl + "insertMachineryData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertMachineryData', masterData))
      );
  } 


  updateMachineryMasterData(masterData: any): Observable<any> {
    this.getAllMachineryMasterData();
    return this.http.post<any>(this.BaseUrl + 'updateMachineryData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('updateMachineryData', masterData))
      );
    
    
  }
  DeleteMachineryMasterData(masterData: any): Observable<any> {
    this.getAllMachineryMasterData();
    return this.http.post<any>(this.BaseUrl + 'deleteMachineryData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteMachineryData', masterData))
      );

  }


  //************************************************************************************************************************************** */

  //Motor Type
  getAllMotorTypeData() {
    

    return this.http.get(this.BaseUrl + "selectActiveMotor_TypeData");

  }
  getAllActiveMotorTypeData() {


    return this.http.get(this.BaseUrl + "selectActiveMotor_TypeData");

  }
  addAllMotorTypeData(masterData: any): Observable<any> {
    this.getAllMotorTypeData();
    return this.http.post<any>(this.BaseUrl + "insertMotor_TypeData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertMotor_TypeData', masterData))
      );
  }
  

  updateMotorTypeData(masterData: any): Observable<any> {
    this.getAllMotorTypeData();
    return this.http.post<any>(this.BaseUrl + 'updateMotor_TypeData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('updateMotor_TypeData', masterData))
      );
    

  }
  DeleteMotorTypeData(masterData: any): Observable<any> {
    this.getAllMotorTypeData();
    return this.http.post<any>(this.BaseUrl + 'deleteMotor_TypeData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteMotor_TypeData', masterData))
      );

  }

   //************************************************************************************************************************************** */
  //MotorNamePlate

  getAllMotorNamePlate() {
    return this.http.get(this.BaseUrl + "selectAllMotor_name_plate_detailsData");

  } 
  getActiveMotorNamePlate() {
    
    return this.http.get(this.BaseUrl + "selectActiveMotor_name_plate_detailsData");

  } 

  addAllMotorNamePlate(masterData: any): Observable<any> {
    this.getAllMotorNamePlate();
    return this.http.post<any>(this.BaseUrl + "insertMotor_name_plate_detailsData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertMotor_name_plate_detailsData', masterData))
      );
  }

  
  updateMotorNamePlate(masterData: any): Observable<any> {
    this.getAllMotorNamePlate();
    return this.http.post<any>(this.BaseUrl + 'updateMotor_name_plate_detailsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('updateMotor_name_plate_detailsData', masterData))
      );


  }
  DeleteMotorNamePlate(masterData: any): Observable<any> {
    this.getAllMotorNamePlate();
    return this.http.post<any>(this.BaseUrl + 'deleteMotor_name_plate_detailsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteMotor_name_plate_detailsData', masterData))
      );

  }
   //************************************************************************************************************************************** */
  //Motor Details
  getAllMotorDetails() {

    return this.http.get(this.BaseUrl + "selectAllMotor_detailsData");

  }
  addAllMotorDetails(masterData: any): Observable<any> {
    this.getAllMotorDetails();
    return this.http.post<any>(this.BaseUrl + "insertMotor_detailsData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertMotor_detailsData', masterData))
      );
  }


  updateMotorDetails(masterData: any): Observable<any> {
    this.getAllMotorDetails();
    return this.http.post<any>(this.BaseUrl + 'updateMotor_detailsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('updateMotor_detailsData', masterData))
      );


  }
  DeleteMotorDetails(masterData: any): Observable<any> {
    this.getAllMotorDetails();
    return this.http.post<any>(this.BaseUrl + 'deleteMotor_detailsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteMotor_detailsData', masterData))
      );

  }
  //************************************************************************************************************************************** */
  //No Load Test Result
  getAllActiveNoLoadTestResultsData() {

    return this.http.get(this.BaseUrl + "selectActiveNo_load_test_resultsData");

  }
  addAllNoLoadTestResultsData(masterData: any): Observable<any> {
    this.getAllActiveNoLoadTestResultsData();
    return this.http.post<any>(this.BaseUrl + "insertNo_load_test_resultsData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertNo_load_test_resultsData', masterData))
      );
  }


  updateNoLoadTestResultsData(masterData: any): Observable<any> {
    this.getAllActiveNoLoadTestResultsData();
    return this.http.post<any>(this.BaseUrl + 'updateNo_load_test_resultsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('updateNo_load_test_resultsData', masterData))
      );


  }
  DeleteNoLoadTestResultsData(masterData: any): Observable<any> {
    this.getAllActiveNoLoadTestResultsData();
    return this.http.post<any>(this.BaseUrl + 'deleteNo_load_test_resultsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteNo_load_test_resultsData', masterData))
      );

  }
  //************************************************************************************************************************************** */
  //NoLoadMeasurementsData
  getAllNoLoadMeasurementsData() {
    return this.http.get(this.BaseUrl + "selectAllNo_load_measurementsData");
  }
  addAllNoLoadMeasurementsData(masterData: any): Observable<any> {
    this.getAllNoLoadMeasurementsData();
    return this.http.post<any>(this.BaseUrl + "insertNo_load_measurementsData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertNo_load_measurementsData', masterData))
      );
  }


  updateNoLoadMeasurementsData(masterData: any): Observable<any> {
    this.getAllNoLoadMeasurementsData();
    return this.http.post<any>(this.BaseUrl + 'updateNo_load_measurementsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('updateNo_load_measurementsData', masterData))
      );


  }
  DeleteNoLoadMeasurementsData(masterData: any): Observable<any> {
    this.getAllNoLoadMeasurementsData();
    return this.http.post<any>(this.BaseUrl + 'deleteNo_load_measurementsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteNo_load_measurementsData', masterData))
      );

  }
  //************************************************************************************************************************************** */
  //NoLoadPowerMeasurementsDataModel
  getAllNoLoadPowerMeasurementsDataModel() {
    return this.http.get(this.BaseUrl + "selectAllNo_load_power_measurementsData");
  }
  addAllNoLoadPowerMeasurementsData(masterData: any): Observable<any> {
    this.getAllNoLoadPowerMeasurementsDataModel();
    return this.http.post<any>(this.BaseUrl + "insertNo_load_power_measurementsData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertNo_load_power_measurementsData_Model', masterData))
      );
  }


  updateNoLoadPowerMeasurementsData(masterData: any): Observable<any> {
    this.getAllNoLoadPowerMeasurementsDataModel();
    return this.http.post<any>(this.BaseUrl + 'updateNo_load_power_measurementsData_Model', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('updateNo_load_power_measurementsData_Model', masterData))
      );


  }
  DeleteNoLoadPowerMeasurementsData(masterData: any): Observable<any> {
    this.getAllNoLoadPowerMeasurementsDataModel();
    return this.http.post<any>(this.BaseUrl + 'deleteNo_load_power_measurementsData_Model', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteNo_load_power_measurementsData_Model', masterData))
      );

  }
  //************************************************************************************************************************************** */
  //FullLoadMeasurementsData
  getAllFullLoadMeasurementsData() {

    return this.http.get(this.BaseUrl + "selectAllFull_load_measurementsData");
  }
  addAllFullLoadMeasurementsData(masterData: any): Observable<any> {
    this.getAllFullLoadMeasurementsData();
    return this.http.post<any>(this.BaseUrl + "insertFull_load_measurementsData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertNo_load_power_measurementsData_Model', masterData))
      );
  }


  updateFullLoadMeasurementsData(masterData: any): Observable<any> {
    this.getAllFullLoadMeasurementsData();
    return this.http.post<any>(this.BaseUrl + 'updateFull_load_measurementsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('updateNo_load_power_measurementsData_Model', masterData))
      );


  }
  DeleteFullLoadMeasurementsData(masterData: any): Observable<any> {
    this.getAllFullLoadMeasurementsData();
    return this.http.post<any>(this.BaseUrl + 'deleteFull_load_measurementsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteNo_load_power_measurementsData_Model', masterData))
      );

  }
  //************************************************************************************************************************************** */
  //MotorFailureTagData
  getAllMotorFailureTagData() {

    return this.http.get(this.BaseUrl + "selectAllMotor_failure_tagData");
  }
  addAllMotorFailureTagData(masterData: any): Observable<any> {
    this.getAllMotorFailureTagData();
    return this.http.post<any>(this.BaseUrl + "insertMotor_failure_tagData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertMotor_failure_tagData', masterData))
      );
  }


  updateMotorFailureTagData(masterData: any): Observable<any> {
    this.getAllMotorFailureTagData();
    return this.http.post<any>(this.BaseUrl + 'updateMotor_failure_tagData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('updateMotor_failure_tagData', masterData))
      );


  }
  DeleteMotorFailureTagData(masterData: any): Observable<any> {
    this.getAllMotorFailureTagData();
    return this.http.post<any>(this.BaseUrl + 'deleteMotor_failure_tagData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteMotor_failure_tagData', masterData))
      );

  }
  //************************************************************************************************************************************** */
  //MotorBurntoutReasonsData
  getAllMotorBurntoutReasonsData() {

    return this.http.get(this.BaseUrl + "selectAllMotor_burntout_reasonsData");
  }
  addAllMotorBurntoutReasonsData(masterData: any): Observable<any> {
    this.getAllMotorBurntoutReasonsData();
    return this.http.post<any>(this.BaseUrl + "insertMotor_burntout_reasonsData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertMotor_burntout_reasonsData', masterData))
      );
  }
  updateMotorBurntoutReasonsData(masterData: any): Observable<any> {
    this.getAllMotorBurntoutReasonsData();
    return this.http.post<any>(this.BaseUrl + 'updateMotor_burntout_reasonsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('updateMotor_burntout_reasonsData', masterData))
      );
  }
  DeleteMotorBurntoutReasonsData(masterData: any): Observable<any> {
    this.getAllMotorBurntoutReasonsData();
    return this.http.post<any>(this.BaseUrl + 'deleteMotor_burntout_reasonsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteMotor_burntout_reasonsData', masterData))
      );

  }

  //************************************************************************************************************************************** */
  //FailureDetailsData
  getAllMotorFailureDetailsData() {

    return this.http.get(this.BaseUrl + "selectAllMotor_failure_detailsData");
  }
  addAllMotorFailureDetailsData(masterData: any): Observable<any> {
    this.getAllMotorFailureDetailsData();
    return this.http.post<any>(this.BaseUrl + "insertMotor_failure_detailsData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertMotor_failure_detailsData', masterData))
      );
  }
  updateMotorFailureDetailsData(masterData: any): Observable<any> {
    this.getAllMotorFailureDetailsData();
    return this.http.post<any>(this.BaseUrl + 'updateMotor_failure_detailsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('updateMotor_failure_detailsData', masterData))
      );
  }
  DeleteMotorFailureDetailsData(masterData: any): Observable<any> {
    this.getAllMotorFailureDetailsData();
    return this.http.post<any>(this.BaseUrl + 'deleteMotor_failure_detailsData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteMotor_failure_detailsData', masterData))
      );

  }
  //************************************************************************************************************************************** */
  //motor Movement Data
  getAllMotorMovementRegisterData() {

    return this.http.get(this.BaseUrl + "selectAllMotor_movement_registerData");
  }
  addAllMotorMovementRegisterData(masterData: any): Observable<any> {
    this.getAllMotorMovementRegisterData();
    return this.http.post<any>(this.BaseUrl + "insertMotor_movement_registerData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertMotor_movement_registerData', masterData))
      );
  }
  updateMotorMovementRegisterData(masterData: any): Observable<any> {
    this.getAllMotorMovementRegisterData();
    return this.http.post<any>(this.BaseUrl + 'updateMotor_movement_registerData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('updateMotor_movement_registerData', masterData))
      );
  }
  DeleteMotorMovementRegisterData(masterData: any): Observable<any> {
    this.getAllMotorMovementRegisterData();
    return this.http.post<any>(this.BaseUrl + 'deleteMotor_movement_registerData', masterData, httpOptions)
      .pipe(
        catchError(this.handleError('deleteMotor_movement_registerData', masterData))
      );

  }

  //************************************************************************************************************************************** */

    //motor Efficiency Details

  getMotorEfficiencyDetails() {
    return this.http.get(this.BaseUrl + "selectAllMotor_effy_details")
  }
  getCalculateMotorEffyDetails(masterData:any) {
    return this.http.post(this.BaseUrl + "calculateMotor_effy_details", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('calculateMotor_effy_details', masterData))
      );
  }
  calculateAllMotor_effy_details(masterData: any) {
    
    return this.http.post(this.BaseUrl + "calculateAllMotor_effy_details", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('calculateMotor_effy_details', masterData))
      );
  }
  addAllMotorEfficiencyDetails(masterData: any): Observable<any> {
    this.getAllMotorMovementRegisterData();
    return this.http.post<any>(this.BaseUrl + "insertMotor_movement_registerData", masterData, httpOptions)
      .pipe(
        catchError(this.handleError('insertMotor_movement_registerData', masterData))
      );
  }
  //************************************************************************************************************************************** */

  //MotorBasedReport
  getAllFullLoadMeasurementsReport(MotorId:any) {

    return this.http.get(this.BaseUrl + "selectAllFull_load_measurementsData/" + MotorId);
  }

  //************************************************************************************************************************************** */
  //MachineBasedReport
  selectAllMotor_effy_details(Mac_Id: any) {
    return this.http.get(this.BaseUrl + "selectAllMotor_effy_details/" + Mac_Id);
  }

  selectActiveMotor_failure_detailsData(Mac_Id: any) {
    return this.http.get(this.BaseUrl + "selectActiveMotor_failure_detailsData/" + Mac_Id);
  }
  selectAllMotor_effy_detailsCrit() {
    return this.http.get(this.BaseUrl + "selectAllMotor_effy_details/");
  }
  selectActiveMotor_failure_detailsDataCric(MasterData: any) {
    return this.http.post(this.BaseUrl + "selectActiveMotor_failure_detailsData", MasterData, httpOptions);
  }
  //motorFailure
  getAllMotorMovementRegisterDataCric(MasterData:any) {

    return this.http.post(this.BaseUrl + "selectAllMotor_movement_registerData/", MasterData, httpOptions);
  }
  //************************************************************************************************************************************** */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
    this.toastr.error(message);
  }
}
