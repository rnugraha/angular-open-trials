import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {
  heroId: String; 

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.heroId = this.route.snapshot.paramMap.get('id');
  }

}
