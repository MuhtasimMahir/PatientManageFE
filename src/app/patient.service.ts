import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "./patient";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiServerUrl}/patient/all`);
  }

  public addPatients(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiServerUrl}/patient/add`, patient);
  }

  public updatePatients(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiServerUrl}/patient/update`, patient);
  }

  public deletePatients(patientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/patient/delete/${patientId}`);
  }

}
