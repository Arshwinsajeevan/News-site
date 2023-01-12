import { Component, OnInit } from '@angular/core';
import{ApiserviceService} from '../service/apiservice.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private services:ApiserviceService) { }

  topheading:any = [];

  ngOnInit(): void {

    this.services.topheading().subscribe((result:any)=>{
      console.log(result);
      this.topheading=result.articles
      
    })
  }

 

}
