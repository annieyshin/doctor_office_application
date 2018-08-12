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
      let website = doctor.practices[0].website;
        for (let i = 0; i <= 0; i++) {
          if (website !== undefined) {
            website = doctor.practices[0].website;
          }
          else {
            website = "not available"
          }
            $('#results').append(
            `<div class="card">
              <h1> Name: ${doctor.profile.first_name} ${doctor.profile.last_name} </h1>
              <h3>Contact Info: ${doctor.practices[0].phones[i].number} </h3>
              <h3> Website: ${website}</h3>
              <h4>Address: ${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state}, ${doctor.practices[0].visit_address.zip} </h4>
            </div>`
            );
          }
      });
    });
  });
});
