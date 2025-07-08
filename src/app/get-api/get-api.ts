import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  imports: [CommonModule,FormsModule],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi implements OnInit {

  //instance for httpClient
  constructor(private http: HttpClient){}

  //to get default values into table as no button is using to call get method
  ngOnInit(): void {
    this.getweatherforecast();
  }

  //variable for get method
  weatherList:any[]=[];

  //avariable to store object to send to API
  weatherObj:any={
    "Date": "",
    "TemperatureC": "",
    "TemperatureF": "",
    "Summary": ""
  }

  //**get method** to have data in the table
  getweatherforecast(){
    this.http.get("http://116.203.172.126:1302/weatherforecast").subscribe((res:any)=>{
      this.weatherList=res;
    });
  }

  //**post method** to enter a record into table
  onSave(){
    this.http.post("http://116.203.172.126:1302/weatherforecast",this.weatherObj).subscribe({
       next:(result)=> {
         alert("Record Added successfully");
         this.getweatherforecast()
         this.onReset()
       },
       error:(error)=> {
         alert("Error -" + (error.message || JSON.stringify(error)));
       },
    })

  }
  onReset() {
    this.weatherObj = {
      Date: "",
      TemperatureC: "",
      TemperatureF: "",
      Summary: ""
    };
  }

}
