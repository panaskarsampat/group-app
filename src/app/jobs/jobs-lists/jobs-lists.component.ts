import { Component, OnInit, OnChanges } from '@angular/core';

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
  selector: 'app-jobs-lists',
  templateUrl: './jobs-lists.component.html',
  styleUrls: ['./jobs-lists.component.css']
})
export class JobsListsComponent implements OnInit, OnChanges {
  jobslist:JobsModels[];
  searchJobList:JobsModels[];
  countrieslist:CountryModels[];
  stateslist:StatesModels[];
  citylist:CityModels[]=[];
  positionlist:DepartmentsModels[];
  worklist:DesignationsModels[];

  startPage : Number;
  paginationLimit:Number;
  designationName:string;
  workExp:number;
  allCities:CityModels[];
  allStates:StatesModels[];
  allCompanies:CompanyModels[];

  message:string;

  constructor(private jobsdataservice:JobsService, private countrydataservice:CountryService,
    private statedataservice:StatesService, private citydataservice:CityService,
    private positiondataservice:DepartmentsService, private workdataservice:DesignationsService, 
    private companydataservice:CompanyService, private data:JobSearchService, private spinner: NgxSpinnerService) { }

  showMoreItems()
  {     
    this.paginationLimit = Number(this.paginationLimit) + 3;        
  }

  loadCountries(){
    this.countrydataservice.getCountries().subscribe(
      data => {
        this.countrieslist=data;        
      },
      err => {
        console.log(err);        
      }
    );
  }

  loadStates(id){    
    this.stateslist=this.allStates.filter((s)=>s.CountryId===+id);
  }

  loadAllStates(){    
    this.statedataservice.getStates().subscribe(
      data => {        
        this.allStates=data;        
      },
      err => {
        console.log(err);        
      }
    );
  }

  loadCities(id){
    this.citylist=this.allCities.filter((c)=>c.StateId===+id);
  }

  loadAllCities(){
    this.citydataservice.getCities().subscribe(
      data => {        
        this.allCities=data;        
      },
      err => {
        console.log(err);        
      }
    );
  }

  loadPositios(){
    this.positiondataservice.getPositions().subscribe(
      data => {
        this.positionlist=data;        
      },
      err => {
        console.log(err);        
      }
    );
  }

  loadWorks(){
    this.workdataservice.getWorks().subscribe(
      data => {
        this.worklist=data;        
      },
      err => {
        console.log(err);        
      }
    );
  }
  
  getCity(id){   
    if(this.allCities!==undefined){
      return this.allCities.find(c=>c.CityId===+id).CityName;
    } 
    
  }

  getState(id){
    if(this.allStates!==undefined){
      return this.allStates.find(s=>s.StateId===+id).StateName;
    }
    
  }

  getCountry(id){
    if(this.countrieslist!==undefined){
      return this.countrieslist.find(s=>s.CountryId===+id).CountryName;
    }
    
  }

  getDesignation(id){
    if(this.worklist!==undefined){
      return this.worklist.find(s=>s.WorkId===+id).WorkName;
    }
    
  }

  getAllCompanies(){
    this.companydataservice.getCompanies().subscribe(
      data => {
        this.allCompanies=data;        
      },
      err => {
        console.log(err);        
      }
    );
  }
  getCompanyName(id){
    if(this.allCompanies!==undefined){     
      return this.allCompanies.find((c)=>c.CompanyId===id).CompanyName;
    }    
  }

  loadJobs(){
    this.spinner.show();
    this.jobsdataservice.getJobs().subscribe(
      data => {
        
        this.jobslist = data; 
        this.searchJobList = data;  
        this.startPage = 0;
        this.paginationLimit = 3;     
        this.spinner.hide();
      },
      err => {
        console.log(err);   
        this.spinner.hide();     
      }
    );
  }
  
  ngOnInit() {
    this.loadCountries();
    this.loadAllStates();
    this.loadAllCities();
    this.getAllCompanies();    
    this.loadPositios();    
    this.loadWorks();    
    this.data.currentMessage.subscribe(msg=>this.reloadJobs(msg));     
    this.loadJobs();
  }
  
  ngOnChanges(){
    
    
  }
  reloadJobs(searchText:string){
    this.spinner.show();
    let sp = searchText.split("|");
        
    if(sp.length===5){
      setTimeout(() => {
        this.jobslist = this.searchJobList.filter(sj=>(sj.WorkId==+sp[4] || +sp[4] == 0) 
        && (sj.PositionId==+sp[3] || +sp[3] == 0)
        && (sj.LocationCountryId==+sp[0] || +sp[0] == 0)
        && (sj.LocationStateId==+sp[1] || +sp[1] == 0)
        && (sj.LocationCityId==+sp[2] || +sp[2] == 0));
        this.spinner.hide();
      },1000);  
      
    }
  }
}
