import { Component, OnInit } from '@angular/core';
import { PaysService } from 'src/services/pays.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'trade-center';
  constructor(private paysService: PaysService){

  }
  ngOnInit(){
    this.paysService.initComponent();
  }
}
