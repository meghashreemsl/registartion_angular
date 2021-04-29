import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public User={
    fname:'megha',
    email:'megha@gmail.com',
    dob:'12',
    contactno:'987696868',
    password:'megha987',
    confirmpassword:'megha987'
  }

  constructor() { }

  ngOnInit(): void {
  }

  registration(val){
    console.log(val);
  }

}
