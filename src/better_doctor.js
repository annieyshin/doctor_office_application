const apiKey = require('./../.env').apiKey;

export class DoctorAPI {

  getDoctors(attr) {
    let name = attr.name;
    let query = attr.query;

    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://www.zillow.com/webservice/GetRegionChildren.htm?&state=${state}&city=${city}&zws-id=${apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("Get", url, true);
      request.send();
    });
  }
}
