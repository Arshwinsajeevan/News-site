import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  sportsnews:any=[]

  ngOnInit(): void {
    this.service.sportsNews().subscribe((result:any)=>{
      console.log(result);
      this.sportsnews=result.articles
      
    })
  }

}
