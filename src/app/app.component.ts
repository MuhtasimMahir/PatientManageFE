import {Component, OnInit} from '@angular/core';
import {Patient} from "./patient";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {PatientService} from "./patient.service";
import {error} from "@angular/compiler-cli/src/transformers/util";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public patients: Patient[];


  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getPatients();
  }

  public getPatients(): void {
    this.patientService.getPatients().subscribe(
      (response: Patient[]) => {
        this.patients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



}
