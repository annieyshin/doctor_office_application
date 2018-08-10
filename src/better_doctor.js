const apiKey = require('./../.env').apiKey;

export class DoctorAPI {

  getDoctors(attr) {
    let name = attr.name;
    let query = attr.query;

    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}&location=or-portland&limit=10&user_key=${apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("Get", url, true);
      request.send();
    });
  }
}
