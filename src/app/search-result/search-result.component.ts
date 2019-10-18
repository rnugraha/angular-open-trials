import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  
  trial = {
    id: 'foo'
  }

  trialLink  =  ''

  constructor() { }

  ngOnInit() {
    this.trialLink = '/trial/' + this.trial.id
  }

}
