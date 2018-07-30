import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { CountryService } from '../../Country/country.service';
import { CountryModels } from '../../Country/country-models';
import { StatesService } from '../../States/states.service';
import { StatesModels } from '../../States/states-models';
import { CityService } from '../../city/city.service';
import { CityModels } from '../../city/city-models';
import { DepartmentsService } from '../../Departments/departments.service';
import { DepartmentsModels } from '../../Departments/departments-models';
import { DesignationsService } from '../../Designations/designations.service';
import { DesignationsModels } from '../../Designations/designations-models';
import { CompanyService } from '../../company/company.service';
import { CompanyModels } from '../../company/company-models';

import { JobsService } from '../jobs.service';
import { JobsModels } from '../jobs-models';

import { JobSearchService } from '../jobs.search.service';

@Component({
  selector: 'app-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrls: ['./jobs-details.component.css']
})
export class JobsDetailsComponent implements OnInit {
  private sub: any;
  jobId:number;  
  workName:string='';
  positionName:string='';
  companyName:string='';
  aboutCompany:string='';
  cityName:string='';
  stateName:string='';
  countryName:string='';

  constructor(private activateRoute : ActivatedRoute, private jobsdataservice:JobsService, private countrydataservice:CountryService,
    private statedataservice:StatesService, private citydataservice:CityService, private job:JobsModels,
    private positiondataservice:DepartmentsService, private workdataservice:DesignationsService, 
    private companydataservice:CompanyService, private data:JobSearchService, private spinner: NgxSpinnerService) { 
    this.sub = this.activateRoute.params.subscribe(params => {
      this.jobId = +params['id'];      
    });
  }

  loadJobDetails(id){
    this.spinner.show();
    this.jobsdataservice.getJobsById(id).subscribe(
      data=>{
        
        this.job=data;   
        this.getWorkById(data.WorkId);     
        this.getPositionById(data.PositionId);
        this.getCountryById(data.LocationCountryId);
        this.getCityById(data.LocationCityId);
        this.getStateById(data.LocationStateId);
        this.getCompanyById(data.CompanyId);
        this.spinner.hide();
      },
      err => {
        console.log(err);   
        this.spinner.hide();     
      }
    );
  }

  getWorkById(id){
    this.workdataservice.getWorkById(id).subscribe(
      data=>{
        
        this.workName = data.WorkName;
      }
    );
  }

  getPositionById(id){
    this.positiondataservice.getPositionById(id).subscribe(
      data=>{
        this.positionName = data.Position;
      }
    );
  }

  getCountryById(id){
    this.countrydataservice.getCountryById(id).subscribe(
      data=>{
        this.countryName=data.CountryName;
      }
    );
  }

  getStateById(id){
    this.statedataservice.getStateById(id).subscribe(
      data=>{
        this.stateName=data.StateName;
      }
    );
  }

  getCityById(id){
    this.citydataservice.getCityById(id).subscribe(
      data=>{
        this.cityName=data.CityName;
      }
    );
  }

  getCompanyById(id){
    this.companydataservice.getCompanyById(id).subscribe(
      data=>{
        
        this.companyName=data.CompanyName;
        this.aboutCompany=data.AboutCompany;
       
      }
    );
  }

  ngOnInit() {
    this.loadJobDetails(this.jobId);
  }

}
