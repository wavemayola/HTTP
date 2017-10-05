import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { IPerson } from '../interfaces/iperson';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-removeperson',
  templateUrl: './removeperson.component.html',
  styleUrls: ['./removeperson.component.css']
})
export class RemovepersonComponent implements OnInit {

  baseURL = 'https://waybe-project.firebaseio.com/';
  rootNode = 'people';
  refID: any;
  delete = true;

  fname: string;
  lname: string;

  person: object;

  peopleCollection: Array<IPerson> = [];

  constructor(private dbService: DbService) { }

  ngOnInit() {
  }
  
  deleteData(id){
      this.refID = id;
      this.dbService.deleteData(`${this.baseURL}/${this.rootNode}/${this.refID}.json`)
       .subscribe(
         (response) => console.log(response),
         (error) => console.log(error)
       );
       
  }
  
}
