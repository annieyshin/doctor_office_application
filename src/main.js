import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorAPI } from './better_doctor.js';

$(document).ready(function() {
  $('#form-input').submit(function(event) {
    event.preventDefault();
    let characterName = $('#name_input').val();
    let characterStatus = $('#status_input').val();
    let characterGender = $('#gender_input').val();
    let rick = new RickAPI();
    let promise = rick.getCharacters({name: characterName, status: characterStatus, gender: characterGender});
    promise.then(function(response) {
      let body = JSON.parse(response);
      body.results.forEach(function(character) {
        $('#results').append(
        `<div class="card">
          <h1>${character.name}</h1>
          <h2> Gender: ${character.gender}</h2>
          <h2> Status: ${character.status}</h2>
          <img src="${character.image}" alt="${character.name} image">
        </div>`
        );
      });
    });
  });
});
