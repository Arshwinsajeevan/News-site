import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  technews:any=[]

  ngOnInit(): void {
    this.service.techNews().subscribe((result:any)=>{
      console.log(result);
      this.technews=result.articles
    });
  }

}
