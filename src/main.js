import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorAPI } from './better_doctor.js';

$(document).ready(function() {
  $('#form-input').submit(function(event) {
    event.preventDefault();
    let doctorName = $('#doctor_name_input').val();
    let doctorSpecialty = $('#specialty_input').val();
    let doctorAddress = $('#address_input').val();
    let doctor = new DoctorAPI();
    let promise = doctor.getDoctors({name: doctorName, specialty: doctorSpecialty, address: doctorAddress});
    promise.then(function(response) {
      let body = JSON.parse(response);
      body.results.forEach(function(doctor) {
        $('#results').append(
        `<div class="card">
          <h1>${doctor.name}</h1>
          <h2> Specialty: ${doctor.specialty}</h2>
          <h2> Address: ${doctor.address}</h2>
        </div>`
        );
      });
    });
  });
});
