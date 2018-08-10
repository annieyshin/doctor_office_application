import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorAPI } from './better_doctor.js';

$(document).ready(function() {
  $('#form-input').submit(function(event) {
    event.preventDefault();
    let doctorName = $('#name_input').val();
    let doctorQuery = $('#query_input').val();
    let doctor = new DoctorAPI();
    let promise = doctor.getDoctors({name: doctorName, query: doctorQuery});
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body.data);
      body.data.forEach(function(doctor) {
        $('#results').append(
        `<div class="card">
          <h1>${doctor.profile.first_name} ${doctor.profile.middle_name} ${doctor.profile.last_name} </h1>
          <h1>${doctor.practices.name} </h1>
          <h2> Specialty: ${doctor.description}</h2>
        </div>`
        );
      });
    });
  });
});
