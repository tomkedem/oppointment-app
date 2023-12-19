import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  
  newAppointmentTitle: String = ""
  newAppointmentDate: Date = new Date()

  appointments: Appointment [] = []

  ngOnInit(): void {
    let saveAppointments = localStorage.getItem("apponitments")
    this.appointments = saveAppointments ? JSON.parse(saveAppointments) : []
  }

  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this. newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment)

      this.newAppointmentTitle = ""
      this.newAppointmentDate = new Date()   
      
      localStorage.setItem("apponitments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1)
    localStorage.setItem("apponitments", JSON.stringify(this.appointments))
  }
}
