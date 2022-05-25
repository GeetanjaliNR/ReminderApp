import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const options = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  //register
  register(username: any, userid: any, pswd: any) {
    const data = {
      username,
      userid,
      password: pswd,
    };

    return this.http.post('http://localhost:3000/register', data);
  }

  //login

  login(userid: any, pswd: any) {
    const data = {
      userid,
      password: pswd,
    };

    return this.http.post('http://localhost:3000/login', data);
  }

  getOptions() {
    const token = JSON.parse(localStorage.getItem('token') || '');

    let headers = new HttpHeaders();

    if (token) {
      headers = headers.append('x-access-token', token);
      options.headers = headers;
    }
    return options;
  }

  //saveNewEvent

  saveNewEvent(
    currentUserid: any,
    eventName: any,
    eventOccurTime: any,
    eventDesc: any
  ) {
    const data = {
      currentUserid,
      eventName,
      eventOccurTime,
      eventDesc,
    };

    return this.http.post(
      'http://localhost:3000/newEvent',
      data,
      this.getOptions()
    );
  }

  // saveUpdatedEvent
  saveUpdatedEvent(
    id: any,
    eventName: any,
    eventOccurTime: any,
    eventDesc: any
  ) {
    const data = {
      id,
      eventName,
      eventOccurTime,
      eventDesc,
    };
    return this.http.put(
      'http://localhost:3000/updateReminder',
      data,
      this.getOptions()
    );
  }

  viewEvent(userid: any) {
    const data = {
      userid,
    };
    return this.http.post(
      'http://localhost:3000/viewevent',
      data,
      this.getOptions()
    );
  }

  // deleteEvent
  deleteEvent(toDeleteEventId: any) {
    return this.http.delete(
      'http://localhost:3000/deleteEvent/' + toDeleteEventId,
      this.getOptions()
    );
  }

  // getRequiredEvent
  getRequiredEvent(eventId: any) {
    return this.http.get(
      'http://localhost:3000/getEvent/' + eventId,
      this.getOptions()
    );
  }
}
