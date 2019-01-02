import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import {Contact} from './contact'
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  //getting ContactService

  getContacts()
  {
    return this.http.get('http://localhost:3000/api/contacts')
      .map(res => res.json());
  }


  //addcontact method
  addContact(newContact)
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/contact',newContact,{headers:headers})
      .map(res => res.json());
  }

  //delete contact method
  deleteContact(id)
  {
    //var headers = new Headers();
    //headers.append('Content-Type','application/json');
    return this.http.delete('http://localhost:3000/api/contact/'+id)
      .map(res => res.json());
  }

}
