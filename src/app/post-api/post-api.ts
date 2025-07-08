import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule,CommonModule],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css'
})
export class PostApi implements OnInit {

 //instance for httpClient
  constructor(private http: HttpClient){}

  //to get default values into table as no button is using to call get method
  ngOnInit(): void {
    this.getUser();
  }

  // **GET METHOD**

  //variable for get method
  userList:any[]=[];

  //**get method** to have data in the table
  getUser(){
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((result:any)=>{
      this.userList=result;
    });
  }

  // **POST METHOD**

  userObj:any={
    "userId": 0,
    "emailId":  "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }

  onSave(){
    console.log("Saving user:", this.userObj);
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObj).subscribe({
      next:(result)=>{
        console.log(result);
        alert("Record added successfully");
        this.getUser();
        this.onReset();
      },
      error:(error)=>{
        console.log(error);
        alert("Error - " + (error.message || JSON.stringify(error)));
      },
    })
  }

  onReset(){
      this.userObj={
    "userId": 0,
    "emailId":  "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }
  }

  // **Update Method**
  onEdit(item:any){
    this.userObj={...item};
  }

  onUpdate(){
  console.log(" Sending update request with:", this.userObj);
  this.http.put(`https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=${this.userObj.userId}`,this.userObj).subscribe({
    next: (result) => {
      console.log(" Update response from server:", result)
      
      alert("record updated successfully.");
      this.getUser();   
      this.onReset();
    },
    error: (error) => {
      console.error(" Update error:", error);
      alert(" Update failed: " + (error.message || JSON.stringify(error)));
    }
  });
}

  // **DELETE METHOD**

  onDelete(id:number){
    const isDelet =confirm("Are you sure to delete the record?");
    
    this.http.delete(`https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=${id}`).subscribe({
      next:(result)=>{
        console.log(result);
        alert("Record Deleted successfully")
        this.getUser();
      },
      error:(error)=>{
        console.log(error)
        alert("Error -" + (error.message || JSON.stringify(error)))
      }
    })
  }

}


/* POST and UPDATE: 415 Unsupported Media Type (The media format of the requested data is not supported by the server.)
  {
    "type": "https://tools.ietf.org/html/rfc9110#section-15.5.16",
    "title": "Unsupported Media Type",
    "status": 415,
    "traceId": "00-bb0efc4d239501cc43657100dd767dec-3b99b91743647211-00"
}  */


// DELETE: 404 Not Found (Requested resource could not be found.)
