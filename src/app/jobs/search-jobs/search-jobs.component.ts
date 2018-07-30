import { Component, OnInit } from '@angular/core';

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

import { JobSearchService } from '../jobs.search.service';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent implements OnInit {
  message:string;
  selectedCountry:number;
  selectedState:number;
  selectedCity:number;
  selectedPosition:number;
  selectedWork:number;
  countrieslist:CountryModels[];
  stateslist:StatesModels[];
  citylist:CityModels[]=[];
  positionlist:DepartmentsModels[];
  worklist:DesignationsModels[];
  allCities:CityModels[];
  allStates:StatesModels[];
  allCompanies:CompanyModels[];

  constructor(private data:JobSearchService, private countrydataservice:CountryService,
    private statedataservice:StatesService, private citydataservice:CityService,
    private positiondataservice:DepartmentsService, private workdataservice:DesignationsService, 
    private companydataservice:CompanyService) { }

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

  ngOnInit() {
    this.loadCountries();
    this.loadAllStates();
    this.loadAllCities();
    this.getAllCompanies();
    this.selectedCountry=0;    
    this.selectedState=0;
    this.selectedCity=0;
    this.loadPositios();
    this.selectedPosition=0;
    this.loadWorks();
    this.selectedWork=0;    
  }
  
  searchJobs(){  
     
    this.data.changeMessage(this.selectedCountry.toString()+"|"+this.selectedState.toString()+"|"+ this.selectedCity.toString()+"|"+this.selectedPosition.toString()+"|"+this.selectedWork.toString());    
  }

  onCountrySelect(countryid) {    
    this.loadStates(countryid);
  }

  onStateSelect(stateid) {    
    this.loadCities(stateid);
  }

}
