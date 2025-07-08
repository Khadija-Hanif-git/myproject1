import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-calls',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './api-calls.html',
  styleUrls: ['./api-calls.css']
})
export class APICALLS implements OnInit {

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUser();
  }

  //GET METHOD

  busUserList: any[] = [];
  getUser() {
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((result: any) => {
      this.busUserList = result.data || [];
    });
  }

  // POST METHOD
  
    busUserObj: any = {
    userId: 0,
    userName: "",
    emailId: "",
    fullName: "",
    role: "User", // default role
    createdDate: new Date().toISOString(),
    password: "",
    projectName: "TestProject",
    refreshToken: "",
    refreshTokenExpiryTime: new Date().toISOString()
  };

  onSave() {
    // Set/Update timestamps
    this.busUserObj.createdDate = new Date().toISOString();
    this.busUserObj.refreshTokenExpiryTime = new Date().toISOString();

    this.http.post("https://api.freeprojectapi.com/api/BusBooking/AddNewUser", this.busUserObj).subscribe({
      next: (result: any) => {
          alert("Record Added Successfully");
          this.getUser();
          this.onReset();
      },
      error: (error) => {
        console.error(error);
        alert("Error: " + (error.error?.message || error.message));
      }
    });
  }

  onReset() {
    this.busUserObj = {
      userId: 0,
      userName: "",
      emailId: "",
      fullName: "",
      role: "User",
      createdDate: new Date().toISOString(),
      password: "",
      projectName: "TestProject",
      refreshToken: "",
      refreshTokenExpiryTime: new Date().toISOString()
    };
  }

  // UPDATE METHOD

  onEdit(item:any){
    this.busUserObj={...item};
  }
  onUpdate(){
    console.log(this.busUserObj);
    debugger;
    this.http.put("https://api.freeprojectapi.com/api/BusBooking/UpdateUser?id=" +this.busUserObj.userId,this.busUserObj).subscribe({
    // this.http.put(`https://api.freeprojectapi.com/api/BusBooking/UpdateUser?id=${this.busUserObj.userId}`,this.busUserObj).subscribe({
      next:(result)=>{
      console.log(" Update error:",result);
      alert(" User updated successfully.");
      this.getUser();   
      this.onReset();
      },
      error:(error)=>{
      console.error(" Update error:", error);
      alert(" Update failed: " + (error.message || JSON.stringify(error)));
      }
    })
  }
  //DELETE METHOD

onDelete(id:number){
  console.log(this.busUserObj)
  const isDelete =confirm("Are you sure to delete the record?");
  this.http.delete("https://api.freeprojectapi.com/api/BusBooking/DeleteUserByUserId?id=" + id).subscribe({
    next:(result)=>{
      console.log(result);
      alert(" record deleted successfully.");
      this.getUser();
    },
    error:(error)=>{
      console.error(error);
      alert(" Update failed: " + (error.message || JSON.stringify(error)));
    }
  })
}

// update and delete method
//  blocked by the browser due to CORS policy
//  your API call reached the server, but the server rejected it silently, without any meaningful message


// POST: 405 Method Not Allowed (Use of the request method is not allowed on the resource.)
// UPDATE: 405 Method Not Allowed (Use of the request method is not allowed on the resource.)
 }



